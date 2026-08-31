<!--
Copy this file to the project root as AGENTS.md. Replace placeholders and
delete inapplicable sections. Keep only durable cross-task rules; MUST NOT store
current progress, temporary Issue state, debug logs, one-off workarounds or
unconfirmed inference here. This comment may be removed after adoption.
-->

# AGENTS.md

## Project Context

- Product purpose: {{ONE_SENTENCE_PURPOSE}}
- Architecture style: {{CONFIRMED_ARCHITECTURE_STYLE}}
- Primary runtime boundaries: {{BOUNDARIES}}
- Project documentation: `README.md`, `STAGE.md`, `docs/`, `specs/ROADMAP.md`

## Language Policy

```text
documentation_language = en
engineering_language = en
product_content_language = {{ACTUAL_BCP47_VALUES_OR_UNKNOWN_OR_NA}}
```

The key lines above are repository-wide fallbacks. Replace every placeholder. Use actual requirement-derived BCP-47 value(s), `UNKNOWN - <resolution action>` for a potentially relevant unresolved Product Content surface, or `N/A - no product-content surface` only for a confirmed no-content scope.

| Policy Key | Effective Value / State | Exact Scope | Named Authority / Approval | Source / Date |
| --- | --- | --- | --- | --- |
| `documentation_language` | `en` | `repository-wide fallback` | `default policy` | {{SOURCE_AND_DATE}} |
| `engineering_language` | `en` | `repository-wide fallback` | `default policy` | {{SOURCE_AND_DATE}} |
| `product_content_language` | {{ACTUAL_BCP47_VALUES_OR_UNKNOWN_OR_NA}} | {{PRODUCT_SURFACE_SCOPE_OR_NA}} | {{PRODUCT_REQUIREMENT_SOURCE_OR_NAMED_AUTHORITY}} | {{SOURCE_AND_DATE}} |

<!-- Example scoped-override row: copy this format into the table above as one
row for every approved override, then delete this comment when none exists.
| `{{POLICY_KEY_FOR_EACH_APPROVED_OVERRIDE}}` | `{{ACTUAL_EFFECTIVE_BCP47_VALUE}}` | `{{EXACT_ARTIFACT_PATH_OR_ENGINEERING_SURFACE_SCOPE}}` | `{{NAMED_AUTHORITY_AND_APPROVAL_SOURCE}}` | `{{SOURCE_AND_DATE}}` |
-->

This table is the durable handoff source: a later workflow MUST be able to resolve the applicable value from this `AGENTS.md` without Discovery context or an unspecified document.

At initialization, this root file stores every effective value exactly once. Repository-global branch, commit, and Issue/PR language uses the root Engineering Language unless an approved override explicitly names those global surfaces. A later nested `AGENTS.md` MAY become authoritative for a subtree-only override; in that case, replace the root value row with a link to the nested policy rather than duplicating it.

- Documentation Language governs formal artifact prose in README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records.
- Engineering Language governs new class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages.
- Product Content Language follows product requirements. Localized resource/configuration values, exact product copy quoted in clearly labeled formal docs, and exact-copy assertions MAY use it. `UNKNOWN` is unresolved; `N/A - no product-content surface` is valid only with confirmed scope evidence.
- Surrounding formal prose remains under Documentation Language. Executable test names/descriptions, assertion code, comments, and other engineering text remain under Engineering Language even when they contain an exact Product Content assertion value.
- Conversation MAY follow the user's language, but conversation language MUST NOT silently override any dimension.
- Every override MUST be explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy. The requester is not automatically that authority.
- Record the override request, authority name/role, approval source, exact scope, affected artifacts, and synchronization requirements in the table above. An override recorded only elsewhere is not effective for later workflow handoff.

## Architecture Constraints

- {{STABLE_CONSTRAINT_AND_REASON}}
- Respect module ownership and dependency direction documented in `docs/ARCHITECTURE.md`.
- MUST NOT introduce a new service, database, cache, queue, framework, or cross-module dependency without impact analysis.
- Concrete Feature implementation MUST follow its Spec and MUST NOT silently redefine project-level architecture.

