# Project Stage

> Copy this file to the repository root as `STAGE.md`. Replace every
> placeholder and delete guidance that does not apply. This file is the current
> project coordination snapshot, not a replacement for Specs, the Roadmap,
> Gate evidence, durable `AGENTS.md` rules, or delivery history.

## Project Snapshot

| Field | Value |
| --- | --- |
| Snapshot Revision | `STAGE-<monotonic number>` |
| Parent Snapshot | `<previous revision + SHA-256, or INITIAL>` |
| Last Reconciled At | `<ISO-8601 timestamp with timezone>` |
| Reconciled By | `<member or agent identity>` |
| Repository Ref | `<branch and commit/ref; include dirty scope when relevant>` |
| Write Coordination | `SINGLE_WRITER:<identity/location> | OPTIMISTIC:<revision+SHA-256> | TBD - <owner/resolution condition>` |
| Lifecycle Path | `GREENFIELD | BROWNFIELD` |
| Project Phase | `INITIALIZATION | ONBOARDING | DELIVERY | MAINTENANCE` |
| Overall State | `ACTIVE | WAITING | BLOCKED | COMPLETE` |
| Current Milestone | `<short outcome or N/A - no active milestone>` |
| Tracking Mode | `REMOTE | LOCAL | HYBRID | TBD` |

## Lifecycle Progress

Use `NOT_STARTED | ACTIVE | WAITING | BLOCKED | COMPLETE | N/A` only. Keep rows
at project or milestone granularity; do not copy task checklists here.

| Area / Milestone | State | Authoritative Evidence | Next Condition |
| --- | --- | --- | --- |
| `<foundation, onboarding, delivery wave, or other milestone>` | `<state>` | `<ROADMAP, baseline, tracker, delivery record, or ref>` | `<observable condition>` |

## Active Work

`Skill Stage` uses the exact stage token from the active Skill. `Work Status`
uses the adopted Roadmap vocabulary or `UNTRACKED/N/A` where valid. Before a
Feature work item is bound, link its initial status to `specs/ROADMAP.md`. Once
bound, a remote tracker URL is authoritative; when no remote is bound, use
`STAGE_LOCAL:<Activity ID>` to make that row the local Work Status authority.
For a project workflow activity before a Feature authority exists, use Work
Status `N/A` and `N/A - project workflow activity` as Status Authority.

Multiple `NEXT` work items may be active concurrently; each MUST be claimed by
exactly one active activity row carrying its own `Branch / Worktree` identity,
and a duplicate claim on the same item is `CONFLICT`. In `REMOTE` tracking mode
each machine keeps its own local projection of this file, refreshed from the
authoritative tracker and Gate records; the tracker wins any disagreement, and
a Git-level conflict on this file is resolved by regenerating the projection
from those authoritative sources, never by hand-picking sides.

| Activity ID | Work Item | Member | Type | Skill | Skill Stage | Activity State | Work Status | Branch / Worktree | Status Authority | Next Checkpoint | Updated At |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `A-001` | `<ID and short title>` | `<name/session>` | `HUMAN | AGENT` | `coding-start | project-onboard | feature-dev | external` | `<exact stage token>` | `ACTIVE | WAITING | BLOCKED | HANDOFF` | `<status>` | `<branch/worktree/N/A>` | `<ROADMAP link, tracker URL, STAGE_LOCAL:A-001, or N/A - project workflow activity>` | `<next observable checkpoint>` | `<ISO-8601>` |

## Gate Snapshot

This is a projection only. Add a row only when its complete authoritative Gate
record or UI skip decision exists. Link every projection to its own record and
revision; never copy a checklist or evidence manifest into this file.
Projection values: `PASS` projects a passed Gate, `NOT_READY` projects a Gate
not yet passed, `STALE` projects a prior `PASS` invalidated by a semantic
input change, and `DONE` is the completion Gate.

| Work Item | Gate | Projection | Authoritative Record / Revision |
| --- | --- | --- | --- |
| `<ID>` | `SPEC READY | UI READY | TEST DESIGN READY | DONE` | `PASS | NOT_READY | STALE`; `UI READY` may instead be `SKIPPED (N/A)` | `<record link + independent revision/hash>` |

## Blockers and Conflicts

