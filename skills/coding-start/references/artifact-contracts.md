# Artifact Responsibility Contracts

Documents exist to support decisions, collaboration, and verification, not to fill a directory. Every fact has one clear primary owner. Other documents provide only a short summary and link to the owning artifact; they MUST NOT copy entire sections.

## Core Relationships

```text
Spec = what makes a Feature correct
Issue = where the work stands
STAGE.md = where the project and its active members stand
PR / Delivery Record = what changed in the code
ADR = why a significant technology or architecture decision was made
```

An Issue MUST NOT copy its Spec. It links the Spec and records status, owner, blockers, and delivery coordination; acceptance rules remain owned by the Spec. `STAGE.md` is the project-wide current-state and coordination view. Before Feature work is bound, the Roadmap owns its initial status. After binding, Stage projects a remote Work Status authority; when no remote is bound, the identified `STAGE_LOCAL:<Activity ID>` row is the local authority. Temporary remote access failure does not transfer authority; only an explicit durable migration may unbind it. Stage links every other source and MUST NOT copy the Roadmap, Spec, Gate evidence, Plan, or delivery record.

## Language Contract

The canonical contract lives in [Language policy](language-policy.md): exact defaults `documentation_language = en` and `engineering_language = en`, the three governing scopes, override approval by a named `Maintainer Decision Authority`, the bidirectional mixed-document gate, and single-point persistence in root `AGENTS.md`. Generated artifacts MUST follow that resolved matrix.

- Every generated heading, table label, status explanation, and surrounding prose or engineering text MUST use its governing default unless that two-part override is recorded.
- An unavailable Start, Build, Test, lint, or similar command MUST be written exactly as `Not yet established`; commands MUST NOT be invented.

## Responsibility Table

| Artifact | Sole primary responsibility | Include | Exclude / boundary |
| --- | --- | --- | --- |
| `README.md` | Quick project entry | Summary, core capabilities, stack summary, brief current stage with a `STAGE.md` link, real Start/Build/Test entry points, documentation navigation | Live member/activity coordination, full product argument, detailed architecture, complete Specs; unavailable commands MUST be `Not yet established` |
| `docs/PRODUCT.md` | Why the project exists and what it does | Vision, Problem, Users, scenarios, MVP, Scope, Out of Scope, principles, success criteria, and challenged assumptions or rejected scope with durable value | Raw interviews, technical implementation plans, class/table/API detail |
| `docs/ARCHITECTURE.md` | Overall system structure and module collaboration | Architecture style, module responsibilities, boundaries, dependencies, data flow, sync/async direction, external services, deployment, and observability direction | Single-Feature Implementation Plans or complete package/class design |
| `docs/DATABASE.md` | Project-level data principles and current direction | Database choice, Source of Truth assignments, core entities and relationships, ID/time/naming, uniqueness, transactions, deletion, and cache relationship | Freezing all fields, SQL, indexes, or Feature-private schemas at once |
| `docs/API.md` | Global interface rules and current interface direction | Style, URL/versioning, method semantics, AuthN/AuthZ, responses, errors, pagination, time, IDs, and idempotency | Listing every undesigned business endpoint or replacing a Feature contract |
| `docs/FRONTEND.md` | Frontend engineering architecture | Framework, app structure, routing, client state, server state, API client, authentication, forms, component-responsibility principles, errors/loading, styling, testing, and build | User-flow detail, visual tokens, or per-component implementation |
| `docs/UX.md` | How users complete tasks | User Goals, primary flows, information architecture, Screen Map, navigation, interaction principles, feedback, non-happy paths, Accessibility, and Responsive UX | Frontend engineering structure, color/spacing tokens, or implementation tasks |
| `docs/UI.md` | Page structure and interface behavior rules | Layout, header/sidebar/navigation, content, form/list/table/detail, modal/drawer, feedback, and UI States | Design-token catalog, frontend state management, or API implementation |
| `docs/DESIGN_SYSTEM.md` | Global visual tokens and reusable component rules | Typography, Color, Spacing, Radius, Shadow, Breakpoints, foundational components, states, and extension rules | Feature-specific page design or page structure duplicated from UI.md |
| `docs/TESTING.md` | Project testing strategy and Definition of Done | Risk layers, Unit/Integration/API/Component/Interaction/E2E, Accessibility, justified performance/visual/concurrency checks, environments, data, and real commands | Complete Test Design for one Feature or invented commands |
| `AGENTS.md` | Durable AI coding protocol | Architecture and module constraints, Build/Test, stable conventions, Spec lifecycle, Feature workflow, UI/Design System rules, Design Change, language policy, documentation sync, and durable pitfalls | Current task status, debug logs, temporary workarounds, Issue progress, or unconfirmed inference |
| `STAGE.md` | Current project and multi-member coordination snapshot | Project lifecycle/phase, milestone state, active human/Agent activities, Skill stages, projected Gates, blockers/conflicts, handoffs, resume points, authority links, and recent completions | Requirements, Feature ordering, Gate evidence manifests, implementation tasks, durable rules, command logs, chat history, or full delivery history |
| `specs/ROADMAP.md` | Feature Map, order, dependencies, and lifecycle status | ID, Name, Goal, Business Value, Priority, Dependencies, allowed Status, Summary; selection rationale for every confirmed `NEXT` on success; zero `NEXT` entries, plus blocker, owner, unblock condition, and resume stage for `BLOCKED_HANDOFF` | Complete Feature correctness, implementation tasks, or PR change record |
| Feature `spec.md` | Source of Truth for what makes the Feature correct | Goal, User Story, Scope, Out of Scope, Flow, Rules, Entities, Major API, UI Impact, Dependencies, Acceptance Criteria, and Open Questions | Work progress, owner coordination, code diff, or global durable rules; DRAFT MUST NOT include implementation minutiae |
| Issue | Feature work status and coordination | Spec link, current status, owner, blocker, necessary task links, and acceptance/verification links | Copying the Spec, redefining acceptance, or durable architecture rules |
| Task / Sub-Issue | Concrete implementation step | Actionable step, dependencies, completion condition, and required verification | Replacing a Spec or creating an Issue for every tiny action |
| PR / Delivery Record | Code changes and verification results | Change summary, motivation, linked Issue/Spec, test evidence, affected docs, and risks; no-PR delivery requires an explicitly adopted equivalent record | Restating full requirements, hiding design changes, or replacing an ADR |
| ADR | Rationale for a significant technology or architecture decision | Context, Decision, Alternatives, Reasoning, Consequences, Status, named Architecture Decision Authority, approval source/time/scope, and input revision | Ordinary functions, DTOs, button padding, temporary choices, or daily progress |

