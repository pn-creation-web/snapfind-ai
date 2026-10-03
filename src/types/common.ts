export interface Photo { id: string; src: string; title: string; category: string; width: number; height: number; }
export interface Event { id: string; name: string; type: string; date: string; location: string; description: string; cover: string; visibility: string; photos: number; views: number; }
export interface Feature { name: string; description: string; icon: string; }
export interface Solution { slug: string; name: string; description: string; image: string; problem: string; }
export interface PricingPlan { name: string; monthly: number; description: string; features: string[]; featured?: boolean; }
export interface User { name: string; email: string; studio: string; }
export interface Gallery { id: string; eventId: string; name: string; photoIds: string[]; }
export interface DashboardStats { label: string; value: string; change: string; }
