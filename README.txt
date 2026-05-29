# Lindi's Sweet Bakes — WEDE5020 Web Development Project

**Student:** Lindiwe Mthethwa
**Student Number:** ST10129141
**Module:** WEDE5020 — Web Development
**Institution:** The Independent Institute of Education (IIE)

---

## Project Description

Lindi's Sweet Bakes is a five-page fictional artisan bakery website for a boutique bakery based in Pretoria, Gauteng. The website presents the bakery's story, products, and contact details, and allows customers to submit custom order enquiries online.

The project was built as part of the WEDE5020 module assessments.

---

## Website Pages

| Page | Filename | Description |
|---|---|---|
| Homepage | `index.html` | Hero section, product highlights, testimonials, CTA |
| About Us | `about.html` | Bakery origin story, mission & vision, baker profile |
| Products | `products.html` | Filterable product grid with 14 baked goods |
| Enquiry | `enquiry.html` | Custom order enquiry form |
| Contact | `contact.html` | Two location cards, contact form, quick contact strip |

---

## File Structure

```
lindi-sweet-bakes/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css              ← External stylesheet (Part 2)
├── js/
│   └── script.js              ← JavaScript interactions (Part 3)
├── images/
│   └── responsiveness/        ← Device screenshots (Part 2)
│       ├── mobile-375px.png
│       ├── tablet-768px.png
│       ├── tablet-1024px.png
│       └── desktop-1440px.png
└── README.md
```

---

## Part 2 — CSS Styling & Responsive Design

### External Stylesheet

A single external CSS file (`css/style.css`) is linked to all five HTML pages. It contains all styling for the website, including:

- **CSS Reset** — Normalises browser default styles for consistent cross-browser rendering across Chrome, Firefox, Safari, and Edge.
- **CSS Custom Properties (Variables)** — Centralised design tokens for colours, typography, spacing, shadows, and radii, all defined in `:root`. Updating a variable propagates the change across the entire site automatically.
- **Typography** — Playfair Display (headings) and Lato (body text) loaded via Google Fonts. A fluid type scale using `rem` units ensures proportional sizing at all screen sizes.
- **Layout** — CSS Flexbox and CSS Grid are used throughout for all multi-column layouts including the navigation bar, features grid, products grid, footer, about story, and enquiry two-column panel.
- **Visual Styles** — Colour palette, border-radius, box-shadows, hover transitions, and pseudo-class states (`:hover`, `:focus`, `:active`) on buttons, links, inputs, and cards.
- **Forms** — Base input styling, focus ring states, invalid field states, inline error message display, and success message visibility.
- **Responsive Design** — Four media query breakpoints targeting desktop, tablet, mobile, and small mobile screen sizes.

### CSS Techniques Used

| Technique | Where Applied |
|---|---|
| CSS Custom Properties (`:root` variables) | Colours, fonts, spacing, shadows — entire site |
| CSS Grid (`grid-template-columns`) | Features grid, products grid, footer, contact grid |
| CSS Flexbox (`display: flex`) | Navigation bar, buttons, cards, form rows, baker card |
| Media Queries (`@media`) | Four responsive breakpoints |
| Pseudo-classes (`:hover`, `:focus`, `:active`) | Nav links, buttons, inputs, product cards |
| CSS transitions | Hover effects on buttons, cards, nav links |
| Relative units (`rem`, `em`, `%`, `fr`) | Typography, spacing, column widths |

### Responsive Design Breakpoints

| Breakpoint | Width | Key Changes |
|---|---|---|
| Desktop | > 1024px | Full layout — 3-col grids, side-by-side panels, horizontal navigation |
| Tablet | ≤ 1024px | 2-col grids, stacked enquiry layout, 2-col footer |
| Mobile | ≤ 768px | Single-column layout, hamburger navigation menu, stacked CTA buttons |
| Small Mobile | ≤ 480px | Tighter spacing, smaller headings, reduced card and section padding |

### Relative Units Used

- `rem` — all font sizes and most spacing values (based on 16px root)
- `fr` — CSS Grid column fractions
- `%` — percentage-based widths for fluid elements
- `em` — letter-spacing values
- `vh` — hero section minimum height

### Key Achievements in Phase 2

- **Responsive Design** — Website adapts to desktop, tablet, and mobile devices
- **Visual Identity** — Implemented warm cream and golden honey colour scheme with Playfair Display typography reflecting artisan bakery branding
- **Interactive Elements** — Added hover states and focus indicators for improved user experience
- **Cross-browser Compatibility** — Ensured consistent appearance across Chrome, Firefox, Safari, and Edge
- **Performance Optimisation** — Created efficient CSS with minimal redundancy using custom properties

### Technical Specifications

