# coding-start — Discovery & Challenge Pass

Discovery is a multi-round interview that builds a **Decision Ledger**, adapts its intensity to risk, and ends with a mandatory counterargument pass before any document is written.

## The Decision Ledger

From the first round, every material item carries exactly one fact status:

| Status | Meaning |
|---|---|
| `CONFIRMED` | A fact evidenced/confirmed, or a high-impact decision approved by the appropriate Decision Authority |
| `RECOMMENDED` | A proposed default with rationale, tradeoffs, and applicability — not yet approved; never presented as settled fact |
| `UNKNOWN` | Missing evidence or answer; states whether it blocks and how it will be resolved |

The Ledger is updated after each answer before choosing the next questions. Conflicts are surfaced and confirmed, never silently resolved. `Discovery Intensity: STANDARD | DEEP` is also recorded — it controls interaction depth only, not fact status.

## Interview protocol

1. Default to `STANDARD`: one group of 2–5 related, high-impact questions per round.
2. Upgrade the current branch to `DEEP` on request, or when ambiguity, conflict, high-risk business behavior, irreversible data, concurrency, a complex state machine, or unsupported technical complexity appears.
3. In `DEEP`, ask exactly one decision question and wait. Lead with a safe recommendation plus rationale, cost, and alternatives.
4. Investigate environment-available facts first; product and high-impact decisions require Decision Authority confirmation.
5. A low-risk unknown may become `RECOMMENDED` with a revisit trigger; a high-impact rule or architecture choice must not be silently defaulted.
6. Never repeat answered questions, add unrelated topics mid-group, or prematurely decide fields/DTOs/classes/components/SQL/CSS/internal functions.

## Adaptive Grilling

| Mode | When | Per-round behavior |
|---|---|---|
| `STANDARD` | Low-risk, reversible, no critical conflict | 2–5 related high-impact questions |
| `DEEP` | User requests depth, or a high-risk signal fires | Exactly one decision question, then wait |

**Seven signals move the current branch into `DEEP`:**

1. Unverifiable terms — "simple", "smart", "real-time", "secure", "flexible", "scalable".
2. Conflict among Problem, Users, MVP, Success Criteria, or constraints.
3. Money, payments, approvals, privacy, compliance, irreversible data, or high security risk.
4. Multiple roles/tenants, ownership, permission isolation, or external identity.
5. Inventory, reservations, quotas, idempotency, concurrency, transactions, or complex state machines.
6. Premature microservices/messaging/cache/multi-region without business or scale evidence.
7. Expanding MVP, missing Out of Scope, or unclear critical Source of Truth / Decision Authority.

**`DEEP` protocol** — ask one pivotal question; prefer the interactive question tool with a recommended answer first; give recommendation + cost + alternatives (or say none is safe); investigate facts before asking; return to `STANDARD` once the branch is resolved. Moving fast may reduce low-risk questions but must never bypass blocking decisions.

## Discovery scope

- **Product** — problem, why, target users, pain, core value, key scenarios, MVP, Phase-1 scope, Out of Scope, success criteria.
- **Users / Roles** — user types, roles, registration/login, permissions, Admin/Operator behaviors.
- **Business Domain** — domain, modules, boundaries, responsibilities, dependencies, core entities, main flow, vertical slices (not premature classes).
- **Business Rules** — state machines, uniqueness, idempotency, inventory, permission, cancellation, timeout, retry, delete, duplicate requests, transactions, consistency, atomicity, async, Source of Truth.
- **Non-functional** — scale, QPS, latency, concurrency, availability, security, privacy, audit, observability, cost — risk-driven, not "default to microservices to look professional".
- **Technology** — languages/versions, frameworks, database/ORM, cache/MQ, mobile, build, monolith vs microservices, CI/CD, deployment, cloud, third parties; each marked `Confirmed` or `Recommended`.
- **UI / UX** (when `UI: YES`) — platform, device, flows, information architecture, UX principles, visual direction, accessibility, i18n, theme.

## Challenge Pass

After Macro Synthesis, one mandatory counterargument pass runs. Each assumption is recorded as `RETAINED`, `REVISED`, or `REJECTED` (still using fact statuses):

1. **Problem** — is the problem real, who has it now, what is the cost of doing nothing?
2. **MVP Subtraction** — what else can be removed while still testing core value?
3. **Counterexample** — which failure, cancellation, unauthorized action, duplicate, concurrency case, or dependency could break the flow?
4. **Authority** — who decides, who owns critical data, what is the Source of Truth?
5. **Success Falsifiability** — which observable result means success, which means the direction is wrong?
6. **Complexity** — what business/risk/scale evidence supports each major complexity?

A new blocking unknown returns to `NEEDS CLARIFICATION` and Discovery. The Challenge must not descend into DTOs/schema/APIs/components, and silence is not confirmation.

## Macro Readiness checklist

**Base items** — Project Goal, User, MVP, Out of Scope, Main Flow, Core Entities, Module Boundaries, Dependencies, Business Rules, Important State Machines, Tech Stack, Data Source of Truth, Data Strategy, API Strategy, Testing Strategy, Non-functional Requirements, Phase-1 Scope, the three Language dimensions, and Challenge conclusions with explicit Decision Authority confirmation.

**Additional when `UI: YES`** — Target Platform, Primary User Flow, Page/Screen Map, Navigation, UX Principles, Frontend Architecture, Design System Direction, Responsive Requirements, Accessibility Requirements.

Any `UNKNOWN` that can alter product correctness, boundaries, the core flow, Source of Truth, security/compliance, artifact language, or the primary UI flow produces `NEEDS CLARIFICATION`. Only when all high-impact unknowns are resolved does the Gate output:

```text
MACRO DESIGN READY
```
