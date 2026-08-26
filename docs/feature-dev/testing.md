# feature-dev — Test Design (TEST DESIGN READY)

Foundry uses **Spec-Driven + Test-Oriented Development**. Before coding, ask: *how will this Feature be proven correct?* Test Design is a risk model and a verifiability design — not a race to accumulate test count.

During this branch, `STAGE.md` uses `TEST_DESIGN` and adds only a link/revision projection after the authoritative Test Gate record exists; scenarios and evidence remain in Test Design and the Gate record.

## AC → Test Scenario

Derive `TS-*` scenarios from each `AC-*`, business invariant, failure mode, and change risk. The mapping must be explicit; one scenario may protect several related criteria. Maintain the traceability chain:

```text
Requirement ↔ Acceptance Criterion (AC-*) ↔ Test Scenario (TS-*) ↔ Automated Test
```

Every scenario records: stable `TS-*` ID/title/risk, the protected `AC-*` or invariant, Given/When/Then, suggested level, automation target, data/fixture, environment dependency, and current result/evidence.

## Scenario selection (risk-driven)

Happy Path, Alternative Flows, boundaries, errors, invalid input, authentication, authorization, idempotency, concurrency, transactions, consistency, retry/timeout, duplicate request/message, failure recovery, migration, backward compatibility, regression — and, with UI: user interaction, form validation, loading, error/empty states, accessibility, navigation, E2E, visual regression. Inapplicable items record a short reason instead of mechanical scenarios.

## Test behavior, not implementation

Verify externally observable behavior. Prefer "exactly one order is created" over "a private function was called twice"; in the frontend, prefer "the user sees X and can do Y" over "component internal state equals Z."

## TEST DESIGN READY checklist

`PASS` requires every item `YES` (risk-specific N/A reasons only where the item explicitly permits), plus the complete upstream manifest, Test Design revision, validation time, and Decision Authority approval source and scope:

1. Every core `AC-*` is verifiable and maps to at least one `TS-*`.
2. Happy Path, major Alternative Flows, and boundaries are covered.
3. Error, Authentication/Security, and Regression risks are covered.
4. Idempotency, Concurrency, Transaction, and Consistency are covered or have N/A reasons.
5. High-risk Retry/Timeout, Migration/Compatibility, performance, and similar concerns are covered or have N/A reasons.
6. UI interaction/state, Accessibility, and E2E are covered according to risk or have N/A reasons.
7. Test levels and automation targets are appropriate and do not target only implementation details.
8. Environment, data, fixtures, and external dependencies are available, or alternative verification is confirmed.
9. A Bug has reproduction and a regression scenario, or a confirmed evidence-based surrogate with residual risk.
10. No unverifiable Critical Requirement or Critical Test Question remains.

## Bug branch

Preferred order: `reproduction → regression test → fix → verification`. Attempt reproduction with minimal stable steps; create a `TS-*` regression test (confirm it fails because of the defect, not environment noise); make the smallest fix; run the regression, adjacent, and required full suites. This also applies to UI Bugs. If the Bug is a missing requirement, update the Spec/`AC-*` first.

When direct reproduction is unavailable (production-only, low-probability race, missing environment), an **evidence-based surrogate** may be used: record reproduction attempts, log/trace/characterization evidence, Decision-Authority-confirmed expected behavior, repeatable alternative verification, and residual risk. Never claim a reproduction or test-first failure that did not occur.

## Test Design First, not mechanical TDD

Red-Green-Refactor is not mandated everywhere. TDD suits state machines, core business rules, pure functions, calculations/transformations, idempotency, and Bug fixes; controllers, configuration, and infrastructure glue may use integration verification. Watch for testability blockers (giant services, static global state, uncontrollable clocks, tangled DB/cache/MQ methods, UI components owning networking + state + logic) and improve seams in the Plan — without adding abstractions that have no requirement.
