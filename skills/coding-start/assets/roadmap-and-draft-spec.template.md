# Roadmap and DRAFT Spec Templates

Copy the first `FILE` section to `specs/ROADMAP.md`. Copy the second `FILE` section to `specs/Fxxx-feature-slug/spec.md` for every Feature. Replace all placeholders and delete inapplicable sections, but retain explicit Open Questions.

On successful completion, the Roadmap has exactly one `NEXT` confirmed by a named Roadmap Decision Authority. Other initial Features are `DRAFT`; use `BLOCKED` only for a concrete external blocker. If every safe candidate has a currently unresolvable external blocker, use `BLOCKED_HANDOFF`: allow zero `NEXT` entries, remove the sole-`NEXT` statement, and record owner, unblock condition, and resume stage. In both branches, every Feature Spec remains `DRAFT` and MUST NOT be marked `READY`.

Roadmap and Spec prose follows Documentation Language. New engineering names inside them follow Engineering Language. Product Content Language permits localized resource/configuration values, clearly labeled exact product-copy quotations, and exact-copy assertions; surrounding formal prose remains under Documentation Language, while surrounding engineering text remains under Engineering Language. Any override requires both an explicit request and approval by a named `Maintainer Decision Authority` empowered for project language policy; the requester is not automatically that authority.

Every material Roadmap or Spec claim MUST carry `CONFIRMED`, `RECOMMENDED`, or `UNKNOWN` inline or in a dedicated Fact Status column. Roadmap lifecycle status and Spec maturity MUST NOT substitute for Fact Status.

---

## FILE: `specs/ROADMAP.md`

# Feature Roadmap

## Product Milestone

