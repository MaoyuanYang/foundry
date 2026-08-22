# Discovery Interview Guide

Use this guide for a Greenfield Project Interview. It is a dynamic decision tree, not a checklist to complete in one round.

## Interview Output

Maintain a concise Ledger throughout the conversation:

| Topic | Status | Current understanding | Challenge / evidence | Impact / next action |
| --- | --- | --- | --- | --- |
| {{TOPIC}} | `CONFIRMED/RECOMMENDED/UNKNOWN` | {{VALUE}} | {{WHY_THIS_SURVIVES_OR_NEEDS_CHALLENGE}} | {{WHY_IT_MATTERS_OR_WHEN_TO_VALIDATE}} |

Status rules:

- `CONFIRMED` means evidence or an informed human confirms a fact. A high-impact decision requires approval by a named, empowered Decision Authority.
- `RECOMMENDED` MUST include rationale, cost, and applicability. Change it to `CONFIRMED` only after the appropriate confirmer accepts it.
- `UNKNOWN` MUST be marked `BLOCKING` or `NON_BLOCKING`.
- If a new answer conflicts with an earlier answer, expose the conflict; MUST NOT silently overwrite it.

## Language Dimensions

Discovery MUST record all three dimensions before Macro Readiness:

| Dimension | Default / value | Status | Override request | Named language-policy authority / approval | Scope or next action |
| --- | --- | --- | --- | --- | --- |
| Documentation Language | `en` | `CONFIRMED` | {{NONE_OR_EXPLICIT_REQUEST_SOURCE}} | {{DEFAULT_POLICY_OR_NAMED_AUTHORITY_AND_APPROVAL_SOURCE}} | Formal artifact prose in README, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records |
| Engineering Language | `en` | `CONFIRMED` | {{NONE_OR_EXPLICIT_REQUEST_SOURCE}} | {{DEFAULT_POLICY_OR_NAMED_AUTHORITY_AND_APPROVAL_SOURCE}} | New class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages |
| Product Content Language | {{BCP47_VALUES_OR_UNKNOWN_OR_NA}} | `CONFIRMED/RECOMMENDED/UNKNOWN` | {{PRODUCT_REQUIREMENT_OR_EXPLICIT_CHANGE_REQUEST}} | {{NAMED_AUTHORITY_AND_APPROVAL_SOURCE_OR_PENDING}} | Localized resource/configuration values, labeled exact-copy quotations, exact-copy assertions, or `N/A - no product-content surface`; include scope and resolution action when unresolved |

Apply these exact defaults unless an override is explicitly requested and approved by a named human empowered for project language policy:

```text
documentation_language = en
engineering_language = en
```

Documentation Language governs formal artifact prose. Engineering Language governs the engineering names and workflow text listed in the matrix; configuration keys are included, arbitrary configuration values are not. Product Content Language follows product requirements and permits localized resource/configuration values, exact product copy quoted in clearly labeled docs, and exact-copy assertions. Surrounding formal prose remains under Documentation Language; executable test names/descriptions, assertion code, and other engineering text remain under Engineering Language.

Conversation MAY follow the user's language, but MUST NOT change any dimension. Every override MUST be explicitly requested and approved by a named human empowered for project language policy; the requester is not automatically that authority. Record request source, authority name/role, approval source, scope, affected artifacts, and the root `AGENTS.md` rows that will persist every effective fallback and scoped value. If a potentially relevant Product Content Language is unresolved, retain `UNKNOWN - <resolution action>`; if it changes current product correctness or UI direction, it is blocking. Use `N/A - no product-content surface` only when the confirmed scope has no user-facing or localized content. Discovery context alone MUST NOT be the durable source of an override.

## Adaptive Grilling

Record the current `Discovery Intensity`; it does not alter fact statuses:

| Mode | When to use | Per-round behavior |
| --- | --- | --- |
| `STANDARD` | Default; the current branch is low-risk, reversible, and free of critical conflict | Ask 2-5 related, high-impact questions |
| `DEEP` | The user explicitly requests deep exploration, or the current branch hits a high-risk signal | Ask exactly one decision question and wait |

Any signal below moves the current branch into `DEEP`; the rest of the interview need not remain permanently intensive:

