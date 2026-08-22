# feature-dev — Issue & Spec (SPEC READY)

## Bind one Issue / work item

1. Detect existing GitHub, GitLab, Jira, or local conventions (repo config, templates, links, Roadmap records).
2. Bind the matching work item if present; otherwise prepare **only the current one** — never create in bulk. A Bug/Change uses an independent work item and never implicitly reopens or downgrades a `DONE` parent Feature.
3. With no tracker/convention, ask whether to establish a local work item; never create one before confirmation.
4. Use the project format, or the Issue template when absent.

The bound remote Issue or local work item is the **single writable Work Status authority**; `specs/ROADMAP.md` only mirrors it. A remote authority requires explicit authorization, available tools, and valid authentication — otherwise use a local work item or keep the status and `STOP`.

### Issue contents (never duplicates the Spec)

Goal, Spec link, Status, Priority, Assignee, Acceptance checklist, Implementation checklist, Dependencies, Blockers, Delivery links.

A newly selected `DRAFT/UNTRACKED` item moves to `NEXT` only after confirmation by a named Roadmap Decision Authority. When blocked, record `Blocked From`, reason, owner, and unblock condition, then move to `BLOCKED` and `STOP`.

## Spec Refinement

**Greenfield**

```text
DRAFT → clarification → refinement → SPEC READY
```

**Brownfield**

```text
AS_IS_DRAFT → evidence collection → RECONSTRUCTED → explicit TO-BE → SPEC READY
```

Brownfield must preserve evidence-backed AS-IS, bring every touched AS-IS surface to `RECONSTRUCTED`, and state the TO-BE separately. `INFERRED` is never presented as confirmed fact. For a Bug, prefer stable reproduction; if unavailable, record attempts, alternative evidence, and residual risk, get Decision Authority confirmation of expected behavior, and add missing requirements to the Spec first.

## What the Spec must cover

Goal, Scope, Out of Scope, Actors, Preconditions, Main Flow, Alternative Flows, Business Rules, State Transitions, Data Changes, API Behavior, Error Cases, Idempotency, Concurrency, Security, Acceptance Criteria, Dependencies, Open Questions — plus on-demand Performance, Caching, Messaging, Transaction, Consistency, Retry, Timeout, Observability, Migration, Backward Compatibility. With UI, also User Flow, Affected Pages, Entry/Exit Points, UI States, Interaction, Form Behavior, Validation, Loading/Empty/Error/Success, Permission, Responsive, and Accessibility.

## Open Questions

Status is `OPEN | RESOLVED | DEFERRED`. A **Critical** question at `OPEN` or `DEFERRED` blocks `SPEC READY`. Critical questions can change Scope, Acceptance, business rules, security, data/API contract, core UX, migration, or test feasibility; non-critical ones allow a reversible choice within current constraints and are recorded with an owner.

## SPEC READY checklist

`PASS` requires every item to be `YES` (a requirement-specific N/A reason may support `YES` only where the item explicitly permits it; the row itself is never bypassed), plus a complete manifest, validation time, and Decision Authority approval source and scope:

1. Goal, Scope, and Out of Scope are clear and cover only the current work item.
2. Actors, Preconditions, and Main/Alternative Flows are sufficient to determine behavior.
3. Business Rules, Invariants, and State Transitions are explicit.
4. Externally observable Data and API behavior and compatibility impact were assessed.
5. Error, security, permission, and privacy requirements were assessed.
6. Idempotency, Concurrency, Transaction, and Consistency are defined or justified N/A.
7. Dependencies, migration, observability, and non-functional risks were assessed.
8. Every core Acceptance has a unique, verifiable `AC-*`.
9. Brownfield preserves evidence-backed AS-IS, has explicit TO-BE, reconstructs every touched surface, and proves other unknowns do not affect correctness.
10. Material Code/Docs/Tests/UI conflicts are resolved or included in the TO-BE.
11. No Critical Open Question is `OPEN` or `DEFERRED`.

On failure, record `SPEC READY Status: NOT_READY`; record `STALE` when an older revision passed but current inputs changed. Roadmap `READY` never substitutes for this gate.
