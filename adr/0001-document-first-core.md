# ADR-0001: Reposition Foundry as a Document-First, Interview-Driven, Test-Driven Core

- **Status:** Accepted
- **Date:** 2026-09-02
- **Decision owner:** MaoyuanYang

## Context

Foundry had grown into a five-skill suite (`project-start`, `project-onboard`, `project-dev`,
`evolve-dev`, `maintenance-dev`) carrying a large amount of software-engineering governance:
Gate tokens with input manifests and STALE propagation, Decision Authority roles, a
multi-label evidence vocabulary, a Stage state machine with a revision/SHA-256 write guard,
tracker-first work-status authority, claim/WIP/branch coordination, L1/L2/L3 design-change
control, BCP-47 language governance, and a contract-version drift guard.

An audit found that roughly half to two thirds of the suite's mass existed to maintain
Foundry's own coordination state rather than to change how a coding agent builds software.
`evolve-dev` duplicated most of `project-start`'s planning model, and `maintenance-dev`
reused `project-dev`'s delivery machinery almost wholesale. The documentation site, evals,
and verification script reproduced the same governance vocabulary at every layer.

## Decision

Foundry is repositioned as:

> **A document-first, interview-driven, test-driven workflow for coding agents.**

Core principles, and the only things the skills enforce:

1. Document before code.
2. Interview before assumption.
3. Spec before implementation.
4. Derive tests from acceptance criteria.
5. Implement incrementally.
6. Code until tests pass.
7. Keep documentation synchronized with implementation.

The suite collapses to three skills:

| Skill | Scope |
| --- | --- |
| `project-start` | Greenfield: idea → interview → project documents → Roadmap → draft Feature Specs |
| `project-onboard` | Brownfield: repository → verification → AS-IS understanding → recovered docs and Roadmap |
| `project-dev` | Development: interview → Spec → incremental plan → tests → code → verify → doc sync |

`project-dev` handles features, changes, bug fixes, refactors, technical debt, and
dependency upgrades in one workflow; `evolve-dev`'s roadmap-update use case is a re-entry
of `project-start`, and `maintenance-dev`'s safety-net guidance lives in `project-dev`'s
testing reference.

Removed machinery: all Gate/manifest/STALE systems, Decision Authority roles,
`CONFIRMED/RECOMMENDED/UNKNOWN` fact statuses (project-onboard keeps only
`Observed / Inferred / Unknown`), the Stage state machine and its write guard, tracker
authority and claim/WIP/branch coordination, L1/L2/L3 tiers, BCP-47 language governance,
generated-project AGENTS.md templates, the contract-version drift guard, and the
repository-level `STAGE.md`. Skills now define *process*, and templates define *document
structure*; project content comes from repository context, user interviews, and normal
engineering judgment.

## Alternatives Considered

- **Keep five skills, trim governance only.** Rejected: without the shared governance
  machinery, `evolve-dev` and `maintenance-dev` no longer have an independent work model.
- **Keep governance as opt-in "advanced" references.** Rejected: every retained copy of
  the machinery reintroduced synchronization cost and context overhead.

## Consequences

- Skill context cost drops sharply (roughly one third of the previous volume).
- Projects gain a predictable document set (`README.md`, `docs/`, `specs/`) with simple
  Roadmap statuses (`Draft / Next / In Progress / Done`) and no generated coordination
  files.
- Large-team concurrency controls are deliberately out of scope; teams that need them
  should layer their own tracker and review process on top.
- The two prior ADRs (`0001-parallel-work-items`, `0002-evolve-and-maintenance-skills`)
  are deleted; their content remains in git history.
