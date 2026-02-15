# Lalin.vn Website Analysis & Áo Dài Rental Website Plan (Next.js)

---

## PART 1: LALIN.VN WEBSITE ANALYSIS

---

### 1. Website Design and Aesthetics

**Overall Design Style: Elegant East-Asian Minimalism**

Lalin.vn employs a refined, editorial-meets-e-commerce aesthetic that blends traditional Vietnamese/East Asian sensibilities with modern minimalism. The design communicates luxury, craftsmanship, and cultural heritage.

**Key Design Observations:**

| Aspect | Details |
|--------|---------|
| **Color Palette** | Muted, warm tones — ivory/cream backgrounds, deep burgundy/wine accents, gold/champagne highlights, and soft pastels. The palette evokes silk, lacquer, and traditional Vietnamese art. |
| **Typography** | Lowercase Vietnamese navigation text creates intimacy and softness. Likely uses elegant serif or semi-serif fonts for headings and clean sans-serif for body text. Product names use poetic Vietnamese (Hán-Việt style naming: "Tường Mặc", "Ngọc Liên", "Diên Hỷ"). |
| **Imagery** | High-quality editorial photography — lifestyle/lookbook style. Products are photographed on models in curated settings (traditional architecture, gardens, cultural landmarks). The imagery tells a story, not just displays a product. |
| **Layout** | Clean grid-based layout with generous whitespace. Full-width hero sections for collections. Product cards are minimal — image + name + price. |
| **Brand Contribution** | The design positions Lalin as a premium, culturally-rooted fashion brand. Every element reinforces the narrative: "modern Vietnamese femininity rooted in tradition." |

---

### 2. User Experience (UX)

**Navigation Structure:**

```
├── Sản phẩm (Products)
│   ├── Phụ Kiện (Accessories)
│   ├── Đồ Nam (Men's)
│   ├── Đồ Trẻ Em (Children's)
│   ├── Quần/Chân Váy (Pants/Skirts)
│   ├── Đầm (Dresses)
│   ├── Áo (Tops)
│   ├── Áo Dài
│   └── Đồ Nữ (Women's)
├── Bộ Sưu Tập (Collections) — 11+ named collections
├── Giá Ưu Đãi (Deals)
│   ├── Ưu đãi lên tới 30%
│   ├── Giá ưu đãi 699.000đ
│   └── Giá ưu đãi 399.000đ
├── Về Lalin (About)
│   ├── Thư gửi nàng (Brand Story)
│   └── Mẩu chuyện nhỏ (Blog)
└── Cart
```

**UX Observations:**

- **Strengths:**
  - Clean mega-menu navigation with logical category grouping
  - Product filtering by brand, price range, color, and size (S/M/L/XL)
  - Sorting options (price ascending/descending, name A-Z/Z-A, newest, bestselling, stock)
  - Live chat integration for customer support
  - Collections are narratively named (poetic Hán-Việt names), adding cultural depth
  - "Hàng đặt trước" (pre-order) and "Hết hàng" (out of stock) status clearly shown

- **Key User Flows:**
  1. Browse by category → Filter → View product → Add to cart → Checkout
  2. Explore collections (storytelling) → Discover products within a collection
  3. Read blog content → Get inspired → Browse related products
  4. Check deals/promotions → Quick purchase

- **Areas for Improvement (for our rental site):**
  - No visible search bar in the fetched content
  - No rental/booking flow (this is a purchase site)
  - Could benefit from size guide, measurement tools, and try-on features for a rental context

---

### 3. Content and Storytelling

**Content Types:**

