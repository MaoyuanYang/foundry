---
name: feature-dev
description: "Use ONLY when the user explicitly asks to implement, fix, or deliver one selected Feature, Change, or Bug. Drives Issue, Spec/UI/Test, planning, Coding, Review, documentation, and authorized delivery. MUST NOT be used for read-only review, diagnosis or explanation only, ordinary Q&A, Greenfield initialization, or unknown-repository onboarding."
---

# Feature Development

> Part of **Foundry**, an AI-native, spec-driven development suite. Role: Feature delivery (1 to N). Siblings: `coding-start`, `project-onboard`.
> Foundry contract version: `2026-08-30`.

## Mission and Boundaries

Advance exactly one selected Feature, Change, or Bug from fact confirmation to verifiable delivery. Follow project conventions. This Skill MUST NOT redesign the project baseline or absorb unrelated Features.

Read-only code review, diagnosis/explanation only, ordinary code Q&A, and solution brainstorming are outside this Skill; use the matching read-only flow. `Review` denotes this lifecycle stage only after implementation of the selected work item.

`Decision Authority` MUST be a named human empowered for the specific decision, such as a Maintainer, Roadmap, or Architecture Decision Authority. The executing Agent, automation, and an implementation-only assignee MUST NOT approve their own requirement changes, risk waivers, alternative verification, L2/L3 impacts, or delivery standards. Record approver, source, time, and scope for every approval.

Responsibility boundaries:

- `Spec` defines what is correct.
- `Issue/work item` records work status; it MUST NOT duplicate the full Spec.
- `STAGE.md` shows where the project and all active members stand; it projects a bound remote authority or supplies the explicitly identified local Work Status authority.
- `Implementation Plan` defines how to implement; it MUST NOT rewrite requirements.
- `PR/delivery record` states what changed in code.
- `ADR` records why a significant technical or architectural decision was made.
- `AGENTS.md` stores durable project rules; this Skill stores the cross-project process.

If the user explicitly asks to advance one lifecycle stage of a bound work item, complete that stage and stop at its resulting state. MUST NOT fabricate later Gates. This exception does not include one-off review or diagnosis-only requests.

## Language Policy

This section is the single authoritative Language Policy location for `feature-dev`. During Preflight, read every applicable `AGENTS.md` from repository root to the working directory. Before inspecting or modifying any target path, also resolve the complete `AGENTS.md` chain from repository root through that target's directory; a root-level working directory MUST NOT hide a nested target policy. Apply the most specific resolved rules for each target, then resolve this matrix from the canonical Core:

<!-- lang-policy-core-start -->
Use these exact defaults unless an override is both explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy:

```text
documentation_language = en
engineering_language = en
```

- Documentation Language governs formal artifact prose in README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records.
- Engineering Language governs new class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages.
- Product Content Language follows product requirements and has no default. Record actual BCP-47 value(s) when a product-content surface is known, `UNKNOWN - <resolution action>` while a potentially relevant surface is unresolved, or `N/A - no product-content surface` only when the confirmed scope has no user-facing or localized content. It permits localized resource/configuration values, exact product copy quoted in clearly labeled formal docs, and exact-copy assertions. Surrounding formal prose remains under Documentation Language; executable test names/descriptions, assertion code, and other engineering text remain under Engineering Language.
- Conversation MAY follow the user's language. Conversation language MUST NOT silently override any artifact-language dimension.
- Every override MUST be explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy; the requester is not automatically that authority. Record request source, authority name/role, approval source, scope, and affected artifacts. The Agent MUST NOT self-approve; a solo maintainer MAY hold the `Maintainer Decision Authority` role and approve their own explicit override request, recording request source, approval source, date, and scope like any other approval.
- Before writing or updating a formal artifact, inspect its existing formal-prose language. Excluding clearly labeled exact Product Content, if it is mixed, differs from the resolved Documentation Language, or the update would introduce a second prose language or require translation, record `CONFLICT` and `STOP`. Resume only after a named `Maintainer Decision Authority` approves one whole-document language and the user separately authorizes the required translation/update scope. This gate applies in both language directions.
- Persist every effective value exactly once in the nearest `AGENTS.md` whose scope fully governs it: repository-wide fallbacks and global engineering surfaces belong in root; a subtree-only override belongs in the nearest governing nested file, or root when none exists. Broader files MAY link to that authoritative entry but MUST NOT duplicate its value. Defaults are replaced only within the approved scope.
<!-- lang-policy-core-end -->

