**English** | [中文](./README.zh-CN.md)

<div align="center">

# Foundry

**Forge software from idea to delivery.**

An AI-native, spec-driven development suite for coding agents — covering the full lifecycle: greenfield projects, brownfield takeovers, continuous feature delivery, and post-delivery evolution and maintenance.

[Website](https://maoyuanyang.github.io/foundry/) · [Installation](#installation) · [The Five Skills](#the-five-skills)

[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b.svg)](./LICENSE)
[![Skills](https://img.shields.io/badge/Skills-5-ff6b1a.svg)](./skills)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-ready-brightgreen.svg)](https://opencode.ai)

</div>

---

## What is Foundry?

Foundry is a set of five reusable **Agent Skills** that turn an AI coding agent into a disciplined engineering workflow. Instead of jumping straight into code, Foundry enforces:

- **Macro design before coding** — direction, boundaries, rules, and constraints first.
- **Spec-driven development** — the Spec is the source of truth for what is correct.
- **Test design before implementation** — define how correctness is proven, then build.
- **UX before UI** — user goals and flows before pixels.
- **Gated transitions** — `SPEC READY` → `UI READY` → `TEST DESIGN READY` → `DONE`; evolution and maintenance add `ROADMAP EVOLUTION READY`, `SAFETY NET READY`, and `BEHAVIOR PRESERVED`.
- **Evidence over assumptions** — observed, documented, confirmed, inferred — never silently guessed.
- **Controlled design change** — L1/L2/L3 impact levels with explicit decision authority.
- **Parallel team development** — multiple humans and agents work concurrent items through Issue + branch + PR + maintainer merge; the tracker is the authority, `STAGE.md` is the team status board.
- **Project-wide coordination** — root `STAGE.md` shows the lifecycle, active humans/agents, blockers, handoffs, and resume points.
- **Post-delivery evolution as work items** — planning the next wave, refactoring, debt paydown, upgrades, and retirements each run as their own gated campaign, never as silent side effects.

## The Five Skills

| Skill | Phase | Role |
|---|---|---|
| [`coding-start`](skills/coding-start/SKILL.md) | Greenfield · 0 → 1 | Discovery interviews, macro design, project docs, Feature Map, DRAFT Specs |
| [`project-onboard`](skills/project-onboard/SKILL.md) | Brownfield · unknown → understood | Baseline verification, architecture reconstruction, AS-IS docs, Feature Inventory |
| [`feature-dev`](skills/feature-dev/SKILL.md) | Feature · 1 → N | Spec refinement, UX/UI gates, test design, plan, coding, review, delivery |
| [`evolve-dev`](skills/evolve-dev/SKILL.md) | Evolution · N → N′ planning | Next-wave planning: Roadmap entries, DRAFT Specs, re-prioritization, baseline deltas |
| [`maintenance-dev`](skills/maintenance-dev/SKILL.md) | Maintenance · behavior-preserving change | Safety-net-first campaigns: refactor, technical debt, upgrades, deprecation/removal |

```text
New idea ──▶ coding-start ──▶ feature-dev ──▶ feature-dev ──▶ ...
Existing repo ──▶ project-onboard ──▶ feature-dev ──▶ feature-dev ──▶ ...
                   ▲                                        │
                   └── evolve-dev (next wave planning) ◀────┤ delivered baseline
                                                            ▼
                        maintenance-dev (refactor / debt / upgrade / retire)
```

Each skill has explicit **STOP conditions**: no silent business code, no unauthorized writes, no batch Issue creation, no mass refactoring outside a confirmed maintenance campaign.

## Installation

Foundry follows the standard Agent Skills format (`SKILL.md` + `references/` + `assets/`). Copy the five folders into your agent's skills directory.

**OpenCode / Claude-style agents** (auto-discovered):

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
cp -r foundry/skills/evolve-dev        ~/.agents/skills/
cp -r foundry/skills/maintenance-dev   ~/.agents/skills/
```

Then restart your agent. Verify discovery with `opencode debug skill` (you should see all five skills listed).

## Quick Start

**Start a new project:**

> "Initialize a new greenfield project: a community local-services platform."

`coding-start` interviews you round by round, runs the Macro Readiness Gate, and produces `STAGE.md`, `README`, `AGENTS.md`, `docs/*`, `specs/ROADMAP.md`, and DRAFT Specs — then stops with confirmed `NEXT` feature(s) (usually one; parallel selections only when distinct members will claim them).

**Take over an existing repo:**

> "Take over this repository and build a durable AS-IS baseline."

`project-onboard` surveys the repo, verifies the baseline, reconstructs architecture and features, creates or adopts root `STAGE.md`, and produces AS-IS documentation — then stops with a recommended next item.

**Develop a feature:**

> "Implement feature F001 according to the workflow."

`feature-dev` drives the full lifecycle: `SPEC READY` → `UI READY` (if UI) → `TEST DESIGN READY` → Plan → Coding → Review → Documentation Sync → PR → review feedback (`IN PR REVIEW`) → maintainer merge.

**Plan the next wave:**

> "Plan the next phase: we're adding a collaboration wave to the platform."

`evolve-dev` interviews incrementally against the delivered baseline, challenges the wave, and passes `ROADMAP EVOLUTION READY`: new Roadmap entries with DRAFT Specs, re-prioritization confirmed by the Roadmap Decision Authority — then hands implementation back to `feature-dev`.

**Refactor, pay down debt, upgrade, or retire:**

> "Refactor the auth module without changing behavior."

`maintenance-dev` runs one campaign under a safety net: baseline snapshot and characterization tests (`SAFETY NET READY`) → ordered, individually verified slices (`BEHAVIOR PRESERVED`) → review and delivery. Retiring a capability additionally requires a named-authority-confirmed retirement plan.

## Design Principles

1. Macro design before coding — but no Big Design Up Front.
2. All Specs can be drafted at once; only the selected ones are deepened — one claiming member per `NEXT` item.
3. The Spec defines correctness; a bound remote Issue tracks progress, or the confirmed Stage-local row does when no remote is bound; the PR records changes; the ADR records why.
4. Critical requirements must be verifiable before coding starts.
5. Test behavior, not implementation details.
6. Existing code is evidence, not the standard. Existing UI is evidence, not the design system.
7. Code must not stay ahead of docs.
8. Skills hold the process; `AGENTS.md` holds the project rules.
9. `STAGE.md` holds the current project/member snapshot; trackers, Specs, Gates, and the Roadmap keep their own authority.
10. Post-delivery evolution is work-itemized: next-wave planning, refactoring, debt paydown, upgrades, and retirements run as their own gated campaigns — recorded debt never dangles without a consumer, and no refactor changes behavior unverified.

## Language Policy

Foundry defaults to English for all engineering artifacts (`documentation_language = en`, `engineering_language = en`). User-facing product copy follows product requirements. Existing repositories preserve their established language; overrides require explicit decision-authority approval.

## Documentation

Full documentation (English & 中文): **<https://maoyuanyang.github.io/foundry/>**

## License

[MIT](./LICENSE) © MaoyuanYang
