import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/common/Forms';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/signup')({head:()=>pageHead('Signup','Preview the secure account experience. Frontend demonstration only.','/signup'),component:()=> <AuthPage mode="signup"/>});
