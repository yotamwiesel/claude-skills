# Claude Skills — Slash Command Library

This directory is the source of truth for all `/` slash commands.

## How It Works

Every subfolder contains a `SKILL.md` file that is registered as a slash command in `~/.claude/commands/<skill-name>.md` (via symlink).

To use a skill: type `/<skill-name>` in any Claude Code conversation.

## Keeping Commands in Sync

After pulling new skills from GitHub:

```bash
skills-update    # git pull + sync
# or just:
skills-sync      # sync only (if already pulled)
```

## Available Commands

Run `skills-list` in your terminal to see all registered `/` commands.

## Adding a New Skill

1. Create a new folder: `mkdir <skill-name>`
2. Create `<skill-name>/SKILL.md` with proper frontmatter (`name`, `description`)
3. Run `skills-sync` to register it
4. Commit and push to GitHub

## Skill Frontmatter Format

```yaml
---
name: skill-name
description: "One-line description of when to use this skill."
---
```
