# Kajabi Implementation Guide — Step by Step

Follow these steps in order. Each step takes 2-5 minutes.

---

## Step 1: Site-Wide Header Code (5 min)

**Location:** Kajabi → Settings → Site Details → Custom Code → Header

1. Log into Kajabi admin
2. Go to **Settings** (gear icon, bottom-left)
3. Click **Site Details**
4. Scroll to **Custom Code** section
5. In the **Header** field, paste the ENTIRE content from:
   → `seo-fixes/01-SITE-WIDE-HEADER.html`
6. Click **Save**

**What this fixes:**
- Hebrew language declaration (lang="he" dir="rtl")
- Organization schema (brand knowledge panel)
- WebSite schema (sitelinks in Google)
- Canonical tag auto-generation
- Open Graph & Twitter Card defaults

---

## Step 2: Update robots.txt (2 min)

**Location:** Kajabi → Settings → SEO

1. Go to **Settings** → **SEO**
2. Find the **robots.txt** editor
3. Replace ALL content with the text from:
   → `seo-fixes/02-ROBOTS-TXT.txt`
4. Click **Save**

**What this fixes:**
- Adds Sitemap declaration for Google crawlers
- Blocks internal pages from indexing (checkout, login, library)
- Blocks UUID test page

---

## Step 3: Add Meta Descriptions (20-30 min)

**Location:** Each page individually

For EACH page listed in `seo-fixes/03-META-DESCRIPTIONS.md`:

1. Go to **Website** → **Pages**
2. Click on the page
3. Click the **gear icon** (Settings)
4. Click **SEO Settings** or **SEO**
5. Paste the meta description from the file
6. Also update the **SEO Title** if it's missing or generic
7. Click **Save**

**Priority order** (do these first):
1. Homepage
2. Course page (/ecommerce-dropshipping-course)
3. Blog listing (/blog)
4. Store (/store)
5. About (/about)
6. Contact (/contact)
7. All blog posts (one by one)
8. Other pages

---

## Step 4: Add Page-Specific Schema (15-20 min)

**Location:** Each page's Custom Code → Header

For EACH page listed in `seo-fixes/04-SCHEMA-PER-PAGE.md`:

1. Go to the specific page in Kajabi
2. Click **Settings** (gear icon)
3. Find **Custom Code** → **Header**
4. Paste the JSON-LD block from the file
5. Click **Save**

**Priority order:**
1. Course page (Course + FAQ schema)
2. About page (Person schema)
3. Store page (ItemList schema)
4. Blog posts (Article schema — use the template)
5. Contact page (ContactPage schema)
6. Shopify Strategy (Course schema)
7. 3-Day Challenge (Course schema)
8. Google Ads Course (Course schema)

---

## Step 5: Fix Image Alt Text (30-45 min)

**Location:** Each page, each image

For EACH image listed in `seo-fixes/06-IMAGE-ALT-TEXT.md`:

1. Go to the page
2. Click on the image in the editor
3. Find the **Alt Text** field
4. Type the Hebrew alt text from the file
5. Save the page

**Tip:** Start with the homepage and course page — they have the most images and the most traffic.

---

## Step 6: Fix Blog Listing Title (2 min)

The blog page currently shows "Two Funnels Away Blog" in English.

1. Go to **Website** → **Blog**
2. Find the blog settings
3. Change the title to: **הבלוג של אביב מלכה**
4. Update the heading on the page to match
5. Save

---

## Step 7: Create llms.txt Page (5 min)

Kajabi may not support static text files directly. Two options:

**Option A (preferred):** If Kajabi allows custom pages with custom slugs:
1. Create a new page with slug `llms.txt`
2. Set it to minimal/blank template
3. Paste content from `seo-fixes/05-LLMS-TXT.txt`

**Option B:** If you have Cloudflare access:
1. Go to Cloudflare dashboard
2. Create a Worker or Page Rule that serves the llms.txt content at `/llms.txt`

---

## Step 8: Enable HSTS in Cloudflare (3 min)

1. Log into Cloudflare dashboard
2. Select avivmalka.com
3. Go to **SSL/TLS** → **Edge Certificates**
4. Enable **Always Use HTTPS** (if not already)
5. Enable **HSTS** with these settings:
   - Max-Age: 6 months (15768000)
   - Include subdomains: Yes
   - Preload: No (for now)
   - No-Sniff: Already enabled
6. Save

---

## Verification Checklist

After completing all steps, verify:

- [ ] Visit https://www.avivmalka.com → View Source → search for `lang="he"` — should be present
- [ ] Visit https://www.avivmalka.com/robots.txt → should show Sitemap line
- [ ] Google "site:avivmalka.com" → check that meta descriptions start showing (takes 1-2 weeks)
- [ ] Use [Schema Markup Validator](https://validator.schema.org/) → test homepage, course page, blog post
- [ ] Use [Rich Results Test](https://search.google.com/test/rich-results) → test course page for FAQ rich results
- [ ] Use [Google PageSpeed Insights](https://pagespeed.web.dev/) → test homepage mobile + desktop
- [ ] Check [Google Search Console](https://search.google.com/search-console) → submit sitemap, monitor coverage

---

## Expected Timeline

| Action | When to expect results |
|--------|----------------------|
| Meta descriptions in SERPs | 1-3 weeks after Google re-crawls |
| Schema rich results | 2-4 weeks after validation |
| Ranking improvements | 4-8 weeks |
| Full score improvement | 8-12 weeks |

---

## Files Reference

| File | What it contains | Where to paste |
|------|-----------------|----------------|
| `01-SITE-WIDE-HEADER.html` | Lang fix, Organization + WebSite schema, canonicals, OG tags | Kajabi → Settings → Site Details → Custom Code → Header |
| `02-ROBOTS-TXT.txt` | Fixed robots.txt with Sitemap | Kajabi → Settings → SEO → robots.txt |
| `03-META-DESCRIPTIONS.md` | Meta descriptions for ALL pages | Each page → Settings → SEO |
| `04-SCHEMA-PER-PAGE.md` | JSON-LD schema for each page | Each page → Settings → Custom Code → Header |
| `05-LLMS-TXT.txt` | AI search readiness file | New page or Cloudflare Worker |
| `06-IMAGE-ALT-TEXT.md` | Alt text for all images | Each image in page editor |
