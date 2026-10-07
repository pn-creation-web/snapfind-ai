# SnapFlow AI

Build a production-quality FRONTEND-ONLY SaaS website for an AI-powered event photo gallery and photo discovery platform.

IMPORTANT:
This is ONLY the frontend.
Do NOT create any backend, database, authentication server, API server, Supabase, Firebase, cloud functions, server actions, payment backend, storage backend, AI backend, or external database.

My backend partner will implement the backend later using Python + MongoDB or Python + PostgreSQL (final choice will be made later).

The frontend must be completely prepared for future backend/API integration through clearly marked TODO comments.

==================================================
1. TECHNOLOGY REQUIREMENTS
==================================================

Use:

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite if needed for the React setup

Do NOT use Next.js.

Do NOT use unnecessary libraries.

Use React components and Tailwind utility classes.

Do NOT create large custom CSS files.

index.css and App.css should contain ONLY what is absolutely required, such as Tailwind imports/base configuration.

Do not put component styling into large CSS files.

Prefer Tailwind classes directly inside JSX/TSX.

Use Framer Motion only where animation genuinely improves UX.

Avoid excessive animation.

==================================================
2. ABSOLUTELY NO LOVABLE DEPENDENCY
==================================================

The final source code must be a normal standalone React + TypeScript + Tailwind project.

Do NOT leave:

- Lovable branding
- Lovable logos
- Lovable components
- Lovable-specific dependencies
- Lovable-specific configuration
- Lovable generated references
- Lovable credits
- Lovable comments
- Lovable watermarks
- unnecessary generated packages

The project must be portable.

I should be able to download/export the project, install dependencies, run it locally, push it to GitHub and deploy it to Vercel without depending on Lovable.

Use standard React architecture.

==================================================
3. PRODUCT CONCEPT
==================================================

We are building an AI-powered event photo gallery platform.

The platform is intended for:

- Wedding photographers
- Event photographers
- Sports photographers
- Corporate events
- Schools and colleges
- Music festivals
- Conferences
- Parties
- Social events
- Photography studios
- Professional event organizers

Core concept:

Photographers upload event photos.

AI-powered face recognition/search will eventually identify people in photos.

Guests can access an event gallery, identify themselves, and find photos containing their face.

Guests can view, select, share and potentially download/purchase their photos.

Photographers can manage events, galleries, branding, clients and photo collections.

The future backend will handle:

- authentication
- event creation
- image uploads
- image storage
- AI face recognition
- face embeddings
- photo processing
- user accounts
- gallery data
- notifications
- payments
- photo selling
- subscriptions
- analytics
- permissions

For now, build ONLY the frontend experience.

==================================================
4. DESIGN DIRECTION
==================================================

Create an original premium SaaS design.

Use FotoOwl only as a BUSINESS/FEATURE reference.

DO NOT clone FotoOwl's:

- exact layout
- exact colors
- exact typography
- exact wording
- exact illustrations
- exact cards
- exact component arrangement
- exact branding
- exact logo
- exact images

Create a completely original visual identity.

Design should feel:

- premium
- modern
- trustworthy
- professional
- AI-powered
- photography-focused
- clean
- global SaaS
- easy to understand
- conversion-focused

Avoid making the site look like a generic AI startup template.

Use a sophisticated light theme.

Do NOT make the entire website black/dark.

Dark sections may be used occasionally for contrast, but the primary design should remain light.

Use generous whitespace.

Use beautiful typography hierarchy.

Use subtle borders, soft shadows and rounded corners.

Avoid excessive gradients.

Avoid excessive glassmorphism.

Avoid huge unnecessary animations.

==================================================
5. BRANDING
==================================================

Use a temporary project brand name:

"SnapGallery AI"

IMPORTANT:
Keep all branding centralized so I can rename it later easily.

Create:

src/data/site.ts

Store things such as:

- brandName
- tagline
- description
- contactEmail
- social links
- navigation
- footer links
- CTA labels
- SEO defaults

Do not hardcode the brand name throughout the project.

If a better generic brand name is needed visually, still keep it inside site.ts so it can easily be changed.

Do NOT use FotoOwl branding.

==================================================
6. AI-GENERATED VISUAL ASSETS
==================================================

Create original AI-generated/demo visual assets where appropriate.

Generate/use images representing:

- wedding photography
- sports photography
- corporate events
- music festivals
- school events
- birthday/events
- photographers
- AI face search
- photo galleries
- event attendees

