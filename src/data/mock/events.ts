import { images } from '../images';
import type { Event } from '@/types/common';
export const events: Event[] = [
 {id:'e1',name:'Amelia & James',type:'Wedding',date:'2026-09-20',location:'Lake Como, Italy',description:'A celebration of love, laughter, and all the little moments in between.',cover:images.wedding,visibility:'Public',photos:246,views:1284},
 {id:'e2',name:'City Run 2026',type:'Sports',date:'2026-09-27',location:'Riverside Park',description:'A morning of personal bests.',cover:images.sports,visibility:'Link only',photos:512,views:2048},
 {id:'e3',name:'Gather Together',type:'Corporate',date:'2026-10-01',location:'The Glasshouse',description:'Good people. New connections.',cover:images.corporate,visibility:'Private',photos:184,views:826},
 {id:'e4',name:'Sunset Sessions',type:'Festival',date:'2026-09-12',location:'Meadow Grounds',description:'Music and moments worth keeping.',cover:images.festival,visibility:'Public',photos:328,views:1560},
];
