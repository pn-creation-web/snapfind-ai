import { createFileRoute } from '@tanstack/react-router';
import { PricingPage } from '@/components/marketing/ContentPages';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/pricing')({head:()=>pageHead('Plans and pricing','Compare illustrative plans for your event photography studio.','/pricing'),component:PricingPage});
