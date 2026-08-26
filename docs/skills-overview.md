# The Three Skills

Foundry splits the software lifecycle into three focused skills. Each has a single responsibility, explicit entry conditions, and a hard `STOP` boundary.

## coding-start — Greenfield, 0 → 1

Turns an unimplemented idea into a hand-off-ready project **without writing business code**.

**Triggers when** you explicitly ask to start or initialize a new project — or phrase a single feature for a project that has no macro baseline yet.

**Flow**

```text
Discovery interviews → Macro Synthesis → Challenge Pass → Macro Readiness
→ MACRO DESIGN READY → docs + AGENTS → Feature Map → DRAFT Specs → NEXT → STOP
```

**Produces** root `STAGE.md`, `README.md`, `AGENTS.md`, `docs/PRODUCT|ARCHITECTURE|DATABASE|API|TESTING`, UI docs when applicable, `specs/ROADMAP.md`, and shallow DRAFT Specs for every feature.

**Boundaries**

- No business code, no full scaffolding by default.
- Interviews in focused rounds (2–5 related questions; one decision question in `DEEP` mode).
- Defaults are marked `RECOMMENDED`, never presented as confirmed facts.
- Stops with exactly one `NEXT` feature (or a `BLOCKED_HANDOFF` with zero).

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
- Recommends one next item; does not implement it.

## feature-dev — Feature, 1 → N

Advances exactly one selected Feature, Change, or Bug from fact confirmation to verifiable delivery.

**Triggers when** you explicitly ask to implement, fix, or deliver one selected work item. Read-only review, diagnosis-only, and Q&A are excluded.

**Flow**

```text
Bind Issue → Spec Refinement → SPEC READY → [UI READY if UI]
→ TEST DESIGN READY → Plan → Coding → Review → Documentation Sync → PR/DONE
```

**Boundaries**

- One work item per run; no bulk issue creation.
- `SPEC READY`, `UI READY`, `TEST DESIGN READY` gates must pass before coding.
- Test design before implementation; test behavior, not internals.
- Design changes go through L1/L2/L3 with named decision authority.
- Git/remote actions each require explicit authorization.

## How they connect

```text
New idea ──▶ coding-start ──▶ feature-dev ──▶ feature-dev ──▶ ...
Existing repo ──▶ project-onboard ──▶ feature-dev ──▶ feature-dev ──▶ ...
```

- `coding-start` and `project-onboard` both end by handing a selected feature to `feature-dev`.
- Skills hold the **process**; the project's `AGENTS.md` holds the **rules**.
- Root [`STAGE.md`](./guide/project-stage) holds the current project/member snapshot across all three Skills, while linked trackers and artifacts retain their own authority.
