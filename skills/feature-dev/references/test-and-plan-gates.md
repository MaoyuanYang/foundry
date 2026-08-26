# Test and Plan Gates

Read after completing the Spec Gate and optional UI Gate. The fixed order is: define correctness -> define how to prove correctness -> define how to implement.

During these branches, root `STAGE.md` records only the exact `TEST_DESIGN` or `IMPLEMENTATION_PLAN` activity stage and links a Test Gate projection only after its authoritative record/revision exists. Stage never stores scenarios, Tasks, manifests, or Gate evidence.

## 1. Test Design First

Test Design models risk and establishes verifiability; it is not an early test-count exercise. First derive `TS-*` from every `AC-*`, business invariant, failure mode, and change risk.

### Scenario Selection

Select according to risk:

- Happy Path and Alternative Flow.
- Boundary, Invalid Input, Error, Partial Failure, and Recovery.
- Authentication, Authorization, and Privacy.
- Idempotency, Duplicate Request/Message, and Concurrency.
- Transaction, Consistency, Retry, and Timeout.
- Migration, Backward Compatibility, and Regression.
- Performance, capacity, caching, messaging, and observability.
- UI Interaction, Form Validation, Loading/Empty/Error/Success, Navigation, Accessibility, E2E, and necessary Visual Regression.

Record a brief reason for inapplicable items. MUST NOT create scenarios mechanically.

### Scenario Structure

Each scenario MUST record at least:

- Stable `TS-*` ID, title, and risk.
- Protected `AC-*` or invariant.
- Given / When / Then, or equivalent precondition, action, and observable result.
- Suggested level: Unit, Integration, API, Contract, Component, Interaction, Accessibility, E2E, Smoke, Concurrency, Performance, Regression, or Visual Regression.
- Automation target, test location/name when known, data/fixture, and environment dependency.
- Current result and evidence.

Prefer testing external behavior. For example, verify that exactly one order is ultimately created rather than counting private function calls; in the frontend, verify what users see and can do rather than internal component state.

### Traceability

Maintain a lightweight chain:

```text
Requirement -> AC-001 -> TS-001 -> test path/name -> result
```

- Every core Acceptance MUST have at least one scenario.
- One scenario may protect multiple related Acceptance Criteria, but the mapping MUST be explicit.
- When automation is infeasible, record the reason, manual steps, evidence, and residual risk. MUST NOT silently mark it covered.

## 2. Bug Branch

Required order of preference:

```text
reproduction -> regression test -> fix -> verification
```

1. Attempt reproduction with minimal stable steps; record actual and expected behavior, environment, and evidence.
2. Create a `TS-*` regression scenario. When suitable for automation, write the test first and confirm that it fails because of the target defect, not environment noise.
3. Then make the smallest fix.
4. Run the regression test, adjacent tests, and any required full suite.

This branch also applies to UI Bugs. If the Bug is a missing requirement, update the Spec/`AC-*` first. When direct reproduction is unavailable because the issue is production-only, a low-probability race, or the environment is unavailable, an evidence-based surrogate may be used: record reproduction attempts, log/trace/characterization evidence, expected behavior confirmed by Decision Authority, repeatable alternative verification, and residual risk. Explain why automation is unavailable. MUST NOT claim that a test failed first or that the Bug was reproduced when it was not.

## 3. TDD and Testability

Use Test Design First; MUST NOT mechanically require Red-Green-Refactor for every implementation.

Prefer TDD for core business rules, state machines, pure functions, calculations/transformations, idempotency, and Bug fixes. Controllers, configuration, and infrastructure glue may use more suitable integration verification.

When these problems exist, improve test seams in the Plan while avoiding abstractions without a requirement:

- A giant service or controller contains core business logic.
- Static global state or an uncontrollable clock/random source.
- External services cannot be substituted, so simple logic requires starting the entire system.
- Database, Cache, or Message Queue operations and rules are tangled in a huge method.
- A UI component owns networking, state, business logic, and rendering.

