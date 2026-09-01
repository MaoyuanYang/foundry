# maintenance-dev — Campaigns & Slices

How one campaign decomposes into verifiable, deliverable slices.

## Slice properties

Every slice is **minimal** (one structural step), **independently verifiable** (its regression scope passes alone), **independently deliverable** (the campaign stays mergeable after any completed prefix), **rollback-safe** (reversal recorded), and **ordered** (sequence and dependency recorded; parallelism across slices of one campaign is out of scope).

## `REFACTOR`: structure without behavior

Name the structural goal with evidence (the cycle, the giant service, the duplication, file/line references). Choose the target boundary and the smallest sequence of moves — strangler-style extraction over big-bang rewrite, delete-only steps last. One slice per move: extract → re-point consumers → remove the old path, as separate slices when intermediate states must stay verifiable.

## `DEBT`: consume the register

Every planned row cites its Debt ID from the recorded register (`docs/onboarding/KNOWLEDGE_GAPS.md` or the project equivalent); rows without an entry are added to the register first, never silently fixed. Group by surface and risk; order by unblocking value and blast radius. A row that encodes a defect is split out: the behavior fix is a candidate `feature-dev` Bug; the campaign may only add its characterization test and structural remediation. Completed rows are marked resolved with evidence links — never silently deleted.

## `UPGRADE`: staged version moves

1. Record current and target versions, the lockfile policy (locked/frozen mode; lockfile commits separate from code moves), and the environment matrix.
2. Build the breaking-change inventory from release notes, deprecation warnings, and type/contract diffs. Classify each: `no code impact`, `mechanical fix`, `behavioral`, or `blocked`. Behavioral items need a Decision Authority's acceptance or a `feature-dev` Change; `blocked` items may defer the upgrade with the reason recorded.
3. Stage large jumps in layers: toolchain → direct dependencies → transitive lockfile convergence → code adaptation. Each layer is one or more slices with its own verification.
4. Record the rollback: pin back to the previous lockfile/ref; destructive steps record their reversal.
5. A Major Tech Choice (new database engine, new framework family, new runtime) is an **L3 decision**: a named Architecture Decision Authority and an implementation-authorizing ADR before any slice.

## `CAMPAIGN_PLAN` checklist

All 11 items are required before `Roadmap Status: READY`: campaign type/goal/invariant with evidence; minimal ordered slices; every slice's surfaces covered by the safety net; every slice's regression scope; no mixed motives (second motives become candidate work items); `DEBT` rows cite Debt IDs; `UPGRADE` inventory complete; L3 choices have an ADR; no approved-behavior change; deliverable after every prefix; the `SAFETY NET READY` manifest is current.

## Mid-campaign discipline

One slice at a time, verification before the next. A scope discovery reopens the plan: amend and revalidate the affected Gates, or split the new scope into a candidate campaign — never expand silently. Before merge, the standard integration protocol: sync with the base, re-run the recorded integration slice and regression scope, record the evidence.