The images should look like professional photography.

Do NOT copy images from FotoOwl.

Do NOT use FotoOwl's logo.

Do NOT use copyrighted third-party brand assets.

Store image assets locally in an organized public/assets structure.

Use meaningful filenames.

Example:

public/
  images/
    hero/
    events/
    weddings/
    sports/
    corporate/
    schools/
    features/
    gallery/

Do NOT store every image in a JSON file.

Use image paths from centralized data files where appropriate.

==================================================
7. WEBSITE STRUCTURE
==================================================

Create a complete multi-page / route-based frontend.

Recommended routes:

/
 /how-it-works
 /features
 /solutions
 /solutions/weddings
 /solutions/sports
 /solutions/corporate
 /solutions/schools
 /solutions/events
 /pricing
 /about
 /contact
 /login
 /signup
 /demo-gallery
 /event-demo
 /privacy
 /terms

Future application routes can be represented with frontend demo screens:

 /dashboard
 /dashboard/events
 /dashboard/events/:eventId
 /dashboard/gallery/:galleryId
 /dashboard/photos
 /dashboard/analytics
 /dashboard/settings

These dashboard pages are FRONTEND DEMOS ONLY.

Do not create real authentication or backend functionality.

==================================================
8. NAVBAR
==================================================

Create a responsive premium navbar.

Desktop:

Logo
How It Works
Features
Solutions dropdown
Pricing
Resources dropdown
Login
Get Started

Mobile:

Hamburger menu
Animated mobile navigation drawer
CTA

Navbar should:

- remain responsive
- have subtle scroll behavior
- have active route indication
- use accessible buttons
- support keyboard navigation

Use React Router.

==================================================
9. HERO SECTION
==================================================

Create a strong hero section.

Suggested concept:

"Every Event. Every Photo. Find Yours Instantly."

Supporting message:

"AI-powered event photo galleries that help guests discover their photos in seconds while giving photographers a smarter way to organize, share and monetize their work."

CTA:

"Start Free"
"See How It Works"

Add a beautiful visual showing:

Event photos
AI face search
Gallery
QR access
Photo discovery

Use Framer Motion for subtle entrance animations.

The hero must be responsive.

Do not make the hero excessively tall on mobile.

==================================================
10. TRUST / SOCIAL PROOF
==================================================

Create a section showing conceptual trust indicators.

Examples:

- Built for Event Photographers
- AI-powered photo discovery
- Secure photo sharing
- Fast event galleries
- Mobile-first guest experience

Do not fabricate real customer numbers, logos, awards or testimonials.

If testimonials are included, clearly use demo/sample content that can later be replaced.

Keep them centralized in data files.

==================================================
11. HOW IT WORKS
==================================================

Create a clear 4-step workflow:

1. Create Your Event
2. Upload Photos
3. Guests Find Their Photos
4. Share, Download or Sell

Show a visual timeline/card layout.

Add subtle Framer Motion animations.

Each step should explain what happens.

Add backend integration TODO comments where appropriate.

Example:

// BACKEND TODO:
// Replace demo event data with GET /events/:eventId

Do NOT implement the API.

==================================================
12. AI FACE SEARCH FEATURE
==================================================

Create a visually impressive feature section.

Concept:

"Find Every Photo You're In"

Show a demo UI:

- User selects/uploads selfie
- Face scanning animation
- "Searching your event..."
- Matching photos
- Result gallery

This is a frontend simulation only.

Use local mock data.

Clearly mark future integration.

Example:

// BACKEND TODO:
// Send user's face image to the AI face-search API.
// Backend should return matching photo IDs and confidence metadata.
// Do not process face recognition in the frontend.

Do NOT implement actual facial recognition.

==================================================
13. EVENT GALLERY EXPERIENCE
==================================================

Create a realistic demo gallery.

Include:

- Event title
- Event date
- Photographer/brand
- Search photos
- AI Face Search CTA
- Categories
- Masonry/grid gallery
- Photo preview
- Fullscreen/lightbox
- Favorite button
- Share button
- Download button
- Select multiple photos
- Pagination/load more

Make the gallery look like an actual production product.

Use reusable components.

==================================================
14. PHOTO DETAIL EXPERIENCE
==================================================

Create a premium photo viewer.

Features:

