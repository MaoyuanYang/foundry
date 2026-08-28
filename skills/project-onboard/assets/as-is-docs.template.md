# Canonical AS-IS Documentation Template

This is not one output file. Incrementally merge applicable sections into the responsible canonical files while preserving valid existing content; remove `N/A` sections. Label facts with evidence status and locatable sources. Put future suggestions in Knowledge Gaps or Roadmap, never in current rules.

Formal artifact prose follows the actual resolved Documentation Language, English by default. New technical names follow the resolved Engineering Language and repository shape. Preserve existing identifiers and Product Content Language; exact quoted user-facing copy is allowed only when labeled as product content. Never mass-translate comments, docs, identifiers, or product content. Use this template only after the Language Policy is explicitly `ADOPTED` by the named `Maintainer Decision Authority`. Before updating a formal artifact, inspect its existing formal-prose language. Excluding labeled exact Product Content, if it is mixed, differs from the resolved Documentation Language, or the update would add a second prose language or require translation, record `CONFLICT` and `STOP` in either direction. Resume only after named-authority approval of one whole-document language and separate authorization for the required translation/update scope.

`docs/onboarding/BASELINE.md` and the original AS-IS/evidence sections of a Feature Spec are immutable historical snapshots. After later Feature delivery, set canonical `docs/*` to `Perspective: CURRENT`, update `Last verified` and the evidence revision, and link to the original baseline. Never combine an old ref header with new behavior.

## Common Pattern

Each document should include:

```markdown
> Perspective: AS-IS
> Last verified: [date, commit/ref, environment if relevant]

## Evidence and Confidence

| Claim/Section | Label | Evidence | Limits/Conflict |
|---|---|---|---|
| [claim] | [OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING] | [file:line/command/runtime] | [scope] |
```

One label may cover a whole section, but never make unconfirmed inference appear to cover the entire document. Use `CONFIRMED` for cross-checked or maintainer-confirmed facts and `DOCUMENTED` when only an existing document states the claim.

---

## `README.md`

# `[Project Name]`

## What It Is

- `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` Current project summary and primary users or callers.
- `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` Current core capabilities; do not duplicate the full Feature Inventory.

## Repository Map

| Path | Responsibility | Evidence |
|---|---|---|
| `[path]` | `[current responsibility]` | `[manifest/entry point]` |

## Tech Stack

| Area | Current Technology/Version | Label | Evidence |
|---|---|---|---|
| `[runtime/framework/data/frontend]` | `[value]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` | `[source]` |

## Prerequisites

- `[confirmed tools, versions, and services; no secret values]`

## Start / Build / Test

| Purpose | Working Directory | Exact Command | Known Baseline Result |
|---|---|---|---|
| Start | `[path]` | `[command]` | `[PASS/FAIL/UNAVAILABLE/SKIPPED]` |
| Build | `[path]` | `[command]` | `[PASS/FAIL/UNAVAILABLE/SKIPPED]` |
| Test | `[path]` | `[command]` | `[PASS/FAIL/UNAVAILABLE/SKIPPED]` |

## Documentation

- `[existing canonical docs and their responsibilities]`
- Onboarding snapshot: `docs/onboarding/BASELINE.md`
- Open knowledge items: `docs/onboarding/KNOWLEDGE_GAPS.md`
- Feature inventory: `specs/ROADMAP.md`
- Live project and member status: `STAGE.md`

## Known Current Constraints

- `[CONFLICT/UNKNOWN/MISSING]` List only items that affect initial use, with a link to the responsible record.

---

## `docs/PRODUCT.md`

# Product (AS-IS)

## Current Purpose and Problem

- `[CONFIRMED/DOCUMENTED/INFERRED]` Why the project exists. Label it explicitly when inferred from UI or code.

## Current Users and Actors

| Actor | Current Goal | Current Capability | Evidence | Unknowns |
|---|---|---|---|---|
| `[actor]` | `[goal]` | `[observed feature]` | `[runtime/test/UI/doc]` | `[gap]` |

## Current Product Surface

- Summary of current capabilities; maintain detailed status only in `specs/ROADMAP.md`.
- Current primary scenarios, entry points, and outputs.

## Current Scope / Explicitly Unsupported

| Item | State | Label | Evidence |
|---|---|---|---|
| `[capability]` | `[in current scope/unsupported/deprecated/unknown]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` | `[source]` |

## Product Language and Locales

| Surface | Current Language/Locale | Evidence | Constraints/Unknowns |
|---|---|---|---|
| `[UI/CLI/email/resource bundle]` | `[language/locale]` | `[path/runtime]` | `[fallback/missing/unknown]` |

