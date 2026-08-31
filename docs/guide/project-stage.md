# Project Stage

`STAGE.md` is Foundry's root-level current-state board. It answers three questions without opening every Spec, Issue, and Gate record:

1. Where is the project in its lifecycle?
2. What is each active human or Agent doing now?
3. What is blocked, who owns the next action, and where should work resume?

All three Skills read and maintain the same file. `coding-start` creates it for Greenfield initialization, `project-onboard` creates or adopts it during Brownfield takeover, and `feature-dev` keeps it synchronized during delivery.

## What it owns

| Information | Authority |
|---|---|
| Current project phase, active-member view, coordination blockers, handoffs, resume points | `STAGE.md` |
| Initial `DRAFT/NEXT/BLOCKED` before a Feature work item is bound | `specs/ROADMAP.md`; Stage is a projection |
| Work Status with a bound remote tracker | GitHub/GitLab/Jira; Stage is a projection |
| Work Status when no remote is bound (or after explicit durable unbinding) | The row identified by `STAGE_LOCAL:<Activity ID>` |
| Feature ordering and dependencies | `specs/ROADMAP.md` |
| Correct behavior and Acceptance Criteria | Feature Spec |
| Gate decision and evidence | Spec/UI/Test/Review Gate record |
| Durable engineering rules | `AGENTS.md` |
| Delivered code changes | PR/MR or Delivery Record |

This hybrid model preserves one writable Work Status authority across all phases: Roadmap before binding, the remote tracker after binding, or the identified Stage row when no remote tracker is bound. A temporary authorization, tool, authentication, availability, or write failure never transfers a bound remote's authority; status stays unchanged until access returns or an explicit durable migration unbinds it. Stage never copies the Roadmap, complete requirements, Gate manifests, implementation Tasks, command logs, or chat history.

## Snapshot structure

A generated `STAGE.md` contains:

- **Project Snapshot**: lifecycle path, project phase, overall state, milestone, ref, tracking mode, parent revision/hash, write-coordination mode, and reconciliation timestamp. Tracking may be `TBD` with an owner and resolution condition during early initialization/onboarding.
- **Lifecycle Progress**: project-level milestones and links to authoritative evidence.
- **Active Work**: one stable activity row per active human or Agent.
- **Gate Snapshot**: one projected Gate per row, each with its own authoritative record and revision. Omit a row until that record or UI skip decision exists; never duplicate Gate evidence.
- **Blockers and Conflicts**: affected activity, evidence, owner, and observable resolution condition.
- **Handoffs**: sender, receiver, work item, exact resume stage, required inputs, and any Stage-local authority transfer.
- **Recently Completed**: at most 20 recent outcomes with final Work Status and authority; Git and the tracker or Delivery Record retain full history.
- **Authority and Update Rules**: ownership, update cadence, conflict handling, and language/secret constraints.

## Status vocabulary

Project phase:

```text
INITIALIZATION | ONBOARDING | DELIVERY | MAINTENANCE
```

Overall state:

```text
ACTIVE | WAITING | BLOCKED | COMPLETE
```

Activity state:

```text
ACTIVE | WAITING | BLOCKED | HANDOFF
```

Tracking mode:

```text
REMOTE | LOCAL | HYBRID | TBD
```

`TBD` is valid only during early initialization/onboarding and must name an owner and resolution condition. A non-Feature workflow activity may use Work Status `N/A` with `N/A - project workflow activity` until a Feature authority exists.

Each activity also records the exact stage token from its Skill, such as `PROJECT_DISCOVERY`, `BASELINE_VERIFICATION`, `SPEC_REFINEMENT`, or `CODING_TESTING`. These activity stages do not replace Roadmap or Gate status.

## Multi-member coordination

- Every activity receives a stable `A-xxx` ID and names its member type as `HUMAN` or `AGENT`.
- Stage writes are serialized through an existing repository lock or one designated canonical writer. Without either, every write runs the same six-step guard in order: reread Stage and every linked status authority; compare the retained revision and SHA-256 immediately before writing and abort/reconcile if either changed; update only the scoped rows while preserving unrelated rows and user changes; record the prior revision/hash as `Parent Snapshot`; write and increment the snapshot revision; reread after writing and stop on a duplicate ID or unexpected result. The next `A-xxx` ID is allocated under the same guard.
- A member changes only its own activity and directly affected blocker or handoff rows; the designated writer may apply that scoped change.
- Two members may reference the same work item only when collaboration and responsibility boundaries are explicit. Otherwise the Skill records `CONFLICT` and stops the affected transition.
- Branch or worktree identity binds each claimed `NEXT` item to its development branch so parallel changes remain locatable. The authoritative claim record is the tracker issue assignee in `REMOTE` tracking mode (the Stage row is its projection) and the Stage row in `LOCAL` mode. In `REMOTE` tracking mode each machine keeps a local projection of this file refreshed from the tracker and Gate records; the tracker wins any disagreement, and a Git-level conflict on this file is resolved by regenerating affected rows from those authoritative sources — scoped row-by-row like any other write, never a whole-file replacement or hand-picked merge. A divergent worktree's Stage copy is not live state until the canonical writer reconciles it.
- A Stage-local handoff atomically creates/confirms the receiver row, preserves Work Status, moves authority to `STAGE_LOCAL:<receiver Activity ID>`, marks the sender transferred, and accepts the handoff. The sender remains active until the transfer succeeds.
- An activity enters Recently Completed only after terminal Work Status or successful authority transfer; its final status and authority remain visible until the 20-entry window prunes it.
- Project-level fields change only when their authoritative evidence supports the transition.

## Update cadence

Stage is updated on assignment, a meaningful Skill-stage transition, block, resume, handoff, and completion. It is deliberately not a daily log or command transcript.

When a remote tracker disagrees with Stage, the tracker wins and Stage is reconciled. When binding, freshness, revision, identity, or authority cannot be established, the mismatch stays visible as `CONFLICT`; the Agent must stop the affected transition, handoff, or completion rather than silently choose a value. Unrelated read-only investigation may continue.

`STAGE.md` prose follows the project's Documentation Language. Exact status and stage tokens remain ASCII so every installed Skill can resolve them consistently.
