---
name: coding-start
description: "Use ONLY when the user explicitly asks to start or initialize a new Greenfield project, or to plan the next wave of features (update the Roadmap, add draft Feature Specs) for an existing project that already has trustworthy documents. Runs understand-first context reading, a focused interview, project documents (README, PRODUCT, ARCHITECTURE, TESTING, and applicable extras), a Feature Roadmap, and draft Feature Specs. MUST NOT be used to implement a feature (feature-dev), to take over an undocumented Brownfield repository (project-onboard), or to independently verify the current project state against its documents (project-verify)."
---

# coding-start

Turn a rough project idea into the project-level documents a coding agent needs before
feature work: product and architecture documents, a Feature Roadmap, and draft Feature
Specs. The output of this skill is documents, not code. Feature implementation belongs to
`feature-dev`.

For an existing project that already has trustworthy documents, the same workflow applies
when the user asks to plan the next wave of features: skip what already exists, interview
only about the new direction, and update the Roadmap and draft Specs.

## Workflow

```text
Project Idea
    ↓
1. Understand context
    ↓
2. Interview the user
    ↓
3. Write project documents
    ↓
4. Create the Feature Roadmap
    ↓
5. Write draft Feature Specs
    ↓
6. Stop
```

## 1. Understand context first

Before asking the user anything, collect what is already determinable:

- Everything the user has already said or provided.
- The current directory: existing files, notes, configs, prior work.
- Stated technical or business constraints.

Do not ask about anything you can answer from these sources. If the directory already
contains material business code, stop and recommend `project-onboard` instead. If
scanning the templates leaves no user-owned gap — the idea plus this context is enough
to write honest documents — skip the interview or keep it to one short confirmation
round.

## 2. Interview the user

The templates define what must be understood; the interview fills the user-owned gaps.
Scan the templates section by section and fill in everything already determinable —
what the user said, what the directory shows, and low-risk engineering judgment. Then
ask only about the unresolved user-owned gaps (product goals, users, core scenarios,
scope, business rules, behavior preferences, success criteria, hard constraints);
never guess their answers. See [references/interview.md](references/interview.md).

Before writing documents, briefly summarize the key decisions back to the user and let
them correct you. This one checkpoint catches most misunderstandings cheaply.

## 3. Project documents

Write the project documents using the templates in `assets/`. Templates define the
sections to think about; repository context, interview answers, and engineering judgment
fill them in. A section that genuinely does not apply can be deleted.

```text
README.md            what the project is, how to run it
docs/PRODUCT.md      goal, users, use cases, scope
docs/ARCHITECTURE.md system shape, modules, data flow, key decisions
docs/TESTING.md      strategy, levels, key commands
docs/DATABASE.md     only when the product persists data
docs/API.md          only when the product exposes an API
docs/FRONTEND.md     only when the product has a UI
```

Create only the documents that apply. Do not create empty files for symmetry: a CLI tool
needs no `FRONTEND.md`, a pure frontend needs no `DATABASE.md`. Keep each document short
and true; a precise one-page document beats a speculative ten-page one.

## 4. Feature Roadmap

Create `specs/ROADMAP.md` (see `assets/roadmap.template.md`): an ordered table of the
features that together deliver the product's core value, with a draft spec file for each
(`specs/F001-<slug>.md`, `F002-...`). Start small — the roadmap should show the shortest
credible path to a usable product, not an exhaustive wish list. Mark one feature as
`Next`.

## 5. Draft Feature Specs

Write a draft spec for each roadmap feature using `assets/feature-spec.template.md`
(the same template `feature-dev` later refines). Drafts fill in what is already decidable
— goal, background, rough requirements — and record the rest as open questions for
`feature-dev` to resolve with the user. Do not invent answers to user-owned questions
here; leave them in `Open Questions`.

## 6. Stop

When the documents, Roadmap, and draft Specs exist, stop. Tell the user what was created,
which feature is marked `Next`, and that implementation continues with `feature-dev`.

## Boundaries

- MUST NOT start implementing business features. This skill produces documents.
- Non-business scaffolding is acceptable when needed to make documents honest (e.g.
  initializing a package so `README` build commands are real, setting up an empty test
  runner so `TESTING.md` commands run). Keep it minimal.
- MUST preserve unrelated user changes in the worktree.
- MUST NOT perform destructive or remote actions (deleting user data, force operations,
  pushing, publishing) without explicit user authorization.
