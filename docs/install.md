# Installation

Foundry follows the standard **Agent Skills** format: each skill is a folder containing `SKILL.md`, `references/`, and `assets/`. Installation means copying the three skill folders into your agent's skills directory.

## Requirements

- An agent that supports the Agent Skills format (OpenCode, Claude Code, or compatible).
- `git` on your machine.

## Install

Clone the repository, then copy the three skill folders into your skills directory.

**OpenCode / Claude-style agents** auto-discover skills in `~/.agents/skills/` and `~/.claude/skills/`:

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
```

::: tip Windows
Use `Copy-Item -Recurse foundry\skills\coding-start $HOME\.agents\skills\` in PowerShell, or copy the folders manually.
:::

Then **restart your agent** so it re-scans the skills directory.

## Verify

For OpenCode, run:

```bash
opencode debug skill
```

You should see `coding-start`, `project-onboard`, and `feature-dev` listed with their locations.

## What you get

| Skill | Folder | Purpose |
|---|---|---|
| `coding-start` | `skills/coding-start/` | Greenfield project initialization (0 → 1) |
| `project-onboard` | `skills/project-onboard/` | Brownfield takeover and AS-IS baseline |
| `feature-dev` | `skills/feature-dev/` | Single-feature lifecycle (1 → N) |

Each skill is self-contained: `SKILL.md` is the entry point, `references/` holds detailed rules loaded on demand, and `assets/` holds templates.

## Next

- [The three skills](./skills-overview) — what each does and when it triggers.
- [Workflow & gates](./workflow) — how a feature moves from idea to `DONE`.
