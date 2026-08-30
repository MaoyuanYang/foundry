# Design Change and Delivery

Read the execution constraints before Coding. Re-read the relevant sections when a design change is found or work enters Review or delivery.

## 1. Coding Constraints

- Comply with every applicable `AGENTS.md`, the Spec whose current revision passed `SPEC READY`, and applicable Architecture, API, Database, Testing, Frontend, UX/UI, and Design System rules.
- Prefer existing module boundaries, patterns, and components. When the current design is unsuitable, use Design Change; MUST NOT copy or bypass it silently.
- MUST NOT change business rules, external contracts, the data source of truth, or introduce a major dependency without approval.
- Run the most relevant tests after each small slice. When impact expands, run adjacent tests; before completion, run the project's required full verification.
- Modify only what the current Feature requires. Record unrelated problems as candidate work items; MUST NOT expand Scope opportunistically.

## 2. Standard Design Change Flow

```text
Problem found
-> classify as Requirement / Design / Implementation
-> impact analysis
-> L1 / L2 / L3
-> confirm affected docs and work items
-> update Spec/Design/Acceptance/Test Design first
-> then change Code/Tests
-> Verify
-> Review
-> Issue/PR sync
```

Code MUST NOT remain ahead of Docs. An emergency experiment may only provide short-term verification and MUST NOT be delivered as the final implementation before sources of truth are synchronized.

### L1: Feature-local

Affects only the current Feature.

1. Pause affected Coding.
2. If the change alters approved Scope, `AC-*`, an external contract, observable behavior, or user-visible product copy, regardless of impact size, a named human Decision Authority empowered for that Feature MUST explicitly confirm it. Record approver, source, time, and scope. The executing Agent/assignee MUST NOT self-approve. L1 describes impact scope only; it is not automatic authorization.
3. Synchronize the Current Spec, `AC-*`, and Test Design/`TS-*` first; synchronize current API, Database, and UX/UI as needed.
4. Mark downstream Gates/Plan `STALE` according to the invalidation chain and recheck them before resuming implementation.

A reversible implementation refinement that does not change requirements, contracts, or observable behavior is not a Design Change; update only the Plan.

### L2: Cross-Feature

Affects multiple Features, a shared contract, the Roadmap, or the Design System.

1. Pause related implementation and list affected Features, Specs, consumers, Tests, and migration risks.
2. Separate confirmed impacts from inferences and provide compatibility/migration options.
3. Confirm impact scope and choice with a named human Decision Authority. If unconfirmed, `STOP`; MUST NOT expand independently.
4. After confirmation, update Related Specs, API, DATABASE, UX/UI, DESIGN_SYSTEM, ROADMAP, Tests, and any genuinely affected Architecture.
5. Reassess Gates/status for the current and related Features before changing Code.

MUST NOT hide implementation of multiple Features in the current Issue. Suggest a later work item when needed; MUST NOT create work items in bulk automatically.

### L3: Architectural

Involves a Module Boundary, Major Tech Choice, Data Source of Truth, Messaging, Cache, Authentication, Database Strategy, Frontend Architecture, Global Navigation, Design System Core, API Style, or consistency model.

1. Pause implementation immediately; record the problem, evidence, options, impact, and fallback.
2. A named human Architecture Decision Authority MUST explicitly confirm the decision. If unconfirmed, `STOP`; the executing Agent/assignee MUST NOT self-approve.
3. Update genuinely affected ARCHITECTURE, DATABASE, API, FRONTEND, UX, UI, DESIGN_SYSTEM, AGENTS, Related Specs, and Tests.
4. Every confirmed L3 architectural decision MUST have an ADR recording Context, Decision, Alternatives, Consequences, the named Architecture Decision Authority, and decision revision. Coding may resume only after the ADR reaches the project's implementation-authorizing state (for example, Accepted or Effective). ADRs are only for such significant decisions and MUST NOT be created indiscriminately for ordinary L1/L2 or temporary choices.
5. Mark every affected Gate/Plan `STALE`; resume Coding only after reconfirmation against new revisions.

## 3. Review

Self Review MUST precede final delivery and check at least:

- Spec/Scope compliance and satisfaction of every `AC-*`.
- Completeness of `AC-* -> TS-* -> automated/manual evidence`.
- Architecture boundaries, reuse, complexity, and duplication.
- Data constraints, transactions, concurrency, idempotency, consistency, and migration.
- Authentication, permissions, privacy, inputs, error messages, and secret handling.
- Retry/timeout, failure recovery, compatibility, rollout/rollback, and observability.
- Whether tests cover behavior rather than internals, including flaky and omission risks.
- Drift between Docs and Code.
- UI User Flow, Loading/Empty/Error/Success, permissions, validation, responsive behavior, accessibility, error mapping, and Design System reuse.

Record findings as `Critical/High/Medium/Low`. Every Critical finding blocks `DONE` and MUST NOT be bypassed through risk acceptance. A High finding may be waived only when the project Definition of Done (DoD) permits and a named human Decision Authority explicitly records rationale, residual risk, and follow-up. The executing Agent/assignee MUST NOT self-approve.

## 4. Documentation Sync

Before completion, check Current Spec, STAGE, ROADMAP, API, DATABASE, ARCHITECTURE, TESTING, ADR, AGENTS, and Issue according to actual impact; for a UI Feature, also check FRONTEND, UX, UI, and DESIGN_SYSTEM.

