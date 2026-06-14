---
name: GitHerald
tagline: From git push to published announcement
description: Transforms code activity into marketing content — changelogs, blog posts, and social media updates from a single source of truth.
category: developer-tools
status: planning
features:
  - Auto-generates changelogs from commits and PRs
  - Creates blog posts about releases
  - Crafts social media threads for X, LinkedIn, Bluesky
  - Understands the "why" behind changes, not just the "what"
  - Scheduled publishing with approval workflows
targetUser: Developer founders and small teams shipping fast but lagging on communication
---

## Vision

Developers ship fast but lag on communicating what they shipped. GitHerald closes this gap by automating the entire journey from `git push` to published announcement. One pipeline that reads your commits and generates human-quality changelogs, blog posts, and social media updates.

## The Problem

Communication debt is real. Writing changelogs is tedious, blog posts about releases rarely happen, and social media is an afterthought. Existing tools are fragmented — git-cliff for changelogs, Typefully for social scheduling, Beamer for widgets. No tool bridges the full pipeline.

## Key Differentiators

- **Context-aware generation**: Reads PR descriptions, issue threads, and commit bodies to understand intent — not just automated commit message reformatting
- **Full pipeline**: Single tool covers changelogs, blog posts, and social media instead of stitching together 3-4 services
- **Tone matching**: Learns your brand voice from previous content and maintains consistency
