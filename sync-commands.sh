#!/usr/bin/env bash
# sync-commands.sh
# Syncs all SKILL.md files from ~/Desktop/cloudeskills into ~/.claude/commands/
# Run this after pulling new skills from GitHub.

SKILLS_DIR="$(cd "$(dirname "$0")" && pwd)"
COMMANDS_DIR="$HOME/.claude/commands"

mkdir -p "$COMMANDS_DIR"

ADDED=0
UPDATED=0
SKIPPED=0

for skill_dir in "$SKILLS_DIR"/*/; do
  skill_name=$(basename "$skill_dir")
  skill_file="$skill_dir/SKILL.md"
  target="$COMMANDS_DIR/$skill_name.md"

  # Skip non-skill directories (no SKILL.md)
  if [ ! -f "$skill_file" ]; then
    continue
  fi

  # Remove old symlink or file if it exists
  if [ -L "$target" ]; then
    old_target=$(readlink "$target")
    if [ "$old_target" = "$skill_file" ]; then
      SKIPPED=$((SKIPPED + 1))
      continue
    fi
    rm "$target"
  elif [ -f "$target" ]; then
    rm "$target"
  fi

  # Create symlink
  ln -s "$skill_file" "$target"
  ADDED=$((ADDED + 1))
done

echo "✅ Sync complete:"
echo "   Added/Updated : $((ADDED + UPDATED))"
echo "   Already up-to-date: $SKIPPED"
echo "   Commands dir  : $COMMANDS_DIR"
echo ""
echo "Available slash commands:"
ls "$COMMANDS_DIR" | sed 's/\.md$//' | sed 's/^/   \//g'
