---
name: maintenance-dev
description: "Use ONLY when the user explicitly asks for maintenance engineering on a repository with a trustworthy baseline: behavior-preserving refactoring, a technical-debt paydown campaign, a dependency or framework upgrade, or deprecating/removing a capability. Drives safety-net-first, sliced, behavior-verified delivery of exactly one campaign. MUST NOT be used for new business capability (feature-dev), Roadmap planning of new Features (evolve-dev), Greenfield initialization (coding-start), unknown-repository takeover (project-onboard), or read-only diagnosis."
---

# Maintenance Dev

> Part of **Foundry**, an AI-native, spec-driven development suite. Role: Maintenance engineering (behavior-preserving change and explicit retirement). Siblings: `coding-start`, `project-onboard`, `feature-dev`, `evolve-dev`.
> Foundry contract version: `2026-09-01`.

Advance exactly one maintenance campaign from safety net to verified delivery: keep observable behavior identical while improving structure, pay down recorded technical debt, upgrade dependencies, or retire a capability the named Decision Authority approved to remove. This Skill MUST NOT add business capability; a slice that would change behavior beyond the approved retirement becomes a `feature-dev` Change — with its own `SPEC READY` gate — instead.

## Mission and Boundaries

- `Decision Authority` MUST be a named human empowered for the specific decision. The executing Agent, automation, and an implementation-only assignee MUST NOT self-approve behavior changes, risk waivers, retirement decisions, or delivery standards. Record approver, source, time, and scope for every approval.
- Responsibility boundaries are unchanged from the suite: the campaign record defines what this campaign is; the Issue/work item records work status; `STAGE.md` is the coordination projection; the campaign plan defines how; PR/delivery records state what changed; ADR records why a significant decision was made; `AGENTS.md` stores durable rules.
- Four campaign types, one per run: `REFACTOR` (behavior-preserving structural change), `DEBT` (paydown of recorded technical debt), `UPGRADE` (dependency or framework version change, behavior-preserving unless an approved breaking change is recorded), `RETIRE` (deprecation and removal of a capability). If the user requests several campaigns, `STOP` and ask for one; MUST NOT advance them in bulk.

### MUST NOT enter when

- The user asks to implement, fix, or deliver new or changed business behavior. `STOP` and recommend `feature-dev`.
- The user asks to plan a new Feature wave or re-prioritize the Roadmap. `STOP` and recommend `evolve-dev`.
- The repository lacks a credible macro baseline: it must already document product scope, system boundaries, the test method, the current Roadmap, trustworthy Brownfield AS-IS where applicable, and a valid persisted Language Policy. `STOP` and recommend `coding-start` or `project-onboard`.
- The user only wants a debt survey, architecture review, or diagnosis. Perform the explicitly requested read-only work and `STOP`; a survey without an explicitly requested campaign is not this Skill's loop.
- The requested refactor would change observable behavior and no named Decision Authority has confirmed the intended behavior change. That is a `feature-dev` Change or an L1/L2/L3 Design Change, not a maintenance slice.

If root `AGENTS.md` records `foundry_contract_version` and it differs from this Skill's contract version recorded above, report both values and `STOP` until the installed Skill copy is synchronized with the repository contract.

Before the first local write, list every path to be created or updated and every command with known generated output, then obtain explicit local-write authorization. Local-write authorization never includes Git or remote side effects; each commit, push, PR, merge, or Issue action requires separate explicit authorization.

## Language Policy

This section is the single authoritative Language Policy location for `maintenance-dev`. During Preflight, read every applicable `AGENTS.md` from repository root to the working directory, resolve the complete root-to-target chain for every modified path, and apply each target's most specific rules:

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

Maintenance-specific rules:

- Every Documentation or Engineering Language value MUST be inherited from a valid applicable `AGENTS.md` policy. If a dimension is missing, propose the exact default `documentation_language = en` or `engineering_language = en`, then `STOP` until a named `Maintainer Decision Authority` adopts it and an authorized write persists it. This Skill MUST NOT turn a fallback into policy independently.
- Preserve existing identifiers: a refactor MUST NOT rename public identifiers, API paths, table or column names, environment variables, or configuration keys as a side effect. A rename that changes an external contract is a behavior change requiring the retirement/change path, never a silent slice.
- Conversation MAY follow the user's language and never overrides any artifact-language dimension.

## Resource Loading

