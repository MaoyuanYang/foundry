# Feature Inventory and AS-IS Spec Templates

This file contains two templates. Put the single Feature Inventory in `specs/ROADMAP.md`. Put each capability's current behavior in the existing Spec path, or use `specs/<feature-id>-<slug>/spec.md` when the project has no convention. Remove inapplicable `N/A` sections. IDs such as `FI-xxx`, `E-xxx`, and `C-xxx` are local to this artifact; when referencing an ID defined in another artifact (for example, Stage or Baseline), qualify it with the artifact name.

Do not create a parallel Feature Inventory. Do not mark an AS-IS Spec `READY`. New Spec prose follows the resolved Documentation Language. Preserve existing IDs; every new ID, slug, or technical name uses English and matches repository shape unless an explicit, authority-approved scoped Engineering Language override applies. Preserve established user-facing product copy.

---

# `specs/ROADMAP.md`

# Feature Roadmap and Inventory

> Perspective: AS-IS inventory and work ordering. Last verified at `[date, commit/ref]`.

## Status Vocabulary

**Implementation State (current implementation state):**

- `IMPLEMENTED`: core current behavior works with no known blocking gap.
- `PARTIAL`: part exists, but a critical path, state, or role is missing or unusable.
- `BROKEN`: evidence shows that an expected core path currently fails.
- `UNKNOWN`: evidence is insufficient for a responsible judgment.
- `DEPRECATED`: explicit evidence shows retirement; dead-looking code alone is insufficient.

**Work Status (workflow progress):**

- `UNTRACKED`: no credible tracker/history proves an adopted work status; assigned during Brownfield survey and preserved until an authoritative work status exists.
- `DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED`

**AS-IS Spec Status (reconstruction confidence):**

- `AS_IS_DRAFT | RECONSTRUCTED`

**Recommendation Selection (metadata, not Work Status):**

- `RECOMMENDED`: onboarding proposes the item; no scheduling decision is implied.
- `SELECTED`: the named `Roadmap Decision Authority` or authoritative tracker has selected the item. This metadata is not Work Status; synchronize Work Status to `NEXT` only through that authority.

The three status columns answer different questions and never substitute for one another. Onboarding proposes one `Recommended Next`; write `NEXT` only after selection by the named `Roadmap Decision Authority` or authoritative tracker. Never promote an AS-IS Spec to `READY`. Roadmap `READY` belongs only to later work with valid `SPEC READY`, applicable `UI READY` or an explicit skip, `TEST DESIGN READY`, Plan, and Tasks (these lifecycle artifacts belong to `feature-dev`).

After a Feature starts, bind it to a writable remote tracker as Work Status authority. Without one, an explicitly identified `STAGE_LOCAL:<Activity ID>` row in root `STAGE.md` may be the local Work Status authority; this table mirrors either source. Never claim a remote status transition without authorization to update that authority.

## Inventory

| Feature ID | Name | Current User/Business Outcome | Current Scope Summary | Dependencies | Implementation State | Work Status | AS-IS Spec Status/Path | Evidence | Conflicts/Unknowns | Existing Test Coverage |
|---|---|---|---|---|---|---|---|---|---|---|
| F001 | `[name]` | `[current outcome, not future intent]` | `[main current behavior]` | `[feature/system]` | `[IMPLEMENTED/PARTIAL/BROKEN/UNKNOWN/DEPRECATED]` | `[UNTRACKED/DRAFT/NEXT/READY/IN_PROGRESS/REVIEW/DONE/BLOCKED]` | `[status: path]` | `[runtime/test/code/UI/docs]` | `[IDs or summary]` | `[tests/gaps/broken]` |

Preserve existing Feature IDs and names. Every newly created Feature ID, slug, or technical name must use English and conform to the repository's established format unless an explicit, authority-approved scoped Engineering Language override applies.

## Dependency Notes

```text
[Feature] -> [depends on Feature/system capability] -> [reason]
```

