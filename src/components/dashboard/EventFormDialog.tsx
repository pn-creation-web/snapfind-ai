import { useEffect, useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { eventCovers, eventTypes, eventVisibilities } from '@/data/event-options';
import type { Event } from '@/types/common';
import { useDemoEvents } from './DemoEventsProvider';

const blank = { name: '', type: 'Wedding', date: '', location: '', description: '', visibility: 'Public' };
const selectClass = 'h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring';

export function EventFormDialog({ open, onOpenChange, event }: { open: boolean; onOpenChange: (v: boolean) => void; event?: Event | undefined }) {
  const { saveEvent } = useDemoEvents();
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState<{ name?: string; date?: string; location?: string }>({});
  const [saving, setSaving] = useState(false);
  useEffect(() => { if (open) { setForm(event ? { ...event } : blank); setErrors({}); } }, [open, event]);
  const set = (k: keyof typeof blank, v: string) => setForm(f => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: { name?: string; date?: string; location?: string } = {};
    if (form.name.trim().length < 3) next.name = 'Enter an event name of at least 3 characters.';
    if (!form.date) next.date = 'Choose an event date.';
    if (!form.location.trim()) next.location = 'Enter a location.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setSaving(true);
    // BACKEND TODO: POST /events to create, PATCH /events/:id to update.
    setTimeout(() => {
      saveEvent(event ? { ...event, ...form } : { ...form, id: `e${Date.now()}`, cover: eventCovers[form.type] ?? '', photos: 0, views: 0 });
      setSaving(false); onOpenChange(false);
      toast.success(event ? 'Event updated (demo).' : 'Event created (demo).');
    }, 600);
  };

  const field = (k: 'name' | 'location', label: string) => <div className="space-y-1.5"><Label htmlFor={`ev-${k}`}>{label}</Label><Input id={`ev-${k}`} value={form[k]} onChange={e => set(k, e.target.value)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `ev-${k}-err` : undefined} />{errors[k] && <p id={`ev-${k}-err`} className="text-xs text-destructive">{errors[k]}</p>}</div>;

  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[90dvh] overflow-y-auto sm:max-w-lg">
    <DialogHeader><DialogTitle>{event ? 'Edit event' : 'Create event'}</DialogTitle><DialogDescription>Saved in this session only.</DialogDescription></DialogHeader>
    <form onSubmit={submit} noValidate className="space-y-4">
      {field('name', 'Event name')}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5"><Label htmlFor="ev-type">Type</Label><select id="ev-type" className={selectClass} value={form.type} onChange={e => set('type', e.target.value)}>{eventTypes.map(t => <option key={t}>{t}</option>)}</select></div>
        <div className="space-y-1.5"><Label htmlFor="ev-date">Date</Label><Input id="ev-date" type="date" value={form.date} onChange={e => set('date', e.target.value)} aria-invalid={!!errors.date} />{errors.date && <p className="text-xs text-destructive">{errors.date}</p>}</div>
      </div>
      {field('location', 'Location')}
      <div className="space-y-1.5"><Label htmlFor="ev-vis">Visibility</Label><select id="ev-vis" className={selectClass} value={form.visibility} onChange={e => set('visibility', e.target.value)}>{eventVisibilities.map(t => <option key={t}>{t}</option>)}</select></div>
      <div className="space-y-1.5"><Label htmlFor="ev-desc">Description</Label><Textarea id="ev-desc" rows={3} value={form.description} onChange={e => set('description', e.target.value)} /></div>
      <DialogFooter><Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button><Button type="submit" disabled={saving}>{saving ? 'Saving…' : event ? 'Save changes' : 'Create event'}</Button></DialogFooter>
    </form>
  </DialogContent></Dialog>;
}
