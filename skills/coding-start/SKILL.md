---
name: coding-start
description: "Use ONLY when the user explicitly asks to start or initialize a Greenfield project. Runs Discovery, macro design, project documentation, a Feature Map, and DRAFT Specs. Also use for a Greenfield single-Feature request that lacks a macro baseline. MUST NOT be used for Brownfield work, a single Feature with an existing baseline, ordinary ideation or evaluation, or as write authorization from design confirmation."
---

# Coding Start

> Part of **Foundry**, an AI-native, spec-driven development suite. Role: Greenfield initialization (0 to 1). Siblings: `project-onboard`, `feature-dev`.

Move an unimplemented project idea to a state that can be handed to Feature development. Clarify direction, boundaries, and durable rules before producing project-level documents and a shallow Feature map. By default, this Skill MUST NOT write business code or create full application scaffolding.

## Entry Decision

Before starting, inspect only enough of the target directory to classify the request and determine whether the user wants initialization or read-only ideation/evaluation. Read an existing root `STAGE.md` as the project coordination snapshot, but verify every linked authority before relying on a projected status.

Enter only when:

- The user explicitly asks to start or initialize a Greenfield project from scratch.
- The target is empty or contains only non-implementation material such as Git metadata, idea notes, or a license.
- The request states a project-level goal, even in one sentence.
- A request is phrased as one Feature but the Greenfield project has no credible macro baseline. Establish the minimal project baseline here first.

MUST NOT enter when:

- The directory contains material business code, a runnable system, migrations, existing Features, or historical behavior that must be understood. `STOP` and recommend `project-onboard`.
- The user asks to build, change, fix, or refine one Feature and a credible macro baseline already exists. `STOP` and recommend `feature-dev`.
- The user only wants discussion, brainstorming, or evaluation, or has not explicitly authorized writes to the target. Interview or answer if useful, but MUST stop before formal artifact generation.

If Greenfield versus Brownfield is unclear, ask one entry-classification question; MUST NOT guess or overwrite existing content in the name of initialization.

A credible macro baseline exists when the repository already documents product scope, system boundaries, the test method, the current Roadmap, trustworthy Brownfield AS-IS where applicable, and a valid persisted Language Policy.

Before the first file write, list every path to be created or updated, including root `STAGE.md`, and obtain explicit local-write authorization. Approval of the macro design is not file-write authorization. Without write authorization, report Discovery and Gate results, state that initialization is incomplete, and `STOP`.

## Non-Negotiable Boundaries

- MUST NOT create business implementations, business APIs, database tables, domain classes, pages, or components by default.
- MUST NOT generate full application scaffolding by default.
- Only after `MACRO DESIGN READY`, and only when explicitly requested, MAY create specifically authorized minimal non-business scaffolding such as confirmed package management, formatting, a test entry point, or an empty application entry point.
- Even when minimal scaffolding is authorized, it MUST NOT include business logic, sample business entities, placeholder business endpoints, a complete schema, or a suite of UI pages.
- Macro design fixes direction, boundaries, rules, and constraints. It MUST NOT freeze DTOs, fields, classes, components, internal functions, message topics, cache keys, or pixel details.
- MUST NOT mature a `DRAFT` Spec, run `SPEC READY`, `UI READY`, or `TEST DESIGN READY`, or mark a Feature `READY`.
- MUST NOT create Feature implementation Issues or PRs; those belong to `feature-dev`. If the user separately requests project tracking, an Issue still MUST NOT duplicate its Spec.
- Local-write authorization does not authorize `git commit/push`, remote Issues/PRs, merge, or release. Each Git or remote side effect requires separate explicit authorization.

## Language Policy

All language rules are defined once in [Language policy](references/language-policy.md); read it before the first language-dimension recording in Discovery, before writing or updating any formal artifact, and before persisting the policy into root `AGENTS.md`. Summary:

```text
documentation_language = en
engineering_language = en
```