- Separate runtime dependency, delivery ordering, and merely shared code.
- Do not turn every class/package dependency into a Feature dependency.

## Recommended Next

- Feature: `[one Feature ID and name]`
- Recommendation Label: `[CONFIRMED/INFERRED]`
- Why now: `[user priority / core breakage / security-data risk / unblock / uncertainty reduction]`
- Evidence: `[sources]`
- Dependencies/Blockers: `[items]`
- Why alternatives are deferred: `[brief evidence-based comparison]`
- Recommendation Selection: `[RECOMMENDED/SELECTED]` (selection metadata, never Work Status)
- Work Status after onboarding: `[preserved status; NEXT only when SELECTED by the named Roadmap Decision Authority or authoritative tracker]`
- Handoff: `feature-dev` first confirms current behavior and preserve/change/remove decisions, creates TO-BE, and passes `SPEC READY`; this recommendation does not authorize Coding.

The final check requires one `Recommended Next`. If unconfirmed, preserve `UNTRACKED` or the prior status. If confirmed as `NEXT`, the authoritative status source must contain exactly one current selection. Record pre-existing multiple `NEXT` entries as `CONFLICT` and request confirmation; never rewrite them silently.

## Inventory Conflicts and Unknowns

| ID | Feature | Label | Question/Conflict | Parallel Evidence | Impact | Next Verification |
|---|---|---|---|---|---|---|
| FI-001 | `[ID]` | `[CONFLICT/UNKNOWN/NEEDS_CONFIRMATION]` | `[issue]` | `[sources side by side]` | `[state/scope/priority impact]` | `[action]` |

---

# Feature AS-IS Spec

# `[Feature ID] [Feature Name]`

| Field | Value |
|---|---|
| Feature ID | `[ID]` |
| Perspective | `AS-IS` |
| Status | `[AS_IS_DRAFT or RECONSTRUCTED]` |
| Last Verified | `[date, commit/ref, environment if runtime-dependent]` |
| Inventory Entry | `specs/ROADMAP.md` |
| Reconstruction Basis | `[Runtime/Tests/Code/DB/Config/CI/Docs/Comments]` |
| Documentation Language | `[actual resolved BCP-47 value]` |
| Engineering Language | `[actual resolved BCP-47 value]` |
| Product Content Language/Locales | `[actual resolved BCP-47 value(s) and source / UNKNOWN - <resolution action> / N/A - no product-content surface with scoped survey evidence]` |
| Language Policy Scope | `[repository/path/artifact/surface scope]` |
| Language Policy Authority | `[named Maintainer Decision Authority; ADOPTED; AGENTS path/date]` |

> This document characterizes current behavior. It does not assert that behavior is the correct product requirement or authorize implementation or refactoring.

## Current Goal and Outcome

- `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` Result currently available to the user or caller.
- Use `DOCUMENTED` when the goal comes only from old docs and `INFERRED` when derived from implementation.

## Current Actors, Entry, and Preconditions

| Actor/System | Entry Point | Preconditions/Auth | Evidence |
|---|---|---|---|
| `[actor]` | `[route/UI/event/job/CLI]` | `[current condition]` | `[source]` |

## Current Scope

### Included

- `[currently reachable behavior]`

### Not Present / Deprecated / Unknown

- `[MISSING/DEPRECATED/UNKNOWN + evidence]`

"Not in the current implementation" does not automatically mean future Out of Scope.

## Current Behavior

### Main Flow

```text
[trigger] -> [validation/state] -> [data/external effect] -> [observable result]
```

### Alternative and Error Flows

| Trigger/Condition | Current Behavior | Observable Result | Label/Evidence |
|---|---|---|---|
| `[condition]` | `[behavior]` | `[API/UI/event/data]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING: source]` |

### Current Behavior Criteria

These are characterization criteria for description and regression observation, not approved TO-BE acceptance criteria:

- Given `[current precondition]`, when `[action]`, then `[observed result]`. `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING: evidence]`

