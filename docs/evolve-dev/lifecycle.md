# evolve-dev — Lifecycle & Gate

The evolution lifecycle adapts Greenfield Discovery to a baselined repository: the same adaptive interview, anchored on evidence instead of a blank slate.

## Evidence first

| Source | What it answers |
|---|---|
| `specs/ROADMAP.md` | Current entries, statuses, dependencies, delivered history |
| Delivered Specs and delivery records | What each `DONE` item established; residual Open Questions |
| Root `STAGE.md` | Active claims, blockers, handoffs (verify every linked authority) |
| Debt table (`KNOWLEDGE_GAPS.md`) | Recorded technical debt that may motivate or constrain the wave |
| Canonical docs deltas | Which baseline facts the wave would touch |

A claim the repository already answers MUST NOT become a user question. Where the Roadmap contradicts the user's framing, surface the conflict with evidence labels; never silently prefer either side.

## Interview output

| Topic | Status | Current understanding | Challenge / evidence | Impact / next action |
| --- | --- | --- | --- | --- |
| `<topic>` | `CONFIRMED/RECOMMENDED/UNKNOWN` | `<value>` | `<why>` | `<impact>` |

`UNKNOWN` is marked `BLOCKING` or `NON_BLOCKING`; conflicting answers are exposed, never overwritten.

## Branch priority

```text
Wave goal and business value
  -> Users and success criteria for the increment
  -> Relationship to existing Features (extends / depends / replaces / independent)
  -> Scope boundary and Out of Scope
  -> Critical rules, data, or contracts the wave touches
  -> Priority implications on existing entries
  -> Macro-baseline deltas
```

## Replaces semantics

A candidate that replaces a delivered capability records the relationship and nothing more here: the Roadmap entry marks the intended direction, the delivered item keeps its history, and retirement (announcement, consumer migration, removal) executes in `maintenance-dev` after the replacing Feature is delivered.

## Challenge Pass

After wave synthesis, one counterargument pass: wave necessity, increment subtraction (what can be removed), counterexamples and failure paths, authority and Source of Truth, success falsifiability, and complexity evidence. Each item gets `RETAINED / REVISED / REJECTED`. New blocking unknowns return to Discovery. The revised synthesis needs explicit Roadmap Decision Authority confirmation; silence is not confirmation. The Challenge never descends into DTOs, schema fields, or implementation tasks.

## `ROADMAP EVOLUTION READY`

All 11 checklist items are required for a PASS:

1. Wave goal, business value, and success criteria are `CONFIRMED`.
2. Every candidate Feature is a vertical slice of business value with a stable new ID.
3. Relationships to existing Features are explicit per entry (extends, depends, replaces, independent).
4. Dependencies point in a feasible direction against existing `NEXT` and `DONE` items.
5. Priority changes on existing entries are enumerated and confirmed by the named Roadmap Decision Authority.
6. Entries claimed by another member are marked `NEEDS_CONFIRMATION`, not rewritten.
7. Out of Scope for the wave is explicit, with subtracted candidates visible.
8. Macro-baseline deltas are enumerated, incremental, and authority-approved; no repositioning hides inside a delta.
9. Critical rules, data, or contract touchpoints are identified with a fact status.
10. Language dimensions resolve from the `AGENTS.md` chain; new identifiers follow the resolved Engineering Language.
11. The Challenge Pass is complete with outcomes, and the revised synthesis has explicit Roadmap Decision Authority confirmation.

A failed item yields `NOT_READY` and returns to the interview. The Gate records its input manifest, validation time, and authority approval source like every Foundry Gate.
