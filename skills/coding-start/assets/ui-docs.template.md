# UI Docs Templates

Use only for a confirmed `UI: YES` project. Copy each applicable `FILE` section to its target, replace every `{{PLACEHOLDER}}`, and delete inapplicable sections. These documents establish project-level direction and MUST NOT freeze every screen, component, or pixel value.

Formal artifact prose follows Documentation Language. New engineering names follow Engineering Language. Product Content Language permits localized resource/configuration values, clearly labeled exact product-copy quotations, and exact-copy assertions; surrounding formal prose remains under Documentation Language, while executable test names/descriptions, assertion code, and other engineering text remain under Engineering Language. Any override requires both an explicit request and approval by a named authority empowered for project language policy; the requester is not automatically that authority. Replace any unavailable command with exactly `Not yet established`; MUST NOT invent commands.

Every material frontend architecture, UX, UI, or Design System statement MUST retain an explicit status. Replace each `{{FACT_STATUS}}` with exactly `CONFIRMED`, `RECOMMENDED`, or `UNKNOWN, NON_BLOCKING`. Keep the bracketed status on prose and the `Status` column in tables; MUST NOT infer status from nearby text.

---

## FILE: `docs/FRONTEND.md`

# Frontend Architecture

## Scope and Platforms

- [{{FACT_STATUS}}] Platforms: {{WEB_MOBILE_DESKTOP_ADMIN_OR_OTHER}}
- [{{FACT_STATUS}}] Primary device: {{DESKTOP_MOBILE_TABLET_MIXED}}
- [{{FACT_STATUS}}] Responsive / adaptive direction: {{DIRECTION}}

## Technology

| Concern | Choice | Status | Rationale / revisit trigger |
| --- | --- | --- | --- |
| Framework | {{CHOICE}} | `{{FACT_STATUS}}` | {{WHY}} |
| Build | {{CHOICE}} | `{{FACT_STATUS}}` | {{WHY}} |
| UI library | {{CHOICE_OR_NONE}} | `{{FACT_STATUS}}` | {{WHY}} |

## Application Structure

- [{{FACT_STATUS}}] {{HIGH_LEVEL_APP_BOUNDARIES_AND_ORGANIZATION}}

- [CONFIRMED] MUST NOT define every directory or component during macro design.

## Routing and Navigation Integration

- [{{FACT_STATUS}}] Routing strategy: {{DIRECTION}}
- [{{FACT_STATUS}}] Route ownership / guards: {{RULE}}
- [{{FACT_STATUS}}] Navigation source: {{RULE}}
- [{{FACT_STATUS}}] Not found and unauthorized behavior: {{DIRECTION}}

## State and Data Access

- [{{FACT_STATUS}}] Local UI state: {{DIRECTION}}
- [{{FACT_STATUS}}] Shared client state: {{DIRECTION}}
- [{{FACT_STATUS}}] Server state / cache: {{DIRECTION}}
- [{{FACT_STATUS}}] API client and error normalization: {{DIRECTION}}
- [{{FACT_STATUS}}] Authentication state: {{DIRECTION}}
- [{{FACT_STATUS}}] Persistence / local storage: {{BOUNDARY_AND_SECURITY_RULE}}

## Forms and Validation

- [{{FACT_STATUS}}] Form handling: {{DIRECTION}}
- [{{FACT_STATUS}}] Client/server validation split: {{RULE}}
- [{{FACT_STATUS}}] Error display and focus behavior: {{RULE}}

## Components and Styling

- [{{FACT_STATUS}}] Page vs shared component responsibilities: {{RULE}}
- [CONFIRMED] Component reuse: prefer existing project components and Design System.
- [{{FACT_STATUS}}] Styling strategy: {{DIRECTION}}
- [{{FACT_STATUS}}] Design token source: {{DESIGN_SYSTEM_DOCUMENT_LIBRARY_OR_MINIMAL_UI_RULES}}

## Error, Loading, and Recovery

- [{{FACT_STATUS}}] Error Boundary direction: {{DIRECTION}}
- [{{FACT_STATUS}}] Loading / suspense direction: {{DIRECTION}}
- [{{FACT_STATUS}}] API error to UI state mapping: {{RULE}}
- [{{FACT_STATUS}}] Retry, offline, and recovery: {{DIRECTION}}

