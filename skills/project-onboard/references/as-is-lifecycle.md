# AS-IS Lifecycle and Handoff

## Lifecycle

```text
Preflight (PREFLIGHT)
-> Repository Survey (REPOSITORY_SURVEY)
-> Baseline Verification (BASELINE_VERIFICATION)
-> Architecture Reconstruction (ARCHITECTURE_RECONSTRUCTION)
-> Frontend/UI Reconstruction (FRONTEND_RECONSTRUCTION, conditional)
-> Docs-vs-Reality (DOCS_REALITY)
-> Knowledge Gaps / Clarification (KNOWLEDGE_GAPS)
-> Canonical AS-IS Docs (CANONICAL_DOCUMENTATION)
-> AGENTS Update (AGENTS_UPDATE)
-> Feature Inventory (FEATURE_INVENTORY)
-> AS-IS Specs (AS_IS_SPEC_RECONSTRUCTION)
-> One Recommended Next (NEXT_RECOMMENDATION)
-> COMPLETE
-> STOP
```

This workflow ends when the project can be developed safely by the next workflow, not when the project has been optimized.

Root `STAGE.md` checkpoints this workflow for all active humans and Agents. It records the exact onboarding stage, blocker or handoff, repository ref, and authority links. It is not AS-IS evidence and never substitutes for the Baseline, canonical docs, Roadmap, or Specs.

## AS-IS and TO-BE

```text
AS-IS
= currently verifiable behavior, structure, constraints, defects, and unknowns

TO-BE
= confirmed future behavior and design to preserve, change, or add
```

Onboarding reconstructs only AS-IS. Later, `feature-dev` runs the selected Feature through:

```text
AS_IS_DRAFT / RECONSTRUCTED
-> Current Behavior Confirmation
-> Preserve / Change / Remove Decisions
-> TO-BE Spec
-> SPEC READY
-> UI READY (if applicable)
-> TEST DESIGN READY
-> Implementation
```

Do not turn "the code already does this" into a required future rule. Do not put a proposal into AS-IS merely because the Agent considers it better.

## Single Responsibility of Each Artifact

| Artifact | Responsibility |
|---|---|
| `README.md` | Fast entry, real prerequisites, start/build/test commands, and documentation navigation. |
| `docs/PRODUCT.md` | Known product purpose, users, current capabilities, scope, and unknowns. |
| `docs/ARCHITECTURE.md` | Current structure, boundaries, dependencies, flows, runtime, and deployment. |
| `docs/DATABASE.md` | Current sources of truth, entities, relations, constraints, transactions, and cache behavior. |
| `docs/API.md` | Current interface style, auth, errors, pagination, and verifiable interface state. |
| `docs/FRONTEND.md` | Conditional: current frontend architecture, routing, state, APIs, build, and tests. |
| `docs/UX.md` | Conditional: current user flows, information architecture, navigation, interaction states, and usability. |
| `docs/UI.md` | Conditional: current page structures, UI patterns, and state presentation. |
| `docs/DESIGN_SYSTEM.md` | Conditional: confirmed tokens, components, conventions, and inconsistencies. |
| `docs/TESTING.md` | Current testing reality, commands, layers, environment, coverage, and gaps. |
| `docs/onboarding/BASELINE.md` | Reproducible runtime snapshot for the takeover ref/environment. |
| `docs/onboarding/KNOWLEDGE_GAPS.md` | Unresolved conflicts, unknowns, missing items, clarification, and Technical Debt recommendations. |
| `AGENTS.md` | Confirmed long-lived AI Coding rules for its scope, including the resolved Language Policy. |
| `STAGE.md` | Current project phase, active-member coordination, onboarding stage, blockers/conflicts, handoffs, resume points, and authority links. |
| `specs/ROADMAP.md` | The single Feature Inventory, dependencies, and work ordering. |
| Feature `spec.md` | Evidenced AS-IS characterization of how one capability currently works. |

Do not create `FEATURE_INVENTORY.md`, `PROJECT_NOTES.md`, or another architecture source of truth. `STAGE.md` is allowed only for current coordination and authority links; it MUST NOT retain architecture findings or survey notes. Merge temporary findings into their owning artifacts or remove them.

