import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/marketing/ContentPages';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/about')({head:()=>pageHead('Our story','A more personal way for photographers and guests to connect through event photos.','/about'),component:AboutPage});
