import { createFileRoute } from '@tanstack/react-router';
import { AuthPage } from '@/components/common/Forms';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/forgot-password')({head:()=>pageHead('Forgot Password','Preview the secure account experience. Frontend demonstration only.','/forgot-password'),component:()=> <AuthPage mode="forgot-password"/>});