## Incremental Documentation Maintenance

1. Read existing docs and classify valid, stale, conflicting, and unknown material.
2. Preserve valid links, maintainer rules, identifiers, and established user-facing product language.
3. Correct clearly stale AS-IS facts only with sufficient evidence. Keep onboarding baseline and original Feature Spec AS-IS sections historically traceable. Later delivery updates canonical docs to `Perspective: CURRENT` instead of rewriting the baseline.
4. Keep unresolved claims side by side; never let a new document silently erase an old claim.
5. Separate current fact, historical decision, and future suggestion. Put suggestions in gaps or Roadmap, not AS-IS prose.
6. Create only applicable docs; a backend-only project needs no empty UX/UI/Design System file.
7. Never fabricate historical ADRs. If context, decision, or reasoning cannot be proved, record the reasoning as `UNKNOWN`.

Before updating a formal artifact, apply the bidirectional mixed-document gate and the conflict rules defined in this Skill's `SKILL.md` Language Policy.

## Knowledge Gaps and Clarification

A Knowledge Gap is not an unfiltered question list. Each item needs an evidence state, impact, and smallest resolution action. Prioritize gaps that prevent:

- safe baseline execution;
- explanation of core business behavior or source of truth;
- separation of pre-existing failure from environment failure;
- identification of Feature boundaries, dependencies, or implementation state;
- a responsible `Recommended Next`;
- resolution and persistence of the Language Policy.

Ask a person only when the repository cannot answer. After an answer, update the responsible canonical doc and change `NEEDS_CONFIRMATION` to `CONFIRMED`, retaining source and date. Keep unanswered items explicit.

## Rules Eligible for AGENTS

Content enters `AGENTS.md` only when it is long-lived, scoped, relevant to future Coding, confirmed as AS-IS, and explicitly marked `ADOPTED` as a future rule by a named `Maintainer Decision Authority`. `CONFIRMED` legacy behavior alone is insufficient. Typical content includes:

- Build/test/start commands and working directories.
- Module dependencies and architecture constraints.
- Data, API, migration, security, and testing rules.
- Stable coding conventions and repeated pitfalls.
- Conditional UI/UX, component reuse, Design System, responsive, and accessibility rules.
- Spec lifecycle, artifact responsibilities, and Design Change policy.
- The resolved Documentation, Engineering, and Product Content Language Policy, explicitly `ADOPTED` by the named `Maintainer Decision Authority` and stored with actual Documentation and Engineering BCP-47 values plus the resolved Product Content value or evidenced `N/A - no product-content surface`, with scope.

Do not include one-time baseline failures, current progress, temporary workarounds, personal preference, or inference.

## Feature Inventory

A Feature represents a user outcome or business capability. Each row answers three separate questions:

1. Current implementation: `IMPLEMENTED | PARTIAL | BROKEN | UNKNOWN | DEPRECATED`.
2. Work ordering: `UNTRACKED` during Brownfield survey, then `DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED` under an adopted workflow.
3. AS-IS Spec confidence: `AS_IS_DRAFT | RECONSTRUCTED`.

Classify implementation state from behavioral evidence:

- `IMPLEMENTED`: core current behavior works with no known blocking gap.
- `PARTIAL`: part exists, but a critical path, state, or role is missing or unusable.
- `BROKEN`: evidence shows that an expected core path currently fails.
- `UNKNOWN`: evidence is insufficient for a responsible judgment.
- `DEPRECATED`: explicit evidence shows retirement; dead-looking code alone is insufficient.

Do not create a Feature for every endpoint, table, or component. Preserve stable IDs and group UI, API, data, and test evidence for the same capability. Every new ID, slug, or technical name uses English and fits repository shape unless an explicit, authority-approved scoped Engineering Language override applies.

## AS-IS Spec

`RECONSTRUCTED` requires traceable critical current flows, rules, boundaries, evidence, and major unknowns; non-critical unknowns may remain. Use `AS_IS_DRAFT` when core behavior or conflicts are unclear.