- Product Content Language follows product requirements; record actual BCP-47 value(s), `UNKNOWN - <resolution action>`, or `N/A - no product-content surface` — never a silent default.
- Every override requires an explicit request plus approval by a named `Maintainer Decision Authority` empowered for project language policy; conversation language never changes any dimension.
- Before handoff, persist every effective value exactly once in root `AGENTS.md` so later `feature-dev` work can resolve every applicable dimension from the root-to-target `AGENTS.md` chain.

## Resource Loading

Read every supporting resource directly from this file; MUST NOT follow secondary resource chains.

| Resource | When to read |
| --- | --- |
| [Discovery interview guide](references/discovery.md) | After entry is valid and before the first questions; reread when changing interview intensity or running the Challenge Pass. |
| [Language policy](references/language-policy.md) | Before the first language-dimension recording in Discovery, before writing or updating any formal artifact, and before persisting the policy into root `AGENTS.md`. |
| [Lifecycle and gates](references/lifecycle-and-gates.md) | Before Challenge Pass or Macro Readiness; recheck before choosing `NEXT` and during final Self Review. |
| [Project Stage template](assets/stage.template.md) | After valid entry and before creating or adopting root `STAGE.md`; reread before changing tracking mode or status authority. |
| [Artifact responsibility contracts](references/artifact-contracts.md) | After `MACRO DESIGN READY` and before writing any formal artifact. |
| [Core documentation templates](assets/core-docs.template.md) | After the Gate; read and trim only applicable core documents. |
| [UI documentation templates](assets/ui-docs.template.md) | Only when `UI: YES` and after the Gate. MUST NOT read or generate them for a no-UI project. |
| [AGENTS.md template](assets/agents.template.md) | After the Gate, when creating or maintaining root `AGENTS.md`. |
| [Roadmap and DRAFT Spec templates](assets/roadmap-and-draft-spec.template.md) | Before generating the Feature Map, `specs/ROADMAP.md`, and DRAFT Specs. |
| [OpenAI interface metadata](agents/openai.yaml) | Read by the host for Skill discovery and display; not project context. |

## State Machine

Advance only in this order:

```text
ENTRY_CHECK
  -> PROJECT_DISCOVERY
  -> MACRO_SYNTHESIS
  -> CHALLENGE_PASS
       -> NEEDS_CLARIFICATION -> PROJECT_DISCOVERY
  -> MACRO_READINESS
       -> NEEDS_CLARIFICATION -> PROJECT_DISCOVERY
       -> MACRO DESIGN READY
  -> ARTIFACT_GENERATION
  -> FEATURE_MAPPING
  -> DRAFT_SPEC_GENERATION
  -> NEXT_SELECTION
       -> NEEDS_CLARIFICATION -> PROJECT_DISCOVERY
       -> BLOCKED_HANDOFF
  -> SELF_REVIEW
  -> STOP
```

Formal project documents MUST NOT be generated before `MACRO DESIGN READY`. Interview summaries and candidate recommendations are not formal artifacts.

Root `STAGE.md` is the sole operational exception. After valid entry and explicit local-write authorization, create or incrementally adopt it from the [Project Stage template](assets/stage.template.md) so interrupted Discovery can resume. Before the Gate it may use `Tracking Mode: TBD`, Work Status `N/A`, and `N/A - project workflow activity`; besides the template's Snapshot Revision, Parent Snapshot, and Write Coordination fields required by the write guard, record only the current Skill stage, member/activity, explicit blockers, next checkpoint, repository ref, and known authority links. It MUST NOT persist unconfirmed product or architecture conclusions or imply that Macro Readiness passed. Update it only on assignment, meaningful stage transitions, block/resume, handoff, and completion. Serialize writes through a repository lock or designated canonical writer; otherwise compare revision and SHA-256 immediately before writing and abort/reconcile on change; if neither serialization nor hash comparison is available, `STOP` before writing. Allocate `A-xxx` under that guard, reread the latest file, and preserve every unrelated member row.

An unresolved Stage binding, freshness, revision/hash, activity identity, duplicate assignment, or authority conflict MUST stop the affected transition, handoff, or completion. Unrelated read-only Discovery may continue; MUST NOT silently select a value or overwrite another member.

