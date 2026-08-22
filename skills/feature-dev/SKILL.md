---
name: feature-dev
description: "Use ONLY when the user explicitly asks to implement, fix, or deliver one selected Feature, Change, or Bug. Drives Issue, Spec/UI/Test, planning, Coding, Review, documentation, and authorized delivery. MUST NOT be used for read-only review, diagnosis or explanation only, ordinary Q&A, Greenfield initialization, or unknown-repository onboarding."
---

# Feature Development

> Part of **Foundry**, an AI-native, spec-driven development suite. Role: Feature delivery (1 to N). Siblings: `coding-start`, `project-onboard`.

## Mission and Boundaries

Advance exactly one selected Feature, Change, or Bug from fact confirmation to verifiable delivery. Follow project conventions. This Skill MUST NOT redesign the project baseline or absorb unrelated Features.

Read-only code review, diagnosis/explanation only, ordinary code Q&A, and solution brainstorming are outside this Skill; use the matching read-only flow. `Review` denotes this lifecycle stage only after implementation of the selected work item.

`Decision Authority` MUST be a named human empowered for the specific decision, such as a Maintainer, Roadmap, Product, or Architecture Decision Authority. The executing Agent, automation, and an implementation-only assignee MUST NOT approve their own requirement changes, risk waivers, alternative verification, L2/L3 impacts, or delivery standards. Record approver, source, time, and scope for every approval.

Responsibility boundaries:

- `Spec` defines what is correct.
- `Issue/work item` records work status; it MUST NOT duplicate the full Spec.
- `Implementation Plan` defines how to implement; it MUST NOT rewrite requirements.
- `PR/delivery record` states what changed in code.
- `ADR` records why a significant technical or architectural decision was made.
- `AGENTS.md` stores durable project rules; this Skill stores the cross-project process.

If the user explicitly asks to advance one lifecycle stage of a bound work item, complete that stage and stop at its resulting state. MUST NOT fabricate later Gates. This exception does not include one-off review or diagnosis-only requests.

## Language Policy

During Preflight, read every applicable `AGENTS.md` from repository root to the working directory. Before inspecting or modifying any target path, also resolve the complete `AGENTS.md` chain from repository root through that target's directory; a root-level working directory MUST NOT hide a nested target policy. Apply the most specific resolved rules for each target and resolve this matrix:

- Documentation Language governs formal artifact prose in README, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records.
- Engineering Language governs new class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages.
- Product Content Language controls user-facing copy and localized values; labeled exact product copy and exact-copy assertions are allowed.

Every Documentation or Engineering Language value MUST be inherited from a valid applicable `AGENTS.md` policy. If either dimension is missing, propose the exact default `documentation_language = en` or `engineering_language = en`, then `STOP` until a named `Maintainer Decision Authority` adopts it and an authorized write persists it. feature-dev MUST NOT turn a fallback into policy independently.

A repository-wide exact default is valid when its row records the default-policy source and date. An existing override is valid only when its row records the actual BCP-47 value, exact scope, named authority, explicit approval or `ADOPTED` evidence, source, and date. Missing or contradictory metadata is `CONFLICT` and `STOP`; an unvalidated row MUST NOT override a valid fallback. Apply a valid scoped value before its repository-wide fallback.

Path-scoped values govern only artifacts and engineering surfaces inside their recorded scope. Repository-global branch names, commit messages, and Issue/PR titles and descriptions use the root repository-wide Engineering Language unless an approved override explicitly names those global surfaces. Conflicting global-surface overrides are `CONFLICT` and `STOP`.

Product Content Language MUST come from product requirements and i18n rules; MUST NOT infer it from conversation or the engineering defaults. Record `N/A - no product-content surface` rather than inventing a language when the current Scope has no user-facing or localized content. If a potentially relevant surface remains unresolved, keep `UNKNOWN - <resolution action>` as an explicit Open Question and block the applicable Gate when Critical. Every artifact MUST follow the resolved matrix; feature-dev MUST NOT independently choose an override.

