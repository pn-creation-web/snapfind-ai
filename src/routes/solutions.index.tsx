import { createFileRoute } from '@tanstack/react-router';
import { SolutionsPage } from '@/components/marketing/ContentPages';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/solutions/')({head:()=>pageHead('Photography solutions','Discover event gallery solutions for weddings, sports, corporate events, schools, and festivals.','/solutions/'),component:SolutionsPage});
