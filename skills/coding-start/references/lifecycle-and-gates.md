# Lifecycle and Gates

## Coding Start State Machine

| Stage | Entry | Required action | Exit |
| --- | --- | --- | --- |
| `ENTRY_CHECK` | The user makes a project-level request | Classify Greenfield, existing project, or single Feature | Only Greenfield enters `PROJECT_DISCOVERY` |
| `PROJECT_DISCOVERY` | Entry is valid | Run a dynamic interview, maintain fact statuses, record all language dimensions, and execute the UI branch | Enter `MACRO_SYNTHESIS` when high-impact information is sufficient |
| `MACRO_SYNTHESIS` | The current round has no obvious blocker | Replay goals, scope, boundaries, rules, strategies, language policy, and recommendations | Return to Discovery after corrections; otherwise enter `CHALLENGE_PASS` |
| `CHALLENGE_PASS` | Macro synthesis is complete | Risk-test the problem, MVP, counterexamples, Authority/Source of Truth, success criteria, and complexity | New issues enter `NEEDS_CLARIFICATION`; otherwise explicit Decision Authority confirmation permits `MACRO_READINESS` |
| `MACRO_READINESS` | Challenge Pass is complete and the revised synthesis is confirmed | Check every core item, language dimension, and conditional UI item | `NEEDS_CLARIFICATION` or `MACRO DESIGN READY` |
| `ARTIFACT_GENERATION` | `MACRO DESIGN READY` and explicit local-write authorization exist | Generate only applicable project documents with distinct responsibilities and the recorded languages | Enter Feature Map when documents are consistent |
| `FEATURE_MAPPING` | Macro documents are usable | Define vertical slices and analyze value, priority, and dependencies | Generate Specs when the Feature Map is complete |
| `DRAFT_SPEC_GENERATION` | Feature Map is stable | Generate a shallow DRAFT Spec for every Feature | Every Feature has a DRAFT Spec; enter `NEXT_SELECTION` |
| `NEXT_SELECTION` | Every Feature has a DRAFT Spec | Select exactly one `NEXT` | The sole `NEXT` can be handed to `feature-dev`; when no safe candidate exists for reasons other than an external blocker, return to `PROJECT_DISCOVERY` via `NEEDS_CLARIFICATION`; then enter `SELF_REVIEW` |
| `BLOCKED_HANDOFF` | No safe candidate exists and a currently unresolvable external blocker remains | Allow zero `NEXT` entries; record blocker, owner, unblock condition, and resume stage | Enter `SELF_REVIEW`, then `STOP` as incomplete; MUST NOT claim readiness |
| `SELF_REVIEW` | Artifacts exist | Fix boundary, status, language, link, duplication, and overdesign problems | `STOP` only after all checks pass |

The flow MAY return to an earlier stage to resolve a newly found macro conflict. If Challenge exposes a problem, return to `PROJECT_DISCOVERY`, update fact statuses and Macro Synthesis, then rerun the affected Challenge. If `NEXT_SELECTION` finds no safe candidate for reasons other than an external blocker, return to `PROJECT_DISCOVERY` the same way. Synchronize formal artifacts only if they already exist.

After valid entry and explicit local-write authorization, create or adopt root `STAGE.md` as an operational checkpoint from the Project Stage template listed in SKILL.md. Before tracking is resolved it may use `TBD` plus an owner/resolution condition and mark this non-Feature workflow activity `N/A`. Increment its snapshot revision on meaningful transitions and update only the current member/activity plus directly affected blocker, handoff, and project-summary fields. Serialize writes through the repository lock/designated writer or compare revision and SHA-256 immediately before writing. Before `MACRO DESIGN READY`, it MUST NOT contain proposed product or architecture conclusions. `STAGE.md` never substitutes for a Gate and every Gate projection must link to its own authoritative record and revision.

For read-only ideation/evaluation or missing local-write authorization, report before `ARTIFACT_GENERATION`, state that initialization is incomplete, and `STOP`. MUST NOT create files, choose `NEXT`, or claim successful completion. Macro-design confirmation, local writes, Git operations, and remote side effects are four independent authorizations.

## Macro Readiness Checklist

