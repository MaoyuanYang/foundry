# Evolution Lifecycle

Use this guide for post-delivery evolution on a baselined repository. It is a decision guide, not a checklist to complete in one round. The interview semantics follow the same adaptive shape as Greenfield Discovery, anchored on the existing baseline instead of a blank slate.

## Evidence First

Before the first question, harvest the repository:

| Source | What it answers |
| --- | --- |
| `specs/ROADMAP.md` | Current entries, statuses, dependencies, delivered history |
| Delivered Specs and delivery records | What each `DONE` item actually established; residual Open Questions |
| Root `STAGE.md` | Active claims, blockers, handoffs; every linked authority verified before use |
| `docs/onboarding/KNOWLEDGE_GAPS.md` Debt table | Recorded technical debt that may motivate or constrain the wave |
| Canonical docs deltas | Which baseline facts the wave would touch |

A claim the repository already answers MUST NOT become a user question. Where the Roadmap or delivery history contradicts the user's framing, surface the conflict with evidence labels; never silently prefer either side.

## Interview Output

Maintain a concise Ledger throughout:

| Topic | Status | Current understanding | Challenge / evidence | Impact / next action |
| --- | --- | --- | --- | --- |
| `<topic>` | `CONFIRMED/RECOMMENDED/UNKNOWN` | `<value>` | `<why this survives or needs challenge>` | `<why it matters or when to validate>` |

Status rules follow the Fact Status Contract in [SKILL.md](../SKILL.md). `UNKNOWN` MUST be marked `BLOCKING` or `NON_BLOCKING`; a new answer that conflicts with an earlier one is exposed, never overwritten.

## Adaptive Intensity

| Mode | When to use | Per-round behavior |
| --- | --- | --- |
| `STANDARD` | Default; the wave is low-risk and reversible | Ask 2–5 related, high-impact questions |
| `DEEP` | The wave touches critical business rules, irreversible data, a cross-Feature contract, or an unresolved baseline conflict | Ask exactly one decision question and wait |

In `DEEP`, lead with the recommendation, its principal cost, and alternatives when a safe one exists; say so when none exists. Return to `STANDARD` after the branch resolves.

## Branch Priority

```text
Wave goal and business value
  -> Users and success criteria for the increment
  -> Relationship to existing Features (extends / depends / replaces / independent)
  -> Scope boundary and Out of Scope
  -> Critical rules, data, or contracts the wave touches
  -> Priority implications on existing entries
  -> Macro-baseline deltas
```

If an answer overturns an upstream assumption, return upstream for confirmation instead of continuing downstream.

## Replaces Semantics

A candidate that replaces a delivered capability is recorded with the relationship and nothing more in this Skill: mark the intended direction in the Roadmap entry, keep the delivered item's history intact, and note in the evolution record that retirement (deprecation announcement, consumer migration, removal) executes in `maintenance-dev` after the replacing Feature is delivered. This Skill never deletes, hides, or downgrades the delivered entry.

## Challenge Pass

After wave synthesis, run one counterargument pass. Maintain a temporary Challenge Record:

| Assumption / decision | Challenge or counterexample | Outcome | Fact status | Next action |
| --- | --- | --- | --- | --- |
| `<high-impact assumption>` | `<why it may be wrong>` | `RETAINED/REVISED/REJECTED` | `CONFIRMED/RECOMMENDED/UNKNOWN` | `<none or return stage>` |

Challenge the smallest relevant set:

1. **Wave necessity**: which delivered evidence shows users need this increment, and what is the cost of not evolving now?
2. **Increment subtraction**: what can be removed from the wave while still validating its direction? Move removed content to Out of Scope.
3. **Counterexample**: which failure, concurrency, permission, or data case could invalidate the wave's core assumption?
4. **Authority and Source of Truth**: who decides the priority changes, and which facts does the wave make authoritative that were previously absent?
5. **Success falsifiability**: which observable result means the wave succeeded, and which means the direction is wrong?
6. **Complexity challenge**: which business or scale evidence supports each new dependency, boundary, or mechanism the wave implies?

On a new conflict or blocking unknown, output `NEEDS_CLARIFICATION` and return to Discovery. After every Challenge has an outcome, replay the revised synthesis and obtain explicit Roadmap Decision Authority confirmation; silence is not confirmation. The Challenge MUST NOT descend into DTOs, schema fields, complete APIs, or implementation tasks.

## `ROADMAP EVOLUTION READY` Checklist

All 11 items are required for a PASS:

- [ ] Wave goal, business value, and success criteria are `CONFIRMED`.
- [ ] Every candidate Feature is a vertical slice of business value with a stable new ID.
- [ ] Relationships to existing Features are explicit per entry (extends, depends, replaces, independent).
- [ ] Dependencies point in a feasible direction against existing `NEXT` and `DONE` items.
- [ ] Priority changes on existing entries are enumerated and confirmed by the named Roadmap Decision Authority.
- [ ] Entries claimed by another member are marked `NEEDS_CONFIRMATION`, not rewritten.
- [ ] Out of Scope for the wave is explicit, with subtracted candidates visible.
- [ ] Macro-baseline deltas are enumerated, incremental, and authority-approved; no product repositioning is hidden inside a delta.
- [ ] Critical rules, data, or contract touchpoints are identified with a fact status.
- [ ] Language dimensions resolve from the `AGENTS.md` chain; new identifiers follow the resolved Engineering Language.
- [ ] The Challenge Pass is complete with outcomes, and the revised synthesis has explicit Roadmap Decision Authority confirmation.

Any failed item yields `ROADMAP EVOLUTION READY Status: NOT_READY` and returns to the interview; the Gate records its input manifest, validation time, and authority approval source like every Foundry Gate.

## STOP Conditions

- The direction overturns the macro baseline (repositioning, new primary user base, replaced product goal) and the user has not explicitly decided to redo macro design.
- The repository lacks a credible macro baseline or a resolvable language policy.
- A required Roadmap Decision Authority cannot be reached for a blocking priority or scope decision.
- A claimed-by-another-member entry would need modification and confirmation is unavailable.
- Local-write authorization is missing for the required artifact paths.