| Content Type | Description |
|-------------|-------------|
| **Brand Story ("Thư gửi nàng")** | A heartfelt letter-style narrative about the brand's philosophy — celebrating Vietnamese feminine beauty through traditional craftsmanship and modern design |
| **Inspiration Page ("Nguồn cảm hứng")** | Detailed prose about design philosophy — references "xương quai xanh" (collarbone), traditional silhouettes, silk/brocade materials |
| **Blog ("Mẩu chuyện nhỏ")** | Multi-page blog with articles on: cultural motifs (phoenix symbolism), care guides (silk áo dài care), bridal áo dài stories, seasonal/cultural event features, craft/artisan stories |
| **Collection Stories** | Each collection has a poetic name and narrative (e.g., "Kim Chi Ngọc Diệp", "Diên Hỷ Tường Duyên") |
| **Product Descriptions** | Poetic naming convention with material callouts (Tơ, Lụa, Kim Sa, Nhung, Gấm) |

**Storytelling Approach:**
- First-person intimate tone ("chúng mình" — we/us)
- Cultural education woven into marketing
- Emotional connection through heritage and femininity
- Artisan/craft narrative (handmade embroidery, traditional techniques)
- Vietnamese literary/poetic register in naming

---

### 4. SEO Analysis

**Keywords Targeted (Inferred):**

- Primary: áo dài, áo dài cưới (wedding áo dài), áo dài lụa, áo dài tơ tằm
- Secondary: thời trang truyền thống Việt Nam, áo dài đính kết, áo cổ yếm, đầm nhung
- Long-tail: cách bảo quản áo dài cưới, áo dài cô dâu, áo dài kim sa đính kết
- Brand: Lalin, Lalin áo dài

**SEO Observations:**
- Blog content targets informational queries (care guides, cultural articles)
- Collection pages target browsing/commercial intent
- URL structure is clean and Vietnamese-friendly (`/collections/ao-dai-1`, `/blogs/xu-huong-thoi-trang/...`)
- Blog pagination present (4+ pages of content)
- Product names are descriptive with material + style keywords

**Platform:** Built on **Shopify** (evidenced by `/collections/`, `/blogs/`, `/cart` URL patterns and Shopify-standard filtering/sorting UI patterns)

---

### 5. Technical Aspects

| Aspect | Details |
|--------|---------|
| **Platform** | Shopify (hosted e-commerce) |
| **URL Structure** | `/collections/{slug}`, `/blogs/{category}/{slug}`, `/pages/{slug}` — Shopify conventions |
| **Features** | Product filtering, sorting, cart, live chat widget, blog with pagination |
| **Product Catalog** | 36+ products visible on first page, price range 390,000₫ – 8,800,000₫ |
| **Responsiveness** | Shopify themes are mobile-responsive by default |
| **Performance** | Standard Shopify performance — generally good with CDN-backed images |

---

### 6. Marketing and Branding

**Brand Positioning:** Premium Vietnamese fashion brand celebrating traditional femininity through modern design. Not fast fashion — positioned as artisanal, heritage-driven luxury.

**Marketing Strategies Observed:**
- **Content Marketing:** Rich blog with cultural storytelling, care guides, bridal content
- **Collection-Based Marketing:** Named collections create exclusivity and narrative hooks
- **Price Tiering:** Clear deal sections (399K, 699K, 30% off) to capture price-sensitive buyers
- **Bridal Market:** Strong focus on wedding áo dài (multiple blog posts, dedicated products)
- **Live Chat:** Direct customer engagement
- **Emotional Branding:** "Thư gửi nàng" (Letter to you) creates personal connection
- **Social Proof:** Blog features real bride moments ("Khoảnh khắc cô dâu Lalin")

---

## PART 2: ÁO DÀI RENTAL WEBSITE PLAN (NEXT.JS)

---

### 1. Website Structure (Next.js Pages & Routes)

