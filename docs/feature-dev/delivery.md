# feature-dev — Delivery (DONE)

## Implementation Plan

Only when `SPEC READY` + `UI READY` (or explicit skip) + `TEST DESIGN READY` all pass for current revisions with nothing `STALE`. The Plan records those revisions and answers **only** "how to implement": affected modules/files/pages/components, current and target data/API flow, domain/service/persistence/integration/frontend changes, transactions, cache, messaging, validation, security, error handling, observability, migration/rollout/rollback, a test execution entry for every `TS-*`, and risks.

The Plan must not add business rules or Acceptance, expand Scope, silently change API/UI contracts, or introduce major dependencies/architecture. Requirement changes return to the Spec through Design Change. Record `Roadmap Status: READY` only when gate/plan/task revisions align; if an upstream gate becomes invalid, withdraw readiness back to `NEXT` with the reason and resume point recorded.

## Tasks

Tasks interleave Code and Tests as verifiable vertical slices — never "write all code, then test everything," and never a sub-issue per Task for formality. Then `Roadmap Status: IN_PROGRESS` and coding begins in small slices, obeying AGENTS, the READY Spec, Architecture, API/DATABASE, and Frontend/UX/UI/Design System rules; reusing existing patterns and components; and never sneaking business rules, major dependencies, or architecture changes. A possible Design Change pauses coding and runs the L1/L2/L3 flow.

## Review

`Roadmap Status: REVIEW`. Self Review checks at least: Spec/Scope compliance and every `AC-*`; `AC-* → TS-* → evidence` completeness; architecture boundaries, reuse, complexity, duplication; data constraints, transactions, concurrency, idempotency, consistency, migration; auth, permissions, privacy, inputs, error messages, secret handling; retry/timeout, failure recovery, compatibility, rollout/rollback, observability; tests covering behavior (not internals) with flaky/omission risks; Docs/Code drift. For UI, also User Flow, Loading/Empty/Error/Success, permissions, validation, responsive, accessibility, error mapping, Design System reuse.

Findings are recorded `Critical/High/Medium/Low`. Every Critical finding blocks `DONE` and cannot be waived; a High finding may be waived only when the project Definition of Done permits and a named Decision Authority records rationale, residual risk, and follow-up.

## Documentation Sync

Update only affected documents: Current Spec, STAGE, ROADMAP, API, DATABASE, ARCHITECTURE, TESTING, ADR, AGENTS, and Issue; for a UI Feature also FRONTEND, UX, UI, DESIGN_SYSTEM. The Spec must reflect approved final behavior while preserving Brownfield AS-IS with explicit TO-BE. Never lower Acceptance to match a divergent implementation. New durable rules enter `AGENTS.md` only after explicit `ADOPTED` by a maintainer.

## READY FOR PR / READY FOR DELIVERY

When implementation, verification, Review, and Docs are complete but PR mode lacks authorization/tools/authentication (or no-PR mode lacks its delivery record): produce a PR-ready summary and suggested title; list changed files/modules, test commands and results, UI/Design changes, risks, breaking/migration, rollback; state unperformed external actions explicitly; record `READY FOR PR` (PR mode) or `READY FOR DELIVERY` (no-PR mode); keep `Roadmap Status: REVIEW` and `DONE Status: NOT_READY`; then `STOP`.

Each delivery side effect (remote Issue, commit, push, PR, merge, close) requires separate explicit authorization plus available tools, valid authentication, and a known target. "Implement the Feature" is never authorization.

## IN PR REVIEW

When an authorized PR exists and external review feedback arrives, the Stage activity moves to `PR_REVIEW` and the delivery state to `IN PR REVIEW`. Every external finding is imported into the Findings table with reviewer identity and severity mapping — a **Critical** external finding blocks `DONE` exactly like a self-review Critical, and a **High** finding may be waived only through the Decision Authority path. Fixes return as a scoped `CODING_TESTING` slice under the same work item before `Roadmap Status: REVIEW` resumes; a fix that changes approved Scope, Acceptance, or an external contract first runs Design Change.

Before merge and `DELIVERED`, the claiming member completes the integration protocol: sync the work-item branch with the integration base, rerun the Test Design integration slice and the recorded regression scope, and record commands and results in the Review record. A merge conflict revealing a semantic conflict on a shared contract or Spec is an **L2** Design Change. Merge itself is a separately authorized action, performed by or with the responsible maintainer.

Once the confirmed Definition of Done is met (authorized PR opened, its review feedback resolved, and approved and merged by or with the responsible maintainer, or the explicitly adopted no-PR delivery record exists), record `DELIVERED` together with `DONE Status: PASS` and `Roadmap Status: DONE`.

## DONE gate

Record `DONE Status: PASS` and `Roadmap Status: DONE` together only when **all** hold:

1. The Spec reflects current actual behavior and every Acceptance Criterion is satisfied.
2. Core Acceptance Criteria have tests or confirmed alternative evidence.
3. Necessary focused, regression, integration/E2E, concurrency, and performance tests pass according to risk.
4. No Critical flaky test or Critical review finding remains; every High waiver meets DoD with an explicit risk-acceptance record.
5. UI behavior matches the UI Gate when applicable.
6. Design Changes are synchronized; every confirmed L3 decision has a revision-bound ADR in the project's implementation-authorizing state.
7. Affected semantic Docs and the Issue/work item are synchronized per authorization/convention.
8. The confirmed PR, merge, or no-PR delivery standard is met.
9. The `DONE` record contains an independent revision/hash manifest for the current Spec, affected Dependency Specs, relevant ADR/API/Architecture/AGENTS, applicable UX/UI/Test Design, Plan, reviewed diff, Review, and delivery evidence.
10. When a PR review occurred, every external finding is resolved or explicitly waived with Decision Authority record, no Critical external finding remains, and the required integration rerun evidence is recorded (`N/A - no PR review occurred` only when no PR exists).

After the authoritative `DONE` decision, reconcile `STAGE.md` as a post-Gate projection. A Stage conflict or unavailable writer leaves that projection stale and must be reported and retried, but Stage is not a semantic `DONE` input and cannot retroactively invalidate the Gate.

**With UI**, additionally: complete User Flow and navigation match the approved UI artifact; Loading, Empty (or justified N/A), Error/recovery, Success, and applicable Permission/disabled/offline states are verified; Responsive is verified on target viewports; Accessibility requirements are verified; Design System reuse/extension is compliant and documented; required interaction/UI/E2E tests pass or have an approved risk-based N/A.

If tests were not run, results are unknown, delivery is incomplete, or an external action is only planned, never record `DONE` — first validation records `DONE Status: NOT_READY`. Change it to `STALE` and revalidate only when a manifest input changes semantically after a prior `PASS`. A later Bug/Change to a completed Feature uses a new work item and never rewrites the original delivery record.
