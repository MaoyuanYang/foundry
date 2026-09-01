# ADR-0002: Post-Delivery Evolution and Maintenance Skills

| Field | Value |
| --- | --- |
| Status | `Accepted` |
| Date | `2026-09-01` |
| Architecture Decision Authority | `MaoyuanYang` (Maintainer Decision Authority) |
| Approval source | ZCode planning session; gap assessment with two read-only evidence sweeps across skills, docs, evals; user-approved two-skill plan |
| Approval scope | All five Foundry Skills, shared templates, `scripts/verify-skills.mjs`, bilingual documentation, evals |
| Decision revision | `1` |

## Context

- The suite claims "continuous feature delivery", and single-feature iteration is genuinely covered: `feature-dev` is the 1 → N loop, a Bug/Change to a `DONE` Feature uses a new work-item ID, and ADR-0001 added parallel claims, integration, and PR peer review.
- Five post-delivery work classes have no owning workflow:
  1. **Roadmap evolution.** `project-onboard/SKILL.md` states "Project-level multi-Feature planning on a healthy Brownfield repository is outside all three Skills"; `coding-start` is entry-only on a baseline-less repository; `feature-dev` advances exactly one already-selected work item. Adding a new Feature wave (new Roadmap entries, DRAFT Specs, re-prioritization, incremental macro-baseline updates) routes nowhere.
  2. **Behavior-preserving refactoring.** The only carve-out ("a reversible implementation refinement that changes no requirements, contracts, or observable behavior updates only the Plan") applies inside an already-bound Feature work item; there is no path to *initiate* a refactor work item, and coding constraints push against opportunistic refactoring.
  3. **Technical-debt campaigns.** `project-onboard` mandates "identify, classify, record, and recommend only; never batch-fix it"; the produced Debt table has no downstream consumer in any Skill.
  4. **Dependency/framework upgrades.** Only prohibitions ("MUST NOT introduce a major dependency without approval") and the reactive L3 "Major Tech Choice" path exist; no upgrade campaign, breaking-change sweep, or staged-migration workflow.
  5. **Deprecation/removal.** `DEPRECATED` is an evidence label and the TO-BE Handoff names preserve/change/remove, but no stage, Gate, or checklist executes a retirement.
- `MAINTENANCE` exists only as a Project Phase enum value in the shared Stage template; no Skill defines what happens in that phase. The eval suite (S01–S19) contains no scenario for any of the five classes.

## Decision

1. **Two new Skills, mirroring the existing planning/execution split.** `evolve-dev` (post-delivery evolution planning: Roadmap evolution on a trusted baseline; produces Feature entries and DRAFT Specs, never business code) and `maintenance-dev` (maintenance engineering: behavior-preserving refactor slices, technical-debt campaigns, dependency/framework upgrades, and deprecation/removal; produces code under a safety net). This replicates the `coding-start` (planning, no code) vs `feature-dev` (execution, code) division for the post-delivery world.
2. **`evolve-dev` contract.** Incremental discovery on a healthy managed repository, a mandatory challenge pass, then `ROADMAP EVOLUTION READY` as its sole Gate: new Roadmap entries with stable IDs, DRAFT Specs that stay `DRAFT` with Open Questions, priority changes confirmed by the named Roadmap Decision Authority, and incremental macro-baseline updates. A new direction that would overturn the macro baseline (product repositioning) `STOP`s for an explicit user decision to redo macro design; implementation is handed back to `feature-dev`, never started here.
3. **`maintenance-dev` contract.** Four branches share one skeleton: `SAFETY NET READY` (characterization tests recorded as evidence where coverage is insufficient; no slicing without a safety net) → ordered slices, each independently verifiable and deliverable → `BEHAVIOR PRESERVED` (recorded behavior-preservation verification per slice and for the campaign). Deprecation/removal changes observable behavior: it requires named Decision Authority confirmation of the intended behavior change and a recorded retirement plan (announcement, consumer migration, removal slice, documentation sync) before any removal slice runs.
4. **ADR-0001 protocol inherited unchanged.** Both Skills reuse the Roadmap work-status vocabulary, tracker-first authority (REMOTE/LOCAL/HYBRID), branch-per-work-item integration, the Stage write guard, and the `foundry_contract_version` drift guard.
5. **Contract version advanced to `2026-09-01`** across all five Skills. Adopting repositories that recorded `2026-08-30` will `STOP` at Skill entry until the Maintainer Decision Authority approves the recorded-value advance and the installed copies are synchronized; this is the designed drift-guard behavior.

## Alternatives Considered

- **One new Skill with five branches** (`evolve-dev` covering planning plus all maintenance classes): rejected. It would carry two non-sharing state machines (an interview/planning loop and a safety-net/verification loop), a mixed Gate vocabulary, and an unwieldy five-trigger entry description; the sibling Skills stay at 217–256 lines precisely because each carries one sharp contract.
- **Fold Roadmap evolution back into `coding-start` as an incremental mode, add only `maintenance-dev`**: rejected. It would rewrite the shipped entry rules of `coding-start` (currently "MUST NOT enter when a credible macro baseline exists"), invalidate existing routing assertions in S01–S05, and make one Skill two-mode.
- **Extend `feature-dev` with refactor/upgrade/deprecation Change branches**: rejected. `feature-dev` already runs 233 lines with the densest Gate chain; maintenance semantics (safety nets, behavior preservation, campaigns) would dilute its single-work-item delivery contract.
- **Documentation-only guidance** ("model a refactor as a `feature-dev` Change work item"): rejected. The guardrails that push against maintenance work inside Feature runs ("modify only what the current Feature requires") would keep contradicting the guidance.

## Consequences

- The suite grows from three to five Skills; README badges, the skills table, the lifecycle diagram, install instructions, and the routing entries of all three existing Skills change. `project-onboard`'s "outside all three Skills" sentence now routes Roadmap-evolution requests to `evolve-dev`, and its Technical Debt section points to `maintenance-dev` as the consuming workflow.
- New Gate vocabulary (`ROADMAP EVOLUTION READY`, `SAFETY NET READY`, `BEHAVIOR PRESERVED`) joins the Stage Gate Snapshot enum; the shared Stage template's Skill enum gains both new Skills; all five `stage.template.md` copies remain byte-identical.
- The consistency net grows accordingly: `scripts/verify-skills.mjs` covers five Skills (anchored language-policy core, stage template identity, contract version, siblings cross-references, new Gate tokens, placeholder and checklist self-checks), and the bilingual documentation website mirrors both new Skill sections plus the redefined post-delivery phases.
- Evals gain S20–S26 (routing and gating for both new Skills). Existing S01–S19 assertions are unchanged.
- Safety model unchanged: local-write authorization never implies Git or remote side effects; every authorization class, Decision Authority rule, and STOP discipline from the existing Skills applies verbatim.
