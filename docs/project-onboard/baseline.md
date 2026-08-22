# project-onboard — Baseline Verification

A **baseline** is "the known state of this ref in this environment at the moment onboarding begins." It is not a fix list and not a quality score. It must be captured **before any source change**, so pre-existing failures can be distinguished from regressions introduced later.

## The six steps

Verify in order, where applicable:

```text
Build → Existing Tests → Smoke Test → Application Startup → Frontend Build → Frontend Tests
```

For each step record: exact command, working directory, environment and versions, dependency/service conditions, `commit/ref`, result, key output, and duration.

## Result states

| Result | Definition |
|---|---|
| `PASS` | The exact command completed in the recorded environment with the expected exit/result |
| `FAIL` | The command ran but returned errors, failed tests, failed startup, or a result contradicting its own assertions |
| `UNAVAILABLE` | Could not run due to missing tools, dependencies, services, platform, or credentials |
| `SKIPPED` | Intentionally not run (risk, cost, scope, permission, or missing authorization) |

`PASS` never means "it probably works"; `FAIL` never means "the tool is missing." When a command covers only part of a workspace, the scope is made explicit. Both `UNAVAILABLE` and `SKIPPED` record the concrete reason and the condition for resuming.

## Command safety classes

**May run directly** — only read-only inspection and compiler/linter dry checks confirmed not to write files, mutate the environment, or touch external systems. Isolated tests and local builds still require local side-effect authorization and a declared output boundary.

**Ask first or skip** — anything that connects to production/staging or shared databases; migrations, seeds, resets, purges, deploys, releases; sending email/SMS or calling paid APIs; needing secrets or sensitive data; clearly expensive or uncontrolled full E2E/performance suites; scripts with unclear behavior. Tests, smoke, and startup must use disposable/isolated local data; when isolation cannot be confirmed, ask first.

After each command, inspect the full worktree (tracked, relevant untracked, expected ignored outputs) and any spawned processes/services. Expected build/coverage artifacts are recorded; unexpected snapshots, codegen, or unknown persistent writes pause the work — never auto-rollback, delete, or fold into doc changes.

## Pre-existing failures

Failures present at baseline time are marked `pre-existing failure` with reproduction details, so they are never rewritten as new regressions later. The baseline document is an **immutable historical snapshot**: even after later Features are delivered, the original baseline and the original AS-IS/evidence sections are preserved, while canonical docs move to `Perspective: CURRENT` and link back to the baseline.

## Output

Results are written to `docs/onboarding/BASELINE.md`, which records the ref, environment, commands, results, pre-existing failures, language-policy state, and authorization boundaries.
