# Spec and UI Gates

Read this file before Spec Refinement; continue through the UI sections when `UI Impact: YES`. Prefer the project's existing format. This file defines semantics and Gates, not mandatory paths.

During these branches, root `STAGE.md` records only the exact `SPEC_REFINEMENT` or `UI_REFINEMENT` activity stage and a link to each Gate's authoritative record/revision after that record exists. Stage never contains the checklist or participates in the Gate manifest.

## 1. Facts and Lifecycle

### Greenfield

```text
DRAFT -> selected Feature -> clarification -> refinement -> SPEC READY
```

Refine only the current Feature. Other Specs remain `DRAFT`; MUST NOT freeze the entire Roadmap early for this implementation. A DRAFT Spec inherited from `coding-start` may carry `RECOMMENDED` proposals and `UNKNOWN` items; refinement MUST resolve each through evidence or explicit Decision Authority confirmation before `SPEC READY`.

### Brownfield

```text
AS_IS_DRAFT -> evidence collection -> RECONSTRUCTED -> explicit TO-BE -> SPEC READY
```

- `AS_IS_DRAFT`: current behavior is incomplete and includes unverified inferences.
- `RECONSTRUCTED`: current behavior is supported by code, runtime results, tests, data, or confirmed knowledge.
- AS-IS MUST be preserved; TO-BE describes this change separately.
- Use only the onboarding evidence labels: `OBSERVED`, `DOCUMENTED`, `CONFIRMED`, `INFERRED`, `NEEDS_CONFIRMATION`, `CONFLICT`, `UNKNOWN`, and `MISSING`. `INFERRED` MUST NOT be presented as confirmed fact, and a `CONFIRMED` AS-IS does not automatically become the future standard.
- Existing Code, Tests, Docs, and UI are evidence; they do not automatically define correct requirements or the Design System.

## 2. The Spec Defines Correctness

The Spec MUST cover, as relevant:

- Identity: Feature ID, name, Owner, Issue, and dependencies.
- Goal: user or business outcome, not a code action.
- Scope / Out of Scope: boundaries of this work.
- Actors / Preconditions: roles, permissions, and prerequisite state.
- Main Flow / Alternative Flows: success, cancel, back, retry, and failure.
- Business Rules / Invariants: rules that MUST always hold.
- State Transitions: valid states, triggers, and invalid transitions.
- Data Changes: semantics, ownership, constraints, retention, and migration impact; MUST NOT freeze fields early without need.
- API Behavior: externally observable contract, error semantics, and compatibility; MUST NOT put internal class structure into requirements.
- Error Cases: inputs, dependencies, partial failures, and recovery.
- Idempotency / Concurrency / Transaction / Consistency: make explicit according to risk.
- Security / Privacy / Authorization: make explicit by role and data boundary.
- Non-functional: performance, caching, messaging, retry, timeout, observability, migration, and backward compatibility as needed.
- Acceptance Criteria: stable IDs such as `AC-001`, each independently verifiable.
- Open Questions: question, severity, owner, decision deadline, and resolution.

The Implementation Plan is not part of the Spec. The Spec MUST NOT contain specific private methods, class decomposition, or internal details serving only one implementation unless they are confirmed constraints.

## 3. Open Question Severity

- `Critical`: can change Scope, Acceptance, business rules, security, data/API contract, core UX, migration, or test feasibility. The Gate MUST NOT pass while the question is `OPEN` or `DEFERRED`.
- `Non-critical`: does not affect correctness and permits a reversible implementation choice within current constraints. Record the assumption and owner; MUST NOT ignore it silently.

Product behavior that repository evidence cannot determine MUST be confirmed by a named human Decision Authority. AI MUST NOT infer the missing behavior, and the executing Agent or assignee MUST NOT self-approve it.

Open Question Status is `OPEN | RESOLVED | DEFERRED`:

- `OPEN`: unresolved and awaiting evidence or a decision.
- `RESOLVED`: the resolution and supporting evidence are recorded.
- `DEFERRED`: intentionally postponed and still unresolved for the current Gate. A Critical question MUST NOT be deferred through its Gate.

## 4. `SPEC READY` Checklist

Every item MUST have an evidence row. Record `SPEC READY Status: PASS` only when all 11 rows are `YES` and the record includes independent artifact revisions for the Spec, affected Dependency Specs, and relevant ADR/API/Architecture/AGENTS, plus validation time and Decision Authority approval source and scope. A requirement-specific N/A reason may support `YES` only where the checklist item explicitly permits it; the row itself MUST NOT be bypassed as `N/A`:

- [ ] Goal, Scope, and Out of Scope are clear and cover only the current work item.
- [ ] Actors, Preconditions, and Main/Alternative Flows are sufficient to determine behavior.
- [ ] Business Rules, Invariants, and State Transitions are explicit.
- [ ] Externally observable Data and API behavior and compatibility impact were assessed.
- [ ] Error, security, permission, and privacy requirements were assessed.
- [ ] Idempotency, Concurrency, Transaction, and Consistency are defined or have explicit N/A reasons.
- [ ] Dependencies, migration, observability, and non-functional risks were assessed.
- [ ] Every core Acceptance has a unique, verifiable `AC-*`.
- [ ] Brownfield preserves evidence-backed AS-IS and has explicit TO-BE; the AS-IS surface touched by Scope is `RECONSTRUCTED`, and evidence shows other unknowns do not affect current correctness.
- [ ] Material Code/Docs/Tests/UI conflicts are resolved or included in this TO-BE.
- [ ] No Critical Open Question is `OPEN` or `DEFERRED`.