Preserve established user-facing product content. Product copy is exempt from the engineering-language default and is not translated by onboarding.

## Product Conflicts and Unknowns

- `[CONFLICT]` Difference between documented intent and current behavior.
- `[NEEDS_CONFIRMATION]` Product intent the repository cannot answer.

Do not infer and declare a future MVP, success metric, or priority from current implementation. Keep it unknown when unconfirmed.

---

## `docs/ARCHITECTURE.md`

# Architecture (AS-IS)

## System Context and Runtime Topology

- Processes/deployments, entry points, callers, external systems, and trust boundaries.
- Label each diagram or text flow with ref/environment and evidence.

## Modules and Boundaries

| Module/Package | Current Responsibility | Entry Points | Dependencies | Label/Evidence |
|---|---|---|---|---|
| `[name]` | `[responsibility]` | `[entry]` | `[direction]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING] [source]` |

## Representative Flows

### `[Request / Command / Event / Job]`

```text
[entry] -> [module] -> [data/external effect] -> [result]
```

- Current transaction, consistency, error, retry, timeout, and observability behavior.

## Cross-Cutting Concerns

- AuthN/AuthZ, configuration, logging/metrics/tracing, jobs, cache, MQ, and external services.

## Deployment and Operations

- Build artifacts, containers, environments, health/readiness, CI/CD, and known differences.

## Constraints, Conflicts and Unknowns

- `[CONFIRMED]` Proven constraint.
- `[CONFLICT]` Current boundary or configuration difference.
- `[INFERRED/UNKNOWN]` Unverified relationship.

Do not diagram an ideal module boundary as current architecture. Put improvements in Technical Debt.

---

## `docs/DATABASE.md`

# Database (AS-IS)

## Stores and Sources of Truth

| Store | Purpose | Source of Truth for | Environment/Version | Label/Evidence |
|---|---|---|---|---|
| `[DB/cache/index/object store]` | `[purpose]` | `[data]` | `[scope]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING] [source]` |

## Core Entities and Relationships

| Entity | Current Meaning | Relationships | Evidence | Unknowns |
|---|---|---|---|---|
| `[entity]` | `[meaning]` | `[relation]` | `[migration/schema/code]` | `[gap]` |

## Current Data Rules

- IDs, time/timezone, naming, unique/index constraints, and nullability.
- Transaction boundaries, consistency, deletion/retention, and cache relationships.
- Migration tooling, ordering, rollback or forward-only reality, and seed/test data.

## Conflicts and Risks

- Docs vs. migrations vs. ORM/runtime schema.
- `[MISSING/CONFLICT/UNKNOWN]` State only current evidence; never run a migration during onboarding.

---

## `docs/API.md`

# API (AS-IS)

## Current Interfaces

| Interface/Version | Consumers | Entry/Schema | Auth | Label/Evidence |
|---|---|---|---|---|
| `[REST/RPC/GraphQL/event/CLI]` | `[consumer]` | `[route/schema]` | `[behavior]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING] [source]` |

## Current Conventions

- URL/method/version, request/response envelope, and ID/time formats.
- Authentication/authorization, validation, errors, and pagination.
- Actual idempotency, retry/timeout, compatibility, and deprecation behavior.

## Interface Inventory

Summarize stable boundaries or link generated schemas. Do not duplicate every endpoint in a high-level doc. Put Feature-specific behavior in its AS-IS Spec.

## Conflicts and Unknowns

- Side-by-side evidence for runtime response vs. tests, code, and docs.
- Never write an unconfirmed convention as a mandatory rule.

---

## `docs/TESTING.md`

# Testing (AS-IS)

## Current Test Layers

| Layer/Suite | Scope | Command | Environment/Dependencies | Baseline | Evidence |
|---|---|---|---|---|---|
| `[unit/integration/API/component/E2E/smoke]` | `[behavior]` | `[command]` | `[needs]` | `[PASS/FAIL/UNAVAILABLE/SKIPPED]` | `[path/output]` |

## Current Coverage by Behavior

| Feature/Rule | Protected by | Observable Behavior or Implementation Detail | Gaps |
|---|---|---|---|
| `[behavior]` | `[test path]` | `[classification]` | `[missing cases]` |

## Test Data and Environment

- Fixtures/factories/seeds, isolation, cleanup, clock, and external dependencies.

## Broken / Skipped / Flaky Reality

- Link stable names and reproduction details from the baseline. Do not claim that a test necessarily represents correct requirements.

## Current Definition of Done