Use `CONFIRMED`, `RECOMMENDED`, or `UNKNOWN` for every item, with one sentence of evidence or rationale.

### Core Items

- Project Goal
- Target Users / Roles
- MVP
- Phase 1 Scope
- Out of Scope
- Success Criteria
- Main Flow
- Core Entities / Domain Concepts
- Module Boundaries and Responsibilities
- Dependencies and External Systems
- Critical Business Rules
- Important State Machines
- Technology Constraints / Stack Direction
- Data Source of Truth
- Data Strategy
- API / Communication Strategy
- Testing Strategy
- Risk-driven Non-functional Requirements

### Language Items

- Documentation Language, defaulting exactly to `documentation_language = en`
- Engineering Language, defaulting exactly to `engineering_language = en`
- Product Content Language as actual requirement-derived BCP-47 value(s), `UNKNOWN - <resolution action>`, or `N/A - no product-content surface` for a confirmed no-content scope
- The canonical Documentation and Engineering Language scopes, with Product Content exceptions limited to localized resource/configuration values, labeled exact-copy quotations, and exact-copy assertions
- Explicit request plus approval by a named `Maintainer Decision Authority` empowered for project language policy for every override; requester status alone is insufficient
- Approval source, scope, and affected artifacts for every override
- Root `AGENTS.md` persistence rows for every repository fallback and approved scoped effective value
- Existing target-document prose checked against the resolved Documentation Language in both directions, with mixed or translation-requiring updates blocked
- Confirmation that conversation language is not being treated as artifact-language authorization

### Additional Items for `UI: YES`

- Target Platform
- Primary Device and Responsive Direction
- Primary User Flow
- Page / Screen Map
- Navigation / Information Architecture
- UX Principles and major non-happy-path states
- Frontend Architecture
- Design System Direction
- Accessibility Requirements

### Required Challenge Pass Items

- The Problem is verified as real for a specific user, including the cost of doing nothing.
- The MVP passed a subtraction test; removed content is explicitly Out of Scope.
- Major failures or counterexamples in the core flow were checked, or a concrete not-applicable reason exists.
- Decision Authority, data ownership, and critical Source of Truth assignments are confirmed.
- Success Criteria include observable success signals and evidence that would falsify the direction.
- Major technical complexity has business, risk, or scale evidence plus a revisit trigger.
- Each outcome is `RETAINED/REVISED/REJECTED`, and new high-impact unknowns are resolved.
- The Decision Authority explicitly confirms the revised macro synthesis; silence or lack of objection is not confirmation.

## Gate Decision

Any of these unknowns MUST block:

- Target user, core problem, MVP, or Phase 1 boundary is unclear.
- The core flow or a business rule that changes correctness is unclear.
- Authorization, security, privacy, compliance, money, or contested-resource risk is unresolved.
- A critical data Source of Truth or system boundary is unclear.
- A high-impact technology dispute lacks confirmation by the named Decision Authority.
- `UI: UNKNOWN`, or a UI project's primary flow, platform, or navigation direction is unclear.
- Challenge Pass has not run, or its high-impact conflicts, counterexamples, or unknowns remain unresolved.
- A core statement still relies on unverifiable terms such as "simple," "smart," "real-time," "secure," or "scalable," or success cannot be falsified.
- The revised macro synthesis lacks explicit Decision Authority confirmation.
- Any language dimension is unrecorded, Product Content Language lacks an allowed value/state, any scope contradicts the canonical matrix, or an override lacks both an explicit request and approval by a named `Maintainer Decision Authority` empowered for project language policy.
- Any existing target's formal prose is mixed or differs from the resolved Documentation Language and lacks named-authority resolution plus separately authorized translation/update scope.

When blocked, output:

```text
NEEDS_CLARIFICATION
```

Then return to the dynamic interview at the current intensity: 2-5 related questions per `STANDARD` round or one decision question per `DEEP` round.

A low-risk, reversible unknown that cannot change business correctness MAY become a clearly marked `RECOMMENDED` default or a non-blocking `UNKNOWN` with validation timing.

After every high-impact unknown is resolved, the only passing Gate text is:

```text
MACRO DESIGN READY
```