- large image
- previous/next
- zoom UI
- favorite
- share
- download
- select
- photo metadata
- photographer branding

Frontend demo only.

Example:

// BACKEND TODO:
// Connect download button to secure signed URL generated by backend.
// Never expose private storage credentials in frontend.

==================================================
15. PHOTOGRAPHER DASHBOARD
==================================================

Create a frontend dashboard demo.

Dashboard should include:

Overview
Events
Photos
Galleries
Clients
Analytics
Settings

Overview cards:

- Total Events
- Photos Uploaded
- Gallery Views
- Photo Searches
- Downloads

Charts can use mock data.

Do not create real analytics backend.

Add:

// BACKEND TODO:
// Replace mock analytics data with analytics API response.

==================================================
16. EVENT MANAGEMENT UI
==================================================

Create frontend UI for:

Create Event
Edit Event
Event Details
Event Settings

Fields:

- Event name
- Event type
- Date
- Location
- Description
- Cover image
- Gallery visibility
- Branding
- Guest access
- Download settings

Create frontend validation only.

Do not persist data to a database.

Use mock/local state where necessary.

Add backend comments explaining future API integration.

==================================================
17. PHOTO UPLOAD UI
==================================================

Create an impressive upload interface.

Features:

- drag & drop
- file selection
- image previews
- upload progress simulation
- upload status
- success state
- error state
- remove image
- retry

This must be a FRONTEND DEMO.

Do NOT actually upload files to a backend.

Add:

// BACKEND TODO:
// Replace simulated upload with multipart upload API.
// Backend should return photo IDs and processing status.

==================================================
18. QR EVENT ACCESS
==================================================

Create a frontend demonstration of QR-based event access.

Show:

Event QR code
Event URL
Copy link
Share event
Download QR

Use a placeholder/demo QR visual.

Do not create backend-generated QR functionality.

Add:

// BACKEND TODO:
// Generate event-specific QR code from the backend event URL.

==================================================
19. PRICING PAGE
==================================================

Create original pricing plans.

Example:

Free
Starter
Professional
Business

Do NOT copy FotoOwl pricing.

Do not claim exact storage limits unless these are clearly marked as demo values.

Include:

- Monthly / Annual toggle
- Feature comparison
- CTA buttons
- FAQ
- Enterprise/contact section

Pricing should be stored in:

src/data/pricing.ts

Use loops/map instead of manually duplicating cards.

Example structure:

plans.map(...)

==================================================
20. SOLUTIONS
==================================================

Create separate solution pages for:

Wedding Photography
Sports Photography
Corporate Events
Schools
Music & Festivals
General Events

Each page should have:

Hero
Problem
Solution
Workflow
Feature highlights
Gallery examples
CTA

Use centralized data wherever practical.

==================================================
21. FEATURES PAGE
==================================================

Show features such as:

AI Face Search
Event Galleries
QR Event Access
Photo Organization
Photo Sharing
Photo Downloads
Favorites
Photo Selling
Branding
Custom Gallery Themes
Analytics
Guest Management
Notifications
Mobile Experience

Each feature should have a concise explanation.

Do not make unsupported technical claims.

==================================================
22. SEO REQUIREMENTS
==================================================

Make the entire website SEO-ready.

Important:

Use semantic HTML.

Use:

- proper H1
- H2
- H3 hierarchy
- descriptive titles
- meta descriptions
- canonical URLs where appropriate
- Open Graph metadata
- Twitter/X card metadata
- descriptive image alt text
- meaningful URLs
- internal linking
- crawl-friendly content
- accessible navigation
- structured content

Create SEO configuration in a centralized location.

Example:

src/data/seo.ts

Each major route should have:

- title
- description
- keywords where useful
- canonical path

Do NOT keyword stuff.

Write natural search-friendly content around terms such as:

- AI photo gallery
- AI event photo gallery
- event photo sharing
- face recognition photo gallery
- event photography platform
- photographer gallery
- wedding photo gallery
- sports photo gallery
- event photo sharing platform
- AI photo search

Only use keywords naturally.

Important:
Do not claim that SEO guarantees first position on Google.

==================================================
23. STRUCTURED DATA
==================================================

Where appropriate, prepare frontend structured data for:

Organization
WebSite
SoftwareApplication
FAQPage
BreadcrumbList

Do not add fake reviews or fake ratings.

Keep structured data centralized/reusable.

==================================================
24. PERFORMANCE
==================================================

