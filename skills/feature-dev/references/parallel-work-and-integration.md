# Parallel Work and Integration

Read before binding a work item when other `NEXT` items exist, before creating or switching the work-item branch, and before integration, merge, or PR-review handling. This reference extends, never overrides, [Design Change and Delivery](design-change-and-delivery.md): every authorization class, Gate, and STOP condition there still applies.

During these flows, root `STAGE.md` records only the current activity's stage token, claim, branch identity, and projected status links; scenarios, findings, manifests, and integration evidence stay in their owning artifacts.

## 1. Concurrent Work-Item Model

- Multiple `NEXT` work items may be active concurrently. Each is claimed by exactly one active Stage activity (`A-xxx`); a duplicate claim on the same item is `CONFLICT` unless explicit collaboration and responsibility boundaries are recorded.
- A project MAY adopt a numeric `WIP Limit: <n>` in root `AGENTS.md` (Maintainer Decision Authority approval required). When binding an item would exceed an adopted limit, do not bind it: report the limit and `STOP`.
- One run still advances exactly one work item. Concurrency comes from distinct members — human or agent, each on their own machine — running this Skill against their own claimed item.
- Other members' claimed items are read-only for this run: MUST NOT modify their Roadmap status, work items, branches, or Gate records. Coordinate only through Stage conflict rules.

## 2. Tracker-First Coordination

- Multi-member or multi-machine projects SHOULD bind a remote tracker (GitHub/GitLab/Jira) as the Work Status authority. The tracker is server-side and therefore safe across machines.
- The claiming member files or binds exactly one Issue for their claimed item before development starts. MUST NOT create issues for other members or in bulk.
- `STAGE.md` is the team status board, not a coordination authority, in `REMOTE` tracking mode: each machine keeps a local projection refreshed from the tracker and Gate records; the tracker wins any disagreement; a Git-level conflict on `STAGE.md` is resolved by regenerating the projection from authoritative sources, never by hand-picking sides.
- `LOCAL` tracking mode serves one member with multiple sessions on one machine/worktree; there the six-step Stage write guard serializes writes. Never treat a divergent worktree copy as live state before canonical reconciliation.
- If root `AGENTS.md` records `foundry_contract_version` and it differs from the running Skill's contract version, report both values and `STOP` until the Skill copy is synchronized; this prevents cross-endpoint contract drift.

## 3. Branch-per-Work-Item

- Develop each claimed work item on its own isolated branch; record the branch in the Stage `Branch / Worktree` column when the Stage row is created or updated.
- Branch naming follows the resolved Engineering Language and the project's branch convention; MUST NOT invent a convention when `AGENTS.md` or the tracker defines one.
- The integration base (for example `main`) is shared: MUST NOT develop on or push to it directly; every merge goes through the project's authorized PR/MR flow.
- Switching branches mid-item is a scoped Stage update, not a new activity.

## 4. Integration Protocol

Before merge and `DELIVERED`, for every claimed item:

1. Sync the work-item branch with the current integration base using the project's convention (rebase or merge). MUST NOT force-push a shared branch without separate explicit authorization.
2. Rerun the Test Design integration slice and the recorded regression scope against the synced branch; record commands and results in the Review record's Verification Results.
3. Resolve textual merge conflicts locally. A conflict that reveals a semantic conflict on a shared contract, Spec, or cross-Feature behavior is an L2 Design Change: pause, obtain the named Decision Authority's confirmation, synchronize affected Specs and docs first, then resume.
4. When two items touch the same surface, merge order follows the Roadmap's dependency ordering; the later member reruns this protocol after the earlier item merges.

## 5. PR Peer Review

- When an authorized PR exists and external review feedback arrives, set the Stage activity to `PR_REVIEW` (delivery state `IN PR REVIEW`) and import every finding into the Findings table with reviewer identity, source comment link, and severity mapping (Critical/High/Medium/Low).
- Severity follows the same rules as self review: a Critical external finding blocks `DONE`; a High finding may be waived only when project DoD permits and a named Decision Authority records rationale, residual risk, and follow-up.
- Fixes return as a scoped `CODING_TESTING` slice under the same work item, then `Roadmap Status: REVIEW` resumes; a fix that changes approved Scope, Acceptance, or an external contract first runs Design Change.
- Record the resolution of every imported finding (`RESOLVED`, or an explicit waiver with authority) in the Peer Review Record before `DONE`.
- Merge remains a separately authorized action, performed by or with the responsible maintainer; `DELIVERED` requires the project DoD to be met.

## 6. STOP Conditions

In addition to every STOP condition in [Design Change and Delivery](design-change-and-delivery.md):

- A duplicate or unexplained claim on this work item exists.
- Binding this item would exceed the adopted `WIP Limit`.
- The work-item branch cannot be isolated (for example, development would have to occur directly on the shared integration base).
- The integration base moved and the required integration rerun cannot be executed in the current environment.
- External review feedback contains a Critical finding that is neither resolved nor explicitly deferred by the named Decision Authority.
- The repository's recorded `foundry_contract_version` differs from this Skill's contract version.
