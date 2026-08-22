# Core Docs Templates

Copy each applicable `FILE` section to its target and replace every `{{PLACEHOLDER}}`. Delete inapplicable sections; MUST NOT retain empty headings, full sections of `N/A`, or unexplained placeholders. Replace every unavailable command with exactly `Not yet established`; MUST NOT invent commands.

Formal artifact prose follows Documentation Language. New engineering names follow Engineering Language. Product Content Language permits localized resource/configuration values, clearly labeled exact product-copy quotations, and exact-copy assertions; surrounding formal prose remains under Documentation Language, while executable test names/descriptions, assertion code, and other engineering text remain under Engineering Language. Any override requires both an explicit request and approval by a named authority empowered for project language policy; the requester is not automatically that authority.

Every material product, architecture, data, API, or testing statement MUST retain an explicit status. Replace each `{{FACT_STATUS}}` with exactly `CONFIRMED`, `RECOMMENDED`, or `UNKNOWN, NON_BLOCKING`. Keep the bracketed status on prose and the `Status` column in tables; MUST NOT infer status from nearby text.

---

## FILE: `README.md`

# {{PROJECT_NAME}}

- [{{FACT_STATUS}}] {{ONE_PARAGRAPH_PROJECT_SUMMARY}}

## Core Capabilities

- [{{FACT_STATUS}}] {{CAPABILITY_AND_USER_VALUE}}

## Tech Stack

| Area | Choice | Status | Notes |
| --- | --- | --- | --- |
| {{AREA}} | {{CHOICE}} | `{{FACT_STATUS}}` | {{CONSTRAINT_OR_REASON}} |

## Current Stage

- [CONFIRMED] Macro design: `MACRO DESIGN READY`
- [CONFIRMED] Business implementation: Not started

<!-- Template note: Keep exactly one Handoff branch below. -->

### Confirmed NEXT

- [CONFIRMED] Feature planning: DRAFT Specs generated; `{{CONFIRMED_NEXT_FEATURE_ID}}` is the sole `NEXT`
- [CONFIRMED] Handoff: Ready for `feature-dev` refinement

### BLOCKED_HANDOFF

- [CONFIRMED] Feature planning: DRAFT Specs generated; zero `NEXT` entries
- [CONFIRMED] Handoff: `INITIALIZATION INCOMPLETE`
- [CONFIRMED] Blocker / owner / unblock condition: {{BLOCKER_OWNER_AND_UNBLOCK_CONDITION}}
- [CONFIRMED] Resume from: `NEXT_SELECTION`

## Start

```text
{{REAL_START_COMMAND}}
```

## Build

```text
{{REAL_BUILD_COMMAND}}
```

## Test

```text
{{REAL_TEST_COMMAND}}
```

## Documentation

- Product: `docs/PRODUCT.md`
- Architecture: `docs/ARCHITECTURE.md`
- Data: `docs/DATABASE.md` (if applicable)
- API: `docs/API.md` (if applicable)
- Testing: `docs/TESTING.md`
- Feature roadmap: `specs/ROADMAP.md`
- AI development rules: `AGENTS.md`
- UI/UX documents as applicable: `docs/FRONTEND.md`, `docs/UX.md`, `docs/UI.md`, `docs/DESIGN_SYSTEM.md`

## Decision Status

- `[CONFIRMED]` means a fact was evidenced/confirmed, or a decision was approved by the named Decision Authority.
- `[RECOMMENDED]` means a proposed default with a revisit trigger.
- `[UNKNOWN, NON_BLOCKING]` means unresolved and MUST include when it will be resolved.

---

## FILE: `docs/PRODUCT.md`

# Product

## Vision

- [{{FACT_STATUS}}] {{WHY_THIS_PROJECT_SHOULD_EXIST}}

## Problem

- [CONFIRMED] {{USER_PROBLEM_AND_CURRENT_PAIN}}

## Target Users

| User / Role | Need | Relevant permissions or boundary | Status |
| --- | --- | --- | --- |
| {{USER_OR_ROLE}} | {{NEED}} | {{BOUNDARY}} | `{{FACT_STATUS}}` |

## Primary Scenarios

1. [{{FACT_STATUS}}] {{SCENARIO_FROM_TRIGGER_TO_OUTCOME}}

## Core Value

- [{{FACT_STATUS}}] {{DISTINCT_VALUE_PROPOSITION}}

## MVP

- [CONFIRMED] {{MUST_HAVE_OUTCOME_OR_CAPABILITY}}

