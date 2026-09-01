# Safety Net and Verification

Read before `SAFETY_NET_DESIGN`; recheck before every `BEHAVIOR PRESERVED` claim. This reference defines the evidence that makes behavior preservation a verifiable claim rather than an assertion.

## Principle

A maintenance slice may change structure, dependencies, or the presence of a capability, never unapproved observable behavior. "Observable behavior" is what an external consumer can perceive: API request/response contracts and status codes, CLI output and exit codes, UI states and copy, event and message payloads, persisted data shape and integrity rules, timing guarantees the project documents, and configuration semantics. Internal names, module layout, duplication removal, and implementation strategy are not observable behavior.

## Baseline Snapshot

Before any slice, record a baseline of every surface the campaign will touch:

| Surface | Baseline evidence | Kind |
| --- | --- | --- |
| `<API endpoint / CLI command / UI flow / data table / event>` | `<command + output, contract probe result, content hash, or recorded interaction>` | `<Runtime / Tests / Contract / Hash>` |

- Prefer executable evidence: run the project's verification commands and record exact commands, working directory, environment, versions, `commit/ref`, results, and duration.
- Where behavior is not covered by executable tests, capture a characterization probe (a recorded request/response, snapshot, or hash) — labeled `OBSERVED` with its capture conditions.
- A surface whose behavior cannot be captured or tested at all blocks `SAFETY NET READY`: record the gap, why it blocks, and `STOP`. Never slice blind.

## Characterization Tests

Where existing coverage is insufficient for a touched surface, add characterization tests **before** changing it:

- A characterization test records current behavior, including its quirks; it does not assert desired behavior. Label it in the campaign record as characterization evidence for the pre-change baseline.
- Test observable behavior through public seams (API boundary, CLI, rendered UI, event stream), not internal functions; a refactor that breaks only internal-shape tests is not verified behavior preservation.
- If a quirk recorded by a characterization test is actually a defect, do not fix it inside a `REFACTOR`/`DEBT` slice: record it as a candidate `feature-dev` Bug work item, keep the characterization asserting the current (defective) behavior, and let the fix run as its own behavior-change work item.

## `SAFETY NET READY` Checklist

All 10 items are required for a PASS:

- [ ] Every touched surface is enumerated in the campaign record with its baseline evidence kind.
- [ ] Existing verification commands were run against the pre-campaign state and results recorded.
- [ ] Insufficiently covered surfaces have characterization tests recorded as pre-change evidence.
- [ ] No touched surface remains without executable or recorded evidence (no blind slicing).
- [ ] The regression scope per slice surface is recorded (`TS-*` or project equivalents, plus commands).
- [ ] Baseline evidence is labeled and reproducible (command, environment, ref, capture conditions).
- [ ] Concurrent claims on overlapping surfaces were checked; the finding is recorded in the Gate manifest.
- [ ] For `UPGRADE`: current and target versions, lockfile policy, and the breaking-change inventory exist.
- [ ] For `RETIRE`: the confirmed retirement plan per [Deprecation and removal](deprecation-and-removal.md) is complete.
- [ ] The Gate record contains the input manifest, validation time, and authority approval source.

## Per-Slice Verification

After each slice, before claiming `BEHAVIOR PRESERVED` for it:

1. Run the slice's recorded regression scope; record commands and results.
2. Re-run the baseline probes for the surfaces the slice touched and compare against the snapshot; a delta means the slice changed observable behavior.
3. Classify any delta: `defect` (the slice broke something — fix within the slice), `unintended change` (revert or narrow the slice), or `intended change` (STOP the slice; route to Design Change and the `feature-dev` Change path with the named Decision Authority).
4. Record the evidence in the campaign record's slice table. A slice with no recorded evidence is not verified; MUST NOT count it as passed.

## Campaign-Level Verification

`BEHAVIOR PRESERVED` for the whole campaign requires the full recorded regression scope plus a final baseline comparison across every touched surface, executed on the final state after the last slice and again after the integration protocol's rerun before merge. Record the full evidence set (commands, outputs, comparisons) in the campaign record. The campaign Gate is `STALE` when any slice changes after its verification or when the scope or safety net changes semantically; revalidate from the affected point.

## STOP Conditions

- A touched surface cannot be captured or tested and no alternative evidence is acceptable to the named Decision Authority.
- Baseline probes are irreproducible (environment or data unavailable) and the gap cannot be closed.
- A behavior delta resists classification, or an `intended change` appears without a confirmed Decision Authority decision.