```
app/
├── page.tsx                              # Homepage
├── layout.tsx                            # Root layout (header, footer, metadata)
├── globals.css                           # Global styles (Tailwind)
│
├── (marketing)/                          # Route group for marketing pages
│   ├── about/
│   │   └── page.tsx                      # Brand story / About us
│   ├── contact/
│   │   └── page.tsx                      # Contact form, map, hours
│   └── faq/
│       └── page.tsx                      # Frequently asked questions
│
├── collections/                          # Áo dài collections
│   ├── page.tsx                          # All collections grid
│   └── [slug]/
│       └── page.tsx                      # Individual collection (SSG)
│
├── catalog/                              # Product browsing
│   ├── page.tsx                          # Full catalog with filters
│   └── [slug]/
│       └── page.tsx                      # Product detail page (SSG + ISR)
│
├── occasions/                            # Browse by occasion
│   ├── page.tsx                          # All occasions
│   └── [slug]/
│       └── page.tsx                      # Wedding, Tết, graduation, etc.
│
├── rental/                               # Rental flow
│   ├── how-it-works/
│   │   └── page.tsx                      # Rental process explanation
│   ├── booking/
│   │   └── page.tsx                      # Booking/reservation form
│   ├── size-guide/
│   │   └── page.tsx                      # Size measurement guide
│   └── policies/
│       └── page.tsx                      # Rental terms, deposit, damage policy
│
├── blog/                                 # Content marketing
│   ├── page.tsx                          # Blog listing
│   └── [slug]/
│       └── page.tsx                      # Individual blog post (SSG)
│
├── gallery/                              # Customer photos, editorial shoots
│   └── page.tsx                          # Photo gallery / lookbook
│
├── cart/
│   └── page.tsx                          # Rental cart / reservation summary
│
├── checkout/
│   └── page.tsx                          # Checkout + deposit payment
│
├── account/                              # Customer account
│   ├── page.tsx                          # Dashboard
│   ├── orders/
│   │   └── page.tsx                      # Rental history
│   └── profile/
│       └── page.tsx                      # Profile & measurements
│
└── api/                                  # API routes
    ├── products/
    │   └── route.ts                      # Product API
    ├── booking/
    │   └── route.ts                      # Booking API
    ├── contact/
    │   └── route.ts                      # Contact form handler
    └── payment/
        └── route.ts                      # Payment webhook handler
```

**Key Pages Breakdown:**