| Resource | Read when |
| --- | --- |
| [Safety net and verification](references/safety-net-and-verification.md) | Before `SAFETY_NET_DESIGN`; recheck before every `BEHAVIOR PRESERVED` claim |
| [Campaigns and slices](references/campaign-and-slices.md) | Before `CAMPAIGN_PLAN` for `REFACTOR`, `DEBT`, and `UPGRADE` campaigns |
| [Deprecation and removal](references/deprecation-and-removal.md) | Before `SAFETY_NET_DESIGN` of a `RETIRE` campaign; recheck before the removal slice |
| [Project Stage template](assets/stage.template.md) | During Preflight before creating or adopting root `STAGE.md`; reread before changing tracking mode or status authority |
| [Campaign template](assets/campaign.template.md) | Creating the campaign record when no project format exists |

Parallel claims, branch-per-work-item, the integration protocol, and PR peer review follow the ADR-0001 protocol as implemented by `feature-dev`; this Skill records its claim, branch, and projected statuses in `STAGE.md` under the same rules. `WIP Limit` counting includes maintenance work items.

## Two State Systems

**Roadmap Status** is unchanged from the suite: `DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED`. A maintenance campaign binds one work item and moves it through the same machine with the same claim, WIP, and fix-slice rules.

**Gate** (owned by this Skill):

`SAFETY NET READY | BEHAVIOR PRESERVED | DONE`

`SAFETY NET READY` passes when the recorded safety net covers every surface the campaign will touch, per [Safety net and verification](references/safety-net-and-verification.md); for a `RETIRE` campaign it additionally requires the confirmed retirement plan (intended-behavior confirmation by a named Decision Authority, announcement, consumer migration, removal slice). `BEHAVIOR PRESERVED` passes per slice and for the whole campaign when the recorded verification shows observable behavior identical to the pre-campaign baseline for `REFACTOR`/`DEBT`/`UPGRADE`, or identical to the approved retirement behavior for `RETIRE`. `DONE` follows the suite delivery standard.

**Gate Record**: every executed Gate records `Status: PASS | NOT_READY | STALE`, a complete input manifest (campaign record, safety-net evidence, baseline behavior snapshot or hashes, applicable ADRs and AGENTS rules), validation time, and Decision Authority approval source and scope. A semantic change to the campaign scope or the safety net marks the affected Gate `STALE`; revalidate from there. A concurrent claim on an overlapping surface is a manifest input of `SAFETY NET READY`: mark it `STALE` and revalidate before merge.

**State transitions**:

```text
DRAFT or UNTRACKED -> NEXT -> READY -> IN_PROGRESS -> REVIEW -> DONE
REVIEW -> IN_PROGRESS (scoped fix slice only, per suite rules)
Any active state -> BLOCKED -> previous valid state after revalidation
```

## Executable State Machine

### 0. Preflight

Set the Stage activity to `PREFLIGHT`. Confirm the intent is a maintenance campaign, classify the campaign type, and verify the baseline: read the applicable `AGENTS.md` chain, root `STAGE.md`, Roadmap, canonical docs, the debt records (`docs/onboarding/KNOWLEDGE_GAPS.md` or project equivalent) for `DEBT`, and the dependency manifests for `UPGRADE`. Read the code and tests of every affected surface; MUST NOT rely on docs alone. Use the suite evidence labels (`OBSERVED`, `DOCUMENTED`, `CONFIRMED`, `INFERRED`, `NEEDS_CONFIRMATION`, `CONFLICT`, `UNKNOWN`, `MISSING`) for every baseline claim. Then obtain local-write authorization for the listed paths. Create or incrementally adopt root `STAGE.md` from the [Project Stage template](assets/stage.template.md) under the write guard.

### 1. Bind One Work Item

Set the Stage activity to `WORK_ITEM_BINDING`. Bind or create exactly one work item for this campaign (never in bulk); the bound remote Issue or confirmed `STAGE_LOCAL:<Activity ID>` row is the single writable Work Status authority, and a new `DRAFT/UNTRACKED` item moves to `NEXT` only after confirmation by the named Roadmap Decision Authority. Verify writability before every status transition; on failure preserve status and `STOP`. `RETIRE` and `UPGRADE` campaigns MUST NOT implicitly reopen or downgrade a `DONE` Feature's history.

### 2. Safety Net Design -> `SAFETY NET READY`

Set the Stage activity to `SAFETY_NET_DESIGN`. Follow [Safety net and verification](references/safety-net-and-verification.md): record the baseline behavior snapshot (commands, outputs, content hashes, or contract probes as applicable), add characterization tests where coverage is insufficient, and record the regression scope per slice surface. For `RETIRE`, follow [Deprecation and removal](references/deprecation-and-removal.md) and additionally confirm the retirement plan. No implementation slice may run before this Gate is `PASS`; if the net cannot be established (untestable surface, unverifiable behavior), record `SAFETY NET READY Status: NOT_READY`, the blocker, and `STOP`.