Feature-development-specific rules:

- Every Documentation or Engineering Language value MUST be inherited from a valid applicable `AGENTS.md` policy. If either dimension is missing, propose the exact default `documentation_language = en` or `engineering_language = en`, then `STOP` until a named `Maintainer Decision Authority` adopts it and an authorized write persists it. feature-dev MUST NOT turn a fallback into policy independently.
- A repository-wide exact default is valid when its row records the default-policy source and date. An existing override is valid only when its row records the actual BCP-47 value, exact scope, named authority, explicit approval or `ADOPTED` evidence, source, and date. Missing or contradictory metadata is `CONFLICT` and `STOP`; an unvalidated row MUST NOT override a valid fallback. Apply a valid scoped value before its repository-wide fallback.
- Path-scoped values govern only artifacts and engineering surfaces inside their recorded scope. Repository-global branch names, commit messages, and Issue/PR titles and descriptions use the root repository-wide Engineering Language unless an approved override explicitly names those global surfaces. Conflicting global-surface overrides are `CONFLICT` and `STOP`.
- Product Content Language MUST come from product requirements and i18n rules; MUST NOT be inferred from conversation or the engineering defaults. Record `N/A - no product-content surface` rather than inventing a language when the current Scope has no user-facing or localized content. If a potentially relevant surface remains unresolved, keep `UNKNOWN - <resolution action>` as an explicit Open Question and block the applicable Gate when Critical. feature-dev MUST NOT independently choose an override.
- Preserve existing identifiers. Translation requires an explicit request, named authority approval, and separately authorized scope; feature-dev MUST NOT infer that authorization.
- Before resuming or ending a stage-only run, persist the actual BCP-47 value, exact scope, authority, approval source, and date in the authoritative `AGENTS.md` location defined by the Core persistence rule. If that write is not authorized, `STOP`; an unpersisted value MUST NOT survive only in conversation or a temporary artifact.

## Resource Loading

Prefer existing project formats; use templates only when no equivalent artifact exists. Optional sections may be removed only when genuinely inapplicable. Gate and risk decisions and their `N/A - reason` evidence MUST remain; Brownfield AS-IS evidence MUST NOT be deleted.

| Resource | Read when |
| --- | --- |
| [Spec and UI Gates](references/spec-and-ui-gates.md) | Before Spec Refinement; continue through the UI branch when applicable |
| [Parallel work and integration](references/parallel-work-and-integration.md) | Before `WORK_ITEM_BINDING` when other `NEXT` items exist; before creating or switching the work-item branch; and before integration, merge, or PR-review handling |
| [Test and Plan Gates](references/test-and-plan-gates.md) | After `SPEC READY` and the UI branch, before Test Design and planning |
| [Design Change and Delivery](references/design-change-and-delivery.md) | Before Coding; re-read relevant sections for Design Change, Review, or delivery |
| [Project Stage template](assets/stage.template.md) | During Preflight before creating or adopting root `STAGE.md`; reread before changing tracking mode or status authority |
| [Spec template](assets/spec.template.md) | Creating or restructuring the current Spec when no project format exists |
| [Issue template](assets/issue.template.md) | Preparing the remote Issue or an auxiliary local checklist when no project format exists |
| [UX/UI template](assets/ux-ui.template.md) | `UI Impact: YES` and no project format exists |
| [Test Design template](assets/test-design.template.md) | Mapping Acceptance Criteria to Test Scenarios when no project format exists |
| [Implementation Plan template](assets/implementation-plan.template.md) | All required Gates are ready, implementation approach can be defined, and no project format exists |
| [Review/PR/DONE template](assets/review-pr-done.template.md) | Self Review, PR-ready summary, and final `DONE` decision |

On resume after a long session, reread the reference files that govern the current stage before relying on them.

## Two State Systems

Always record progress and Gates separately. Neither may substitute for the other.

**Roadmap Status**:

`DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED`

`UNTRACKED` from Brownfield onboarding means only that no trustworthy work history exists. It enters the normal state machine only after the user selects it.

