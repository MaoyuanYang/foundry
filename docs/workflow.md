---
title: Workflow
---

# The Foundry Workflow

Foundry is a document-first, interview-driven, test-driven workflow for coding agents.
It exists because a plain coding agent tends to run like this:

```text
User Request → Guess Requirements → Start Coding → Implementation Drifts
```

Foundry replaces that habit with:

```text
Idea
 ↓
Understand          read the repo and docs before anything else
 ↓
Interview          scan the documents, then ask about the user-owned gaps
 ↓
Documents / Spec   write down the agreed outcome
 ↓
Implementation Plan  small vertical slices, each independently verifiable
 ↓
Tests              derived from acceptance criteria
 ↓
Code               implement step by step
 ↓
Verify             run the tests; fix until they pass
 ↓
Sync Docs          update whatever the implementation made untrue
```

Documents define what must be understood; interviews fill the user-owned gaps.

## Principles

1. **Document before code.**
2. **Interview before assumption.**
3. **Spec before implementation.**
4. **Derive tests from acceptance criteria.**
5. **Implement incrementally.**
6. **Code until tests pass.**
7. **Keep documentation synchronized with implementation.**

Skills hold the process; documents hold the project. Templates define the structure —
repository context, interviews, and engineering judgment fill in the answers.

## Four skills, one habit

| Skill | Phase | Role |
|---|---|---|
| [`project-start`](/project-start/) | Greenfield · 0 → 1 | Interview → project documents → Roadmap → draft Feature Specs |
| [`project-onboard`](/project-onboard/) | Brownfield · unknown → understood | Verify the repo runs → recover AS-IS documents, Roadmap, Specs |
| [`project-dev`](/project-dev/) | Development · 1 → N | Interview → Spec → Implementation Plan → tests → code → verify → sync docs |
| [`project-verify`](/project-verify/) | Assurance · claimed → checked | Document-driven verification pass → evidence-backed findings report |

```text
New idea ──────▶ project-start ─────▶ project-dev ──▶ project-dev ──▶ ...
                                                    (plan next wave via project-start)
Existing repo ──▶ project-onboard ──▶ project-dev ──▶ project-dev ──▶ ...
                                                    (check state vs documents via project-verify)
```

`project-dev` covers the whole family of development work — new features, changes, bug
fixes, refactors, technical-debt paydown, dependency upgrades — with the same loop. The
entry point adapts, not the process:

- **Bug fix** — reproduce with a failing test first, then fix until it passes.
- **Refactor / debt** — confirm behavioral coverage first, add regression tests where
  missing, refactor in small steps, verify behavior is unchanged.
- **Dependency upgrade** — inventory breakage, upgrade, run the full suite, record
  behavioral changes.

At any point after the documents exist, [`project-verify`](/project-verify/) can
independently check the current state against them — whether `Done` features are
delivered, acceptance criteria have evidence, and documented commands and flows work —
and report findings without fixing anything.

## The document set

A Foundry-managed project has a predictable shape:

```text
README.md            what the project is, how to run it
docs/
  PRODUCT.md         goal, users, use cases, scope
  ARCHITECTURE.md    system shape, modules, data flow, key decisions
  TESTING.md         strategy, levels, key commands
  DATABASE.md        only when the product persists data
  API.md             only when the product exposes an API
  FRONTEND.md        only when the product has a UI
specs/
  ROADMAP.md         the feature list and what is next
  F001-<slug>.md     one spec per feature
```

Only applicable documents are created — a CLI tool gets no `FRONTEND.md`. Documents are
kept short and true; a precise one-page document beats a speculative ten-page one.

### Roadmap lifecycle

`specs/ROADMAP.md` tracks each feature with a simple status:

- **Draft** — described in a spec, not yet scheduled.
- **Next** — selected as the next feature to build (exactly one at a time).
- **In Progress** — currently being implemented.
- **Done** — implemented and verified.

Planning the next wave of features on a documented project is a `project-start` re-entry:
interview about the new direction, then add Roadmap entries and draft Specs — no separate
process.

## Documents stay synchronized

Foundry does not treat documents as one-time upfront artifacts. The final state is:

```text
Documents ↔ Spec ↔ Tests ↔ Code
```

When implementation discovers a wrong assumption, changes an interface, alters persisted
data, or shifts the architecture, the affected documents and the spec are updated **in
the same piece of work** — never left to rot.

## What Foundry does not do

- It does not impose a governance system: no coordination files, no status tokens to
  maintain, no approval roles. The documents and the Roadmap are the whole state.
- It does not decide your architecture for you. Templates define sections to think
  about; your repository, your interviews, and engineering judgment fill them.
- It does not replace your tracker, CI, or review process — teams that need issue
  tracking and pull-request review layer their own tooling on top.

## Next

- [Install](./install) the four skills.
- Read the skill pages: [project-start](./project-start/), [project-onboard](./project-onboard/),
  [project-dev](./project-dev/), [project-verify](./project-verify/).