## Current Business Rules and Invariants

| Rule/Invariant | Label | Evidence | Conflict/Limit |
|---|---|---|---|
| `[rule]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` | `[test/code/constraint/runtime]` | `[scope]` |

## Current State Transitions

| From | Trigger | To | Guards/Side Effects | Evidence |
|---|---|---|---|---|
| `[state]` | `[event]` | `[state]` | `[rule/effect]` | `[source]` |

## Data Behavior

- Entities/stores, source of truth, reads/writes, constraints, transactions, and cache.
- `[CONFLICT/UNKNOWN]` Schema, migration, or runtime differences.

## API / Event / CLI Behavior

- Request/response/event, auth, validation, errors, idempotency, and retry/timeout.
- Link the global API doc; do not duplicate unrelated interfaces.

## UI/UX Behavior (Conditional)

- Entry/exit, affected pages, and current user flow.

| Surface | Loading | Empty | Error | Success | Disabled/Permission/Offline | Evidence |
|---|---|---|---|---|---|---|
| `[page/component]` | `[state]` | `[state/N/A]` | `[state]` | `[state]` | `[state/N/A]` | `[runtime/test/code]` |

- Record responsive/accessibility behavior and unknowns.
- Preserve existing user-facing product language and reference localized copy by key/path where practical.
- Existing UI is evidence, not automatic approval of UX or Design System rules.

## Dependencies and External Effects

| Dependency | Why Needed | Failure Behavior | Evidence/Unknown |
|---|---|---|---|
| `[feature/service/store]` | `[reason]` | `[current result]` | `[source/gap]` |

## Evidence Ledger

| Evidence ID | Claim Protected | Type | Location/Command/Runtime Context | Label | Limits |
|---|---|---|---|---|---|
| E-001 | `[claim]` | `[Runtime/Tests/Code/DB/Config/CI/Docs/Comments]` | `[reproducible locator]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` | `[environment/version]` |

## Docs-vs-Reality Conflicts

| Conflict ID | Question | Evidence A | Evidence B | Current Resolution/Label | Impact |
|---|---|---|---|---|---|
| C-001 | `[fact]` | `[source + claim]` | `[source + claim]` | `[CONFLICT or resolution]` | `[effect]` |

Do not delete lower-priority evidence. Explain why one source better represents current behavior in the specified environment.

## Existing Test Coverage

| Current Behavior/Rule | Test/Suite | Level | Baseline Result | Stability | What Is Not Covered |
|---|---|---|---|---|---|
| `[behavior]` | `[path/name]` | `[unit/integration/API/component/E2E]` | `[PASS/FAIL/UNAVAILABLE/SKIPPED]` | `[STABLE/FLAKY/UNKNOWN]` | `[gap]` |

Existing tests are evidence, not absolute requirements. Identify tests coupled only to implementation details.

## Unknowns and Missing Evidence

| ID | Label | Question/Gap | Why It Matters | Next Verification |
|---|---|---|---|---|
| U-001 | `[UNKNOWN/MISSING/NEEDS_CONFIRMATION]` | `[gap]` | `[impact]` | `[run/search/ask]` |

## Reconstruction Assessment

- Status rationale: `[why AS_IS_DRAFT or RECONSTRUCTED]`
- Confidence by surface: `[runtime/data/API/UI/tests]`
- Critical unresolved items: `[IDs or none]`

## TO-BE Handoff

Later, `feature-dev` must explicitly resolve:

| Decision | Current Evidence | Preserve / Change / Remove / Unknown | Owner Confirmation Needed |
|---|---|---|---|
| `[behavior/rule/UI/API/data]` | `[evidence IDs]` | `[not decided during onboarding]` | `[who/question]` |

Then it creates a separate, clear TO-BE, Acceptance Criteria, and Test Design and passes `SPEC READY` plus applicable UI/TEST gates before Coding. Never rename this AS-IS Spec directly to `READY`.
