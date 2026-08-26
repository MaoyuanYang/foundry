# Incremental AGENTS Update Template

Use this template to maintain a repository-root or nested `AGENTS.md` incrementally. Read and preserve valid rules, structure, links, and scope first. Every new durable rule, including the resolved Language Policy, needs `CONFIRMED` AS-IS evidence, explicit `ADOPTED` status from a named `Maintainer Decision Authority`, and long-lived relevance to future Coding. Remove inapplicable sections; never replace the whole file blindly.

An applicable non-English Engineering or Documentation Language rule is already resolved only when it records a valid scoped BCP-47 value, named authority, explicit `ADOPTED` evidence, source, and date with no conflicting policy. Preserve such an existing override. Otherwise record `CONFLICT` and `STOP` before overriding or mixing it; nested precedence does not bypass this onboarding gate.

## Merge Check

- Is the rule long-lived rather than current onboarding progress?
- Is its scope explicit, and should it live in a nearer nested `AGENTS.md`?
- Is AS-IS confirmed by repeatable evidence and the future rule explicitly `ADOPTED` by a named `Maintainer Decision Authority`?
- Will it help a later Agent build, test, or modify the project correctly?
- Does it conflict with an existing rule? If unresolved, do not overwrite; record it in Knowledge Gaps.
- Is the Language Policy explicitly `ADOPTED`, populated with actual Documentation and Engineering BCP-47 values plus a resolved Product Content value/state, and synchronized across its scope? An applicable Product Content `UNKNOWN` prevents completion; evidenced `N/A - no product-content surface` is resolved. Under the defaults, render the section in English; after an approved Documentation Language override, render its prose consistently in that language while preserving the exact ASCII policy keys.

Square brackets below are placeholders, not rules that can be asserted without evidence or authority.

---

# AGENTS.md

## Scope and Precedence

- This file applies to `[repository/path scope]`.
- A deeper `AGENTS.md` may define more specific rules for its scope. Follow the more specific explicit rule in a conflict.
- Language-policy onboarding is stricter than normal precedence: an applicable non-English Documentation or Engineering Language rule remains `CONFLICT` and `STOP` until it has complete named-authority adoption metadata and no conflicting policy. A valid previously `ADOPTED` scoped override is resolved and preserved.
- `[existing project-specific precedence; include only when confirmed]`

## Language Policy

These are the defaults:

```text
documentation_language = en
engineering_language = en
```

The default key lines are replaced only by an explicit, scoped override approved and `ADOPTED` by the named `Maintainer Decision Authority`. Adopting the defaults also requires that authority's explicit `ADOPTED` decision. In the generated `AGENTS.md`, write the actual resolved Documentation and Engineering BCP-47 value on each key line; never leave a placeholder or an obsolete default after an approved override. Product Content Language has no default and uses the value/state rules in the table below.

| Category | Controlled Surfaces |
|---|---|
| Documentation Language | Formal artifact prose in README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records. |
| Engineering Language | New class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages. |
| Product Content Language | User-facing copy and localized values. Exact quoted copy is allowed in formal artifacts only when labeled as product content; exact-copy assertions MAY use the Product Content Language. |

| Policy Key | Resolved Value / State | Scope | Named Authority / Adoption | Evidence / Date |
|---|---|---|---|---|
| `documentation_language` | `[actual value; default en]` | `[repository/path/artifact scope]` | `[named Maintainer Decision Authority; ADOPTED]` | `[source/date]` |
| `engineering_language` | `[actual value; default en]` | `[repository/path/surface scope]` | `[named Maintainer Decision Authority; ADOPTED]` | `[source/date]` |
| `product_content_language` | `[actual BCP-47 value(s) / UNKNOWN - <resolution action> / N/A - no product-content surface]` | `[surface/locale scope or confirmed no-content scope]` | `[named Maintainer Decision Authority; ADOPTED or NEEDS_CONFIRMATION; product/survey source]` | `[source/date]` |

- Conversation non-override: the language used in conversation, prompts, or one translated artifact does not change this policy.
- Placement rule: persist each effective value exactly once in the nearest `AGENTS.md` whose scope fully governs it. Repository-wide fallbacks and global branch/commit/Issue/PR language belong in root; a subtree-only override belongs in the nearest governing nested file, or root when none exists. A broader file MAY link to an authoritative nested policy but MUST NOT duplicate its value.
- Override rule: record the approving named authority, actual BCP-47 value, exact scope, rationale, evidence, and date. Synchronize the authoritative policy entry, Baseline language table, AS-IS Spec metadata, and other policy references in the same authorized update.
- Product-copy exception: preserve established user-facing copy and localized values in the resolved Product Content Language. Do not translate them merely to satisfy Documentation or Engineering Language. Exact quoted copy is allowed when labeled as product content.
- Existing-content rule: preserve existing identifiers and valid comments/docs. Never mass-translate code comments, documentation, identifiers, or product content.
- Mixed-repository rule: new formal artifact prose and engineering surfaces use their resolved language, English by default. Refer to non-English product copy by resource key or path where practical.
- Naming rule: preserve existing IDs. Every new ID, slug, or technical name uses English and matches repository shape unless an explicit, authority-approved scoped Engineering Language override applies.
- Conflict gate: before updating a formal artifact, inspect its existing formal-prose language. Excluding labeled exact Product Content, if it is mixed, differs from the resolved Documentation Language, or the update would add a second prose language or require translation, record `CONFLICT` and `STOP` in either direction. Resume only after `[named authority]` approves one whole-document language and the required translation/update scope is separately authorized.