An AS-IS Spec includes at least:

- Current goal/outcome, actors, entry, and preconditions.
- Current main, alternative, and error flows plus state transitions.
- Current business rules, data/API/UI behavior, and dependencies.
- Evidence ledger, Docs-vs-Reality conflicts, and unknowns.
- Existing test coverage and broken, skipped, or flaky state.
- A `TO-BE Handoff` listing preserve/change/remove decisions for later confirmation.

It is a characterization, not approval of legacy behavior, and it never passes the `SPEC READY` gate.

## Recommendation Selection Metadata

Ordering signals, highest first:

1. Business priority confirmed by the `Roadmap Decision Authority` or authoritative tracker.
2. Evidenced security, data-integrity, or core-flow risk.
3. A foundational gap blocking other work or reliable verification.
4. A `BROKEN/PARTIAL` capability with reasonably clear value, boundary, and dependencies.
5. A small complete vertical slice that reduces the greatest uncertainty.

Always provide one `Recommended Next`. `RECOMMENDED` means onboarding proposes it; `SELECTED` means the named `Roadmap Decision Authority` or authoritative tracker selected it. These values are recommendation-selection metadata, never Work Status. Label an assumption-based recommendation `INFERRED` and explain why alternatives are deferred. Set Work Status to the unique `NEXT` only through that authority; otherwise preserve `UNTRACKED` or the existing status. `NEXT` is not `READY`: the next run uses `feature-dev` to complete TO-BE and gates first.

After selection or recommendation, reconcile `STAGE.md` from the Roadmap and authoritative tracker. Record the target work item, `feature-dev` handoff, required inputs, and exact resume stage. Do not copy the Feature Inventory, recommendation analysis, or AS-IS Spec into Stage.

## Technical Debt and Design Change

Classify Technical Debt as architecture, data, testing, security, operations, frontend, UX, UI, accessibility, or docs. Record evidence, impact, scope, and recommended handling. Identify, classify, record, and recommend only; never batch-fix it during onboarding.

Classify future changes by impact:

- `L1`: Feature-local. The named Decision Authority for the Feature approves the change; update its TO-BE Spec, acceptance, tests, and affected design.
- `L2`: Cross-Feature. The named Decision Authorities for all affected Features approve the change; synchronize related Specs, Roadmap, canonical docs, and tests.
- `L3`: Architectural. The named `Architecture Decision Authority` approves the future decision. Onboarding records only evidence, impact, that required authority, and the future ADR requirement. After confirmation, `feature-dev` creates the future design ADR and updates affected rules, designs, Specs, and tests. If historical reasoning is unknown, record `UNKNOWN` rather than backfilling an ADR.

Any durable AGENTS policy generated from L1/L2/L3 work also requires explicit `ADOPTED` status from the named `Maintainer Decision Authority`.

Onboarding records proposals only. Any later code change first updates what is correct and how correctness will be proved.

## STOP Gate

Baseline failures, unknowns, and missing items may remain if recorded accurately. Completion requires:

- Reproducible current ref/environment and pre-existing failures.
- Architecture, data, runtime, and conditional frontend/UI reconstructed to a transferable level.
- No responsibility drift among canonical docs, `AGENTS.md`, Roadmap, and AS-IS Specs.
- `STAGE.md` agrees with its linked authorities, preserves every unrelated active member, and exposes the current onboarding activity plus exact blocker or handoff.
- Explicit labels for every conflict, unknown, and inference.
- Language Policy explicitly `ADOPTED` by the named `Maintainer Decision Authority`, persisted with actual Documentation and Engineering BCP-47 values plus the resolved Product Content value or evidenced `N/A - no product-content surface` and scope in `AGENTS.md`, and synchronized to Baseline and AS-IS Spec metadata, with no blocking language conflict.
- One evidenced `Recommended Next`; any `Work Status: NEXT` is confirmed and unique.
- No business-behavior change and no start of later Feature implementation.

Finish with explicit `STOP` and wait for the user to decide whether to start `feature-dev`.
