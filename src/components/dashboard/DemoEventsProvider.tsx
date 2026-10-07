import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { events as sampleEvents } from '@/data/mock/events';
import type { Event, UploadedPhoto } from '@/types/common';

const KEY = 'snapgallery-demo-workspace-v1';
type Stored = { events: Event[]; uploads: UploadedPhoto[] };
type EventsContext = Stored & { saveEvent: (event: Event) => void; addUpload: (eventId: string, file: File) => void; resetDemo: () => void };
const Context = createContext<EventsContext | null>(null);

// Small JPEG thumbnail so browser storage stays light.
function thumbnail(file: File): Promise<string> {
  return new Promise(resolve => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, 240 / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale); canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d')?.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/jpeg', 0.7));
    };
    img.onerror = () => { URL.revokeObjectURL(url); resolve(''); };
    img.src = url;
  });
}

export function DemoEventsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<Stored>({ events: sampleEvents, uploads: [] });
  const [loaded, setLoaded] = useState(false);
  // BACKEND TODO: replace browser storage with GET/POST/PATCH events and photo metadata.
  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) setState(JSON.parse(raw) as Stored); } catch { /* ignore corrupt demo data */ }
    setLoaded(true);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage full: keep in memory */ }
  }, [state, loaded]);

  const saveEvent = (event: Event) => setState(s => ({ ...s, events: s.events.some(e => e.id === event.id) ? s.events.map(e => e.id === event.id ? event : e) : [event, ...s.events] }));
  const addUpload = (eventId: string, file: File) => {
    void thumbnail(file).then(thumb => setState(s => ({
      events: s.events.map(e => e.id === eventId ? { ...e, photos: e.photos + 1 } : e),
      uploads: [{ id: crypto.randomUUID(), eventId, filename: file.name, type: file.type, size: file.size, uploadedAt: new Date().toISOString(), thumb }, ...s.uploads],
    })));
  };
  const resetDemo = () => setState({ events: sampleEvents, uploads: [] });
  return <Context.Provider value={{ ...state, saveEvent, addUpload, resetDemo }}>{children}</Context.Provider>;
}
export function useDemoEvents() {
  const context = useContext(Context);
  if (!context) throw new Error('Event demos require DemoEventsProvider');
  return context;
}