- Record only existing `CONFIRMED` rules. If no rule exists, use `MISSING`; do not invent one during onboarding.

---

## `docs/FRONTEND.md` (Conditional)

# Frontend Architecture (AS-IS)

## Applications and Build

- Application/framework/version, entry, bundler, commands, artifacts, and deployment.

## Routes, Pages and Layouts

| Route/Screen | Page Responsibility | Layout/Guard | Data Source | Label/Evidence |
|---|---|---|---|---|
| `[route]` | `[current responsibility]` | `[layout/auth]` | `[API/state]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING] [source]` |

## State and Data Access

- Local state, server state/cache, API client, auth/session, storage, and forms/validation.

## Components and Styling

- Shared vs. Feature components, UI library, CSS strategy, tokens/theme, and error boundaries.

## Frontend Testing and Constraints

- Component, interaction, E2E, accessibility, and visual tests; build constraints; known conflicts.

---

## `docs/UX.md` (Conditional)

# UX (AS-IS)

## Current User Goals and Entry Points

| Actor | Goal | Entry | Exit/Success | Evidence |
|---|---|---|---|---|
| `[actor]` | `[goal]` | `[entry]` | `[result]` | `[runtime/UI/test]` |

## Page/Screen Map and Navigation

- Information architecture, global/local navigation, and role differences.

## Primary User Flows

```text
[entry] -> [steps/states] -> [success/failure/exit]
```

## Interaction States

| Surface | Loading | Empty | Error | Success | Permission/Offline | Evidence |
|---|---|---|---|---|---|---|
| `[page/flow]` | `[state]` | `[state/N/A]` | `[state]` | `[state]` | `[state/N/A]` | `[source]` |

## Responsive and Accessibility Reality

- Observed viewport behavior, keyboard/focus, labels, screen reader, contrast, and reduced motion. Mark unverified items `UNKNOWN`.

## Current UX Problems

- Record only verifiable friction or inconsistency and its impact. Put future solutions in Technical Debt or TO-BE.

---

## `docs/UI.md` (Conditional)

# UI (AS-IS)

## Current Layout and Visual Structure

- Shell, header, sidebar, navigation, and content by screen type.

## Current Patterns

| Pattern | Current Variants | Usage | Label/Evidence | Conflict/Debt |
|---|---|---|---|---|
| `[form/list/table/detail/modal/drawer/feedback]` | `[variants]` | `[where]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING] [source]` | `[issue]` |

## UI State Presentation

- Current visual and interaction mapping for Loading, Empty, Error, Success, Disabled, and Permission states.

## Responsive and Accessibility Presentation

- Breakpoints/layout changes, focus/disabled/error styles, and known gaps.

Do not duplicate token definitions here. Tokens and reusable-component rules belong to the Design System.

---

## `docs/DESIGN_SYSTEM.md` (Conditional)

# Design System (AS-IS)

## Authority and Adoption

- Current authoritative source, such as code, library, Storybook, Figma, or docs, plus actual adoption scope. Use `CONFLICT/MISSING` when there is no single source.

## Confirmed Tokens

| Token Group | Current Source/Values | Adoption | Label/Evidence | Inconsistency |
|---|---|---|---|---|
| `[typography/color/spacing/radius/shadow/breakpoint]` | `[source; avoid needless dump]` | `[scope]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` | `[variants]` |

## Reusable Components

| Component | Supported Current Variants/States | Source | Usage | Label |
|---|---|---|---|---|
| `[Button/Input/Form/Card/Table/Modal/Toast/other established component]` | `[states]` | `[path/library]` | `[scope]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` |

## Confirmed Conventions

- Include only long-lived reuse, token, focus, disabled, or feedback rules that are both `CONFIRMED` AS-IS and explicitly `ADOPTED` by a named `Maintainer Decision Authority`. Keep merely observed legacy patterns in AS-IS or conflict records.

## Observed Inconsistencies

- Mark scattered values, duplicate components, and missing states as `CONFLICT` or Technical Debt. An observed pattern is not automatically a required convention.

---

## `docs/adr/README.md` (As Needed)

# Architecture Decision Records

| ADR | Status | Decision Known | Reasoning Known | Evidence/Conflict |
|---|---|---|---|---|
| `[path/title]` | `[Accepted/Superseded/Unknown]` | `[summary]` | `[summary/UNKNOWN]` | `[source]` |

Never fabricate past Context, Decision, or Reasoning to explain existing code. Onboarding records future L3 ADR requirements only; after authority confirmation, `feature-dev` creates future design ADRs.
