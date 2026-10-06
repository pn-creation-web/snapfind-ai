import { activity } from '@/data/mock/analytics';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function ActivityChart({ title = 'Gallery activity', data = activity, className = '' }: { title?: string; data?: number[]; className?: string }) {
  const max = Math.max(...data);
  return <section className={`rounded-lg border border-border bg-card p-6 ${className}`} aria-label={`${title} over 12 months`}>
    <h2 className="mb-6 font-semibold">{title}</h2>
    <div className="flex h-40 items-end gap-1.5 sm:gap-2">
      {data.map((v, i) => <div key={i} className="flex h-full flex-1 flex-col justify-end gap-1"><div title={`${months[i]}: ${v}`} className="rounded-t bg-primary/80" style={{ height: `${(v / max) * 100}%` }} /><span className="text-center text-[10px] text-muted-foreground">{months[i][0]}</span></div>)}
    </div>
  </section>;
}