## Phase 1 Scope

- [CONFIRMED] {{IN_SCOPE}}

## Out of Scope

- [CONFIRMED] {{EXPLICITLY_DEFERRED_ITEM_AND_REASON}}

## Product Principles

- [{{FACT_STATUS}}] {{PRINCIPLE_THAT_GUIDES_TRADEOFFS}}

## Success Criteria

| Criterion | Signal / measure | Evaluation point | Status |
| --- | --- | --- | --- |
| {{OUTCOME}} | {{OBSERVABLE_SIGNAL}} | {{WHEN}} | `CONFIRMED` |

## Validated Assumptions

<!-- Template note: Keep only Challenge conclusions with durable value. MUST NOT copy raw interview questions and answers. -->

| Assumption | Challenge / counterexample | Resolution | Status | Revisit trigger |
| --- | --- | --- | --- | --- |
| {{HIGH_IMPACT_ASSUMPTION}} | {{WHY_IT_MAY_BE_WRONG}} | `RETAINED/REVISED`: {{CURRENT_CONCLUSION}} | `{{FACT_STATUS}}` | {{TRIGGER}} |

## Rejected Scope

| Item / assumption | Why rejected | Reconsider when | Status |
| --- | --- | --- | --- |
| {{REJECTED_ITEM}} | {{EVIDENCE_OR_TRADEOFF}} | {{TRIGGER}} | `CONFIRMED` |

## Open Items

- [RECOMMENDED] {{LOW_RISK_DEFAULT}} - Reason: {{WHY}}; Revisit when: {{TRIGGER}}
- [UNKNOWN, NON_BLOCKING] {{OPEN_ITEM}} - Resolve by: {{MILESTONE}}

---

## FILE: `docs/ARCHITECTURE.md`

# Architecture

## Goals and Constraints

- [CONFIRMED] {{ARCHITECTURAL_GOAL_OR_HARD_CONSTRAINT}}
- [RECOMMENDED] {{REVERSIBLE_DIRECTION}} - Reason: {{WHY}}; Revisit when: {{TRIGGER}}

## Overall Architecture

- [{{FACT_STATUS}}] {{HIGH_LEVEL_STYLE_AND_RUNTIME_BOUNDARY}}

- [{{FACT_STATUS}}] System context / module diagram

```text
{{SMALL_SYSTEM_CONTEXT_OR_MODULE_DIAGRAM}}
```

## Tech Stack

| Concern | Choice | Status | Rationale / constraint |
| --- | --- | --- | --- |
| {{CONCERN}} | {{CHOICE}} | `{{FACT_STATUS}}` | {{WHY}} |

## Modules and Responsibilities

| Module / Boundary | Responsibility | Owns | MUST NOT own | Status |
| --- | --- | --- | --- | --- |
| {{MODULE}} | {{RESPONSIBILITY}} | {{CAPABILITY_OR_DATA}} | {{EXCLUDED_RESPONSIBILITY}} | `{{FACT_STATUS}}` |

## Dependencies

- [{{FACT_STATUS}}] `{{MODULE_A}} -> {{MODULE_B}}`: {{WHY_AND_ALLOWED_INTERACTION}}

## Main Data and Request Flows

1. [{{FACT_STATUS}}] {{TRIGGER_TO_RESULT_AT_MACRO_LEVEL}}

## Sync / Async Strategy

- [{{FACT_STATUS}}] Synchronous: {{WHEN_AND_WHY}}
- [{{FACT_STATUS}}] Asynchronous: {{WHEN_AND_WHY_OR_NOT_PLANNED}}
- [{{FACT_STATUS}}] Failure / retry direction: {{MACRO_POLICY}}

## Consistency and Transactions

- [{{FACT_STATUS}}] Source of Truth: {{SYSTEM_OR_BOUNDARY}}
- [{{FACT_STATUS}}] Strong consistency required for: {{BUSINESS_INVARIANT}}
- [{{FACT_STATUS}}] Eventual consistency acceptable for: {{CASE_AND_RECOVERY}}

## Cache and Messaging

- [{{FACT_STATUS}}] Cache: {{NEED_AND_ROLE_OR_NOT_PLANNED}}
- [{{FACT_STATUS}}] Messaging: {{NEED_AND_ROLE_OR_NOT_PLANNED}}

- [CONFIRMED] MUST NOT define concrete keys, topics, payloads, or all implementation details here.

## External Services

