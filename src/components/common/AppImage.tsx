import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { ImageOff, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandLoader } from './BrandLoader';

export function AppImage({ src, alt, className = '', onLoad, onError, loading: _loading, ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  const home = useRouterState({ select: s => s.location.pathname === '/' });
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const image = ref.current;
    setState(image?.complete && image.naturalWidth > 0 ? 'loaded' : 'loading');
  }, [src, attempt]);
  return <span className={`app-image relative isolate block overflow-hidden ${className}`}>
    <img {...props} key={`${src}-${attempt}`} ref={ref} src={src} alt={alt} loading={home ? 'eager' : 'lazy'} decoding="async" className={`h-full w-full ${state === 'loaded' ? '' : 'opacity-0'}`} onLoad={e => { setState('loaded'); onLoad?.(e); }} onError={e => { setState('error'); onError?.(e); }} />
    {state === 'loading' && <span className="absolute inset-0 flex items-center justify-center bg-muted"><BrandLoader label="Loading photo" /></span>}
    {state === 'error' && <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted text-muted-foreground"><ImageOff className="size-5" aria-hidden="true" /><Button variant="secondary" size="sm" aria-label={`Retry loading ${alt ?? 'photo'}`} onClick={e => { e.stopPropagation(); setState('loading'); setAttempt(v => v + 1); }}><RotateCcw className="size-3" />Retry</Button></span>}
  </span>;
}