# ADR-0003: project-verify, a Document-Driven Verification Skill

- **Status:** Accepted
- **Date:** 2026-09-04
- **Decision owner:** MaoyuanYang

## Context

ADR-0001 collapsed Foundry to three skills and made documents the single source of
truth: they define scope, requirements, and acceptance criteria. But nothing in the
suite independently checks that the documents' promises hold. Each existing skill
verifies only its own slice: `project-dev` verifies the change it just made, and
`project-onboard` runs verification only to establish a baseline before repairing
documents. Whether a Roadmap full of `Done` features is actually delivered, whether
acceptance criteria have executable evidence, and whether documented commands and flows
still work is a question none of them answers — and a verification pass run by the same
agent that wrote the code has a structural conflict of interest.

## Decision

Add a fourth skill, `project-verify`, guided by one sentence:

> Documents define what should be true; project-verify checks whether it is actually
> true.

1. It triggers only on an explicit user request to verify, audit, or check the current
   state of a documented project against its documents.
2. The verification scope is derived from the project's documents — README, PRODUCT,
   ARCHITECTURE, TESTING, applicable extras, ROADMAP statuses, and the specs of `Done` /
   `In Progress` features. There is no fixed generic checklist; a project whose documents
   make ten promises gets those ten checks.
3. It runs the declared verification, checks `Done` features for executable evidence of
   their acceptance criteria (labeling results Verified / Broken / Unverified), exercises
   key user flows including cross-feature behavior, and compares documents with reality.
   When intent is unclear, it asks the user — reusing ADR-0002's ownership vocabulary.
4. It may add verification-only tests or check scripts to make a documented promise
   checkable; it MUST NOT change business behavior to make verification pass, and it does
   not repair documents — discrepancies are findings, so the report stays an independent
   audit rather than a party to the drift.
5. Findings are recorded in `docs/VERIFICATION.md` with the finding, evidence, affected
   document or spec, severity, and recommended next work. Fixes continue with
   `project-dev`; no stages, gates, or approval machinery are introduced.

## Alternatives Considered

- **A "verify mode" inside `project-dev`.** Rejected: verification must be independent of
  the change claiming completion — the skill that wrote the code cannot audit it.
- **Extend `project-onboard` with a verification pass.** Rejected: onboarding repairs
  documents; verification must not touch them. Different outputs, different boundaries.
- **A periodic scheduled verification run.** Rejected: triggers stay explicit and
  user-owned, matching every other skill.

## Consequences

- Foundry is four skills: `project-start` (documents), `project-onboard` (recovery),
  `project-dev` (implementation), `project-verify` (independent verification).
- ADR-0002's ownership vocabulary extends to `project-verify`: user-owned intent
  questions are asked; everything else is answered from evidence.
- `scripts/verify-skills.mjs` enrolls the new skill; every SKILL.md routes to all
  siblings, in skills, docs, and evals.
- "Skills hold the process; documents hold the project" is unchanged — the documents
  define the verification scope, the skill only runs the check.