## Accessibility

- [{{FACT_STATUS}}] Keyboard and focus: {{RULE}}
- [{{FACT_STATUS}}] Semantics and labels: {{RULE}}
- [{{FACT_STATUS}}] Contrast and motion: {{RULE}}

## Testing and Build

- [{{FACT_STATUS}}] Component / interaction: {{DIRECTION}}
- [{{FACT_STATUS}}] E2E: {{CRITICAL_PATH_DIRECTION}}
- [{{FACT_STATUS}}] Accessibility / visual checks: {{RISK_BASED_DIRECTION}}
- Build and test commands: {{REAL_COMMANDS}}

## Constraints and Revisit Triggers

- [{{FACT_STATUS}}] {{CONSTRAINT_OR_RECOMMENDATION_AND_TRIGGER}}

---

## FILE: `docs/UX.md`

# User Experience

## User Goals

| User / role | Goal | Success signal | Status |
| --- | --- | --- | --- |
| {{USER}} | {{GOAL}} | {{OBSERVABLE_OUTCOME}} | `{{FACT_STATUS}}` |

## Primary User Flows

### {{FLOW_NAME}}

- [{{FACT_STATUS}}] Flow definition

```text
{{ENTRY}}
-> {{STEP}}
-> {{DECISION_OR_ACTION}}
-> {{SUCCESS_OUTCOME}}
```

- [{{FACT_STATUS}}] Failure path: {{HOW_USER_UNDERSTANDS_AND_RECOVERS}}
- [{{FACT_STATUS}}] Interruption / return: {{RESUME_OR_CANCEL_BEHAVIOR}}
- [{{FACT_STATUS}}] Permission boundary: {{BEHAVIOR_IF_DENIED}}

## Information Architecture

| Area | Responsibility | Primary users | Entry / relation | Status |
| --- | --- | --- | --- | --- |
| {{AREA}} | {{RESPONSIBILITY}} | {{USERS}} | {{ENTRY_OR_PARENT}} | `{{FACT_STATUS}}` |

## Page / Screen Map

| Screen | User task | Key information / action | Related flow | Status |
| --- | --- | --- | --- | --- |
| {{SCREEN}} | {{TASK}} | {{CONTENT_OR_ACTION}} | {{FLOW}} | `{{FACT_STATUS}}` |

## Navigation

- [{{FACT_STATUS}}] Primary navigation: {{DIRECTION}}
- [{{FACT_STATUS}}] Secondary / contextual navigation: {{DIRECTION}}
- [{{FACT_STATUS}}] Back, cancel, and deep-link behavior: {{DIRECTION}}

## Interaction Principles

- [{{FACT_STATUS}}] {{PRINCIPLE_TIED_TO_USER_BEHAVIOR}}
- [{{FACT_STATUS}}] Dangerous actions: {{CONFIRM_UNDO_OR_OTHER_RULE}}
- [{{FACT_STATUS}}] Long-running actions: {{PROGRESS_AND_RECOVERY_RULE}}

## State and Feedback Principles

| State | Project-level behavior | Status |
| --- | --- | --- |
| Loading | {{BEHAVIOR}} | `{{FACT_STATUS}}` |
| Empty | {{BEHAVIOR}} | `{{FACT_STATUS}}` |
| Error | {{BEHAVIOR_AND_RECOVERY}} | `{{FACT_STATUS}}` |
| Success | {{BEHAVIOR_AND_NEXT_STEP}} | `{{FACT_STATUS}}` |
| Disabled | {{WHEN_AND_EXPLANATION}} | `{{FACT_STATUS}}` |
| Permission denied | {{BEHAVIOR}} | `{{FACT_STATUS}}` |
| Offline / network failure | {{IF_RELEVANT}} | `{{FACT_STATUS}}` |

<!-- Template note: Delete irrelevant rows only after consciously confirming their inapplicability. -->

## Accessibility

