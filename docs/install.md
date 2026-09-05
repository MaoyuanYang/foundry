---
title: Installation
---

# Installation

Foundry follows the standard **Agent Skills** format: each skill is a folder containing
`SKILL.md` and `assets/`, with optional `references/`. Installation means copying the
four skill folders into your agent's skills directory.

## Requirements

- An agent that supports the Agent Skills format (OpenCode, Claude Code, or compatible).
- `git` on your machine.

## Install

Clone the repository, then copy the four skill folders into your skills directory.

**OpenCode / Claude-style agents** auto-discover skills in `~/.agents/skills/` and
`~/.claude/skills/`.

### macOS / Linux

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/project-start     ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/project-dev       ~/.agents/skills/
cp -r foundry/skills/project-verify    ~/.agents/skills/
```

### Windows (PowerShell)

```powershell
git clone https://github.com/MaoyuanYang/foundry.git
Copy-Item -Recurse foundry\skills\project-start   $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\project-onboard $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\project-dev     $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\project-verify  $HOME\.agents\skills\
```

Then **restart your agent** so it re-scans the skills directory.

## Verify

For OpenCode, run:

```bash
opencode debug skill
```

You should see `project-start`, `project-onboard`, `project-dev`, and `project-verify`
listed with their locations. Each skill also validates against the Agent Skills schema
(`name` + `description` frontmatter, lowercase-hyphen folder names).

## What you get

| Skill | Folder | Purpose |
|---|---|---|
| `project-start` | `skills/project-start/` | Greenfield project documents, Roadmap, draft Specs |
| `project-onboard` | `skills/project-onboard/` | Brownfield recovery: verified baseline, AS-IS docs |
| `project-dev` | `skills/project-dev/` | One piece of development work: spec → tests → code → docs |
| `project-verify` | `skills/project-verify/` | Document-driven verification pass: findings report |

Each skill is self-contained:

- `SKILL.md` — the entry point: when to use it and the workflow it runs.
- `references/` — optional method notes loaded on demand (interviewing, testing).
- `assets/` — templates for the documents the skill generates.
- `agents/openai.yaml` — host display metadata.

## Updating

Pull the latest and re-copy the four folders (they are self-contained, so replacing the
folder is safe):

```bash
cd foundry && git pull
cp -r skills/project-start skills/project-onboard skills/project-dev skills/project-verify ~/.agents/skills/
```

If you installed an older Foundry that shipped `evolve-dev` or `maintenance-dev`, remove
those folders — leftover skills keep triggering and conflict with `project-dev`, which now
covers that work:

```bash
rm -rf ~/.agents/skills/evolve-dev ~/.agents/skills/maintenance-dev
```

If you installed an older Foundry that shipped `coding-start` or `feature-dev`, remove
those folders too — they are `project-start` and `project-dev` under their old names, and
leftover skills keep triggering and conflict with the renamed ones:

```bash
rm -rf ~/.agents/skills/coding-start ~/.agents/skills/feature-dev
```

Your **project** files (`README.md`, `docs/`, `specs/`) are never touched by an update —
Foundry only changes how the agent works, not what it already produced.

## Uninstall

Remove the four folders from your skills directory and restart your agent:

```bash
rm -rf ~/.agents/skills/project-start ~/.agents/skills/project-onboard ~/.agents/skills/project-dev ~/.agents/skills/project-verify
```

## Next

- [Workflow](./workflow) — how work moves from idea to verified code.
- The skill pages: [project-start](./project-start/), [project-onboard](./project-onboard/),
  [project-dev](./project-dev/), [project-verify](./project-verify/).
