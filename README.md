# Lindi's Sweet Bakes 🍰

**Student:** Lindiwe Mthethwa | ST10129141  
**Module:** WEDE5020 — Web Development  
**Institution:** The Independent Institute of Education (IIE)  
**Project:** Part 3 — Enhancing Functionality and SEO  

---

## About the Project

Lindi's Sweet Bakes is a fictional artisan bakery based in Pretoria, Gauteng, South Africa. The website showcases the bakery's custom cakes, cupcakes, artisan breads, pastries, cookies and brownies. It was developed across three parts of the WEDE5020 module, with each part adding new features and improvements.

**Live Site:** [Deploy link — see below after Netlify deployment]  
**GitHub Repo:** https://github.com/lindiweantony6-stack/lindi-ssweetbakery

---

## Website Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Landing page with hero, features, testimonials, CTA |
| About | `about.html` | Bakery story, values, team info |
| Products | `products.html` | Dynamic product listings, gallery, FAQ accordion |
| Enquiry | `enquiry.html` | Custom order form with validation and price response |
| Contact | `contact.html` | General contact form, interactive Leaflet map |

---

## Technologies Used

- **HTML5** — Semantic markup, ARIA accessibility attributes
- **CSS3** — Custom properties (design tokens), Flexbox, CSS Grid, transitions, animations
- **JavaScript (Vanilla)** — DOM manipulation, event handling, form validation, dynamic content
- **Leaflet.js** — Interactive map (OpenStreetMap tiles)
- **Google Fonts** — Playfair Display + Lato
- **SEO** — Meta tags, Open Graph, robots.txt, sitemap.xml

---

## Part 3 Features Implemented

### JavaScript & Interactivity
- **Mobile navigation** — burger menu with animated open/close, closes on outside click
- **Sticky header** — shadow appears on scroll via IntersectionObserver
- **Scroll-reveal animations** — cards and sections animate in as they enter the viewport
- **Accordion (FAQ)** — smooth expand/collapse on products page with ARIA support
- **Gallery lightbox** — click any gallery image to view full-size; keyboard navigation (Arrow keys, Escape); previous/next navigation
- **Dynamic product loading** — all 12 products rendered from a JavaScript data array into `#products-grid`
- **Search and filter** — real-time product search by name/description/tags; category filter buttons
- **Interactive Leaflet map** — two bakery location markers with popups on contact page

### Forms
- **Enquiry form** — validates name, email (regex), phone (South African format regex), product type, quantity, date (min 2 days from today); displays dynamic price estimate on valid submission
- **Contact form** — validates name, email, message type, message length; builds and opens a pre-filled mailto email on submission
- Both forms display clear inline error messages per field; scroll to first error on failed validation

### SEO
- Unique `<title>` and `<meta name="description">` on every page
- `<meta name="keywords">` with relevant local search terms per page
- Open Graph meta tags on all pages for social sharing
- Twitter Card meta tags
- Canonical URL tags
- `robots.txt` — allows all crawlers, links to sitemap
- `sitemap.xml` — all 5 pages with lastmod, changefreq, and priority
- Descriptive alt text and file name conventions for all images
- Semantic heading hierarchy (H1 → H2 → H3) on all pages
- Internal linking between all pages via navigation and CTAs

### Bug Fixes from Part 2 Feedback
_(see Changelog below)_

---

## File Structure

```
lindi-ssweetbakery/
│
├── index.html              # Homepage
├── about.html              # About page
├── products.html           # Products + gallery + FAQ
├── enquiry.html            # Custom order enquiry form
├── contact.html            # Contact form + Leaflet map
├── robots.txt              # SEO crawler instructions
├── sitemap.xml             # SEO sitemap
├── README.md               # This file
│
├── css/
│   └── style.css           # Main stylesheet (all pages)
│
├── js/
│   └── script.js           # Main JavaScript (all features)
│
└── images/
    ├── cakes/              # Cake product images
    ├── cupcakes/           # Cupcake images
    ├── breads/             # Bread images
    ├── pastries/           # Pastry images
    ├── cookies/            # Cookie images
    └── brownies/           # Brownie images
```

---

## Deployment

