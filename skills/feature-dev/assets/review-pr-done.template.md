# Review, PR, and DONE: <Feature ID> <Name>

> Use for Self Review, a platform-neutral PR-ready summary, and the final Gate. Follow the applicable `AGENTS.md` Language Policy and product/i18n requirements. If Documentation or Engineering Language is missing, do not use this template: propose the `en` default and `STOP` until a named Maintainer adopts and persists it. Product Content Language MUST come from product requirements and MUST NOT be assumed. Optional items may be removed, but Gate revisions, reasons for inapplicable risks, and unperformed actions MUST remain explicit.

## Review Context

- Issue/work item:
- Stage activity / snapshot revision:
- Spec / Gate / revision:
- UX/UI / Gate / revision: `<link and PASS revision> | SKIPPED (N/A) - <complete skip-decision link>`
- Test Design / Gate / revision:
- Implementation Plan:
- Diff/revision reviewed:
- Decision Authority (named human + role):

## Review Checklist

- [ ] Scope matches the Spec whose current revision passed `SPEC READY`; no requirements were silently added or removed.
- [ ] Every `AC-*` is satisfied and `AC-* -> TS-* -> evidence` is traceable.
- [ ] Architecture, API, database, and module boundaries comply with project rules.
- [ ] Reuse is appropriate, with no unnecessary duplication, complexity, or major dependency.
- [ ] Transaction, concurrency, idempotency, and consistency behavior is correct or justified `N/A`.
- [ ] Authentication, permission, privacy, validation, and error handling are correct.
- [ ] Migration, compatibility, rollout, rollback, and observability were assessed.
- [ ] Tests verify behavior, with no material gap in critical regressions or failure paths.
- [ ] UI flow, states, error mapping, responsive behavior, accessibility, and Design System use are correct or justified `N/A`.
- [ ] Code, Spec, Docs, and Issue have no material drift.

## Findings

| Severity | Location | Finding/risk | Resolution/owner | Status |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Peer Review Record

Record only when a PR/MR with external review exists; otherwise keep `N/A - no PR review occurred`. Import every external finding into Findings above first.

- PR/MR and review source:
- Reviewer(s) (named humans or agents):
- Imported findings: `<IDs/links; every external finding appears in Findings>`
- Severity mapping applied: `Critical | High | Medium | Low`
- Resolutions: `<per finding: RESOLVED | waived - authority, rationale, residual risk, follow-up>`
- Integration rerun after feedback (when required by [Parallel work and integration](../references/parallel-work-and-integration.md)): `N/A - no concurrent items | <recorded integration slice and regression scope rerun against the synced base, evidence>`
- Merge authorization and performer: `N/A | <authorized action and responsible maintainer>`

## Verification Results

| Command/check | Scope | Result (PASS/FAIL/NOT RUN) | Evidence/notes |
| --- | --- | --- | --- |
|  |  |  |  |

### Acceptance Traceability

| AC | TS | Automated/manual evidence | Result |
| --- | --- | --- | --- |
| AC-001 | TS-001 |  |  |

## Documentation Sync

| Artifact | Needed? | Change/evidence | Status |
| --- | --- | --- | --- |
| Current Spec | YES |  |  |
| ROADMAP / Issue | YES |  |  |
| STAGE project/member snapshot | YES |  |  |
| API / DATABASE / ARCHITECTURE / TESTING | N/A |  |  |
| FRONTEND / UX / UI / DESIGN_SYSTEM | N/A |  |  |
| AGENTS / ADR | N/A |  |  |

For Brownfield delivery, preserve `docs/onboarding/*` and the Spec's original AS-IS/evidence as history. Convert or keep canonical `docs/*` at `Perspective: CURRENT`, refresh `Last verified` and the evidence revision, and link the original baseline.

## PR-Ready Summary

### Suggested Title

`<type/scope: outcome>`

### What Changed

### Why

### Related Feature, Spec, and Issue

### Tests

### Integration and Parallel Work

`N/A - no concurrent work items | <integration base synced; recorded integration slice (the TS ID list in the Test Design's Parallel-feature integration row) and regression scope rerun; commands and results>`

### UI Changes

`N/A - <reason>`

### Design Changes and ADR

- Design Change summary: `N/A - <reason> | <details>`
- ADR: `N/A - <reason> | <link>`
- Named Architecture Decision Authority: `N/A - <reason> | <human + role>`
- Decision revision: `N/A - <reason> | <revision>`
- ADR state: `N/A - <reason> | the project's implementation-authorizing state (for example, Accepted or Effective)`

### Breaking Changes, Migration, and Rollback

`N/A - <reason>`

### Risks and Follow-up

`N/A - <reason>`

## Delivery Authorization and Status

- Project Definition of Done (DoD): `PR opened | approved | merged | explicitly adopted no-PR delivery record | TBD`
- Explicitly authorized actions: `NONE | commit | push | create/update PR | merge | issue update/close | ...`
- Tool/auth available:
- Actions actually performed:
- Actions not performed:
- Links/revisions:
- Delivery state: `REVIEW | READY FOR PR | READY FOR DELIVERY | IN PR REVIEW | DELIVERED`

## `DONE` Input Manifest

