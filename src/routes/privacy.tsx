import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/common/LegalPage';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/privacy')({head:()=>pageHead('Privacy','Sample privacy policy for the event photo gallery frontend preview.','/privacy'),component:()=> <LegalPage kind="privacy"/>});
