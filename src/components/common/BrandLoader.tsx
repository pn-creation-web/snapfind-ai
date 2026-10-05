import { Aperture } from 'lucide-react';
import { site } from '@/data/site';

export function BrandLoader({ fullPage = false, label = 'Loading' }: { fullPage?: boolean; label?: string }) {
  return <div role="status" aria-label={`${label} — ${site.fullName}`} className={`flex items-center justify-center ${fullPage ? 'min-h-[60dvh] bg-background' : 'h-full w-full'}`}>
    <div className="relative flex size-16 shrink-0 items-center justify-center">
      <span className="absolute inset-0 animate-spin rounded-full border-2 border-border border-t-primary motion-reduce:animate-none" aria-hidden="true" />
      <span className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Aperture size={28} aria-hidden="true" /></span>
    </div>
    <span className="sr-only">{label}</span>
  </div>;
}