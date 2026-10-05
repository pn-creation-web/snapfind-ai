import { useEffect, useState } from 'react';
import { useRouter, useRouterState } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { BrandLoader } from './BrandLoader';

export function NavigationLoading() {
  const busy = useRouterState({ select: s => s.isLoading });
  const router = useRouter();
  const [offline, setOffline] = useState(false);
  const [slow, setSlow] = useState(false);
  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    update(); window.addEventListener('online', update); window.addEventListener('offline', update);
    return () => { window.removeEventListener('online', update); window.removeEventListener('offline', update); };
  }, []);
  useEffect(() => {
    setSlow(false);
    if (!busy) return;
    const timer = setTimeout(() => setSlow(true), 12000);
    return () => clearTimeout(timer);
  }, [busy]);
  return <>
    {offline && <div role="status" className="border-b border-border bg-secondary px-5 py-3 text-center text-sm">You’re offline. Local demos remain available; new pages and photos may not load.</div>}
    {busy && <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-5 bg-background/95" aria-busy="true"><BrandLoader label="Loading page" />{(slow || offline) && <div className="max-w-sm px-5 text-center"><p className="text-sm text-muted-foreground">{offline ? 'Reconnect to load this page.' : 'This is taking longer than usual. Check your connection.'}</p><Button className="mt-4" variant="outline" onClick={() => router.invalidate()}>Try again</Button></div>}</div>}
  </>;
}