## Module Rules

| Module / boundary | Owns | May depend on | MUST NOT own / depend on |
| --- | --- | --- | --- |
| {{MODULE}} | {{RESPONSIBILITY}} | {{ALLOWED}} | {{FORBIDDEN}} |

## Build and Test

```text
Start: {{REAL_START_COMMAND}}
Build: {{REAL_BUILD_COMMAND}}
Test:  {{REAL_TEST_COMMAND}}
```

- An unavailable command MUST be written exactly as `Not yet established`; commands MUST NOT be invented. When tooling changes, update this file, README, and `docs/TESTING.md` together.
- Run the smallest relevant checks during development and the project-required verification before completion.
- Test observable behavior and contracts, not private implementation structure.
- Add a regression test for a bug fix when practical.

## Stable Coding Conventions

- {{CONVENTION}}
- Follow existing formatter, linter, type-checker and naming rules once established.
- Prefer the smallest design that preserves documented boundaries and testability.

## Spec Lifecycle and Roadmap Status

Allowed Roadmap statuses:

```text
DRAFT -> NEXT -> READY -> IN_PROGRESS -> REVIEW -> DONE
Any non-DONE state -> BLOCKED -> prior valid state
```

- `DRAFT`: macro intent only; open questions and change are expected.
- `NEXT`: a Feature selected for active development; parallel selections are valid when distinct members claim them.
- `READY`: `SPEC READY`, `UI READY` or an explicit UI skip, `TEST DESIGN READY`, and a valid current Plan and Tasks; `coding-start` MUST NOT set it.
- `IN_PROGRESS`: implementation is active.
- `REVIEW`: implementation and evidence are under review.
- `DONE`: behavior, tests, review and documentation sync are complete.
- `BLOCKED`: a named blocker prevents progress; record the blocker in the Issue/Roadmap.

Only deepen a selected `NEXT` Spec claimed by the current member. MUST NOT prematurely finalize unrelated DRAFT Specs.

## Work Tracking and Delivery

- Tracking mode: `{{REMOTE | LOCAL | HYBRID | TBD}}`
- `STAGE.md` owns the current project phase, active-member coordination, blockers, handoffs, and resume points. It links to controlling artifacts and MUST NOT copy their content.
- Before `feature-dev`, `specs/ROADMAP.md` owns only initial `DRAFT/NEXT/BLOCKED`; `BLOCKED` requires a named blocker and unblock condition. Once a work item is bound, its remote tracker is the writable Work Status authority. When no remote is bound, the activity row identified by `STAGE_LOCAL:<Activity ID>` in `STAGE.md` is the local Work Status authority. Roadmap is a synchronized projection in either mode.
- Update `STAGE.md` only at assignment, meaningful workflow transition, block/resume, handoff, and completion. Preserve unrelated member rows and record conflicts instead of silently overwriting them.
- A bound remote remains authoritative when authorization, tooling, authentication, availability, or writing temporarily fails; preserve status and stop. Use `STAGE_LOCAL:<Activity ID>` only when no remote is bound or after an explicitly approved durable migration.
- Serialize Stage writes through a repository lock or designated canonical writer. Otherwise compare the revision and SHA-256 immediately before writing and abort/reconcile on change; allocate `A-xxx` under the same guard. Divergent worktree copies are not live Stage state until canonical reconciliation.
- Transfer Stage-local authority atomically to the receiver's activity before the sender leaves Active Work. Preserve final status and authority when archiving completed activities.
- Delivery mode: `{{PR_OR_MR | EXPLICIT_NO_PR_DELIVERY | TBD}}`
- A remote Issue, commit, push, PR/MR, merge, or close MUST occur only after the user explicitly authorizes that action class.

## Parallel Work Policy

