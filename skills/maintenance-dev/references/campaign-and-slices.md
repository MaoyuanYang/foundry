# Campaigns and Slices

Read before `CAMPAIGN_PLAN` for `REFACTOR`, `DEBT`, and `UPGRADE` campaigns (retirement follows [Deprecation and removal](deprecation-and-removal.md)). This reference defines how one campaign decomposes into verifiable, deliverable slices.

## Campaign Types

| Type | Trigger | Invariant |
| --- | --- | --- |
| `REFACTOR` | Improve structure (split a giant module, break a cycle, remove duplication, extract a boundary) without changing behavior | Observable behavior identical to baseline |
| `DEBT` | Pay down recorded technical debt (from `docs/onboarding/KNOWLEDGE_GAPS.md` or the project's debt register) | Observable behavior identical to baseline, unless a debt row explicitly encodes a defect whose fix is a confirmed `feature-dev` Bug executed separately |
| `UPGRADE` | Move a dependency, framework, toolchain, or runtime to a new version | Behavior-preserving except explicitly recorded, authority-accepted breaking changes |

One campaign, one invariant. A second motive discovered mid-campaign is a candidate work item, never an absorbed scope.

## Slice Properties

Every slice is:

1. **Minimal** — one structural step (one boundary extraction, one debt row cluster, one dependency hop or layer of a staged migration).
2. **Independently verifiable** — its regression scope runs and passes on its own.
3. **Independently deliverable** — the campaign remains mergeable after any completed prefix; no slice leaves the tree half-migrated.
4. **Rollback-safe** — reverting the slice restores the prior verified state; destructive steps (data migrations, lockfile rewrites) record their reversal.
5. **Ordered** — the plan records sequence and dependency; parallelism across slices of one campaign is out of scope (distinct campaigns follow the suite's parallel-work rules instead).

## Planning a `REFACTOR` Campaign

1. Name the structural goal and its evidence (the cycle, the giant service, the duplication) with file/line references.
2. Choose the target boundary; prefer the smallest sequence of moves that reaches it (strangler-style extraction over a big-bang rewrite; delete-only slices last).
3. One slice per move: extract, then re-point consumers, then remove the old path — as separate slices when the intermediate states must stay verifiable.
4. Record for each slice the surfaces it touches (they must be covered by the safety net) and its regression scope.

## Planning a `DEBT` Campaign

1. Consume the recorded debt register: each planned row cites its Debt ID and evidence label; rows without a register entry are added to the register first (`OBSERVED` or `CONFIRMED`), not silently fixed.
2. Group rows by surface and risk; order by unblocking value and blast radius (small, high-value rows first; risky shared-surface rows later or split out as their own campaign).
3. A row that encodes a defect is split out: the behavior fix is a candidate `feature-dev` Bug; the `DEBT` campaign may only add its characterization test and structural remediation.
4. On completion, debt rows are marked resolved with evidence links in the register — never silently deleted.

## Planning an `UPGRADE` Campaign

1. Record current and target versions, the lockfile policy (locked/frozen mode, single-source lockfile commits separate from code moves), and the environment matrix (local, CI, deployment).
2. Build the breaking-change inventory from release notes, deprecation warnings, and type/contract diffs; classify each as `no code impact`, `mechanical fix`, `behavioral`, or `blocked`. Behavioral items need a named Decision Authority's acceptance or a `feature-dev` Change; `blocked` items may defer the upgrade with the reason recorded.
3. Stage the migration in layers when the jump is large: toolchain, then direct dependencies, then transitive lockfile convergence, then code adaptation — each layer one or more slices with its own verification.
4. Record the rollback plan: pin back to the previous lockfile/ref; destructive steps (schema tooling migrations, config format rewrites) record their reversal explicitly.
5. An upgrade that changes a Major Tech Choice (new database engine, new framework family, new runtime platform) is an L3 decision: a named Architecture Decision Authority and an implementation-authorizing ADR are required before any slice.

## `CAMPAIGN_PLAN` Checklist

All 11 items are required before `Roadmap Status: READY`:

- [ ] Campaign type, goal, and invariant are stated with evidence references.
- [ ] Every planned slice is minimal, ordered, and named with its structural step.
- [ ] Every slice lists touched surfaces covered by the `SAFETY NET READY` manifest.
- [ ] Every slice lists its regression scope and baseline probes to re-run.
- [ ] No slice mixes motives; discovered second motives are recorded as candidate work items.
- [ ] `DEBT`: every row cites a Debt ID; defect fixes are split to `feature-dev`.
- [ ] `UPGRADE`: versions, lockfile policy, breaking-change inventory, staged order, and rollback plan are recorded.
- [ ] L3-requiring choices have a named Architecture Decision Authority and an implementation-authorizing ADR.
- [ ] The plan contains no approved-behavior or contract change (those route to Design Change).
- [ ] The campaign remains deliverable after every slice prefix (no half-migrated mandatory states).
- [ ] The Gate manifest for `SAFETY NET READY` is current (not `STALE`) against the planned scope.

## Mid-Campaign Discipline

- Execute strictly one slice at a time; complete its verification before starting the next.
- A scope discovery (more surfaces than planned, an unplanned dependency) reopens the plan: either amend the plan and revalidate the affected Gates, or split the new scope into a candidate campaign. Never expand silently.
- Integration follows the suite protocol before merge: sync with the base, re-run the recorded integration slice and regression scope, and record the evidence in the Review record.
