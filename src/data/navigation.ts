export const mainNav = [{ label: 'How it works', to: '/how-it-works' }, { label: 'Features', to: '/features' }, { label: 'Pricing', to: '/pricing' }] as const;
export const footerGroups = [
  { name: 'Product', links: [{ label: 'Features', to: '/features' }, { label: 'How it works', to: '/how-it-works' }, { label: 'Pricing', to: '/pricing' }, { label: 'Demo gallery', to: '/demo-gallery' }] },
  { name: 'Solutions', links: [{ label: 'Weddings', to: '/solutions/$slug', slug: 'weddings' }, { label: 'Sports', to: '/solutions/$slug', slug: 'sports' }, { label: 'Corporate', to: '/solutions/$slug', slug: 'corporate' }, { label: 'Schools', to: '/solutions/$slug', slug: 'schools' }, { label: 'Music & festivals', to: '/solutions/$slug', slug: 'festivals' }] },
  { name: 'Resources', links: [{ label: 'Event demo', to: '/event-demo' }, { label: 'Photographer workspace', to: '/dashboard' }] },
  { name: 'Company', links: [{ label: 'About us', to: '/about' }, { label: 'Contact', to: '/contact' }] },
  { name: 'Legal', links: [{ label: 'Privacy policy', to: '/privacy' }, { label: 'Terms of service', to: '/terms' }] },
] as const;