Complete onboarding cannot pass until this policy is resolved, explicitly `ADOPTED` by the named `Maintainer Decision Authority`, persisted with actual Documentation and Engineering BCP-47 values plus an actual Product Content value or evidenced `N/A - no product-content surface`, and synchronized across the applicable scope. An applicable `UNKNOWN` remains incomplete.

## Project Map

| Path/Module | Long-Lived Responsibility | Allowed Dependencies / Boundary |
|---|---|---|
| `[path]` | `[confirmed responsibility]` | `[confirmed constraint]` |

Do not turn a proposed ideal boundary into a current mandatory rule.

## Required Commands

| Purpose | Working Directory | Exact Command | Preconditions |
|---|---|---|---|
| Install | `[path]` | `[confirmed lockfile-safe command]` | `[runtime/services]` |
| Build | `[path]` | `[confirmed command]` | `[requirements and authorized output boundary]` |
| Test | `[path]` | `[confirmed command]` | `[requirements and authorized output boundary]` |
| Targeted Test | `[path]` | `[confirmed pattern]` | `[requirements]` |
| Start/Smoke | `[path]` | `[confirmed command]` | `[safe isolated local profile]` |

Do not make a one-time baseline `PASS/FAIL` a permanent rule. Record only stable commands and prerequisites. Commands that generate build/test/coverage artifacts still require local side-effect authorization for the current operation.

## Architecture and Data Rules

- `[ADOPTED rule; CONFIRMED AS-IS evidence: module dependency / entry point / ownership]`
- `[ADOPTED rule; CONFIRMED AS-IS evidence: source of truth / transaction / migration]`
- `[ADOPTED rule; CONFIRMED AS-IS evidence: API/auth/error/idempotency]`
- `[ADOPTED rule; CONFIRMED AS-IS evidence: external-service or secret boundary]`

## Coding and Testing Rules

- `[ADOPTED language/framework convention with CONFIRMED evidence]`
- `[ADOPTED required test layer and behavior-first rule with CONFIRMED evidence]`
- Preserve existing IDs and technical names. New IDs, slugs, identifiers, packages/modules, schemas, paths, keys, and infrastructure names follow the resolved Engineering Language and repository shape.
- Prefer protecting a bug fix with reproducible behavior and a regression test when this is a confirmed project workflow.
- Do not replace externally observable behavior with implementation details such as private call counts unless that implementation constraint is confirmed and necessary.

## Work Tracking and Delivery

- Tracking mode: `[REMOTE | LOCAL | HYBRID | TBD]`
- Root `STAGE.md` owns current project phase, active-member coordination, blockers, handoffs, and resume points. It links controlling artifacts and must not copy AS-IS facts, Feature requirements, or Gate evidence.
- During onboarding, `specs/ROADMAP.md` records inventory, ordering, and recommendation. After a Feature starts, its bound remote tracker is the writable Work Status authority. When no remote is bound, the activity row identified by `STAGE_LOCAL:<Activity ID>` in `STAGE.md` is the local Work Status authority. Roadmap is a synchronized projection in either mode.
- Update Stage only at assignment, meaningful workflow transition, block/resume, handoff, and completion. Preserve unrelated member rows; record a duplicate unexplained assignment as `CONFLICT`.
- A bound remote remains authoritative when authorization, tooling, authentication, availability, or writing temporarily fails; preserve status and stop. Use `STAGE_LOCAL:<Activity ID>` only when no remote is bound or after an explicitly approved durable migration.
- Serialize Stage writes through a repository lock or designated canonical writer. Otherwise compare revision and SHA-256 immediately before writing and abort/reconcile on change; allocate `A-xxx` under that guard. Divergent worktree copies are not live Stage state until canonical reconciliation.
- Transfer Stage-local authority atomically to the receiver's activity before the sender leaves Active Work. Preserve final status and authority when archiving completed activities.
- Delivery mode: `[PR/MR | explicitly adopted no-PR delivery | TBD]`
- Remote Issue changes, commit, push, PR/MR, merge, close, and release each require explicit user authorization.

## Spec and Work Lifecycle

