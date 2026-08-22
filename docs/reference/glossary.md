# Status Glossary

Every status, label, and gate token used across Foundry, in one place.

## Roadmap work status

`DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED` (Brownfield survey may also use `UNTRACKED` before a workflow is adopted).

| Status | Meaning |
|---|---|
| `DRAFT` | Known but unselected or still coarse |
| `NEXT` | The one currently selected work item |
| `READY` | Required gates, Plan, and Tasks are ready |
| `IN_PROGRESS` | Implementation and verification underway |
| `REVIEW` | Implementation complete; review/docs/delivery underway |
| `DONE` | The confirmed delivery standard is met |
| `BLOCKED` | An explicit blocker exists; reason/owner/unblock recorded |
| `UNTRACKED` | No trustworthy work history (Brownfield survey only) |

## Gate status

`PASS | NOT_READY | STALE`

- `PASS` — the gate's checklist fully passed for the recorded inputs.
- `NOT_READY` — not yet passed.
- `STALE` — a prior `PASS` was invalidated by a semantic input change.

Gates: `SPEC READY`, `UI READY` (or `SKIPPED (N/A)` for no-UI), `TEST DESIGN READY`, `DONE`. A no-UI skip is a documented decision, not a passed gate.

## Fact status

`CONFIRMED | RECOMMENDED | UNKNOWN`

## Evidence labels

`OBSERVED | DOCUMENTED | CONFIRMED | INFERRED | NEEDS_CONFIRMATION | CONFLICT | UNKNOWN | MISSING`

## Baseline result

`PASS | FAIL | UNAVAILABLE | SKIPPED`

## Feature implementation state (Brownfield)

`IMPLEMENTED | PARTIAL | BROKEN | UNKNOWN | DEPRECATED`

## AS-IS Spec status

`AS_IS_DRAFT | RECONSTRUCTED` — never `READY` during onboarding.

## Open Question status

`OPEN | RESOLVED | DEFERRED` — a Critical question at `OPEN`/`DEFERRED` blocks its gate.

## Recommendation-selection metadata

`RECOMMENDED | SELECTED` — a proposal vs an authority-confirmed choice (not a work status).

## Discovery intensity

`STANDARD | DEEP` — interaction depth only; does not change fact status.

## Challenge outcome

`RETAINED | REVISED | REJECTED`

## Delivery handoff

`READY FOR PR` (PR mode) / `READY FOR DELIVERY` (no-PR mode) / `BLOCKED_HANDOFF` (coding-start, zero `NEXT`).

## Language policy

`documentation_language = en`, `engineering_language = en`; `product_content_language` is an actual BCP-47 value, `UNKNOWN - <resolution action>`, or `N/A - no product-content surface`.

## Stable IDs

`AC-*` (Acceptance Criterion), `TS-*` (Test Scenario), `OQ-*` / `UIQ-*` / `TQ-*` (Open Questions), `BR-*` (Business Rule), `Fxxx` (Feature).
