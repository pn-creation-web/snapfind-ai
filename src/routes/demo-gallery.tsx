import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage } from '@/components/gallery/GalleryPage';
import { pageHead } from '@/data/seo';
export const Route = createFileRoute('/demo-gallery')({head:()=>pageHead('Amelia & James — Demo wedding gallery','Explore wedding moments, favorites, photo downloads, and a simulated selfie search.','/demo-gallery'),component:GalleryPage});
