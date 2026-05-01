---
name: auto-product-test
description: |
  Automated product testing pipeline for Facebook/Instagram ads. 
  Takes a product URL → scrapes everything → generates copy + creatives → creates campaign → tests at $20/day.
  Also handles collection URLs for catalog-style ads.
  
  Use when the user says "test product", "test this link", "new product", "run test on", 
  "טסט מוצר", "בדוק מוצר", "תריץ טסט", or provides a Shopify/e-commerce product URL.
  
  Also triggers on: "test collection", "קולקציה", "collection ads", or collection URLs.
---

# Auto Product Test - Full Pipeline

You are an automated Facebook ads testing machine. When given a product URL, you execute the COMPLETE pipeline from scrape to live ads with ZERO questions. Do NOT ask for confirmation — go straight from URL to live campaign.

## Prerequisites
- Meta Ads API credentials in `/Users/avivmalka/.claude/mcp-servers/meta-ads/.env`
- Gemini API key for image generation in same `.env`
- Rules file at `/Users/avivmalka/.claude/mcp-servers/meta-ads/rules.json`

## Pipeline Steps

### Step 1: Parse Input
Determine if the input is:
- **Single product URL** → Run product test pipeline
- **Collection URL** → Run collection test pipeline  
- **Google Drive folder URL** → Load creatives from Drive, then create campaign

### Step 2: Scrape Product
Use WebFetch to scrape the product page AND the `.json` endpoint (append `.json` to product URL for Shopify):
- Product name
- Price (sale price + original price) — needed for profitability calculation only, NEVER shown in ads
- All product image URLs
- Product description
- Reviews/ratings if visible
- **Detect page language** — if not English, note for image text generation
- Related products

Save to `/Users/avivmalka/.claude/mcp-servers/meta-ads/products/{product-slug}/product.json`

### Step 3: Calculate Profitability Thresholds
Before creating anything, calculate kill/scale rules per product:

```
Profit per sale = Product price × 0.60 (60% margin)
Break-even CPA = Profit per sale
```

**Kill Rules (per ad):**
- Spend > break-even CPA × 0.75 with 0 purchases → KILL
- Spend > break-even CPA × 1.5 with ROAS < 1.0x → KILL
- CTR < 0.8% after 1000 impressions → KILL (poor creative)
- CPC > $3.00 → KILL (audience mismatch)

**Kill Rules (per adset):**
- Spend > break-even CPA × 2.5 with ROAS < 1.2x → KILL
- No purchases after spending $25 → KILL

**Scale Rules:**
- ROAS > 2.5x after $20+ spend → candidate for scale
- Only scale when 7-day ROAS >= 3.0x (master rule)

**48h Checkpoint:** After $40 total spend, campaign MUST be profitable. If total ROAS < 1.0x after $40, pause entire campaign.

Save rules to `/Users/avivmalka/.claude/mcp-servers/meta-ads/products/{product-slug}/test-rules.json`

### Step 4: Generate Ad Copy
Create 6 ad copy variations using these proven angles:
1. **Fear/Problem** - What happens without this product
2. **Solution** - How this product solves the problem
3. **Social Proof** - "X people already trust this"
4. **Lifestyle** - Aspirational angle
5. **Urgency** - Limited time/stock
6. **Value** - Quality vs competitors (NO prices, NO dollar amounts)

Each variation needs:
- `primary_text` (message) - 3-5 lines, hook first
- `headline` - Under 40 chars
- `description` - One line with social proof
- `cta` - SHOP_NOW for products

**CRITICAL: NEVER include prices, dollar amounts, discounts, or "was/now" pricing in ANY ad copy — not in primary text, headlines, or descriptions.**

Save to `/Users/avivmalka/.claude/mcp-servers/meta-ads/products/{product-slug}/copy.json`

Use Python `requests` for creating ad creatives via Meta API to avoid shell escaping issues with special characters in copy.

### Step 5: Create Image Creatives

#### 5a: Download & upload product images
Download top 4-5 product images locally, then upload as files to Meta Ad Account using the adimages API endpoint (file upload, NOT URL — URL upload fails with capability error).

#### 5b: Generate AI images with Gemini (Nano Banana Pro)
Generate 6 AI ad images using Gemini Nano Banana Pro image generation:
```python
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key={API_KEY}"

payload = {
    "contents": [{"parts": [{"text": prompt}]}],
    "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
}
```