Optimize for high Lighthouse scores.

Target:

95+ where realistically achievable for:

- Performance
- Accessibility
- Best Practices
- SEO

Use:

- lazy loading
- responsive images
- appropriate image dimensions
- modern image formats where possible
- code splitting where useful
- minimal dependencies
- optimized animations
- avoid huge JavaScript bundles
- avoid unnecessary re-renders
- avoid autoplay video unless necessary
- preload only critical assets

Use loading="lazy" for non-critical images.

Hero images can use appropriate eager loading when necessary.

==================================================
25. RESPONSIVE DESIGN
==================================================

The website MUST work properly on:

- small mobile phones
- large mobile phones
- tablets
- iPad
- laptops
- desktop monitors
- large desktop screens
- Windows browsers
- macOS browsers

Test layouts conceptually at:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px

Do not simply shrink the desktop layout.

Create mobile-specific layout behavior where appropriate.

Ensure:

- no horizontal overflow
- readable typography
- accessible touch targets
- responsive navigation
- responsive grids
- responsive cards
- responsive dashboard
- responsive galleries
- responsive pricing tables

==================================================
26. ACCESSIBILITY
==================================================

Follow good accessibility practices.

Use:

- semantic HTML
- aria-label where needed
- keyboard navigation
- visible focus states
- accessible buttons
- accessible dialogs
- alt text
- sufficient contrast
- proper form labels

Do not use clickable divs when buttons/links are appropriate.

==================================================
27. COMPONENT ARCHITECTURE
==================================================

Keep code SHORT, SMART and REUSABLE.

Do NOT create huge components containing everything.

Recommended structure:

src/
  assets/
  components/
    common/
    layout/
    ui/
    marketing/
    gallery/
    dashboard/
  data/
    site.ts
    navigation.ts
    pricing.ts
    features.ts
    solutions.ts
    gallery.ts
    seo.ts
  hooks/
  layouts/
  pages/
    Home.tsx
    HowItWorks.tsx
    Features.tsx
    Pricing.tsx
    About.tsx
    Contact.tsx
    Login.tsx
    Signup.tsx
    DemoGallery.tsx
    Dashboard.tsx
  routes/
  types/
  utils/
  App.tsx
  main.tsx

Adjust the structure if a cleaner architecture is possible.

==================================================
28. CENTRALIZED DATA
==================================================

Use centralized data for repeated content.

Examples:

navigation.ts
pricing.ts
features.ts
solutions.ts
gallery.ts
testimonials.ts
faq.ts
seo.ts

Use TypeScript interfaces/types.

Use map/filter/loops for repeated UI.

Do NOT duplicate the same JSX for:

- pricing cards
- feature cards
- gallery images
- navigation links
- FAQ items
- solution cards
- dashboard statistics

==================================================
29. TYPESCRIPT
==================================================

Use proper TypeScript types.

Avoid:

any

unless absolutely unavoidable.

Create reusable types such as:

Event
Photo
Gallery
PricingPlan
Feature
Solution
User
DashboardStats

Keep types organized.

==================================================
30. BACKEND INTEGRATION COMMENTS
==================================================

This is extremely important.

Whenever backend/API/database/authentication/payment/AI functionality will eventually be required, add a SHORT and SMART TODO comment.

Examples:

// BACKEND TODO: GET event details by event ID.

// BACKEND TODO: POST new event.

// BACKEND TODO: Upload photos using signed upload URL.

// BACKEND TODO: Send face image to AI search API.

// BACKEND TODO: Replace mock gallery data with API response.

// BACKEND TODO: Connect authentication to backend.

// BACKEND TODO: Connect payment checkout.

// BACKEND TODO: Fetch subscription status.

// BACKEND TODO: Store favorites for authenticated user.

// BACKEND TODO: Generate secure photo download URL.

Do NOT write long explanations inside comments.

Comments should be short and useful for the backend developer.

==================================================
31. MOCK DATA
==================================================

Use realistic local mock data.

For example:

src/data/mock/

events.ts
photos.ts
users.ts
analytics.ts

The frontend should look functional using mock data.

But clearly separate mock data from real API logic.

Do NOT pretend that frontend demo functionality is connected to a real backend.

==================================================
32. AUTHENTICATION UI
==================================================

Create:

Login
Signup
Forgot Password
OTP/verification-style UI where appropriate

Frontend only.

Do not implement real authentication.

