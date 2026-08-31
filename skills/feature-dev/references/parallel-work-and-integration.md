# Parallel Work and Integration

Read before binding a work item when other `NEXT` items exist, before creating or switching the work-item branch, and before integration, merge, or PR-review handling. This reference extends, never overrides, [Design Change and Delivery](design-change-and-delivery.md): every authorization class, Gate, and STOP condition there still applies.

During these flows, root `STAGE.md` records only the current activity's stage token, claim, branch identity, and projected status links; scenarios, findings, manifests, and integration evidence stay in their owning artifacts.

## 1. Concurrent Work-Item Model

- Multiple `NEXT` work items may be active concurrently. Each is claimed by exactly one active member — human or agent; a claim with explicit recorded collaboration and responsibility boundaries may name more.
- **Claim authority.** The authoritative claim record is the tracker issue assignee in `REMOTE` tracking mode (binding requires the item to have no other active assignee; the Stage activity row is its projection) and the Stage activity row in `LOCAL` mode. Duplicate-claim detection reads the authoritative record, not a local projection alone.
- One run still advances exactly one work item. Concurrency comes from distinct members, each on their own machine, running this Skill against their own claimed item.
- Other members' claimed items are read-only for this run: MUST NOT modify their Roadmap status, work items, branches, or Gate records. Coordinate only through Stage conflict rules.
- **WIP Limit.** A project MAY adopt a numeric `WIP Limit: <n>` in root `AGENTS.md` (Maintainer Decision Authority approval required; spelled exactly `WIP Limit`). The limit counts **non-terminal claimed work items**: in `REMOTE` mode, the tracker's open items bound to Specs; in `LOCAL` mode, Stage Active Work rows whose Work Status is neither terminal nor `N/A`. Binding is atomic with its check — in `REMOTE` mode the tracker assignment plus status transition is the atomic action (an existing or failed assignment aborts); in `LOCAL` mode the Stage write guard serializes it. After binding, reread the authoritative count; if the limit is exceeded, release the claim and `STOP` with the reason.
- **Claim release.** A claim ends by completion (terminal Work Status), by the existing atomic Stage-local handoff, or by **authority release**: when the claiming member is unreachable, the named Maintainer Decision Authority may release the claim — the item returns to its pre-claim Roadmap state (`DRAFT`, or `NEXT` awaiting a new claimant), and the Stage row records the release reason. A project MAY adopt a staleness window in `AGENTS.md`; without one, staleness is not inferred. Any member MAY flag a suspected stale claim as `NEEDS_CONFIRMATION` in Blockers; only the Maintainer Decision Authority may release another member's claim.

## 2. Tracker-First Coordination

- A repository with more than one active member or more than one machine MUST either bind a remote tracker (GitHub/GitLab/Jira) as the Work Status authority, or record an explicit Maintainer-adopted exception acknowledging the single-machine limitation. When Preflight detects multi-member `LOCAL` tracking without such an exception, warn and `STOP` before binding. The tracker is server-side, therefore safe across machines.
- **Tracking modes.** `REMOTE`: the tracker is the Work Status authority; the tracker issue assignee is the authoritative claim record. `LOCAL`: one member, multiple sessions, one machine/worktree; the Stage write guard serializes writes. `HYBRID`: scoped binding — each bound subproject or scope follows `REMOTE` rules with its tracker, and every unbound scope MUST be single-member and follows `LOCAL` rules.
- The claiming member files or binds exactly one Issue for their claimed item before development starts. MUST NOT create issues for other members or in bulk.
- `STAGE.md` is the team status board, not a coordination authority, in `REMOTE` tracking mode: each machine keeps a local projection refreshed from the tracker and Gate records; the tracker wins any disagreement.
- **Projection regeneration.** A Git-level conflict on `STAGE.md` is resolved by regenerating the projection from authoritative sources, scoped row-by-row like any other write and never as a whole-file replacement: (1) resolve Project Snapshot coordination fields from the Work Status authority and Gate records; (2) rebuild each Active Work row from its tracker item plus that row's linked Gate and authority records; (3) preserve verbatim, from the last non-conflicting revision, rows with no tracker presence (non-Feature activities, Blockers, Handoffs); (4) where an authoritative source is missing or unfetchable (for example another member's unmerged Gate record), record `UNKNOWN` rather than inventing a value; (5) apply the Stage write guard as usual after regeneration. Never treat a divergent worktree copy as live state before canonical reconciliation.
- **Contract version.** If root `AGENTS.md` records `foundry_contract_version` and it differs from the running Skill's contract version, report both values and `STOP` until the installed copy is synchronized. Advancing the recorded value to a newer Skill contract requires the named Maintainer Decision Authority's approval, recorded with source and date together with any contract-migration edits; a Skill MUST NOT advance the repository record without that approval. A repository that records no version is treated as legacy: no check fires, and onboarding SHOULD record one.

