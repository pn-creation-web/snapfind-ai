import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/common/LegalPage';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/terms')({head:()=>pageHead('Terms','Sample terms policy for the event photo gallery frontend preview.','/terms'),component:()=> <LegalPage kind="terms"/>});
