Garg Digital Services — Services page UI refresh

What changed:
- Refreshed only the /services catalogue page to follow the supplied reference: light blue hero, bold blue headline, service chips, document-card illustration, trust/support panel, search field, category filters, result count, and compact three-column service cards.
- Added nine local catalogue images, including a PAN-card-style image, Aadhaar-style card, passport/travel, printing, resume, certificates, scholarship, and tender imagery. Remaining service cards reuse a suitable image by category.
- Kept service names, descriptions, document/process detail pages, enquiry links, filters, search behavior, and existing data intact.
- Scoped all new styles to .services-catalog-v2 so the home page (first page) and its current appearance are not targeted by the new CSS.

Build note:
- A production build could not be verified in this environment because npm dependency installation timed out before Vite was available. Run `npm ci` and then `npm run build` locally to verify.
