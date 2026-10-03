import { createFileRoute } from '@tanstack/react-router';
import { Home } from '@/components/marketing/Home';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/')({head:()=>pageHead('AI event photo galleries, made personal','Discover a photo-first event gallery experience for weddings, sports, conferences, and celebrations.'),component:Home});
