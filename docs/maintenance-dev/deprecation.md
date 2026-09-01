# maintenance-dev — Deprecation & Removal

Retirement is the one maintenance flow that **intentionally** changes observable behavior — so its authority trail is the strictest in the Skill.

## Retirement vs refactoring

Removing a capability is not refactoring. `REFACTOR`/`DEBT`/`UPGRADE` preserve behavior; `RETIRE` replaces it with an explicitly approved absence. A request to "clean up", "delete", "turn off", or "stop supporting" a capability is a `RETIRE` campaign; a removal that would happen as a side effect of structural work is misclassified and must stop for reclassification.

## The retirement plan

| Element | Requirement |
| --- | --- |
| Retired capability | Precise boundary: API endpoints, UI surfaces, events, config keys, data, docs — named with evidence |
| Intended behavior change | The exact post-retirement observable behavior (error responses, removal, replacement pointer) |
| Authority confirmation | A named Decision Authority confirmed the intended behavior change; the executing agent never self-approves |
| Consumers | Every internal and external consumer enumerated with evidence labels |
| Migration | Per consumer: migrate, no consumer, or accepted breakage (each acceptance needs its own authority confirmation) |
| Announcement | Audience, channel, content — including any compatibility period |
| Rollback | Reversal of the removal slice |
| History | The retired capability's Roadmap entry and delivery records are marked `DEPRECATED`/retired, never deleted |

## Deprecation stages

```text
DEPRECATE (announce + compat path)
  -> MIGRATE (consumers move; compatibility period per plan)
  -> REMOVE (the removal slice, executed last)
  -> SYNC (documentation and register update)
```

`DEPRECATE` and `MIGRATE` may be recorded no-ops when no consumer exists or the authority accepts immediate removal — record the justification, never assume it. During a compatibility period the deprecated path remains behavior-identical; weakening it early is an unapproved behavior change. The removal slice deletes capability, tests, and documentation entries together; leftover dead paths become a follow-up `DEBT` candidate, recorded rather than silently absorbed.

## Verification

The per-slice `BEHAVIOR PRESERVED` claim for `RETIRE` means "the delta equals the approved intended behavior change, and nothing else changed" — verified against the characterization evidence of the pre-retirement path plus the standard regression scope. Data follows the plan: archived (location and reversal recorded), retained read-only, or deleted under an explicitly authorized destructive action.

## STOP conditions

- The retirement plan lacks a named Decision Authority's confirmation of the intended behavior change.
- A consumer's status is `UNKNOWN` and cannot be resolved from evidence — a hidden consumer is the classic removal incident; never remove on inference.
- A breakage acceptance or destructive data action lacks its own explicit authority confirmation.
- The compatibility period or announcement channel is undecided.
