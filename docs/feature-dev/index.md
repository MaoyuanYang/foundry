# feature-dev — Overview & State Machine

`feature-dev` advances **exactly one** selected Feature, Change, or Bug per run from fact confirmation to verifiable delivery. It follows project conventions and must not redesign the project baseline or absorb unrelated Features. Other concurrently selected `NEXT` items belong to other members — this Skill never modifies their status, branches, or Gate records.

## When it triggers

**Enter only when** the user explicitly asks to implement, fix, or deliver one selected work item. It supports both a Greenfield `DRAFT` Spec and a Brownfield `AS_IS_DRAFT` / `RECONSTRUCTED` Spec.

**Do not enter** for read-only review, diagnosis/explanation only, ordinary Q&A, Greenfield initialization (→ `coding-start`), or unknown-repository onboarding (→ `project-onboard`).

## The executable state machine

```mermaid
flowchart TD
  P0[0. Preflight / Evidence / Scope] --> P1[1. Bind one Issue / work item]
  P1 --> P2[2. Spec Refinement → SPEC READY]
  P2 --> P3[3. UI Detection → UI READY if UI]
  P3 --> P4[4. Test Design → TEST DESIGN READY]
  P4 --> P5[5. Implementation Plan + Tasks → READY]
  P5 --> P6[6. Coding + Testing → IN_PROGRESS]
  P6 --> P7[7. Review → REVIEW]
  P7 --> P8[8. Documentation Sync]
  P8 --> P9[9. PR / Delivery → DONE]
  P9 --> PR9[PR open: external review → IN PR REVIEW → fixes → DONE]
```

Roadmap status flows `DRAFT → NEXT → READY → IN_PROGRESS → REVIEW → DONE`, with any active state able to move to `BLOCKED` (recording `Blocked From`). A `DONE` Feature's Bug/Change uses a **new** work-item ID and never erases the parent's completion state.

At each meaningful transition, root [`STAGE.md`](../guide/project-stage) updates the current member's Skill stage, next checkpoint, blockers/handoff, and projected Gate links. It is never a controlling semantic Gate input.

## Preflight context

Before anything else, read the applicable `AGENTS.md` chain and Language Policy, then discover and read: root `STAGE.md`, `README`, `PRODUCT`, `ARCHITECTURE`, `DATABASE`, `API`, `TESTING`, `ROADMAP`, the current Spec, Dependency Specs, relevant ADRs, relevant code and tests, and the existing Issue/work item. Verify every Stage projection against its authority. If UI impact is possible, also read `FRONTEND`, `UX`, `UI`, `DESIGN_SYSTEM`, affected pages, and existing components.

If Code / Spec / Docs / UI disagree, resolve the mismatch, repair the baseline, or enter Design Change **before** any gate. If the project baseline is missing, route to `coding-start` (Greenfield) or `project-onboard` (Brownfield) and `STOP`.

## Gates at a glance

| Gate | Page |
|---|---|
| `SPEC READY` | [Issue & Spec](./spec) |
| `UI READY` | [UX / UI](./ui) |
| `TEST DESIGN READY` | [Test Design](./testing) |
| `DONE` | [Delivery](./delivery) |

Every gate records `Status: PASS | NOT_READY | STALE`, a complete input manifest, validation time, and Decision Authority approval source and scope. A semantic input change marks downstream gates `STALE`.

## Mandatory STOP conditions

1. The scope is not exactly one selected work item for this run (other members' parallel `NEXT` items are not this run's scope).
2. A Greenfield lacks a project-level baseline, or a Brownfield lacks trustworthy onboarding.
3. A Critical Open Question is `OPEN`/`DEFERRED`, a Language Policy is missing/conflicting/unpersisted, a material Docs/Code conflict is unresolved, or a core requirement is unverifiable.
4. Local writes are required but their exact paths or generated-output boundaries lack explicit authorization.
5. After all autonomous clarification, a required gate still cannot be met because an external decision, evidence, or environment is unavailable (a normal initial `NOT_READY` refines instead of stopping).
6. A Design Change affecting approved behavior lacks Decision Authority confirmation, or L2/L3 confirmation is incomplete.
7. A user decision is required for tracker/Stage-local authority, major dependency, destructive migration, or delivery standard.
8. A required Git/remote side effect lacks authorization, tooling, or authentication.
9. Stage binding, freshness, revision/hash, activity identity, duplicate assignment, or authority transfer is unresolved; stop the affected transition, handoff, or completion while unrelated read-only investigation may continue.

Every `STOP` reports current Roadmap Status, passed/skipped gates, blocking evidence, who must answer what, and the resume step.

With authorized local writes, the same blocker and resume stage are synchronized to the current Stage activity while unrelated member rows remain untouched.
