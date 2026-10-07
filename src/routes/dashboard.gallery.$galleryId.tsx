import { useMemo, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ImageOff } from 'lucide-react';
import { Container } from '@/components/common/Shared';
import { AppImage } from '@/components/common/AppImage';
import { Button } from '@/components/ui/button';
import { useDemoEvents } from '@/components/dashboard/DemoEventsProvider';
import { photos } from '@/data/mock/photos';

export const Route = createFileRoute('/dashboard/gallery/$galleryId')({
  head: () => ({ meta: [{ title: 'Gallery manager — workspace demo' }, { name: 'description', content: 'Sort and filter sample and uploaded gallery photos in the demo workspace.' }, { name: 'robots', content: 'noindex' }] }),
  component: GalleryManager,
});

type Row = { id: string; src: string; filename: string; type: string; uploadedAt: string; uploaded: boolean };
const typeLabel = (t: string) => t.replace('image/', '').toUpperCase().replace('JPEG', 'JPG');
const sorts = { newest: 'Newest first', oldest: 'Oldest first', az: 'Filename A–Z', za: 'Filename Z–A' } as const;
type SortKey = keyof typeof sorts;

function GalleryManager() {
  const { galleryId } = Route.useParams();
  const { events, uploads } = useDemoEvents();
  const event = events.find(e => e.id === galleryId);
  const [sort, setSort] = useState<SortKey>('newest');
  const [type, setType] = useState('All');
  const [source, setSource] = useState<'all' | 'sample' | 'uploaded'>('all');

  // BACKEND TODO: GET gallery photos with filename, MIME type, upload date and signed thumbnail URLs.
  const rows = useMemo<Row[]>(() => [
    ...uploads.filter(u => u.eventId === galleryId).map(u => ({ id: u.id, src: u.thumb, filename: u.filename, type: u.type, uploadedAt: u.uploadedAt, uploaded: true })),
    ...photos.map((p, i) => ({ id: p.id, src: p.src, filename: `${p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.jpg`, type: 'image/jpeg', uploadedAt: new Date(Date.UTC(2026, 8, 20, 18, i * 7)).toISOString(), uploaded: false })),
  ], [uploads, galleryId]);
  const types = ['All', ...new Set(rows.map(r => typeLabel(r.type)))];
  const list = rows
    .filter(r => (type === 'All' || typeLabel(r.type) === type) && (source === 'all' || (source === 'uploaded') === r.uploaded))
    .sort((a, b) => sort === 'newest' ? b.uploadedAt.localeCompare(a.uploadedAt) : sort === 'oldest' ? a.uploadedAt.localeCompare(b.uploadedAt) : sort === 'az' ? a.filename.localeCompare(b.filename) : b.filename.localeCompare(a.filename));
  const select = 'h-9 rounded-md border border-input bg-background px-3 text-sm';

  return <Container className="py-10">
    <Button variant="ghost" size="sm" asChild><Link to="/dashboard/events"><ArrowLeft />All events</Link></Button>
    <div className="mt-4 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-3xl font-bold">{event?.name ?? 'Sample gallery'}</h1><p className="text-muted-foreground">{list.length} of {rows.length} photos</p></div><Button variant="outline" asChild><Link to="/demo-gallery">Open guest view</Link></Button></div>
    <div className="mt-6 flex flex-wrap items-end gap-3 border-y border-border py-4">
      <label className="grid gap-1 text-xs font-medium">Sort by<select className={select} value={sort} onChange={e => setSort(e.target.value as SortKey)}>{Object.entries(sorts).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label>
      <label className="grid gap-1 text-xs font-medium">Image type<select className={select} value={type} onChange={e => setType(e.target.value)}>{types.map(t => <option key={t}>{t}</option>)}</select></label>
      <div className="flex gap-1" role="group" aria-label="Photo source">{(['all', 'sample', 'uploaded'] as const).map(s => <Button key={s} size="sm" variant={source === s ? 'default' : 'outline'} aria-pressed={source === s} onClick={() => setSource(s)} className="capitalize">{s}</Button>)}</div>
    </div>
    {list.length === 0 ? <div className="mt-10 flex flex-col items-center py-12 text-center"><ImageOff className="size-8 text-muted-foreground" /><p className="mt-3 font-medium">No photos match these filters</p><Button variant="link" onClick={() => { setType('All'); setSource('all'); }}>Clear filters</Button></div> :
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{list.map(p => <figure key={p.id}>
        {p.src ? <AppImage src={p.src} alt={p.filename} className="aspect-square w-full rounded-md object-cover" /> : <div className="flex aspect-square items-center justify-center rounded-md bg-secondary"><ImageOff className="text-muted-foreground" /></div>}
        <figcaption className="mt-1 text-xs"><span className="block truncate font-medium">{p.filename}</span><span className="text-muted-foreground">{typeLabel(p.type)} · {new Date(p.uploadedAt).toLocaleDateString()}{p.uploaded && ' · Uploaded'}</span></figcaption>
      </figure>)}</div>}
  </Container>;
}
