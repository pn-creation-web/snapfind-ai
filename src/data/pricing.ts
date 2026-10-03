import type { PricingPlan } from '@/types/common';
export const plans: PricingPlan[] = [
 {name:'Free',monthly:0,description:'Discover a better way to share.',features:['One event gallery','Guest favorites','Gallery sharing','Standard gallery theme']},
 {name:'Starter',monthly:19,description:'For your next chapter.',features:['Everything in Free','Multiple event galleries','Face-search interface','Custom event covers','Download preferences']},
 {name:'Professional',monthly:49,description:'For studios making their mark.',featured:true,features:['Everything in Starter','Studio branding','Gallery themes','Analytics workspace','Photo-selling interface','Guest access preferences']},
 {name:'Business',monthly:99,description:'For teams thinking bigger.',features:['Everything in Professional','Team workspace','Client collections','Branding controls','Priority support planning']},
];