- Unverifiable terms such as "simple," "smart," "real-time," "secure," "flexible," or "scalable."
- Conflict among Problem, Users, MVP, Success Criteria, or constraints.
- Money, payments, approvals, privacy, compliance, irreversible data operations, or high security risk.
- Multiple roles or tenants, ownership, permission isolation, or external identity.
- Inventory, reservations, quotas, idempotency, concurrency, transactions, or complex state machines.
- Premature microservices, messaging, cache, multi-region, or similar complexity without business or scale evidence.
- Expanding MVP, missing Out of Scope, or unclear critical Source of Truth or Decision Authority.

`DEEP` protocol:

1. Ask exactly one pivotal question per round.
2. Prefer the host's interactive `question` tool when available. Put the recommended answer first with rationale and preserve a free-answer path.
3. With sufficient context, provide a recommendation, principal cost, and alternatives. If no safe recommendation exists, say so; MUST NOT guess merely to offer options.
4. Investigate facts available from the directory, supplied material, or tools before asking the user. Product and high-impact decisions still require Decision Authority confirmation.
5. Return to `STANDARD` after the high-risk branch is resolved. A request to move quickly MAY reduce low-risk questions but MUST NOT bypass blocking decisions.

## Per-Round Algorithm

1. Absorb the latest information, investigate environment-available facts, then update the Ledger.
2. Find the most upstream blocking `UNKNOWN`, conflict, or high-impact assumption that has not survived challenge.
3. Select `STANDARD` or `DEEP` from current-branch risk.
4. In `STANDARD`, ask 2-5 related questions; in `DEEP`, ask exactly one decision question. Questions should be answerable in business language.
5. For a safely defaultable low-risk item, offer a `RECOMMENDED` choice with rationale and a revisit trigger.
6. Wait for the answer. MUST NOT introduce an unrelated topic while the current question group remains unresolved.
7. Re-rank unknowns and risks after resolving the branch rather than mechanically moving to the next section.
8. When no blocking unknown remains, stop interviewing, perform Macro Synthesis, then run the mandatory Challenge Pass.

MUST NOT repeat answered questions. If the user supplies information across many topics, absorb all of it, but keep the next round focused on one high-impact topic.

## Branch Priority

Usually follow these dependencies, skipping or reordering according to supplied information:

```text
Problem / Outcome
  -> Users / Roles
  -> MVP / Scope
  -> Main Flow / Domain
  -> Critical Business Rules
  -> UI Presence
  -> Language Dimensions
  -> Data / Integration
  -> Risk-driven NFR
  -> Technology Constraints
  -> Testing Direction
  -> UI/UX and Frontend Direction (UI only)
```

If an answer overturns an upstream assumption, return upstream for confirmation instead of continuing downstream.

## Challenge Pass

After Macro Synthesis, run one counterargument pass rather than repeating the interview. Maintain a temporary Challenge Record:

| Assumption / decision | Challenge or counterexample | Outcome | Fact status | Next action |
| --- | --- | --- | --- | --- |
| {{HIGH_IMPACT_ASSUMPTION}} | {{WHY_IT_MAY_BE_WRONG}} | `RETAINED/REVISED/REJECTED` | `CONFIRMED/RECOMMENDED/UNKNOWN` | {{NONE_OR_RETURN_STAGE}} |

Challenge the smallest relevant set below. Explain why an item does not apply rather than asking questions to fill a quota:

1. **Problem Challenge**: Is the problem real, who experiences it now, and what is the cost of doing nothing?
2. **MVP Subtraction**: What else can be removed while still testing core value? Move removed content explicitly to Out of Scope.
3. **Counterexample**: Which failure, cancellation, unauthorized action, duplicate, concurrency case, or external dependency could invalidate the current flow or rule?
4. **Authority**: Who may decide, who owns critical data, and which boundary is the Source of Truth?
5. **Success Falsifiability**: Which observable result means success, and which result means the direction or assumption is wrong?
6. **Complexity Challenge**: Which business, risk, or scale evidence supports each major complexity, and what trigger would justify an upgrade?

On a new conflict or blocking unknown, output `NEEDS CLARIFICATION` and return to Discovery. After updating Macro Synthesis, rerun affected Challenges. Once every Challenge has an outcome, replay the revised macro synthesis and obtain explicit Decision Authority confirmation; silence is not confirmation. The Challenge MUST NOT descend into DTOs, schema fields, complete APIs, component trees, or implementation tasks, and does not replace Feature Refinement.

The Challenge Record is working conversation context, not a project artifact. Formal documents retain only confirmed assumptions, rejected scope, rationale, and revisit triggers with durable value; they MUST NOT copy raw interview rounds.

## 1. Problem, Outcome, and Success Criteria

