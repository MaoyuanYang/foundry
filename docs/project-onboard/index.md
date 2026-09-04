---
title: project-onboard
---

# project-onboard

Take a repository whose documentation is missing, stale, or untrustworthy and restore it
to a baseline a coding agent can safely develop on: verified commands, honest AS-IS
documents, and a recovered Roadmap and Feature Specs. The output is understanding and
documents — business behavior does not change during onboarding.

## When it triggers

- "Take over this repository and recover a trustworthy baseline."
- "This codebase has no useful docs — figure out what it does."
- First entry into an unfamiliar repository **when the user asks for durable recovery**.

It does **not** trigger for ordinary Q&A or read-only review, for starting a new project
([`coding-start`](../coding-start/)), for implementing a feature
([`feature-dev`](../feature-dev/)), or for independently verifying a documented project
against its documents ([`project-verify`](../project-verify/)).

## Workflow

```text
Existing Repository
    ↓
1. Inspect the repository      structure, languages, entry points, config, tests, CI
    ↓
2. Run existing verification   build + tests; record pre-existing failures as facts
    ↓
3. Understand the system       trace real flows; trust runtime > tests > code > docs
    ↓
4. Compare code and documents  label findings Observed / Inferred / Unknown
    ↓
5. Ask the user                only for facts the repository cannot answer
    ↓
6. Create / repair documents   fix documents to match reality, not reality to match docs
    ↓
7. Recover Roadmap and Specs   what is Done, partial, or naturally next
    ↓
8. Stop                        recommend one next feature for feature-dev
```

## Evidence over stale docs

Existing documentation is a lead, not a source of truth. The agent prefers evidence in
this order:

```text
runtime behavior > tests > code > migrations/config > docs > inference
```

When documents and reality disagree, reality wins and the disagreement is recorded. To
keep the baseline honest without building bureaucracy, findings carry one of three
labels:

- **Observed** — verified from code, tests, or a successful run.
- **Inferred** — best reading of the code, not yet verified.
- **Unknown** — cannot be determined from the repository.

## What is produced

| Artifact | Content |
|---|---|
| `README.md` | repaired so setup and commands actually work |
| `docs/PRODUCT.md` | what the system evidently does, and for whom |
| `docs/ARCHITECTURE.md` | modules and data flow as the code shows them |
| `docs/TESTING.md` | how the system is actually tested, and what fails |
| `docs/DATABASE.md` / `API.md` / `FRONTEND.md` | when applicable |
| `docs/ONBOARDING.md` | verification results, pre-existing failures, knowledge gaps |
| `specs/ROADMAP.md` | recovered features: Done, partial (Draft), and natural next work |
| `specs/F001-*.md …` | draft specs for features that need real work |

## Boundaries

- No business-behavior changes during onboarding. Build/test tooling fixes are allowed
  when needed to verify the baseline, and anything touched is recorded.
- Pre-existing test failures are recorded, not fixed — fixing them is `feature-dev` work.
- No destructive or remote actions without explicit user authorization.

## Next

- [`feature-dev`](../feature-dev/) — implement the recommended next feature.
- [`coding-start`](../coding-start/) — the greenfield counterpart.
- [`project-verify`](../project-verify/) — independently audit the restored baseline.
