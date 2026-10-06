import { Link, Outlet } from '@tanstack/react-router';
import { LayoutDashboard, CalendarDays, Images, BarChart3, Settings } from 'lucide-react';
import { Container, DemoNotice } from '@/components/common/Shared';
import { Button } from '@/components/ui/button';

const links = [
  { to: '/dashboard', label: 'Overview', icon: LayoutDashboard, exact: true },
  { to: '/dashboard/events', label: 'Events', icon: CalendarDays },
  { to: '/dashboard/photos', label: 'Photos', icon: Images },
  { to: '/dashboard/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/dashboard/settings', label: 'Settings', icon: Settings },
] as const;

export function DashboardLayout() {
  return <>
    <div className="border-b border-border bg-muted/50"><Container className="py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="font-semibold">Photographer workspace</p>
        <nav aria-label="Workspace navigation" className="flex flex-wrap gap-1">
          {links.map(l => <Button key={l.to} variant="ghost" size="sm" asChild><Link to={l.to} activeOptions={{ exact: 'exact' in l }} activeProps={{ className: 'bg-secondary text-primary' }}><l.icon />{l.label}</Link></Button>)}
        </nav>
      </div>
      <div className="mt-4"><DemoNotice>Frontend demo · Files stay on your device. Changes reset when you refresh.</DemoNotice></div>
    </Container></div>
    <Outlet />
  </>;
}
