import { Link, Outlet } from '@tanstack/react-router';
import { LayoutDashboard, CalendarDays, Images } from 'lucide-react';
import { Container, DemoNotice } from '@/components/common/Shared';
import { Button } from '@/components/ui/button';

export function DashboardLayout() {
  return <><div className="border-b border-border bg-muted/50"><Container className="py-6"><div className="flex flex-wrap items-center justify-between gap-4"><p className="font-semibold">Photographer workspace</p><nav aria-label="Workspace navigation" className="flex flex-wrap gap-1"><Button variant="ghost" asChild><Link to="/dashboard" activeOptions={{ exact: true }} activeProps={{ className: 'bg-secondary text-primary' }}><LayoutDashboard />Overview</Link></Button><Button variant="ghost" asChild><Link to="/dashboard/events" activeProps={{ className: 'bg-secondary text-primary' }}><CalendarDays />Events</Link></Button><Button variant="ghost" asChild><Link to="/dashboard/photos" activeProps={{ className: 'bg-secondary text-primary' }}><Images />Photos</Link></Button></nav></div><div className="mt-4"><DemoNotice>Frontend demo · Files stay on your device. Changes reset when you refresh.</DemoNotice></div></Container></div><Outlet /></>;
}