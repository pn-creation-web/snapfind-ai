import { useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Pencil, Upload, QrCode, Images } from 'lucide-react';
import { Container } from '@/components/common/Shared';
import { AppImage } from '@/components/common/AppImage';
import { Button } from '@/components/ui/button';
import { EventFormDialog } from '@/components/dashboard/EventFormDialog';
import { useDemoEvents } from '@/components/dashboard/DemoEventsProvider';

export const Route = createFileRoute('/dashboard/events/$eventId')({
  head: () => ({ meta: [{ title: 'Event details — workspace demo' }, { name: 'description', content: 'Sample event details, sharing, and uploads in the demo workspace.' }, { name: 'robots', content: 'noindex' }] }),
  component: EventDetails,
});

function EventDetails() {
  const { eventId } = Route.useParams();
  // BACKEND TODO: GET event details by event ID.
  const event = useDemoEvents().events.find(e => e.id === eventId);
  const [open, setOpen] = useState(false);
  if (!event) return <Container className="py-16 text-center"><h1 className="text-2xl font-bold">Event not found</h1><p className="mt-2 text-muted-foreground">It may have been created in an earlier session.</p><Button className="mt-6" asChild><Link to="/dashboard/events">Back to events</Link></Button></Container>;
  return <Container className="py-10">
    <Button variant="ghost" size="sm" asChild><Link to="/dashboard/events"><ArrowLeft />All events</Link></Button>
    <div className="mt-4 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <AppImage src={event.cover} alt={event.name} className="aspect-[16/10] w-full rounded-lg object-cover" />
      <div>
        <p className="text-sm text-muted-foreground">{event.type} · {event.date} · {event.visibility}</p>
        <h1 className="mt-1 text-3xl font-bold">{event.name}</h1>
        <p className="mt-1 text-muted-foreground">{event.location}</p>
        <p className="mt-4">{event.description || 'No description yet.'}</p>
        <dl className="mt-6 grid grid-cols-2 gap-4">{[['Photos', event.photos], ['Gallery views', event.views]].map(([k, v]) => <div key={k} className="rounded-lg border border-border p-4"><dt className="text-xs text-muted-foreground">{k}</dt><dd className="text-xl font-bold">{v}</dd></div>)}</dl>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button onClick={() => setOpen(true)}><Pencil />Edit</Button>
          <Button variant="outline" asChild><Link to="/dashboard/photos" search={{ event: event.id }}><Upload />Upload photos</Link></Button>
          <Button variant="outline" asChild><Link to="/dashboard/gallery/$galleryId" params={{ galleryId: event.id }}><Images />View gallery</Link></Button>
          <Button variant="outline" asChild><Link to="/event-demo"><QrCode />QR access</Link></Button>
        </div>
      </div>
    </div>
    <EventFormDialog open={open} onOpenChange={setOpen} event={event} />
  </Container>;
}