- `DRAFT`: known but unselected or still coarse.
- `NEXT`: a work item currently selected for active development. Multiple `NEXT` items may coexist for distinct members; each MUST be claimed by exactly one active member, and an unexplained duplicate claim on the same item is `CONFLICT` (claims with explicit recorded collaboration and responsibility boundaries remain valid). The authoritative claim record is the tracker issue assignee in `REMOTE` tracking mode and the Stage activity row in `LOCAL` mode; see [Parallel work and integration](references/parallel-work-and-integration.md). A project MAY bound concurrency with a `WIP Limit` policy adopted in root `AGENTS.md`.
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
- A review-feedback fix slice follows these same rules: a fix that changes observable behavior, user-visible error copy, or an approved contract marks the affected Gates `STALE` and revalidates them; a fix confined to non-semantic corrections (comments, formatting, internal names with no observable change) updates only the Plan/diff record. After every fix slice, rerun the Review checklist over the changed diff before `DONE`.
- The set of concurrently claimed work items is a manifest input of `TEST DESIGN READY`: when a new work item is claimed on an overlapping surface while this item is active and its TR-11 row reads `N/A - no concurrent work items`, mark `TEST DESIGN READY` `STALE` and revalidate before merge.

**State transitions**:

```text
DRAFT or Brownfield UNTRACKED -> NEXT -> READY -> IN_PROGRESS -> REVIEW -> DONE
REVIEW -> IN_PROGRESS (scoped fix slice only: record the triggering finding, scope, and fix-slice reason)
Any active state -> BLOCKED (record Blocked From) -> previous valid state after revalidation
```

Resume existing work from its current valid state; MUST NOT regress unconditionally to `NEXT`. The `REVIEW -> IN_PROGRESS` fix-slice edge is not a regression: it is valid only for a scoped fix triggered by review findings or PR review feedback, with the triggering finding, scope, and reason recorded in the Work Status authority; after the fix and its affected reruns complete, return the item to `REVIEW`. A Bug/Change to a `DONE` Feature uses a new work-item ID; MUST NOT erase the parent Feature's historical completion state to make a fix.

## Executable State Machine

### 0. Preflight, Evidence, and Scope

First confirm that the intent is to implement, fix, or deliver this work item. If it is read-only review, diagnosis, or explanation, route immediately to the matching flow and `STOP`; MUST NOT bind an Issue or modify files.

1. Locate repository root and project conventions. Read every applicable `AGENTS.md` from root to working directory, then resolve the complete root-to-target `AGENTS.md` chain for every inspected or modified path. Apply each target's most specific safety, module, and Language Policy rules. If root `AGENTS.md` records `foundry_contract_version`, compare it with this Skill's contract version recorded above; on mismatch, report both values and `STOP` until the installed Skill copy is synchronized with the repository contract. When Stage, `AGENTS.md`, or the request indicates multiple members or machines, recommend binding a remote tracker as the Work Status authority; in `REMOTE` tracking mode each machine keeps a local Stage projection refreshed from the tracker, and the tracker wins any disagreement.
2. Discover and read equivalent project docs without assuming paths: root `STAGE.md`, `README`, `PRODUCT`, `ARCHITECTURE`, `DATABASE`, `API`, `TESTING`, `ROADMAP`, current Spec, Dependency Specs, and relevant ADRs. Verify every Stage projection against its tracker, Gate, Roadmap, and ref before relying on it.
3. Read relevant code, tests, configuration, migrations, and existing Issue/work item for the current Feature. MUST NOT read docs alone.
4. If UI impact is initially possible, also read `FRONTEND`, `UX`, `UI`, `DESIGN_SYSTEM`, affected pages, and existing components.
5. Use only the onboarding evidence labels: `OBSERVED`, `DOCUMENTED`, `CONFIRMED`, `INFERRED`, `NEEDS_CONFIRMATION`, `CONFLICT`, `UNKNOWN`, and `MISSING`. Code, tests, UI, and old docs are evidence; they do not automatically define the correct standard.
6. Compare Code, Spec, Docs, Tests, and UI. Clarify material mismatches, update affected current canonical docs, enter Design Change, or route missing baseline reconstruction to onboarding before a Gate. Historical baselines are immutable and MUST NOT be mutated. A Gate MUST NOT pass with unresolved conflicts.
7. Confirm exactly one selected Feature, Change, or Bug for this run and read its current Roadmap Status, Gate revisions, and blockers. If none is selected, ask the user to choose. If the user asks this run to advance several work items, `STOP` and ask for one; MUST NOT advance them in bulk. Other concurrently selected `NEXT` items belong to other members: MUST NOT modify their Roadmap status, work items, branches, or Gate records, and coordinate only through Stage conflict rules.
8. Before the first local write, list every path to create or update and every command with known generated output, then obtain explicit local-write authorization for those boundaries. Without it, remain read-only and `STOP`. Local-write authorization never includes Git or remote side effects.

