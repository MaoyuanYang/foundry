---
title: Testing & Work Types
---

# Testing & Work Types

Tests are how the spec gets enforced. The chain is:

```text
Requirements + Acceptance Criteria → Test Plan → tests
```

## Deriving tests from the spec

Each Acceptance Criterion becomes at least one test; Business Rules and Edge Cases add
the rest:

```text
Acceptance Criteria                     Tests
- valid credentials log in          →   successful login
- wrong password fails              →   wrong password rejected
- disabled accounts cannot log in   →   disabled account rejected
```

If a criterion cannot be turned into a test, it is not yet a criterion — rewrite it
until it is observable.

## Testing the right things

- Use the project's existing test framework, structure, and style.
- Test external behavior, not internal structure: inputs and observable outputs, HTTP
  responses, rendered results, persisted state — not private methods.
- Prefer fewer meaningful tests over exhaustive branch coverage; cover the criteria,
  rules, and edges first.
- Keep tests deterministic.

## Test with each step

The Implementation Plan names each step's tests. Write them before or
alongside the step, run them when it lands, and fix until they pass. After all steps,
run the project's full verification commands (`docs/TESTING.md`) so regressions
elsewhere surface before the work is called done.

## Work types

**Bug fix**

```text
reproduce with a failing test → fix → test passes → check for siblings
```

A bug fix without a failing test first is a guess. If the bug cannot be reproduced
directly, get as close as possible and note the gap in the spec.

**Refactor / debt paydown**

```text
confirm behavioral coverage → add regression/characterization tests if needed
→ refactor in small steps → verify behavior unchanged after each
```

If a behavior has no test, write one that captures what it currently does before
changing its internals. Never mix a refactor with a behavior change — split them into
separate features.

**Dependency upgrade**

Inventory what the new version breaks (breaking changes, removed APIs, config format),
upgrade, run the full suite, fix fallout, and record any behavioral change in the spec
and documents.

## Review and document sync

Before finishing, re-read the full diff: does it do what the spec says, nothing more?
Are error paths handled? Do names and structure match project conventions?

Documents stay true, or they become worse than none. When implementation changed
behavior, interfaces, data, or architecture, the affected documents — `docs/API.md`,
`docs/DATABASE.md`, `docs/ARCHITECTURE.md`, and the spec — are updated in the same
piece of work:

```text
Documents ↔ Spec ↔ Tests ↔ Code
```

Then the feature is marked `Done` in `specs/ROADMAP.md`.

## Next

- [Spec & interview](./spec) — how the spec and its plan come together.
