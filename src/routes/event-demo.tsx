import { createFileRoute } from '@tanstack/react-router';
import { Copy, QrCode } from 'lucide-react';
import { toast } from 'sonner';
import { Container, DemoNotice } from '@/components/common/Shared';
import { Button } from '@/components/ui/button';
import { pageHead } from '@/data/seo';
import { events } from '@/data/mock/events';

export const Route = createFileRoute('/event-demo')({
  head: () => pageHead('QR event access demo', 'See how guests scan a QR code to open an event gallery and find their photos.', '/event-demo'),
  component: EventDemo,
});

function EventDemo() {
  const event = events[0];
  // BACKEND TODO: GET event share URL and generated QR code by event ID.
  const copy = async () => {
    try { await navigator.clipboard.writeText(`${window.location.origin}/demo-gallery`); toast.success('Event link copied.'); }
    catch { toast.error('Copy is unavailable in this browser.'); }
  };
  return (
    <Container className="grid gap-10 py-16 md:grid-cols-2 md:items-center">
      <div>
        <h1 className="text-4xl font-bold">Scan. Smile. Find.</h1>
        <p className="mt-4 text-muted-foreground">Guests at {event?.name} scan one code to open the gallery on their phone.</p>
        <div className="mt-6"><DemoNotice>Placeholder QR code · Not a working link.</DemoNotice></div>
        <Button className="mt-6" onClick={copy}><Copy />Copy event link</Button>
      </div>
      <div className="mx-auto flex size-64 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
        <QrCode className="size-40 text-foreground" aria-label="Placeholder QR code" />
      </div>
    </Container>
  );
}
