---
name: project-onboard
description: "Use ONLY when the user explicitly requests takeover, inventory, or recovery of an existing Brownfield, legacy, or incomplete repository and expects durable baseline, AS-IS documentation, Feature Inventory, and Specs. First entry into an unfamiliar repository alone is not a trigger. Excludes ordinary Q&A, read-only review, diagnosis-only work, Greenfield initialization, and single Feature implementation."
---

# Project Onboard

> Part of **Foundry**, an AI-native, spec-driven development suite. Role: Brownfield takeover (unknown to understood). Siblings: `coding-start`, `feature-dev`.

Recover an unfamiliar existing repository into a verifiable, traceable, transferable `AS-IS` baseline. Understand reality before discussing `TO-BE`. Finish by recommending one next item; never implement it automatically.

## Required Resources

Read resources at the applicable stage rather than improvising from this file:

- Before the survey, read [survey-and-evidence.md](references/survey-and-evidence.md) for scope, evidence labels, conflict handling, and the question threshold.
- After routing is valid and before creating or adopting root `STAGE.md`, read [stage.template.md](assets/stage.template.md); reread it before changing tracking mode or status authority.
- Before baseline verification or architecture reconstruction, read [baseline-and-reconstruction.md](references/baseline-and-reconstruction.md) for command safety, result classification, and backend, data, and frontend reconstruction.
- Before documentation, the AGENTS Update stage, Feature Inventory, AS-IS Specs, or `Recommended Next`, read [as-is-lifecycle.md](references/as-is-lifecycle.md) for artifact ownership, state transitions, and STOP conditions.
- For `docs/onboarding/BASELINE.md` and `docs/onboarding/KNOWLEDGE_GAPS.md`, read [baseline-and-knowledge-gaps.template.md](assets/baseline-and-knowledge-gaps.template.md).
- For canonical `README` and `docs/*`, read [as-is-docs.template.md](assets/as-is-docs.template.md).
- For any scoped `AGENTS.md`, read [agents-update.template.md](assets/agents-update.template.md).
- For `specs/ROADMAP.md` and reconstructed Feature specs, read [feature-inventory-and-spec.template.md](assets/feature-inventory-and-spec.template.md).

Adopt templates selectively. Remove inapplicable `N/A` sections instead of creating empty files for structural symmetry.

## Routing

**Enter only when:** the user explicitly asks to take over, inventory, onboard, or recover durable knowledge for an existing Brownfield, legacy, incomplete, or under-documented repository. First entry into an unknown repository is not sufficient.

After entry is valid, read an existing root `STAGE.md` and verify its linked tracker, Roadmap, Gate, and ref evidence before relying on any projected status. Treat an unexplained duplicate assignment or stale authority as `CONFLICT`; do not overwrite another member's activity.

**Do not enter for:** ordinary Q&A, read-only code review, diagnosis-only bug work, or a one-off explanation. Use `coding-start` for an empty repository or Greenfield project. Use `feature-dev` for the TO-BE design, tests, implementation, or delivery of one selected Feature.

If the repository is effectively empty, STOP onboarding and route to `coding-start`. If takeover and development are requested together, complete onboarding and `STOP`; do not cross into Feature implementation in the same run. If the repository contains documentation but no implementation and the request is ambiguous between initialization and takeover, ask one entry-classification question before proceeding. Project-level multi-Feature planning on a healthy Brownfield repository is outside all three Skills: request an explicit takeover first, or select one Feature for `feature-dev`.

## Authorization Gates

Before the first write, list root `STAGE.md`, the baseline, canonical docs, `AGENTS.md`, `specs/ROADMAP.md`, and Specs that would be created or updated, then obtain explicit local artifact authorization. Without it, perform only the explicitly requested investigation that is proven read-only and `STOP` before any write; onboarding remains incomplete.

Treat commands that may generate build, test, snapshot, codegen, or coverage artifacts as local write side effects. Declare their output boundaries and obtain explicit authorization before running them, even during baseline work. Check the full worktree and local processes after each command.

Local artifact authorization never includes `git commit`, `git push`, a remote Issue or PR/MR, merge, release, deployment, or any other external side effect. Obtain independent explicit authorization for each applicable Git or remote action.