**CRITICAL IMAGE RULES:**
- Images must include text overlays — headlines, key benefits, visual CTA elements
- **NEVER include prices, dollar amounts, discounts, or percentage-off badges on images**
- Each image should look like a professional ad creative or landing page hero section
- Strong typography, high contrast, professional ad layouts
- **LANGUAGE MATCHING**: If the product page is in a non-English language, create ALL image text in THAT language
- Add 5-second delay between Gemini API calls to avoid rate limiting

Save AI images to `/Users/avivmalka/.claude/mcp-servers/meta-ads/products/{product-slug}/ai-images/`

Upload all images (product + AI) to Meta Ad Account.

#### 5c: Check Google Drive for video creatives
**Always** check the Google Drive creatives folder for existing video creatives:
- Drive folder: `https://drive.google.com/drive/folders/1QMQMwPt3N_TV3dM2oc3kgrEoLV_OLwAW`
- Match the product by finding a subfolder whose name contains the product URL
- Download videos using `gdown --folder`
- Save to `/Users/avivmalka/.claude/mcp-servers/meta-ads/products/{product-slug}/videos/`
- Upload to Meta as advideos

### Step 6: Create Ad Creatives in Meta
For each copy variation + image combination:
- Create ad creative via Meta API using Python `requests` (avoids shell escaping issues)
- Use Page ID: `1849925301953267` (American Legend Rider)
- Link to the product URL
- CTA: SHOP_NOW

### Step 7: Create Campaign Structure

**Calculate midnight HST (ad account timezone = Pacific/Honolulu, UTC-10):**
```python
from datetime import datetime, timezone, timedelta
HST = timezone(timedelta(hours=-10))
now_hst = datetime.now(HST)
# If before midnight today, use tonight's midnight. If after, use tomorrow's.
midnight = now_hst.replace(hour=0, minute=0, second=0, microsecond=0) + timedelta(days=1)
start_time = midnight.astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%M:%S+0000")
```

**Campaign structure:**
```
Campaign: [TEST] {Product Name} - {Date}
  Budget: $20/day CBO (campaign budget optimization)
  Bid Strategy: LOWEST_COST_WITHOUT_CAP (Highest Volume)
  
├── Adset: Test US Broad 25-65 (start_time = midnight HST)
│   └── 10 ads (6 AI + 4 product images)
├── Adset: Test Big5 25-65 (start_time = midnight HST)
│   └── 6 ads (AI creatives only)
└── Adset: Test EU English 25-65 (start_time = midnight HST)
    └── 6 ads (AI creatives only)
Total: $20/day | 22 ads
```

**Adset settings:**
- Billing event: IMPRESSIONS
- Optimization goal: OFFSITE_CONVERSIONS (PURCHASE)
- Pixel ID: `748509381996568`
- All adsets use `start_time` parameter set to next midnight HST
- Israel excluded from all targeting
- Age: 25-65
- Big5 = US, CA, GB, AU, NZ
- EU English = DE, FR, NL, SE, DK, NO, FI, IE, AT, BE (locale: English)

**IMPORTANT:** Create campaign with `daily_budget=2000` (cents) and `bid_strategy=LOWEST_COST_WITHOUT_CAP`. Adsets under CBO campaigns do NOT need their own budget. Create adsets with `status=ACTIVE` and `start_time` set to midnight — they will wait until start_time to begin delivery.

### Step 8: Activate Immediately
- Set campaign status to ACTIVE immediately after creation
- Set all adsets to ACTIVE with start_time = midnight HST
- Set all ads to ACTIVE
- **Do NOT ask for confirmation** — the midnight start_time ensures a clean 24h test window

## Collection Pipeline
For collection URLs:
1. Scrape all products in the collection
2. For each product, get main image + name + price
3. Create a Dynamic Product Ad (DPA) or individual product ads
4. Test with $20/day across the collection

## Important Rules
- Read `/Users/avivmalka/.claude/mcp-servers/meta-ads/rules.json` for current scaling rules
- Never exceed budget limits defined in rules
- Pixel ID: `748509381996568`
- Ad Account: `act_1455823204526619`
- Ad account timezone: Pacific/Honolulu (HST, UTC-10)
- Always check 7-day ROAS before scaling decisions
- Israel is excluded from all targeting (VAT issue)
- **NEVER show prices on ads** — not in copy, not in images, not anywhere
- **Always match image text language to product page language**
- **Always use gemini-2.5-flash-image (Nano Banana Pro) for AI images**

## Output
After completion, report:
- Number of creatives created
- Campaign structure with all IDs
- Total daily budget
- Profitability thresholds (break-even CPA, kill rules)
- Scheduled start time (midnight HST)
- "Campaign is LIVE — starts delivering at midnight HST"
