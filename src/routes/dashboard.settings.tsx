import { useState, type FormEvent } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { toast } from 'sonner';
import { Container } from '@/components/common/Shared';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { demoUser } from '@/data/mock/users';
import { pageHead } from '@/data/seo';

export const Route = createFileRoute('/dashboard/settings')({
  head: () => pageHead('Settings — workspace demo', 'Studio profile and notification preferences in the demo workspace.', '/dashboard/settings'),
  component: SettingsPage,
});

function SettingsPage() {
  const [profile, setProfile] = useState(demoUser);
  const [notify, setNotify] = useState({ uploads: true, downloads: false });
  const save = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(profile.email)) return toast.error('Enter a valid email.');
    // BACKEND TODO: PATCH photographer profile and notification preferences.
    toast.success('Settings saved for this session (demo).');
  };
  return <Container className="max-w-2xl py-10">
    <h1 className="text-3xl font-bold">Settings</h1>
    <form onSubmit={save} className="mt-6 space-y-6 rounded-lg border border-border bg-card p-6">
      {(['name', 'email', 'studio'] as const).map(k => <div key={k} className="space-y-1.5"><Label htmlFor={`set-${k}`} className="capitalize">{k === 'studio' ? 'Studio name' : k}</Label><Input id={`set-${k}`} type={k === 'email' ? 'email' : 'text'} value={profile[k]} onChange={e => setProfile(p => ({ ...p, [k]: e.target.value }))} /></div>)}
      <fieldset className="space-y-3"><legend className="mb-2 font-semibold">Notifications</legend>
        {([['uploads', 'Email me when uploads finish'], ['downloads', 'Weekly download summary']] as const).map(([k, l]) => <div key={k} className="flex items-center justify-between"><Label htmlFor={`n-${k}`}>{l}</Label><Switch id={`n-${k}`} checked={notify[k]} onCheckedChange={v => setNotify(n => ({ ...n, [k]: v }))} /></div>)}
      </fieldset>
      <Button type="submit">Save settings</Button>
    </form>
  </Container>;
}
