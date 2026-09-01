# Deprecation and Removal

Read before `SAFETY_NET_DESIGN` of a `RETIRE` campaign and again before the removal slice. Retirement is the one maintenance flow that intentionally changes observable behavior — therefore its authority trail is the strictest in this Skill.

## Retirement vs Refactoring

Removing a capability is not refactoring. `REFACTOR`/`DEBT`/`UPGRADE` preserve behavior; `RETIRE` replaces it with an explicitly approved absence. A request to "clean up", "delete", "turn off", or "stop supporting" a capability is a `RETIRE` campaign; a request that would remove behavior as a side effect of structural work is misclassified and MUST stop for reclassification.

## Retirement Plan

Before the safety net can pass, the campaign record contains a confirmed retirement plan:

| Element | Requirement |
| --- | --- |
| Retired capability | Precise boundary: API endpoints, UI surfaces, events, config keys, data, and documentation named with evidence |
| Intended behavior change | The exact post-retirement observable behavior (error responses, removal, replacement pointer) |
| Authority confirmation | A named Decision Authority explicitly confirmed the intended behavior change, with source, time, and scope; the executing Agent MUST NOT self-approve |
| Consumers | Every internal and external consumer enumerated with evidence labels (`OBSERVED` from code/runtime, `DOCUMENTED`, or `UNKNOWN`) |
| Migration | Per consumer: migrate, has no consumer, or accepts breakage (each breakage acceptance needs its own authority confirmation) |
| Announcement | The deprecation notice: audience, channel, and content — including any compatibility period the authority requires |
| Rollback | Reversal of the removal slice (restore path, config, or data) |
| History | The retired capability's Roadmap entry and delivery records are marked `DEPRECATED`/retired, never deleted or rewritten |

## Deprecation Stages

```text
DEPRECATE (announce + compat path)
  -> MIGRATE (consumers move; compatibility period per plan)
  -> REMOVE (the removal slice)
  -> SYNC (documentation and register update)
```

- `DEPRECATE` and `MIGRATE` may be no-op stages when the plan records that no consumer exists or the authority accepts immediate removal; record the justification, never assume it.
- The compatibility period, if any, is defined by the authority in the plan. During it, the deprecated path remains behavior-identical; weakening it early is an unapproved behavior change.
- `REMOVE` is a single slice executed last, after every migrated consumer is verified against the replacement or the recorded breakage acceptance.

## `SAFETY NET READY` for `RETIRE`

The Gate passes only when, in addition to the standard checklist:

- [ ] The retirement plan above is complete and authority-confirmed.
- [ ] Characterization evidence covers the deprecated path's current behavior (so the removal's delta is provably exactly the approved one).
- [ ] Every consumer's migration or breakage acceptance is recorded with evidence or authority confirmation.
- [ ] The announcement content exists (or its no-announcement justification is authority-confirmed).
- [ ] The rollback of the removal slice is recorded.

## Removal Slice Rules

- The removal slice deletes the capability, its tests, and its documentation entries in one slice; leftover dead paths are a follow-up `DEBT` candidate recorded, not silently absorbed.
- The per-slice `BEHAVIOR PRESERVED` claim for `RETIRE` means "the delta equals the approved intended behavior change, and nothing else changed" — verified against the characterization evidence of the pre-retirement path plus the standard regression scope.
- Data associated with the retired capability follows the plan: archived (recorded location and reversal), retained read-only, or deleted under an explicitly authorized destructive action with its own confirmation.

## Documentation and Register Sync

- Canonical docs stop describing the capability; API references mark or remove endpoints per the project's API style; the Roadmap entry is marked `DEPRECATED` with a pointer to the retirement record; the delivery history of the original Feature is preserved immutable.
- `docs/onboarding/*` baselines remain immutable; the change is recorded in the campaign record and current docs.

## STOP Conditions

- The retirement plan lacks a named Decision Authority's confirmation of the intended behavior change.
- A consumer's status is `UNKNOWN` and cannot be resolved from evidence (a hidden consumer is the classic removal incident; MUST NOT remove on inference).
- A breakage acceptance or destructive data action lacks its own explicit authority confirmation.
- The compatibility period or announcement channel is undecided.
