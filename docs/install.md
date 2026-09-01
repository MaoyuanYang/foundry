# Installation

Foundry follows the standard **Agent Skills** format: each skill is a folder containing `SKILL.md`, `references/`, and `assets/`. Installation means copying the five skill folders into your agent's skills directory.

## Requirements

- An agent that supports the Agent Skills format (OpenCode, Claude Code, or compatible).
- `git` on your machine.

## Install

Clone the repository, then copy the five skill folders into your skills directory.

**OpenCode / Claude-style agents** auto-discover skills in `~/.agents/skills/` and `~/.claude/skills/`.

### macOS / Linux

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
cp -r foundry/skills/evolve-dev        ~/.agents/skills/
cp -r foundry/skills/maintenance-dev   ~/.agents/skills/
```

### Windows (PowerShell)

```powershell
git clone https://github.com/MaoyuanYang/foundry.git
Copy-Item -Recurse foundry\skills\coding-start    $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\project-onboard $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\feature-dev     $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\evolve-dev      $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\maintenance-dev $HOME\.agents\skills\
```

Then **restart your agent** so it re-scans the skills directory.

## Verify

For OpenCode, run:

```bash
opencode debug skill
```

You should see `coding-start`, `project-onboard`, `feature-dev`, `evolve-dev`, and `maintenance-dev` listed with their locations. Each skill also validates against the Agent Skills schema (`name` + `description` frontmatter, lowercase-hyphen folder names).

## What you get

| Skill | Folder | Purpose |
|---|---|---|
| `coding-start` | `skills/coding-start/` | Greenfield project initialization (0 → 1) |
| `project-onboard` | `skills/project-onboard/` | Brownfield takeover and AS-IS baseline |
| `feature-dev` | `skills/feature-dev/` | Single-feature lifecycle (1 → N); parallel members each run it on their own claimed item |
| `evolve-dev` | `skills/evolve-dev/` | Post-delivery evolution planning: new Feature waves, Roadmap re-prioritization |
| `maintenance-dev` | `skills/maintenance-dev/` | Maintenance campaigns: refactor, technical debt, upgrades, deprecation/removal |

Each skill is self-contained:

- `SKILL.md` — the entry point, trigger conditions, and state machine.
- `references/` — detailed rules loaded on demand at specific stages.
- `assets/` — templates for the documents the skill generates.
- `agents/openai.yaml` — host display metadata.

## Updating

Pull the latest and re-copy the five folders (they are self-contained, so replacing the folder is safe):

```bash
cd foundry && git pull
cp -r skills/coding-start skills/project-onboard skills/feature-dev skills/evolve-dev skills/maintenance-dev ~/.agents/skills/
```

Your **project** files (`STAGE.md`, `AGENTS.md`, `docs/`, `specs/`) are never touched by an update — Foundry only changes how the agent works, not what it already produced.

Repositories that adopted an earlier contract version record `foundry_contract_version` in their root `AGENTS.md`; after a version advance, each Skill `STOP`s at entry until the Maintainer Decision Authority approves the recorded-value advance and the installed copies are synchronized.

## Uninstall

Remove the five folders from your skills directory and restart your agent:

```bash
rm -rf ~/.agents/skills/coding-start ~/.agents/skills/project-onboard ~/.agents/skills/feature-dev ~/.agents/skills/evolve-dev ~/.agents/skills/maintenance-dev
```

## Next

- [The five skills](./skills-overview) — what each does and when it triggers.
- [Workflow & gates](./workflow) — how a feature moves from idea to `DONE`.
- [Reference](./reference/glossary) — status glossary and template map.
