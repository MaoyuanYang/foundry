# Feature UX/UI: <Feature ID> <Name>

> Create only for `UI Impact: YES`. Reuse the project format and Design System. Follow the applicable `AGENTS.md` Language Policy and product/i18n requirements. If Documentation or Engineering Language is missing, do not use this template: propose the `en` default and `STOP` until a named Maintainer adopts and persists it. Product Content Language MUST come from product requirements and MUST NOT be assumed. Optional items may be removed, but Gate checklist evidence and `N/A - <reason>` for risks MUST remain.

## Metadata

- Spec/Issue:
- Validated Spec revision:
- Upstream input manifest link/revisions:
- UX/UI artifact revision/change-log ID:
- UI Impact: `YES`
- `UI READY` Status: `NOT_READY | PASS | STALE`
- Affected platforms/devices:
- Existing UX/UI/Design System references:

## User Goal and Flow

- User/role:
- Goal:
- Entry point:
- Preconditions:

```text
Entry -> Step/state -> Step/state -> Success exit
                  -> Error/retry/cancel/back path
```

- Success exit:
- Cancel/back behavior:
- Permission denied/recovery:

## Page / Screen / Component Responsibilities

| Surface | Responsibility | Inputs/source | User actions | Navigation/output | Reused component |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |

## UI State Matrix

| Surface | State | Trigger | Visible UI/message | Allowed action | API/data | Recovery/next |
| --- | --- | --- | --- | --- | --- | --- |
|  | Loading |  |  |  |  |  |
|  | Empty |  |  |  |  |  |
|  | Error |  |  |  |  |  |
|  | Success |  |  |  |  |  |

Also assess: `Initial | Loaded | Submitting | Disabled | Unauthorized | Forbidden | Offline | Partial Failure`.

## Forms, Validation, and Duplicate Actions

| Input/action | Client validation | Server validation/error | Timing/focus | Duplicate protection |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Frontend/Backend Contract

- Request/response:
- Authentication/authorization:
- Pagination/retry/timeout: `N/A - <reason>`
- Optimistic update/rollback: `N/A - <reason>`

### Error Mapping

| Backend code/status | User-visible state/message | Enabled action | Recovery | Sensitive detail hidden? |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Responsive Behavior

| Viewport/device | Layout/information priority | Navigation/input changes | Overflow/touch behavior |
| --- | --- | --- | --- |
|  |  |  |  |

## Accessibility

- Semantic structure/labels:
- Keyboard and focus order/recovery:
- Error association and live announcements:
- Contrast/non-color cues:
- Motion/touch target considerations:
- Verification approach:

## Design System Reuse

| Need | Existing token/component | `Reuse/Compose/Extend` | Reason | Project-level update |
| --- | --- | --- | --- | --- |
|  |  |  |  | `N/A - <reason>` |

## UI Acceptance Links

- `AC-___`:

## Open Questions

| ID | Question | `Critical/Non-critical` | Owner | Resolution | Status |
| --- | --- | --- | --- | --- | --- |
| UIQ-001 |  |  |  |  | OPEN |

Status MUST be `OPEN | RESOLVED | DEFERRED`. A Critical UI Open Question at `OPEN` or `DEFERRED` blocks `UI READY`.

## `UI READY` Evidence

Each Result MUST be `YES` or `NO`. Applicability decisions belong in Evidence and do not remove a requirement row. `PASS` requires all 10 rows to be `YES`, plus a complete manifest, validation time, and Decision Authority.

| ID | Requirement | Result | Evidence/reason |
| --- | --- | --- | --- |
| UR-01 | User Goal, Entry, Exit, and the complete User Flow are explicit. |  |  |
| UR-02 | Each affected Page, Screen, and Component has an explicit responsibility. |  |  |
| UR-03 | The UI State Matrix covers applicable Loading, Empty, Error, Success, and other states. |  |  |
| UR-04 | Permission, validation, duplicate submit, cancel, back, and recovery behavior are explicit. |  |  |
| UR-05 | The Frontend/Backend contract and error mapping are explicit. |  |  |
| UR-06 | Responsive behavior is verifiable. |  |  |
| UR-07 | Accessibility behavior is verifiable. |  |  |
| UR-08 | Existing components and the Design System were checked, with an explicit reuse/extension decision. |  |  |
| UR-09 | UI Acceptance is in the Spec or explicitly linked to `AC-*`. |  |  |
| UR-10 | No Critical UI Open Question is `OPEN` or `DEFERRED`. |  |  |

## `UI READY` Record

- Status: `PASS | NOT_READY | STALE`
- Input manifest: complete upstream manifest plus UX/UI artifact revision, each with an independent change ID/content hash:
- Evidence checklist result: `ALL YES | INCOMPLETE`
- Critical UI Open Questions at `OPEN` or `DEFERRED`: `NONE | <IDs>`
- Validated Spec revision:
- Validated UX/UI revision:
- Validated at:
- Decision Authority (named human + role):
- Approval source:
- Approval scope:
