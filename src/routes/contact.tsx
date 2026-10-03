import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/common/Forms';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/contact')({head:()=>pageHead('Contact us','Tell us about your photography studio, event, or product questions.','/contact'),component:ContactPage});
