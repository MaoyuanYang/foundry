# Project Stage

## Project Snapshot

| Field | Value |
| --- | --- |
| Snapshot Revision | `STAGE-0004` |
| Parent Snapshot | `STAGE-0003 / sha256:08d43670f190a65abefc1772c34948a11ab74c9f90a4bd3b93d51c3609fe5e1a` |
| Last Reconciled At | `2026-08-26T15:51:46+08:00` |
| Reconciled By | `OpenCode` |
| Repository Ref | `main@3b1987c; working tree contains the authorized GitHub Issue #1 change` |
| Write Coordination | `SINGLE_WRITER:OpenCode/current repository root` |
| Lifecycle Path | `BROWNFIELD` |
| Project Phase | `DELIVERY` |
| Overall State | `ACTIVE` |
| Current Milestone | `Project-wide STAGE.md coordination across all Foundry Skills` |
| Tracking Mode | `REMOTE` |

## Lifecycle Progress

| Area / Milestone | State | Authoritative Evidence | Next Condition |
| --- | --- | --- | --- |
| Foundry public baseline | `COMPLETE` | `README.md`, published Skill packages, and `main@3b1987c` | Preserve current behavior while extending the artifact contract |
| Project-wide `STAGE.md` coordination | `ACTIVE` | [GitHub Issue #1](https://github.com/MaoyuanYang/foundry/issues/1) | Authorized commit and push of the verified working tree |

## Active Work

| Activity ID | Work Item | Member | Type | Skill | Skill Stage | Activity State | Work Status | Branch / Worktree | Status Authority | Next Checkpoint | Updated At |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `A-001` | `#1 Add project-wide STAGE.md coordination across Foundry skills` | `OpenCode` | `AGENT` | `external` | `N/A - Foundry meta-maintenance, not Feature-lifecycle governed` | `ACTIVE` | `IN_PROGRESS` | `main` | [GitHub Issue #1](https://github.com/MaoyuanYang/foundry/issues/1) | Obtain explicit authorization for commit and push | `2026-08-26T15:51:46+08:00` |

## Gate Snapshot

Not applicable: `A-001` is classified as `external` Foundry meta-maintenance, so no Feature Gate projection is claimed.

## Blockers and Conflicts

None.

Resolution record: `C-001` resolved `2026-08-26` — `MaoyuanYang` (Maintainer Decision Authority) classified `A-001 / #1` as `external` Foundry meta-maintenance outside the Feature lifecycle, so no retrospective Spec/Test Design/Plan/Gate records are required.

## Handoffs

None.

## Recently Completed

None.

## Authority and Update Rules

1. `STAGE.md` owns the current project phase, active-member view, coordination blockers, handoffs, and resume points.
2. Before Feature work is bound, `specs/ROADMAP.md` owns its initial `DRAFT/NEXT/BLOCKED` status. After binding, a remote tracker owns Work Status and its row here is a projection. Temporary authorization, tool, authentication, or availability failure never transfers that authority: preserve status and stop. Use `STAGE_LOCAL:<Activity ID>` only when no remote is bound or after an explicit durable migration unbinds it.
3. `specs/ROADMAP.md` always owns Feature ordering and dependencies and mirrors Work Status after binding. A Feature Spec owns correctness. Gate artifacts own Gate decisions and evidence. `AGENTS.md` owns durable rules. PRs or Delivery Records own delivered changes.
4. Serialize Stage writes through the repository's existing lock or one designated canonical writer. When neither exists, use an optimistic guard: retain the revision and SHA-256 read, compare both immediately before writing, and abort/reconcile if either changed. Allocate the next `A-xxx` ID under the same guard. A divergent worktree copy is not live project state until the canonical Stage writer reconciles it.
5. Read the latest file and every applicable status authority immediately before updating. Preserve unrelated member rows and user changes; never replace the whole file to fit a template. Record the prior revision/hash as `Parent Snapshot`, then reread after writing and stop on a duplicate ID or unexpected result.
6. Each member or agent changes only its activity and directly affected blocker or handoff rows; a designated writer may apply that scoped change. Change project-level fields only when authoritative evidence supports the transition.
7. Two members may reference the same work item only when explicit collaboration and responsibility boundaries are recorded. Otherwise add a `CONFLICT` and stop the affected transition.
8. Transfer Stage-local authority atomically under the write guard: create or confirm the receiver row, preserve Work Status, change authority to `STAGE_LOCAL:<receiver Activity ID>`, mark the sender as transferred, and accept the handoff in the same update. The sender row remains active until transfer succeeds.
9. Update on assignment, meaningful Skill-stage transition, block, resume, handoff, and completion. Do not log commands, chat history, debugging detail, or every micro-task.
10. When a remote authority disagrees with this file, reconcile from the remote source. If binding, freshness, revision, identity, or authority is uncertain, record `CONFLICT` and stop the affected transition, handoff, or completion; unrelated read-only investigation may continue.
11. Move an activity to `Recently Completed` only after its Work Status is terminal or its authority was transferred. Preserve final status and authority in that row; Git plus the tracker or Delivery Record retains history after the 20-entry window.
12. Follow the applicable Documentation Language for prose and preserve the exact ASCII status tokens above. Never record secrets, credentials, personal data beyond the chosen member identity, or sensitive operational output.
