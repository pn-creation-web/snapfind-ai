import { createFileRoute } from '@tanstack/react-router';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DemoEventsProvider } from '@/components/dashboard/DemoEventsProvider';

export const Route = createFileRoute('/dashboard')({
  component: () => <DemoEventsProvider><DashboardLayout /></DemoEventsProvider>,
});
