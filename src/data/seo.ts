import { site } from './site';
export function pageHead(title: string, description: string, path = '/') {
 const fullTitle = `${title} — ${site.fullName}`;
 return { meta: [{title:fullTitle},{name:'description',content:description},{property:'og:title',content:fullTitle},{property:'og:description',content:description},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}], links: site.url ? [{rel:'canonical',href:`${site.url}${path}`}] : [] };
}
export function structuredData() {
 if (!site.url) return [];
 return [{ '@context':'https://schema.org','@type':'Organization',name:site.fullName,url:site.url }, {'@context':'https://schema.org','@type':'WebSite',name:site.fullName,url:site.url}, {'@context':'https://schema.org','@type':'SoftwareApplication',name:site.fullName,applicationCategory:'MultimediaApplication',operatingSystem:'Web'}];
}