## Non-Negotiable Rules

1. `AS-IS` is currently verifiable behavior. `TO-BE` is desired future behavior. Never mix them.
2. Default evidence order is `Runtime > Tests > Code > DB/Migrations > Config > CI/CD > Docs > Comments > Inference`. It guides investigation and conflict weight, not blind trust.
3. Use only `OBSERVED`, `DOCUMENTED`, `CONFIRMED`, `INFERRED`, `NEEDS_CONFIRMATION`, `CONFLICT`, `UNKNOWN`, and `MISSING`. Never rewrite `INFERRED` as an unlabeled fact.
4. Record conflicting sources, claims, environments, and impact side by side. Never resolve a conflict silently by rank.
5. Existing code, tests, docs, and UI are evidence, not automatic product requirements, correct design, or a Design System.
6. Make no source-code change at any point during onboarding: do not refactor broadly, upgrade dependencies, format the repository, migrate data, batch-fix debt, or make any behavior change, approved or not.
7. Modify only root `STAGE.md`, documentation needed to understand the project, scoped `AGENTS.md`, `specs/ROADMAP.md`, and AS-IS Specs. `STAGE.md` contains current coordination only and MUST NOT become another AS-IS fact source. Record and classify source defects; do not fix them here.
8. Preserve valid repository content and history. Merge incrementally instead of replacing content to fit a template.
9. Keep local artifact authorization separate from Git and remote authorization.

A `Decision Authority` is a named human with authority to approve Roadmap, future specification, or architecture decisions. The named roles are `Maintainer Decision Authority`, `Roadmap Decision Authority`, and `Architecture Decision Authority`. Evidence can confirm AS-IS facts, but the Agent or a requester without the relevant authority cannot self-approve `ADOPTED`, `NEXT`, or an L3 decision.

## Language Policy

This section is the single authoritative Language Policy location for `project-onboard`; its references link here instead of restating the contract.

<!-- lang-policy-core-start -->
Use these exact defaults unless an override is both explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy:

```text
documentation_language = en
engineering_language = en
```

- Documentation Language governs formal artifact prose in README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records.
- Engineering Language governs new class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages.
- Product Content Language follows product requirements and has no default. Record actual BCP-47 value(s) when a product-content surface is known, `UNKNOWN - <resolution action>` while a potentially relevant surface is unresolved, or `N/A - no product-content surface` only when the confirmed scope has no user-facing or localized content. It permits localized resource/configuration values, exact product copy quoted in clearly labeled formal docs, and exact-copy assertions. Surrounding formal prose remains under Documentation Language; executable test names/descriptions, assertion code, and other engineering text remain under Engineering Language.
- Conversation MAY follow the user's language. Conversation language MUST NOT silently override any artifact-language dimension.
- Every override MUST be explicitly requested and approved by a named `Maintainer Decision Authority` empowered for project language policy; the requester is not automatically that authority. Record request source, authority name/role, approval source, scope, and affected artifacts. The Agent MUST NOT self-approve; a solo maintainer MAY hold the `Maintainer Decision Authority` role and approve their own explicit override request, recording request source, approval source, date, and scope like any other approval.
- Before writing or updating a formal artifact, inspect its existing formal-prose language. Excluding clearly labeled exact Product Content, if it is mixed, differs from the resolved Documentation Language, or the update would introduce a second prose language or require translation, record `CONFLICT` and `STOP`. Resume only after a named `Maintainer Decision Authority` approves one whole-document language and the user separately authorizes the required translation/update scope. This gate applies in both language directions.
- Persist every effective value exactly once in the nearest `AGENTS.md` whose scope fully governs it: repository-wide fallbacks and global engineering surfaces belong in root; a subtree-only override belongs in the nearest governing nested file, or root when none exists. Broader files MAY link to that authoritative entry but MUST NOT duplicate its value. Defaults are replaced only within the approved scope.
<!-- lang-policy-core-end -->

Onboarding-specific rules:

