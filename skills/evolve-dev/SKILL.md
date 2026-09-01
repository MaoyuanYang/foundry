---
name: evolve-dev
description: "Use ONLY when the user explicitly asks for post-delivery Roadmap evolution on a repository with a credible macro baseline: planning a new Feature wave, adding Roadmap entries, re-prioritizing, or incrementally updating the macro baseline. Produces Feature entries and DRAFT Specs only; never business code. MUST NOT be used for implementing one Feature (feature-dev), Greenfield initialization (coding-start), unknown-repository takeover (project-onboard), maintenance engineering such as refactoring, debt paydown, dependency upgrades, or deprecation (maintenance-dev), or read-only evaluation."
---

# Evolve Dev

> Part of **Foundry**, an AI-native, spec-driven development suite. Role: Post-delivery evolution planning (N to N'). Siblings: `coding-start`, `project-onboard`, `feature-dev`, `maintenance-dev`.
> Foundry contract version: `2026-09-01`.

Evolve a delivered project's Roadmap on the user's explicit request: turn a new direction, learned constraint, or delivery wave into confirmed Roadmap entries, DRAFT Specs, and re-prioritized ordering — without touching implementation. This Skill plans the next increment of *what*; `feature-dev` remains the only path that implements it.

## Entry Decision

Inspect only enough of the target repository to classify the request and verify the baseline before relying on it. Read an existing root `STAGE.md` as the coordination snapshot, but verify every linked authority before relying on a projected status.

Enter only when:

- The user explicitly asks to plan the next phase: add a Feature wave, extend the Roadmap, re-prioritize, or update the macro baseline incrementally.
- The repository has a credible macro baseline: it already documents product scope, system boundaries, the test method, the current Roadmap, trustworthy Brownfield AS-IS where applicable, and a valid persisted Language Policy.
- The request is project-level planning across one or more candidate Features, not the implementation of one selected work item.

MUST NOT enter when:

- The user asks to implement, fix, or deliver one selected Feature, Change, or Bug. `STOP` and recommend `feature-dev`.
- The repository has no credible baseline. `STOP` and recommend `coding-start` (Greenfield) or `project-onboard` (unknown or untrusted Brownfield).
- The user asks for maintenance engineering — refactoring, technical-debt paydown, dependency or framework upgrades, deprecation or removal. `STOP` and recommend `maintenance-dev`.
- The user only wants discussion, evaluation, or a read-only Roadmap review. Answer if useful, but MUST stop before artifact generation without explicit local-write authorization.
- The new direction would overturn the macro baseline itself: a product repositioning, a new core user base, or replacing the primary product goal. This is beyond incremental evolution; report the boundary, and `STOP` for an explicit user decision to redo macro design. Never silently rewrite the baseline in the name of evolution.

If root `AGENTS.md` records `foundry_contract_version` and it differs from this Skill's contract version recorded above, report both values and `STOP` until the installed Skill copy is synchronized with the repository contract.

Before the first file write, list every path to be created or updated, including root `STAGE.md`, and obtain explicit local-write authorization. Planning confirmation is not file-write authorization. Without write authorization, report the planning result, state that evolution is incomplete, and `STOP`.

## Non-Negotiable Boundaries

- MUST NOT write business code, tests, migrations, schemas, or scaffolding; implementation belongs to `feature-dev`.
- MUST NOT mature a Spec: every Spec produced or touched here remains `DRAFT` with Open Questions; running `SPEC READY` belongs to `feature-dev`.
- MUST NOT freeze DTOs, fields, classes, components, message topics, or pixel details in evolution artifacts.
- MUST NOT create Feature implementation Issues or PRs, and MUST NOT reassign another member's claimed work item. `NEXT` selection confirms claims only for items with no active claimant.
- MUST NOT delete or rewrite existing Roadmap history, Feature IDs, or delivered delivery records; evolution appends and re-orders, it does not erase.
- Local-write authorization does not authorize `git commit/push`, remote Issues/PRs, merge, or release. Each Git or remote side effect requires separate explicit authorization.
- A priority change on an item another member has claimed is a coordination action, not a planning edit: record it as `NEEDS_CONFIRMATION` and `STOP` the affected change unless that member or the named Roadmap Decision Authority confirms.

## Language Policy

This section is the single authoritative Language Policy location for `evolve-dev`. During Preflight, read every applicable `AGENTS.md` from repository root to working directory and resolve the language matrix from the canonical Core:

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

Evolution-specific rules:

- Every Documentation or Engineering Language value MUST be inherited from a valid applicable `AGENTS.md` policy. If a dimension is missing, propose the exact default `documentation_language = en` or `engineering_language = en`, then `STOP` until a named `Maintainer Decision Authority` adopts it and an authorized write persists it. This Skill MUST NOT turn a fallback into policy independently.
- New Feature IDs, slugs, and every new technical name MUST use the resolved Engineering Language and fit repository shape. Product Content Language for new product surfaces follows product requirements; record `UNKNOWN - <resolution action>` or `N/A - no product-content surface` rather than inventing a value.
- Conversation MAY follow the user's language and never overrides any artifact-language dimension.

## Resource Loading

Read every supporting resource directly from this file; MUST NOT follow secondary resource chains.

| Resource | When to read |
| --- | --- |
| [Evolution lifecycle](references/evolution-lifecycle.md) | After entry is valid and before the first questions; reread before the Challenge Pass, the Gate, and `NEXT` selection |
| [Project Stage template](assets/stage.template.md) | After valid entry and before creating or adopting root `STAGE.md`; reread before changing tracking mode or status authority |
| [Roadmap evolution record template](assets/roadmap-evolution.template.md) | Before writing the evolution record that anchors new entries, priority changes, and baseline deltas |

## State Machine

Advance only in this order:

```text
ENTRY_CHECK
  -> PREFLIGHT
  -> EVOLUTION_DISCOVERY
       -> NEEDS_CLARIFICATION loops within Discovery until blocking unknowns resolve
  -> SYNTHESIS_CHALLENGE
       -> NEEDS_CLARIFICATION -> EVOLUTION_DISCOVERY
  -> ROADMAP_EVOLUTION_READY (the sole Gate)
  -> ROADMAP_UPDATE
  -> DRAFT_SPEC_GENERATION
  -> NEXT_SELECTION
       -> NEEDS_CLARIFICATION -> EVOLUTION_DISCOVERY
       -> BLOCKED_HANDOFF
  -> SELF_REVIEW
  -> STOP
```

Formal evolution artifacts MUST NOT change before `ROADMAP EVOLUTION READY`. Interview summaries and candidate recommendations are not formal artifacts.

Root `STAGE.md` is the sole operational exception. After valid entry and explicit local-write authorization, create or incrementally adopt it from the [Project Stage template](assets/stage.template.md). Before the Gate it may use Work Status `N/A` and `N/A - project workflow activity`. Use these exact stage tokens: `PREFLIGHT`, `EVOLUTION_DISCOVERY`, `SYNTHESIS_CHALLENGE`, `ROADMAP_UPDATE`, `DRAFT_SPEC_GENERATION`, `NEXT_SELECTION`, `SELF_REVIEW`. For every Stage write, run this guard in order: (1) reread the latest `STAGE.md` and every linked authority; (2) compare the snapshot revision and SHA-256 against the previous read and abort/reconcile on any change; (3) update only the current activity and directly affected coordination rows, preserving every unrelated member row; (4) record the prior revision/hash as `Parent Snapshot` and increment the snapshot revision; (5) write; (6) reread after writing and stop on a duplicate ID or unexpected result. Serialize writes through a repository lock or designated canonical writer when one exists; if neither serialization nor hash comparison is available, `STOP` before writing. Allocate `A-xxx` under the same guard.

## Fact Status Contract

Maintain a concise Decision Ledger from the first round. Every material item uses exactly one status:

- `CONFIRMED`: repository evidence or an informed human confirms a fact; the appropriate Decision Authority approves a high-impact planning decision.
- `RECOMMENDED`: a proposed default with rationale, tradeoffs, and applicability, not yet properly approved. It MUST NOT be presented as settled fact.
- `UNKNOWN`: evidence or an answer is missing. State whether it blocks and how it will be resolved.

Baseline claims use the evidence labels `OBSERVED`, `DOCUMENTED`, `CONFIRMED`, `INFERRED`, `NEEDS_CONFIRMATION`, `CONFLICT`, `UNKNOWN`, and `MISSING`; never rewrite `INFERRED` as an unlabeled fact. `Decision Authority` MUST be a named human empowered for the relevant Roadmap or scope decision; the Agent MUST NOT self-approve. Record name/role, confirmation source, time, and scope.

## Interview Protocol

1. Investigate the repository first: current Roadmap and statuses, delivery history, unresolved Open Questions, Technical Debt records, and `STAGE.md` coordination state are primary evidence. MUST NOT ask the user for facts the repository already answers.
2. Default to `STANDARD`: one group of 2–5 related, high-impact questions per round. Upgrade to `DEEP` (exactly one decision question, recommendation first) when the wave touches critical business rules, irreversible data, cross-Feature contracts, or an unclear baseline conflict.
3. Anchor every round on the requested direction: goal of the wave, users and business value, relationship to existing Features (extends, depends, replaces), explicit Out of Scope, and success criteria for the increment.
4. A `replaces` answer about a delivered capability routes to retirement semantics: record it, and note that deprecation or removal executes in `maintenance-dev`, not here. Planning here may only mark the intended direction in the Roadmap entry.
5. MUST NOT repeat answered questions, and MUST NOT prematurely decide fields, DTOs, classes, components, or implementation structure.

Use [Evolution lifecycle](references/evolution-lifecycle.md) for topics, risk triggers, and the Challenge Pass.

## Roadmap Evolution Readiness

Present the candidate wave synthesis, run the Challenge Pass from the reference, then evaluate Readiness. Inputs MUST list `CONFIRMED`, `RECOMMENDED`, remaining `UNKNOWN`, challenged assumptions, and explicit exclusions.

Required checks:

- Every candidate Feature is a vertical slice of deliverable business value with a stable new ID, Goal, Business Value, Priority, Dependencies, Status, and Summary; none is a technical layer.
- Relationships to existing Features are explicit (extends, depends, replaces, independent), including dependency direction against existing `NEXT` and `DONE` items.
- Priority implications for existing entries are listed separately and confirmed by the named Roadmap Decision Authority; claimed-by-other-member entries are `NEEDS_CONFIRMATION`, never silently rewritten.
- Out of Scope for this wave is explicit; removed candidates moved there are visible.
- Macro-baseline deltas are enumerated: only incrementally updatable facts (scope additions, new module boundaries, new constraints) with authority approval; a delta that overturns product positioning triggers the entry boundary above.
- Language dimensions resolve from the `AGENTS.md` chain; new identifiers follow the resolved Engineering Language.

Any `UNKNOWN` that can alter the wave's correctness, boundaries, dependencies, or the primary flow produces `NEEDS_CLARIFICATION` and returns to the interview. Only after all high-impact unknowns are resolved and low-risk open items are visibly `RECOMMENDED` or non-blocking `UNKNOWN`, output the sole passing Gate:

```text
ROADMAP EVOLUTION READY
```

## Roadmap Update and DRAFT Specs

1. Record the evolution in the [roadmap evolution record](assets/roadmap-evolution.template.md): wave goal, confirmed entries, priority changes, baseline deltas, exclusions, and authority confirmations.
2. Update `specs/ROADMAP.md` incrementally: append new entries with `Roadmap Status: DRAFT`, record confirmed priority changes, and preserve every existing ID, dependency, and delivery record.
3. Generate a shallow DRAFT Spec for every new Feature following the repository's existing spec layout; each records `Roadmap Status: DRAFT`, retains Open Questions, and MUST NOT mature to `READY`.
4. Apply approved macro-baseline deltas to the responsible canonical docs only; preserve `docs/onboarding/*` and delivered Specs as immutable history.

## NEXT Selection

In `NEXT_SELECTION`, obtain Roadmap Decision Authority confirmation for the recommended selection, then mark one or more authority-confirmed new or existing `DRAFT` entries `NEXT` in the Roadmap and each selected Spec header. By default recommend the smallest validating set, usually one Feature; confirm additional parallel selections only when distinct members will claim them. A selected entry with an active claim by another member is invalid: keep it `DRAFT` and record `NEEDS_CONFIRMATION`.

If no entry can safely become `NEXT`, return to the interview via `NEEDS_CLARIFICATION`. If only an unresolvable external blocker remains, enter `BLOCKED_HANDOFF`: zero `NEXT` entries, record blocker, Decision Authority or owner, unblock condition, and the resume stage; `EVOLUTION INCOMPLETE` is the controlled handoff token for this path. Reconcile `STAGE.md` and the Roadmap handoff notes from the confirmed result: phase, current activity, authority, blockers, and exact resume point. Implementation is the next member's `feature-dev` run; MUST NOT invoke it automatically.

## Self Review and Stop

Before finishing, verify at least:

- Entry was a baselined repository requesting project-level evolution; no implementation, Spec maturation, or ID rewriting occurred.
- The Challenge Pass covered wave necessity, MVP subtraction for the increment, counterexamples, authority, success criteria, and complexity evidence.
- Every new Spec remains `DRAFT` with visible Open Questions; no frozen Feature-level detail was introduced.
- Every priority change and every selected `NEXT` has named Roadmap Decision Authority confirmation; no other member's claim was modified.
- Approved baseline deltas are incremental and synchronized into the responsible docs; no immutable history was rewritten.
- The language matrix resolved from the `AGENTS.md` chain; new identifiers follow the resolved Engineering Language.
- `STAGE.md` reflects the final activity state, links its authorities, and preserves unrelated member rows.

Fix every discovered issue before reporting. The final response MUST list the Gate result and key evidence, challenge outcomes, created or updated files, every selected `NEXT` with rationale and dependencies, `RECOMMENDED` and non-blocking `UNKNOWN` items, and the next step: use `feature-dev` to implement a selected Feature. End with:

```text
STOP
```