This means only that macro direction is sufficient for project documents and a DRAFT Feature Map. It does not mean any Feature is `SPEC READY`, `UI READY`, `TEST DESIGN READY`, or authorized for Coding.

## Roadmap Status Contract

Only these statuses are allowed:

```text
DRAFT
NEXT
READY
IN_PROGRESS
REVIEW
DONE
BLOCKED
```

Within `coding-start`:

- Exactly one Feature is `NEXT` on the success path.
- All other initial Features are `DRAFT`; use `BLOCKED` only for a concrete external blocker with an unblock condition.
- MUST NOT set `READY`, `IN_PROGRESS`, `REVIEW`, or `DONE`.
- Non-`NEXT` Features normally remain `DRAFT`.
- The Roadmap Decision Authority MUST confirm `NEXT`. If every safe candidate is externally blocked, MUST NOT force a selection: produce an incomplete `BLOCKED_HANDOFF`, allow zero `NEXT` entries, record the controlled handoff token `INITIALIZATION INCOMPLETE` in the Roadmap and README handoff sections, and wait for the blocker to clear.
- Roadmap `NEXT` indicates development order; its Spec maturity remains `DRAFT`.

Later, `feature-dev` refines the sole `NEXT`, passes Feature-level Gates, and advances Roadmap status.

## `NEXT` Selection Rules

Evaluate in this order:

1. Dependencies are satisfied; the Feature does not rely on an undecided critical capability.
2. It delivers the smallest end-to-end business value rather than one technical layer.
3. It tests the largest product or architecture risk early.
4. It is small enough for one Feature lifecycle.
5. It has a verifiable result without forcing unrelated DRAFT Specs to mature.

Record the selection rationale and why higher-priority alternatives were not selected.

## DRAFT Depth Boundary

A DRAFT Spec explains intent, boundaries, main flow, core rules, dependencies, initial acceptance direction, and open questions. It MUST NOT freeze:

- Complete DTOs, database fields, indexes, or SQL.
- Concrete classes, packages, functions, or internal algorithms.
- Complete business API request/response structures.
- Cache keys, message topics, or deployment topology details.
- Component trees, pixel-by-pixel screens, CSS values, or micro-interactions.
- Complete Test Design or Implementation Plan.

## Design Change Control

When a design conflict appears during initialization:

```text
Discover problem
-> classify Requirement / Design / Implementation
-> analyze impact
-> assign L1 / L2 / L3
-> identify affected artifacts
-> update Spec / Design / Acceptance direction first
-> update UX/UI and Testing direction when applicable
-> handle explicitly authorized minimal scaffolding, if any
-> Verify
```

- L1 `Feature-local`: current DRAFT Spec, related acceptance direction, and necessary API/Database/UI notes. Any change to approved Scope, Acceptance Criteria, an external contract, observable behavior, or user-visible product copy requires explicit approval by a named Decision Authority empowered for that Feature.
- L2 `Cross-Feature`: a named Decision Authority empowered for the affected Features or shared contract MUST approve the change; update related Specs, Roadmap, shared API/Database/UX/UI/Design System/Tests, and Architecture when needed.
- L3 `Architectural`: a named Architecture Decision Authority MUST approve changes to module boundaries, major technology choices, Source of Truth, messaging, cache, authentication, database strategy, frontend architecture, global navigation, Design System core, API style, or consistency. Update affected macro documents, Specs, AGENTS, and Tests; create or update an ADR that records approval source, time, scope, and input revision. Before Coding begins or resumes, the ADR MUST reach the project's implementation-authorizing state (for example, Accepted or Effective).

Update only genuinely affected files. Implementation MUST NOT remain ahead of documentation.

## STOP Conditions

The success path can stop only when all are true:

- Project Interview is complete.
- Challenge Pass is complete and the Decision Authority explicitly confirmed the revised macro synthesis.
- Formal file writes had explicit local authorization; Git and remote authorization were not inferred from it.
- The Gate explicitly output `MACRO DESIGN READY`.
- Applicable macro documents exist, are consistent, and follow the recorded language policy.
- Macro UX/UI documents exist for `UI: YES`; the skip decision is recorded for `UI: NO`.
- AGENTS contains durable development and language protocols, including every effective language value and exact scope needed by later workflows.
- Feature Map, dependency analysis, and Roadmap exist.
- Every Feature has a shallow DRAFT Spec.
- The success path has exactly one Roadmap Decision Authority-confirmed `NEXT`. The `BLOCKED_HANDOFF` path instead has zero `NEXT` entries, plus complete blocker, owner, unblock-condition, and resume-stage data. No Feature is `READY`.
- No business code exists; any explicitly authorized minimal non-business scaffold is verified.
- Self Review is complete and every finding is fixed.

On success, explicitly recommend handing the sole `NEXT` to `feature-dev`. When blocked, explicitly state that initialization is incomplete and `feature-dev` MUST NOT be invoked. Both paths end with `STOP`; MUST NOT start the next workflow automatically.

## Self Review

### Scope

- Was this only Greenfield, not Brownfield or a single Feature with an existing macro baseline?
- When the user wanted only discussion, were file writes avoided?
- Were business code and full scaffolding avoided by default?

### Discovery and Gate

- Did `STANDARD` ask only 2-5 related high-impact questions per round? Did `DEEP` ask one decision question, offer evidence-based recommendations/alternatives, and de-escalate after risk cleared?
- Were environment-verifiable facts investigated before asking the user?
- Were `CONFIRMED/RECOMMENDED/UNKNOWN` kept distinct?
- Did high-impact unknowns block instead of becoming silent defaults?
- Did Challenge Pass cover relevant Problem, MVP subtraction, Counterexample, Authority/Source of Truth, Success Falsifiability, and Complexity?
- Did the Decision Authority explicitly confirm the revised synthesis rather than confirm by silence?
- Did formal writes, Git, and remote actions each have the right independent authorization?
- Did UI work proceed from UX to UI, and was no-UI work explicitly skipped?
- Were formal documents generated only after `MACRO DESIGN READY`?
- If `STAGE.md` was created before the Gate, did it remain a factual operational checkpoint with no unconfirmed design, and were unrelated member rows preserved?
- Were the canonical Documentation, Engineering, and Product Content scopes recorded and enforced with exact defaults `documentation_language = en` and `engineering_language = en`?
- Did every override have an explicit request and approval by a named `Maintainer Decision Authority` empowered for project language policy, without assuming the requester had that authority?
- Can later workflows resolve every repository fallback and scoped override from root `AGENTS.md` without relying on Discovery context?
- Was each existing target checked bidirectionally for mixed prose or a mismatch with the resolved Documentation Language before it was updated?

### Artifacts

- Are README / PRODUCT / ARCHITECTURE / DATABASE / API / FRONTEND / UX / UI / DESIGN_SYSTEM / TESTING / AGENTS / STAGE responsibilities distinct and files conditional?
- Do Spec / Issue / PR-or-Delivery-Record / ADR each serve their own role, with Issues not duplicating Specs?
- Does AGENTS contain only durable rules, including the full future Feature workflow and the effective values and exact scopes of the Language Policy?
- Were DTOs, fields, classes, components, and pixel detail left unfrozen?
- Does Design Change cover L1/L2/L3 and Documentation Sync?
- Is formal artifact prose English by default, and are engineering names and workflow text English by default, while only the defined Product Content exceptions follow product requirements?

### Feature Lifecycle

- Are all Roadmap statuses from the allowed set?
- Does the success path have exactly one confirmed `NEXT`? Does `BLOCKED_HANDOFF` have zero `NEXT` entries, plus a blocker, owner, unblock condition, and resume stage? Are all other initial entries only `DRAFT/BLOCKED`?
- Are all Specs still `DRAFT`, with Open Questions?
- Are Features vertical slices rather than technical layers?

### Integrity

- Are generated files nonempty, free of meaningless `N/A`, and linked correctly?
- Are commands real, or exactly `Not yet established` when absent?
- Does any fact conflict across documents?
- Does `STAGE.md` agree with every linked authority, use a unique activity ID, and expose the exact blocker or resume stage when incomplete?
- Was a recommendation or unknown presented as confirmed fact?
- Was any unrequested code, Issue, PR, or ADR created?

Fix every issue before the final report and `STOP`.