- Spec defines what is correct; a remote tracker or identified Stage-local row records where work is; `STAGE.md` shows the project/member snapshot; PR/Delivery Record records what changed in code; ADR records why a significant decision was made.
- Brownfield `AS_IS_DRAFT/RECONSTRUCTED` describes current behavior and is never `READY`.
- After Feature selection, `feature-dev` confirms preserve/change/remove decisions, produces a TO-BE Spec, and passes `SPEC READY` before implementation.
- For UI work, define user flow, UI states, and frontend/backend contract before Coding and pass the adopted UI gate.
- Acceptance/Test Design precedes Coding; synchronized tests and docs are completion requirements.
- Keep Roadmap work status, Feature implementation state, and Spec status separate.

When the project adopts this AI-Native workflow, record the complete lifecycle:

```text
AS_IS_DRAFT / RECONSTRUCTED or DRAFT
-> Feature Selected (`NEXT`)
-> Work item bound (remote Issue or Stage-local authority) and linked to Spec
-> AS-IS confirmation and TO-BE refinement
-> SPEC READY
-> if UI: UX refinement -> UI states/contracts -> UI READY
-> Acceptance Test Design
-> TEST DESIGN READY
-> Implementation Plan and Tasks
-> Coding with interleaved Testing
-> Review
-> Documentation Sync
-> PR/MR or explicitly adopted no-PR delivery record
-> DONE
```

If an existing team workflow conflicts, record the conflict and request a maintainer decision. Never replace it silently. After adoption, retain complete Gates, Review, Documentation Sync, and delivery steps.

- Each Gate records the artifact revision it validates. A Spec behavior change makes `SPEC READY` and downstream UI/Test/Plan stale. A UI change makes `UI READY` and Test/Plan stale. A Test Design change makes `TEST DESIGN READY` and Plan stale. Revalidate every `STALE` Gate before resuming.

## Frontend / UX / UI Rules (Conditional)

- `[ADOPTED routing/state/API/component boundary with CONFIRMED evidence]`
- Understand user goal and flow before changing presentation.
- A Feature must consider relevant Loading, Empty, Error, Success, Disabled, Permission, and Offline states, not only the Happy Path.
- Prefer confirmed existing components and Design System; do not create a private visual language for one Feature.
- Map API errors to explicit frontend behavior.
- `[ADOPTED responsive/accessibility/browser-support rule with CONFIRMED evidence]`

Do not make inconsistent historical UI styles into standards. Retain only rules the project has adopted.

## Design Change Policy

- Separate requirement, design, and implementation before changing anything; perform impact analysis and update the source of truth before code.
- Authority gate: every generated L1/L2/L3 policy requires approval from the named Decision Authority for the affected Spec or design. Any resulting durable AGENTS rule also requires explicit `ADOPTED` status from the named `Maintainer Decision Authority`.
- `L1 Feature-local`: the named Decision Authority for the Feature approves the TO-BE change; synchronize its Spec, acceptance, Test Design, and affected API/data/UI.
- `L2 Cross-Feature`: the named Decision Authorities for all affected Features approve the change; synchronize related Specs, Roadmap, relevant architecture/data/API/UX/UI/Design System docs, and tests.
- `L3 Architectural`: the named `Architecture Decision Authority` approves the future decision. Onboarding records only evidence, impact, that required authority, and the future ADR requirement. During later Feature work, `feature-dev` creates the future design ADR with the named Architecture Decision Authority, approval source/time/scope, and input revision; Coding resumes only after it reaches the project's implementation-authorizing state (for example, Accepted or Effective). Then synchronize affected canonical docs, AGENTS, Specs, and tests. Never invent an ADR for an unevidenced historical decision.
- Order: Design/Spec -> Acceptance -> Test Design -> Code/Tests -> Verify/Review -> Documentation/Issue/PR Sync.
- Code must not remain ahead of docs.

## Documentation Responsibilities

| Artifact | Responsibility |
|---|---|
| `README.md` | Fast entry and real commands. |
| `STAGE.md` | Current project/member coordination, authority links, blockers, handoffs, and resume points. |
| `docs/*` | Project-level product, architecture, data, API, frontend/UX/UI/Design System, and testing facts. |
| `specs/ROADMAP.md` | The single Feature Inventory, dependencies, and work ordering. |
| Feature Spec | Correct Feature behavior with explicit separation of AS-IS and TO-BE. |
| Issue / PR-or-Delivery-Record / ADR | Progress / code changes / rationale for significant decisions; no-PR only with an explicitly adopted equivalent review and delivery record. |

- Update only genuinely affected docs.
- Write newly confirmed long-lived rules back to the applicable `AGENTS.md` after adoption.

## Repeated Pitfalls

- `[only a repeated, evidenced pitfall with an actionable avoidance rule]`
- Do not include one-off debugging, current task state, temporary workarounds, or unconfirmed inference.
