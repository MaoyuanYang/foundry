# maintenance-dev — Safety Net & Verification

The evidence discipline that turns "behavior preserved" from an assertion into a verifiable claim.

## What counts as observable behavior

API request/response contracts and status codes, CLI output and exit codes, UI states and copy, event and message payloads, persisted data shape and integrity rules, documented timing guarantees, and configuration semantics. Internal names, module layout, duplication removal, and implementation strategy are **not** observable behavior — they are exactly what a refactor may change.

## The baseline snapshot

Before any slice, record a baseline of every surface the campaign will touch:

| Surface | Baseline evidence | Kind |
| --- | --- | --- |
| `<API / CLI / UI flow / data / event>` | `<command + output, contract probe result, content hash, or recorded interaction>` | `<Runtime / Tests / Contract / Hash>` |

Prefer executable evidence: run the project's verification commands and record exact commands, environment, versions, `commit/ref`, and results. Where behavior is not covered by tests, capture a characterization probe, labeled `OBSERVED` with its capture conditions. **A surface whose behavior cannot be captured or tested at all blocks `SAFETY NET READY`** — record the gap and `STOP`; never slice blind.

## Characterization tests

Where existing coverage is insufficient, add characterization tests **before** changing the surface:

- They record current behavior — quirks included — not desired behavior.
- They test through public seams (API boundary, CLI, rendered UI, event stream), not internal functions.
- A quirk that is actually a defect is not fixed in a `REFACTOR`/`DEBT` slice: record it as a candidate `feature-dev` Bug, keep the characterization asserting current behavior, and let the fix run as its own behavior-change work item.

## `SAFETY NET READY`

All 10 checklist items are required for a PASS: every touched surface enumerated with baseline evidence; existing verification run against the pre-campaign state; characterization tests recorded where coverage is missing; no blind slicing; per-slice regression scope recorded; baseline evidence labeled and reproducible; concurrent claims checked; `UPGRADE`-specific inventory (versions, lockfile policy, breaking changes); `RETIRE`-specific plan (see [Deprecation & Removal](./deprecation)); and the Gate record with manifest, validation time, and authority approval.

**No implementation slice may run before this Gate is `PASS`.**

## `BEHAVIOR PRESERVED`

Per slice: run the slice's regression scope, re-run the baseline probes for its surfaces, and compare. Classify any delta — `defect` (fix within the slice), `unintended change` (revert or narrow), or `intended change` (stop the slice; route to Design Change and `feature-dev` with the named Decision Authority). A slice with no recorded evidence is not verified.

For the campaign: the full recorded regression scope plus a final baseline comparison across every touched surface, on the final state and again after the integration rerun before merge. The Gate goes `STALE` when any slice changes after verification or the scope/safety net changes semantically.