- During Preflight, inspect every listed surface, every applicable `AGENTS.md` language rule, and the BCP-47 language values and scopes that the evidence supports. `UNKNOWN` may be recorded during investigation but is unresolved and prevents complete adoption when applicable; evidenced `N/A - no product-content surface` is a resolved state. The language used in the conversation or current request never overrides repository policy.
- If documentation and engineering surfaces are consistently English, preserve that policy. In mixed repositories, new formal artifacts and engineering surfaces use the English defaults unless a scoped override is approved. Preserve existing identifiers and established Product Content Language; never mass-translate existing code comments, docs, identifiers, or product content.
- Every new ID, slug, or technical name must use English under the default Engineering Language and fit repository shape. Only an explicit, authority-approved scoped Engineering Language override may change that value.
- A non-English Documentation or Engineering Language rule is already resolved only when it has a valid scoped BCP-47 value, named authority, explicit `ADOPTED` evidence, source, and date with no conflicting policy. Preserve such an existing override. Otherwise record `CONFLICT` and `STOP`, regardless of nested precedence, until the named authority resolves and adopts it.
- Only a named `Maintainer Decision Authority` may explicitly mark the Language Policy `ADOPTED` or approve an override. Record each value's actual BCP-47 value, scope, authority, evidence, and date. Synchronize the Baseline language table and AS-IS Spec metadata.
- Obtain adoption explicitly: after Language Preflight detection, present the resolved values or the English default proposal to the named `Maintainer Decision Authority` and request explicit `ADOPTED` (or an approved scoped override) before canonical documentation generation. If the authority cannot be reached, record a blocking `NEEDS_CONFIRMATION` in Knowledge Gaps, stop before canonical documentation, and report onboarding incomplete.

A complete authorized onboarding must have the resolved Language Policy explicitly `ADOPTED` by the named `Maintainer Decision Authority` and persist actual BCP-47 values for Documentation and Engineering Language plus either actual Product Content BCP-47 value(s) or evidenced `N/A - no product-content surface` in the single authoritative `AGENTS.md` location for each scope. Under the defaults, the section is English. After an approved Documentation Language override, render its prose consistently in that resolved language while preserving the exact ASCII policy keys. Onboarding remains incomplete while adoption, resolution, synchronization, or persistence is missing.

## Status Vocabulary

- Evidence labels: only the eight labels above.
- Baseline result: `PASS | FAIL | UNAVAILABLE | SKIPPED`.
- Feature implementation state: `IMPLEMENTED | PARTIAL | BROKEN | UNKNOWN | DEPRECATED`.
- Roadmap work status: Brownfield survey may use `UNTRACKED`; an adopted workflow uses `DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED`.
- AS-IS Spec status: only `AS_IS_DRAFT | RECONSTRUCTED`; onboarding never promotes it to `READY`.
- Recommendation-selection metadata: `RECOMMENDED | SELECTED`; it is not Work Status.

Feature implementation state, Roadmap work status, Spec status, and recommendation-selection metadata are independent dimensions and never substitute for one another. Test stability uses `STABLE | FLAKY | UNKNOWN`, and Baseline coverage confidence uses `high | medium | low`. Feature lifecycle artifacts and Gates named in this Skill's controlled surfaces (Test Design documents, Implementation Plans, Review documents, Done Checklists, Delivery Records, `SPEC READY`, `UI READY`, `TEST DESIGN READY`) belong to the `feature-dev` vocabulary.

## Workflow

### 0. Preflight

1. Identify repository root, current `commit/ref`, branch, worktree state, and monorepo subprojects. Record `UNAVAILABLE` when Git is absent.
2. Before commands or writes, read all applicable `AGENTS.md` files from root to target, plus contribution and safety guidance.
3. Identify pre-existing user changes. Never overwrite, revert, or classify them as baseline failures.
4. Define survey scope across applications, shared libraries, stores, deployment units, frontend, tests, and docs.
5. Detect every Documentation, Engineering, and Product Content Language surface above; record detected and resolved BCP-47 values or the allowed Product Content `UNKNOWN/N/A` state, applicable AGENTS rules, scope, conflicts, authority, and adoption state.

