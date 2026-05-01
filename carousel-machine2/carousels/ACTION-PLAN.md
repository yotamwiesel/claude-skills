# SEO Action Plan: avivmalka.com

**Generated:** April 16, 2026  
**Current Score:** 39/100  
**Target Score:** 70+ within 90 days  

---

## CRITICAL Priority (Fix Immediately — Blocks Rankings)

### 1. Add Meta Descriptions to All Key Pages
**Impact:** High | **Effort:** Low | **Category:** On-Page SEO

Every single page on the site is missing a meta description. Google will auto-generate snippets, but they're often poor — especially for Hebrew sales copy.

**Pages to prioritize (in order):**
| Page | Suggested Meta Description (Hebrew) |
|------|-------------------------------------|
| Homepage | "אביב מלכה - קורס איקומרס ודרופשיפינג מס׳ 1 בישראל. למעלה מ-5,000 תלמידים. למד לבנות חנות שופיפיי רווחית מאפס. הצטרף עכשיו!" |
| Course page | "קורס איקומרס מקיף עם אביב מלכה - שופיפיי, דרופשיפינג, שיווק דיגיטלי ופרסום. כולל ליווי אישי, קהילה פעילה והחזר כספי 30 יום." |
| Blog | "הבלוג של אביב מלכה - מדריכים, טיפים ואסטרטגיות לאיקומרס, דרופשיפינג ושופיפיי. תוכן מעשי מנסיון של 13+ שנים." |
| About | "אביב מלכה - יזם איקומרס עם 13+ שנות נסיון, מייסד Aviv Media, ומנטור לאלפי בעלי עסקים דיגיטליים בישראל." |
| Store | "כל הקורסים של אביב מלכה - איקומרס, דרופשיפינג, שופיפיי, גוגל אדס. בחר את המסלול שמתאים לך." |

**How to fix in Kajabi:** Settings → SEO → Meta Description for each page.

---

### 2. Add Schema Markup (JSON-LD) to Key Pages
**Impact:** Very High | **Effort:** Medium | **Category:** Schema

Zero schema = zero rich results. Adding schema unlocks course cards, FAQ dropdowns, article rich results, and brand knowledge panel.

**Priority schema to add:**

**A. Homepage — Organization + WebSite:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "אביב מלכה - Ecom Hackers",
  "url": "https://www.avivmalka.com",
  "logo": "https://www.avivmalka.com/logo.png",
  "sameAs": [
    "https://www.instagram.com/aviv_malka7",
    "https://www.youtube.com/@avivmalka",
    "https://www.facebook.com/groups/ecommercevaucher"
  ],
  "founder": {
    "@type": "Person",
    "name": "אביב מלכה",
    "jobTitle": "מייסד ומנטור איקומרס"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@avivmalka.com",
    "contactType": "customer support"
  }
}
```

**B. Course Page — Course + FAQPage:**
```json
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Ecom Hackers - קורס איקומרס ודרופשיפינג",
  "description": "קורס מקיף לבניית עסק איקומרס רווחי עם שופיפיי",
  "provider": {
    "@type": "Organization",
    "name": "אביב מלכה - Ecom Hackers"
  },
  "instructor": {
    "@type": "Person",
    "name": "אביב מלכה"
  },
  "inLanguage": "he",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online"
  }
}
```

**C. All Blog Posts — Article:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[post title]",
  "author": {
    "@type": "Person",
    "name": "אביב מלכה"
  },
  "datePublished": "[date]",
  "dateModified": "[date]",
  "publisher": {
    "@type": "Organization",
    "name": "אביב מלכה"
  }
}
```

**How to fix in Kajabi:** Add via Custom Code → Header section on each page, or use a site-wide code injection if Kajabi supports it.

---

### 3. Fix HTML Language Declaration
**Impact:** High | **Effort:** Very Low | **Category:** Technical

Add `lang="he" dir="rtl"` to the `<html>` tag. Without this, Google may misidentify the page language, hurting Hebrew SERP rankings.

**How to fix in Kajabi:** Settings → Custom Code → Site-wide Header, add:
```html
<script>document.documentElement.lang='he';document.documentElement.dir='rtl';</script>
```

---

