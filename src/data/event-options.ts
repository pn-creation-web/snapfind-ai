import { images } from './images';
export const eventTypes = ['Wedding', 'Sports', 'Corporate', 'Festival', 'School', 'Other'];
export const eventVisibilities = ['Public', 'Link only', 'Private'];
export const eventCovers: Record<string, string> = { Wedding: images.wedding, Sports: images.sports, Corporate: images.corporate, Festival: images.festival, School: images.school, Other: images.birthday };