The site is deployed on **Netlify** (free tier).  
**Live URL:** (https://lindis-sweet-bakery.netlify.app/

To deploy manually:
1. Push all files to GitHub (this repo)
2. Log in to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project" → Connect to GitHub
4. Select this repo → Deploy site
5. Copy the generated URL and paste it here
Live Website

Netlify URL:https://lindis-sweet-bakery.netlify.app/ 

The website has been successfully deployed using Netlify and is publicly accessible through the link above.
---

## Colour Scheme

| Token | Hex | Usage |
|-------|-----|-------|
| `--warm-brown` | `#5C3D2E` | Primary brand colour |
| `--dark-brown` | `#3E2723` | Header, footer, dark backgrounds |
| `--golden-honey` | `#D4A017` | Accents, buttons, highlights |
| `--cream` | `#FDF6EC` | Page background |
| `--beige` | `#F5ECD7` | Alternate section background |

---

## Responsive Breakpoints

| Breakpoint | Layout |
|------------|--------|
| ≥ 993px | 3-column grids, side-by-side forms |
| ≤ 992px (tablet) | 2-column grids, stacked forms, burger nav |
| ≤ 600px (mobile) | Single-column, stacked buttons, smaller typography |

---

## Changelog

All changes are listed in reverse chronological order (newest first).

---

### Part 3 — 2026-06-19

**[PART3-001] Added complete JavaScript interactivity**  
Created `js/script.js` from scratch. Implemented: mobile burger navigation with aria-expanded toggle and outside-click close; sticky header shadow on scroll; IntersectionObserver scroll-reveal animations for cards and sections; accordion with smooth max-height animation and ARIA support (products page FAQ); tabs component with aria-selected and panel show/hide (for future use); gallery lightbox with keyboard navigation (ArrowLeft, ArrowRight, Escape), previous/next buttons, and ARIA dialog attributes; dynamic product rendering from a 12-item JS data array; real-time product search (filters by name, description, and tags); category filter buttons with active state; Leaflet interactive map with custom emoji markers and popups (contact page).

**[PART3-002] Added full enquiry form validation with price response**  
Enhanced `enquiry.html` form validation in `script.js`. Validates: full name (min 2 chars), email (regex pattern), phone (optional, South African mobile format regex: `/^(\+27|0)[6-8][0-9]{8}$/`), product type (required select), quantity (min 1), event date (must be at least 2 days from today). On successful validation, displays a dynamic price estimate based on product type and quantity using a pricing data object. Error messages shown inline below each field using `.form-error-msg` spans with `role="alert"` and `aria-live="polite"`. Scrolls to first error on failed validation.

**[PART3-003] Added contact form with mailto email builder**  
Built full contact form on `contact.html`. Validates name, email (regex), message type (required select), and message (min 10 chars). On valid submission, constructs a pre-filled mailto URI with encoded subject and body, opens the user's email client, and displays a confirmation message. Includes fallback instructions if email client does not open.

**[PART3-004] Implemented Leaflet interactive map on contact page**  
Added Leaflet.js (v1.9.4) to `contact.html`. Map centred on Arcadia, Pretoria (-25.7479, 28.1879), zoom level 15. Two custom emoji markers placed: Arcadia Bakery and Hatfield Farmers Market. Each marker has a popup with address and trading hours. `scrollWheelZoom` disabled for better page UX. Map dimensions set to 420px height, fully responsive at 300px on mobile.

**[PART3-005] Built dynamic product listings with search and filter**  
`products.html` now loads all product cards dynamically from the `PRODUCTS` array in `script.js` (12 products across 5 categories). Real-time search filters by product name, description, and tag arrays. Category filter buttons toggle `.filter-btn--active` class and filter the grid. "No results" message shown when search returns empty. Gallery lightbox and scroll-reveal re-initialised after each render.

**[PART3-006] Added gallery with lightbox on products page**  
Gallery section added to `products.html` with 6 items covering cakes, cupcakes, bread, pastries, and brownies. Image `onerror` fallback shows emoji placeholder when image files are not yet present. Lightbox built as a fixed overlay with `.lightbox`, `.lightbox__overlay`, `.lightbox__img`, `.lightbox__caption`, close/prev/next buttons. Keyboard accessible: Enter/Space to open, Arrow keys to navigate, Escape to close.

**[PART3-007] Added FAQ accordion on products page**  
Five accordion items added covering: order lead times, dietary requirements, delivery areas, payment methods, and design references. Smooth `max-height` CSS transition used. Only one item open at a time (others close when a new one opens). ARIA: `aria-expanded` toggled on each button.

**[PART3-008] Full SEO implementation across all pages**  
Added to every page: unique `<title>` tag, `<meta name="description">` (150–160 chars), `<meta name="keywords">` with locally relevant terms, Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`), Twitter Card meta tags, `<link rel="canonical">`. Created `robots.txt` allowing all crawlers with sitemap reference. Created `sitemap.xml` with all 5 pages, lastmod dates, changefreq, and priority values. All images use descriptive filenames and `alt` attributes.

**[PART3-009] Fixed media query layout issues (Part 2 feedback — Adjustment layout: 2/5)**  
Completely rewrote the responsive CSS in `style.css`. Two breakpoints: tablet (≤992px) and mobile (≤600px). Tablet: burger nav shown, `.nav__links` becomes an absolute dropdown, grids shift from 3-column to 2-column, footer shifts to 2-column, forms stack (enquiry and contact wrappers become single-column). Mobile: all grids become single-column, hero buttons stack and stretch full width, form rows stack, footer becomes single-column, font sizes scale down using `clamp()`, map height reduces to 300px. Previously the `.enquiry-wrapper` and `.contact-wrapper` two-column grids did not collapse on tablet, causing overflow — now fixed.

**[PART3-010] Improved CSS typography and decoration (Part 2 feedback)**  
Added `clamp()` fluid font sizing for H1–H3 across all breakpoints. Added `:focus-visible` global styles for accessibility. Improved button hover states with `translateY(-2px)` and box-shadow transitions. Added `.reveal` and `.reveal--visible` animation classes. Refined colour contrast: body text now uses `--text-dark: #2C1810` for WCAG-compliant contrast on cream background.

**[PART3-011] Added visually-hidden utility class and ARIA label improvements (Part 1 feedback)**  
Added `.visually-hidden` CSS class used for screen-reader-only labels (e.g. product search label). Reviewed and improved `aria-label`, `role`, and `aria-live` attributes across all pages to address Part 1 accessibility feedback.

**[PART3-012] Added robots.txt and sitemap.xml**  
`robots.txt`: allows all user-agents, includes sitemap URL. `sitemap.xml`: XML sitemap listing all 5 pages with ISO 8601 lastmod dates, changefreq, and priority settings per Google Search Console recommendations.

---

### Part 2 — [Previously submitted]

- Created external `css/style.css` with CSS custom properties, typography, layout, decoration, and pseudo-class styles
- Implemented responsive media queries for tablet and mobile
- Applied navigation, hero, footer, form card, and section styles
- Added Google Fonts (Playfair Display + Lato)

---

### Part 1 — [Previously submitted]

- Created initial 5-page HTML structure: `index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`
- Set up GitHub repository and initial commit
- Applied semantic HTML5 elements throughout
- Set up navigation with active page highlighting

---

## References

Harvard referencing format:

Leaflet (2023). *Leaflet — an open-source JavaScript library for mobile-friendly interactive maps*. [online] Available at: https://leafletjs.com [Accessed 19 June 2026].

Mozilla Developer Network (2024). *HTML: HyperText Markup Language*. [online] MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 19 June 2026].

