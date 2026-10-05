import { createFileRoute } from '@tanstack/react-router';
import { Container, DemoNotice } from '@/components/common/Shared';
import { pageHead } from '@/data/seo';
import { stats, activity } from '@/data/mock/analytics';
import { events } from '@/data/mock/events';

export const Route = createFileRoute('/dashboard')({
  head: () => pageHead('Photographer workspace demo', 'Preview event stats, gallery activity, and recent events in a sample photographer workspace.', '/dashboard'),
  component: Dashboard,
});

function Dashboard() {
  // BACKEND TODO: GET dashboard stats, activity, and events for the signed-in photographer.
  const max = Math.max(...activity);
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold">Welcome back</h1>
      <p className="mt-2 mb-6 text-muted-foreground">Here is how your galleries are doing.</p>
      <DemoNotice>Demo workspace · All numbers are sample data.</DemoNotice>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-card p-5">
            <p className="text-xs text-muted-foreground">{s.label}</p>
            <p className="mt-2 text-2xl font-bold">{s.value}</p>
            <p className="mt-1 text-xs text-success">{s.change}</p>
          </div>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-border bg-card p-6" aria-label="Gallery views over 12 months">
        <h2 className="mb-6 font-semibold">Gallery activity</h2>
        <div className="flex h-40 items-end gap-2">
          {activity.map((v, i) => (
            <div key={i} className="flex-1 rounded-t bg-primary/80" style={{ height: `${(v / max) * 100}%` }} />
          ))}
        </div>
      </section>
      <section className="mt-8">
        <h2 className="mb-4 font-semibold">Recent events</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e) => (
            <article key={e.id} className="overflow-hidden rounded-lg border border-border bg-card">
              <img src={e.cover} alt={e.name} loading="lazy" className="h-36 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{e.name}</h3>
                <p className="text-xs text-muted-foreground">{e.location} · {e.photos} photos</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