### 3. Campaign Plan

Set the Stage activity to `CAMPAIGN_PLAN`. Use [Campaigns and slices](references/campaign-and-slices.md) (or [Deprecation and removal](references/deprecation-and-removal.md) for `RETIRE`) and the [campaign template](assets/campaign.template.md): decompose into minimal ordered slices, each independently verifiable, deliverable, and rollback-safe; record per-slice verification and the campaign-level regression scope. `UPGRADE` records the breaking-change inventory, staged migration order, lockfile policy, and rollback plan; an upgrade that changes a Major Tech Choice is an L3 decision requiring an ADR before slicing. The plan MUST NOT change approved behavior or contracts; a discovered behavior change routes to Design Change. Record `Roadmap Status: READY` only when the Gates and plan are valid for current revisions.

### 4. Slice Execution -> `BEHAVIOR PRESERVED`

Set the Stage activity to `SLICE_EXECUTION` and record `Roadmap Status: IN_PROGRESS`. Execute one slice at a time under the coding constraints of the suite: comply with applicable `AGENTS.md` rules, prefer existing patterns, modify only what the slice requires, and record unrelated problems as candidate work items instead of expanding scope. After each slice, run the slice's recorded verification and the adjacent regression scope, then claim `BEHAVIOR PRESERVED` for that slice only against the recorded evidence; on any behavioral delta, stop slicing, classify the delta (defect, unintended change, or intended change), and either fix within the slice or route to Design Change. Never batch unverified slices.

### 5. Campaign Verification

Set the Stage activity to `BEHAVIOR_VERIFICATION`. Run the campaign-level regression scope against the final state and compare with the baseline snapshot: `BEHAVIOR PRESERVED` for the campaign is recorded only when every slice passed and the whole-campaign comparison shows no unintended observable delta (for `RETIRE`: exactly the approved retirement delta). Record commands, outputs, and evidence references in the campaign record. If environment or data makes verification impossible, record the gap, residual risk, and `STOP`.

### 6. Review

Set the Stage activity to `REVIEW`. Perform Self Review per the suite checklist families: behavior preservation evidence, architecture boundaries, duplication, test quality, migration and rollback safety, security, and documentation drift. Record findings as `Critical/High/Medium/Low`; a Critical finding blocks `DONE`. External PR review findings import with severity mapping and follow the same blocking rules; fixes run as scoped fix slices through the recorded `REVIEW -> IN_PROGRESS` edge.

### 7. Documentation Sync

Set the Stage activity to `DOCUMENTATION_SYNC`. Synchronize the campaign record, ROADMAP, ARCHITECTURE, TESTING, DATABASE, API, and ADR indexes according to actual impact; retire or update debt rows that this campaign paid down (mark them resolved with evidence, never silently deleted). Newly discovered durable rules enter `AGENTS.md` only when a maintainer explicitly marks them `ADOPTED`. Preserve `docs/onboarding/*` baselines as immutable history.

### 8. Delivery

Set the Stage activity to `DELIVERY`. Follow the suite delivery standard: confirm the project DoD, obtain separate authorization for each remote or Git side effect, and on missing conditions output `READY FOR PR` or `READY FOR DELIVERY` and `STOP` with `Roadmap Status: REVIEW` and `DONE Status: NOT_READY`. With an authorized PR, process external feedback in `PR_REVIEW` and complete the integration protocol before merge. Record `DONE Status: PASS` and `Roadmap Status: DONE` together only when every condition holds; then reconcile `STAGE.md` as a post-Gate projection, move the activity to `COMPLETE`, and report Gate revisions and evidence before the terminal `STOP`.

## Mandatory STOP Conditions

- The request is not exactly one maintenance campaign, or the campaign would change observable behavior without a named Decision Authority's confirmed intended-behavior decision.
- The repository lacks a trustworthy baseline, a resolvable language policy, or readable evidence for the affected surfaces.
- `SAFETY NET READY` cannot be reached for a surface the campaign must touch.
- A required Decision Authority is unavailable for a blocking approval (retirement decision, breaking-change acceptance, priority or delivery standard).
- Local-write paths or generated-output boundaries lack explicit authorization.
- An L2/L3 impact discovered mid-campaign lacks complete authority confirmation, or L3 lacks an implementation-authorizing ADR.
- A remote or Git side effect required by the current step lacks authorization, tools, or authentication.
- Stage binding, freshness, revision/hash, activity identity, duplicate assignment, or authority transfer is unresolved; unrelated read-only investigation may continue.

Every `STOP` MUST report the current Roadmap Status, passed Gates, blocking evidence, who must answer what, and the resume step after resolution. MUST NOT guess past a Gate.
