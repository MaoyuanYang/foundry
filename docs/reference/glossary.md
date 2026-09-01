# Status Glossary

Every status, label, and gate token used across Foundry, in one place.

## Roadmap work status

`DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED` (Brownfield survey may also use `UNTRACKED` before a workflow is adopted).

| Status | Meaning |
|---|---|
| `DRAFT` | Known but unselected or still coarse |
| `NEXT` | A work item currently selected for active development; parallel selections are valid when each is claimed by a distinct active member |
| `READY` | Required gates, Plan, and Tasks are ready |
| `IN_PROGRESS` | Implementation and verification underway |
| `REVIEW` | Implementation complete; review/docs/delivery underway |
| `DONE` | The confirmed delivery standard is met |
| `BLOCKED` | An explicit blocker exists; reason/owner/unblock recorded |
| `UNTRACKED` | No trustworthy work history; assigned during Brownfield survey and preserved until an authoritative work status exists |

## Project Stage snapshot

Project phase:

`INITIALIZATION | ONBOARDING | DELIVERY | MAINTENANCE`

Overall state:

`ACTIVE | WAITING | BLOCKED | COMPLETE`

Activity state:

`ACTIVE | WAITING | BLOCKED | HANDOFF`

Lifecycle progress may additionally use `NOT_STARTED` and `N/A`. These tokens describe the project/member snapshot in root `STAGE.md`; they never replace Roadmap or Gate status.

Tracking mode is `REMOTE | LOCAL | HYBRID | TBD`; `TBD` requires an owner and resolution condition. Before Feature work is bound, the Roadmap owns its initial status. After binding, a remote tracker owns Work Status; when no remote is bound, `STAGE_LOCAL:<Activity ID>` identifies the Stage row that owns local Work Status. Temporary remote access failure does not transfer authority.

Stable activity IDs use `A-xxx`; blocker/conflict IDs use `B-xxx` / `C-xxx`.

Handoff status is `PENDING | ACCEPTED | COMPLETE`. A Stage-local handoff atomically moves authority to the receiver's activity before the sender can complete.

## Gate status

`PASS | NOT_READY | STALE`

- `PASS` — the gate's checklist fully passed for the recorded inputs.
- `NOT_READY` — not yet passed.
- `STALE` — a prior `PASS` was invalidated by a semantic input change.

Gates: `SPEC READY`, `UI READY` (or `SKIPPED (N/A)` for no-UI), `TEST DESIGN READY`, `ROADMAP EVOLUTION READY`, `SAFETY NET READY`, `BEHAVIOR PRESERVED`, `DONE`. A no-UI skip is a documented decision, not a passed gate. Stage adds a Gate projection only when that Gate's own authoritative record and revision exist; plain `N/A` is not a Gate status.

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

`READY FOR PR` (PR mode) / `READY FOR DELIVERY` (no-PR mode) / `IN PR REVIEW` (PR open, external review feedback being resolved) / `DELIVERED` (Definition of Done met; recorded with `DONE Status: PASS` and `Roadmap Status: DONE`) / `BLOCKED_HANDOFF` (coding-start, zero `NEXT`; handoff token `INITIALIZATION INCOMPLETE`).

Delivery states are not Roadmap vocabulary: record `IN PR REVIEW` and its siblings in the Issue's Delivery field or body, never in Work Status.

## Skill stage tokens

Each Skill defines its own exact stage tokens, recorded in the Stage activity's `Skill Stage` column.

| Skill | Stage tokens |
|---|---|
| `coding-start` | `ENTRY_CHECK`, `PROJECT_DISCOVERY`, `MACRO_SYNTHESIS`, `CHALLENGE_PASS`, `MACRO_READINESS`, `ARTIFACT_GENERATION`, `FEATURE_MAPPING`, `DRAFT_SPEC_GENERATION`, `NEXT_SELECTION`, `BLOCKED_HANDOFF`, `SELF_REVIEW`, `STOP` |
| `project-onboard` | `PREFLIGHT`, `REPOSITORY_SURVEY`, `BASELINE_VERIFICATION`, `ARCHITECTURE_RECONSTRUCTION`, `FRONTEND_RECONSTRUCTION`, `DOCS_REALITY`, `KNOWLEDGE_GAPS`, `CANONICAL_DOCUMENTATION`, `AGENTS_UPDATE`, `FEATURE_INVENTORY`, `AS_IS_SPEC_RECONSTRUCTION`, `NEXT_RECOMMENDATION`, `COMPLETE` |
| `feature-dev` | `PREFLIGHT`, `WORK_ITEM_BINDING`, `SPEC_REFINEMENT`, `UI_REFINEMENT`, `TEST_DESIGN`, `IMPLEMENTATION_PLAN`, `CODING_TESTING`, `REVIEW`, `DOCUMENTATION_SYNC`, `DELIVERY`, `PR_REVIEW`, `COMPLETE` |
| `evolve-dev` | `PREFLIGHT`, `EVOLUTION_DISCOVERY`, `SYNTHESIS_CHALLENGE`, `ROADMAP_UPDATE`, `DRAFT_SPEC_GENERATION`, `NEXT_SELECTION`, `BLOCKED_HANDOFF`, `SELF_REVIEW`, `STOP` |
| `maintenance-dev` | `PREFLIGHT`, `WORK_ITEM_BINDING`, `SAFETY_NET_DESIGN`, `CAMPAIGN_PLAN`, `SLICE_EXECUTION`, `BEHAVIOR_VERIFICATION`, `REVIEW`, `DOCUMENTATION_SYNC`, `DELIVERY`, `PR_REVIEW`, `COMPLETE` |

## Maintenance campaign vocabulary

Campaign types: `REFACTOR | DEBT | UPGRADE | RETIRE` — exactly one per run.

- `SAFETY NET READY` — baseline snapshot, characterization tests where coverage is missing, and a recorded regression scope cover every touched surface (plus the confirmed retirement plan for `RETIRE`). No implementation slice may run before it is `PASS`.
- `BEHAVIOR PRESERVED` — recorded evidence shows observable behavior identical to the pre-campaign baseline (`REFACTOR`/`DEBT`/`UPGRADE`) or exactly the approved retirement delta (`RETIRE`); claimed per slice and for the whole campaign.
- Breaking-change classes (`UPGRADE`): `no code impact | mechanical fix | behavioral | blocked`.
- Deprecation stages (`RETIRE`): `DEPRECATE -> MIGRATE -> REMOVE -> SYNC`.
- Handoff token `EVOLUTION INCOMPLETE` is `evolve-dev`'s `BLOCKED_HANDOFF` counterpart (zero `NEXT` entries).

## Language policy

`documentation_language = en`, `engineering_language = en`; `product_content_language` is an actual BCP-47 value, `UNKNOWN - <resolution action>`, or `N/A - no product-content surface`.

## Stable IDs

`AC-*` (Acceptance Criterion), `TS-*` (Test Scenario), `OQ-*` / `UIQ-*` / `TQ-*` (Open Questions), `BR-*` (Business Rule), `Fxxx` (Feature), `A-xxx` (Stage Activity), `EVO-<n>` (Roadmap evolution record), `MAINT-<n>` (Maintenance campaign record), `MN-*` (Maintenance DONE checklist row), `D-xxx` (Debt register row).