## Fact Status Contract

Maintain a concise Decision Ledger from the first round. Every material item uses exactly one status:

- `CONFIRMED`: evidence or an informed human confirms a fact; the appropriate Decision Authority approves a high-impact decision.
- `RECOMMENDED`: a proposed default with rationale, tradeoffs, and applicability, not yet properly approved. It MUST NOT be presented as settled fact.
- `UNKNOWN`: evidence or an answer is missing. State whether it blocks and how it will be resolved.

Update the Ledger after each answer before choosing the next questions. Surface conflicts and request confirmation; MUST NOT silently choose one answer.

`Decision Authority` MUST be a named human empowered to approve the relevant Scope, Roadmap, or architecture decision. The requester does not automatically hold that authority. Record name/role, confirmation source, time, and scope; the Agent MUST NOT self-approve.

Also record `Discovery Intensity: STANDARD | DEEP`. This controls interaction depth only and does not change fact statuses.

## Interview Protocol

1. Default to `STANDARD`: ask one group of 2-5 related, high-impact questions per round.
2. Upgrade the current branch to `DEEP` when requested, or when ambiguity, conflict, high-risk business behavior, irreversible data, concurrency, a complex state machine, or unsupported technical complexity appears.
3. In `DEEP`, ask exactly one decision question and wait. When a safe recommendation exists, lead with it and state rationale, cost, and alternatives.
4. Investigate facts available from the environment or supplied material first. Product and high-impact decisions require Decision Authority confirmation; the Agent MUST NOT self-approve.
5. A low-risk unknown MAY become `RECOMMENDED` with a revisit trigger. A high-impact business rule or architecture choice MUST NOT be silently defaulted.
6. MUST NOT repeat answered questions, add unrelated topics before the current question is resolved, or prematurely decide fields, DTOs, classes, components, SQL, CSS, or internal functions.
7. If a Decision Authority cannot be reached for a high-impact item, MUST NOT loop indefinitely: report the blocker, state that initialization is incomplete, and `STOP`.

Use [Discovery interview guide](references/discovery.md) for topics, risk triggers, and examples. Select by risk rather than mechanically running a checklist, and MUST NOT choose complex architecture merely to appear professional.

## UI Branch

Record `UI: YES | NO | UNKNOWN` early, with a fact status.

### `UI: YES`

Clarify target platforms/devices, main flow and navigation, applicable UI states, frontend architecture, Design System, responsive behavior, accessibility, and only genuinely required localization or theme constraints.

Follow `User Goal -> User Flow -> Information Architecture -> Screen Responsibility -> Interaction -> State -> Visual System`. MUST NOT begin with color, radius, or shadow, or freeze every screen and component.

### `UI: NO`

Record why it is skipped. MUST NOT perform UX/UI Discovery or create `FRONTEND.md`, `UX.md`, `UI.md`, or `DESIGN_SYSTEM.md`.

### `UI: UNKNOWN`

This is blocking. Resolve it next; MUST NOT bypass the branch to enter the Gate.

## Challenge Pass

After Macro Synthesis, run one mandatory `CHALLENGE_PASS` using [Discovery interview guide](references/discovery.md). Challenge, in order: whether the problem is real; what can still be removed from the MVP; counterexamples and failure paths in the core flow; Decision Authority and Source of Truth; success and failure criteria; and whether technical complexity has business evidence.

Record each outcome as `RETAINED`, `REVISED`, or `REJECTED`, still using `CONFIRMED/RECOMMENDED/UNKNOWN`. New blocking unknowns or contradictions produce `NEEDS_CLARIFICATION` and return to Discovery. The Challenge MUST NOT introduce Feature-level implementation detail. Enter Macro Readiness only after the Challenge is complete and the Decision Authority explicitly confirms the revised macro synthesis; silence is not confirmation.

## Macro Readiness

Present a macro synthesis, complete the Challenge Pass, then evaluate Readiness. Inputs MUST list `CONFIRMED`, `RECOMMENDED`, remaining `UNKNOWN`, challenged assumptions, and explicit exclusions.

