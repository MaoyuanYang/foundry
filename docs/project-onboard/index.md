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
([`project-start`](../project-start/)), for implementing a feature
([`project-dev`](../project-dev/)), or for independently verifying a documented project
against its documents ([`project-verify`](../project-verify/)).

## Workflow

```text
Existing Repository
    ↓
1. Inspect the repository      structure, languages, entry points, config, tests, CI,
                               VCS history, GitHub surfaces when hosted there
    ↓
2. Run existing verification   build + tests; record pre-existing failures as facts
    ↓
3. Understand the system       trace real flows; trust runtime > tests > code > docs
    ↓
4. Compare code and documents  label findings Observed / Inferred / Unknown
    ↓
5. Ask the user                facts the repo cannot answer; language for from-scratch docs;
                               on GitHub, whether to adopt collaboration
    ↓
6. Create / repair documents   fix documents to match reality, not reality to match docs
    ↓
7. Recover Roadmap and Specs   what is Done, partial, or naturally next
    ↓
8. Stop                        recommend one next feature for project-dev
```

## Evidence over stale docs

Existing documentation is a lead, not a source of truth. The agent prefers evidence in
this order:

```text
runtime behavior > tests > code > migrations/config > issue & PR history > docs > inference
```

Issue and pull-request history — when the host provides it — is contemporary human
record: a closed PR's discussion often explains intent that the code cannot. When
documents and reality disagree, reality wins and the disagreement is recorded. To
keep the baseline honest without building bureaucracy, findings carry one of three
labels:

- **Observed** — verified from code, tests, or a successful run.
- **Inferred** — best reading of the code, not yet verified.
- **Unknown** — cannot be determined from the repository.

## GitHub mode

On a GitHub-hosted repository with a working `gh` CLI, the interview asks once whether
to adopt GitHub collaboration; the decision is recorded in the recovered Roadmap's
`## Tracking`. When enabled, the recovery reconciles with the host: merged pull-request
history corroborates `Done` features, open issues are imported as candidate `Draft`
entries (linked, not duplicated), and the existing Projects board and milestones are
adopted as the mirror of the recovered Roadmap.

## What is produced

Documents created from scratch are written in the language confirmed with the user
(English by default); repaired documents keep the language they are already written in.

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
- Pre-existing test failures are recorded, not fixed — fixing them is `project-dev` work.
- No destructive or remote actions without explicit user authorization. The
  collaboration decision authorizes adopting the host's mirrors; every other remote
  action still asks.

## Next

- [`project-dev`](../project-dev/) — implement the recommended next feature.
- [`project-start`](../project-start/) — the greenfield counterpart.
- [`project-verify`](../project-verify/) — independently audit the restored baseline.