Preserve existing identifiers. Before updating a formal artifact, inspect its existing formal-prose language. Excluding clearly labeled exact Product Content, if it is mixed, differs from the resolved Documentation Language, or the update would introduce a second prose language or require translation, record `CONFLICT` and `STOP` in either direction. Resume only after a named language-policy authority approves one whole-document language. Translation requires an explicit request, named authority approval, and separately authorized scope; feature-dev MUST NOT infer that authorization.

Persist each effective language value exactly once in the nearest `AGENTS.md` whose scope fully governs it: repository-wide fallbacks and global engineering surfaces belong in root `AGENTS.md`; a subtree-only override belongs in the nearest governing nested file, or in root when no such nested file exists. A broader file MAY link to the authoritative nested policy but MUST NOT duplicate its value. Before resuming or ending a stage-only run, persist the actual BCP-47 value, exact scope, authority, approval source, and date. If that write is not authorized, `STOP`; an unpersisted value MUST NOT survive only in conversation or a temporary artifact.

## Resource Loading

Prefer existing project formats; use templates only when no equivalent artifact exists. Optional sections may be removed only when genuinely inapplicable. Gate and risk decisions and their `N/A - reason` evidence MUST remain; Brownfield AS-IS evidence MUST NOT be deleted.

| Resource | Read when |
| --- | --- |
| [Spec and UI Gates](references/spec-and-ui-gates.md) | Before Spec Refinement; continue through the UI branch when applicable |
| [Test and Plan Gates](references/test-and-plan-gates.md) | After `SPEC READY` and the UI branch, before Test Design and planning |
| [Design Change and Delivery](references/design-change-and-delivery.md) | Before Coding; re-read relevant sections for Design Change, Review, or delivery |
| [Spec template](assets/spec.template.md) | Creating or restructuring the current Spec when no project format exists |
| [Issue template](assets/issue.template.md) | Preparing the single Issue/local work item |
| [UX/UI template](assets/ux-ui.template.md) | `UI Impact: YES` and no project format exists |
| [Test Design template](assets/test-design.template.md) | Mapping Acceptance Criteria to Test Scenarios |
| [Implementation Plan template](assets/implementation-plan.template.md) | All required Gates are ready and implementation approach can be defined |
| [Review/PR/DONE template](assets/review-pr-done.template.md) | Self Review, PR-ready summary, and final `DONE` decision |

## Two State Systems

Always record progress and Gates separately. Neither may substitute for the other.

**Roadmap Status**:

`DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED`

`UNTRACKED` from Brownfield onboarding means only that no trustworthy work history exists. It enters the normal state machine only after the user selects it.

- `DRAFT`: known but unselected or still coarse.
- `NEXT`: the one currently selected work item.
- `READY`: required Gates, Plan, and Tasks are ready.
- `IN_PROGRESS`: implementation and verification are underway.
- `REVIEW`: implementation is complete; Review, docs sync, or delivery is underway.
- `DONE`: the confirmed delivery standard is met.
- `BLOCKED`: an explicit blocker exists; reason, owner, and unblock condition MUST be recorded.

**Gate**:

`SPEC READY | UI READY | TEST DESIGN READY | DONE`

With no UI, record `UI Impact: NO` and `UI READY: SKIPPED (N/A)`; MUST NOT claim `UI READY` passed.

Record `Roadmap Status: DONE` and `DONE Status: PASS` separately.

**Gate Record**:

Every executed Gate MUST record `Status: PASS | NOT_READY | STALE`, a complete input manifest, validation time, and Decision Authority approval source and scope. `NOT_READY` means not yet passed. `STALE` means only that a prior `PASS` was invalidated by a semantic input change. `UI READY: SKIPPED (N/A)` is a documented no-UI skip decision, not a Gate Status; it records the deciding Spec revision, evidence, validation time, authority, approval source, and scope. Every controlling artifact MUST use its own monotonic change ID or working-tree content hash; a VCS commit is only a base and MUST NOT alone represent uncommitted docs. By stage, the manifest includes current Spec, affected Dependency Specs, relevant ADR/API/Architecture/AGENTS, and applicable UX/UI and Test Design. On resume, verify each item; MUST NOT reuse a `PASS` for old inputs. A formatting/spelling-only change may retain a Gate only when the change log explicitly marks it non-semantic and the manifest is updated.

Invalidation rules:

- An observable behavior change to an approved Spec marks `SPEC READY` and UI/Test/Plan `STALE`; revalidate from the Spec Gate.
- A UX/UI behavior change marks `UI READY` and Test/Plan `STALE`; revalidate from the UI Gate.
- A substantive Test Design change marks `TEST DESIGN READY` and Plan `STALE`; revalidate from the Test Gate.
- Plan/Tasks changes do not automatically invalidate upstream Gates, but `Roadmap Status: READY` MUST NOT remain until current Plan/Tasks are valid again.
- A pure implementation refinement that changes no requirement, contract, or observable behavior updates only the Plan.

**State transitions**:

```text
DRAFT or Brownfield UNTRACKED -> NEXT -> READY -> IN_PROGRESS -> REVIEW -> DONE
Any active state -> BLOCKED (record Blocked From) -> previous valid state after revalidation
```

Resume existing work from its current valid state; MUST NOT regress unconditionally to `NEXT`. A Bug/Change to a `DONE` Feature uses a new work-item ID; MUST NOT erase the parent Feature's historical completion state to make a fix.

## Executable State Machine

### 0. Preflight, Evidence, and Scope

First confirm that the intent is to implement, fix, or deliver this work item. If it is read-only review, diagnosis, or explanation, route immediately to the matching flow and `STOP`; MUST NOT bind an Issue or modify files.

1. Locate repository root and project conventions. Read every applicable `AGENTS.md` from root to working directory, then resolve the complete root-to-target `AGENTS.md` chain for every inspected or modified path. Apply each target's most specific safety, module, and Language Policy rules.
2. Discover and read equivalent project docs without assuming paths: `README`, `PRODUCT`, `ARCHITECTURE`, `DATABASE`, `API`, `TESTING`, `ROADMAP`, current Spec, Dependency Specs, and relevant ADRs.
3. Read relevant code, tests, configuration, migrations, and existing Issue/work item for the current Feature. MUST NOT read docs alone.
4. If UI impact is initially possible, also read `FRONTEND`, `UX`, `UI`, `DESIGN_SYSTEM`, affected pages, and existing components.
5. Use onboarding-compatible evidence labels, distinguishing at least `OBSERVED`, `CONFIRMED`, `INFERRED`, `CONFLICT`, `UNKNOWN`, and `NEEDS_CONFIRMATION`. Code, tests, UI, and old docs are evidence; they do not automatically define the correct standard.
6. Compare Code, Spec, Docs, Tests, and UI. Clarify material mismatches, update affected current canonical docs, enter Design Change, or route missing baseline reconstruction to onboarding before a Gate. Historical baselines are immutable and MUST NOT be mutated. A Gate MUST NOT pass with unresolved conflicts.
7. Confirm exactly one selected Feature, Change, or Bug and read its current Roadmap Status, Gate revisions, and blockers. If none is selected, ask the user to choose. If multiple are selected, `STOP` and ask for one; MUST NOT advance them in bulk.

The project baseline MUST at least document product scope, system boundaries, the test method, the current Roadmap, trustworthy Brownfield AS-IS, and a valid persisted Language Policy. A missing Language Policy alone does not require full onboarding: propose the English defaults, obtain named Maintainer adoption and local-write authorization, persist them in the authoritative `AGENTS.md`, and resume from Preflight. Until then, `STOP`. For other missing baseline elements, route immediately and `STOP`:

- For Greenfield or a new project without a project-level baseline, use `coding-start`.
- For an unknown, legacy, incomplete, or broken Brownfield without trustworthy onboarding, use `project-onboard`.

This Skill MUST NOT replace initialization/onboarding or start product Coding after `STOP`.

### 1. Bind One Issue/Work Item