Required checks:

- Project Goal, User, MVP, Phase 1 Scope, Out of Scope, and Success Criteria.
- Main Flow, Core Entities/Concepts, Module Boundaries, and Dependencies.
- Critical Business Rules and Important State Machines.
- Technology Constraints or evidence-based recommendations.
- Data Source of Truth, Data Strategy, and API Strategy.
- Testing Strategy and risk-driven Non-functional Requirements.
- `documentation_language`, `engineering_language`, and Product Content Language, with every override explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy.
- The target documents' existing formal-prose languages, any mixed-document conflict, and the root `AGENTS.md` persistence destination for every effective global or scoped value.
- Challenge conclusions and explicit Decision Authority confirmation of the revised synthesis.

When `UI: YES`, also check:

- Target Platform, Primary Device, Primary User Flow, Page/Screen Map, and Navigation / Information Architecture.
- UX Principles including major non-happy-path states, Frontend Architecture, and Design System Direction.
- Responsive and Accessibility Requirements.

Mark every item with a fact status. Any `UNKNOWN` that can alter product correctness, boundaries, the core flow, Source of Truth, security/compliance, artifact language, or the primary UI flow produces `NEEDS_CLARIFICATION` and returns to the interview. Use 2-5 questions in `STANDARD` and one in `DEEP`.

Only after all high-impact unknowns are resolved and low-risk open items are visibly `RECOMMENDED` or non-blocking `UNKNOWN` with validation timing, output the sole passing Gate:

```text
MACRO DESIGN READY
```

## Formal Artifact Generation

After the Gate, read [Artifact responsibility contracts](references/artifact-contracts.md). Use its responsibility table and conditional matrix to select files. Re-list actual paths, verify local-write authorization, read only applicable templates, and trim them. Replace every `{{...}}`, delete inapplicable sections, and MUST NOT create empty files, full-page `N/A`, or invented commands. An absent command MUST be written exactly as `Not yet established`.

All formal artifacts, including `STAGE.md` prose, MUST follow the recorded language dimensions and default to English. They contain macro state, constraints, and explicit fact statuses only. Feature-level schemas, business APIs, screen details, and implementation structures remain for refinement. Apply Design Change, Documentation Sync, and ADR rules from the contract, updating only affected artifacts. Keep README's stage summary brief and link to `STAGE.md` for the live multi-member snapshot.

## Feature Map and DRAFT Specs

Use [Roadmap and DRAFT Spec templates](assets/roadmap-and-draft-spec.template.md):

1. Define Features as vertical slices of deliverable business value. They MUST NOT be technical layers such as "create database" or "write controller."
2. Give every Feature a stable ID and record Goal, Business Value, Priority, Dependencies, Status, and Summary.
3. Roadmap status MUST be one of `DRAFT/NEXT/READY/IN_PROGRESS/REVIEW/DONE/BLOCKED`.
4. Analyze dependencies, risk, and learning value, and identify the smallest first Feature that validates end-to-end direction.
5. Generate a shallow DRAFT Spec for every Feature, recording `Roadmap Status: DRAFT` in each Spec header.
6. DRAFT Specs MAY include initial Acceptance Criteria and UI impact but MUST retain Open Questions, MUST NOT mature to `READY`, and MUST NOT freeze DTOs, fields, classes, components, or pixel design.
7. In `NEXT_SELECTION`, obtain Roadmap Decision Authority confirmation for the recommended Feature, then mark exactly one authority-confirmed Feature `NEXT` in the Roadmap and update that Feature's Spec header. Other initial Features are `DRAFT`; use `BLOCKED` only for a concrete external blocker with an unblock condition. A `NEXT` Roadmap status does not change Spec maturity: every Spec remains `DRAFT`.
8. If no Feature can safely become `NEXT`, return to the interview via `NEEDS_CLARIFICATION`. If only a currently unresolvable external blocker remains, enter `BLOCKED_HANDOFF`: allow zero `NEXT` entries; record blocker, Decision Authority/owner, unblock condition, and how to resume from `NEXT_SELECTION`; then enter `SELF_REVIEW` and `STOP` with initialization incomplete. `INITIALIZATION INCOMPLETE` is the controlled handoff token for this path. MUST NOT choose arbitrarily to finish the flow.
9. Reconcile `STAGE.md` and the README handoff section from the confirmed Roadmap result: project phase, the current activity, Work Status authority, blockers, handoff target, and exact resume stage; replace the README's pending handoff line with the matching Confirmed NEXT or BLOCKED_HANDOFF branch. The Roadmap still owns ordering and dependencies; `STAGE.md` MUST NOT copy the Feature map.

