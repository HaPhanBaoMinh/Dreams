# Dreams — Vietnamese Wedding "Bưng Quả" & Áo Dài Rental

> A Next.js website for a Vietnamese wedding ceremony service specializing in
> "bưng quả" (ceremonial tray bearing) and áo dài rental.

---

## Table of Contents

- [Part I — Lalin.vn Website Analysis](#part-i--lalinvn-website-analysis)
  - [1. Design and Aesthetics](#1-design-and-aesthetics)
  - [2. User Experience](#2-user-experience)
  - [3. Content and Storytelling](#3-content-and-storytelling)
- [Part II — Website Plan: Bưng Quả & Áo Dài Rental](#part-ii--website-plan-bưng-quả--áo-dài-rental)
  - [4. Website Concept](#4-website-concept)
  - [5. Wireframe and Layout](#5-wireframe-and-layout)
  - [6. Color Palette and Typography](#6-color-palette-and-typography)
  - [7. Technical Considerations](#7-technical-considerations)
- [Conclusion](#conclusion)

---

## Part I — Lalin.vn Website Analysis

Lalin.vn is a Vietnamese fashion brand selling premium áo dài and traditional-
inspired womenswear. The site is built on Shopify and targets women who value
cultural heritage expressed through modern design. The following analysis
examines three dimensions of the site as a reference point for our own project.

---

### 1. Design and Aesthetics

**Overall Style: Elegant East-Asian Minimalism**

Lalin.vn presents a refined, editorial aesthetic that blends traditional
Vietnamese sensibilities with contemporary minimalism. Every visual decision
reinforces the brand's core message: *modern femininity rooted in tradition.*

**Color Palette**

The site uses a muted, warm palette that evokes silk, lacquer, and
traditional Vietnamese art:

- **Backgrounds** — Ivory and warm cream tones. Clean, paper-like surfaces
  that let product photography dominate.
- **Accents** — Deep burgundy/wine and champagne/gold for call-to-action
  elements, hover states, and decorative borders.
- **Text** — Near-black for headings, warm dark gray for body copy. No harsh
  pure-black is used, maintaining softness throughout.
- **Photography tint** — Images lean warm, with soft natural lighting that
  complements the ivory backgrounds.

The result is a visual atmosphere that feels like walking into a high-end
silk boutique — warm, quiet, and luxurious without being ostentatious.

**Typography**

- Navigation and UI elements use **lowercase Vietnamese** text, which is an
  unusual and deliberate choice that creates intimacy and softness (e.g.,
  "sản phẩm", "bộ sưu tập", "về lalin").
- Headings appear to use an elegant **serif typeface**, lending a literary,
  editorial quality to page titles and collection names.
- Body text uses a clean **sans-serif** with excellent Vietnamese diacritics
  support, ensuring readability at all sizes.
- Product names follow a **poetic Hán-Việt naming convention** (e.g., "Áo Dài
  Kim Sa Tường Yến", "Đầm Nhung Đoan Tường"), reinforcing the brand's
  cultural depth.

**Imagery**

- **Editorial/lookbook photography** — Models are photographed in curated
  settings: traditional architecture, gardens, cultural landmarks. The images
  tell a story rather than simply displaying garments.
- **Consistent aspect ratios** — Product cards use portrait orientation (2:3),
  emphasizing the full-length silhouette of áo dài.
- **Full-width hero sections** for collections and blog posts create visual
  impact and immerse the visitor immediately.
- The overall effect positions Lalin as a brand where every garment is an
  artwork, not just a commodity.

---

### 2. User Experience

**Information Architecture**

The site organizes content into four top-level navigation groups:

```
Sản phẩm (Products)
├── Phụ Kiện          — Accessories (brooches, hair ornaments, lacquerware)
├── Đồ Nam            — Men's items
├── Đồ Trẻ Em         — Children's items
├── Quần / Chân Váy   — Pants and skirts
├── Đầm               — Dresses
├── Áo                — Tops
├── Áo Dài            — Áo dài (core category)
└── Đồ Nữ             — All women's items

Bộ Sưu Tập (Collections)
├── 11+ named collections, each with a poetic Hán-Việt title
│   (e.g., "Kim Chi Ngọc Diệp", "Diên Hỷ Tường Duyên")
└── Each collection links to a narrative blog post, not just a product grid

Giá Ưu Đãi (Deals)
├── Ưu đãi lên tới 30%
├── Giá ưu đãi 699.000đ
└── Giá ưu đãi 399.000đ

Về Lalin (About)
├── Thư gửi nàng      — Brand story (letter format)
└── Mẩu chuyện nhỏ    — Blog articles
```

**Key User Flows**

| Flow | Path |
|------|------|
| **Discovery** | Homepage hero → Browse collections → Read collection story → View products |
| **Direct shopping** | Navigate to product category → Apply filters (price, size, color) → View product detail → Add to cart |
| **Inspiration** | Blog article → Related product links → Product detail → Purchase |
| **Deal hunting** | "Giá ưu đãi" menu → Filtered deal pages → Quick browse and buy |

**Strengths**

- Clean mega-menu with logical grouping. Categories are visible at a glance.
- Product filtering covers price ranges (five tiers from under 500K to over
  5M), sizes (S/M/L/XL), and colors.
- Sorting provides six options: price (asc/desc), name (A-Z/Z-A), newest,
  and bestselling.
- Live chat widget for immediate customer support.
- Stock status is clearly displayed ("Hết hàng" for sold out, "Hàng đặt
  trước" for pre-order).

**Limitations (relevant to our project)**

- No visible search functionality in the navigation.
- No booking or scheduling flow — the site is purchase-only.
- No interactive size guide or measurement tool.
- No user accounts with saved preferences or order history.
- These are all areas where our rental-focused site can differentiate.

---

### 3. Content and Storytelling

**Brand Narrative**

Lalin's storytelling centers on one idea: *Vietnamese femininity is beautiful
precisely because it is subtle, refined, and rooted in heritage.* This
narrative is delivered through two dedicated pages:

- **"Thư gửi nàng" (A letter to you)** — An intimate, first-person address
  to the customer. The brand describes itself as "nơi giao thoa hài hoà giữa
  giá trị văn hoá truyền thống và góc nhìn thẩm mỹ của người phụ nữ hiện đại"
  (a harmonious intersection of traditional cultural values and the modern
  woman's aesthetic perspective). The language is literary, almost poetic.

- **"Nguồn cảm hứng" (Inspiration)** — An essay describing how the subtle
  beauty of Vietnamese women — "xương quai xanh mong manh, cổ tay thon gọn,
  đường võng lưng mềm mại" (delicate collarbones, slender wrists, the soft
  curve of the back) — inspires every design. Materials are named as
  characters: silk, brocade, and mulberry silk each carry cultural weight.

**Content Types**

| Type | Purpose | Examples |
|------|---------|---------|
| **Collection narratives** | Connect products to cultural stories | Each of the 11+ collections has a poetic name and a dedicated blog post explaining its inspiration |
| **Blog ("Mẩu chuyện nhỏ")** | SEO, education, emotional engagement | "Cổ Yếm — Thanh Âm Dịu Dàng Của Tính Nữ Việt", "Chim Phụng — Biểu Tượng Của Tính Nữ Và Di Sản" |
| **Bridal content** | Capture high-value wedding market | "Khoảnh khắc cô dâu Lalin", "Áo dài cưới Lalin — Khi di sản chạm đến khoảnh khắc thiêng liêng" |
| **Care guides** | Practical value, trust building | "Cách bảo quản áo dài cưới tơ tằm để giữ trọn vẻ tinh khôi" |
| **Artisan stories** | Differentiate from mass production | "Đôi Bàn Tay Thủ Công — Hành Trình Lalin Giữ Lại Những Giá Trị Đẹp" |

**Storytelling Techniques**

1. **First-person intimacy** — The brand uses "chúng mình" (we/us, informal)
   rather than "chúng tôi" (we, formal), creating closeness with the reader.
2. **Cultural education as marketing** — Blog posts teach about phoenix
   symbolism in Huế court art, the history of the yếm (traditional bodice),
   and Hà Nội autumn traditions. The products then become natural extensions
   of this cultural knowledge.
3. **Poetic naming** — Product names read like lines of poetry ("Nhược Cẩm
   Phù Hoa", "Thủy Túc Uyên Tầm"), elevating commercial items into cultural
   artifacts.
4. **Sensory language** — Descriptions emphasize texture, light, and
   movement. Words like "dịu dàng" (gentle), "mềm mại" (soft), "thanh thoát"
   (graceful) recur throughout.

**Takeaway for our project:** The website should not simply list rental
products. It should tell the story of Vietnamese wedding culture — the
meaning behind bưng quả ceremonies, the symbolism of colors and numbers, the
role of áo dài in connecting generations. Every page should educate, inspire,
and build emotional investment before presenting a service option.

---

## Part II — Website Plan: Bưng Quả & Áo Dài Rental

---

### 4. Website Concept

**The Service**

"Bưng quả" (also called "đám hỏi" tray bearing) is a central ritual in
Vietnamese weddings. The groom's family sends a procession of young men and
women carrying ceremonial lacquer trays filled with symbolic gifts (betel
leaves, tea, fruit, cakes, jewelry) to the bride's family. This service
provides:

1. **Bưng quả personnel** — Trained, well-presented young men and women to
   carry the ceremonial trays during the engagement ceremony.
2. **Áo dài rental** — Coordinated áo dài sets for the bưng quả team, the
   bride, the groom, and family members.
3. **Ceremony coordination** — Guidance on tray arrangement, procession
   etiquette, and ritual protocol.

**Target Audience**

| Segment | Profile |
|---------|---------|
| **Primary** | Vietnamese couples aged 24-35 planning their engagement ceremony (lễ đám hỏi) or wedding (lễ cưới), primarily in major cities (TPHCM, Hà Nội, Đà Nẵng) |
| **Secondary** | Parents of the bride/groom who traditionally organize the bưng quả ceremony |
| **Tertiary** | Wedding planners, event coordinators, and photographers seeking reliable bưng quả partners |

**Brand Identity**

| Element | Description |
|---------|-------------|
| **Name** | *Dreams* — Evoking aspiration, celebration, and the idealized vision couples have for their wedding day |
| **Tagline** | "Nâng niu trọn vẹn ngày trọng đại" (Cherishing every moment of your special day) |
| **Voice** | Warm, knowledgeable, reassuring. Like a trusted older sister who knows all the wedding traditions and guides you through them with care |
| **Positioning** | Premium but accessible. Not the cheapest option, but the one where every detail is handled with cultural understanding and aesthetic precision |

**Unique Value Proposition**

> Dreams combines the artistry of áo dài fashion with the cultural expertise
> of traditional Vietnamese wedding ceremonies. We do not just rent costumes
> — we help families honor the "lễ nghĩa" (ritual and propriety) that makes
> a Vietnamese wedding meaningful.

**Differentiation from Lalin.vn:**

- Lalin sells individual garments. Dreams provides a **complete ceremony
  service** — people, costumes, and cultural guidance as one package.
- Lalin targets fashion-conscious women. Dreams targets **couples and
  families** planning a specific life event.
- Lalin's UX is browse-and-buy. Dreams needs **booking, scheduling, and
  consultation** flows.
- Lalin's content is about fashion and beauty. Dreams' content should cover
  **wedding culture, ceremony etiquette, and planning advice**.

---

### 5. Wireframe and Layout

The following wireframes describe the layout for each key page. All text
content shown is placeholder; final copy will be developed during the
content phase.

---

#### 5.1 Homepage

```
┌──────────────────────────────────────────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░  ANNOUNCEMENT BAR  ░░░░░░░░░░░░░░░░░░░░░░░  │
│  "Ưu đãi mùa cưới 2026 — Giảm 15% cho đặt sớm trước 30/04"   │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  [Dreams Logo]         [Dịch vụ] [Áo dài] [Bộ sưu tập]        │
│                        [Blog] [Về chúng tôi]    [🔍] [📞]      │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│                     ┌─────────────────────┐                      │
│                     │                     │                      │
│                     │    HERO IMAGE       │                      │
│                     │    (full-width)     │                      │
│                     │                     │                      │
│                     │  "Trọn vẹn lễ      │                      │
│                     │   nghĩa — Trọn     │                      │
│                     │   vẹn yêu thương"  │                      │
│                     │                     │                      │
│                     │  [ Đặt lịch tư vấn ]│                      │
│                     │  [ Xem dịch vụ ➝  ]│                      │
│                     │                     │                      │
│                     └─────────────────────┘                      │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ─── DỊCH VỤ CỦA CHÚNG TÔI ───                                │
│                                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                   │
│  │          │    │          │    │          │                    │
│  │  [img]   │    │  [img]   │    │  [img]   │                   │
│  │          │    │          │    │          │                    │
│  │ Bưng Quả │    │ Cho Thuê │    │ Trọn Gói │                   │
│  │ Trọn Gói │    │ Áo Dài   │    │ Lễ Cưới  │                   │
│  │          │    │          │    │          │                    │
│  │ Lorem    │    │ Lorem    │    │ Lorem    │                    │
│  │ ipsum    │    │ ipsum    │    │ ipsum    │                    │
│  │ dolor... │    │ dolor... │    │ dolor... │                    │
│  │          │    │          │    │          │                    │
│  │ [Tìm     │    │ [Khám    │    │ [Xem chi │                   │
│  │  hiểu ➝] │    │  phá ➝]  │    │  tiết ➝] │                   │
│  └──────────┘    └──────────┘    └──────────┘                   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ─── CÁCH THỨC HOẠT ĐỘNG ───                                   │
│                                                                  │
│    ①              ②              ③              ④               │
│   Tư vấn         Chọn           Chuẩn bị       Ngày trọng      │
│   & Đặt lịch     áo dài         & Tổng duyệt   đại             │
│                                                                  │
│   Lorem ipsum    Lorem ipsum    Lorem ipsum    Lorem ipsum       │
│   dolor sit      dolor sit      dolor sit      dolor sit         │
│   amet, con-    amet, con-     amet, con-     amet, con-        │
│   sectetur...    sectetur...    sectetur...    sectetur...        │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ─── ÁO DÀI NỔI BẬT ───                        [Xem tất cả ➝] │
│                                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                   │
│  │        │ │        │ │        │ │        │                    │
│  │ [img]  │ │ [img]  │ │ [img]  │ │ [img]  │                   │
│  │  2:3   │ │  2:3   │ │  2:3   │ │  2:3   │                   │
│  │        │ │        │ │        │ │        │                    │
│  │ Tên    │ │ Tên    │ │ Tên    │ │ Tên    │                    │
│  │ áo dài │ │ áo dài │ │ áo dài │ │ áo dài │                    │
│  │        │ │        │ │        │ │        │                    │
│  │ 800K/  │ │ 1.2M/  │ │ 650K/  │ │ 900K/  │                    │
│  │ ngày   │ │ ngày   │ │ ngày   │ │ ngày   │                    │
│  └────────┘ └────────┘ └────────┘ └────────┘                   │
│                                                                  │
│         ◀  ═══════════════════════════  ▶  (carousel)           │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────┬───────────────────────────────────┐   │
│  │                      │                                   │   │
│  │                      │  ─── CÂU CHUYỆN CỦA CHÚNG TÔI   │   │
│  │    [editorial        │                                   │   │
│  │     photo]           │  "Lorem ipsum dolor sit amet,     │   │
│  │                      │   consectetur adipiscing elit.     │   │
│  │                      │   Sed do eiusmod tempor incidi-   │   │
│  │                      │   dunt ut labore et dolore magna  │   │
│  │                      │   aliqua. Ut enim ad minim        │   │
│  │                      │   veniam, quis nostrud..."        │   │
│  │                      │                                   │   │
│  │                      │   [ Đọc thêm về Dreams ➝ ]       │   │
│  │                      │                                   │   │
│  └──────────────────────┴───────────────────────────────────┘   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ─── KHOẢNH KHẮC HẠNH PHÚC ───                                 │
│                                                                  │
│  ┌────┐ ┌──────────┐ ┌────┐                                    │
│  │    │ │          │ │    │                                     │
│  │img │ │   img    │ │img │   (masonry gallery                  │
│  │    │ │          │ │    │    of real customer                  │
│  ├────┤ │          │ ├────┤    wedding photos)                  │
│  │    │ └──────────┘ │    │                                     │
│  │img │ ┌────┐┌────┐│img │                                     │
│  │    │ │img ││img ││    │                                     │
│  └────┘ └────┘└────┘└────┘                                     │
│                                                                  │
│           "Lorem ipsum dolor sit amet..."                        │
│              — Chị Nguyễn Thị M., Q.7, TPHCM                   │
│                        ★★★★★                                    │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ─── TỪ BLOG CỦA CHÚNG TÔI ───                                │
│                                                                  │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │    [img]     │ │    [img]     │ │    [img]     │            │
│  │              │ │              │ │              │             │
│  │ Ý nghĩa     │ │ Cách chọn   │ │ Bưng quả    │             │
│  │ lễ bưng     │ │ áo dài phù  │ │ bao nhiêu   │             │
│  │ quả trong   │ │ hợp cho     │ │ mâm là      │             │
│  │ đám hỏi     │ │ ngày cưới   │ │ đủ?         │             │
│  │              │ │              │ │              │             │
│  │ Lorem ipsum  │ │ Lorem ipsum  │ │ Lorem ipsum  │             │
│  │ dolor...     │ │ dolor...     │ │ dolor...     │             │
│  │              │ │              │ │              │             │
│  │ [Đọc tiếp]  │ │ [Đọc tiếp]  │ │ [Đọc tiếp]  │             │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │  Nhận tư vấn miễn phí cho ngày trọng đại của bạn        │   │
│  │                                                          │   │
│  │  [ Email của bạn...          ]  [ Đăng ký nhận tư vấn ] │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  FOOTER                                                          │
│                                                                  │
│  Dreams                  Dịch vụ              Hỗ trợ            │
│  "Nâng niu trọn vẹn     ├─ Bưng quả          ├─ FAQ             │
│   ngày trọng đại"       ├─ Áo dài cưới       ├─ Chính sách      │
│                          ├─ Áo dài bê tráp    ├─ Hướng dẫn size  │
│  📍 123 Đường ABC,      └─ Trọn gói lễ cưới  └─ Liên hệ         │
│     Q.1, TPHCM                                                   │
│  📞 0901 234 567        Khám phá              Kết nối            │
│  ✉  hello@dreams.vn     ├─ Blog               ├─ Facebook        │
│                          ├─ Bộ sưu tập        ├─ Instagram       │
│                          └─ Thư viện ảnh      └─ Zalo            │
│                                                                  │
│  ─────────────────────────────────────────────────────────────── │
│  © 2026 Dreams. All rights reserved.                             │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

#### 5.2 Service / Product Listing Page (`/ao-dai` or `/dich-vu/bung-qua`)

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER                                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Trang chủ  ›  Áo Dài Cho Thuê                                 │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │  COLLECTION HERO IMAGE (full-width, 40vh)                │   │
│  │                                                          │   │
│  │        "Áo Dài — Vẻ Đẹp Vượt Thời Gian"               │   │
│  │                                                          │   │
│  │  Lorem ipsum dolor sit amet, consectetur adipiscing      │   │
│  │  elit. Sed do eiusmod tempor incididunt ut labore.       │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌───────────────┬──────────────────────────────────────────┐   │
│  │               │                                          │   │
│  │  FILTERS      │  Sắp xếp: [Nổi bật ▾]    48 sản phẩm   │   │
│  │               │                                          │   │
│  │  Dịp          │  ┌────────┐ ┌────────┐ ┌────────┐      │   │
│  │  ☐ Đám hỏi   │  │        │ │        │ │        │       │   │
│  │  ☐ Lễ cưới   │  │ [img]  │ │ [img]  │ │ [img]  │       │   │
│  │  ☐ Bê tráp   │  │  2:3   │ │  2:3   │ │  2:3   │       │   │
│  │  ☐ Chụp ảnh  │  │        │ │        │ │        │       │   │
│  │               │  │Tên áo  │ │Tên áo  │ │Tên áo  │       │   │
│  │  Phong cách   │  │dài ABC │ │dài DEF │ │dài GHI │       │   │
│  │  ☐ Truyền     │  │800K/   │ │1.2M/   │ │650K/   │       │   │
│  │    thống      │  │ngày    │ │ngày    │ │ngày    │       │   │
│  │  ☐ Cách tân   │  └────────┘ └────────┘ └────────┘      │   │
│  │  ☐ Cổ yếm    │                                          │   │
│  │               │  ┌────────┐ ┌────────┐ ┌────────┐      │   │
│  │  Màu sắc      │  │        │ │        │ │        │       │   │
│  │  ● Đỏ  ● Hồng│  │ [img]  │ │ [img]  │ │ [img]  │       │   │
│  │  ● Vàng ● Xanh│  │  2:3   │ │  2:3   │ │  2:3   │       │   │
│  │  ● Trắng      │  │        │ │        │ │        │       │   │
│  │               │  │Tên áo  │ │Tên áo  │ │Tên áo  │       │   │
│  │  Size         │  │dài JKL │ │dài MNO │ │dài PQR │       │   │
│  │  ☐ S  ☐ M    │  │900K/   │ │750K/   │ │1.5M/   │       │   │
│  │  ☐ L  ☐ XL   │  │ngày    │ │ngày    │ │ngày    │       │   │
│  │               │  └────────┘ └────────┘ └────────┘      │   │
│  │  Giá thuê     │                                          │   │
│  │  [500K]━━[3M] │    ◀  1  2  3  ...  8  ▶               │   │
│  │               │                                          │   │
│  └───────────────┴──────────────────────────────────────────┘   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER                                                          │
└──────────────────────────────────────────────────────────────────┘
```

---

#### 5.3 Product Detail Page (`/ao-dai/[slug]`)

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER                                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Trang chủ  ›  Áo Dài  ›  Áo Dài Lụa Hồng Phấn               │
│                                                                  │
│  ┌─────────────────────────┬────────────────────────────────┐   │
│  │                         │                                │   │
│  │   ┌─────────────────┐   │  ÁO DÀI LỤA HỒNG PHẤN       │   │
│  │   │                 │   │                                │   │
│  │   │   MAIN IMAGE    │   │  ★★★★★  (24 đánh giá)         │   │
│  │   │   (zoomable)    │   │                                │   │
│  │   │                 │   │  Giá thuê: 850.000₫ / ngày    │   │
│  │   │                 │   │  Giá gốc:  1.200.000₫         │   │
│  │   │                 │   │                                │   │
│  │   │                 │   │  Lorem ipsum dolor sit amet,   │   │
│  │   │                 │   │  consectetur adipiscing elit.  │   │
│  │   │                 │   │  Vestibulum ante ipsum primis  │   │
│  │   │                 │   │  in faucibus orci luctus et.   │   │
│  │   └─────────────────┘   │                                │   │
│  │                         │  Phù hợp: Đám hỏi · Lễ cưới  │   │
│  │   ┌───┐ ┌───┐ ┌───┐   │                                │   │
│  │   │th1│ │th2│ │th3│   │  Size                           │   │
│  │   └───┘ └───┘ └───┘   │  [ S ] [ M ] [*L*] [ XL ]      │   │
│  │   ┌───┐ ┌───┐         │  📏 Hướng dẫn chọn size        │   │
│  │   │th4│ │th5│         │                                │   │
│  │   └───┘ └───┘         │  Ngày thuê                      │   │
│  │                         │  ┌──────────────────────────┐  │   │
│  │                         │  │  📅  15/03 → 17/03/2026  │  │   │
│  │                         │  │     (3 ngày)             │  │   │
│  │                         │  └──────────────────────────┘  │   │
│  │                         │                                │   │
│  │                         │  Tổng: 2.550.000₫ (3 ngày)   │   │
│  │                         │  Đặt cọc: 1.275.000₫ (50%)   │   │
│  │                         │                                │   │
│  │                         │  ┌──────────────────────────┐  │   │
│  │                         │  │    ĐẶT THUÊ NGAY         │  │   │
│  │                         │  └──────────────────────────┘  │   │
│  │                         │                                │   │
│  │                         │  ┌──────────────────────────┐  │   │
│  │                         │  │  💬  Tư vấn qua Zalo     │  │   │
│  │                         │  └──────────────────────────┘  │   │
│  │                         │                                │   │
│  │                         │  ▸ Chính sách cho thuê        │   │
│  │                         │  ▸ Giao nhận & đổi trả        │   │
│  │                         │  ▸ Bảo quản áo dài            │   │
│  │                         │                                │   │
│  └─────────────────────────┴────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │  [Chi tiết]  [Hướng dẫn size]  [Đánh giá (24)]          │   │
│  │                                                          │   │
│  │  Lorem ipsum dolor sit amet, consectetur adipiscing      │   │
│  │  elit. Praesent commodo cursus magna, vel scelerisque    │   │
│  │  nisl consectetur et. Donec sed odio dui. Aenean eu     │   │
│  │  leo quam. Pellentesque ornare sem lacinia quam          │   │
│  │  venenatis vestibulum. Sed posuere consectetur est at    │   │
│  │  lobortis. Cras mattis consectetur purus sit amet        │   │
│  │  fermentum. Fusce dapibus, tellus ac cursus commodo.     │   │
│  │                                                          │   │
│  │  Chất liệu: Lụa tơ tằm                                 │   │
│  │  Màu sắc:   Hồng phấn                                   │   │
│  │  Họa tiết:  Thêu tay hoa sen                            │   │
│  │  Kèm theo:  Quần lụa trắng, khăn vấn                   │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ─── CÓ THỂ BẠN CŨNG THÍCH ───                                │
│                                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐                   │
│  │ [img]  │ │ [img]  │ │ [img]  │ │ [img]  │                   │
│  │ Name   │ │ Name   │ │ Name   │ │ Name   │                   │
│  │ Price  │ │ Price  │ │ Price  │ │ Price  │                   │
│  └────────┘ └────────┘ └────────┘ └────────┘                   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER                                                          │
└──────────────────────────────────────────────────────────────────┘
```

---

#### 5.4 Contact Page (`/lien-he`)

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER                                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Trang chủ  ›  Liên hệ                                         │
│                                                                  │
│                 ─── LIÊN HỆ VỚI CHÚNG TÔI ───                  │
│                                                                  │
│     Lorem ipsum dolor sit amet, consectetur adipiscing elit.     │
│     Sed do eiusmod tempor incididunt ut labore et dolore.        │
│                                                                  │
│  ┌──────────────────────────┬───────────────────────────────┐   │
│  │                          │                               │   │
│  │  FORM                    │  THÔNG TIN LIÊN HỆ           │   │
│  │                          │                               │   │
│  │  Họ và tên *             │  📍 Địa chỉ                  │   │
│  │  ┌──────────────────┐    │  123 Đường ABC, Phường XYZ   │   │
│  │  │                  │    │  Quận 1, TP. Hồ Chí Minh     │   │
│  │  └──────────────────┘    │                               │   │
│  │                          │  📞 Điện thoại                │   │
│  │  Email *                 │  0901 234 567                 │   │
│  │  ┌──────────────────┐    │                               │   │
│  │  │                  │    │  ✉  Email                     │   │
│  │  └──────────────────┘    │  hello@dreams.vn              │   │
│  │                          │                               │   │
│  │  Số điện thoại *         │  🕐 Giờ làm việc              │   │
│  │  ┌──────────────────┐    │  T2 – T7: 9:00 – 19:00      │   │
│  │  │                  │    │  CN: 9:00 – 17:00            │   │
│  │  └──────────────────┘    │                               │   │
│  │                          │  ─────────────────────────    │   │
│  │  Ngày dự kiến tổ chức   │                               │   │
│  │  ┌──────────────────┐    │  KẾT NỐI VỚI CHÚNG TÔI     │   │
│  │  │  📅               │    │                               │   │
│  │  └──────────────────┘    │  [Facebook]  [Instagram]      │   │
│  │                          │  [Zalo]      [TikTok]         │   │
│  │  Dịch vụ quan tâm       │                               │   │
│  │  ☐ Bưng quả             │                               │   │
│  │  ☐ Áo dài cô dâu       │                               │   │
│  │  ☐ Áo dài bê tráp      │                               │   │
│  │  ☐ Trọn gói             │                               │   │
│  │                          │                               │   │
│  │  Lời nhắn               │                               │   │
│  │  ┌──────────────────┐    │                               │   │
│  │  │                  │    │                               │   │
│  │  │                  │    │                               │   │
│  │  │                  │    │                               │   │
│  │  └──────────────────┘    │                               │   │
│  │                          │                               │   │
│  │  [ GỬI TIN NHẮN ]       │                               │   │
│  │                          │                               │   │
│  └──────────────────────────┴───────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │                  GOOGLE MAP EMBED                        │   │
│  │                  (interactive map)                        │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER                                                          │
└──────────────────────────────────────────────────────────────────┘
```

---

#### 5.5 About Page (`/ve-chung-toi`)

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER                                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │  HERO IMAGE (full-width, editorial)                      │   │
│  │                                                          │   │
│  │           "Câu Chuyện Của Dreams"                        │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                                                          │   │
│  │  ─── THƯ GỬI BẠN ───                                    │   │
│  │                                                          │   │
│  │  Lorem ipsum dolor sit amet, consectetur adipiscing      │   │
│  │  elit. Praesent commodo cursus magna, vel scelerisque    │   │
│  │  nisl consectetur et. Donec sed odio dui. Aenean eu     │   │
│  │  leo quam. Pellentesque ornare sem lacinia quam          │   │
│  │  venenatis vestibulum.                                   │   │
│  │                                                          │   │
│  │  Sed posuere consectetur est at lobortis. Cras mattis   │   │
│  │  consectetur purus sit amet fermentum. Fusce dapibus,   │   │
│  │  tellus ac cursus commodo, tortor mauris condimentum.    │   │
│  │                                                          │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  ┌─────────────────────────┬────────────────────────────────┐   │
│  │                         │                                │   │
│  │   [photo: team at       │  ─── SỨ MỆNH CỦA CHÚNG TÔI  │   │
│  │    a wedding ceremony]  │                                │   │
│  │                         │  Lorem ipsum dolor sit amet,   │   │
│  │                         │  consectetur adipiscing elit.  │   │
│  │                         │  Vestibulum ante ipsum primis  │   │
│  │                         │  in faucibus orci luctus et    │   │
│  │                         │  ultrices posuere cubilia.     │   │
│  │                         │                                │   │
│  └─────────────────────────┴────────────────────────────────┘   │
│                                                                  │
│  ┌────────────────────────────────────────────────────────── ┐  │
│  │                         │                                │   │
│  │  ─── GIÁ TRỊ CỐT LÕI  │    [photo: áo dài detail,     │   │
│  │                         │     embroidery close-up]       │   │
│  │  Lorem ipsum dolor sit  │                                │   │
│  │  amet, consectetur      │                                │   │
│  │  adipiscing elit. Sed   │                                │   │
│  │  do eiusmod tempor.     │                                │   │
│  │                         │                                │   │
│  └─────────────────────────┴────────────────────────────────┘   │
│                                                                  │
│  ─── CON SỐ NÓI LÊN TẤT CẢ ───                                │
│                                                                  │
│     500+              1,200+           98%             5+        │
│     Lễ cưới           Áo dài          Khách hài       Năm       │
│     đã phục vụ        trong kho       lòng            kinh      │
│                                                       nghiệm   │
│                                                                  │
│  ─── ĐỘI NGŨ CỦA CHÚNG TÔI ───                                │
│                                                                  │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐                   │
│  │          │    │          │    │          │                    │
│  │  [photo] │    │  [photo] │    │  [photo] │                   │
│  │          │    │          │    │          │                    │
│  │ Tên      │    │ Tên      │    │ Tên      │                    │
│  │ Chức vụ  │    │ Chức vụ  │    │ Chức vụ  │                    │
│  │          │    │          │    │          │                    │
│  │ Lorem    │    │ Lorem    │    │ Lorem    │                    │
│  │ ipsum    │    │ ipsum    │    │ ipsum    │                    │
│  └──────────┘    └──────────┘    └──────────┘                   │
│                                                                  │
├──────────────────────────────────────────────────────────────────┤
│  FOOTER                                                          │
└──────────────────────────────────────────────────────────────────┘
```

---

### 6. Color Palette and Typography

#### 6.1 Color Palette

The palette draws from Vietnamese wedding symbolism — red for luck and
celebration, gold for prosperity, with ivory and warm neutrals providing
elegance without visual noise. A subtle green accent represents harmony and
new beginnings.

**Primary — Crimson Red (Đỏ son)**
The defining color of Vietnamese weddings. Used for primary CTAs, accent
elements, and brand touches.

| Token | Hex | Usage |
|-------|-----|-------|
| `primary-50` | `#FEF2F2` | Subtle tinted backgrounds, hover states |
| `primary-100` | `#FEE2E2` | Light accent backgrounds, badges |
| `primary-200` | `#FECACA` | Borders, dividers on light backgrounds |
| `primary-300` | `#FCA5A5` | Disabled button states |
| `primary-400` | `#F87171` | Secondary accent, icons |
| `primary-500` | `#DC2626` | Primary brand red — buttons, links, highlights |
| `primary-600` | `#B91C1C` | Button hover state, active links |
| `primary-700` | `#991B1B` | Pressed states, strong emphasis |
| `primary-800` | `#7F1D1D` | Dark accents, footer elements |
| `primary-900` | `#450A0A` | Deepest accent, used sparingly |

**Secondary — Champagne Gold (Vàng kim)**
Evokes prosperity, jewelry, and the gold leaf found in Vietnamese lacquerware
and temple decoration.

| Token | Hex | Usage |
|-------|-----|-------|
| `secondary-50` | `#FFFBEB` | Subtle warm highlight |
| `secondary-100` | `#FEF3C7` | Announcement bars, promotion badges |
| `secondary-200` | `#FDE68A` | Decorative borders, accent lines |
| `secondary-300` | `#FCD34D` | Star ratings, award badges |
| `secondary-400` | `#FBBF24` | Icons, decorative dots |
| `secondary-500` | `#D4A017` | Primary gold — headings, ornaments, price highlights |
| `secondary-600` | `#B8860B` | Gold text on light backgrounds |
| `secondary-700` | `#92400E` | Dark gold for emphasis |

**Neutral — Warm Ivory / Stone**
Provides the calm, sophisticated base that Lalin.vn executes so well. Avoids
cool grays in favor of warm, paper-like tones.

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-50` | `#FAF8F5` | Page background (replaces pure white) |
| `neutral-100` | `#F5F0EA` | Card backgrounds, alternating sections |
| `neutral-150` | `#EDE7DD` | Input field backgrounds |
| `neutral-200` | `#E8DFD4` | Borders, dividers, separators |
| `neutral-300` | `#D6CCC2` | Disabled text, placeholder text |
| `neutral-400` | `#A8A29E` | Muted icons, captions |
| `neutral-500` | `#78716C` | Secondary body text |
| `neutral-600` | `#57534E` | Body text (primary readable gray) |
| `neutral-700` | `#44403C` | Strong body text, subheadings |
| `neutral-800` | `#292524` | Near-black for emphasis |
| `neutral-900` | `#1C1917` | Headings, logo text |

**Accent — Sage Green (Xanh ngọc lam)**
A subtle tertiary color representing harmony, growth, and new beginnings.
Used sparingly for success states and nature-themed visual touches.

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-100` | `#DCFCE7` | Success backgrounds, availability indicators |
| `accent-500` | `#6B8F71` | Available dates, checkmarks, nature accents |
| `accent-700` | `#3D5A42` | Strong success text |

**Semantic Colors**

| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#22C55E` | Available, confirmed, in-stock |
| `warning` | `#EAB308` | Low stock, approaching deadline |
| `error` | `#EF4444` | Validation errors, unavailable dates |
| `info` | `#3B82F6` | Informational tooltips, help text |

#### 6.2 Color Usage Guidelines

```
Page Background         → neutral-50  (#FAF8F5)
Card / Section Alt      → neutral-100 (#F5F0EA)
Primary Button          → primary-500 (#DC2626) text: white
Primary Button Hover    → primary-600 (#B91C1C)
Secondary Button        → transparent, border: neutral-200, text: neutral-700
Secondary Button Hover  → neutral-100 background
Ghost Button            → transparent, text: primary-500, underline on hover
Headings                → neutral-900 (#1C1917)
Body Text               → neutral-600 (#57534E)
Muted / Caption Text    → neutral-400 (#A8A29E)
Links                   → primary-500 (#DC2626), underline on hover
Decorative Accents      → secondary-500 (#D4A017)
Announcement Bar        → primary-500 bg, white text  OR  secondary-100 bg, neutral-800 text
Footer Background       → neutral-900 (#1C1917), text: neutral-300
```

#### 6.3 Typography

**Font Families**

| Role | Font | Fallback | Reason |
|------|------|----------|--------|
| **Headings** | `Cormorant Garamond` | `'Noto Serif', Georgia, serif` | Elegant serif with excellent Vietnamese diacritics. Its high contrast between thick and thin strokes evokes calligraphy and traditional Vietnamese typography. Loaded via `next/font/google`. |
| **Body** | `Be Vietnam Pro` | `'Inter', system-ui, sans-serif` | Designed specifically for Vietnamese. Clean, modern, highly legible at all sizes. Excellent diacritics rendering. Loaded via `next/font/google`. |
| **Accent** | `Dancing Script` | `cursive` | Used only for decorative quotes, testimonial attributions, or the occasional poetic flourish. Never for body text or navigation. |

**Implementation with `next/font`**

```typescript
// app/layout.tsx
import { Cormorant_Garamond, Be_Vietnam_Pro } from 'next/font/google';

const heading = Cormorant_Garamond({
  subsets: ['vietnamese', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Be_Vietnam_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Type Scale**

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `display` | `clamp(2.5rem, 5vw, 4rem)` | 1.1 | 600 | Hero headlines only |
| `h1` | `clamp(2rem, 4vw, 3rem)` | 1.2 | 600 | Page titles |
| `h2` | `clamp(1.5rem, 3vw, 2rem)` | 1.3 | 600 | Section headings |
| `h3` | `clamp(1.25rem, 2vw, 1.5rem)` | 1.4 | 500 | Card titles, subsections |
| `h4` | `1.125rem` (18px) | 1.4 | 500 | Small headings, labels |
| `body` | `1rem` (16px) | 1.6 | 400 | Default paragraph text |
| `body-sm` | `0.875rem` (14px) | 1.5 | 400 | Captions, meta text, filters |
| `body-xs` | `0.75rem` (12px) | 1.4 | 400 | Badges, fine print |

**Tailwind CSS Configuration**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'Noto Serif', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#DC2626',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#450A0A',
        },
        secondary: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#D4A017',
          600: '#B8860B',
          700: '#92400E',
        },
        neutral: {
          50:  '#FAF8F5',
          100: '#F5F0EA',
          150: '#EDE7DD',
          200: '#E8DFD4',
          300: '#D6CCC2',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        accent: {
          100: '#DCFCE7',
          500: '#6B8F71',
          700: '#3D5A42',
        },
      },
      fontSize: {
        display: ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        h1:      ['clamp(2rem, 4vw, 3rem)',   { lineHeight: '1.2' }],
        h2:      ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        h3:      ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
```

---

### 7. Technical Considerations

#### 7.1 Framework: Next.js 15 (App Router)

The website will be built with **Next.js 15** using the App Router. Next.js
is chosen for the following capabilities:

| Feature | How We Use It |
|---------|---------------|
| **Static Site Generation (SSG)** | Product catalog, blog posts, about page, FAQ, and collection pages are pre-rendered at build time via `generateStaticParams()`. This ensures fast load times and excellent SEO — search engines receive fully rendered HTML. |
| **Incremental Static Regeneration (ISR)** | Product detail pages use `revalidate: 60` to refresh availability data without a full rebuild. The homepage uses `revalidate: 3600` to pick up new featured items hourly. |
| **Server-Side Rendering (SSR)** | The booking page and account dashboard use `dynamic = 'force-dynamic'` to ensure real-time data (availability, user sessions) on every request. |
| **API Routes** | `/api/booking`, `/api/contact`, and `/api/payment` handle form submissions, reservation logic, and payment webhooks server-side. |
| **Middleware** | Edge middleware handles authentication checks for `/account/*` routes and redirects unauthenticated users to login. |
| **`next/image`** | All images use the `<Image>` component for automatic WebP/AVIF conversion, responsive `srcSet`, lazy loading, and blur placeholders. |
| **`next/font`** | Fonts are self-hosted at build time with zero layout shift. Vietnamese diacritics render correctly on first paint. |
| **Metadata API** | `generateMetadata()` produces unique `<title>`, `<meta description>`, Open Graph, and JSON-LD structured data per page. |
| **`sitemap.ts` / `robots.ts`** | Programmatic sitemap and robots.txt generation ensure all product and blog URLs are discoverable by search engines. |

#### 7.2 Recommended Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 15 (App Router) | Full-stack React framework |
| **Language** | TypeScript 5 | Type safety, better DX, fewer runtime errors |
| **Styling** | Tailwind CSS v4 | Utility-first CSS with custom design tokens (see Section 6) |
| **UI Components** | shadcn/ui | Unstyled, accessible components built on Radix UI primitives. Allows full design control with Tailwind while providing accessible dialog, dropdown, calendar, and form components out of the box. |
| **Animations** | Framer Motion | Page transitions, scroll-triggered reveals, hover effects |
| **Carousel** | Embla Carousel | Lightweight, touch-friendly carousel for product galleries and hero sliders |
| **Forms** | React Hook Form + Zod | Performant form handling with schema-based validation |
| **CMS** | Sanity v3 | Headless CMS for product data, blog posts, collections, and gallery content. Editors can update content without developer involvement. |
| **Database** | PostgreSQL via Supabase | Relational data for bookings, users, availability calendar, payment records |
| **ORM** | Prisma | Type-safe database access with auto-generated types |
| **Auth** | NextAuth.js v5 (Auth.js) | Email/password + Zalo/Google social login |
| **Payments** | VNPay | Deposit collection and payment processing (Vietnamese payment gateway) |
| **Images** | Cloudinary | Image storage, transformation, and CDN delivery |
| **Analytics** | Vercel Analytics + Speed Insights | Performance monitoring and user behavior tracking |
| **Hosting** | Vercel | Edge network, automatic CI/CD from Git, serverless functions |

#### 7.3 Data Fetching Strategy

```typescript
// PATTERN 1: Static pages with periodic refresh (SSG + ISR)
// Used for: homepage, product listing, blog listing, collections

export const revalidate = 3600; // regenerate every hour

async function HomePage() {
  const featured = await sanity.fetch(FEATURED_PRODUCTS_QUERY);
  const posts = await sanity.fetch(LATEST_POSTS_QUERY);
  return <HomePageContent featured={featured} posts={posts} />;
}
```

```typescript
// PATTERN 2: Static params with per-page ISR
// Used for: individual product pages, blog posts

export async function generateStaticParams() {
  const products = await sanity.fetch(ALL_PRODUCT_SLUGS_QUERY);
  return products.map((p: { slug: string }) => ({ slug: p.slug }));
}

export const revalidate = 60; // refresh availability every minute

async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await sanity.fetch(PRODUCT_QUERY, { slug: params.slug });
  return <ProductDetail product={product} />;
}
```

```typescript
// PATTERN 3: Server-side rendering for real-time data
// Used for: booking page, account dashboard

export const dynamic = 'force-dynamic';

async function BookingPage() {
  const availability = await db.availability.findMany({ /* ... */ });
  return <BookingForm availability={availability} />;
}
```

```typescript
// PATTERN 4: Client-side fetching for interactive elements
// Used for: availability calendar widget, search suggestions

'use client';
import useSWR from 'swr';

function AvailabilityCalendar({ productId }: { productId: string }) {
  const { data, isLoading } = useSWR(
    `/api/availability/${productId}`,
    fetcher,
    { refreshInterval: 30000 } // poll every 30s
  );
  return <Calendar dates={data} loading={isLoading} />;
}
```

#### 7.4 Project Structure

```
dreams/
├── app/
│   ├── layout.tsx                    # Root layout, fonts, metadata
│   ├── page.tsx                      # Homepage (SSG + ISR)
│   ├── globals.css                   # Tailwind directives + base styles
│   ├── sitemap.ts                    # Dynamic sitemap generation
│   ├── robots.ts                     # Robots.txt
│   │
│   ├── dich-vu/                      # Services
│   │   ├── page.tsx                  # All services overview
│   │   └── [slug]/page.tsx           # Bưng quả detail, trọn gói detail
│   │
│   ├── ao-dai/                       # Áo dài catalog
│   │   ├── page.tsx                  # Listing with filters (SSG)
│   │   └── [slug]/page.tsx           # Product detail (SSG + ISR)
│   │
│   ├── bo-suu-tap/                   # Collections
│   │   ├── page.tsx                  # All collections
│   │   └── [slug]/page.tsx           # Individual collection (SSG)
│   │
│   ├── blog/                         # Blog
│   │   ├── page.tsx                  # Blog listing (SSG + ISR)
│   │   └── [slug]/page.tsx           # Blog post (SSG)
│   │
│   ├── ve-chung-toi/page.tsx         # About page (SSG)
│   ├── lien-he/page.tsx              # Contact page (SSG)
│   ├── faq/page.tsx                  # FAQ (SSG)
│   ├── thu-vien-anh/page.tsx         # Photo gallery (SSG + ISR)
│   │
│   ├── dat-lich/                     # Booking flow
│   │   ├── page.tsx                  # Booking form (SSR)
│   │   └── xac-nhan/page.tsx         # Confirmation
│   │
│   ├── tai-khoan/                    # User account (SSR, protected)
│   │   ├── page.tsx                  # Dashboard
│   │   ├── don-hang/page.tsx         # Order history
│   │   └── ho-so/page.tsx            # Profile + measurements
│   │
│   └── api/
│       ├── booking/route.ts          # Booking creation
│       ├── contact/route.ts          # Contact form handler
│       ├── availability/[id]/route.ts # Availability check
│       └── payment/webhook/route.ts  # VNPay callback
│
├── components/
│   ├── ui/                           # shadcn/ui primitives (Button, Card, etc.)
│   ├── layout/                       # Header, Footer, MobileMenu, Breadcrumb
│   ├── product/                      # ProductCard, ProductGrid, FilterSidebar
│   ├── booking/                      # BookingForm, DateRangePicker, PriceSummary
│   └── content/                      # HeroSlider, TestimonialCarousel, BlogCard
│
├── lib/
│   ├── sanity/                       # Sanity client, queries, image helpers
│   ├── db/                           # Prisma client, database utilities
│   ├── auth/                         # NextAuth config
│   └── utils.ts                      # Shared utilities (cn, formatPrice, etc.)
│
├── prisma/
│   └── schema.prisma                 # Database schema
│
├── sanity/
│   ├── schemas/                      # CMS content schemas
│   └── sanity.config.ts              # Sanity Studio config
│
├── public/
│   ├── images/                       # Static images (logo, icons, og-image)
│   └── fonts/                        # Self-hosted font files (if needed)
│
├── tailwind.config.ts                # Tailwind config (Section 6.3)
├── next.config.ts                    # Next.js config
├── tsconfig.json                     # TypeScript config
├── package.json                      # Dependencies
└── .env.local                        # Environment variables
```

#### 7.5 Key Dependencies

```json
{
  "dependencies": {
    "next": "^15.x",
    "react": "^19.x",
    "react-dom": "^19.x",
    "typescript": "^5.x",
    "tailwindcss": "^4.x",
    "@tailwindcss/typography": "latest",
    "next-sanity": "latest",
    "@sanity/image-url": "latest",
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
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "sharp": "latest",
    "@vercel/analytics": "latest"
  },
  "devDependencies": {
    "prisma": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "prettier": "latest",
    "prettier-plugin-tailwindcss": "latest",
    "@types/node": "latest",
    "@types/react": "latest"
  }
}
```

---

## Conclusion

This project — **Dreams** — aims to create a premium Vietnamese wedding
service website that combines the cultural storytelling sophistication of
Lalin.vn with the practical booking and rental functionality that couples
and families need when planning a bưng quả ceremony.

**Key Design Principles:**

1. **Cultural authenticity** — Every design decision, from the crimson-and-
   gold palette to the serif-heavy typography, should honor Vietnamese wedding
   traditions while feeling modern and accessible.
2. **Content-first storytelling** — Following Lalin's example, the website
   should educate visitors about ceremony customs and áo dài culture before
   asking them to book. Trust is built through knowledge.
3. **Service clarity** — Unlike Lalin's purchase model, our rental and
   service model requires clear process communication (how it works, pricing
   structure, deposit policy, availability) at every touchpoint.
4. **Visual hierarchy that sells** — Large editorial photography draws
   visitors in, clean product grids let them browse efficiently, and
   prominent CTAs guide them toward booking.

**Technical Approach:**

- **Next.js 15 App Router** provides the rendering flexibility to serve
  static pages for SEO (SSG/ISR for catalog and blog) while handling dynamic
  booking flows server-side (SSR).
- **Tailwind CSS** with a custom design token system ensures visual
  consistency across all components without the overhead of a heavy
  component library.
- **shadcn/ui** delivers accessible, unstyled primitives that conform to
  our custom aesthetic rather than imposing their own.
- **Sanity CMS** decouples content management from development, allowing the
  business team to update products, blog posts, and collections
  independently.
- **Supabase + Prisma** provides a type-safe, scalable backend for the
  transactional data (bookings, user accounts, availability) that a rental
  business depends on.

The result should be a website that feels like Lalin's editorial elegance
married to a seamless booking experience — a digital showroom where
Vietnamese wedding culture is celebrated and where renting áo dài and
hiring bưng quả services is as effortless as browsing a beautiful magazine.