1. Detect existing GitHub, GitLab, Jira, or local conventions, including repository configuration, templates, links, and Roadmap records.
2. Bind the matching work item if present; otherwise prepare only the current one. MUST NOT create in bulk. A Bug/Change uses an independent work item and MUST NOT implicitly reopen or downgrade a `DONE` parent Feature.
3. With no tracker/convention, ask whether to establish a local work item. MUST NOT create one before confirmation.
4. Use the project format, or the [Issue template](assets/issue.template.md) when absent. Include only Goal, Spec link, status, priority, assignee, Acceptance/Implementation checklists, dependencies, blockers, and delivery links.
5. The bound remote Issue or local work item is the single writable Work Status authority; `specs/ROADMAP.md` only mirrors Feature status. Verify that authority is writable before a status transition. A remote authority requires explicit user authorization, available tools, and valid authentication. Otherwise request a local work item or keep the original status and `STOP`; MUST NOT generate pending text and claim the transition occurred.

A newly selected `DRAFT/UNTRACKED` item moves to `Roadmap Status: NEXT` only after confirmation by a named Roadmap Decision Authority. When resuming `READY/IN_PROGRESS/REVIEW`, preserve current status and validate Gate revisions; MUST NOT regress. If blocked, record `Blocked From`, reason, owner, and unblock condition, then move to `BLOCKED` and `STOP`.

### 2. Spec Refinement -> `SPEC READY`

Read [Spec and UI Gates](references/spec-and-ui-gates.md) first. Reuse the project Spec, or use the [Spec template](assets/spec.template.md) when no format exists.

Execute the reference's Greenfield/Brownfield lifecycle, Spec/Open Question definitions, and complete `SPEC READY` checklist. Brownfield MUST preserve evidence-backed AS-IS, bring touched surfaces to `RECONSTRUCTED`, then state TO-BE separately. For a Bug, prefer stable reproduction; if unavailable, record attempts, alternative evidence, and residual risk, obtain Decision Authority confirmation of expected behavior, and add missing requirements to Spec/Acceptance first. MUST NOT claim false reproduction. Use verifiable `AC-*`; a Critical Open Question at `OPEN` or `DEFERRED` MUST block the Gate. If unmet, record `SPEC READY Status: NOT_READY`; move to `BLOCKED` only when an external decision or evidence is unavailable. When met, record `SPEC READY Status: PASS` against the current manifest.

### 3. UI Detection and Optional `UI READY`

Run UI Detection from the reference against the current Spec revision. For `NO`, record the complete no-UI skip decision required by the Gate Record contract and `UI READY: SKIPPED (N/A)`. For `YES`, use the project format or [UX/UI template](assets/ux-ui.template.md), complete UX/UI Refinement and the full `UI READY` checklist. A Critical UI Open Question at `OPEN` or `DEFERRED` MUST block the Gate. When met, record `UI READY Status: PASS` with manifest/revisions. Reassess after a Spec change.

### 4. Test Design -> `TEST DESIGN READY`

Read [Test and Plan Gates](references/test-and-plan-gates.md). Using the project format or [Test Design template](assets/test-design.template.md), execute Test Design First, the Bug branch, and the full checklist; maintain `AC-* -> TS-* -> test/evidence`. If a Bug cannot be reproduced directly, use only the evidence-based surrogate defined in the reference. If automation is unavailable, record why, alternative verification, and residual risk. MUST NOT claim reproduction or a test-first failure that did not occur. If environment, data, or dependencies make a core requirement unverifiable, or a Critical Test Question is `OPEN` or `DEFERRED`, `STOP`. When met, record `TEST DESIGN READY Status: PASS` against the current manifest.

### 5. Implementation Plan and Tasks

Only when upstream Gates pass for current revisions or UI is explicitly skipped, with none `STALE`, write a Plan using the reference and [Implementation Plan template](assets/implementation-plan.template.md). It answers only how to implement and divides work into minimal verifiable Tasks interleaving implementation, tests, and migration/UI/Docs. The Plan MUST NOT change Acceptance, Scope, or rules; a requirement change returns to the Spec through Design Change. Record `Roadmap Status: READY` only when Gate/Plan/Tasks revisions align. If an upstream Gate becomes invalid, withdraw readiness and record reason and resume point in the authority; MUST NOT falsify history.

### 6. Coding + Testing

At implementation start, record `Roadmap Status: IN_PROGRESS` and read [Design Change and Delivery](references/design-change-and-delivery.md). Apply its Coding constraints, implement/test in small vertical slices, and maintain `AC-* -> TS-* -> evidence`; modify only current Scope. Before a Bug fix, reproduction or a confirmed surrogate plus regression/alternative verification MUST exist.

