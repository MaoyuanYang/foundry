# ADR-0002: Document-Driven Interview

- **Status:** Accepted — amended by [ADR-0003](0003-project-verify.md) (ownership
  vocabulary extended to `project-verify`)
- **Date:** 2026-09-04
- **Decision owner:** MaoyuanYang

## Context

Since ADR-0001, the interview's entry condition has been the agent's own materiality
judgment: ask when an unknown "could significantly change external behavior, the core
implementation approach, or how the feature is tested" (`project-dev`), or about "gaps
that materially change the documents" (`project-start`). Because materiality was the
entry test, scanning was effectively optional — sections the agent deemed immaterial
could go unexamined — and the interview's scope tracked the agent's sense of importance
instead of the documents the templates define.

## Decision

The interview is document-driven:

> Documents define what must be understood; interviews fill the user-owned gaps.

1. Before asking anything, the agent scans the document templates section by section and
   fills in everything determinable from three sources: what the user already provided,
   repository evidence (code, tests, configs), and low-risk engineering judgment.
2. Each remaining gap is classified by who owns its answer:
   - **User-owned** — product goals, users, core scenarios, scope, business rules,
     behavior preferences, success criteria, hard constraints. Asked, never guessed.
   - **Agent-owned** — internal implementation, module structure, library choice, code
     organization. Decided by the agent and recorded.
   - **Evidence-owned** — existing behavior, interfaces, data structures, test results.
     Read from the repository.
3. The interview asks only about unresolved user-owned gaps. It is complete when every
   important document section has a reliable source — the user, the repository, or a
   recorded engineering decision — and no user-owned gap remains.
4. Materiality is demoted from entry condition to depth calibration: within the
   user-owned gaps, ask about the document-shaping ones; propose defaults for minor
   ones.

Ownership is a lens for asking questions, not a labeling system: no new statuses, files,
or approval steps are introduced, and project documents record only their own content.

## Alternatives Considered

- **Keep materiality as the entry test, tighten its wording.** Rejected: any entry
  condition based on the agent's importance judgment leaves the scan optional and lets
  interviews skip sections the templates define.
- **Add an explicit per-section checklist artifact.** Rejected: it would reintroduce the
  bookkeeping ADR-0001 removed.

## Consequences

- The templates — not the agent's sense of importance — define what must be understood;
  scanning is mandatory and complete before any question is asked.
- The trigger vocabulary (user-owned / agent-owned / evidence-owned) is uniform across
  `project-start`, `project-dev`, and `project-onboard`, in skills, docs, and evals.
- ADR-0001's positioning (document-first, interview-driven, test-driven) is unchanged;
  this refines how the interview pillar operates.