| Service | Purpose | Failure impact | Boundary | Status |
| --- | --- | --- | --- | --- |
| {{SERVICE}} | {{PURPOSE}} | {{IMPACT}} | {{OWNERSHIP_OR_FALLBACK}} | `{{FACT_STATUS}}` |

## Security and Observability

- [{{FACT_STATUS}}] Authentication / authorization direction: {{DIRECTION}}
- [{{FACT_STATUS}}] Sensitive data boundary: {{BOUNDARY}}
- [{{FACT_STATUS}}] Logging, metrics, and tracing direction: {{DIRECTION}}

## Deployment Direction

- [{{FACT_STATUS}}] {{ENVIRONMENTS_AND_HIGH_LEVEL_DEPLOYMENT_WITHOUT_PREMATURE_TOPOLOGY}}

## Architectural Risks and Revisit Triggers

- [{{FACT_STATUS}}] {{RISK}} - Revisit when: {{TRIGGER}}

## Related ADRs

- [{{FACT_STATUS}}] {{ADR_PATH_AND_DECISION_OR_NONE_CREATED_YET}}

---

## FILE: `docs/DATABASE.md`

# Database

## Scope

- [{{FACT_STATUS}}] {{WHAT_DATA_THIS_DOCUMENT_GOVERNS}}

## Database Selection

- [{{FACT_STATUS}}] Choice: {{DATABASE_TYPE_OR_PRODUCT}}
- [{{FACT_STATUS}}] Rationale and constraints: {{WHY}}

## Source of Truth Assignments

| Data concept | Owning boundary / system | Authority rule | Status |
| --- | --- | --- | --- |
| {{CONCEPT}} | {{OWNER}} | {{WHAT_WINS_ON_CONFLICT}} | `{{FACT_STATUS}}` |

## Core Entities and Relationships

| Entity / concept | Business meaning | Key relationships | Status |
| --- | --- | --- | --- |
| {{ENTITY}} | {{MEANING}} | {{RELATIONSHIPS_AT_MACRO_LEVEL}} | `{{FACT_STATUS}}` |

- [CONFIRMED] MUST NOT freeze all tables or fields during project initialization.

## Project-Level Conventions

- [{{FACT_STATUS}}] Naming: {{CONVENTION_OR_RECOMMENDATION}}
- [{{FACT_STATUS}}] IDs: {{STRATEGY_AND_EXTERNAL_EXPOSURE_RULE}}
- [{{FACT_STATUS}}] Time: {{TIMEZONE_STORAGE_AND_DISPLAY_DIRECTION}}
- [{{FACT_STATUS}}] Unique constraints: {{BUSINESS_UNIQUENESS_DIRECTION}}
- [{{FACT_STATUS}}] Indexes: {{RISK_BASED_PRINCIPLE_NOT_FULL_LIST}}

## Transactions and Consistency

- [{{FACT_STATUS}}] Transaction boundaries: {{BUSINESS_BOUNDARY_DIRECTION}}
- [{{FACT_STATUS}}] Concurrency / atomicity risks: {{RISKS_AND_DIRECTION}}
- [{{FACT_STATUS}}] Cross-boundary consistency: {{POLICY}}

## Delete, Retention and Audit

- [{{FACT_STATUS}}] Delete strategy: {{HARD_SOFT_OR_DOMAIN_DEPENDENT}}
- [{{FACT_STATUS}}] Retention / privacy: {{POLICY}}
- [{{FACT_STATUS}}] Audit requirements: {{POLICY}}

## Cache Relationship

- [{{FACT_STATUS}}] {{CACHE_IS_DERIVED_OR_AUTHORITATIVE_AND_INVALIDATION_DIRECTION}}

## Evolution Rules

- [CONFIRMED] Concrete Schema evolves with Feature Specs and migrations.
- [CONFIRMED] A Feature MUST NOT silently change Source of Truth or shared conventions.
- [CONFIRMED] L2/L3 changes require impact analysis, named-authority approval, and documentation sync.

## Open Items

- [UNKNOWN, NON_BLOCKING] {{ITEM}} - Resolve by: {{MILESTONE}}

---

## FILE: `docs/API.md`

# API

## Scope and Consumers

- [{{FACT_STATUS}}] {{INTERFACES_AND_PRIMARY_CALLERS_COVERED}}

## Style

- [{{FACT_STATUS}}] Protocol / style: {{REST_RPC_GRAPHQL_EVENTS_OR_OTHER}}
- [{{FACT_STATUS}}] Rationale: {{WHY}}