## Conditional Generation Matrix

| Artifact | Generate when |
| --- | --- |
| `README.md` | Usually; it is the project entry point |
| `PRODUCT.md` | The project has a product goal and scope; usually applicable |
| `ARCHITECTURE.md` | Software requires module or runtime boundaries; usually applicable |
| `DATABASE.md` | Persistent data, external data ownership, or an important data strategy exists |
| `API.md` | External/internal API, RPC, GraphQL, events, or another system communication contract exists |
| `FRONTEND.md` | `UI: YES` and a frontend application exists |
| `UX.md` | `UI: YES` |
| `UI.md` | `UI: YES` and shared page/interface rules are needed |
| `DESIGN_SYSTEM.md` | `UI: YES` and multiple interfaces need shared visual/component rules; a tiny single-interface project MAY keep minimal direction in UI.md first |
| `TESTING.md` | Software behavior requires verification; usually applicable |
| `AGENTS.md` | `coding-start` MUST create or maintain it |
| `STAGE.md` | `coding-start` MUST create or incrementally adopt it after valid entry and explicit local-write authorization; before `MACRO DESIGN READY` it contains operational state only |
| `ROADMAP.md` and DRAFT Specs | `coding-start` MUST create them |
| ADR index / ADR | The project adopts ADRs or a significant record-worthy decision exists; the ADR reaches the project's implementation-authorizing state (for example, Accepted or Effective) before Coding, not after implementation; MUST NOT manufacture an ADR when none exists |
| Issue / PR / Delivery Record | `coding-start` does not create these by default; after `feature-dev`, follow the explicitly adopted tracking/delivery workflow |

A no-UI project explicitly skips `FRONTEND.md`, `UX.md`, `UI.md`, and `DESIGN_SYSTEM.md`. MUST NOT create empty files merely to record inapplicability.

## Facts and Recommendations

Unconfirmed content in formal documents MUST remain visible:

```markdown
- [CONFIRMED] {{DECISION_OR_FACT}}
- [RECOMMENDED] {{PROPOSAL}} - Reason: {{WHY}}; Revisit when: {{TRIGGER}}
- [UNKNOWN, NON_BLOCKING] {{QUESTION}} - Resolve by: {{MILESTONE}}
```

A blocking `UNKNOWN` MUST NOT cross `MACRO DESIGN READY`. Evidence or an informed human confirms facts; a high-impact recommendation becomes `CONFIRMED` only after Decision Authority approval.

The Challenge Record remains Discovery working context and is not a standalone project document. Write only Decision Authority-confirmed conclusions that affect durable product or architecture judgment into the appropriate canonical artifact. Preserve the assumption, counterexample or tradeoff, `RETAINED/REVISED/REJECTED` outcome, and revisit trigger; MUST NOT copy round-by-round dialogue.

## Abstraction Level

Project documents record stable direction:

- Business and module boundaries.
- Data ownership, communication style, and consistency principles.
- Project-level UI/UX, language, and testing rules.
- Technology constraints and reasons for significant choices.

Feature behavior is progressively established in its Spec. Concrete implementation belongs in the Implementation Plan. Initialization MUST NOT prematurely freeze DTOs, table fields, classes, components, CSS values, or internal functions in project documents.

## Documentation Sync

Analyze impact before changing design:

- L1: update the current Spec and necessary API/Database/UI/Test Design. Any change to approved Scope, Acceptance Criteria, an external contract, observable behavior, or user-visible product copy requires explicit approval by a named Decision Authority empowered for that Feature.
- L2: update related Specs, Roadmap, and affected shared documents only after approval by a named Decision Authority empowered for the cross-Feature or shared-contract scope.
- L3: obtain approval from a named Architecture Decision Authority; update affected Architecture/Database/API/Frontend/UX/UI/Design System/AGENTS/Tests; and create or update an ADR for every newly confirmed L3 decision. The ADR MUST record approval source, time, scope, and input revision. Before Coding begins or resumes, it MUST reach the project's implementation-authorizing state (for example, Accepted or Effective).

Update only affected documents, but Code MUST NOT remain ahead of Docs. A PR MUST state what was synchronized or why no synchronization was needed. Documentation Sync MUST also preserve the recorded Documentation, Engineering, and Product Content languages.
