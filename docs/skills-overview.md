# The Five Skills

Foundry splits the software lifecycle into five focused skills. Each has a single responsibility, explicit entry conditions, and a hard `STOP` boundary.

## coding-start — Greenfield, 0 → 1

Turns an unimplemented idea into a hand-off-ready project **without writing business code**.

**Triggers when** you explicitly ask to start or initialize a new project — or phrase a single feature for a project that has no macro baseline yet.

**Flow**

```text
Discovery interviews → Macro Synthesis → Confirmation Digest → Challenge Pass → Macro Readiness
→ MACRO DESIGN READY → docs + AGENTS → Feature Map → DRAFT Specs → NEXT → STOP
```

**Produces** root `STAGE.md`, `README.md`, `AGENTS.md`, `docs/PRODUCT|ARCHITECTURE|DATABASE|API|TESTING`, UI docs when applicable, `specs/ROADMAP.md`, and shallow DRAFT Specs for every feature.

**Boundaries**

- No business code, no full scaffolding by default.
- Interviews in focused rounds (2–5 related questions; one decision question in `DEEP` mode).
- Defaults are marked `RECOMMENDED`, never presented as confirmed facts; every `RECOMMENDED`/`UNKNOWN` entry passes a Confirmation Digest before reaching a document.
- Stops with at least one confirmed `NEXT` feature — usually one; parallel selections are confirmed only when distinct members will claim them (or a `BLOCKED_HANDOFF` with zero).

## project-onboard — Brownfield, unknown → understood

Recovers an unfamiliar repository into a verifiable, traceable `AS-IS` baseline. **Understand reality before discussing `TO-BE`.**

**Triggers when** you explicitly ask to take over, inventory, or recover an existing repository. First entry into an unknown repo alone is **not** a trigger.

**Flow**

```text
Survey → Baseline Verification → Architecture Reconstruction
→ Frontend/UI Reconstruction (if UI) → Docs-vs-Reality → Knowledge Gaps
→ AS-IS Documentation → Feature Inventory → AS-IS Specs → Recommended Next → STOP
```

**Produces** root `STAGE.md` (created or adopted), `docs/onboarding/BASELINE.md`, Knowledge Gaps, AS-IS canonical docs, Feature Inventory in `specs/ROADMAP.md`, and `AS_IS_DRAFT`/`RECONSTRUCTED` specs.

**Boundaries**

- Evidence priority: `Runtime > Tests > Code > DB/Migrations > Config > CI/CD > Docs > Comments > Inference`.
- Labels facts: `OBSERVED / DOCUMENTED / CONFIRMED / INFERRED / NEEDS_CONFIRMATION / CONFLICT / UNKNOWN / MISSING`.
- Never mass-refactors, never promotes legacy code to standard, never writes `READY`.
- Recommends one next item; does not implement it. Recorded Technical Debt is handed to `maintenance-dev`, never batch-fixed here.

## feature-dev — Feature, 1 → N

Advances exactly one selected Feature, Change, or Bug per run from fact confirmation to verifiable delivery. Other concurrently selected `NEXT` items belong to other members; parallel delivery is coordinated through Issue + branch + PR + maintainer merge.

**Triggers when** you explicitly ask to implement, fix, or deliver one selected work item. Read-only review, diagnosis-only, and Q&A are excluded. Maintenance engineering routes to `maintenance-dev`; Roadmap planning of a new wave routes to `evolve-dev`.

**Flow**

```text
Bind Issue → Spec Refinement → SPEC READY → [UI READY if UI]
→ TEST DESIGN READY → Plan → Coding → Review → Documentation Sync → PR/DONE
```

**Boundaries**

- One work item per run; no bulk issue creation. Multiple members may run it in parallel, each on their own claimed item.
- `SPEC READY`, `UI READY`, `TEST DESIGN READY` gates must pass before coding.
- Test design before implementation; test behavior, not internals.
- Design changes go through L1/L2/L3 with named decision authority.
- Git/remote actions each require explicit authorization.

## evolve-dev — Post-delivery evolution, N → N′ planning

Plans the next delivery wave on a baselined repository: turns a new direction into confirmed Roadmap entries, DRAFT Specs, and re-prioritized ordering — **without touching implementation**.

**Triggers when** you explicitly ask to plan a new Feature wave, extend the Roadmap, re-prioritize, or update the macro baseline incrementally on a repository that already has a credible baseline.

**Flow**

```text
Preflight → Evolution Discovery → Synthesis + Challenge Pass
→ ROADMAP EVOLUTION READY → Roadmap Update → DRAFT Specs → NEXT → STOP
```

**Produces** a roadmap evolution record, new `DRAFT` entries in `specs/ROADMAP.md`, shallow DRAFT Specs per new feature, confirmed priority changes, and incremental macro-baseline deltas.

**Boundaries**

- No business code; every Spec stays `DRAFT` with Open Questions — `SPEC READY` belongs to `feature-dev`.
- Priority changes and every selected `NEXT` need the named Roadmap Decision Authority; entries claimed by another member are `NEEDS_CONFIRMATION`, never rewritten.
- Incremental only: a direction that would overturn the macro baseline (product repositioning) `STOP`s for an explicit decision to redo macro design.
- A capability the wave replaces keeps its history; retirement executes in `maintenance-dev`.

## maintenance-dev — Maintenance engineering, behavior-preserving change

Delivers exactly one maintenance campaign under a safety net: behavior-preserving refactoring, technical-debt paydown, dependency/framework upgrades, or deprecating/removing a capability.

**Triggers when** you explicitly ask for one of those four campaigns on a repository with a trustworthy baseline. A survey without an explicitly requested campaign, and any new business capability, are excluded.

**Flow**

```text
Preflight → Bind Work Item → Safety Net Design → SAFETY NET READY
→ Campaign Plan → Slice Execution (BEHAVIOR PRESERVED per slice)
→ Campaign Verification → Review → Documentation Sync → PR/DONE
```

**Boundaries**

- Four campaign types (`REFACTOR | DEBT | UPGRADE | RETIRE`), exactly one per run.
- No slicing without `SAFETY NET READY`: baseline snapshot, characterization tests where coverage is missing, recorded regression scope. Unverifiable surfaces block.
- `BEHAVIOR PRESERVED` is claimed only against recorded evidence; a behavior delta routes to Design Change and `feature-dev`, never sneaks through a slice.
- `RETIRE` needs the strictest trail: named-authority confirmation of the intended behavior change, consumer inventory, migration or breakage acceptance, announcement, rollback.
- `UPGRADE` records versions, lockfile policy, breaking-change inventory, staged order, and rollback; a Major Tech Choice is L3 with an ADR.

## How they connect

```text
New idea ──▶ coding-start ──▶ feature-dev ──▶ feature-dev ──▶ ...
Existing repo ──▶ project-onboard ──▶ feature-dev ──▶ feature-dev ──▶ ...
                 ▲                                        │
                 └── evolve-dev (next wave planning) ◀────┤ delivered baseline
                                                          ▼
                              maintenance-dev (refactor / debt / upgrade / retire)
```

- `coding-start` and `project-onboard` both end by handing selected features to `feature-dev`, one claiming member per `NEXT` item.
- After delivery, `evolve-dev` plans the next wave; `maintenance-dev` keeps the delivered structure healthy. Both hand implementation back — `evolve-dev` to `feature-dev`, `maintenance-dev` through its own verified slices.
- Skills hold the **process**; the project's `AGENTS.md` holds the **rules**.
- Root [`STAGE.md`](./guide/project-stage) holds the current project/member snapshot across all five Skills, while linked trackers and artifacts retain their own authority.
