import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/common/Forms';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/login')({head:()=>pageHead('Login','Preview the secure account experience. Frontend demonstration only.','/login'),component:()=> <AuthPage mode="login"/>});