Use this for the first round unless the user already supplied enough detail.

Choose 2-5 optional questions:

- Which specific problem does this project solve, and for whom?
- How does the user handle it now, and where is the greatest pain?
- Which observable outcome must the first usable version deliver?
- Which result would show that Phase 1 deserves continuation?
- Which business, timing, or compliance constraints cannot change?

Blocking signals: technology nouns without a user problem; success means "all features finished"; incompatible goals have no priority.

## 2. Users, Roles, and Permission Boundaries

Go deep only when roles alter flow, data visibility, or permission.

Optional questions:

- Who is the primary user, and who only administers, reviews, operates, or participates externally?
- Must users register or sign in, and does this system or an external system provide identity?
- Which actions or data require isolation by role, organization, or ownership?
- Does Phase 1 truly need an Admin or Operator, or can a manual process serve temporarily?

MUST NOT design complete RBAC tables yet. Confirm capability boundaries, ownership, and sensitive actions first.

## 3. MVP, Phase 1, and Out of Scope

Seek the smallest closed loop, not a wish list.

Optional questions:

- What is the shortest end-to-end path required for the core task?
- Which missing capabilities would prevent the MVP from delivering value?
- Which related capabilities are explicitly deferred?
- Which Phase 1 steps can remain manual instead of automated?
- How should speed, scope, and quality risk be prioritized for the first version?

Place vague "might need later" items in Out of Scope or a later Feature; MUST NOT smuggle them into the MVP.

## 4. Domain, Modules, and Main Flow

Use business concepts first; MUST NOT map them to classes, tables, or services.

Optional questions:

- Which event starts the core flow, and which business result ends it?
- Which stable business concepts participate, and what is each responsible for?
- Which capabilities require independent boundaries, and which require shared consistent facts?
- Which external participants or systems enter the flow?
- Which vertical slice can validate end-to-end direction earliest?

Output module responsibilities, dependencies, main data flow, and business vocabulary, not a package-layout list.

## 5. Critical Business Rules

Ask only about rules that change what counts as correct.

Choose domain-relevant questions:

- Which business states exist, who can trigger transitions, and what happens on an invalid transition?
- What must be unique, and what happens with duplicate requests, retries, or concurrent arrival?
- What do cancellation, timeout, failure, deletion, and recovery mean?
- Which steps must be atomic, and where is eventual consistency acceptable?
- Which system is the Source of Truth for each critical data class?
- Which actions require permission, audit, notification, or human review?

High-risk domains such as inventory, payments, quotas, approvals, and reservations MUST NOT use unmarked defaults instead of confirmation.

## 6. UI Presence Decision

Determine early whether the project has a user-visible interface:

- Do users act directly through Web, Mobile, Desktop, Mini Program, or Admin Console?
- Is this a pure API, background job, CLI, SDK, or no-UI service?
- Do Admin or Operator roles need an interface even if end users have none?

Output exactly this shape:

```text
UI: YES | NO | UNKNOWN
Status: CONFIRMED | RECOMMENDED | UNKNOWN
Reason: ...
```

`UI: UNKNOWN` blocks the Macro Gate.

## 7. Language Policy Decision

Confirm and record:

- Documentation Language: keep `en` for all formal artifact prose named in the matrix unless an override satisfies both approval conditions.
- Engineering Language: keep `en` for all engineering names and workflow text named in the matrix unless an override satisfies both approval conditions.
- Product Content Language: derive actual BCP-47 value(s) from explicit product requirements, retain an evidenced `UNKNOWN - <resolution action>`, or record `N/A - no product-content surface` for a confirmed no-content scope; constrain exceptions to localized resource/configuration values, labeled exact-copy quotations, and exact-copy assertions.
- Whether an explicit override request applies globally or only to named artifacts, engineering surfaces, or product surfaces.
- Which named human is empowered for project language policy, and where that human approved the request.
- Which exact root `AGENTS.md` scope row will persist each repository fallback and approved scoped override for later workflows.

Conversation language alone MUST NOT be treated as an override request or approval. The requester MUST NOT be treated as an authority empowered for project language policy without evidence of that role.

## 8. Data, API, and Integration

Determine macro strategy only.

Optional questions:

- Which data must persist, who owns it, and what is its Source of Truth?
- Is data subject to privacy, retention, deletion, audit, or residency constraints?
- Which callers need interfaces, and what business reason supports synchronous or asynchronous interaction?
- Which third parties are mandatory, and how do their failures or rate limits affect the main flow?
- Which idempotency, consistency, or transaction boundaries must hold?