On a possible Design Change, pause affected Coding immediately and execute the full L1/L2/L3 flow in the reference. Any change to approved Scope, Acceptance, an external contract, observable behavior, or user-visible product copy requires explicit Decision Authority confirmation and marks affected Gates/Plan `STALE`. If L2/L3 impact confirmation is incomplete, `STOP`. L3 also requires an ADR bound to the named Architecture Decision Authority and decision revision in the project's implementation-authorizing state (for example, Accepted or Effective) before resuming.

### 7. Review

After implementation and relevant tests, record `Roadmap Status: REVIEW`. Use the [Review/PR/DONE template](assets/review-pr-done.template.md) and reference to perform full Self Review, record findings by severity, fix blockers, and rerun affected tests. Failed tests, unreviewed critical risk, or a Critical finding block delivery. A High finding may be waived only when the project Definition of Done (DoD) permits and Decision Authority records rationale, residual risk, and follow-up.

### 8. Documentation Sync

Synchronize the current Spec so implementation conforms to approved TO-BE and records final behavior truthfully. MUST NOT lower Acceptance to accommodate a divergent implementation. Update ROADMAP, API, DATABASE, ARCHITECTURE, TESTING, FRONTEND, UX, UI, DESIGN_SYSTEM, ADR, and Issue according to actual impact. For Brownfield, reassess affected Features as `IMPLEMENTED/PARTIAL/BROKEN/UNKNOWN/DEPRECATED`; preserve the `docs/onboarding/*` baseline and original Spec AS-IS/evidence as immutable history. Convert or keep canonical `docs/*` at `Perspective: CURRENT`, update `Last verified` and evidence revision, and link the original baseline. Update only affected docs.

Write a newly discovered durable build/test/architecture/UI rule to applicable `AGENTS.md` only when confirmed and explicitly `ADOPTED` by a maintainer. A newly approved language-policy value or scope MUST also be persisted before the current stage can complete. MUST NOT promote confirmed legacy state automatically into a standard or write temporary debugging, current task status, one-off workarounds, or unconfirmed inferences.

### 9. PR/Delivery -> `DONE` or `READY FOR PR/DELIVERY`

Read authorization/delivery rules in [Design Change and Delivery](references/design-change-and-delivery.md), use the [Review/PR/DONE template](assets/review-pr-done.template.md), and confirm project DoD first. Each side-effect class, including remote Issue, commit, push, PR, merge, and close, requires separate explicit user authorization plus available tools, valid authentication, and a known target; an implementation request MUST NOT be treated as authorization. If conditions are missing, output `READY FOR PR` or `READY FOR DELIVERY` as appropriate and `STOP`, keeping `Roadmap Status: REVIEW` and `DONE Status: NOT_READY`. No-PR delivery may reach `DONE` only after explicit maintainer adoption and equivalent review/delivery standards.

Record `DONE Status: PASS` and `Roadmap Status: DONE` together only when every referenced `DONE` condition is met; otherwise MUST NOT record `DONE`. On success, report Gate revisions and verification/delivery evidence, then `STOP`.

## Mandatory STOP Conditions

- The scope is not exactly one selected work item.
- A Greenfield lacks a project-level baseline, or a Brownfield lacks trustworthy onboarding.
- A Critical Open Question is `OPEN` or `DEFERRED`, a Language Policy is missing, invalid, conflicting, or unpersisted, a material Docs/Code conflict is unresolved, or a core requirement is unverifiable.
- After all autonomous clarification/verification for the current stage, a required Gate still cannot be met because an external decision, evidence, or environment is unavailable. A normal initial `NOT_READY` enters its refinement instead of stopping immediately.
- A Design Change affecting approved behavior lacks Decision Authority confirmation, or L2/L3 impact confirmation is incomplete.
- A user decision is required for tracker/local work item, major dependency, destructive migration, or delivery standard.
- A remote or Git side effect required by the current delivery step lacks explicit authorization, or its tool/authentication is unavailable.

Every `STOP` MUST report current Roadmap Status, passed/skipped Gates, blocking evidence, who must answer what, and the resume step after resolution. MUST NOT guess past a Gate.
