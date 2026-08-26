# Implementation Plan: <Feature ID> <Name>

> The Plan defines only how to implement and MUST NOT change the Spec. Use the project format. Follow the applicable `AGENTS.md` Language Policy and product/i18n requirements. If Documentation or Engineering Language is missing, do not use this template: propose the `en` default and `STOP` until a named Maintainer adopts and persists it. Product Content Language MUST come from product requirements and MUST NOT be assumed. Optional items may be removed, but reasons for inapplicable risks and Gate revisions MUST remain.

## Ready Inputs

- Spec: `<link>` / `SPEC READY Status: PASS` / revision:
- UX/UI: `<link and UI READY Status/revision> | SKIPPED (N/A) - <complete skip-decision link with deciding Spec revision, evidence, validation time, authority, approval source, and scope>`:
- Test Design: `<link>` / `TEST DESIGN READY Status: PASS` / revision:
- Complete controlling-input manifest: `Spec/dependencies/ADR/API/Architecture/AGENTS/UI/Test`, each with independent change ID/content hash:
- Plan revision/change-log ID:
- Plan Status: `CURRENT | STALE`
- Issue/work item:
- Stage activity (operational; not a semantic Gate input):
- Applicable AGENTS/architecture docs:

## Requirement Guardrail

- Scope/Acceptance changes proposed by this Plan: `NONE`
- If not NONE: `STOP`; update Spec/Test Design through Design Change before continuing.

## Current and Target Flow

### Current

### Target

## Affected Surface

| Module/page/file | `Add/Modify/Delete` | Responsibility/change | Constraint/reuse |
| --- | --- | --- | --- |
|  |  |  |  |

## Implementation Approach

### Domain / Application

### Data / Migration

### API / Integration

### Transaction / Idempotency / Concurrency / Consistency

### Cache / Messaging / Retry / Timeout

### Frontend State / Components / UI States

### Security / Validation / Error Handling

### Observability

## Test Execution Plan

| Scenario IDs | Test target/path | When to run | Required result |
| --- | --- | --- | --- |
| TS-001 |  |  | PASS |

## Rollout, Compatibility, and Rollback

- Migration/backfill: `N/A - <reason>`
- Feature flag/staged rollout: `N/A - <reason>`
- Breaking change: `NO | <details>`
- Rollback:

## Risks and Decisions

| Risk/decision | Level | Mitigation/choice | Needs confirmation/ADR? |
| --- | --- | --- | --- |
|  |  |  |  |

## Interleaved Tasks

- [ ] T1: <small implementation/test slice and observable completion>
- [ ] T2: <next code + focused tests>
- [ ] T3: <integration/UI state + tests>
- [ ] T4: <broader regression/verification>
- [ ] T5: <Review fixes and affected docs sync>

## Start Checklist

- [ ] All required Gates are PASS, or UI has a complete `SKIPPED (N/A)` decision record with revision, evidence, time, authority, approval source, and scope.
- [ ] Gate input manifests match current working-tree artifact revisions, not only the base commit.
- [ ] Plan MUST NOT redefine Scope, rules, contract, or Acceptance.
- [ ] File/module impact is consistent with project architecture.
- [ ] Major dependency/architecture/migration decisions are confirmed.
- [ ] Tasks interleave code, tests, and docs.
- [ ] Each Task has a verification point.