## Global Conventions

- [{{FACT_STATUS}}] Base URL and versioning: {{DIRECTION}}
- [{{FACT_STATUS}}] Method semantics: {{DIRECTION}}
- [{{FACT_STATUS}}] Content types / serialization: {{DIRECTION}}
- [{{FACT_STATUS}}] IDs: {{FORMAT_AND_OPACITY_RULE}}
- [{{FACT_STATUS}}] Time: {{FORMAT_AND_TIMEZONE_RULE}}
- [{{FACT_STATUS}}] Pagination: {{DEFAULT_APPROACH}}

## Authentication and Authorization

- [{{FACT_STATUS}}] Authentication: {{MECHANISM_DIRECTION}}
- [{{FACT_STATUS}}] Authorization: {{CAPABILITY_OR_OWNERSHIP_RULE}}
- [{{FACT_STATUS}}] Service-to-service access: {{IF_APPLICABLE}}

## Response and Error Model

- [{{FACT_STATUS}}] Success response principle: {{PRINCIPLE}}
- [{{FACT_STATUS}}] Error structure: {{PROJECT_LEVEL_SHAPE_DIRECTION}}
- [{{FACT_STATUS}}] Business vs validation vs system errors: {{MAPPING_PRINCIPLE}}
- [{{FACT_STATUS}}] Correlation / trace ID: {{POLICY}}

## Idempotency, Retry and Concurrency

- [{{FACT_STATUS}}] Idempotency required for: {{OPERATIONS_OR_RISK_CLASS}}
- [{{FACT_STATUS}}] Retry policy: {{WHO_MAY_RETRY_AND_WHEN}}
- [{{FACT_STATUS}}] Conflict behavior: {{MACRO_POLICY}}

## Compatibility and Evolution

- [{{FACT_STATUS}}] {{BACKWARD_COMPATIBILITY_AND_DEPRECATION_DIRECTION}}

## Feature Contract Rule

- [CONFIRMED] Concrete business endpoints, event payloads, and frontend/backend contracts are refined with the owning Feature Spec. MUST NOT predefine every API here.

## Open Items

- [UNKNOWN, NON_BLOCKING] {{ITEM}} - Resolve by: {{MILESTONE}}

---

## FILE: `docs/TESTING.md`

# Testing

## Testing Philosophy

- [CONFIRMED] Define correct behavior and observable evidence before implementation.
- [CONFIRMED] Test behavior and contracts, not internal implementation structure.
- [CONFIRMED] Choose depth by risk; MUST NOT optimize for test count.
- [CONFIRMED] Bug fixes should include a regression test when practical.
- [CONFIRMED] Exact-copy assertions MAY contain Product Content Language; executable test names/descriptions and assertion code remain under Engineering Language.

## Risk Map

| Risk / behavior | Impact | Preferred evidence | Status |
| --- | --- | --- | --- |
| {{RISK}} | {{IMPACT}} | {{TEST_LEVEL_OR_CHECK}} | `{{FACT_STATUS}}` |

## Test Layers

| Layer | Use for | Avoid | Status |
| --- | --- | --- | --- |
| Unit | {{PURE_RULES_AND_STATE_TRANSITIONS}} | {{FRAMEWORK_INTERNALS}} | `{{FACT_STATUS}}` |
| Integration | {{DB_EXTERNAL_BOUNDARIES_TRANSACTIONS}} | {{DUPLICATING_ALL_UNIT_CASES}} | `{{FACT_STATUS}}` |
| API / Contract | {{PUBLIC_BEHAVIOR_ERRORS_AUTH}} | {{PRIVATE_METHODS}} | `{{FACT_STATUS}}` |
| Component / Interaction | {{UI_BEHAVIOR_IF_APPLICABLE}} | {{VISUAL_DETAILS_WITHOUT_VALUE}} | `{{FACT_STATUS}}` |
| E2E | {{CRITICAL_USER_JOURNEYS}} | {{EVERY_EDGE_CASE}} | `{{FACT_STATUS}}` |

<!-- Template note: Delete inapplicable layers. Add Accessibility, Visual Regression, Smoke, Concurrency, or Performance only where risk justifies them. -->

## Environments and Test Data