- The Spec MUST reflect approved final behavior and preserve Brownfield AS-IS with explicit TO-BE/results. If Code deviates, correct the Code or repeat confirmation; MUST NOT lower Acceptance to match a divergent implementation.
- Update only affected docs; MUST NOT create files to increase document count.
- Create ADRs for significant architectural decisions according to project standards; keep ordinary implementation choices in the Plan/PR.
- Write a new stable project rule to applicable `AGENTS.md` only after Decision Authority explicitly marks it `ADOPTED`. Temporary debugging, task status, one-off workarounds, and unconfirmed inferences MUST NOT be written there.
- Reconcile `STAGE.md` from its authorities. It records current coordination, projected Gate links, blockers, handoffs, and resume points only; it is not a controlling semantic Gate input.

## 5. Platform-Neutral Issue/PR Strategy

First detect GitHub, GitLab, Jira, or local conventions, then bind one writable remote tracker as Work Status authority. When no remote is bound, use a user-confirmed `STAGE_LOCAL:<Activity ID>` row as the local authority; the Roadmap is only a synchronized mirror. A bound remote remains authoritative during temporary authorization, tool, authentication, availability, or write failures; preserve status and `STOP` unless an explicit durable migration unbinds it. If neither valid authority is writable and confirmed, `STOP`; MUST NOT claim a status transition. By default, one Feature binds to one work item; suggest a sub-issue only when part of the work can be delivered independently. A Bug/Change to a `DONE` Feature uses a new work item. A second unexplained Stage claim on the same work item is `CONFLICT` unless explicit collaboration boundaries exist. In a multi-member repository, the claiming member files or binds exactly one Issue for their claimed `NEXT` item and develops it on the work-item branch recorded in Stage; see [Parallel work and integration](parallel-work-and-integration.md).

These operations have side effects:

- Create, modify, or close a remote Issue or Jira work item.
- `git commit`, `git push`, or create/modify a PR/MR.
- Merge, change a remote branch, release, or perform another irreversible/externally visible action.

Each operation class MUST independently satisfy all of these conditions:

1. The user explicitly authorized that action in the current request or context.
2. Required tools are available.
3. Authentication is valid.
4. The target repository, branch, and Issue/PR are explicit.

MUST NOT interpret "implement the Feature" as commit, push, or PR authorization. MUST NOT falsely report creation, push, merge, or closure.

## 6. Delivery Status

Identify the project's Definition of Done (DoD) first: it may require an opened PR, approved review, merge, release, or local/internal no-PR delivery. If unknown, ask; MUST NOT guess.

### `READY FOR PR` / `READY FOR DELIVERY`

When implementation, verification, Review, and Docs are complete, but PR mode lacks authorization/tools/authentication or no-PR mode lacks an equivalent delivery record:

- Produce a PR-ready summary and suggested title.
- List changed files/modules, test commands and results, UI/Design Changes, risks, breaking/migration concerns, and rollback.
- State unperformed external actions explicitly.
- In PR mode, record `READY FOR PR`; in no-PR mode, record `READY FOR DELIVERY`.
- Keep `Roadmap Status: REVIEW`, record `DONE Status: NOT_READY`, then `STOP`.

### `IN PR REVIEW`

When an authorized PR exists and external review feedback arrives, set the Stage activity to `PR_REVIEW` and process the feedback under [Parallel work and integration](parallel-work-and-integration.md):

- Import every external finding into the Findings table with reviewer identity and severity mapping.
- A Critical external finding blocks `DONE` exactly like a self-review Critical; a High finding may be waived only through the Decision Authority path.
- Fixes return as a scoped `CODING_TESTING` slice under the same work item before `Roadmap Status: REVIEW` resumes; a fix that changes approved Scope, Acceptance, or an external contract first runs Design Change.
- Before merge and `DELIVERED`, complete the integration protocol: sync with the integration base, rerun the Test Design integration slice and regression scope, and record the evidence in the Review record.
- Merge itself remains a separately authorized action performed by or with the responsible maintainer.

### `DELIVERED`

`DELIVERED` means the confirmed Definition of Done is met: the authorized PR is opened, its review feedback resolved, and it is approved and merged by or with the responsible maintainer, or the explicitly adopted no-PR delivery record exists. Record `DELIVERED` only together with `DONE Status: PASS` and `Roadmap Status: DONE`; it is the terminal delivery state in the Issue and Review templates.

### `DONE`

`DONE Status: PASS` and `Roadmap Status: DONE` may be recorded together only when every condition holds:

- The Spec reflects current behavior and every Acceptance Criterion is satisfied.
- Core Acceptance Criteria have tests or confirmed alternative evidence.
- Necessary focused, regression, integration/E2E, concurrency, and performance tests pass according to risk.
- No Critical test is flaky, and no Critical review finding remains; every High waiver meets project DoD and has an explicit risk-acceptance record.
- UI behavior matches the UI Gate when applicable.
- Design Changes are synchronized, and every confirmed L3 architectural decision has an ADR bound to the named Architecture Decision Authority and decision revision in the project's implementation-authorizing state (for example, Accepted or Effective).
- Affected semantic Docs and the Issue/work item are synchronized according to authorization/convention.
- The project's confirmed PR, merge, or no-PR delivery standard is met.
- The `DONE` record contains an independent revision/hash manifest for the current Spec, affected Dependency Specs, relevant ADR/API/Architecture/AGENTS, applicable UX/UI/Test Design, Plan, reviewed diff, Review, and delivery evidence.

After the authoritative `DONE` decision, reconcile `STAGE.md` as a post-Gate projection. A Stage conflict or unavailable writer leaves the projection stale and MUST be reported and retried, but it is not a semantic `DONE` input and does not retroactively invalidate the Gate.

When tests were not run, results are unknown, required delivery is incomplete, or an external action is only planned, MUST NOT record `DONE`; on first validation record `DONE Status: NOT_READY`. Change it to `STALE` and revalidate only when a manifest input changes semantically after a prior `DONE Status: PASS`. A later Bug/Change to a historically completed Feature still uses a new work item and MUST NOT rewrite the original delivery record.