- foundry_contract_version = `{{FOUNDRY_CONTRACT_VERSION}}` — the installed Foundry Skill contract version this project's rules are built against, written as this exact key line so every Skill can detect it; a Skill whose contract version differs MUST stop and be synchronized first. Only the named Maintainer Decision Authority may advance this value when adopting a newer Skill contract, recording source and date alongside.
- Multiple `NEXT` work items may run concurrently; each is claimed by exactly one active member. The authoritative claim record is the tracker issue assignee in `REMOTE` tracking mode (the Stage activity row is its projection) and the Stage activity row in `LOCAL` mode; an unexplained duplicate claim is `CONFLICT`.
- A claim ends by completion, by the atomic Stage-local handoff, or by authority release: when the claiming member is unreachable, the named Maintainer Decision Authority may release the claim and return the item to its pre-claim state, recording the reason.
- WIP Limit: `{{NONE | <n>}}` — an optional numeric concurrency bound adopted by the named Maintainer Decision Authority. It counts non-terminal claimed work items: the tracker's open items bound to Specs in `REMOTE` mode, or non-terminal Stage Active Work rows in `LOCAL` mode.
- Multi-member or multi-machine work MUST bind a remote tracker (GitHub/GitLab/Jira) as the Work Status authority, or record an explicit Maintainer-adopted exception; `HYBRID` scopes the split (each bound subproject follows `REMOTE` rules; every unbound scope is single-member `LOCAL`). Each machine keeps a local `STAGE.md` projection refreshed from the tracker; the tracker wins any disagreement, and a Git-level conflict on `STAGE.md` is resolved by regenerating affected rows from authoritative sources.
- Each claimed work item develops on its own branch recorded in the Stage `Branch / Worktree` column; branch names follow the Engineering Language and project convention.
- Before merge and `DELIVERED`, the claiming member syncs with the integration base and reruns the recorded Test Design integration slice and regression scope; a merge conflict revealing a semantic conflict on a shared contract or Spec is an L2 Design Change.
- PR review feedback is consumed in `IN PR REVIEW` through a scoped fix slice (`REVIEW -> IN_PROGRESS`, then back to `REVIEW`): Critical external findings block `DONE`; High findings may be waived only through the Decision Authority path. Merge is separately authorized and performed by or with the responsible maintainer (the named Maintainer Decision Authority or their explicit designee for that merge).

## Complete Feature Workflow

```text
Macro Design
-> Feature DRAFT Spec
-> Feature Selected (`NEXT`)
-> Work item bound (remote Issue or Stage-local authority) and linked to Spec
-> Spec Clarification and Refinement
-> SPEC READY
-> if UI:
     UX Refinement
     -> UI State Design
     -> Frontend/Backend Contract
     -> UI READY
-> Acceptance Test Design
-> TEST DESIGN READY
-> Implementation Plan
-> Tasks
-> Coding
-> Testing
-> Review
-> Documentation Sync
-> PR/MR or the explicitly adopted no-PR delivery record
-> PR review feedback resolved (PR mode: IN PR REVIEW)
-> DONE
```

- MUST NOT start Coding before the Feature's applicable Gates pass.
- Every Gate record MUST bind the artifact revision it validated. Spec behavior changes invalidate `SPEC READY` and downstream UI/Test/Plan; UI changes invalidate `UI READY` and Test/Plan; Test Design changes invalidate `TEST DESIGN READY` and Plan. Resume only after every stale Gate is revalidated.
- Critical requirements MUST have observable Acceptance Criteria and planned evidence.
- Implementation Plan defines how to build only the current Feature; it MUST NOT become global architecture by accident.

## UI/UX Long-Term Rules

<!-- Delete this section for a confirmed no-UI project. -->

1. UX precedes UI; determine user goal and flow before visual detail.
2. A Feature MUST design more than the Happy Path.
3. Consider Loading, Empty, Error and Success as formal states.
4. Explicitly decide whether Disabled, Permission Denied, Offline, interruption and recovery states apply.
5. Prefer existing components and project patterns.
6. Follow the Design System before extending it.
7. A Feature MUST NOT introduce an independent visual language.
8. Map API errors to explicit user-visible behavior and recovery.
9. Design UI around user behavior and decisions, not data fields alone.
10. Meet the documented Accessibility requirements, including keyboard and focus behavior where applicable.
11. Meet the documented Responsive requirements for target devices.
12. If a UI change affects shared tokens or components, update UI/Design System docs and affected tests.

