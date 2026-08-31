# ADR-0001: Parallel Work Items, Tracker-First Collaboration, and PR Peer Review

| Field | Value |
| --- | --- |
| Status | `Accepted` |
| Date | `2026-08-30` (revision 2: `2026-08-31`) |
| Architecture Decision Authority | `MaoyuanYang` (Maintainer Decision Authority) |
| Approval source | ZCode planning session; user-approved retrofit plan; revision 2 approved with the full-findings fix plan |
| Approval scope | All three Foundry Skills, shared templates, `scripts/verify-skills.mjs`, bilingual documentation |
| Decision revision | `2` |

## Context

- Foundry currently serializes work: the Roadmap holds exactly one `NEXT` project-wide, `feature-dev` advances exactly one work item per run, and no branch, merge, or integration semantics exist anywhere in the Skills.
- Review is executing-agent self review plus Decision Authority approval. No mechanism exists for consuming human peer-review feedback after a PR is created.
- Real teams run multiple members (`HUMAN` and `AGENT`), on multiple machines, each with its own installed Skill copy, working concurrently on distinct features through issues, branches, PRs, and maintainer merge.
- The Stage write guard (revision + SHA-256 comparison) is a single-filesystem optimistic lock. It cannot serialize writes across machines, and a distributed file-locking protocol over Git would narrow the per-action Git authorization model.

## Decision

1. **Parallel work items.** Multiple `NEXT` entries are valid by default. Every `NEXT` item must be claimed by exactly one active Stage activity; a duplicate claim on the same item is `CONFLICT`. A project MAY adopt a numeric `WIP Limit: <n>` policy in root `AGENTS.md` (Maintainer Decision Authority approval required). `coding-start` succeeds with one or more confirmed `NEXT` items (still recommending the smallest validating set); `BLOCKED_HANDOFF` keeps zero.
2. **Tracker-first collaboration.** A repository with more than one active member or more than one machine binds a remote tracker (GitHub/GitLab/Jira) as the Work Status authority, or records an explicit Maintainer-adopted exception; the tracker is server-side, therefore safe across machines. `STAGE.md` is the team status board: each machine holds a local projection refreshed from authoritative sources; when a projection disagrees with the tracker, the tracker wins; a Git-level conflict on `STAGE.md` is resolved by regenerating affected rows from authoritative sources — scoped row-by-row, never a whole-file replacement or hand-picked merge. The six-step write guard remains for `LOCAL` tracking mode (one member, multiple sessions, one machine/worktree). `HYBRID` tracking scopes the split: each bound subproject follows `REMOTE` rules with its tracker, and every unbound scope must be single-member `LOCAL`.
3. **Branch-per-work-item and integration.** Active development happens on an isolated branch recorded in the Stage `Branch / Worktree` column. Before `DELIVERED`, the member syncs with the integration base, reruns the Test Design integration slice and regression scope, and records the evidence in the Review record. A merge conflict that reveals a semantic conflict on a shared contract or Spec escalates to an L2 Design Change.
4. **PR peer review.** The delivery state machine gains `IN PR REVIEW` between `READY FOR PR` and `DELIVERED`, with the `PR_REVIEW` Feature-stage token. External review findings import into the Findings table with severity mapping: Critical blocks `DONE`; High may be waived only through the existing Decision Authority path. Merge remains a separately authorized action performed by or confirmed with the responsible maintainer.
5. **Contract version token.** Root `AGENTS.md` records `foundry_contract_version` as an exact key line. Every Skill verifies its local contract version against the repository record at entry; on mismatch it `STOP`s with a resync instruction. Advancing the recorded value to a newer Skill contract requires the named Maintainer Decision Authority's approval, recorded with source and date; a repository that records no version is legacy and unchecked, and onboarding SHOULD record one.

## Revision 2 (2026-08-31): contract refinements from the deep review

- **Claim authority.** The authoritative claim record is the tracker issue assignee in `REMOTE` mode (the Stage activity row is its projection) and the Stage activity row in `LOCAL` mode. An unexplained duplicate claim is `CONFLICT`; claims with explicit recorded collaboration boundaries remain valid.
- **Claim release.** A claim ends by completion, atomic handoff, or authority release by the named Maintainer Decision Authority when the claiming member is unreachable; any member may flag a suspected stale claim `NEEDS_CONFIRMATION`.
- **Fix-slice edge.** The Roadmap state machine gains one explicit backward edge: `REVIEW -> IN_PROGRESS`, valid only for a scoped fix slice triggered by review findings or PR review feedback, with the triggering finding, scope, and reason recorded; the item returns to `REVIEW` after the fix and its affected reruns. Fix-slice Gate invalidation follows the standing rules.
- **WIP Limit counting.** The limit counts non-terminal claimed work items — the tracker's open items bound to Specs in `REMOTE` mode, or non-terminal Stage Active Work rows in `LOCAL` mode; binding is atomic with its check and is rechecked after binding.
- **Integration slice addressability.** The Test Design's `Parallel-feature integration/merge regression` row records the covering `TS-*` IDs; that list is the recorded integration slice the integration protocol reruns, and DR-13 verifies it whenever concurrent items existed.
- **Merge order.** Same-surface items without a recorded dependency merge in Roadmap-Decision-Authority-decided order, else earlier claim first, else `CONFLICT`.

## Alternatives Considered

- **Default `WIP Limit: 1`** (byte-compatible with previous behavior; parallelism opt-in): rejected by Maintainer decision. Parallelism is the default; per-claim uniqueness is the real invariant.
- **Git as the Stage serialization medium** (dedicated Stage-only commits under a standing authorization): rejected. It narrows the per-action Git authorization model and duplicates what a bound tracker already provides.
- **A distributed Stage merge protocol** (cross-machine snapshot reconciliation rules): rejected. Stage is a projection, not an authority; regenerate the projection from authoritative sources instead of merging projections.

## Consequences

- Roadmap semantics change: multiple `NEXT` entries become valid. Repositories adopting the updated Skills may hold states that were previously conflicts; `project-onboard` records pre-existing unclaimed or duplicate-claimed `NEXT` entries as `NEEDS_CONFIRMATION` instead of `CONFLICT` and never rewrites them silently.
- `feature-dev` remains one-work-item-per-run. Concurrency comes from distinct members and agents each running it against their own claimed item.
- The consistency net must stay synchronized: `review-pr-done.template.md` DONE checklist grows to 13 rows, `test-design.template.md` to 11, `scripts/verify-skills.mjs` constants and checks follow, and the bilingual documentation website mirrors every change.
- The safety model is unchanged: every Git or remote side-effect class still requires separate explicit user authorization, and local-write authorization still never implies commit, push, PR, or merge.