After valid routing and explicit local artifact authorization, create or incrementally adopt root `STAGE.md` from the Stage template. Use these exact onboarding stage tokens: `PREFLIGHT`, `REPOSITORY_SURVEY`, `BASELINE_VERIFICATION`, `ARCHITECTURE_RECONSTRUCTION`, `FRONTEND_RECONSTRUCTION`, `DOCS_REALITY`, `KNOWLEDGE_GAPS`, `CANONICAL_DOCUMENTATION`, `AGENTS_UPDATE`, `FEATURE_INVENTORY`, `AS_IS_SPEC_RECONSTRUCTION`, `NEXT_RECOMMENDATION`, and `COMPLETE`. Increment the snapshot only at a meaningful transition, block/resume, assignment, handoff, or completion. For every Stage write, run this guard in order: (1) reread the latest `STAGE.md` and every linked authority; (2) compare the snapshot revision and SHA-256 against the previous read and abort/reconcile on any change; (3) update only the current activity and directly affected coordination rows, preserving every unrelated member; (4) record the prior revision/hash as `Parent Snapshot` and increment the snapshot revision; (5) write; (6) reread after writing and stop on a duplicate ID or unexpected result. Serialize through the repository lock or designated canonical writer when one exists; if neither serialization nor hash comparison is available, `STOP` before writing. Allocate `A-xxx` under the same guard, and never treat a divergent worktree copy as live state before canonical reconciliation. A Stage projection never upgrades evidence or Work Status.

### 1. Repository Survey

Follow [survey-and-evidence.md](references/survey-and-evidence.md) from outside in. Build a repository/module map and evidence ledger covering toolchains, runtime and deployment units, data, external systems, frontend, tests, and docs. Map first, then trace representative startup, read, write, authorization, and user flows. Keep locatable file/line, command, route/UI, migration, or runtime evidence for important claims; do not traverse the whole repository without purpose.

### 2. Baseline Verification

Before any source change, read [baseline-and-reconstruction.md](references/baseline-and-reconstruction.md) and the [baseline template](assets/baseline-and-knowledge-gaps.template.md). Verify where applicable, in order: backend/general build, existing tests, smoke test, application startup, frontend build, and frontend tests.

For each item, record exact command, working directory, environment and versions, dependency/service conditions, `commit/ref`, result, key output, and duration. Mark failures as `pre-existing failure` with reproduction details. Use disposable, isolated local data for tests, smoke, and startup; ask first when isolation is uncertain. After each command, inspect tracked, relevant untracked, and expected ignored outputs, plus residual processes and services. On an unexpected diff, snapshot/codegen update, or unknown persistent-data write, record evidence and pause without cleanup or overwrite.

Ask before any dangerous, destructive, costly, production-connected, externally writing, secret-dependent, paid, or uncontrolled command. Use `SKIPPED` when intentionally not run and `UNAVAILABLE` when prerequisites are absent. Write authorized results and the complete language-surface detection matrix to `docs/onboarding/BASELINE.md`.

### 3. Architecture Reconstruction

Use [baseline-and-reconstruction.md](references/baseline-and-reconstruction.md) to cross-check entry points, data, and observable boundaries. Recover current modules, responsibilities, dependencies, critical flows, sources of truth, runtime/deployment, external services, and test protection. Record only labeled AS-IS facts, risks, and unknowns; do not optimize the design.

### 4. Conditional Frontend/UI Reconstruction

Only for a user-facing UI, recover engineering structure, Page/Screen Map, flows, components and state, API/auth/forms/errors, tests, tokens, interaction states, responsive behavior, and accessibility. With no UI, record `N/A` in the Baseline Coverage Summary `Frontend/UI` row and create no placeholder doc. An observed pattern is not a standard; record inconsistencies as `CONFLICT` or Technical Debt.

### 5. Docs-vs-Reality

Compare evidence layers and current UI as directed by [survey-and-evidence.md](references/survey-and-evidence.md). Incrementally correct stale documentation only when evidence and Language Policy allow it, preserving the basis for the change. Otherwise retain `CONFLICT` or `NEEDS_CONFIRMATION`.

### 6. Knowledge Gaps and Clarification