Add:

// BACKEND TODO:
// Connect login form to authentication API.
// Store session using secure backend-issued authentication mechanism.

Do not store real passwords.

==================================================
33. CONTACT PAGE
==================================================

Create:

Contact form
Name
Email
Phone
Company
Message

Frontend validation only.

Add:

// BACKEND TODO:
// Submit contact form to backend/email service.

Do not create a fake backend.

==================================================
34. FOOTER
==================================================

Create a professional footer.

Columns:

Product
Solutions
Resources
Company
Legal

Include:

Privacy
Terms
Contact
Social links

Keep links centralized.

==================================================
35. ANIMATIONS
==================================================

Use Framer Motion for:

- hero entrance
- section reveal
- card hover
- navigation transitions
- modal transitions
- gallery interactions
- dashboard transitions

Keep animation subtle and professional.

Respect:

prefers-reduced-motion

Do not animate everything.

==================================================
36. UI DETAILS
==================================================

Include polished states:

- loading
- empty
- success
- error
- disabled
- hover
- focus
- selected
- skeleton loading

Buttons should have clear interaction states.

Forms should show validation states.

Gallery should show useful empty states.

==================================================
37. SECURITY FRONTEND RULES
==================================================

Never put:

- API secrets
- database credentials
- private keys
- cloud storage secrets
- AI provider keys
- payment secret keys

inside the frontend.

Use environment variable placeholders only for values that are safe to expose publicly.

Anything sensitive belongs in the backend.

==================================================
38. CODE QUALITY
==================================================

Keep the implementation:

- clean
- maintainable
- reusable
- modular
- short
- readable
- production-oriented

Avoid:

- duplicated code
- unnecessary abstraction
- giant files
- giant components
- unnecessary packages
- unnecessary comments
- unnecessary CSS
- hardcoded repeated content
- inline magic values everywhere

Prefer reusable components and centralized data.

==================================================
39. IMPORTANT: DO NOT OVERBUILD BACKEND
==================================================

Again:

THIS PROJECT IS FRONTEND ONLY.

Do NOT generate:

- MongoDB
- PostgreSQL
- Python
- FastAPI
- Django
- Node backend
- Express
- Supabase
- Firebase
- Prisma
- database schemas
- API server
- cloud functions
- real authentication
- real payment processing
- real AI face recognition

Only prepare the frontend interfaces and short backend TODO comments.

==================================================
40. FINAL QUALITY CHECK
==================================================

Before finishing, check:

1. React + TypeScript works.
2. Tailwind works.
3. Framer Motion works.
4. No Lovable dependency/branding remains.
5. No unnecessary dependencies.
6. No backend is created.
7. No database is created.
8. No fake API implementation is created.
9. Responsive on mobile/tablet/laptop/desktop.
10. No horizontal overflow.
11. Semantic HTML is used.
12. SEO metadata exists.
13. Routes have meaningful SEO content.
14. Images have alt text.
15. Keyboard navigation works.
16. Forms have accessible labels.
17. Repeated UI uses reusable components.
18. Repeated data is centralized.
19. Mock data is separated from components.
20. Backend integration TODO comments exist at required locations.
21. Code is concise and maintainable.
22. No huge unnecessary CSS files.
23. No hardcoded repeated JSX.
24. No copied FotoOwl branding/content.
25. The final project can be exported and independently deployed.

Build the complete frontend now.




==================================================
PROJECT FOLDER STRUCTURE
==================================================

Create the project using the following clean and scalable structure.

Do NOT create unnecessary folders or files.

