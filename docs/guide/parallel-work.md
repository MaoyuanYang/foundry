# Parallel Work & Integration

Foundry supports multiple members — humans and agents, each on their own machine — developing concurrently. The coordination plane is the standard remote flow: **Issue + branch + PR + maintainer merge**. Skills hold the process; the tracker holds the authority.

## The model

- Multiple `NEXT` work items may be active at the same time. Each is **claimed by exactly one active member**; the authoritative claim record is the tracker issue assignee in `REMOTE` tracking mode (the Stage activity row is its projection) and the Stage activity row in `LOCAL` mode. An unexplained duplicate claim is `CONFLICT`; claims with explicit recorded collaboration boundaries remain valid.
- A claim ends by completion, by the atomic Stage-local handoff, or by **authority release**: when the claiming member is unreachable, the named Maintainer Decision Authority may release the claim and return the item to its pre-claim state, recording the reason. Any member may flag a suspected stale claim `NEEDS_CONFIRMATION`.
- One `feature-dev` run still advances exactly one work item. Concurrency comes from distinct members each running it against their own claimed item.
- A project may adopt a numeric `WIP Limit: <n>` in root `AGENTS.md` (Maintainer Decision Authority approval). It counts **non-terminal claimed work items** — the tracker's open items bound to Specs in `REMOTE` mode, or non-terminal Stage Active Work rows in `LOCAL` mode. By default, per-claim uniqueness is the only constraint.
- Other members' claimed items are read-only for your run: never modify their Roadmap status, work items, branches, or Gate records.

## Tracker-first coordination

- Multi-member and multi-machine projects **bind a remote tracker** (GitHub/GitLab/Jira) as the Work Status authority — server-side, therefore safe across machines — or record an explicit Maintainer-adopted exception. `HYBRID` tracking scopes the split: each bound subproject follows `REMOTE` rules, and every unbound scope must be single-member `LOCAL`.
- The claiming member files or binds exactly one Issue for their claimed item before development starts, then develops on a dedicated branch recorded in the Stage `Branch / Worktree` column.
- `STAGE.md` is the **team status board**: every machine keeps a local projection refreshed from the tracker and Gate records; the tracker wins any disagreement; a Git-level conflict on `STAGE.md` is resolved by regenerating the projection from authoritative sources.
- `LOCAL` tracking mode serves one member with multiple sessions on one machine/worktree; there the six-step Stage write guard (revision + SHA-256) serializes writes.
- Root `AGENTS.md` records `foundry_contract_version`. Every Skill checks it at entry and stops on mismatch until the installed copy is synchronized — preventing cross-endpoint contract drift.

## Integration protocol

Before merge and `DELIVERED`, the claiming member:

1. Syncs the work-item branch with the integration base (rebase or merge per project convention; never force-push a shared branch without separate authorization).
2. Reruns the **recorded integration slice** — the `TS-*` ID list in the Test Design's `Parallel-feature integration/merge regression` row — and the recorded regression scope, logging commands and results in the Review record.
3. Resolves textual conflicts locally. A conflict revealing a **semantic** conflict on a shared contract or Spec is an L2 Design Change: pause, obtain the named Decision Authority's confirmation, synchronize Specs/docs first, then resume.
4. Follows the Roadmap's dependency ordering when two items touch the same surface; for same-surface items without a recorded dependency, the Roadmap Decision Authority decides on request, else the earlier claim merges first (else `CONFLICT` and ask). The later member reruns this protocol after the earlier item merges.

## PR peer review

Delivery state progresses `REVIEW → READY FOR PR → IN PR REVIEW → DELIVERED`:

- When an authorized PR exists and external feedback arrives, the Stage activity moves to `PR_REVIEW`. Every finding is imported into the Findings table with reviewer identity and severity mapping.
- A **Critical** external finding blocks `DONE` exactly like a self-review Critical. A **High** finding may be waived only through the Decision Authority path.
- Fixes run as a **scoped fix slice** through the recorded `REVIEW -> IN_PROGRESS` edge: log the triggering finding, scope, and reason; implement under `CODING_TESTING`; apply the fix-slice Gate invalidation rules; rerun the Review checklist over the changed diff; then return the item to `REVIEW`.
- Merge is a separately authorized action, performed by or with the responsible maintainer (the named Maintainer Decision Authority, or their explicit designee for that merge).

## Test design hook

When other `NEXT` items are concurrently claimed, Test Design adds the parallel-integration family: merge-order interaction, shared-contract regression, and post-merge combined regression (`TR-11`), or records `N/A - no concurrent work items`.
