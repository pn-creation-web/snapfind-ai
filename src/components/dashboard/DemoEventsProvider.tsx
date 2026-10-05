import { createContext, useContext, useState, type ReactNode } from 'react';
import { events as sampleEvents } from '@/data/mock/events';
import type { Event } from '@/types/common';

type EventsContext = { events: Event[]; saveEvent: (event: Event) => void; addPhotos: (id: string, count: number) => void };
const Context = createContext<EventsContext | null>(null);
export function DemoEventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  // BACKEND TODO: GET events; POST new events and PATCH event updates.
  const saveEvent = (event: Event) => setEvents(previous => previous.some(e => e.id === event.id) ? previous.map(e => e.id === event.id ? event : e) : [event, ...previous]);
  const addPhotos = (id: string, count: number) => setEvents(previous => previous.map(e => e.id === id ? { ...e, photos: e.photos + count } : e));
  return <Context.Provider value={{ events, saveEvent, addPhotos }}>{children}</Context.Provider>;
}
export function useDemoEvents() {
  const context = useContext(Context);
  if (!context) throw new Error('Event demos require DemoEventsProvider');
  return context;
}