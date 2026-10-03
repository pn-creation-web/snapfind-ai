import { createFileRoute } from '@tanstack/react-router';
import { SolutionPage } from '@/components/marketing/ContentPages';
import { pageHead } from '@/data/seo';
import { solutions } from '@/data/solutions';
export const Route = createFileRoute('/solutions/$slug')({head:({params})=>{const s=solutions.find(x=>x.slug===params.slug);return pageHead(s?`${s.name} photo galleries`:'Solution unavailable',s?.description??'Explore photography solutions.',`/solutions/${params.slug}`)},component:Page});
function Page(){const {slug}=Route.useParams();return <SolutionPage slug={slug}/>;}