- [{{FACT_STATUS}}] Environments: {{LOCAL_CI_STAGING_DIRECTION}}
- [{{FACT_STATUS}}] Isolation: {{ISOLATION_STRATEGY}}
- [{{FACT_STATUS}}] Test data: {{FACTORY_FIXTURE_SEED_OR_OTHER_DIRECTION}}
- [{{FACT_STATUS}}] External services: {{FAKE_SANDBOX_CONTAINER_OR_CONTRACT_DIRECTION}}

## Commands

```text
{{REAL_TEST_COMMANDS}}
```

## Feature Test Design Rule

- [CONFIRMED] Each Feature MUST progress from Acceptance Criteria to Test Scenarios before Coding. DRAFT Specs contain only initial acceptance direction; detailed Test Design belongs to `feature-dev`.

## Definition of Done

- [CONFIRMED] Required behavior and important failure paths are verified.
- [CONFIRMED] Relevant regression, integration, and UI checks pass.
- [CONFIRMED] Build/lint/static checks required by the project pass.
- [CONFIRMED] Documentation, Spec, Issue, and the project's adopted PR/MR or equivalent Delivery Record are synchronized.

---

## FILE: `docs/adr/README.md`

# Architecture Decision Records

- [CONFIRMED] ADRs record why significant architecture or technology decisions were made. They are not used for routine implementation details.

## Naming

```text
NNNN-short-decision-title.md
```

## Status

`Proposed | Accepted | Effective | Superseded | Deprecated`

- [CONFIRMED] `Proposed` identifies a candidate and does not authorize Coding. The project MUST define whether `Accepted`, `Effective`, or another explicit equivalent is the project's implementation-authorizing state (for example, Accepted or Effective). Every L3 ADR MUST identify a named Architecture Decision Authority and its input revision; approval source, time, and scope MUST be complete before Coding begins or resumes, not added only after implementation.

## Index

| ADR | Decision | Fact Status | ADR Status | Date |
| --- | --- | --- | --- | --- |
| `{{ADR_FILE}}` | {{DECISION}} | `{{FACT_STATUS}}` | {{ADR_STATUS}} | {{YYYY-MM-DD}} |

## When to Create an ADR

- [CONFIRMED] Create one for significant module boundaries, technology choices, Source of Truth, messaging, cache, authentication, database strategy, frontend architecture, global navigation, Design System core, API style, or consistency decisions. A named Architecture Decision Authority MUST approve an L3 decision before its ADR reaches the project's implementation-authorizing state (for example, Accepted or Effective).

- [CONFIRMED] MUST NOT create one for ordinary functions, DTOs, component-local choices, or visual spacing.

---

## FILE: `docs/adr/NNNN-short-decision-title.md`

# {{DECISION_TITLE}}

- Status: one of `Proposed | Accepted | Effective | Superseded | Deprecated`
- Date: {{YYYY-MM-DD}}
- Owners: {{DECISION_OWNERS}}
- Architecture Decision Authority: {{NAMED_AUTHORITY_AND_ROLE}}
- Approval Source: {{APPROVAL_RECORD_OR_PENDING}}
- Approval Time: {{APPROVAL_TIMESTAMP_OR_PENDING}}
- Approval Scope: {{APPROVED_DECISION_SCOPE_OR_PENDING}}
- Input Revision: {{SPEC_DESIGN_OR_BASELINE_REVISION}}
- Supersedes / Superseded by: {{ADR_REFERENCE_IF_ANY}}

- [CONFIRMED] Approval MUST bind the stated Input Revision and Approval Scope. Before Coding begins or resumes, approval metadata MUST be complete and this ADR MUST reach the project's implementation-authorizing state (for example, Accepted or Effective).

## Context

- [{{FACT_STATUS}}] {{FORCES_CONSTRAINTS_AND_PROBLEM}}

## Decision

- [{{FACT_STATUS}}] {{DECISION_AND_SCOPE}}

## Alternatives

| Alternative | Benefits | Costs / reason not chosen | Status |
| --- | --- | --- | --- |
| {{OPTION}} | {{BENEFITS}} | {{COSTS}} | `{{FACT_STATUS}}` |

## Reasoning

- [{{FACT_STATUS}}] {{WHY_THIS_OPTION_BEST_FITS_CURRENT_CONSTRAINTS}}

## Consequences

- [{{FACT_STATUS}}] Positive: {{CONSEQUENCE}}
- [{{FACT_STATUS}}] Negative / tradeoff: {{CONSEQUENCE}}
- [{{FACT_STATUS}}] Follow-up: {{ACTION_OR_REVISIT_TRIGGER}}
