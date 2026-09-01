# Project Stage

## Project Snapshot

| Field | Value |
| --- | --- |
| Snapshot Revision | `STAGE-0024` |
| Parent Snapshot | `STAGE-0023 / sha256:3BAA877232CA60828CB15250673AD40AF46B9E752BA0900E409B6ADFE33378A2` |
| Last Reconciled At | `2026-09-01T13:41:59+08:00` |
| Reconciled By | `ZCode` |
| Repository Ref | `main@c37fe5c` |
| Write Coordination | `SINGLE_WRITER:ZCode/current repository root` |
| Lifecycle Path | `BROWNFIELD` |
| Project Phase | `MAINTENANCE` |
| Overall State | `COMPLETE` |
| Current Milestone | `Post-delivery evolution and maintenance Skills (evolve-dev, maintenance-dev)` |
| Tracking Mode | `REMOTE` |

## Lifecycle Progress

| Area / Milestone | State | Authoritative Evidence | Next Condition |
| --- | --- | --- | --- |
| Foundry public baseline | `COMPLETE` | `README.md`, published Skill packages, and `main@d8254e9` | Preserve current behavior while extending the artifact contract |
| Project-wide `STAGE.md` coordination | `COMPLETE` | [GitHub Issue #1](https://github.com/MaoyuanYang/foundry/issues/1) and commit `d8254e9` | Delivered; future changes follow the new Stage contract |
| Parallel work-item collaboration | `COMPLETE` | `adr/0001-parallel-work-items.md` (Accepted, revision 1) and this snapshot | Delivered on `feat/parallel-work-items`; verified by `npm run skills:verify` (47/47) and `npm run docs:build`; installed copies synchronized byte-identically |
| Deep-review findings resolution | `COMPLETE` | Review report of 2026-08-30 (4 HIGH, 9 MEDIUM, LOW findings), ADR-0001 revision 2, and this snapshot | Delivered via PR #3 merged to main@87514c5 |
| Behavioral eval suite | `COMPLETE` | This snapshot, `evals/`, and the workspace run report | 19/19 scenarios PASS (0 FAIL); PR opened |
| Post-delivery evolution and maintenance Skills | `COMPLETE` | [PR #5](https://github.com/MaoyuanYang/foundry/pull/5) merged to `main@65f0c38` (squash, 55 files); CI run 33471699187 success (skills:verify 111/111, docs:build, Pages deploy); installed copies byte-identical ×5 | Preserve current behavior while extending the artifact contract |
| A-008 audit findings resolution | `COMPLETE` | [PR #6](https://github.com/MaoyuanYang/foundry/pull/6) merged to `main@c37fe5c` (squash, 7 files); CI run 33474538123 success (skills:verify 117/117, docs:build, Pages deploy); installed copies re-synced byte-identical ×5 | Preserve current behavior while extending the artifact contract |

## Active Work

None.

## Recently Completed

| Activity ID | Work Item | Member | Outcome | Final Work Status | Final Status Authority | Delivery Evidence | Completed At |
|---|---|---|---|---|---|---|---|
| `A-008` | `Resolve five-skill audit findings F-01..F-03` | `ZCode` | Deep health check (static audit + 26/26 eval scenarios PASS, 3 LOW findings) followed by fix slice: evolve-dev token enumeration complete; legacy frontmatter sibling partition made explicit; S02 citation aligned; verify extended to 117 checks (frontmatter sibling naming ×5 + token guard) | `DONE` | `STAGE_LOCAL:A-008` | PR #6 merged to main@c37fe5c (squash, 7 files); CI run 33474538123 success; audit reports in workspace lab | `2026-09-01T13:41:59+08:00` |
| `A-007` | `Post-delivery evolution and maintenance Skills (evolve-dev, maintenance-dev)` | `ZCode` | Two new Skills per ADR-0002: evolve-dev (Roadmap evolution planning, `ROADMAP EVOLUTION READY`, repositioning boundary) and maintenance-dev (`REFACTOR/DEBT/UPGRADE/RETIRE` campaigns under `SAFETY NET READY` → `BEHAVIOR PRESERVED`, retirement authority trail); contract version `2026-09-01` across five Skills; routing wired in all siblings (incl. project-onboard healthy-repo planning → evolve-dev, Debt table → maintenance-dev); stage template enums extended byte-identically ×5; verify extended to 111 checks; bilingual docs + READMEs + install guide updated to five Skills; evals S20–S26 pre-registered | `DONE` | `STAGE_LOCAL:A-007` | PR #5 merged to main@65f0c38 (squash, 55 files); CI run 33471699187 success; installed copies byte-identical at ~/.agents/skills/ ×5 | `2026-09-01T12:57:29+08:00` |
| `A-006` | `Behavioral eval suite (evals/)` | `ZCode` | Pre-registered 19-scenario live-fire matrix (entry routing, coding-start, project-onboard, feature-dev incl. fix-slice/WIP/version/claims STOPs, combination chains); all 19 PASS with 3 low-severity findings (2 harness-operational, 1 doc clarification suggestion, declared coverage gaps); added `.gitattributes` LF normalization after a recurring CRLF drift broke the byte-identical core check locally | `DONE` | `STAGE_LOCAL:A-006` | `PR #4 merged to main@d042fc0 (squash, 4 files); CI run 33368539159 success (skills:verify 60/60, docs:build, Pages deploy); run report in workspace` | `2026-08-31T15:29:33+08:00` |

## Gate Snapshot

Not applicable: `A-001` was classified as `external` Foundry meta-maintenance, so no Feature Gate projection is claimed.

## Blockers and Conflicts

None.

Resolution record: `C-001` resolved `2026-08-26` — `MaoyuanYang` (Maintainer Decision Authority) classified `A-001 / #1` as `external` Foundry meta-maintenance outside the Feature lifecycle, so no retrospective Spec/Test Design/Plan/Gate records are required.

## Handoffs

None.

## Recently Completed

| Activity ID | Work Item | Member | Outcome | Final Work Status | Final Status Authority | Delivery Evidence | Completed At |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `A-005` | `Resolve deep-review findings across parallel-work contracts (ADR-0001 rev 2)` | `ZCode` | Fixed all 4 HIGH (stale reconstruction docs EN+ZH; contract-version key-line mismatch; REVIEW->IN_PROGRESS fix-slice edge; claim authority + release path), 9 MEDIUM (WIP counting + casing, DR-13 dual clause, projection regeneration five steps, multi-member LOCAL/HYBRID, integration-slice addressability, concurrency staleness, merge-order tie-break, artifact-contracts wording, docs coverage), and LOW items (stage-token glossary, merge authority docs, Landing/README/templates map, guard unification, ADR wording); verify extended to 60 checks; CRLF normalized to LF | `DONE` | `STAGE_LOCAL:A-005` | `PR #3 merged to main@87514c5 (squash, 34 files); CI run 33365169088 success (skills:verify 60/60, docs:build, Pages deploy); installed copies byte-identical at ~/.agents/skills/`; ADR revision 2 Accepted | `2026-08-31T14:41:46+08:00` |
| `A-004` | `Parallel work-item collaboration across Foundry Skills (ADR-0001)` | `ZCode` | Multi-`NEXT` claim model with optional `WIP Limit`; tracker-first coordination with Stage as a projection board; branch-per-work-item integration protocol (L2 semantic-conflict escalation); `IN PR REVIEW` peer-review loop with `PR_REVIEW` stage token and DR-13; TR-11 parallel-integration test family; `foundry_contract_version` drift guard; verify script extended to 47 checks; bilingual docs and new Parallel Work guide synced | `DONE` | `STAGE_LOCAL:A-004` | `PR #2 merged to main@cbb3f69 (squash, 51 files); CI run 33291133171 success (skills:verify 47/47, docs:build, Pages deploy); installed copies byte-identical at ~/.agents/skills/`; ADR `adr/0001-parallel-work-items.md` Accepted | `2026-08-30T11:51:14+08:00` |
| `A-003` | `Skill consistency and language-policy single-sourcing` | `OpenCode` | Unified tokens and template conventions (NEEDS_CLARIFICATION, Fact Status, DR/DUC DONE tables, ADR casing, spec paths, Result domains); single-sourced the Language Policy per skill with a byte-identical anchored Core across all three Skills; added `npm run skills:verify` (37 checks) wired into CI; numbered the Stage write guard; synced bilingual docs and re-installed byte-identical skill copies | `DONE` | `STAGE_LOCAL:A-003` | `Uncommitted changes verified by npm run skills:verify (37/37 PASS), npm run docs:build, and SHA-256 comparison of installed copies` | `2026-08-28T16:42:28+08:00` |
| `A-002` | `System health-check fixes for coding-start / project-onboard / feature-dev` | `OpenCode` | Fixed 1 HIGH + 10 MEDIUM + 30 LOW audit findings across all three Skills, the shared Stage template, and the bilingual docs website; installed copies re-verified byte-identical | `DONE` | `STAGE_LOCAL:A-002` | Uncommitted skill/docs changes verified by grep recheck and `npm run docs:build` | `2026-08-26T21:30:30+08:00` |
| `A-001` | `#1 Add project-wide STAGE.md coordination across Foundry skills` | `OpenCode` | Root `STAGE.md` contract shipped to all three Skills with bilingual docs, write guards, and verified installed copies | `DONE` | [GitHub Issue #1](https://github.com/MaoyuanYang/foundry/issues/1) (closed as completed) | Commit `d8254e9` on `main` | `2026-08-26T16:00:25+08:00` |

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