- [{{FACT_STATUS}}] Keyboard path: {{DIRECTION}}
- [{{FACT_STATUS}}] Focus management: {{DIRECTION}}
- [{{FACT_STATUS}}] Screen reader / semantics: {{DIRECTION}}
- [{{FACT_STATUS}}] Labels and errors: {{DIRECTION}}
- [{{FACT_STATUS}}] Reduced motion: {{DIRECTION}}

## Responsive UX

- [{{FACT_STATUS}}] {{HOW_TASKS_AND_INFORMATION_PRIORITY_CHANGE_ACROSS_TARGET_DEVICES}}

## Internationalization and Theme

- [{{FACT_STATUS}}] Product Content Language: {{RECORDED_PRODUCT_CONTENT_LANGUAGE}}
- [{{FACT_STATUS}}] Locale / RTL / time / currency: {{ONLY_IF_REQUIRED}}
- [{{FACT_STATUS}}] Light / dark / system theme: {{ONLY_IF_REQUIRED}}

- [CONFIRMED] Localized values and clearly labeled exact product-copy quotations MAY use Product Content Language; surrounding UX prose remains under Documentation Language.

## Open UX Questions

- [UNKNOWN, NON_BLOCKING] {{QUESTION}} - Resolve during: {{FEATURE}}

---

## FILE: `docs/UI.md`

# User Interface

## Interface Direction

- [{{FACT_STATUS}}] {{OVERALL_INTERFACE_CHARACTER_AND_BEHAVIORAL_GOAL}}

## Layout Principles

- [{{FACT_STATUS}}] Global layout: {{DIRECTION}}
- [{{FACT_STATUS}}] Content hierarchy: {{DIRECTION}}
- [{{FACT_STATUS}}] Density and whitespace: {{DIRECTION}}
- [{{FACT_STATUS}}] Responsive layout: {{DIRECTION}}

## Global Regions

| Region | Responsibility | Behavior | Status |
| --- | --- | --- | --- |
| Header | {{RESPONSIBILITY}} | {{BEHAVIOR}} | `{{FACT_STATUS}}` |
| Sidebar / primary nav | {{RESPONSIBILITY_OR_DELETE}} | {{BEHAVIOR}} | `{{FACT_STATUS}}` |
| Main content | {{RESPONSIBILITY}} | {{BEHAVIOR}} | `{{FACT_STATUS}}` |

## Page Patterns

### Forms

- [{{FACT_STATUS}}] {{LABEL_VALIDATION_ACTION_AND_ERROR_PATTERN}}

### Lists and Tables

- [{{FACT_STATUS}}] {{SCAN_FILTER_SORT_PAGINATION_AND_EMPTY_PATTERN}}

### Detail Views

- [{{FACT_STATUS}}] {{HIERARCHY_ACTION_AND_STATUS_PATTERN}}

### Modal and Drawer

- [{{FACT_STATUS}}] {{WHEN_TO_USE_FOCUS_CLOSE_AND_DESTRUCTIVE_RULE}}

<!-- Template note: Delete patterns the product does not need. -->

## Feedback and UI States

- [{{FACT_STATUS}}] Loading: {{VISUAL_AND_INTERACTION_DIRECTION}}
- [{{FACT_STATUS}}] Empty: {{EXPLANATION_AND_NEXT_ACTION}}
- [{{FACT_STATUS}}] Error: {{MESSAGE_RECOVERY_AND_API_MAPPING}}
- [{{FACT_STATUS}}] Success: {{CONFIRMATION_AND_NEXT_ACTION}}
- [{{FACT_STATUS}}] Disabled / permission / offline: {{WHEN_RELEVANT}}

## Content and Iconography

- [{{FACT_STATUS}}] Product Content Language / tone: {{RECORDED_LANGUAGE_AND_DIRECTION}}
- [{{FACT_STATUS}}] Labels and calls to action: {{DIRECTION_OR_LABELED_EXACT_PRODUCT_COPY}}
- [{{FACT_STATUS}}] Icons: {{SOURCE_AND_USAGE_RULE}}

- [CONFIRMED] Exact labels or calls to action MAY use Product Content Language only when clearly identified as exact product copy. Surrounding UI guidance remains under Documentation Language.

## Boundary with Design System

