# Test Design: <Feature ID> <Name>

> Derive this from the Spec whose current revision passed `SPEC READY`, and test externally observable behavior. Follow the applicable `AGENTS.md` Language Policy and product/i18n requirements. If Documentation or Engineering Language is missing, do not use this template: propose the `en` default and `STOP` until a named Maintainer adopts and persists it. Product Content Language MUST come from product requirements and MUST NOT be assumed. Optional items may be removed, but Gate checklist evidence and `N/A - <reason>` for risks MUST remain. MUST NOT invent scenarios merely to increase their count.

## Inputs and Environment

- Spec/Gate/revision:
- UX/UI/Gate/revision: `<link and PASS revision> | SKIPPED (N/A) - <complete skip-decision link>`
- Upstream input manifest link/revisions:
- Test Design revision/change-log ID:
- Issue:
- Test strategy/conventions:
- Environment/services:
- Test data/fixtures:
- Known constraints:

## Risk Inventory

| Risk/invariant | Impact | Likelihood | Evidence | Planned coverage |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Acceptance Traceability

| Acceptance | Scenario IDs | Test level | Automated target/path | Status/evidence |
| --- | --- | --- | --- | --- |
| AC-001 | TS-001 |  |  | DESIGNED |

## Test Scenarios

### TS-001: <Observable behavior>

- Protects: `AC-001 | invariant`
- Risk/type: `Happy | Boundary | Error | Auth | Concurrency | Regression | UI | ...`
- Given:
- When:
- Then:
- Level: `Unit | Integration | API | Contract | Component | Interaction | Accessibility | E2E | Smoke | Concurrency | Performance | Regression | Visual Regression`
- Automation target/path:
- Data/fixture/environment:
- Result/evidence: `NOT RUN`

## Bug Reproduction and Regression (Bug Only)

- Reproduction evidence:
- Failing regression scenario/test:
- Failure is caused by target bug: `YES | NO | UNKNOWN`
- Adjacent regression scope:
- If not automated, reason and repeatable alternative:
- If direct reproduction is unavailable: attempts, logs/trace/characterization evidence, Decision Authority confirmation and residual risk:

## Non-functional and Compatibility Coverage

- Idempotency/duplicate: `N/A - <reason>`
- Concurrency/transaction/consistency: `N/A - <reason>`
- Retry/timeout/recovery: `N/A - <reason>`
- Migration/backward compatibility: `N/A - <reason>`
- Performance/capacity: `N/A - <reason>`
- Security/privacy: `N/A - <reason>`
- Observability: `N/A - <reason>`

## UI Coverage (If Applicable)

- Interaction/navigation:
- Loading/Empty/Error/Success:
- Permission/validation:
- Responsive:
- Accessibility:
- E2E/visual regression: `N/A - <reason>`

## Open Test Questions

| ID | Question/blocker | `Critical/Non-critical` | Owner | Resolution/unblock condition | Status |
| --- | --- | --- | --- | --- | --- |
| TQ-001 |  |  |  |  | OPEN |

Status MUST be `OPEN | RESOLVED | DEFERRED`. A Critical Test Question at `OPEN` or `DEFERRED` blocks `TEST DESIGN READY`.

## `TEST DESIGN READY` Evidence

Each Result MUST be `YES` or `NO`. A risk-specific N/A reason may appear in Evidence only where the requirement explicitly permits it. `PASS` requires all 10 rows to be `YES`, plus a complete manifest, validation time, and Decision Authority.

| ID | Requirement | Result | Evidence/reason |
| --- | --- | --- | --- |
| TR-01 | Every core `AC-*` is verifiable and maps to at least one `TS-*`. |  |  |
| TR-02 | Happy Path, major Alternative Flows, and boundaries are covered. |  |  |
| TR-03 | Error, Authentication/Security, and Regression risks are covered. |  |  |
| TR-04 | Idempotency, Concurrency, Transaction, and Consistency are covered or justified N/A. |  |  |
| TR-05 | High-risk Retry/Timeout, Migration/Compatibility, performance, and similar concerns are covered or justified N/A. |  |  |
| TR-06 | UI interaction/state, Accessibility, and E2E are covered according to risk or justified N/A. |  |  |
| TR-07 | Test levels and automation targets are appropriate and MUST NOT target only implementation details. |  |  |
| TR-08 | Environment, data, fixtures, and external dependencies are available, or alternative verification is confirmed. |  |  |
| TR-09 | A Bug has reproduction evidence and a regression scenario, or a confirmed evidence-based surrogate, alternative verification, and residual risk. |  |  |
| TR-10 | No Critical Requirement is unverifiable, and no Critical Test Question is `OPEN` or `DEFERRED`. |  |  |

## `TEST DESIGN READY` Record

- Status: `PASS | NOT_READY | STALE`
- Input manifest: complete upstream manifest plus Test Design revision, each with an independent change ID/content hash:
- Evidence checklist result: `ALL YES | INCOMPLETE`
- Critical Test Questions at `OPEN` or `DEFERRED`: `NONE | <IDs>`
- Validated Spec revision:
- Validated UI revision or complete skip-decision link:
- Validated Test Design revision:
- Validated at:
- Decision Authority (named human + role):
- Approval source:
- Approval scope:
