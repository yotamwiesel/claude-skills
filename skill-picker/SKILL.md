---
name: skill-picker
description: "Use when the user types '/' or wants to see all available skills and choose one. Also use when the user types '/skill-picker', 'show me skills', 'what skills do you have', or 'list skills'. This is the skill browser and launcher."
---

# Skill Picker — `/`

When activated, present all available skills in a clean, searchable menu and let the user pick one to activate.

## Instructions

### Step 1 — Read All Skills

Scan the skills directory (same directory as this file's parent, i.e. `/Users/yotamwiesel/Desktop/cloudeskills/`) for all `SKILL.md` files.

For each skill, extract:
- `name` from the frontmatter
- `description` (first sentence or up to 100 chars) from the frontmatter

### Step 2 — Display the Skill Menu

Present the skills in a clean, organized table grouped by category. Use this exact format:

```
╔══════════════════════════════════════════════════════════╗
║              🧠 SKILL PICKER — Choose a Skill            ║
╚══════════════════════════════════════════════════════════╝

Type the skill name or number to activate it.
Type a keyword to filter (e.g. "seo", "ads", "copy").

━━━ 📣 ADS & PAID MEDIA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  1. ads              — Multi-platform ad audit (Google, Meta, YouTube...)
  2. ads-meta         — Meta / Facebook Ads specialist
  3. ads-google       — Google Ads campaign creation & optimization
  4. ads-tiktok       — TikTok Ads creative and targeting
  5. ads-youtube      — YouTube Ads strategy
  6. ads-linkedin     — LinkedIn Ads for B2B
  7. ads-apple        — Apple Search Ads
  8. ads-microsoft    — Microsoft/Bing Ads
  9. ads-budget       — Ad budget planning & allocation
 10. ads-competitor   — Competitor ad intelligence
 11. ads-creative     — Ad creative generation
 12. ads-plan         — Ad campaign planning
 13. ads-test         — A/B testing for ads
 14. paid-ads         — General paid advertising

━━━ ✍️  COPY & CONTENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 15. copywriting      — Marketing copy for any page
 16. copy-editing     — Edit & improve existing copy
 17. email-sequence   — Email drip campaigns & sequences
 18. cold-email       — B2B cold email outreach
 19. storytelling     — Narrative content for reels, scripts, pitches
 20. humanizer        — Remove AI writing patterns
 21. content-strategy — Content planning & strategy
 22. social-content   — Social media content creation
 23. social           — Instagram Reels in Hebrew

━━━ 🔍 SEO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 24. seo              — Full site SEO analysis
 25. seo-audit        — Deep SEO audit (up to 500 pages)
 26. seo-content      — Content quality & E-E-A-T
 27. seo-page         — Single page SEO analysis
 28. seo-plan         — SEO strategy planning
 29. seo-technical    — Technical SEO audit
 30. seo-schema       — Schema.org structured data
 31. seo-sitemap      — XML sitemap analysis & generation
 32. seo-images       — Image SEO optimization
 33. seo-hreflang     — International SEO & hreflang
 34. seo-geo          — AI Overviews / GEO optimization
 35. seo-competitor-pages — Competitor comparison pages
 36. seo-programmatic — Programmatic SEO at scale
 37. ai-seo           — AI-powered SEO strategies
 38. schema-markup    — Schema markup implementation
 39. programmatic-seo — Data-driven page generation at scale

━━━ 📈 CRO & CONVERSION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 40. page-cro         — Landing/marketing page CRO
 41. form-cro         — Form optimization
 42. popup-cro        — Popup & modal optimization
 43. signup-flow-cro  — Signup & registration flow CRO
 44. onboarding-cro   — Post-signup onboarding optimization
 45. paywall-upgrade-cro — Paywall & upgrade screen CRO
 46. ab-test-setup    — A/B test design & setup
 47. churn-prevention — Reduce churn & cancellation flows

━━━ 🏗️  LANDING PAGES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 48. landing-page     — Hebrew RTL landing page builder
 49. landing-page-builder-html — HTML landing page (scrape & replicate)
 50. ads-landing      — Landing pages for ad campaigns

━━━ 🎯 MARKETING STRATEGY ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 51. marketing-ideas  — Marketing ideas for SaaS
 52. marketing-psychology — 70+ psychological principles for marketing
 53. launch-strategy  — Product launch planning
 54. pricing-strategy — Pricing, packaging, monetization
 55. referral-program — Referral & affiliate programs
 56. free-tool-strategy — Free tool as marketing channel
 57. sales-enablement — Sales collateral & pitch decks
 58. site-architecture — Website structure & hierarchy
 59. brainstorming    — Structured brainstorming

━━━ 🔧 DEVELOPMENT & TECH ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 60. ui-ux-pro-max    — UI/UX design (67 styles, 96 palettes)
 61. spline-3d-integration — Spline 3D scenes in web projects
 62. analytics-tracking — Analytics & tracking setup
 63. cookies          — Cookie consent & GDPR banners
 64. cardcom-payment  — Cardcom payment integration
 65. mcp-builder      — Build MCP servers
 66. remotion         — Video creation in React
 67. cyber            — Security audit
 68. security-audit   — Full 360° web app security audit
 69. israeli-legal-compliance — Legal pages (privacy, TOS) for Israel
 70. meta-verification — Meta/WhatsApp Business verification

━━━ 🤖 AI & AGENTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 71. dispatching-parallel-agents — Run multiple independent tasks in parallel
 72. subagent-driven-development — Execute plans with subagents
 73. claude-cli       — Claude Code CLI subprocess patterns
 74. claude-creators  — Claude AI creators resources

━━━ 📄 DOCUMENTS & GUIDES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 75. hebrew-pdf-guide — Hebrew PDF guide creation
 76. company-pdf      — Workshop PDF for companies
 77. new-guide        — Lead magnet pipeline (PDF + landing + email)
 78. project-proposal — Figma → project scope & pricing
 79. readme-writer    — Auto-generate README.md files

━━━ 🎬 VIDEO & VISUAL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 80. video-creator    — 3D animated video scenes
 81. heygen           — HeyGen AI video creation
 82. ad-creative      — Ad creative assets
 83. ads-photoshoot   — AI product photoshoot
 84. carousel-machine — Carousel content creator (Hebrew)
 85. carousel-machine-english — Carousel content creator (English)
 86. carousel-machine2 — Carousel v2
 87. carousel-aviv-king — Aviv King carousel style

━━━ 🔎 RESEARCH & INTEL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 88. last30days       — Deep research: last 30 days across 10+ sources
 89. competitor-alternatives — Competitor comparison pages for SEO
 90. scrape-leads-israel — Israeli leads from Google Maps
 91. scrape-leads-global — Global lead scraping & enrichment
 92. firecrawl        — Scrape & extract data from any website
 93. product-marketing-context — Product marketing context document

━━━ ⚙️  WORKFLOW & PROCESS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 94. writing-plans    — Write implementation plans
 95. executing-plans  — Execute a written plan
 96. writing-skills   — Create or edit skills
 97. skill-creator    — Guide for creating new skills
 98. systematic-debugging — Debug bugs & test failures
 99. test-driven-development — TDD: write tests first
100. requesting-code-review — Pre-merge code review requests
101. receiving-code-review — Process code review feedback
102. finishing-a-development-branch — Wrap up a dev branch
103. using-git-worktrees — Git worktree isolation
104. using-superpowers — How to find & use skills
105. verification-before-completion — Verify before claiming done
106. auto-product-test — Automated product testing

━━━ 💼 BUSINESS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
107. ceo-advisor      — CEO strategic advisor
108. revops           — Revenue operations
109. gmail-organizer  — Gmail cleanup & organization
110. youtube-ideas    — Viral YouTube video ideas

Type a number or skill name:
```

### Step 3 — Handle the User's Choice

When the user picks a skill (by number, name, or keyword):

1. **Read the selected skill's `SKILL.md`** file from `/Users/yotamwiesel/Desktop/cloudeskills/<skill-name>/SKILL.md`
2. **Fully activate that skill** — behave as if that skill was directly invoked
3. **Announce the switch**: "✅ Activating **[skill-name]** skill..." then proceed

### Step 4 — Filtering

If the user types a keyword instead of a number/name (e.g. "seo", "ads", "copy", "hebrew"):
- Show only matching skills
- Let them pick from the filtered list

### Special Commands

- `/` or `/skills` — Show full skill menu
- `/<skill-name>` — Directly activate a specific skill (e.g. `/copywriting`, `/seo-audit`)
- `/search <keyword>` — Filter skills by keyword

## Notes

- After activating a skill, follow that skill's instructions completely
- If the skill requires context (like product info), ask for it as that skill would
- You can always return to the skill picker by typing `/` again