After exhausting repository evidence, use the [baseline and knowledge-gaps template](assets/baseline-and-knowledge-gaps.template.md) to record conflicts, unknowns, missing items, impact, smallest validation action, and Technical Debt. Ask only high-impact questions that could change understanding or selection and cannot be answered from the repository. Keep unanswered items as `NEEDS_CONFIRMATION`. Classify and recommend debt; do not batch-fix it.

### 7. Canonical AS-IS Documentation

Read [as-is-docs.template.md](assets/as-is-docs.template.md), then incrementally create or update only applicable artifacts:

- `README.md` for trustworthy entry, prerequisites, start/build/test commands, and navigation.
- `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, `docs/DATABASE.md`, `docs/API.md`, and `docs/TESTING.md`.
- With a frontend/UI that baseline evidence justifies documenting: `docs/FRONTEND.md`, `docs/UX.md`, `docs/UI.md`, and `docs/DESIGN_SYSTEM.md`.
- `docs/adr/` only to preserve or index evidenced historical decisions. Never invent an ADR when historical reasoning is unknown.
- Root `STAGE.md` for the live project/member snapshot, authority links, blockers, and handoff. It MUST NOT contain canonical AS-IS behavior or duplicate the Feature Inventory.

Put canonical facts in `README.md`, `AGENTS.md`, or the responsible `docs/*`, not temporary survey notes. Preserve valid content, correct evidenced stale claims, label unknowns and conflicts, and update only applicable documents.

### 8. AGENTS Update

Read [agents-update.template.md](assets/agents-update.template.md) and incrementally maintain scoped `AGENTS.md` files:

1. Preserve valid rules and scope.
2. `CONFIRMED` AS-IS evidence does not create a future rule. Every durable rule, including the Language Policy, requires a named `Maintainer Decision Authority` to mark it explicitly `ADOPTED`.
3. If this workflow is adopted, record the full DRAFT/AS-IS through Spec, UI, Test, Plan, Coding, Review, Docs, delivery, and DONE lifecycle, plus tracking/delivery mode and the single work-status authority.
4. State that Spec defines what is correct, Issue or a Stage-local authority tracks where work is, `STAGE.md` shows the project/member snapshot, PR/Delivery Record records code changes, and ADR records why a significant decision was made.
5. Persist the adopted Language Policy with actual Documentation and Engineering BCP-47 values, the resolved Product Content value or evidenced `N/A - no product-content surface`, scope, authority, and synchronization record. An `UNKNOWN` Product Content state may be recorded but prevents completion while applicable. Do not record current progress, debug logs, one-off workarounds, unconfirmed inference, or temporary Feature status.
6. Record that current progress and multi-member coordination belong in root `STAGE.md`; durable rules remain here. In remote tracking mode the tracker owns a bound work item's Work Status. In local mode the explicitly identified `STAGE_LOCAL:<Activity ID>` row may own that status after Feature work begins.

### 9. Feature Inventory

Read the [Feature Inventory and Spec template](assets/feature-inventory-and-spec.template.md). Recover user or business capability boundaries from runtime, routes/API, UI, tests, domain flows, and historical docs. Merge into the single `specs/ROADMAP.md`; never create a parallel Feature Inventory. Record implementation state, work status, dependencies, current behavior, evidence, conflicts/unknowns, and test coverage separately. Group by understandable capability or outcome, not each endpoint, class, or component. Preserve existing IDs and valid Roadmap information. Every new ID, slug, or technical name must fit repository shape and use the resolved Engineering Language, English by default.

### 10. AS-IS Spec Reconstruction

Follow the repository's existing spec path, or default to `specs/<feature-id>-<slug>/spec.md`. New path IDs and slugs follow the resolved Engineering Language and repository shape. Reconstruct current behavior, rules, flows, states, data/API/UI effects, errors, dependencies, evidence, conflicts, unknowns, and test coverage.

- Use `RECONSTRUCTED` when critical behavior is traceable and sufficiently evidenced.
- Use `AS_IS_DRAFT` when critical behavior, boundaries, or conflicts remain unresolved.
- Never write `READY` or fill gaps with guesses.

Every spec needs a `TO-BE Handoff`: later, `feature-dev` decides what to preserve, change, or remove, creates the TO-BE Spec, and passes `SPEC READY` before implementation.

### 11. Recommend One Next Item

Use confirmed priority, broken core flows, security/data risk, blockers, implementation completeness, and test protection to recommend one item. `Recommended Next` is a proposal; `Work Status: NEXT` is a selection by the `Roadmap Decision Authority`.

- Record rationale, dependencies, risks, alternatives, evidence label, and recommendation-selection metadata: `RECOMMENDED` until selected, then `SELECTED` only through the named `Roadmap Decision Authority` or authoritative tracker.
- Set `NEXT` only after explicit confirmation by the named authority or proof from the authoritative tracker.
- Otherwise preserve status; use `UNTRACKED` where no historical tracking exists and label an inferred recommendation `INFERRED`.
- If multiple existing `NEXT` items exist, record `CONFLICT` and request confirmation. Never silently rewrite team status.
- Reconcile the `STAGE.md` project summary and onboarding activity from the Roadmap and recommendation result. The Roadmap remains authoritative for Feature ordering and onboarding-era status; Stage records the handoff target and exact resume point only.

## Design Change Boundary

Onboarding corrects documentation to match evidenced `AS-IS`. Every L1/L2/L3 change to behavior, requirements, or design requires the named Decision Authority for its scope; any durable AGENTS rule also requires explicit `ADOPTED` status from the named `Maintainer Decision Authority`. Hand TO-BE proposals to `feature-dev` under [as-is-lifecycle.md](references/as-is-lifecycle.md). For L3, onboarding records only evidence, impact, the required `Architecture Decision Authority`, and the future ADR requirement. `feature-dev`, not onboarding, confirms the future decision and creates the design ADR. Never fabricate historical rationale or modify code/tests here.

## Completion Gate and STOP

Read-only mode ends before the first write and must report onboarding incomplete. A complete authorized onboarding passes only when:

- Survey, baseline, architecture, and applicable frontend/UI reconstruction are complete or have explicit `UNAVAILABLE/SKIPPED` reasons.
- `docs/onboarding/BASELINE.md` records ref, environment, commands, results, and pre-existing failures.
- Docs-vs-Reality conflicts, Knowledge Gaps, and necessary clarifications remain explicit.
- Canonical docs and `AGENTS.md` were updated incrementally, without presenting inference as fact.
- The Language Policy is explicitly `ADOPTED` by the named `Maintainer Decision Authority`; actual Documentation and Engineering BCP-47 values and the resolved Product Content value or evidenced `N/A - no product-content surface` are synchronized with scope in the single authoritative `AGENTS.md` policy location for each value, plus Baseline and AS-IS Spec metadata, with no duplicate policy values or unresolved language conflict.
- Feature Inventory exists only in `specs/ROADMAP.md`, with independent status dimensions.
- AS-IS Specs use only `AS_IS_DRAFT/RECONSTRUCTED` and include evidence, conflicts, unknowns, test coverage, and a TO-BE handoff.
- One evidenced `Recommended Next` is recorded. A unique `Work Status: NEXT` exists only if confirmed.
- `STAGE.md` identifies the onboarding activity, current project phase, tracking mode, linked authorities, conflicts/blockers, and exact handoff or resume point without duplicating AS-IS facts or another member's work.
- No unresolved Stage binding, freshness, revision/hash, activity identity, duplicate assignment, or authority-transfer conflict affects the onboarding handoff or completion.
- Every resource link resolves; no empty or meaningless artifact was created.
- No source behavior, broad refactor, or batch Technical Debt fix occurred.

Report the baseline summary, created/updated docs, major conflicts and gaps, Feature Inventory and AS-IS Spec status, `Recommended Next`, its evidence label, whether it became `NEXT`, the resolved Language Policy, and the `STAGE.md` snapshot revision/current activity/handoff. A blocking halt earlier in this file is also written `STOP`, but it always names the blocker and resume condition; the terminal `STOP` below means this onboarding report is complete. Then output exactly:

```text
STOP
```

Do not invoke `feature-dev`, create an implementation plan, or begin Coding automatically.
