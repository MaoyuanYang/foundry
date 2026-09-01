# evolve-dev — Artifacts

What an evolution wave produces, and what it deliberately does not.

## The Roadmap evolution record

Stored beside the Roadmap (for example `specs/EVO-<n>-<slug>.md`), generated from `assets/roadmap-evolution.template.md`:

- **Evolution metadata** — ID, wave goal, requester, planner, Roadmap Decision Authority, Gate result, record revision.
- **Baseline snapshot** — Roadmap state before evolution, active claims considered, motivating debt or gaps (each with an evidence label).
- **New entries** — stable IDs, business value, priority, dependencies, relationship to existing Features.
- **Priority changes** — previous vs new, reason, authority confirmation, claim check.
- **Macro-baseline deltas** — which canonical docs change, the delta, approval, sync status.
- **Out of Scope** — explicitly excluded candidates.
- **Open Questions** — carried into the DRAFT Specs with blocking flags and resolution triggers.
- **NEXT selection** — selected entries, rationale, claiming member, authority confirmation.
- **Handoff** — result (`Confirmed NEXT` or `BLOCKED_HANDOFF` + `EVOLUTION INCOMPLETE`), blocker, resume point.

## Roadmap and Spec updates

- `specs/ROADMAP.md` is updated **incrementally**: new entries appended with `Roadmap Status: DRAFT`, confirmed priority changes recorded, every existing ID, dependency, and delivery record preserved. Evolution appends and re-orders; it never erases.
- Every new Feature gets a shallow DRAFT Spec following the repository's existing spec layout. Each records `Roadmap Status: DRAFT`, retains Open Questions, and never matures to `READY` — `SPEC READY` belongs to `feature-dev`.
- Approved macro-baseline deltas go to the responsible canonical docs only; `docs/onboarding/*` and delivered Specs stay immutable history.

## What this Skill never produces

- Business code, tests, migrations, schemas, or scaffolding.
- Matured Specs, frozen DTOs/fields/components, implementation Issues or PRs.
- Rewrites of Roadmap history or another member's claims.
- Deletion or downgrade of a delivered Feature (retirement is `maintenance-dev`'s `RETIRE` campaign).
