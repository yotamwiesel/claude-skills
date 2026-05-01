---
name: carousel-machine
description: Automated Instagram carousel content pipeline. Scrapes trending topics from YouTube/Twitter/Reddit, generates Hebrew carousel copy, creates slide images via Gemini, and pushes to Airtable. Use when the user wants to create carousels, run the carousel pipeline, or invokes /carousel-machine.
---

# /carousel-machine skill

Automated Instagram carousel content pipeline. Scrapes trending topics, generates Hebrew copy + slide images via Gemini (NanoBanana), and pushes to Airtable.

## Project location

`/Users/avivmalka/projects/carousel-machine/`

## When this skill is invoked

Parse the user's command to determine the run mode, then execute the appropriate pipeline step.

## Run modes

| Command | Action |
|---|---|
| `/carousel-machine` | Full pipeline: scrape → analyze → write → image prompts → Airtable |
| `/carousel-machine --research` | Research phase only (scrape + analyze + push research to Airtable) |
| `/carousel-machine --generate` | Generate from existing Airtable research (skip scraping) |
| `/carousel-machine --topic "X"` | Generate carousel for specific topic X |
| `/carousel-machine [YouTube URL]` | Generate carousel from a specific YouTube video |
| `/carousel-machine --test` | Test mode: 1 carousel only |

## How to execute

### Option A — Python CLI (preferred when API keys are configured)

```bash
cd /Users/avivmalka/projects/carousel-machine

# Full pipeline
python3 pipeline.py

# Research only
python3 pipeline.py --research-only

# Generate from existing research
python3 pipeline.py --generate

# Specific topic
python3 pipeline.py --topic "Claude Code memory system"

# Test mode
python3 pipeline.py --test
```

### Option B — Claude-native (when running as Claude Code skill)

When the user provides a YouTube URL or a topic directly, you can:
1. Use the Apify scraper (`scrapers/youtube.py`) to fetch the transcript
2. Call `analysis/trend_analyzer.py` to extract the best angle
3. Call `generation/carousel_writer.py` to generate Hebrew copy
4. Call `generation/image_prompts.py` to build Gemini image prompts
5. Call `output/airtable.py` to push everything to Airtable

## Pre-flight check

Before running, verify:
1. `.env` exists at `/Users/avivmalka/projects/carousel-machine/.env` with all required keys filled in
2. Python dependencies installed: `python3 -m pip install -r requirements.txt`
3. Airtable base has the correct tables (see README for schema)

## Required API keys (.env)

```
OPENROUTER_API_KEY=     # openrouter.ai/keys
APIFY_API_TOKEN=        # console.apify.com/account/integrations
AIRTABLE_API_KEY=       # airtable.com/create/tokens
AIRTABLE_BASE_ID=       # from Airtable base URL: airtable.com/appXXXXX/...
GEMINI_API_KEY=         # aistudio.google.com/apikey
TELEGRAM_BOT_TOKEN=     # optional - from @BotFather
TELEGRAM_CHAT_ID=       # optional
```

## Output

- Carousel JSON files saved to `/Users/avivmalka/projects/carousel-machine/data/generated/`
- Records pushed to Airtable: "Ideas & Sources" + "Created Images" tables
- Images generated via Gemini stored as attachments in Airtable

## Design system

Carousels use the **Cream style** by default (highest performing):
- Background: `#F2EDE6` (warm cream)
- Text: `#8B2500` (dark red-brown)
- Accent: `#E8762B` (orange stickers)
- Brand bar: `@aviv_malka7` on every slide
- Format: 1:1 square (1080×1080)

See full design system in `/Users/avivmalka/projects/carousel-machine/CLAUDE.md`.
