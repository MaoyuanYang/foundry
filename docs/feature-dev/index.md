---
title: feature-dev
---

# feature-dev

Deliver one piece of development work — a feature, change, bug fix, refactor, debt
paydown, or dependency upgrade — by turning an agreed spec into verified code, kept in
sync with the project documents. This is where Foundry's core loop runs in full:

```text
Interview → Spec → Implementation Plan → Tests → Code → Verify → Sync Docs
```

## When it triggers

- "Implement feature F001 according to the workflow."
- "Fix this bug: …", "Refactor the auth module without changing behavior.",
  "Upgrade React to 19.", "Pay down the debt in the export module."

It does **not** trigger for read-only review or diagnosis, for starting a new project
([`coding-start`](../coding-start/)), for recovering an undocumented repository
([`project-onboard`](../project-onboard/)), or for independent whole-project verification
against the documents ([`project-verify`](../project-verify/)).

## Workflow

```text
Feature Request
    ↓
1. Read project documents        README, docs/*, specs/ROADMAP.md
    ↓
2. Read the relevant code        the modules and tests this request touches
    ↓
3. Interview the user            resolve the spec's user-owned gaps
    ↓
4. Fill / refine the Feature Spec   goal, requirements, acceptance criteria
    ↓
5. Write the Implementation Plan   small vertical slices
    ↓
6. Derive tests                  from the acceptance criteria
    ↓
7. Implement step by step        run each step's tests, fix until green
    ↓
8. Review the change             full diff against the spec; full test suite
    ↓
9. Synchronize documents         update whatever the work made untrue
```

Read the two companion pages for the parts that reward depth:

- [Spec & interview](./spec) — how the spec gets filled and what is worth asking.
- [Testing & work types](./testing) — deriving tests, and the bug / refactor / upgrade
  entry points.

## Work types, one loop

`feature-dev` deliberately does not fork into separate processes per work type. The
entry point adapts:

- **Bug fix** — reproduce with a failing test first, then fix until it passes.
- **Refactor / debt paydown** — confirm behavioral coverage, add regression tests where
  missing, refactor in small steps, verify behavior unchanged after each.
- **Dependency upgrade** — inventory breakage, upgrade, run the full suite, record
  behavioral changes.

## Hard rules

Very little is mandatory; what is, defines Foundry:

- **MUST NOT start implementation** while user-owned spec questions (behavior, business
  rules, success criteria, constraints) remain unresolved.
- **MUST derive verification from the spec** — tests come from acceptance criteria.
- **MUST run the relevant tests after implementation**; failures mean work is not
  finished.
- **MUST preserve unrelated user changes** in the worktree.
- **MUST NOT perform destructive or remote actions** without explicit user
  authorization.

## Next

- [Spec & interview](./spec) and [Testing & work types](./testing).
- [`coding-start`](../coding-start/) to plan the next wave when the Roadmap runs dry.
- [`project-verify`](../project-verify/) to independently audit the project against its
  documents — including this feature's `Done` claim.
