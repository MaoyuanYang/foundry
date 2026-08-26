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

## Verification Results

| Command/check | Scope | Result | Evidence/notes |
| --- | --- | --- | --- |
|  |  | `PASS/FAIL/NOT RUN` |  |

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
- Delivery state: `REVIEW | READY FOR PR | READY FOR DELIVERY | DELIVERED`

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

- [ ] Spec reflects current behavior; Brownfield AS-IS and TO-BE remain clear.
- [ ] All Acceptance Criteria are satisfied.
- [ ] Core Acceptance has test or confirmed alternative evidence.
- [ ] Necessary focused, regression and broader tests PASS.
- [ ] Required concurrency/performance/UI/E2E checks PASS or justified N/A.
- [ ] No Critical test is flaky, and no Critical finding remains; every High waiver has explicit Decision Authority, rationale, residual risk, and follow-up allowed by project DoD.
- [ ] Review complete and affected Docs synced.
- [ ] Design Changes are synchronized; every confirmed L3 architectural decision has an ADR bound to the named Architecture Decision Authority and decision revision in the project's implementation-authorizing state (for example, Accepted or Effective).
- [ ] Issue/work item updated as authorized/required.
- [ ] Confirmed PR/MR standard or explicitly adopted no-PR delivery-record standard is met.
- [ ] The `DONE` input manifest is complete; if incomplete on first validation, record `DONE Status: NOT_READY`.
- [ ] No semantic manifest input changed after a prior `DONE Status: PASS`; if one changed, record `DONE Status: STALE` and revalidate.

### UI Completion (If Applicable)

- [ ] Complete User Flow and navigation match the approved UI artifact.
- [ ] Loading behavior is implemented and verified.
- [ ] Empty behavior is implemented and verified, or `N/A - <reason>` is recorded.
- [ ] Error and recovery behavior are implemented and verified.
- [ ] Success behavior and exit are implemented and verified.
- [ ] Permission/disabled/offline states are verified where applicable, with N/A reasons otherwise.
- [ ] Responsive behavior is verified on target devices/viewports.
- [ ] Accessibility requirements are verified.
- [ ] Design System reuse/extension is compliant and documented.
- [ ] Required interaction/UI/E2E tests pass or have an approved risk-based N/A reason.

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
