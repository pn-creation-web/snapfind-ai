import { createFileRoute } from '@tanstack/react-router';
import { FeaturesPage } from '@/components/marketing/ContentPages';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/features')({head:()=>pageHead('Event photography features','Explore face search, galleries, QR access, sharing, and photographer workspace interfaces.','/features'),component:FeaturesPage});