IDs in this file are local to this Stage file; when referencing an ID defined
in another artifact (for example, a Baseline command), qualify it with the
artifact name.

| ID | Affected Activity / Work Item | Type | Evidence | Owner | Unblock / Resolution Condition |
| --- | --- | --- | --- | --- | --- |
| `<B-001/C-001>` | `<ID>` | `<type and concise statement>` | `<source>` | `<owner>` | `<observable condition>` |

## Handoffs

| From | To | Work Item | Resume From | Required Inputs | Authority Transfer | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `<member/Skill>` | `<member/Skill>` | `<ID>` | `<exact stage>` | `<links or evidence>` | `N/A | STAGE_LOCAL:A-old -> STAGE_LOCAL:A-new` | `PENDING | ACCEPTED | COMPLETE` |

## Recently Completed

Keep only the latest 20 entries. Git history and the authoritative tracker or
delivery record retain full history.

| Activity ID | Work Item | Member | Outcome | Final Work Status | Final Status Authority | Delivery Evidence | Completed At |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `<A-xxx>` | `<ID>` | `<member>` | `<short outcome>` | `<status>` | `<tracker URL or frozen STAGE_LOCAL:A-xxx>` | `<link/ref>` | `<ISO-8601>` |

## Authority and Update Rules

1. `STAGE.md` owns the current project phase, active-member view, coordination blockers, handoffs, and resume points.
2. Before Feature work is bound, `specs/ROADMAP.md` owns its initial `DRAFT/NEXT/BLOCKED` status. After binding, a remote tracker owns Work Status and its `STAGE.md` row is a projection. Temporary authorization, tool, authentication, or availability failure never transfers that authority: preserve status and stop. Use `STAGE_LOCAL:<Activity ID>` only when no remote is bound or after an explicit durable migration unbinds it.
3. `specs/ROADMAP.md` always owns Feature ordering and dependencies and mirrors Work Status after binding. A Feature Spec owns correctness. Gate artifacts own Gate decisions and evidence. `AGENTS.md` owns durable rules. PRs or Delivery Records own delivered changes.
4. Serialize Stage writes through the repository's existing lock or one designated canonical writer. When neither exists, use the optimistic guard in order: (1) reread the latest file and every applicable status authority; (2) compare the retained revision and SHA-256 immediately before writing and abort/reconcile if either changed; (3) record the prior revision/hash as `Parent Snapshot` and update only the scoped rows; (4) write and increment the snapshot revision; (5) reread after writing and stop on a duplicate ID or unexpected result. After two consecutive aborts on unexpected change, record `CONFLICT` and stop the affected update; when neither serialization nor hash comparison is available, stop before writing. Allocate the next `A-xxx` ID under the same guard. A divergent worktree copy is not live project state until the canonical Stage writer reconciles it.
5. Preserve unrelated member rows and user changes; never replace the whole file to fit this template.
6. Each member or agent changes only its activity and directly affected blocker or handoff rows; a designated writer may apply that scoped change. Change project-level fields only when authoritative evidence supports the transition.
7. Two members may reference the same work item only when explicit collaboration and responsibility boundaries are recorded. Otherwise add a `CONFLICT` and stop the affected transition.
8. Transfer Stage-local authority atomically under the write guard: create or confirm the receiver row, preserve Work Status, change authority to `STAGE_LOCAL:<receiver Activity ID>`, mark the sender as transferred, and accept the handoff in the same update. The sender row remains active until transfer succeeds.
9. Update on assignment, meaningful Skill-stage transition, block, resume, handoff, and completion. Do not log commands, chat history, debugging detail, or every micro-task.
10. When a remote authority disagrees with this file, reconcile from the remote source. If binding, freshness, revision, identity, or authority is uncertain, record `CONFLICT` and stop the affected transition, handoff, or completion; unrelated read-only investigation may continue.
11. Move an activity to `Recently Completed` only after its Work Status is terminal or its authority was transferred. Preserve final status and authority in that row; Git plus the tracker or Delivery Record retains history after the 20-entry window.
12. Follow the applicable Documentation Language for prose and preserve the exact ASCII status tokens above. Never record secrets, credentials, personal data beyond the chosen member identity, or sensitive operational output.