On failure, record `SPEC READY Status: NOT_READY`; record `STALE` when an older revision passed but current inputs changed. Roadmap `READY` MUST NOT substitute for this Gate, and work MUST NOT proceed to UI/Test/Plan.

## 5. UI Feature Detection

Answer these questions after `SPEC READY`. Any YES normally means `UI Impact: YES`:

- Does it change the user's task path, entry, or exit?
- Does it add or change a page, component responsibility, navigation, form, or visible state?
- Does it change Loading, Empty, Error, Success, permission, or validation feedback?
- Does it change responsive behavior, accessibility, product copy, visual tokens, or Design System components?
- Does a backend change alter frontend error mapping, retry, pagination, optimistic updates, or rollback?

If all are NO, record `UI READY: SKIPPED (N/A)` with the deciding Spec revision, evidence for all five detection answers, validation time, named Decision Authority, approval source, and approval scope. Reassess after a Spec revision change. MUST NOT create an empty UX/UI document.

## 6. UX/UI Refinement

### User Flow

Define the User Goal, Entry Point, steps, screen changes, success exit, Cancel, Back, Retry, Permission Denied, and failure recovery.

### Page / Screen Responsibility

For each affected page or region, define what it presents, what users may do, where its state comes from, and when it navigates. A component MUST NOT own networking, business logic, forms, and global state all at once.

### UI State Matrix

Select states based on actual product behavior; MUST NOT fill them mechanically:

| State | Trigger | Visible UI | Allowed Action | Data/API | Recovery/Next |
| --- | --- | --- | --- | --- | --- |
| Loading | Entry or refresh | Skeleton/progress | Wait/cancel | Request in flight | Success or error |
| Empty | Success with no data | Empty state | Create/refresh | Empty result | Next task |
| Error | Request or business failure | Understandable error | Retry/back | Error code | Recovery path |
| Success | Operation succeeds | Confirmation and result | Continue | Submitted | Explicit exit |

Also assess whether Initial, Loaded, Submitting, Disabled, Unauthorized, Forbidden, Offline, and Partial Failure apply.

### Contract and Error Mapping

Define Request, Response, Validation, Authentication, Pagination, Loading, Retry, Optimistic Update, and Rollback. Every user-visible backend error MUST have frontend behavior:

```text
backend code/status -> user-visible message/state -> enabled action -> recovery
```

Errors MUST NOT all map to a vague Toast, and sensitive internal information MUST NOT be shown.

### Permission and Validation

- Define who can see and act, the Unauthorized/Forbidden distinction, and recovery paths.
- Define client and server validation, trigger timing, field/global errors, focus management, and duplicate-submit protection.
- Frontend validation MUST NOT replace server constraints.

### Responsive and Accessibility

- Define information priority, layout changes, overflow, touch targets, and keyboard operation at target breakpoints/devices.
- Assess semantic structure, labels, focus order and restoration, error association, ARIA, contrast, live announcements, and reduced motion.
- MUST NOT state only "supports responsive/accessibility"; describe verifiable behavior.

### Design System Reuse

Inventory existing tokens, Buttons, Inputs, Forms, Cards, Modals, Tables, Toasts, Loading, and Empty/Error states first. Prefer reuse. If something is missing, decide between Feature-local composition and extending the project Design System. MUST NOT duplicate near-equivalent components or create an isolated visual language.

## 7. `UI READY` Checklist

UI Open Questions use `OPEN | RESOLVED | DEFERRED` as defined above. A Critical UI Open Question at `OPEN` or `DEFERRED` blocks this Gate.

This applies only when `UI Impact: YES`. Every item MUST have an evidence row. Record `UI READY Status: PASS` only when all 10 rows are `YES` and the record includes the complete upstream manifest, UX/UI artifact revision, validation time, and Decision Authority approval source and scope. Applicability decisions belong inside the evidence for a row; the row itself MUST NOT be bypassed as `N/A`:

- [ ] User Goal, Entry, Exit, and complete User Flow are explicit.
- [ ] Each affected Page/Screen/Component has an explicit responsibility.
- [ ] The UI State Matrix covers applicable Loading/Empty/Error/Success and other states.
- [ ] Permission, validation, duplicate submit, cancel, back, and recovery behavior are explicit.
- [ ] Frontend/Backend contract and error mapping are explicit.
- [ ] Responsive behavior is verifiable.
- [ ] Accessibility behavior is verifiable.
- [ ] Existing components and the Design System were checked, with an explicit reuse/extension decision.
- [ ] UI Acceptance is in the Spec or explicitly linked to `AC-*`.
- [ ] No Critical UI Open Question is `OPEN` or `DEFERRED`.

When a UI proposal changes approved business requirements, it MUST receive explicit Decision Authority confirmation, return to Spec Refinement, and mark affected Gates/Plan `STALE`. It MUST NOT bypass `SPEC READY` by changing only the UX/UI document.
