# Feature Spec: <Feature ID> <Name>

> Prefer the project's existing format. Follow the applicable `AGENTS.md` Language Policy and product/i18n requirements. If Documentation or Engineering Language is missing, do not use this template: propose the `en` default and `STOP` until a named Maintainer adopts and persists it. Product Content Language MUST come from product requirements and MUST NOT be assumed. Optional sections may be removed when inapplicable, but Gate checklist evidence MUST remain; use `N/A - <reason>` for inapplicable risks. Brownfield artifacts MUST preserve AS-IS and its evidence.

## Metadata

- Feature ID:
- Repository Context: `Greenfield | Brownfield`
- Work Item Type: `Feature | Change | Bug`
- Baseline: `DRAFT | AS_IS_DRAFT | RECONSTRUCTED`
- Affected AS-IS surface (Brownfield): `RECONSTRUCTED | INCOMPLETE` / evidence:
- Spec revision/change-log ID:
- `SPEC READY` Status: `NOT_READY | PASS | STALE`
- Roadmap link/status:
- Issue/work item:
- Stage activity:
- Owner:
- Decision Authority (named human + role):
- Dependencies:
- Last updated:

## Evidence and Confidence (Brownfield)

| Fact | `OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/CONFLICT/UNKNOWN/MISSING/NEEDS_CONFIRMATION` | Evidence/source | Confidence | Follow-up |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## AS-IS (Brownfield)

### Current Behavior

### Current Constraints and Known Gaps

### Reproduction (Bug)

- Environment/data:
- Steps:
- Actual result:
- Expected result:
- Evidence:

## TO-BE

### Goal

### Scope

### Out of Scope

### Actors and Permissions

### Preconditions

### Main Flow

### Alternative and Failure Flows

### Business Rules and Invariants

| Rule ID | Rule/invariant | Rationale/source |
| --- | --- | --- |
| BR-001 |  |  |

### State Transitions

| From | Trigger/condition | To | Invalid behavior |
| --- | --- | --- | --- |
|  |  |  |  |

### Data Behavior

### API / External Contract

### Error Cases and Recovery

### Idempotency / Concurrency / Transaction / Consistency

### Security / Privacy

### Non-functional Requirements

- Performance/capacity: `N/A - <reason>`
- Cache/messaging/retry/timeout: `N/A - <reason>`
- Observability: `N/A - <reason>`
- Migration/backward compatibility: `N/A - <reason>`

### UI Impact

- `YES | NO`:
- Reason:
- UX/UI artifact: `N/A - UI Impact NO | <path>`
- For `NO`, `UI READY` Skip Decision: `SKIPPED (N/A)`
- Deciding Spec revision:
- Evidence for all UI Detection answers:
- Validated at:
- Decision Authority (named human + role):
- Approval source:
- Approval scope:

## Acceptance Criteria

### AC-001: <Observable outcome>

- Given:
- When:
- Then:

## Dependencies and Risks

## Open Questions

| ID | Question | `Critical/Non-critical` | Owner | Resolution/evidence | Status |
| --- | --- | --- | --- | --- | --- |
| OQ-001 |  |  |  |  | OPEN |

Status MUST be `OPEN | RESOLVED | DEFERRED`. A Critical question at `OPEN` or `DEFERRED` blocks `SPEC READY`.

## `SPEC READY` Evidence

Each Result MUST be `YES` or `NO`. A requirement-specific N/A reason may appear in Evidence only where the requirement explicitly permits it. `PASS` requires all 11 rows to be `YES`, plus a complete manifest, validation time, and Decision Authority.

| ID | Requirement | Result | Evidence/reason |
| --- | --- | --- | --- |
| SR-01 | Goal, Scope, and Out of Scope are clear and cover only this work item. |  |  |
| SR-02 | Actors, Preconditions, and Main/Alternative Flows are sufficient to determine behavior. |  |  |
| SR-03 | Business Rules, Invariants, and State Transitions are explicit. |  |  |
| SR-04 | Externally observable Data and API behavior and compatibility impact were assessed. |  |  |
| SR-05 | Error, security, permission, and privacy requirements were assessed. |  |  |
| SR-06 | Idempotency, Concurrency, Transaction, and Consistency are defined or justified N/A. |  |  |
| SR-07 | Dependencies, migration, observability, and non-functional risks were assessed. |  |  |
| SR-08 | Every core Acceptance Criterion has a unique, verifiable `AC-*`. |  |  |
| SR-09 | Brownfield preserves evidence-backed AS-IS, has explicit TO-BE, reconstructs every touched AS-IS surface, and proves other unknowns do not affect correctness. |  |  |
| SR-10 | Material Code/Docs/Tests/UI conflicts are resolved or included in TO-BE. |  |  |
| SR-11 | No Critical Open Question is `OPEN` or `DEFERRED`. |  |  |

## Gate Record

- `SPEC READY` Status: `PASS | NOT_READY | STALE`
- Validated Spec revision/change-log ID:
- Input manifest: `Spec + affected Dependency Specs + relevant ADR/API/Architecture/AGENTS`, each with independent change ID/content hash:
- Critical Open Questions at `OPEN` or `DEFERRED`: `NONE | <IDs>`
- Evidence checklist result: `ALL YES | INCOMPLETE`
- Validated at:
- Decision Authority (named human + role):
- Approval source:
- Approval scope:

## Change Log

| Date | Level | Change | Affected ACs/docs | Confirmed by |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