| Page | Purpose | Rendering |
|------|---------|-----------|
| **Homepage** | Hero slider, featured collections, occasion highlights, testimonials, brand intro | SSG + ISR |
| **Catalog** | Filterable grid (occasion, size, color, price range, style) | SSG + client-side filtering |
| **Product Detail** | Image gallery, description, size chart, availability calendar, "Reserve Now" CTA | SSG + ISR (for availability) |
| **Collections** | Narrative-driven collection pages (like Lalin's poetic collections) | SSG |
| **Occasions** | Curated sets for weddings, Tết, graduations, photoshoots | SSG |
| **How It Works** | Step-by-step rental process (Choose → Reserve → Receive → Return) | SSG |
| **Booking** | Date picker, size selection, delivery options, deposit calculation | SSR (real-time availability) |
| **Size Guide** | Interactive measurement guide with visual aids | SSG |
| **Blog** | SEO-driven content (styling tips, cultural stories, care guides) | SSG |
| **Gallery** | Customer photos, editorial lookbook, Instagram feed integration | SSG + ISR |
| **Account** | Rental history, saved measurements, favorites | SSR (authenticated) |

---

### 2. Content Strategy

**Content Pillars:**

| Pillar | Description | Examples |
|--------|-------------|----------|
| **Rental Education** | Demystify the rental process | "Thuê áo dài cưới: Quy trình từ A-Z", "5 điều cần biết khi thuê áo dài" |
| **Occasion Styling** | How to style áo dài for specific events | "Áo dài Tết 2026: Xu hướng & cách phối", "Áo dài cô dâu: Chọn màu theo mệnh" |
| **Cultural Heritage** | Connect áo dài to Vietnamese identity | "Lịch sử áo dài qua các thời kỳ", "Ý nghĩa họa tiết truyền thống trên áo dài" |
| **Customer Stories** | Social proof and inspiration | "Khoảnh khắc áo dài của khách hàng", real wedding features |
| **Care & Tips** | Practical value | "Cách đo size áo dài chuẩn", "Mẹo chụp ảnh đẹp với áo dài" |

**Dynamic Content with Next.js:**

```
Content Source → Headless CMS (Sanity/Strapi) → Next.js SSG/ISR
                                                  ↓
                                          Rendered pages with:
                                          - MDX blog posts
                                          - Dynamic product data
                                          - Real-time availability
```

- **Blog posts:** Authored in headless CMS, rendered via `generateStaticParams()` + ISR (revalidate: 3600)
- **Product catalog:** CMS-managed, statically generated with ISR for inventory updates
- **Customer gallery:** User-submitted + curated, ISR with short revalidation
- **Rental availability:** Client-side fetching with SWR/React Query for real-time calendar data

---

### 3. SEO Strategy

**Target Keywords:**

| Intent | Keywords |
|--------|----------|
| **Transactional** | thuê áo dài, cho thuê áo dài, thuê áo dài cưới, thuê áo dài đẹp, cho thuê áo dài TPHCM/Hà Nội |
| **Commercial** | áo dài cưới đẹp, áo dài cô dâu, giá thuê áo dài cưới, áo dài chú rể, thuê áo dài Tết |
| **Informational** | cách chọn áo dài cưới, áo dài truyền thống, ý nghĩa áo dài, cách đo size áo dài |
| **Local** | thuê áo dài [city], cho thuê áo dài gần đây, tiệm áo dài [district] |
| **Occasion** | áo dài lễ tốt nghiệp, áo dài chụp ảnh, áo dài gia đình, áo dài bê tráp |

**Next.js SEO Implementation:**

```typescript
// app/layout.tsx — Global metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.vn'),
  title: {
    default: 'Cho Thuê Áo Dài Đẹp | [Brand Name]',
    template: '%s | [Brand Name]'
  },
  description: 'Dịch vụ cho thuê áo dài cưới, áo dài truyền thống...',
  openGraph: { ... },
  robots: { index: true, follow: true },
  alternates: { canonical: '/' }
};

// app/catalog/[slug]/page.tsx — Per-product SEO
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: `Thuê ${product.name} | [Brand Name]`,
    description: product.seoDescription,
    openGraph: {
      images: [product.images[0]],
      type: 'product'
    }
  };
}

// SSG for catalog pages
export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}
```

**SEO Technical Checklist:**

- [x] `generateStaticParams()` for all product + blog pages (SSG)
- [x] ISR with `revalidate` for frequently updated pages
- [x] Dynamic `<meta>` tags via `generateMetadata()`
- [x] JSON-LD structured data (Product, LocalBusiness, BreadcrumbList, FAQPage)
- [x] `sitemap.xml` via `app/sitemap.ts`
- [x] `robots.txt` via `app/robots.ts`
- [x] Canonical URLs on all pages
- [x] Open Graph + Twitter Card meta for social sharing
- [x] Image optimization with `next/image` (WebP/AVIF, lazy loading, responsive sizes)
- [x] Vietnamese-friendly URL slugs (`/thue-ao-dai-cuoi` not `/rent-wedding-ao-dai`)
- [x] Breadcrumb navigation with structured data
- [x] Internal linking strategy between blog ↔ products ↔ occasions

---

### 4. Technical Requirements

**Core Stack:**

| Technology | Purpose |
|-----------|---------|
| **Next.js 15 (App Router)** | Framework — SSG, SSR, ISR, API routes, middleware |
| **TypeScript** | Type safety across the codebase |
| **Tailwind CSS v4** | Utility-first styling, responsive design, custom design tokens |
| **Headless CMS (Sanity v3)** | Content management for products, blog, collections |
| **PostgreSQL (via Supabase)** | Relational data — bookings, users, inventory, availability |
| **Prisma** | Type-safe ORM for database access |
| **NextAuth.js v5** | Authentication (email/password + social login) |
| **Stripe / VNPay** | Payment processing (deposits, rental fees) |
| **Cloudinary / Uploadthing** | Image storage and optimization |
| **Vercel** | Hosting and deployment |

**Key Libraries:**

```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^19.x",
    "typescript": "^5.x",
    "tailwindcss": "^4.x",
    "@tailwindcss/typography": "latest",
    "next-sanity": "latest",
    "@sanity/image-url": "latest",
    "prisma": "latest",
    "@prisma/client": "latest",
    "next-auth": "^5.x",
    "zod": "latest",
    "react-hook-form": "latest",
    "@hookform/resolvers": "latest",
    "swr": "latest",
    "framer-motion": "latest",
    "embla-carousel-react": "latest",
    "date-fns": "latest",
    "react-day-picker": "latest",
    "lucide-react": "latest",
    "next-intl": "latest",
    "sharp": "latest",
    "@vercel/analytics": "latest",
    "@vercel/speed-insights": "latest"
  },
  "devDependencies": {
    "eslint": "latest",
    "eslint-config-next": "latest",
    "prettier": "latest",
    "prettier-plugin-tailwindcss": "latest"
  }
}
```

**Data Architecture:**

```
┌─────────────┐     ┌──────────────┐     ┌─────────────────┐
│  Sanity CMS  │────▶│  Next.js App │────▶│  PostgreSQL/     │
│  (Content)   │     │  (Frontend)  │     │  Supabase (Data) │
│              │     │              │     │                  │
│ - Products   │     │ - SSG pages  │     │ - Users          │
│ - Blog posts │     │ - API routes │     │ - Bookings       │
│ - Collections│     │ - Auth       │     │ - Availability   │
│ - Pages      │     │ - Middleware │     │ - Payments       │
│ - Gallery    │     │              │     │ - Reviews        │
└─────────────┘     └──────────────┘     └─────────────────┘
```

**Data Fetching Strategy:**

| Page | Method | Reason |
|------|--------|--------|
| Homepage | `SSG + ISR (revalidate: 3600)` | Content changes infrequently |
| Product listing | `SSG + client-side filtering` | SEO-friendly base + interactive filters |
| Product detail | `SSG + ISR (revalidate: 60)` | Need fresh availability data |
| Blog posts | `SSG via generateStaticParams()` | Pure static content |
| Booking page | `SSR` | Real-time availability required |
| Account pages | `SSR + middleware auth check` | Personalized, protected content |
| Availability calendar | `Client-side (SWR)` | Real-time updates without full page reload |

---

### 5. Design Guidelines

**Design Philosophy: "Truyền Thống Đương Đại" (Contemporary Tradition)**

Inspired by Lalin's approach but adapted for a rental business — approachable luxury that makes áo dài accessible, not intimidating.

---

#### 5.1 Color System

```css
/* tailwind.config.ts — Custom color tokens */

/* Primary — Deep Burgundy/Wine (truyền thống, sang trọng) */
--color-primary-50:  #fdf2f4;
--color-primary-100: #fce7eb;
--color-primary-200: #f9d0d9;
--color-primary-500: #c2185b;
--color-primary-600: #a01349;
--color-primary-700: #860f3d;
--color-primary-900: #4a0620;

/* Secondary — Gold/Champagne (quý phái, lễ hội) */
--color-secondary-50:  #fefce8;
--color-secondary-200: #fde68a;
--color-secondary-500: #b8860b;
--color-secondary-700: #854d0e;

/* Neutral — Warm Ivory/Stone (nền trang nhã) */
--color-neutral-50:  #faf8f5;  /* Page background */
--color-neutral-100: #f5f0ea;  /* Card backgrounds */
--color-neutral-200: #e8dfd4;  /* Borders */
--color-neutral-700: #44403c;  /* Body text */
--color-neutral-900: #1c1917;  /* Headings */

/* Accent — Soft Sage Green (tự nhiên, hài hòa) */
--color-accent-500: #6b8f71;
```

#### 5.2 Typography

```css
/* Font Pairing */

/* Headings: Playfair Display or Cormorant Garamond */
/* — Elegant serif with Vietnamese diacritics support */
font-family: 'Cormorant Garamond', 'Noto Serif', serif;

/* Body: Inter or Be Vietnam Pro */
/* — Clean, highly readable, excellent Vietnamese support */
font-family: 'Be Vietnam Pro', 'Inter', sans-serif;

/* Accent/Poetic: Italiana or Great Vibes (for decorative elements only) */

/* Type Scale */
--text-display: clamp(2.5rem, 5vw, 4rem);   /* Hero headlines */
--text-h1:      clamp(2rem, 4vw, 3rem);      /* Page titles */
--text-h2:      clamp(1.5rem, 3vw, 2rem);    /* Section headers */
--text-h3:      clamp(1.25rem, 2vw, 1.5rem); /* Card titles */
--text-body:    1rem;                          /* 16px base */
--text-small:   0.875rem;                      /* 14px captions */
```

#### 5.3 Component Design System

**Tailwind CSS Implementation with `@layer components`:**

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-neutral-50 text-neutral-700 font-body antialiased;
  }
  h1, h2, h3, h4 {
    @apply font-heading text-neutral-900;
  }
}
```

**Key Components (React/Next.js):**

```
components/
├── ui/                          # Primitive UI components
│   ├── Button.tsx               # Primary, secondary, ghost variants
│   ├── Badge.tsx                # "Mới", "Hot", "Còn 2", availability
│   ├── Card.tsx                 # Product card, blog card, collection card
│   ├── Input.tsx                # Form inputs with Vietnamese labels
│   ├── Select.tsx               # Dropdown for filters
│   ├── Calendar.tsx             # Date picker for rental booking
│   ├── Modal.tsx                # Image lightbox, quick view
│   ├── Skeleton.tsx             # Loading states
│   └── Toast.tsx                # Notifications
│
├── layout/
│   ├── Header.tsx               # Sticky header, mega menu, search, cart icon
│   ├── Footer.tsx               # Links, social, newsletter, policies
│   ├── MobileMenu.tsx           # Slide-out navigation
│   └── Breadcrumb.tsx           # SEO-friendly breadcrumbs
│
├── product/
│   ├── ProductGrid.tsx          # Responsive grid with infinite scroll
│   ├── ProductCard.tsx          # Image, name, price, occasion tag
│   ├── ProductGallery.tsx       # Image carousel with zoom
│   ├── ProductInfo.tsx          # Description, sizes, availability
│   ├── AvailabilityCalendar.tsx # Date-based availability
│   ├── SizeSelector.tsx         # Size picker with measurement link
│   ├── FilterSidebar.tsx        # Faceted filtering
│   └── QuickView.tsx            # Modal product preview
│
├── booking/
│   ├── BookingForm.tsx          # Multi-step rental form
│   ├── DateRangePicker.tsx      # Rental period selection
│   ├── PriceSummary.tsx         # Dynamic pricing breakdown
│   └── BookingConfirmation.tsx  # Success state
│
├── content/
│   ├── HeroSlider.tsx           # Full-width image carousel
│   ├── CollectionBanner.tsx     # Narrative collection header
│   ├── TestimonialCarousel.tsx  # Customer reviews
│   ├── BlogCard.tsx             # Blog post preview
│   ├── GalleryGrid.tsx          # Masonry photo grid
│   └── ProcessSteps.tsx         # "How It Works" visual flow
│
└── shared/
    ├── SearchBar.tsx            # Global search with suggestions
    ├── WhatsAppButton.tsx       # Floating chat (Zalo/Messenger)
    ├── NewsletterForm.tsx       # Email capture
    └── SocialProof.tsx          # "X người đang xem" social proof
```

#### 5.4 Page Layout Patterns

**Homepage Layout:**

```
┌─────────────────────────────────────────────┐
│              ANNOUNCEMENT BAR                │  ← Promotions, Tết deals
├─────────────────────────────────────────────┤
│     HEADER  [Logo]  [Nav]  [Search] [Cart]  │  ← Sticky, transparent on hero
├─────────────────────────────────────────────┤
│                                             │
│              HERO SLIDER                     │  ← Full-width, editorial photos
│         "Thuê Áo Dài Đẹp Nhất"             │     with CTA: "Khám Phá Ngay"
│                                             │
├─────────────────────────────────────────────┤
│         HOW IT WORKS (4 steps)              │  ← Chọn → Đặt → Nhận → Trả
├─────────────────────────────────────────────┤
│                                             │
│    FEATURED COLLECTIONS (3-4 cards)         │  ← "Áo Dài Cưới", "Áo Dài Tết"
│    [Image + Overlay text + CTA]             │     "Áo Dài Truyền Thống"
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│    BESTSELLERS CAROUSEL                     │  ← Product cards, horizontal scroll
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│    BRAND STORY SECTION                      │  ← Split layout: image | text
│    "Câu chuyện của chúng tôi"              │     Lalin-style intimate narrative
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│    CUSTOMER GALLERY / TESTIMONIALS          │  ← Masonry grid of real customers
│    "Khoảnh khắc áo dài"                    │     + star ratings + quotes
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│    BLOG HIGHLIGHTS (3 posts)                │  ← SEO content teasers
│                                             │
├─────────────────────────────────────────────┤
│    NEWSLETTER + SOCIAL LINKS                │
├─────────────────────────────────────────────┤
│              FOOTER                          │  ← Policies, contact, sitemap
└─────────────────────────────────────────────┘
```

**Product Detail Page Layout:**

```
┌──────────────────────────────────────────────┐
│  Breadcrumb: Trang chủ > Áo Dài Cưới > ...  │
├─────────────────────┬────────────────────────┤
│                     │                        │
│   IMAGE GALLERY     │  PRODUCT INFO          │
│   (Carousel +       │  ├─ Name               │
│    Thumbnails +     │  ├─ Price (rental/day)  │
│    Zoom)            │  ├─ Occasion tags       │
│                     │  ├─ Description         │
│                     │  ├─ Size selector       │
│                     │  ├─ Availability cal.   │
│                     │  ├─ Date range picker   │
│                     │  ├─ Price summary       │
│                     │  ├─ [ĐẶT THUÊ NGAY]    │
│                     │  └─ Policies accordion  │
├─────────────────────┴────────────────────────┤
│  DETAILED DESCRIPTION (tabs)                 │
│  [Chi tiết] [Hướng dẫn size] [Chính sách]   │
├──────────────────────────────────────────────┤
│  SIMILAR PRODUCTS CAROUSEL                   │
├──────────────────────────────────────────────┤
│  CUSTOMER PHOTOS WITH THIS PRODUCT           │
└──────────────────────────────────────────────┘
```

#### 5.5 Responsive Breakpoints

```css
/* Tailwind defaults work well */
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Ultra-wide */