### 4. Add Sitemap Reference to robots.txt
**Impact:** Medium | **Effort:** Very Low | **Category:** Technical

Current robots.txt is empty (just comments). Add:
```
User-agent: *
Allow: /

Sitemap: https://www.avivmalka.com/sitemap.xml
```

**How to fix in Kajabi:** Settings → SEO → robots.txt editor.

---

## HIGH Priority (Fix Within 1 Week — Significant Ranking Impact)

### 5. Fix Image Alt Text Across All Pages
**Impact:** Medium | **Effort:** Medium | **Category:** Images + Accessibility

Most images on the site have empty or missing alt text. This hurts:
- Image search visibility
- Accessibility compliance
- E-E-A-T signals

**Priority pages:**
1. Homepage — logo, hero images
2. Course page — all testimonial screenshots, product images
3. Blog posts — all inline images
4. About page — profile photo

**Rule:** Every image should have a descriptive Hebrew alt text. Example:
- Bad: `alt=""` or no alt
- Good: `alt="אביב מלכה מלמד איקומרס בשופיפיי"`

---

### 6. Add Canonical Tags to All Pages
**Impact:** High | **Effort:** Low | **Category:** Technical

No canonical tags were detected. This creates duplicate content risk between:
- `avivmalka.com` vs `www.avivmalka.com`
- Pages with query parameters
- Sales funnel variants

Each page should have: `<link rel="canonical" href="https://www.avivmalka.com/[page-slug]" />`

**How to fix in Kajabi:** Most Kajabi themes auto-generate canonicals — check if this is disabled in your theme settings. If not available, add via custom code header.

---

### 7. Fix Blog URL Structure
**Impact:** Medium | **Effort:** High (requires redirects) | **Category:** Technical

Current blog URLs are a mess:
- `/blog/10` — numeric, meaningless
- `/blog/טיקטוק` — Hebrew characters in URL
- `/blog/לחקור%20שוק%20איקומרס` — encoded Hebrew with spaces
- `/blog/2026` — looks like a year, not a topic
- `/blog/5-2` — confusing numbering

**Ideal structure:** `/blog/keyword-in-english` or `/blog/keyword-transliterated`

**Action:** For new posts, use descriptive English/transliterated slugs. For existing posts, set up 301 redirects if Kajabi allows slug changes. Don't break existing indexed URLs.

---

### 8. Expand Thin Content Pages
**Impact:** High | **Effort:** Medium | **Category:** Content

| Page | Current Words | Target | Action |
|------|--------------|--------|--------|
| Shopify Strategy | ~85 | 500+ | Add course description, benefits, testimonials |
| Contact | ~100 | 300+ | Add FAQ, business hours, map, multiple contact methods |
| About | ~650 | 1,200+ | Add timeline, achievements, media mentions, detailed bio |
| Store | ~300 | 800+ | Add course descriptions, comparison table, who-it's-for |

---

### 9. Remove UUID Page from Sitemap
**Impact:** Low | **Effort:** Very Low | **Category:** Technical

The URL `/e642b6b0-e3d2-487f-b7a0-49ce351cf4cd` is a UUID — likely a test or internal page. Remove it from the sitemap and add `noindex` if it's accessible.

Also review and potentially noindex sales funnel pages (vaucher2, popup, monster-up, opt-in) that shouldn't be in organic search.

---

## MEDIUM Priority (Fix Within 1 Month — Optimization Opportunities)

### 10. Build Internal Linking Strategy
**Impact:** High | **Effort:** Medium | **Category:** On-Page

Current internal linking is minimal. Create:
- **Pillar page:** Main ecommerce course page as hub
- **Blog cross-links:** Each blog post should link to 2-3 related posts
- **CTA links:** Blog posts should link to relevant course/product pages
- **Breadcrumbs:** Add breadcrumb navigation to all pages (also supports BreadcrumbList schema)

**Linking map:**
```
Homepage
├── Course Page (pillar)
│   ├── Blog: איקומרס 2026 guide
│   ├── Blog: מוצרים רווחיים
│   ├── Blog: שופיפיי tips
│   └── Blog: טיקטוק marketing
├── Shopify Strategy (pillar)
│   ├── Blog: שופיפיי tips
│   └── Blog: Google Ads
├── Blog Hub
│   └── All posts (categorized)
└── About → Contact
```

