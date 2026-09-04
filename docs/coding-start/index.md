---
title: coding-start
---

# coding-start

Turn a rough project idea into the project-level documents a coding agent needs before
feature work: product and architecture documents, a Feature Roadmap, and draft Feature
Specs. The output is documents, not code — implementation belongs to
[`feature-dev`](../feature-dev/).

For an existing project that already has trustworthy documents, the same workflow handles
"plan the next wave": skip what exists, interview only about the new direction, update
the Roadmap and draft Specs.

## When it triggers

- "Initialize a new greenfield project: …"
- "Start building this idea: …" on an empty or notes-only directory.
- "Plan the next phase / add features to the Roadmap" on a documented project.

It does **not** trigger for taking over an undocumented repository
([`project-onboard`](../project-onboard/)), implementing a feature
([`feature-dev`](../feature-dev/)), or independently verifying the current project state
([`project-verify`](../project-verify/)).

## Workflow

```text
Project Idea
    ↓
1. Understand context      read what the user and directory already answer
    ↓
2. Interview the user      ask only about the user-owned gaps the scan leaves open
    ↓
3. Write project documents README, PRODUCT, ARCHITECTURE, TESTING (+ applicable extras)
    ↓
4. Create the Roadmap      specs/ROADMAP.md, one feature marked Next
    ↓
5. Write draft Specs       specs/F001-<slug>.md with open questions, not invented answers
    ↓
6. Stop                    hand off to feature-dev
```

## Scan the documents, then interview

The agent walks the document templates section by section and fills in everything
already determinable — the user's description, existing notes and configs, stated
constraints, and low-risk engineering judgment. What remains is a set of gaps, and each
gap has an owner:

- **User-owned** — product goals, users, core scenarios, scope, business rules, behavior
  preferences, success criteria, hard constraints. The interview asks about these;
  answers are never guessed.
- **Agent-owned** — internal implementation, module structure, library choice, code
  organization. The agent decides these with sound judgment and records the decision.
- **Evidence-owned** — existing behavior, interfaces, data structures, test results.
  Read from the repository, not asked.

Typical user-owned territory: product direction, what is explicitly out of the first
version, architecture-shaping constraints (required integrations, platforms, scale),
and what must not break.

Low-risk details get a recommendation instead of a question ("I'd use SQLite for the
first version — fine unless you expect concurrent writers"). The interview is complete
when every important section has a reliable source and no user-owned gap remains.
Before writing documents, the agent summarizes the key decisions back to the user for
correction — one cheap checkpoint that catches most misunderstandings.

## Documents produced

Templates define the sections to think about; repository context, interview answers, and
engineering judgment fill them in. Only applicable documents are created:

| Document | When |
|---|---|
| `README.md` | always — what the project is, how to run it |
| `docs/PRODUCT.md` | always — goal, users, use cases, scope |
| `docs/ARCHITECTURE.md` | always — modules, data flow, key decisions |
| `docs/TESTING.md` | always — strategy, levels, commands |
| `docs/DATABASE.md` | when the product persists data |
| `docs/API.md` | when the product exposes an API |
| `docs/FRONTEND.md` | when the product has a UI |
| `specs/ROADMAP.md` | always — the feature list, one feature `Next` |
| `specs/F001-*.md …` | draft spec per feature |

The Roadmap shows the shortest credible path to a usable product, not an exhaustive wish
list. Draft Specs fill in what is decidable and record the rest as **Open Questions** for
`feature-dev` to resolve — user-owned questions are never guessed at this stage.

## Boundaries

- No business code. (Minimal non-business scaffolding is allowed when needed to make
  document commands honest — initializing a package, setting up an empty test runner.)
- No empty files for symmetry.
- No destructive or remote actions without explicit user authorization.

## Next

- [`feature-dev`](../feature-dev/) — pick up the `Next` feature and implement it.
- [`project-onboard`](../project-onboard/) — the brownfield counterpart.
- [`project-verify`](../project-verify/) — audit the documents against reality once
  features ship.