## Minimal Non-Business Scaffolding Exception

Optional step between `NEXT_SELECTION` and `SELF_REVIEW`; run only when all conditions hold:

- `MACRO DESIGN READY` has passed.
- The Decision Authority confirmed stack and scope, and the user separately authorized scaffold writes.
- The scaffold contains no business code, domain model, business schema, business page, or business endpoint.
- Run the smallest applicable verification and synchronize real commands into README, TESTING, and AGENTS.
- Report failures truthfully; MUST NOT conceal them with extra business implementation.

## Self Review and Stop

Before finishing, use [Lifecycle and gates](references/lifecycle-and-gates.md) and verify at least:

- Entry was Greenfield, not Brownfield or an existing-baseline single Feature.
- No formal documents were generated before `MACRO DESIGN READY`.
- UI projects received macro UX/UI Discovery; no-UI projects have no UI documents.
- Artifact responsibilities are distinct; Spec/Issue/PR/ADR relationships are clear.
- Formal documents contain only `CONFIRMED`, explicit `RECOMMENDED`, and visible non-blocking `UNKNOWN` content.
- A named, empowered Decision Authority confirmed high-impact decisions and the sole `NEXT`.
- Design confirmation, local writes, Git, and remote side effects each had independent authorization.
- Discovery intensity matched risk; `DEEP` remained one question per round without repeated grilling.
- Challenge Pass covered assumptions, counterexamples, MVP subtraction, Authority/Source of Truth, success criteria, and complexity.
- No Big Design Up Front or frozen Feature-level detail was introduced.
- The success path has exactly one confirmed `NEXT`; `BLOCKED_HANDOFF` has zero `NEXT` entries, plus a blocker, owner, unblock condition, and resume stage. Neither path marks a Feature `READY`.
- Every Spec remains `DRAFT`, with dependencies and Open Questions visible.
- AGENTS contains durable rules, the full Feature workflow, applicable UI rules, L1/L2/L3 Design Change Policy, and the durable Language Policy, including every effective language value and exact scope.
- `STAGE.md` exists when writes were authorized, contains the current project and member snapshot, links rather than duplicates every authority, and preserves unrelated concurrent activity.
- The canonical language matrix was enforced with `documentation_language = en` and `engineering_language = en`; every override was explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy; Product Content Language exceptions did not alter surrounding artifact or engineering text.
- No formal artifact write bypassed the bidirectional mixed-document gate, and no scoped override remained only in Discovery context.
- No business code was written; any explicitly authorized minimal scaffold has accurate scope and verification.
- Generated relative paths and navigation work; no empty or meaningless placeholder artifact remains.

Fix every discovered issue before reporting. The final response MUST list:

- The `MACRO DESIGN READY` result and key evidence.
- Challenge assumptions retained, revised, or rejected.
- Files created/updated and conditionally omitted files with reasons.
- The `STAGE.md` snapshot revision, tracking mode, current activity, authority, and resume point.
- On success, the sole `NEXT`, rationale, dependencies, and refinement questions; when blocked, zero `NEXT` entries and the unblock condition.
- `RECOMMENDED` and non-blocking `UNKNOWN` items.
- Whether authorized minimal non-business scaffolding was created and its verification result.
- The next step: use `feature-dev` to refine the Feature. MUST NOT invoke it or start implementation automatically.

End with:

```text
STOP
```
