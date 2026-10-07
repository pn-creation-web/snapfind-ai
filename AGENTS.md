# Architecture rules
- Retain the template's TanStack Start and file-based routing bootstrap because the preview platform requires it; application behavior is frontend-only.
- Keep brand configuration and repeated content in src/data, demo records in src/data/mock, and shared types in src/types to make future integration and renaming straightforward.
- Persist demo workspace mutations only in browser localStorage via DemoEventsProvider; never add services, credentials, server functions, or simulated network endpoints.
- Keep all semantic visual tokens in src/styles.css and use utility classes for component layout and styling.
- Define unique metadata through the centralized pageHead helper for every content route; emit canonical and URL-based structured data only after a real deployment URL is configured.
