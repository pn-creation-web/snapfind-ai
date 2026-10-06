import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/common/Shared';
import { AppImage } from '@/components/common/AppImage';
import { Button } from '@/components/ui/button';
import { useDemoEvents } from '@/components/dashboard/DemoEventsProvider';
import { photos } from '@/data/mock/photos';

export const Route = createFileRoute('/dashboard/gallery/$galleryId')({
  head: () => ({ meta: [{ title: 'Gallery manager — workspace demo' }, { name: 'description', content: 'Review sample gallery photos in the demo workspace.' }, { name: 'robots', content: 'noindex' }] }),
  component: GalleryManager,
});

function GalleryManager() {
  const { galleryId } = Route.useParams();
  // BACKEND TODO: GET gallery photos by gallery ID with signed thumbnail URLs.
  const event = useDemoEvents().events.find(e => e.id === galleryId);
  return <Container className="py-10">
    <Button variant="ghost" size="sm" asChild><Link to="/dashboard/events"><ArrowLeft />All events</Link></Button>
    <div className="mt-4 flex flex-wrap items-end justify-between gap-4"><div><h1 className="text-3xl font-bold">{event?.name ?? 'Sample gallery'}</h1><p className="text-muted-foreground">Showing sample photos</p></div><Button variant="outline" asChild><Link to="/demo-gallery">Open guest view</Link></Button></div>
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{photos.map(p => <figure key={p.id}><AppImage src={p.src} alt={p.title} className="aspect-square w-full rounded-md object-cover" /><figcaption className="mt-1 truncate text-xs text-muted-foreground">{p.title}</figcaption></figure>)}</div>
  </Container>;
}