After scope and local-write authorization are valid, create or incrementally adopt root `STAGE.md` from the [Project Stage template](assets/stage.template.md). Set the current Stage activity to `PREFLIGHT` while this section runs. Use these exact Feature-stage tokens: `PREFLIGHT`, `WORK_ITEM_BINDING`, `SPEC_REFINEMENT`, `UI_REFINEMENT`, `TEST_DESIGN`, `IMPLEMENTATION_PLAN`, `CODING_TESTING`, `REVIEW`, `DOCUMENTATION_SYNC`, `DELIVERY`, `PR_REVIEW`, and `COMPLETE`. Increment the snapshot only on assignment, a meaningful transition, block/resume, handoff, or completion. For every Stage write, run this guard in order: (1) reread the latest `STAGE.md` and every linked authority; (2) compare the snapshot revision and SHA-256 against the previous read and abort/reconcile on any change; (3) change only the current activity and directly affected coordination rows, preserving every unrelated member; (4) record the prior revision/hash as `Parent Snapshot` and increment the snapshot revision; (5) write; (6) reread after writing and stop on a duplicate ID or unexpected result. After two consecutive aborts on unexpected change, record `CONFLICT` and stop the affected update. Serialize through the repository lock or designated canonical writer when one exists; if neither serialization nor hash comparison is available, `STOP` before writing. Allocate `A-xxx` under the same guard. A branch-local or divergent-worktree copy is not live Stage state until the canonical writer reconciles it. An unexplained second claim on the same work item is `CONFLICT` unless explicit collaboration and responsibility boundaries are recorded.

The project baseline MUST at least document product scope, system boundaries, the test method, the current Roadmap, trustworthy Brownfield AS-IS where applicable, and a valid persisted Language Policy. A missing `STAGE.md` alone does not require onboarding; create it after authorization and continue. A missing Language Policy alone does not require full onboarding: propose the English defaults, obtain named Maintainer adoption and local-write authorization, persist them in the authoritative `AGENTS.md`, and resume from Preflight. Until then, `STOP`. For other missing baseline elements, route immediately and `STOP`:

- For Greenfield or a new project without a project-level baseline, use `coding-start`.
- For an unknown, legacy, incomplete, or broken Brownfield without trustworthy onboarding, use `project-onboard`.

This Skill MUST NOT replace initialization/onboarding or start product Coding after `STOP`.

### 1. Bind One Issue/Work Item

Set the current Stage activity to `WORK_ITEM_BINDING`.

1. Detect existing GitHub, GitLab, Jira, or local conventions, including repository configuration, templates, links, Roadmap records, and `STAGE.md` activity claims.
2. Bind the matching work item if present; otherwise prepare only the current one. MUST NOT create in bulk. A Bug/Change uses an independent work item and MUST NOT implicitly reopen or downgrade a `DONE` parent Feature. In a multi-member repository, the claiming member files or binds exactly one Issue for their claimed item before development starts, following [Parallel work and integration](references/parallel-work-and-integration.md).
3. When no remote tracker is bound, ask whether the current `STAGE.md` activity row may become the local Work Status authority. Set its authority exactly to `STAGE_LOCAL:<Activity ID>` only after confirmation. MUST NOT create or claim one silently. A temporarily unauthorized, unavailable, unauthenticated, or unwritable bound remote remains authoritative unless an explicit durable migration unbinds it.
4. Use the project format, or the [Issue template](assets/issue.template.md) when an auxiliary local work item is useful. Include only Goal, Spec link, priority, assignee, Acceptance/Implementation checklists, dependencies, blockers, delivery links, and a link to the authoritative Stage row; any State/Gate/Delivery fields are read-only projections from the named authority; MUST NOT maintain a second writable status there.
5. The bound remote Issue or identified `STAGE_LOCAL:<Activity ID>` row is the single writable Work Status authority; `STAGE.md` projects remote status and `specs/ROADMAP.md` mirrors either authority. Verify that authority is writable before a status transition. A remote authority requires explicit user authorization, available tools, and valid authentication. If any is missing, keep the original status and `STOP`; MUST NOT fall back to Stage-local, generate pending text, or claim the transition occurred. Stage-local is valid only when no remote is bound or an explicit durable migration has replaced it.

