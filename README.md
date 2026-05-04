# NanoTech Solutions

A B2B IT hardware supplier website built with **Next.js 14** (Pages Router), **Tailwind CSS**, and **Framer Motion**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
pages/
  index.js          # Home page
  products.js       # Filterable product catalogue
  product/[id].js   # Individual product detail (SSG)
  about.js          # About page
  contact.js        # Contact page with WhatsApp form
  _app.js           # Global CSS import
  _document.js      # Google Fonts (Inter)

components/
  Header.js         # Sticky header with mobile menu
  Footer.js         # Footer with links and social
  HeroSection.js    # Animated hero section
  ProductCard.js    # Product card with WhatsApp CTA
  FeatureSection.js # Feature highlights with stagger animation
  CTAButtons.js     # WhatsApp / Facebook / Phone buttons
  Testimonials.js   # Customer testimonials grid
  FloatingWhatsApp.js # Fixed WhatsApp floating button
  SEO.js            # Head meta tags wrapper

data/
  products.js       # 12 products across 6 categories

public/
  nt_logo2_transparent_dark.png
  nt_logo2_transparent_white.png
```

## Build

```bash
npm run build
```

## Contact

- WhatsApp: https://wa.me/8801518950217
- Facebook: https://facebook.com/NanoTech.BD
- Phone: +880 1518-950217