Each controlling artifact MUST use an independent change ID or working-tree content hash; a VCS commit may serve only as the base. When an artifact does not exist, record `N/A - <reason>`; manifest rows MUST NOT be deleted.

| Input | Revision/hash | Gate/status | Evidence/notes |
| --- | --- | --- | --- |
| Current Spec |  | `PASS/STALE` |  |
| Affected Dependency Specs |  | `PASS/N/A/STALE` |  |
| UX/UI artifact |  | `PASS/SKIPPED (N/A)/STALE` |  |
| Test Design |  | `PASS/STALE` |  |
| Implementation Plan / Tasks |  | `CURRENT/STALE` |  |
| Related ADR / API / Architecture / Database |  | `CURRENT/N/A/STALE` |  |
| Related Testing / Frontend / UX / UI / Design System / AGENTS |  | `CURRENT/N/A/STALE` |  |
| Reviewed diff / implementation revision |  | `PASS/STALE` |  |
| Review findings / waivers |  | `PASS/NOT_READY/STALE` |  |
| PR/MR or adopted no-PR delivery record |  | `PASS/NOT_READY/STALE` |  |

## `DONE` Checklist

Every item MUST have an evidence row. Record `DONE Status: PASS` only when all 13 rows are `YES` and the record includes the complete input manifest above, validation time, and Decision Authority approval source and scope. A risk-specific N/A reason may support `YES` only where the checklist item explicitly permits it; the row itself MUST NOT be bypassed as `N/A`:

| ID | Checklist item | Result | Evidence |
| --- | --- | --- | --- |
| DR-01 | Spec reflects current behavior; Brownfield AS-IS and TO-BE remain clear. | `YES/NO` |  |
| DR-02 | All Acceptance Criteria are satisfied. | `YES/NO` |  |
| DR-03 | Core Acceptance has test or confirmed alternative evidence. | `YES/NO` |  |
| DR-04 | Necessary focused, regression and broader tests PASS. | `YES/NO` |  |
| DR-05 | Required concurrency/performance/UI/E2E checks PASS or justified N/A. | `YES/NO` |  |
| DR-06 | No Critical test is flaky, and no Critical finding remains; every High waiver has explicit Decision Authority, rationale, residual risk, and follow-up allowed by project DoD. | `YES/NO` |  |
| DR-07 | Review complete and affected Docs synced. | `YES/NO` |  |
| DR-08 | Design Changes are synchronized; every confirmed L3 architectural decision has an ADR bound to the named Architecture Decision Authority and decision revision in the project's implementation-authorizing state (for example, Accepted or Effective). | `YES/NO` |  |
| DR-09 | Issue/work item updated as authorized/required. | `YES/NO` |  |
| DR-10 | Confirmed PR/MR standard or explicitly adopted no-PR delivery-record standard is met. | `YES/NO` |  |
| DR-11 | The `DONE` input manifest is complete; if incomplete on first validation, record `DONE Status: NOT_READY`. | `YES/NO` |  |
| DR-12 | No semantic manifest input changed after a prior `DONE Status: PASS`; if one changed, record `DONE Status: STALE` and revalidate. | `YES/NO` |  |
| DR-13 | (a) When other work items were concurrently claimed during this item's development, the required integration rerun evidence (recorded integration slice and regression scope, rerun against the synced integration base) is recorded, with `N/A - no concurrent work items` as the only exception; (b) when PR review feedback occurred, every external finding is resolved or explicitly waived with Decision Authority record and no Critical external finding remains, with `N/A - no PR review feedback` only when no PR exists or none received feedback. | `YES/NO` |  |

### UI Completion (If Applicable)

Applies only when `UI Impact: YES`; then `PASS requires all 10 rows to be YES`, recorded together with the rows above. With `UI Impact: NO`, record `N/A - no UI impact` for this subsection:

| ID | Checklist item | Result | Evidence |
| --- | --- | --- | --- |
| DUC-01 | Complete User Flow and navigation match the approved UI artifact. | `YES/NO` |  |
| DUC-02 | Loading behavior is implemented and verified. | `YES/NO` |  |
| DUC-03 | Empty behavior is implemented and verified, or `N/A - <reason>` is recorded. | `YES/NO` |  |
| DUC-04 | Error and recovery behavior are implemented and verified. | `YES/NO` |  |
| DUC-05 | Success behavior and exit are implemented and verified. | `YES/NO` |  |
| DUC-06 | Permission/disabled/offline states are verified where applicable, with N/A reasons otherwise. | `YES/NO` |  |
| DUC-07 | Responsive behavior is verified on target devices/viewports. | `YES/NO` |  |
| DUC-08 | Accessibility requirements are verified. | `YES/NO` |  |
| DUC-09 | Design System reuse/extension is compliant and documented. | `YES/NO` |  |
| DUC-10 | Required interaction/UI/E2E tests pass or have an approved risk-based N/A reason. | `YES/NO` |  |

## Final State

- `DONE` Status: `PASS | NOT_READY | STALE`
- `DONE` input manifest revision/hash:
- Validated delivery revision:
- Validated at:
- Decision Authority (named human + role):
- Approval source:
- Approval scope:
- Roadmap Status: `DONE | REVIEW | BLOCKED`
- If not DONE, exact blocker/unperformed action:
- Resume from:
- Final Stage activity state / snapshot revision:
