# Testing Guide

Tests are how the spec gets enforced. The chain is:

```text
Requirements + Acceptance Criteria → Test Plan → tests
```

## Derive tests from the spec

Each Acceptance Criterion becomes at least one test. Business Rules and Edge Cases add
the rest. For example:

```text
Acceptance Criteria                    Tests
- valid credentials log in         →   successful login
- wrong password fails             →   wrong password rejected
- disabled accounts cannot log in  →   disabled account rejected
```

If a criterion cannot be turned into a test, it is not yet a criterion — rewrite it until
it is observable.

## Test the right things

- Use the project's existing test framework, structure, and style.
- Test external behavior, not internal structure: inputs and observable outputs, HTTP
  responses, rendered results, persisted state — not private methods or class shape.
- Prefer fewer meaningful tests over exhaustive testing of every branch; cover the
  spec's criteria, rules, and edges first.
- Keep tests deterministic; isolate anything slow or flaky behind the project's existing
  patterns.

## Test with each step

The Incremental Development Roadmap names each step's tests. Write them before or
alongside the step, run them when the step lands, and fix until they pass. After all
steps, run the project's full verification commands (`docs/TESTING.md`) so regressions
elsewhere surface before you call the work done.

## Stability

Many runners execute test files concurrently. If suites share on-disk fixtures (a JSON
file, a database), scope each suite's fixtures to its own files or serialize the
runner, and run the full suite a second time before calling the work done — a single
green run can hide a race between test files.

## Work-type patterns

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

If a behavior has no test, write one that captures what it currently does before you
change its internals. Never mix a refactor with a behavior change — split them into
separate features.

**Dependency upgrade**

Inventory what the new version breaks (breaking changes, removed APIs, config format),
upgrade, run the full suite, fix fallout, and record any behavioral change the upgrade
causes in the spec and documents.