- [CONFIRMED] This document defines page structure and interface behavior. When a separate `docs/DESIGN_SYSTEM.md` exists, it owns tokens and reusable component specifications. Otherwise keep only the project's minimal shared visual direction here and create a separate Design System document when reuse requires it.

## Feature-Level Detail

- [CONFIRMED] Concrete screens, states, and interactions are refined by the owning Feature after `SPEC READY`; MUST NOT freeze them here.

---

## FILE: `docs/DESIGN_SYSTEM.md`

# Design System

## Purpose and Direction

- [{{FACT_STATUS}}] {{WHY_A_SHARED_VISUAL_AND_COMPONENT_SYSTEM_IS_NEEDED}}

- [{{FACT_STATUS}}] Visual direction: {{DIRECTION}}
- [{{FACT_STATUS}}] Existing brand / Figma / library source: {{SOURCE_OR_NONE}}
- [CONFIRMED] Extension rule: reuse before extending; extend only for an explicit unmet need.

## Token Direction

<!-- Template note: Record semantic systems, not an exhaustive premature token dump. -->

| Token group | Direction / source | Status |
| --- | --- | --- |
| Typography | {{DIRECTION}} | `{{FACT_STATUS}}` |
| Color | {{SEMANTIC_COLOR_DIRECTION}} | `{{FACT_STATUS}}` |
| Spacing | {{SCALE_DIRECTION}} | `{{FACT_STATUS}}` |
| Radius | {{DIRECTION}} | `{{FACT_STATUS}}` |
| Shadow / elevation | {{DIRECTION}} | `{{FACT_STATUS}}` |
| Breakpoints | {{TARGET_DEVICE_DIRECTION}} | `{{FACT_STATUS}}` |
| Motion | {{DIRECTION_AND_REDUCED_MOTION_RULE}} | `{{FACT_STATUS}}` |
| Icon | {{ICON_STYLE_AND_SOURCE_RULE}} | `{{FACT_STATUS}}` |

## Foundational Components

| Component | Required variants / states | Accessibility rule | Status |
| --- | --- | --- | --- |
| Button | {{VARIANTS_LOADING_DISABLED}} | {{FOCUS_ACCESSIBLE_NAME_AND_KEYBOARD_RULE}} | `{{FACT_STATUS}}` |
| Input / Form | {{VALID_ERROR_DISABLED}} | {{LABEL_ERROR_ASSOCIATION}} | `{{FACT_STATUS}}` |
| Card | {{ONLY_IF_NEEDED}} | {{SEMANTIC_RULE}} | `{{FACT_STATUS}}` |
| Table / List | {{ONLY_IF_NEEDED}} | {{NAVIGATION_AND_HEADERS}} | `{{FACT_STATUS}}` |
| Modal / Drawer | {{ONLY_IF_NEEDED}} | {{FOCUS_TRAP_RETURN_ESCAPE}} | `{{FACT_STATUS}}` |
| Toast / Alert | {{SEVERITY_AND_DURATION}} | {{ANNOUNCEMENT_RULE}} | `{{FACT_STATUS}}` |

<!-- Template note: Delete components not needed at project level; add new ones only when multiple Features need a shared contract. -->

## Shared States

- [{{FACT_STATUS}}] Loading / Skeleton: {{RULE}}
- [{{FACT_STATUS}}] Empty: {{RULE}}
- [{{FACT_STATUS}}] Error: {{RULE}}
- [{{FACT_STATUS}}] Success: {{RULE}}
- [{{FACT_STATUS}}] Focus: {{RULE}}
- [{{FACT_STATUS}}] Disabled: {{RULE}}

## Usage and Governance

1. [CONFIRMED] Feature development first reuses existing tokens and components.
2. [CONFIRMED] A Feature MUST NOT create a separate visual language.
3. [CONFIRMED] A missing capability MUST be demonstrated before extending the system.
4. [CONFIRMED] Shared changes require impact analysis across affected Features and UI tests.
5. [CONFIRMED] Every newly confirmed L3 change to Design System core requires approval by a named Architecture Decision Authority, documentation sync, and an ADR in the project's implementation-authorizing state (for example, Accepted or Effective) before Coding begins or resumes.

## Open Items

- [RECOMMENDED] {{DIRECTION}} - Revisit when: {{TRIGGER}}
