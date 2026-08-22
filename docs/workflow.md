# Workflow & Gates

Foundry's core discipline: **define what is correct → define how to prove it → then implement.** Every transition is gated.

## The Feature lifecycle

```text
Issue ──▶ Spec Refinement ──▶ SPEC READY
        ──▶ [UX/UI Refinement ──▶ UI READY]   (only if UI)
        ──▶ Test Design ──▶ TEST DESIGN READY
        ──▶ Plan ──▶ Tasks ──▶ Coding ──▶ Testing
        ──▶ Review ──▶ Documentation Sync ──▶ PR ──▶ DONE
```

## The gates

| Gate | Question it answers | Blocks until |
|---|---|---|
| `SPEC READY` | Is the Spec correct and complete? | No critical open question remains |
| `UI READY` | Are user flows, states, and contracts defined? | Every UI checklist item passes |
| `TEST DESIGN READY` | Can correctness be proven? | Every core acceptance maps to a scenario |
| `DONE` | Is delivery verified? | All DONE checklist items pass |

Each gate records a status (`PASS | NOT_READY | STALE`), an input manifest, and the approving decision authority. A semantic change to an input marks downstream gates `STALE` and forces re-validation.

## Spec lifecycle

**Greenfield**

```text
DRAFT ──▶ clarification ──▶ refinement ──▶ SPEC READY
```

**Brownfield**

```text
AS_IS_DRAFT ──▶ evidence collection ──▶ RECONSTRUCTED
            ──▶ explicit TO-BE ──▶ SPEC READY
```

Only the selected feature is deepened; all other specs stay `DRAFT`.

## AS-IS vs TO-BE

For existing projects, Foundry strictly separates:

- **AS-IS** — currently verifiable behavior. Never auto-promoted to a standard.
- **TO-BE** — desired future behavior. Confirmed separately through `feature-dev`.

Existing code, tests, docs, and UI are **evidence**, not requirements.

## Object responsibilities

| Object | Owns |
|---|---|
| **Spec** | What is correct (source of truth) |
| **Issue / work item** | Where the work is (progress, status) |
| **Implementation Plan** | How to build it (must not redefine requirements) |
| **PR / delivery record** | What changed in code |
| **ADR** | Why a significant decision was made |
| **AGENTS.md** | Durable project rules |

An Issue never duplicates the Spec. A Plan never rewrites requirements.

## Design Change Policy

Design may change, but only through a controlled flow — never "change code, leave docs stale."

| Level | Scope | Updates |
|---|---|---|
| **L1** | Feature-local | Current Spec, Test Design, necessary API/DB/UI |
| **L2** | Cross-feature | Related Specs, API, DATABASE, UX/UI, ROADMAP, tests |
| **L3** | Architectural | All affected docs + ADR, approved by a named authority |

L3 decisions require an ADR in the project's implementation-authorizing state before coding resumes.

## Language Policy

Foundry defaults to:

```text
documentation_language = en
engineering_language = en
```

Engineering artifacts (docs, specs, identifiers, APIs, commits, tests) are English by default. **Product Content Language** follows product requirements — a Chinese consumer app still ships Chinese UI copy. Overrides require explicit decision-authority approval and are persisted in `AGENTS.md`.
