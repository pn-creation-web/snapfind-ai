import { createFileRoute, Link } from '@tanstack/react-router';
import { Container } from '@/components/common/Shared';
import { AppImage } from '@/components/common/AppImage';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { useDemoEvents } from '@/components/dashboard/DemoEventsProvider';
import { pageHead } from '@/data/seo';
import { stats } from '@/data/mock/analytics';

export const Route = createFileRoute('/dashboard/')({
  head: () => pageHead('Photographer workspace demo', 'Preview event stats, gallery activity, and recent events in a sample photographer workspace.', '/dashboard'),
  component: Overview,
});

function Overview() {
  // BACKEND TODO: GET dashboard stats and recent events for the signed-in photographer.
  const { events } = useDemoEvents();
  return <Container className="py-10">
    <h1 className="text-3xl font-bold">Welcome back</h1>
    <p className="mt-2 text-muted-foreground">Here is how your galleries are doing. All numbers are sample data.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map(s => <div key={s.label} className="rounded-lg border border-border bg-card p-5"><p className="text-xs text-muted-foreground">{s.label}</p><p className="mt-2 text-2xl font-bold">{s.value}</p><p className="mt-1 text-xs text-success">{s.change}</p></div>)}
    </div>
    <ActivityChart className="mt-8" />
    <section className="mt-8">
      <h2 className="mb-4 font-semibold">Recent events</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {events.slice(0, 4).map(e => <Link key={e.id} to="/dashboard/events/$eventId" params={{ eventId: e.id }} className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring">
          <AppImage src={e.cover} alt={e.name} className="h-36 w-full object-cover" />
          <div className="p-4"><h3 className="font-semibold">{e.name}</h3><p className="text-xs text-muted-foreground">{e.location} · {e.photos} photos</p></div>
        </Link>)}
      </div>
    </section>
  </Container>;
}
