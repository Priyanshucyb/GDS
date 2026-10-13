# Garg Digital Services website

React + Vite + Tailwind + Framer Motion + React Router.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in dist/ (host with SPA fallback to index.html)

## Edit
- `src/data/site.js`: WhatsApp number, address, hours, email, Google Maps embed. Fields set to `null` stay hidden.
- `src/data/content.js`: services (each gets its own page at `/services/<slug>`), categories, FAQs. The services are examples. Replace them with your real list.
- Add a new service: copy one object in `services`, change `slug`, `title`, `cat`, `icon` (see `src/data/icons.js`), and text.
- Colours: `tailwind.config.js`.

## Before going live
- Add `address`, `hours` and `mapEmbedUrl` once verified.
- Add `public/og-image.png` and an `og:image` tag in `index.html` for rich link previews.
- Host with a rewrite of all paths to `index.html` (Netlify `_redirects`: `/* /index.html 200`).
"# GDS" 