For a Stage-local handoff, transfer authority under the Stage write guard in one update: create or confirm the receiver's activity, preserve Work Status, change authority to `STAGE_LOCAL:<receiver Activity ID>`, mark the sender as transferred, and accept the handoff. The sender remains active and authoritative until that update succeeds. Move a Stage-local activity to `Recently Completed` only after terminal Work Status or successful authority transfer, preserving final status and authority in the completed row.

A newly selected `DRAFT/UNTRACKED` item moves to `Roadmap Status: NEXT` only after confirmation by a named Roadmap Decision Authority. When resuming `READY/IN_PROGRESS/REVIEW`, preserve current status and validate Gate revisions; MUST NOT regress, except through the recorded `REVIEW -> IN_PROGRESS` fix-slice edge defined above. If blocked, record `Blocked From`, reason, owner, unblock condition, and resume stage in the Work Status authority and Stage, then move to `BLOCKED` and `STOP`.

### 2. Spec Refinement -> `SPEC READY`

Read [Spec and UI Gates](references/spec-and-ui-gates.md) first. Reuse the project Spec, or use the [Spec template](assets/spec.template.md) when no format exists.

Set the current Stage activity to `SPEC_REFINEMENT`; after the Gate decision, project only its status and authoritative record link into the Gate Snapshot.

Execute the reference's Greenfield/Brownfield lifecycle, Spec/Open Question definitions, and complete `SPEC READY` checklist. Brownfield MUST preserve evidence-backed AS-IS, bring touched surfaces to `RECONSTRUCTED`, then state TO-BE separately. For a Bug, prefer stable reproduction; if unavailable, record attempts, alternative evidence, and residual risk, obtain Decision Authority confirmation of expected behavior, and add missing requirements to Spec/Acceptance first. MUST NOT claim false reproduction. Use verifiable `AC-*`; a Critical Open Question at `OPEN` or `DEFERRED` MUST block the Gate. If unmet, record `SPEC READY Status: NOT_READY`; move to `BLOCKED` only when an external decision or evidence is unavailable. When met, record `SPEC READY Status: PASS` against the current manifest.

### 3. UI Detection and Optional `UI READY`

Run UI Detection from the reference against the current Spec revision. For `NO`, record the complete no-UI skip decision required by the Gate Record contract and `UI READY: SKIPPED (N/A)`. For `YES`, use the project format or [UX/UI template](assets/ux-ui.template.md), complete UX/UI Refinement and the full `UI READY` checklist. A Critical UI Open Question at `OPEN` or `DEFERRED` MUST block the Gate. When met, record `UI READY Status: PASS` with manifest/revisions. Reassess after a Spec change.

Set the current Stage activity to `UI_REFINEMENT` while this branch is evaluated; project either the authoritative Gate link or complete skip-decision link before advancing.

### 4. Test Design -> `TEST DESIGN READY`

Read [Test and Plan Gates](references/test-and-plan-gates.md). Using the project format or [Test Design template](assets/test-design.template.md), execute Test Design First, the Bug branch, and the full checklist; maintain `AC-* -> TS-* -> test/evidence`. If a Bug cannot be reproduced directly, use only the evidence-based surrogate defined in the reference. If automation is unavailable, record why, alternative verification, and residual risk. MUST NOT claim reproduction or a test-first failure that did not occur. If environment, data, or dependencies make a core requirement unverifiable, or a Critical Test Question is `OPEN` or `DEFERRED`, `STOP`. When met, record `TEST DESIGN READY Status: PASS` against the current manifest.

Set the current Stage activity to `TEST_DESIGN`; Stage records only the projected result and link, never the scenarios or evidence manifest.

