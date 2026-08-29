# feature-dev — Issue & Spec (SPEC READY)

## Bind one Issue / work item

1. Detect existing GitHub, GitLab, Jira, or local conventions (repo config, templates, links, Roadmap records, and Stage activity claims).
2. Bind the matching work item if present; otherwise prepare **only the current one** — never create in bulk. A Bug/Change uses an independent work item and never implicitly reopens or downgrades a `DONE` parent Feature. In a multi-member repository, the claiming member files or binds exactly one Issue for their claimed `NEXT` item before development starts.
3. When no remote tracker is bound, ask whether the current `STAGE.md` activity may become the local authority; set `STAGE_LOCAL:<Activity ID>` only after confirmation. A temporarily unauthorized, unavailable, unauthenticated, or unwritable bound remote remains authoritative unless an explicit durable migration unbinds it.
4. Use the project format, or the Issue template when an auxiliary local checklist is useful; it links to Stage and must not maintain a second writable status.

The bound remote tracker or identified `STAGE_LOCAL:<Activity ID>` row is the **single writable Work Status authority for that work item**; `STAGE.md` projects remote status and `specs/ROADMAP.md` mirrors either source. Other members' concurrently claimed `NEXT` items are read-only for this run. A remote authority requires explicit authorization, available tools, and valid authentication for a transition. Without them, keep status and `STOP`; never fall back to Stage-local merely because the bound remote is temporarily unwritable.

A Stage-local handoff transfers authority atomically under the Stage write guard: create or confirm the receiver activity, preserve Work Status, change authority to `STAGE_LOCAL:<receiver Activity ID>`, mark the sender transferred, and accept the handoff in one update. The sender remains active until transfer succeeds.

### Issue contents (never duplicates the Spec)

Goal, Spec link, Status, Priority, Assignee, Acceptance checklist, Implementation checklist, Dependencies, Blockers, Delivery links.

A newly selected `DRAFT/UNTRACKED` item moves to `NEXT` only after confirmation by a named Roadmap Decision Authority. When blocked, record `Blocked From`, reason, owner, and unblock condition, then move to `BLOCKED` and `STOP`.

## Spec Refinement

**Greenfield**

```text
DRAFT → clarification → refinement → SPEC READY
```

A DRAFT Spec inherited from `coding-start` may carry `RECOMMENDED` proposals and `UNKNOWN` items; refinement resolves each through evidence or explicit Decision Authority confirmation before `SPEC READY`.

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
