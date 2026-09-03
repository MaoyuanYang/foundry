---
name: feature-dev
description: "Use ONLY when the user explicitly asks to implement, change, fix, refactor, or deliver work on one selected feature or component of a project that already has (or will get) its documents: new features, changes, bug fixes, refactors, technical-debt paydown, and dependency upgrades. Drives read context, interview, Feature Spec, incremental plan, tests, code, verification, and documentation sync. MUST NOT be used for read-only review, diagnosis or explanation only, ordinary Q&A, Greenfield initialization (coding-start), or recovery of an undocumented repository (project-onboard)."
---

# feature-dev

Deliver one piece of development work — a feature, change, bug fix, refactor, debt
paydown, or dependency upgrade — by turning an agreed spec into verified code, kept in
sync with the project documents. This is where Foundry's core loop runs in full:

```text
Interview → Spec → Incremental Plan → Tests → Code → Verify → Sync Docs
```

## Workflow

```text
Feature Request
    ↓
1. Read project documents
    ↓
2. Read the relevant code
    ↓
3. Interview the user
    ↓
4. Fill / refine the Feature Spec
    ↓
5. Write the Incremental Development Roadmap
    ↓
6. Derive tests from acceptance criteria
    ↓
7. Implement step by step, testing as you go
    ↓
8. Review the change
    ↓
9. Synchronize documents
```

## 1–2. Read before writing

Read the project documents (`README`, `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`,
`docs/TESTING.md`, and any applicable `DATABASE` / `API` / `FRONTEND`) and
`specs/ROADMAP.md`, then the code and tests the request touches. Do not plan from the
request text alone — the repository is the primary source. If the project has no
trustworthy documents at all, stop and recommend `coding-start` or `project-onboard`
first.

## 3. Interview the user

Find or create the Feature Spec (`specs/F<nnn>-<slug>.md`), fill in everything the
documents, code, and request already determine, and identify what remains materially
unclear. Ask about those gaps; do not invent answers. The test for what to ask:

> If an unknown could significantly change external behavior, the core implementation
> approach, or how the feature is tested, ask the user first.

Low-risk implementation details are yours to decide with sound judgment — record such
decisions in the spec as you make them. See [references/interview.md](references/interview.md).

## 4. Feature Spec

Refine the spec using `assets/feature-spec.template.md` until its Goal, Requirements,
Acceptance Criteria, and Open Questions honestly reflect an agreed outcome. Delete
sections that do not apply. Update `specs/ROADMAP.md` so this feature shows
`In Progress`.

- MUST NOT start implementation while spec questions that materially affect behavior,
  implementation, or testing remain unresolved.

## 5. Incremental Development Roadmap

Before coding, write the feature's Incremental Development Roadmap (a spec section):
small steps, each with a goal, scope, tests, and verification. Prefer **vertical
slices** — each step ends with working, testable behavior — over layer-by-layer work
(all entities, then all repositories, then all services). A typical shape:

```text
Step 1  smallest working happy path
Step 2  first core business rule
Step 3  error paths and edge cases
Step 4  integration and document sync
```

The roadmap is a plan, not a contract: when implementation reveals a better split or a
wrong assumption, update the roadmap and spec, then continue.

## 6. Tests from acceptance criteria

Derive the test plan from the spec: each Acceptance Criterion should map to at least one
test; Business Rules and Edge Cases add more. Use the project's existing test framework
and style, and test external behavior rather than internal structure. Write the main
tests before or alongside each implementation step — the intent is that no step is
"done" until its verification runs. See [references/testing.md](references/testing.md).

## 7. Implement step by step

Work the roadmap one step at a time: implement, run the step's tests, fix until they
pass, then move on. Keep changes scoped to the spec; park attractive side-ideas as new
Roadmap entries instead of implementing them now.

- MUST run the relevant tests after implementation, and MUST treat test failures as
  work-not-finished, not as noise to suppress.

Work-type variations (do not turn these into separate processes):

- **Bug fix** — first reproduce the bug with a failing test, then fix until it passes.
- **Refactor / debt paydown** — confirm the behavior is covered by tests first; add
  regression or characterization tests for uncovered behavior, refactor in small steps,
  and verify behavior is unchanged after each step.
- **Dependency upgrade** — inventory what the upgrade breaks, upgrade, then run the full
  test suite and fix fallout; note behavioral changes in the spec.

## 8. Review the change

Re-read the full diff before finishing: does it do what the spec says, nothing more? Are
error paths handled? Do names and structure match the project's conventions? Run the
project's full verification (`docs/TESTING.md` commands), not just the new tests.

## 9. Synchronize documents

Documents stay true, or they become worse than none. When implementation changed
behavior, interfaces, data, or architecture, update the affected documents —
`docs/API.md`, `docs/DATABASE.md`, `docs/ARCHITECTURE.md`, and the spec — in the same
piece of work. Then mark the feature `Done` in `specs/ROADMAP.md` and report: what was
built, which tests verify it, and which documents changed.

## Boundaries

- MUST preserve unrelated user changes in the worktree.
- MUST NOT perform destructive or remote actions (deleting user data, force operations,
  pushing, publishing, deploying) without explicit user authorization.