## 3. Branch-per-Work-Item

- Develop each claimed work item on its own isolated branch; record the branch in the Stage `Branch / Worktree` column when the Stage row is created or updated.
- Branch naming follows the resolved Engineering Language and the project's branch convention; MUST NOT invent a convention when `AGENTS.md` or the tracker defines one.
- The integration base (for example `main`) is shared: MUST NOT develop on or push to it directly; every merge goes through the project's authorized PR/MR flow. In a project with an explicitly adopted no-PR delivery standard, the merge step is the adopted equivalent review-and-merge record, and every other integration rule still applies.

## 4. Integration Protocol

Before merge and `DELIVERED`, for every claimed item:

1. Sync the work-item branch with the current integration base using the project's convention (rebase or merge). MUST NOT force-push a shared branch without separate explicit authorization.
2. Rerun the **recorded integration slice** — the `TS-*` ID list in the Test Design's `Parallel-feature integration/merge regression` row — and the **recorded regression scope**: every `TS-*` protecting the affected Acceptance Criteria, plus the Bug branch's adjacent regression scope when present. Record commands and results in the Review record's Verification Results.
3. Resolve textual merge conflicts locally. A conflict that reveals a semantic conflict on a shared contract, Spec, or cross-Feature behavior is an L2 Design Change: pause, obtain the named Decision Authority's confirmation, synchronize affected Specs and docs first, then resume.
4. When two items touch the same surface, merge order follows the Roadmap's dependency ordering. For same-surface items with no recorded dependency, the Roadmap Decision Authority decides on request; absent an explicit decision, the earlier claim merges first (claim time = tracker assignment timestamp in `REMOTE` mode, Stage row timestamp in `LOCAL` mode); if claim time is undecidable, record `CONFLICT` and ask. The later member reruns this protocol after the earlier item merges.

## 5. PR Peer Review

- When an authorized PR exists and external review feedback arrives, set the Stage activity to `PR_REVIEW` (delivery state `IN PR REVIEW`) and import every finding into the Findings table with reviewer identity, source comment link, and severity mapping (Critical/High/Medium/Low).
- Severity follows the same rules as self review: a Critical external finding blocks `DONE`; a High finding may be waived only when project DoD permits and a named Decision Authority records rationale, residual risk, and follow-up.
- Fixes run as a **scoped fix slice** through the recorded `REVIEW -> IN_PROGRESS` edge: log the triggering finding, scope, and reason in the Work Status authority; implement under `CODING_TESTING`; apply the fix-slice Gate invalidation rules (a fix changing observable behavior, error copy, or an approved contract marks affected Gates `STALE`; a non-semantic fix updates only the Plan/diff record); rerun the Review checklist over the changed diff; then return the item to `REVIEW`. A fix that changes approved Scope, Acceptance, or an external contract first runs Design Change.
- Record the resolution of every imported finding (`RESOLVED`, or an explicit waiver with authority) in the Peer Review Record before `DONE`.
- Merge remains a separately authorized action, performed by or with the responsible maintainer (the named Maintainer Decision Authority for the repository, or the maintainer they explicitly designate for that merge); `DELIVERED` requires the project DoD to be met.

## 6. STOP Conditions

In addition to every STOP condition in [Design Change and Delivery](design-change-and-delivery.md):

- An unexplained duplicate claim on this work item exists in the authoritative claim record.
- Binding this item would exceed the adopted `WIP Limit` (including the post-bind recheck).
- Multi-member tracking is detected without a bound remote tracker or an explicit Maintainer-adopted exception.
- The work-item branch cannot be isolated (for example, development would have to occur directly on the shared integration base).
- The integration base moved and the required integration rerun cannot be executed in the current environment.
- External review feedback contains a Critical finding that is neither resolved nor explicitly deferred by the named Decision Authority.
- The repository's recorded `foundry_contract_version` differs from this Skill's contract version.
