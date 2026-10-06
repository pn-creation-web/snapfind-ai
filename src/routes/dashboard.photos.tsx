import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { Container } from '@/components/common/Shared';
import { UploadZone } from '@/components/dashboard/UploadZone';
import { useDemoEvents } from '@/components/dashboard/DemoEventsProvider';
import { pageHead } from '@/data/seo';

export const Route = createFileRoute('/dashboard/photos')({
  validateSearch: z.object({ event: z.string().optional() }),
  head: () => pageHead('Upload photos — workspace demo', 'Try drag-and-drop photo uploads with previews and progress in the demo workspace.', '/dashboard/photos'),
  component: PhotosPage,
});

function PhotosPage() {
  const { events, addPhotos } = useDemoEvents();
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const eventId = search.event ?? events[0]?.id;
  const current = events.find(e => e.id === eventId);
  return <Container className="py-10">
    <h1 className="text-3xl font-bold">Upload photos</h1>
    <p className="mt-1 text-muted-foreground">Uploads are simulated — your files never leave this device.</p>
    <div className="mt-6 max-w-sm space-y-1.5">
      <label htmlFor="upload-event" className="text-sm font-medium">Add to event</label>
      <select id="upload-event" className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm" value={eventId} onChange={e => navigate({ search: { event: e.target.value } })}>{events.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}</select>
      {current && <p className="text-xs text-muted-foreground">{current.photos} photos in this event</p>}
    </div>
    <div className="mt-6"><UploadZone key={eventId} onComplete={n => eventId && addPhotos(eventId, n)} /></div>
  </Container>;
}
