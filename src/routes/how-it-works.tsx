import { createFileRoute } from '@tanstack/react-router';
import { HowPage } from '@/components/marketing/ContentPages';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/how-it-works')({head:()=>pageHead('How it works','A four-step workflow from event creation to personal photo discovery.','/how-it-works'),component:HowPage});