MUST NOT list all fields, endpoints, indexes, cache keys, or message topics at this stage.

## 9. Risk-driven Non-functional Requirements

MUST NOT ask every category merely to appear thorough. Identify risk first, then ask about scale or constraints.

Example triggers:

- Public product or growth target: user count, peaks, latency, and cost ceiling.
- Finance, health, children, location, or identity data: security, privacy, audit, and compliance.
- Business cannot stop: availability, recovery objectives, degradation, and observability.
- High-concurrency resource contention: consistency, concurrency, capacity, and performance evidence.
- Multi-tenant or enterprise: isolation, permissions, audit, and deployment constraints.

Without evidence, recommend a simple evolvable approach. MUST NOT default to microservices, multi-region, messaging, Redis, or Kubernetes.

## 10. Technology Constraints and Recommendations

Separate user constraints from Agent recommendations:

- Which languages, versions, backend/frontend/mobile frameworks, databases, ORMs, cache (Redis), messaging (MQ), clouds, or third parties are required or forbidden?
- Which limits arise from team familiarity, deployment environment, budget, or delivery time?
- Is there a hard constraint for Monolith, Modular Monolith, or Microservices?
- How much CI/CD, Docker/containerization, and environment management does Phase 1 need?

A technology recommendation MUST state why it fits current scale, its principal cost, and when to reconsider. A low-risk choice MAY remain `RECOMMENDED`; a high-impact irreversible choice requires Architecture Decision Authority confirmation.

## 11. Testing Direction

Start from risk and verifiable requirements:

- Which failures are least acceptable, and at which layer must they be proven?
- Should core business rules use Unit, Integration, API, Component, or E2E evidence?
- Which external dependencies, concurrency, permissions, or failure paths need integration verification?
- Which constraints apply to test environments, data, and executable commands?
- Does a UI project need Accessibility, Visual Regression, or critical-path E2E coverage?

Set strategy here; MUST NOT write complete Test Design for every DRAFT Feature.

## 12. UI/UX Discovery

Run only for `UI: YES`, in rounds from UX toward UI.

### Platforms and Devices

- Which platforms exist (Web, Mobile Web, iOS, Android, Flutter, Desktop, Mini Program, Admin Console), and which is primary for Phase 1?
- Is the Primary Device Desktop, Mobile, Tablet, or Mixed?
- Is Responsive, Adaptive, Touch-first, or Keyboard-first behavior required?

### Primary User Flow

- Where does the user enter, and which task do they intend to complete?
- What are the happy-path milestones and completion point?
- How does the user continue after failure, interruption, back navigation, retry, or insufficient permission?

### Information Architecture

- What responsibility belongs to each Screen or Page?
- How are primary navigation, hierarchy, search, filtering, settings, and administration organized?
- Which information must be visible together at decision time?

### State and Feedback

- How are Loading, Empty, Error, and Success expressed?
- Are Disabled, Permission Denied, Offline, long-running, and dangerous-action states relevant?
- Are Undo, confirmation, progress, or recovery entry points needed?

### Visual Direction

- Is there an existing Brand, Logo, Figma file, UI Library, or Design System?
- Which character should the interface convey, and which visual directions must it avoid?
- Which visual rules need project-level reuse, and which remain for Feature Refinement?

### Accessibility, Internationalization, and Theme

Confirm Keyboard, Focus, Screen Reader, Contrast, Labels, Error Messages, and Reduced Motion according to audience and platform risk. Explore Locale, RTL, Timezone, Currency, Date Format, or Dark Mode only when a real requirement exists. Product copy MUST use the recorded Product Content Language.

### Frontend Architecture

Confirm project-level framework, routing, client state, server state, API client, authentication, forms, validation, styling, error boundaries, cache, build, testing, code splitting, and accessibility strategy. MUST NOT confirm every component.

## Synthesis Before Challenge Pass

Replay in business language:

- Why the project exists, whom it serves, and the MVP closed loop.
- Explicit boundaries, core flow, critical rules, and Source of Truth assignments.
- Which technology and testing directions are `CONFIRMED` and which remain `RECOMMENDED`.
- Documentation, Engineering, and Product Content languages, including authorities and overrides.
- UI branch, primary flow, and engineering direction.
- Remaining `UNKNOWN` items and whether they block.

If the user corrects the synthesis, update the Ledger and synthesize again before Challenge Pass. MUST NOT treat lack of objection as confirmation.