Mozilla Developer Network (2024). *CSS: Cascading Style Sheets*. [online] MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 19 June 2026].

Mozilla Developer Network (2024). *JavaScript*. [online] MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 19 June 2026].

Mozilla Developer Network (2024). *Intersection Observer API*. [online] MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 19 June 2026].

Google (2024). *Google Fonts*. [online] Available at: https://fonts.google.com [Accessed 19 June 2026].

OpenStreetMap Contributors (2024). *OpenStreetMap*. [online] Available at: https://www.openstreetmap.org [Accessed 19 June 2026].

Sitemaps.org (2024). *Sitemaps XML format*. [online] Available at: https://www.sitemaps.org/protocol.html [Accessed 19 June 2026].

Google Search Central (2024). *Introduction to robots.txt*. [online] Available at: https://developers.google.com/search/docs/crawling-indexing/robots/intro [Accessed 19 June 2026].

W3Schools (2024). *HTML Form Elements*. [online] Available at: https://www.w3schools.com/html/html_form_elements.asp [Accessed 19 June 2026].

Web Accessibility Initiative (WAI) (2024). *ARIA Authoring Practices Guide*. [online] W3C. Available at: https://www.w3.org/WAI/ARIA/apg/ [Accessed 19 June 2026].

Netlify (2024). *Netlify Docs — Deploy from Git*. [online] Available at: https://docs.netlify.com/site-deploys/create-deploys/ [Accessed 19 June 2026].