### 5. Implementation Plan and Tasks

Only when upstream Gates pass for current revisions or UI is explicitly skipped, with none `STALE`, write a Plan using the reference and, when no project format exists, the [Implementation Plan template](assets/implementation-plan.template.md). It answers only how to implement and divides work into minimal verifiable Tasks interleaving implementation, tests, and migration/UI/Docs. The Plan MUST NOT change Acceptance, Scope, or rules; a requirement change returns to the Spec through Design Change. Record `Roadmap Status: READY` only when Gate/Plan/Tasks revisions align. If an upstream Gate becomes invalid, withdraw readiness by recording `Roadmap Status: NEXT` again (the pre-readiness selection state), and record the reason and resume point in the authority; MUST NOT falsify history.

Set the current Stage activity to `IMPLEMENTATION_PLAN`; after readiness is valid, synchronize its next checkpoint without copying Tasks into Stage.

### 6. Coding + Testing

At implementation start, record `Roadmap Status: IN_PROGRESS`, set the current Stage activity to `CODING_TESTING`, and read [Design Change and Delivery](references/design-change-and-delivery.md). Apply its Coding constraints, implement/test in small vertical slices, and maintain `AC-* -> TS-* -> evidence`; modify only current Scope. Before a Bug fix, reproduction or a confirmed surrogate plus regression/alternative verification MUST exist.

On a possible Design Change, pause affected Coding immediately and execute the full L1/L2/L3 flow in the reference. Any change to approved Scope, Acceptance, an external contract, observable behavior, or user-visible product copy requires explicit Decision Authority confirmation and marks affected Gates/Plan `STALE`. If L2/L3 impact confirmation is incomplete, `STOP`. L3 also requires an ADR bound to the named Architecture Decision Authority and decision revision in the project's implementation-authorizing state (for example, Accepted or Effective) before resuming.

### 7. Review

After implementation and relevant tests, record `Roadmap Status: REVIEW` and set the current Stage activity to `REVIEW`. Use the [Review/PR/DONE template](assets/review-pr-done.template.md) and reference to perform full Self Review, record findings by severity, fix blockers, and rerun affected tests. Failed tests, unreviewed critical risk, or a Critical finding block delivery. A High finding may be waived only when the project Definition of Done (DoD) permits and Decision Authority records rationale, residual risk, and follow-up. External PR review findings, when a PR exists, import into the same Findings table with severity mapping and follow the same blocking rules; see [Parallel work and integration](references/parallel-work-and-integration.md).

### 8. Documentation Sync

Set the current Stage activity to `DOCUMENTATION_SYNC`. Synchronize the current Spec so implementation conforms to approved TO-BE and records final behavior truthfully. MUST NOT lower Acceptance to accommodate a divergent implementation. Update STAGE, ROADMAP, API, DATABASE, ARCHITECTURE, TESTING, FRONTEND, UX, UI, DESIGN_SYSTEM, ADR, and Issue according to actual impact. For Brownfield, reassess affected Features using the `project-onboard` implementation-state labels: `IMPLEMENTED` works with no known blocking gap; `PARTIAL` misses a critical path, state, or role; `BROKEN` fails an expected core path; `UNKNOWN` lacks sufficient evidence; `DEPRECATED` shows explicit retirement evidence. Preserve the `docs/onboarding/*` baseline and original Spec AS-IS/evidence as immutable history. Convert or keep canonical `docs/*` at `Perspective: CURRENT` (Greenfield docs without a `Perspective` header are treated as `CURRENT`), update `Last verified` and evidence revision, and link the original baseline. Update only affected docs. Stage remains operational and MUST NOT be added to a semantic Gate manifest.

Write a newly discovered durable build/test/architecture/UI rule to applicable `AGENTS.md` only when confirmed and explicitly `ADOPTED` by a maintainer. A newly approved language-policy value or scope MUST also be persisted before the current stage can complete. MUST NOT promote confirmed legacy state automatically into a standard or write temporary debugging, current task status, one-off workarounds, or unconfirmed inferences.

### 9. PR/Delivery -> `DONE` or `READY FOR PR/DELIVERY`