/* Product grid responsive behavior */
/* Mobile: 1 col → sm: 2 cols → lg: 3 cols → xl: 4 cols */
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
```

#### 5.6 Animation & Micro-interactions

```typescript
// Using Framer Motion for tasteful animations

// Page transitions
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>

// Product card hover
<motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>

// Image gallery — smooth carousel via Embla Carousel

// Scroll-triggered reveals for homepage sections
// Use Intersection Observer + Framer Motion
```

#### 5.7 Image Strategy

```typescript
// next/image for all product images
<Image
  src={product.image}
  alt={`Thuê ${product.name} - Áo dài ${product.occasion}`}
  width={600}
  height={900}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  placeholder="blur"
  blurDataURL={product.blurHash}
  className="object-cover aspect-[2/3]"
/>

// Aspect ratios:
// Product cards: 2:3 (portrait, emphasizes the áo dài silhouette)
// Hero images: 16:9 or full-viewport
// Blog thumbnails: 3:2 (landscape)
// Gallery: mixed (masonry layout)
```

---

### 6. Rental-Specific Features (Differentiation from Lalin)

Unlike Lalin (which sells), a rental business needs:

| Feature | Implementation |
|---------|---------------|
| **Availability Calendar** | Per-product date picker showing booked/available dates. Client-side SWR fetching from `/api/availability/[productId]`. |
| **Rental Period Selection** | Date range picker with dynamic pricing (1 day, 3 days, 1 week rates). |
| **Size Matching** | Interactive size guide with body measurement inputs → recommended size. Store measurements in user profile. |
| **Deposit System** | Partial payment at booking (30-50%), remainder on pickup. VNPay/Stripe integration. |
| **Pickup/Delivery Options** | Choose between: store pickup, home delivery (COD or prepaid), or partner location. |
| **Damage Policy** | Clear policy page + agreement checkbox at checkout. |
| **Return Process** | QR-coded rental receipts, easy return tracking in account dashboard. |
| **Occasion Curation** | Smart recommendations: "Áo dài cưới" sets (bride + groom + bridesmaids). |
| **Try-On Booking** | Schedule an in-store try-on appointment. Calendar integration. |
| **Wishlist/Favorites** | Save áo dài for later, share collections with friends (for wedding planning). |

---

### 7. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |
| Core Web Vitals | All "Good" |

**Achieved through:**
- Static generation (SSG) for most pages
- Image optimization via `next/image` + Cloudinary
- Font optimization via `next/font`
- Code splitting (automatic with Next.js App Router)
- Edge middleware for geo-based redirects
- Vercel CDN for global distribution

---

### 8. Development Phases

| Phase | Duration | Deliverables |
|-------|----------|-------------|
| **Phase 1: Foundation** | 2-3 weeks | Next.js setup, Tailwind config, Sanity CMS schema, database schema (Prisma), core UI components, layout (header/footer), homepage |
| **Phase 2: Catalog** | 2-3 weeks | Product listing, filtering, product detail page, image gallery, collections, occasions pages |
| **Phase 3: Rental Flow** | 3-4 weeks | Availability calendar, booking form, date picker, size guide, cart, checkout, payment integration (VNPay) |
| **Phase 4: Content** | 2 weeks | Blog system, about page, FAQ, gallery, SEO optimization (metadata, sitemap, structured data) |
| **Phase 5: Auth & Account** | 2 weeks | User registration/login, profile (saved measurements), rental history, favorites |
| **Phase 6: Polish** | 2 weeks | Animations, performance optimization, mobile QA, accessibility audit, analytics integration |
| **Phase 7: Launch** | 1 week | DNS, SSL, monitoring setup, soft launch, feedback iteration |

**Total estimated timeline: 14-17 weeks**

---

### 9. Summary: Key Takeaways from Lalin.vn

What to **emulate:**
- Poetic, culturally-rooted brand storytelling
- High-quality editorial photography
- Clean, luxurious minimalist design
- Strong content marketing (blog + collections with narratives)
- Vietnamese-first UX with native language throughout

What to **improve upon:**
- Add robust search functionality
- Add rental-specific UX (calendars, booking, size matching)
- Better mobile-first design for younger demographic
- Interactive features (virtual try-on preview, size calculator)
- Structured data and technical SEO (Next.js advantage over Shopify)
- Performance gains from SSG/ISR (vs. Shopify's server rendering)
- Personalization via user accounts and saved preferences
