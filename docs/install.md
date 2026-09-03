---
title: Installation
---

# Installation

Foundry follows the standard **Agent Skills** format: each skill is a folder containing
`SKILL.md`, `references/`, and `assets/`. Installation means copying the three skill
folders into your agent's skills directory.

## Requirements

- An agent that supports the Agent Skills format (OpenCode, Claude Code, or compatible).
- `git` on your machine.

## Install

Clone the repository, then copy the three skill folders into your skills directory.

**OpenCode / Claude-style agents** auto-discover skills in `~/.agents/skills/` and
`~/.claude/skills/`.

### macOS / Linux

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
```

### Windows (PowerShell)

```powershell
git clone https://github.com/MaoyuanYang/foundry.git
Copy-Item -Recurse foundry\skills\coding-start    $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\project-onboard $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\feature-dev     $HOME\.agents\skills\
```

Then **restart your agent** so it re-scans the skills directory.

## Verify

For OpenCode, run:

```bash
opencode debug skill
```

You should see `coding-start`, `project-onboard`, and `feature-dev` listed with their
locations. Each skill also validates against the Agent Skills schema (`name` +
`description` frontmatter, lowercase-hyphen folder names).

## What you get

| Skill | Folder | Purpose |
|---|---|---|
| `coding-start` | `skills/coding-start/` | Greenfield project documents, Roadmap, draft Specs |
| `project-onboard` | `skills/project-onboard/` | Brownfield recovery: verified baseline, AS-IS docs |
| `feature-dev` | `skills/feature-dev/` | One piece of development work: spec → tests → code → docs |

Each skill is self-contained:

- `SKILL.md` — the entry point: when to use it and the workflow it runs.
- `references/` — method notes loaded on demand (interviewing, testing).
- `assets/` — templates for the documents the skill generates.
- `agents/openai.yaml` — host display metadata.

## Updating

Pull the latest and re-copy the three folders (they are self-contained, so replacing the
folder is safe):

```bash
cd foundry && git pull
cp -r skills/coding-start skills/project-onboard skills/feature-dev ~/.agents/skills/
```

Your **project** files (`README.md`, `docs/`, `specs/`) are never touched by an update —
Foundry only changes how the agent works, not what it already produced.

## Uninstall

Remove the three folders from your skills directory and restart your agent:

```bash
rm -rf ~/.agents/skills/coding-start ~/.agents/skills/project-onboard ~/.agents/skills/feature-dev
```

## Next

- [Workflow](./workflow) — how work moves from idea to verified code.
- The skill pages: [coding-start](./coding-start/), [project-onboard](./project-onboard/),
  [feature-dev](./feature-dev/).
