# Verification Report Template

One file records one verification pass: what the documents promise, what was checked,
and what the evidence shows. It is a working note for the user and the next agent —
replace it on each pass, or archive it once its findings have been turned into work.

<!-- ==================================================================== -->
<!-- File: docs/VERIFICATION.md                                           -->
<!-- ==================================================================== -->

# Verification Report

<When this pass ran, from which commit, and which documents were read.>

## Verified Promises

| Promise (source)                 | Evidence                        | Result                  |
| -------------------------------- | ------------------------------- | ----------------------- |
| <README: `npm test` passes>      | <ran; 41 passed, 0 failed>      | Verified                |
| <F002 acceptance criterion 1>    | <tests/export.test.ts:12>       | Verified                |
| <PRODUCT: export produces CSV>   | <manual run produced CSV>       | Broken                  |
| <F003 acceptance criterion 2>    | <no test or runnable flow found | Unverified              |
|                                  |  in this pass — see below>      |                         |

<Result labels: **Verified** — executable evidence exists and passes. **Broken** —
evidence exists and shows the promise is false. **Unverified** — no executable evidence
could be produced in this pass.>

## Findings

| # | Finding | Evidence | Affected document / spec | Severity | Recommended next work |
| --- | --- | --- | --- | --- | --- |
| 1 | <what is wrong> | <the observed evidence> | <which document or spec makes the promise> | <High / Medium / Low> | <the concrete next work, for project-dev> |

<Severity: **High** — a documented promise is false, or the build or test suite fails.
**Medium** — a promise lacks executable evidence, an integration gap, or a document
section has drifted from reality. **Low** — minor inconsistency with little practical
impact. Findings are recorded, not fixed — fixing them is project-dev work.>

## Not Exercised

<Promises this pass could not check — flows needing external services, credentials, or
an unavailable environment — recorded as Unverified here rather than skipped silently,
with what would be needed to check them.>