## Design System Rules

<!-- Keep this section only when the macro design confirms a shared UI system
that will be documented in `docs/DESIGN_SYSTEM.md`; otherwise delete the whole
section. -->

- Reuse tokens and components defined in `docs/DESIGN_SYSTEM.md` once it exists.
- Extend the system only when an explicit Feature need cannot be met by composition or an existing variant.
- Document shared variants and states; MUST NOT hide them as Feature-local CSS.
- Review visual, interaction, accessibility and regression impact before changing shared foundations.

## Design Change Policy

Design MAY change, but MUST NOT change through an undocumented code-only shortcut.

```text
Discover problem
-> classify Requirement / Design / Implementation
-> analyze impact
-> assign L1 / L2 / L3
-> identify affected artifacts
-> update Spec / Design and Acceptance Criteria
-> update UX/UI and Test Design when applicable
-> change Code and Tests
-> Verify
-> Review
-> sync Issue / PR
```

### L1: Feature-local

Use when only the current Feature changes. Update the current Spec, Acceptance Criteria/Test Design, and only the necessary API, Database, or UI documentation. Any change to approved Scope, Acceptance Criteria, an external contract, observable behavior, or user-visible product copy requires explicit approval by a named Decision Authority empowered for that Feature.

### L2: Cross-Feature

Use when multiple Features or a shared contract change. A named Decision Authority empowered for all affected Features or the shared contract MUST approve the change. Update related Specs, API, Database, UX/UI, Design System if relevant, Roadmap, Tests, and Architecture only where affected.

### L3: Architectural

Use for changes to module boundaries, major technology choices, Source of Truth, messaging, cache, authentication, database strategy, frontend architecture, global navigation, Design System core, API style, or consistency model. A named Architecture Decision Authority MUST approve the change. Update every truly affected project document, related Specs, AGENTS, and Tests; create or update an ADR with the approval source/time/scope and input revision. Before Coding begins or resumes, the ADR MUST reach the project's implementation-authorizing state (for example, Accepted or Effective).

Code MUST NOT remain ahead of its controlling documentation. MUST NOT update unaffected files merely to make the change look comprehensive.

## Artifact Relationships

- Spec is the Source of Truth for what makes a Feature correct.
- A bound remote Issue tracks where the work is, who owns it, and what blocks it. With no bound remote, the identified Stage-local row owns Work Status. Any Issue or auxiliary checklist links the Spec and MUST NOT copy it or maintain a second writable status.
- `STAGE.md` shows where the project and all active members stand. It projects linked authorities, or supplies the local Work Status authority when explicitly identified, without copying requirements or Gate evidence.
- Task / Sub-Issue records concrete implementation steps when coordination needs them.
- PR/MR or the explicitly adopted no-PR Delivery Record explains what code changed, links the Issue and Spec, includes verification evidence, and reports documentation sync.
- ADR explains why a significant architecture or technology decision was made, identifies its named Architecture Decision Authority and approval evidence, and does not track implementation progress.

## Documentation Rules

- `README.md` is the quick entry, not the full design.
- `STAGE.md` is the current project and member coordination snapshot, not a Roadmap, Spec, Plan, or event log.
- `docs/PRODUCT.md` owns product intent and scope.
- `docs/ARCHITECTURE.md` owns system boundaries and collaboration.
- When present, `docs/DATABASE.md` and `docs/API.md` own project-level data and interface conventions; Feature details evolve with Specs.
- When present, `docs/FRONTEND.md`, `docs/UX.md`, `docs/UI.md` and `docs/DESIGN_SYSTEM.md` have distinct engineering, flow, interface and shared visual responsibilities.
- `docs/TESTING.md` owns project testing strategy; Feature Test Design owns Feature scenarios.
- Update only affected documents, but complete Documentation Sync before DONE.

## Repeated Pitfalls

- {{STABLE_REPEATED_PITFALL_AND_PREVENTION_RULE}}

Add an item only after it proves useful across tasks. MUST NOT store temporary debugging notes here.