---

### 11. Expand Blog Categories & Content Calendar
**Impact:** High | **Effort:** Ongoing | **Category:** Content

Current state: Only 2 categories (All, Dropshipping). Missing huge keyword opportunities.

**Recommended categories and topics:**
| Category | Missing Topics |
|----------|---------------|
| שופיפיי | הקמת חנות, אפליקציות מומלצות, ניהול מלאי |
| פרסום ממומן | פייסבוק אדס, גוגל אדס, טיקטוק אדס |
| שיווק אורגני | SEO, תוכן, אינסטגרם, יוטיוב |
| מקרי בוחן | סיפורי הצלחה של תלמידים |
| כלים וטכנולוגיה | AI לאיקומרס, אוטומציה, אנליטיקס |

**Publishing target:** 2 posts/month minimum, 1,500+ words each.

---

### 12. Fix Privacy Policy
**Impact:** Medium | **Effort:** Low | **Category:** Legal/Trust

Current privacy policy is a generic WordPress template that references:
- WordPress comments (Kajabi doesn't use WordPress)
- Gravatar email hashes
- Comment cookies

**Action:** Rewrite to reflect actual data practices:
- Kajabi platform data collection
- Email marketing (if used)
- Payment processing
- Analytics tracking
- Cookie usage
- Israeli Privacy Protection Law compliance

---

### 13. Add HSTS Header
**Impact:** Medium | **Effort:** Low | **Category:** Security

HSTS (HTTP Strict Transport Security) is missing. This tells browsers to always use HTTPS.

**How to fix:** Enable in Cloudflare dashboard → SSL/TLS → Edge Certificates → Enable HSTS.

---

### 14. Fix Blog Listing Page Title
**Impact:** Low | **Effort:** Very Low | **Category:** On-Page

Blog listing page shows "Two Funnels Away Blog" — an English title on a Hebrew site. Change to:
- Title: "הבלוג | אביב מלכה - מדריכים לאיקומרס ודרופשיפינג"
- H1: "הבלוג של אביב מלכה"

---

## LOW Priority (Backlog — Nice to Have)

### 15. Create llms.txt File
Add `/llms.txt` for AI crawler guidance — describes what the site is about and what content is most important.

### 16. Add Open Graph & Twitter Card Tags
Ensure social sharing displays correctly with proper images, titles, and descriptions.

### 17. Implement Lazy Loading for Images
Add `loading="lazy"` to below-fold images to improve LCP.

### 18. Add Breadcrumb Navigation
Visual breadcrumbs + BreadcrumbList schema on all pages.

### 19. Create a "Start Here" or Resource Hub Page
Central page that guides visitors to the right content based on their level (beginner vs advanced).

### 20. Add Phone Number to Contact Page
Israeli users expect phone/WhatsApp contact. The WhatsApp link exists on homepage but not on the contact page.

---

## 90-Day Roadmap

| Week | Tasks | Expected Score Impact |
|------|-------|----------------------|
| 1 | Meta descriptions (#1), lang attribute (#3), robots.txt (#4) | 39 → 48 |
| 2 | Schema markup on homepage + course page (#2A, #2B) | 48 → 55 |
| 3 | Image alt text (#5), canonical tags (#6) | 55 → 60 |
| 4 | Blog schema (#2C), fix blog title (#14), thin content (#8) | 60 → 65 |
| 5-6 | Internal linking (#10), blog categories (#11) | 65 → 68 |
| 7-8 | New blog content (2 posts), privacy policy (#12) | 68 → 70 |
| 9-12 | Ongoing content, backlog items (#15-#20) | 70 → 75+ |

---

## Platform Limitations (Kajabi)

Some optimizations are limited by the Kajabi platform:
- **Cache headers** — Kajabi sets no-cache by default; cannot be changed
- **Image format optimization** — WebP/AVIF conversion not available natively
- **Advanced robots.txt rules** — Limited editor
- **Server-side rendering** — Handled by Kajabi (generally good)
- **Core Web Vitals** — Partially controlled by Kajabi's infrastructure

For advanced technical SEO beyond Kajabi's capabilities, consider a custom domain with a headless CMS or WordPress for the blog section.
