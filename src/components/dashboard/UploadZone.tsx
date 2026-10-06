import { useEffect, useRef, useState, type DragEvent } from 'react';
import { UploadCloud, X, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

type Item = { id: string; file: File; preview: string; progress: number; status: 'queued' | 'uploading' | 'done' | 'error' | 'cancelled'; error?: string | undefined };
const MAX = 15 * 1024 * 1024;
const TYPES = ['image/jpeg', 'image/png', 'image/webp'];

export function UploadZone({ onComplete }: { onComplete: (count: number) => void }) {
  const [items, setItems] = useState<Item[]>([]);
  const [drag, setDrag] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const timers = useRef<Record<string, ReturnType<typeof setInterval>>>({});
  const itemsRef = useRef(items); itemsRef.current = items;

  useEffect(() => () => { Object.values(timers.current).forEach(clearInterval); itemsRef.current.forEach(i => URL.revokeObjectURL(i.preview)); }, []);

  const update = (id: string, patch: Partial<Item>) => setItems(list => list.map(i => i.id === id ? { ...i, ...patch } : i));

  const start = (id: string) => {
    // BACKEND TODO: request a signed upload URL, then PUT the file and report progress.
    update(id, { status: 'uploading', progress: 0, error: undefined });
    const failChance = Math.random() < 0.12;
    timers.current[id] = setInterval(() => {
      setItems(list => list.map(i => {
        if (i.id !== id) return i;
        const progress = Math.min(100, i.progress + 8 + Math.random() * 18);
        if (failChance && progress > 55) { clearInterval(timers.current[id]); return { ...i, status: 'error', error: 'Connection interrupted (simulated).' }; }
        if (progress >= 100) { clearInterval(timers.current[id]); onComplete(1); return { ...i, progress: 100, status: 'done' }; }
        return { ...i, progress };
      }));
    }, 250);
  };

  const add = (files: FileList | null) => {
    if (!files) return;
    const next: Item[] = [];
    Array.from(files).forEach(file => {
      if (!TYPES.includes(file.type)) { toast.error(`${file.name}: use JPG, PNG, or WebP.`); return; }
      if (file.size > MAX) { toast.error(`${file.name}: larger than 15 MB.`); return; }
      next.push({ id: crypto.randomUUID(), file, preview: URL.createObjectURL(file), progress: 0, status: 'queued' });
    });
    setItems(list => [...next, ...list]);
    next.forEach(i => setTimeout(() => start(i.id), 50));
  };

  const cancel = (id: string) => { clearInterval(timers.current[id]); update(id, { status: 'cancelled' }); };
  const remove = (id: string) => { clearInterval(timers.current[id]); setItems(list => { const it = list.find(i => i.id === id); if (it) URL.revokeObjectURL(it.preview); return list.filter(i => i.id !== id); }); };
  const onDrop = (e: DragEvent) => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); };
  const done = items.filter(i => i.status === 'done').length;

  return <div>
    <div onDragOver={e => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)} onDrop={onDrop}
      className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-12 text-center transition-colors ${drag ? 'border-primary bg-secondary' : 'border-border bg-card'}`}>
      <UploadCloud className="size-10 text-primary" aria-hidden="true" />
      <p className="mt-3 font-semibold">Drag photos here</p>
      <p className="text-sm text-muted-foreground">JPG, PNG, or WebP · up to 15 MB each</p>
      <Button className="mt-4" onClick={() => input.current?.click()}>Choose photos</Button>
      <input ref={input} type="file" multiple accept={TYPES.join(',')} className="sr-only" aria-label="Choose photos to upload" onChange={e => { add(e.target.files); e.target.value = ''; }} />
    </div>
    {items.length > 0 && <div className="mt-6">
      <div className="mb-3 flex items-center justify-between text-sm"><p aria-live="polite">{done} of {items.length} uploaded</p><Button variant="ghost" size="sm" onClick={() => items.forEach(i => remove(i.id))}>Clear all</Button></div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(i => <li key={i.id} className="flex gap-3 rounded-lg border border-border bg-card p-3">
          <img src={i.preview} alt="" className="size-16 shrink-0 rounded object-cover" />
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2"><p className="truncate text-sm font-medium">{i.file.name}</p><Button variant="ghost" size="icon" className="size-6" aria-label={`Remove ${i.file.name}`} onClick={() => remove(i.id)}><X /></Button></div>
            <p className="text-xs text-muted-foreground">{(i.file.size / 1024 / 1024).toFixed(1)} MB</p>
            {i.status === 'uploading' && <div className="mt-2 flex items-center gap-2"><Progress value={i.progress} className="h-1.5" aria-label={`Uploading ${i.file.name}`} /><button className="text-xs text-muted-foreground underline" onClick={() => cancel(i.id)}>Cancel</button></div>}
            {i.status === 'done' && <p className="mt-2 flex items-center gap-1 text-xs text-success"><CheckCircle2 className="size-3.5" />Uploaded (demo)</p>}
            {(i.status === 'error' || i.status === 'cancelled') && <div className="mt-2 flex items-center gap-2 text-xs text-destructive"><AlertCircle className="size-3.5" />{i.status === 'error' ? i.error : 'Cancelled'}<button className="inline-flex items-center gap-1 text-foreground underline" onClick={() => start(i.id)}><RotateCcw className="size-3" />Retry</button></div>}
          </div>
        </li>)}
      </ul>
    </div>}
  </div>;
}