src/
├── assets/
│   ├── icons/
│   └── images/
│       ├── hero/
│       ├── events/
│       ├── weddings/
│       ├── sports/
│       ├── corporate/
│       ├── schools/
│       ├── festivals/
│       ├── gallery/
│       └── dashboard/
│
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   ├── Loading.tsx
│   │   ├── EmptyState.tsx
│   │   └── BackToTop.tsx
│   │
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── PageLayout.tsx
│   │
│   ├── marketing/
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── SolutionCard.tsx
│   │   ├── CTASection.tsx
│   │   ├── FAQ.tsx
│   │   └── PricingCard.tsx
│   │
│   ├── gallery/
│   │   ├── GalleryGrid.tsx
│   │   ├── GalleryCard.tsx
│   │   ├── PhotoViewer.tsx
│   │   ├── PhotoActions.tsx
│   │   ├── FaceSearch.tsx
│   │   ├── GalleryFilters.tsx
│   │   └── GallerySkeleton.tsx
│   │
│   ├── dashboard/
│   │   ├── Sidebar.tsx
│   │   ├── DashboardHeader.tsx
│   │   ├── StatCard.tsx
│   │   ├── EventCard.tsx
│   │   ├── AnalyticsChart.tsx
│   │   ├── UploadZone.tsx
│   │   └── DashboardLayout.tsx
│   │
│   └── legal/
│       ├── LegalLayout.tsx
│       ├── LegalSection.tsx
│       ├── LegalTableOfContents.tsx
│       └── LegalSidebar.tsx
│
├── data/
│   ├── site.ts
│   ├── navigation.ts
│   ├── features.ts
│   ├── solutions.ts
│   ├── pricing.ts
│   ├── faq.ts
│   ├── gallery.ts
│   ├── testimonials.ts
│   ├── seo.ts
│   │
│   ├── mock/
│   │   ├── events.ts
│   │   ├── photos.ts
│   │   ├── users.ts
│   │   └── analytics.ts
│   │
│   └── legal/
│       ├── privacyPolicy.ts
│       └── termsAndConditions.ts
│
├── hooks/
│   ├── useScroll.ts
│   ├── useMediaQuery.ts
│   └── useLocalStorage.ts
│
├── layouts/
│   ├── MainLayout.tsx
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   │
│   ├── solutions/
│   │   ├── Weddings.tsx
│   │   ├── Sports.tsx
│   │   ├── Corporate.tsx
│   │   ├── Schools.tsx
│   │   └── Events.tsx
│   │
│   ├── auth/
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   └── ForgotPassword.tsx
│   │
│   ├── gallery/
│   │   ├── DemoGallery.tsx
│   │   └── EventDemo.tsx
│   │
│   ├── dashboard/
│   │   ├── Dashboard.tsx
│   │   ├── Events.tsx
│   │   ├── EventDetails.tsx
│   │   ├── Photos.tsx
│   │   ├── Galleries.tsx
│   │   ├── Analytics.tsx
│   │   └── Settings.tsx
│   │
│   └── legal/
│       ├── PrivacyPolicy.tsx
│       └── TermsAndConditions.tsx
│
├── routes/
│   └── AppRoutes.tsx
│
├── types/
│   ├── event.ts
│   ├── photo.ts
│   ├── gallery.ts
│   ├── user.ts
│   ├── pricing.ts
│   └── common.ts
│
├── utils/
│   ├── constants.ts
│   ├── formatters.ts
│   └── validators.ts
│
├── App.tsx
├── main.tsx
└── index.css


public/
├── images/
├── favicon.svg
├── robots.txt
└── sitemap.xml

==================================================
FOLDER / ARCHITECTURE RULES
==================================================

1. Keep components small and reusable.

2. Do not create a component if simple JSX can remain clean
   inside an existing component.

3. Do not create duplicate components with slightly different names.

4. Keep repeated content inside src/data/.

5. Keep TypeScript interfaces/types inside src/types/.

6. Keep mock/demo data inside src/data/mock/.

7. Keep legal content inside src/data/legal/.

8. Keep SEO configuration inside src/data/seo.ts.

9. Keep navigation configuration inside src/data/navigation.ts.

10. Keep global brand information inside src/data/site.ts.

11. Do not hardcode the brand name throughout components.

12. Do not hardcode repeated image paths throughout JSX.

13. Use map(), filter() and reusable components for repeated UI.

14. Do not create separate files for every tiny UI element.

15. Do not create unnecessary hooks.

16. Do not create unnecessary utility functions.

17. Keep comments short and meaningful.

18. Backend TODO comments should only exist where backend
    integration will eventually be required.

19. Do not implement backend functionality.

20. Do not put API/database logic into UI components.

21. Keep future API integration easy by keeping mock data
    separate from UI.

22. Do not put custom styling into large CSS files.
    Prefer Tailwind classes.

23. index.css should contain only required global styles
    and Tailwind imports/base configuration.

24. Do not create an unnecessary App.css file.

25. Do not create Lovable-specific folders or files.

26. Do not create a backend folder.

27. Do not create database files.

28. Do not create server-side code.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://snapfind-ai.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5f8164e9-f454-4648-a280-6bd1b7aa4ded).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
