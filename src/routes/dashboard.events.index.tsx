import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { Plus, Search, Pencil, CalendarX } from 'lucide-react';
import { Container } from '@/components/common/Shared';
import { AppImage } from '@/components/common/AppImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EventFormDialog } from '@/components/dashboard/EventFormDialog';
import { useDemoEvents } from '@/components/dashboard/DemoEventsProvider';
import { eventTypes } from '@/data/event-options';
import { pageHead } from '@/data/seo';
import type { Event } from '@/types/common';

export const Route = createFileRoute('/dashboard/events/')({
  head: () => pageHead('Events — workspace demo', 'Browse sample events and try creating or editing an event in the demo workspace.', '/dashboard/events'),
  component: EventsPage,
});

function EventsPage() {
  const { events } = useDemoEvents();
  const [query, setQuery] = useState('');
  const [type, setType] = useState('All');
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Event | undefined>();
  const list = events.filter(e => (type === 'All' || e.type === type) && `${e.name} ${e.location}`.toLowerCase().includes(query.toLowerCase()));
  const openForm = (e?: Event) => { setEditing(e); setOpen(true); };

  return <Container className="py-10">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div><h1 className="text-3xl font-bold">Events</h1><p className="mt-1 text-muted-foreground">{events.length} sample events</p></div>
      <Button onClick={() => openForm()}><Plus />Create event</Button>
    </div>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <div className="relative flex-1"><Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" /><Input aria-label="Search events" placeholder="Search by name or location" className="pl-9" value={query} onChange={e => setQuery(e.target.value)} /></div>
      <div className="flex flex-wrap gap-1" role="group" aria-label="Filter by type">{['All', ...eventTypes].map(t => <Button key={t} size="sm" variant={type === t ? 'default' : 'outline'} aria-pressed={type === t} onClick={() => setType(t)}>{t}</Button>)}</div>
    </div>
    {list.length === 0 ? <div className="mt-10 flex flex-col items-center rounded-lg border border-dashed border-border py-16 text-center"><CalendarX className="size-8 text-muted-foreground" aria-hidden="true" /><p className="mt-3 font-medium">No events match</p><Button variant="link" onClick={() => { setQuery(''); setType('All'); }}>Clear filters</Button></div> :
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(e => <article key={e.id} className="overflow-hidden rounded-lg border border-border bg-card">
          <AppImage src={e.cover} alt={e.name} className="h-44 w-full object-cover" />
          <div className="p-5">
            <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground"><span>{e.type} · {e.date}</span><span className="rounded-full bg-secondary px-2 py-0.5">{e.visibility}</span></div>
            <h2 className="mt-2 text-lg font-semibold">{e.name}</h2>
            <p className="text-sm text-muted-foreground">{e.location} · {e.photos} photos</p>
            <div className="mt-4 flex gap-2"><Button size="sm" asChild><Link to="/dashboard/events/$eventId" params={{ eventId: e.id }}>Open</Link></Button><Button size="sm" variant="outline" onClick={() => openForm(e)}><Pencil />Edit</Button></div>
          </div>
        </article>)}
      </div>}
    <EventFormDialog open={open} onOpenChange={setOpen} event={editing} />
  </Container>;
}