Read authorization/delivery rules in [Design Change and Delivery](references/design-change-and-delivery.md), use the [Review/PR/DONE template](assets/review-pr-done.template.md), and confirm project DoD first. Each side-effect class, including remote Issue, commit, push, PR, merge, and close, requires separate explicit user authorization plus available tools, valid authentication, and a known target; an implementation request MUST NOT be treated as authorization. If conditions are missing, output `READY FOR PR` or `READY FOR DELIVERY` as appropriate and `STOP`, keeping `Roadmap Status: REVIEW` and `DONE Status: NOT_READY`. No-PR delivery may reach `DONE` only after explicit maintainer adoption and equivalent review/delivery standards.

Set the current Stage activity to `DELIVERY`. On a ready handoff, record the exact delivery blocker and resume point. After confirmed `DONE`, reconcile Stage as a post-Gate projection: set the activity to `COMPLETE`, preserve final Work Status and authority, move it to `Recently Completed`, and reconcile the project summary from remaining active work. Order matters: make the authoritative `DONE` decision first; a Stage write conflict leaves Stage stale and must be reported, but it blocks only the Stage projection and does not retroactively invalidate an otherwise authoritative `DONE` record.

Record `DONE Status: PASS` and `Roadmap Status: DONE` together only when every referenced `DONE` condition is met; otherwise MUST NOT record `DONE`. Delivery state progresses `REVIEW -> READY FOR PR | READY FOR DELIVERY -> IN PR REVIEW (PR mode) -> DELIVERED`; `DELIVERED` means the confirmed Definition of Done is met (the authorized PR is opened, its review feedback resolved, and it is approved and merged by or with the responsible maintainer — the named Maintainer Decision Authority for the repository, or the maintainer they explicitly designate for that merge — or the explicitly adopted no-PR delivery record exists), and it is recorded together with `DONE Status: PASS` and `Roadmap Status: DONE`.

When an authorized PR exists and external review feedback arrives, set the current Stage activity to `PR_REVIEW` and process it under [Parallel work and integration](references/parallel-work-and-integration.md): import findings into the Findings table with severity mapping, where a Critical external finding blocks `DONE` exactly like a self-review Critical and a High finding may be waived only through the existing Decision Authority path. Fixes run as a scoped fix slice: record `Roadmap Status: IN_PROGRESS` through the recorded `REVIEW -> IN_PROGRESS` fix-slice edge (triggering finding, scope, and reason logged in the Work Status authority), implement under `CODING_TESTING`, apply the fix-slice Gate invalidation rules above, and return the item to `REVIEW` after the fix and its affected reruns; a fix that changes approved Scope, Acceptance, or an external contract first runs Design Change. Before merge and `DELIVERED`, complete the integration protocol from the same reference: sync with the integration base, rerun the recorded Test Design integration slice and regression scope, and record the evidence in the Review record. On success, report Gate revisions and verification/delivery evidence, then `STOP`.

## Mandatory STOP Conditions

- The scope is not exactly one selected work item.
- A Greenfield lacks a project-level baseline, or a Brownfield lacks trustworthy onboarding.
- A Critical Open Question is `OPEN` or `DEFERRED`, a Language Policy is missing, invalid, conflicting, or unpersisted, a material Docs/Code conflict is unresolved, or a core requirement is unverifiable.
- Local writes are required but their exact paths or generated-output boundaries lack explicit authorization.
- After all autonomous clarification/verification for the current stage, a required Gate still cannot be met because an external decision, evidence, or environment is unavailable. A normal initial `NOT_READY` enters its refinement instead of stopping immediately.
- A Design Change affecting approved behavior lacks Decision Authority confirmation, or L2/L3 impact confirmation is incomplete.
- A user decision is required for tracker/Stage-local authority, major dependency, destructive migration, or delivery standard.
- A remote or Git side effect required by the current delivery step lacks explicit authorization, or its tool/authentication is unavailable.
- Stage binding, freshness, revision/hash, activity identity, duplicate assignment, or authority transfer is unresolved; stop the affected transition, handoff, or completion while allowing unrelated read-only investigation.

Every `STOP` MUST report current Roadmap Status, passed/skipped Gates, blocking evidence, who must answer what, and the resume step after resolution. When local writes are authorized, reconcile the same blocker, owner, unblock condition, and exact resume stage into `STAGE.md` without altering unrelated members. MUST NOT guess past a Gate.
