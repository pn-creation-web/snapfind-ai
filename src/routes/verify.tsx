import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/common/Forms';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/verify')({head:()=>pageHead('Verify','Preview the secure account experience. Frontend demonstration only.','/verify'),component:()=> <AuthPage mode="verify"/>});