[{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{PHASE_1_OUTCOME_AND_BOUNDARY}}

## Status Contract

| Status | Meaning |
| --- | --- |
| `DRAFT` | Feature is mapped at macro level and remains intentionally shallow. |
| `NEXT` | The sole Feature selected for refinement by `feature-dev`. |
| `READY` | `SPEC READY`, `UI READY` or an explicit UI skip, `TEST DESIGN READY`, and a valid current Plan and Tasks; `coding-start` MUST NOT set it. |
| `IN_PROGRESS` | Implementation is active. |
| `REVIEW` | Implementation and evidence are under review. |
| `DONE` | Delivery and documentation sync are complete. |
| `BLOCKED` | A named blocker prevents progress. |

## Feature Map

| ID | Name | Goal | Business Value | Priority | Dependencies | Roadmap Status | Fact Status | Summary / Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `F001` | {{FEATURE_NAME}} | {{GOAL}} | {{VALUE}} | `P0/P1/P2` | {{NONE_OR_IDS}} | `{{DRAFT_OR_NEXT_OR_BLOCKED}}` | `{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}` | {{SHALLOW_SUMMARY_AND_EVIDENCE}} |
| `F002` | {{FEATURE_NAME}} | {{GOAL}} | {{VALUE}} | `P0/P1/P2` | {{NONE_OR_IDS}} | `{{DRAFT_OR_NEXT_OR_BLOCKED}}` | `{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}` | {{SHALLOW_SUMMARY_AND_EVIDENCE}} |

Use only `DRAFT/NEXT/READY/IN_PROGRESS/REVIEW/DONE/BLOCKED`.

- Confirmed NEXT branch: use exactly one `NEXT`, `DRAFT` for other unblocked Features, and `BLOCKED` only with a concrete named blocker.
- BLOCKED_HANDOFF branch: use zero `NEXT` entries; mark affected candidates `BLOCKED` with concrete named blockers and leave other Features `DRAFT`.

## Dependency View

```text
[{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{FEATURE_ID}} -> {{FEATURE_ID}}  # second Feature depends on first; {{EVIDENCE_OR_RATIONALE}}
```

## Handoff

Keep exactly one branch below.

### Branch A: Confirmed NEXT

- Feature: `{{FEATURE_ID}} {{FEATURE_NAME}}`
- Selection: `[CONFIRMED]` by {{NAMED_ROADMAP_DECISION_AUTHORITY_AND_ROLE}}
- Why now: `[CONFIRMED/RECOMMENDED]` {{SMALLEST_END_TO_END_VALUE_AND_RISK_REDUCTION}}
- Dependencies satisfied: `[CONFIRMED]` {{EVIDENCE}}
- Expected learning: `[RECOMMENDED]` {{PRODUCT_OR_ARCHITECTURE_ASSUMPTION_TO_VALIDATE}}
- Refinement still required: `[UNKNOWN, NON_BLOCKING]` {{OPEN_QUESTIONS_FOR_FEATURE_DEV}}

### Branch B: BLOCKED_HANDOFF

- NEXT Feature: `NONE`
- Status: `INITIALIZATION INCOMPLETE`
- Blocked candidates: `[CONFIRMED]` {{FEATURE_IDS_AND_BLOCKERS}}
- Owner / Decision Authority: `[CONFIRMED]` {{NAMED_HUMAN_OR_EXTERNAL_OWNER}}
- Unblock condition: `[CONFIRMED/UNKNOWN]` {{CONCRETE_CONDITION}}
- Resume from: `NEXT_SELECTION`
- MUST NOT invoke `feature-dev` until a NEXT Feature is confirmed.

## Sequencing Notes

- [RECOMMENDED] {{WHY_OTHER_HIGH_PRIORITY_FEATURE_IS_NOT_NEXT_YET}}

## Roadmap Risks

- [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{RISK_OR_DEPENDENCY}} - Mitigation / decision point: {{ACTION}}

---

## FILE: `specs/Fxxx-feature-slug/spec.md`

# {{FEATURE_ID}}: {{FEATURE_TITLE}}

- Spec Status: `DRAFT`
- Roadmap Status: `DRAFT/NEXT/BLOCKED`
- Fact Status rule: every material claim below uses `CONFIRMED`, `RECOMMENDED`, or `UNKNOWN`
- Priority: `P0/P1/P2`
- Owner: Unassigned until Feature development starts
- Last Updated: {{YYYY-MM-DD}}

> This is a macro-level DRAFT created during `coding-start`. It is not `SPEC READY`, does not authorize Coding, and MUST be refined by `feature-dev`.

## Goal

[{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{USER_OR_BUSINESS_OUTCOME}}

## Business Value

[{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{WHY_THIS_FEATURE_MATTERS}}

## User Story

[{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] As a {{USER_OR_ROLE}}, I want {{CAPABILITY}}, so that {{OUTCOME}}.

## Scope

- [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{IN_SCOPE_BEHAVIOR_OR_OUTCOME}}

## Out of Scope

- [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{EXPLICITLY_EXCLUDED_ITEM}}

## Main Flow

1. [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{TRIGGER_OR_ENTRY}}
2. [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{MAJOR_USER_OR_SYSTEM_STEP}}
3. [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{OBSERVABLE_RESULT}}

## Core Business Rules

- [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{RULE_AT_BEHAVIOR_LEVEL}}
- [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{STATE_PERMISSION_UNIQUENESS_OR_FAILURE_RULE_IF_KNOWN}}

MUST NOT translate these rules into classes, tables, or internal methods yet.

## Main Entities / Concepts

| Concept | Role in this Feature | Source of Truth / owner | Fact Status |
| --- | --- | --- | --- |
| {{CONCEPT}} | {{BUSINESS_ROLE}} | {{OWNER_OR_OPEN_QUESTION}} | `{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}` |

## Major API / Integration Impact

- [{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}] {{CALLER_AND_CAPABILITY_OR_NONE}}

Record only the likely contract boundary. Request/response DTOs, event payloads and endpoint details wait for refinement.

## UI Impact

- UI involved: `YES/NO`
- Fact Status: `{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}`
- Affected screens: {{INITIAL_SCREEN_LIST_OR_NONE}}
- Primary user flow: {{INITIAL_FLOW_OR_NONE}}
- Major UI states: {{LOADING_EMPTY_ERROR_SUCCESS_AND_RELEVANT_OTHERS_OR_NONE}}

Keep this at macro level. Detailed UX Flow, UI State Matrix and component design belong to the selected Feature lifecycle.

## Dependencies

- Feature dependencies: `[{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}]` {{NONE_OR_FEATURE_IDS_AND_REASON}}
- External dependencies: `[{{CONFIRMED_RECOMMENDED_OR_UNKNOWN}}]` {{NONE_OR_SYSTEM_DECISION_DEPENDENCY}}

## Initial Acceptance Criteria

These are refinement inputs, not a complete Test Design.

- [ ] [{{CONFIRMED_OR_RECOMMENDED}}] Given {{CONTEXT}}, when {{ACTION}}, then {{OBSERVABLE_OUTCOME}}.
- [ ] [{{CONFIRMED_OR_RECOMMENDED}}] Given {{IMPORTANT_FAILURE_OR_BOUNDARY}}, when {{ACTION}}, then {{OBSERVABLE_BEHAVIOR}}.

## Risks and Assumptions

- [CONFIRMED] {{FACT_IF_ANY}}
- [RECOMMENDED] {{LOW_RISK_DEFAULT}} - Revisit when: {{TRIGGER}}
- [UNKNOWN, NON_BLOCKING] {{ASSUMPTION}} - Resolve during: Feature refinement

## Open Questions

- [ ] [UNKNOWN, NON_BLOCKING] {{QUESTION_THAT_FEATURE_DEV_MUST_RESOLVE}}

## Deliberately Deferred Detail

- DTOs and concrete request/response schemas
- Database fields, indexes and migrations
- Classes, packages, components and internal functions
- Cache keys, message topics and deployment minutiae
- Pixel-level UI and complete Test Design

Delete a deferred category only if it is genuinely inapplicable; MUST NOT fill it during `coding-start`.
