# coding-start — Generated Artifacts

After valid entry and explicit local-write authorization, `coding-start` creates or incrementally adopts root `STAGE.md` as an operational checkpoint so Discovery can resume across sessions. It contains no unconfirmed design and does not bypass the Gate. After `MACRO DESIGN READY`, the Skill generates the remaining project documentation system. Files are created **on demand** — never empty files, never full-page `N/A`, never invented commands (an absent command is written exactly as `Not yet established`).

## The documentation tree

<DocTree />

- Base projects always get `STAGE.md`, `README.md`, `AGENTS.md`, `specs/ROADMAP.md`, and the applicable `docs/*`.
- `FRONTEND.md`, `UX.md`, `UI.md`, and `DESIGN_SYSTEM.md` are created **only** when `UI: YES`.
- A DRAFT `spec.md` is generated for **every** Feature under `specs/<feature-id>-<slug>/`.

## Document responsibilities

| Document | Sole responsibility | Excluded |
|---|---|---|
| `README.md` | Quick entry: summary, capabilities, stack, brief stage + Stage link, real Start/Build/Test, navigation | Live member coordination, full product argument, detailed architecture, complete Specs |
| `STAGE.md` | Current project phase, active members/Agents, blockers, handoffs, resume points, authority links | Requirements, Feature ordering, Gate evidence, Tasks, durable rules, command logs |
| `docs/PRODUCT.md` | Why the project exists: vision, problem, users, scenarios, MVP, scope, principles, success criteria, challenged assumptions | Implementation plans, class/table/API detail |
| `docs/ARCHITECTURE.md` | Overall structure and module collaboration | Single-Feature Plans, complete package/class design |
| `docs/DATABASE.md` | Data principles and current direction (schema evolves with Features) | Frozen fields, SQL, indexes, Feature-private schemas |
| `docs/API.md` | Global interface rules and current direction | Every undesigned endpoint, Feature contracts |
| `docs/FRONTEND.md` | Frontend engineering architecture (not visual design) | Visual tokens, per-component implementation |
| `docs/UX.md` | How users complete tasks: goals, flows, IA, navigation, interaction principles | Engineering structure, color/spacing tokens |
| `docs/UI.md` | Page structure and interface behavior rules | Design-token catalog, frontend state management |
| `docs/DESIGN_SYSTEM.md` | Global visual tokens and reusable component rules | Feature-specific page design |
| `docs/TESTING.md` | Project testing strategy and Definition of Done | Complete Test Design for one Feature |
| `docs/adr/` | Significant architecture/technology decisions | Routine implementation details |
| `AGENTS.md` | Durable AI coding protocol | Task status, debug logs, workarounds, guesses |
| `specs/ROADMAP.md` | Feature Map, dependencies, ordering | Implementation detail |
| `specs/Fxxx-*/spec.md` | Shallow DRAFT Spec per Feature | Deep-finalized requirements |

Every material claim carries `CONFIRMED` / `RECOMMENDED` / `UNKNOWN` inline. Documents contain macro state, constraints, and explicit fact statuses only — Feature-level schemas, APIs, and implementation structures wait for refinement.

## AGENTS.md content

Only durable cross-task rules: Architecture Constraints, Module Rules, Build/Test, Coding Conventions, Spec Lifecycle, the **complete Feature workflow**, UI/UX long-term rules (12), Design System rules, Design Change Policy (L1/L2/L3), Documentation Rules, Language Policy, and Repeated Pitfalls. It never stores task progress, debug logs, one-off workarounds, temporary Issue state, or AI guesses.

## ROADMAP & DRAFT Specs

Each Feature in `specs/ROADMAP.md` records: Feature ID, Name, Goal, Business Value, Priority, Dependencies, Status, and Summary — with status among `DRAFT / NEXT / READY / IN_PROGRESS / REVIEW / DONE / BLOCKED`. Features are **vertical slices of business value**, never technical layers like "create database".

Each DRAFT Spec records: Goal, Business Value, User Story, Scope, Out of Scope, Main Flow, Core Business Rules, Main Entities, Major API impact, UI Impact, Dependencies, initial Acceptance Criteria, and Open Questions. It stays intentionally shallow — no DTOs, fields, classes, components, or pixel design.

## NEXT selection

- Analyze dependencies, risk, and learning value; recommend the smallest Feature that validates the end-to-end direction.
- The `Roadmap Decision Authority` confirms; exactly one confirmed Feature becomes `NEXT`.
- If no Feature can safely be `NEXT`, return to the interview. If only an unresolvable external blocker remains, enter `BLOCKED_HANDOFF`: zero `NEXT`, with blocker, owner, unblock condition, and resume stage recorded.
- Reconcile `STAGE.md` from the Roadmap result and record the `feature-dev` handoff or exact blocked resume point without copying the Feature map.

Either way, every Spec remains `DRAFT`, and the skill ends with `STOP`.