Prefer the matching positive directions: clear single responsibility, dependency injection, replaceable external services, isolated business logic, controllable time/clock, focused component responsibility, and a separated API layer. Adopt them only where a real testability need exists; MUST NOT add abstractions without a requirement.

## 4. `TEST DESIGN READY` Checklist

Open Test Question Status is `OPEN | RESOLVED | DEFERRED`. `OPEN` is unresolved, `RESOLVED` has a recorded resolution and evidence, and `DEFERRED` is postponed but unresolved for the current Gate. A Critical Test Question at `OPEN` or `DEFERRED` blocks this Gate.

Every item MUST have an evidence row. Record `TEST DESIGN READY Status: PASS` only when all 10 rows are `YES` and the record includes the complete upstream manifest, Test Design revision, validation time, and Decision Authority approval source and scope. A risk-specific N/A reason may support `YES` only where the checklist item explicitly permits it; the row itself MUST NOT be bypassed as `N/A`:

- [ ] Every core `AC-*` is verifiable and maps to at least one `TS-*`.
- [ ] Happy Path, major Alternative Flows, and boundaries are covered.
- [ ] Error, Authentication/Security, and Regression risks are covered.
- [ ] Idempotency, Concurrency, Transaction, and Consistency are covered or have N/A reasons.
- [ ] High-risk Retry/Timeout, Migration/Compatibility, performance, and similar concerns are covered or have N/A reasons.
- [ ] UI interaction/state, Accessibility, and E2E are covered according to risk or have N/A reasons.
- [ ] Test levels and automation targets are appropriate and MUST NOT target only implementation details.
- [ ] Environment, data, fixtures, and external dependencies are available, or alternative verification is confirmed.
- [ ] A Bug has reproduction evidence and a regression scenario, or an explicitly confirmed evidence-based surrogate, alternative verification, and residual risk.
- [ ] No Critical Requirement is unverifiable, and no Critical Test Question is `OPEN` or `DEFERRED`.

## 5. Implementation Plan

The Plan may be written only after every required Gate has passed or been explicitly skipped and revisions match. Its inputs are the Spec, UX/UI, and Test Design validated by current Gates. The Plan records those revisions and answers only "how to implement."

Cover, as relevant:

- Affected modules, files, pages, components, and dependency boundaries.
- Current flow and target data/API flow.
- Domain, service, persistence, integration, and frontend state/component changes.
- Transaction, consistency, idempotency, cache, and messaging.
- Validation, security, error handling, and observability.
- Schema/data migration, backfill, compatibility, rollout, and rollback.
- Test level and execution command for every `TS-*`.
- Risks, unknowns, verification points, and exit conditions.

The Plan MUST NOT:

- Add a business rule or Acceptance Criterion.
- Expand Scope or remove specified error behavior.
- Silently change an API/UI contract for implementation convenience.
- Introduce a major dependency or architectural change without approval.

If any is needed, return to the Spec and execute Design Change.

## 6. Tasks and Execution Cadence

Tasks MUST form verifiable vertical slices that interleave Code and Tests. For example:

```text
1. migration/constraint + integration proof
2. domain rule + focused tests
3. service/API slice + API tests
4. frontend client/state + interaction tests
5. Loading/Error/Success UI + accessibility checks
6. E2E/smoke + docs sync
```

Remove items inapplicable to the Feature. MUST NOT use a fixed "write all code, then test everything" sequence or turn every Task into a sub-issue for formality.

Before Coding, verify:

- [ ] The Plan references the Spec, applicable UI artifact, and Test Design whose current revisions passed their Gates.
- [ ] The Plan MUST NOT redefine requirements.
- [ ] File/module impact is consistent with project architecture.
- [ ] Major dependencies, migrations, and destructive risks are explicitly confirmed.
- [ ] Tasks interleave implementation, testing, and documentation.
- [ ] Every Task has an observable completion condition.