- **CSS Framework** — Custom CSS with Grid and Flexbox layouts
- **Typography** — Google Fonts integration (Playfair Display, Lato)
- **Responsive Breakpoints** — Four breakpoints: 1024px, 768px, 480px
- **Browser Support** — Modern browsers with graceful degradation
- **Code Organisation** — Modular CSS structure with clear section commenting

---

## Responsiveness Testing and Iteration Across Devices

These screenshots show how the site responds on common devices after iterative testing and adjustments.

### Mobile

**375 × 812px**
![Lindi's Sweet Bakes on Mobile 375px](images/responsiveness/mobile-375px.png)

### Tablet

| **768 × 1024px** | **1024 × 768px** |
|---|---|
| ![Lindi's Sweet Bakes on Tablet 768px](images/responsiveness/tablet-768px.png) | ![Lindi's Sweet Bakes on Tablet 1024px](images/responsiveness/tablet-1024px.png) |

### Desktop

**1440 × 900px**
![Lindi's Sweet Bakes on Desktop 1440px](images/responsiveness/desktop-1440px.png)

---

## Changelog

### Part 2 Updates

| # | Date | Change | Reason |
|---|---|---|---|
| 1 | 2026-05-28 | Created `css/style.css` — full external stylesheet with CSS reset, variables, typography, layout, components, and responsive styles | Part 2 requirement: external stylesheet linked to all pages |
| 2 | 2026-05-28 | Linked `css/style.css` to all five HTML pages via `<link rel="stylesheet">` in `<head>` | All pages must share one external stylesheet |
| 3 | 2026-05-28 | Added four responsive breakpoints (1024px tablet, 768px mobile, 480px small mobile) via media queries | Part 2 requirement: responsive design for multiple screen sizes |
| 4 | 2026-05-28 | Implemented CSS Grid layouts for products grid, features grid, footer, and contact grid | Part 2 requirement: CSS layout techniques |
| 5 | 2026-05-28 | Implemented CSS Flexbox for navigation, cards, form rows, and button groups | Part 2 requirement: CSS layout techniques |
| 6 | 2026-05-28 | Added `:hover`, `:focus`, `:active` pseudo-class styles to buttons, nav links, inputs, and cards | Part 2 requirement: interactive pseudo-classes |
| 7 | 2026-05-28 | Defined all design tokens (colours, fonts, spacing, shadows) as CSS custom properties in `:root` | Efficient cascading — one change updates the whole site |
| 8 | 2026-05-28 | Created `images/responsiveness/` folder and added four device screenshots | Part 2 requirement: screenshot evidence of responsive testing |
| 9 | 2026-05-28 | Updated `README.md` with Part 2 documentation, breakpoint table, responsiveness section, and changelog | Part 2 requirement: updated README |

### Part 1 — Original Submission

| # | Date | Change | Description |
|---|---|---|---|
| 1 | 2026 | Created `index.html` | Homepage with hero, features, testimonials, CTA, and footer |
| 2 | 2026 | Created `about.html` | About page with story, mission/vision, values, and baker profile |
| 3 | 2026 | Created `products.html` | Products page with 14 product cards and filter bar |
| 4 | 2026 | Created `enquiry.html` | Custom order enquiry form |
| 5 | 2026 | Created `contact.html` | Location cards, contact form, and quick contact strip |

---

## References

- Google Fonts. (2024). *Playfair Display*. [Online]. Available at: https://fonts.google.com/specimen/Playfair+Display. [Accessed 28 May 2026].
- Google Fonts. (2024). *Lato*. [Online]. Available at: https://fonts.google.com/specimen/Lato. [Accessed 28 May 2026].
- Mozilla Developer Network. (2024). *CSS Custom Properties (Variables)*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties. [Accessed 28 May 2026].
- Mozilla Developer Network. (2024). *CSS Grid Layout*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout. [Accessed 28 May 2026].
- Mozilla Developer Network. (2024). *CSS Flexible Box Layout*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout. [Accessed 28 May 2026].
- Mozilla Developer Network. (2024). *Using media queries*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries. [Accessed 28 May 2026].
- Mozilla Developer Network. (2024). *HTML Forms*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms. [Accessed 28 May 2026].
- W3Schools. (2024). *CSS Responsive Web Design*. [Online]. Available at: https://www.w3schools.com/css/css_rwd_intro.asp. [Accessed 28 May 2026].
- W3C. (2024). *CSS Pseudo-classes*. [Online]. Available at: https://www.w3.org/TR/selectors-4/#pseudo-classes. [Accessed 28 May 2026].

---

*Lindi's Sweet Bakes is a fictional business created for academic purposes only.*  
*© 2026 Lindiwe Mthethwa (ST10129141) — WEDE5020*