import { createFileRoute } from '@tanstack/react-router';
import { Container } from '@/components/common/Shared';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { useDemoEvents } from '@/components/dashboard/DemoEventsProvider';
import { pageHead } from '@/data/seo';

export const Route = createFileRoute('/dashboard/analytics')({
  head: () => pageHead('Analytics — workspace demo', 'Sample gallery views, searches, and downloads in the demo workspace.', '/dashboard/analytics'),
  component: Analytics,
});

const searches = [12, 18, 15, 26, 22, 31, 28, 40, 35, 44, 39, 52];

function Analytics() {
  // BACKEND TODO: GET analytics time series and per-event totals.
  const { events } = useDemoEvents();
  const max = Math.max(...events.map(e => e.views), 1);
  return <Container className="py-10">
    <h1 className="text-3xl font-bold">Analytics</h1>
    <p className="mt-1 text-muted-foreground">Sample data for demonstration.</p>
    <div className="mt-8 grid gap-6 lg:grid-cols-2"><ActivityChart title="Gallery views" /><ActivityChart title="Face searches" data={searches} /></div>
    <section className="mt-8 rounded-lg border border-border bg-card p-6"><h2 className="mb-4 font-semibold">Views by event</h2>
      <ul className="space-y-3">{events.map(e => <li key={e.id}><div className="flex justify-between text-sm"><span>{e.name}</span><span className="text-muted-foreground">{e.views}</span></div><div className="mt-1 h-2 rounded bg-muted"><div className="h-2 rounded bg-primary" style={{ width: `${(e.views / max) * 100}%` }} /></div></li>)}</ul>
    </section>
  </Container>;
}
