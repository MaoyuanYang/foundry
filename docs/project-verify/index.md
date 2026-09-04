---
title: project-verify
---

# project-verify

Documents define what should be true; `project-verify` checks whether it is actually
true. Take a project that already has documents and a Roadmap, and verify its current
state against what those documents promise — then report evidence-backed findings. The
output is a findings report, not fixes: repairs and implementation belong to
[`project-dev`](../project-dev/).

## When it triggers

- "Verify the current project against its documents."
- "Audit whether the Roadmap's `Done` features are actually done."
- "Check the docs still match reality before the release."

It does **not** trigger to implement or fix anything ([`project-dev`](../project-dev/)),
to create or repair project documents ([`project-start`](../project-start/) /
[`project-onboard`](../project-onboard/)), or for ordinary Q&A and read-only code
explanation.

## Workflow

```text
Documented Project
    ↓
1. Collect what the documents promise   README, PRODUCT, ARCHITECTURE, TESTING, applicable
                                         extras, ROADMAP statuses, Done / In Progress specs
    ↓
2. Derive the verification scope        the documents define the checklist — no generic one
    ↓
3. Run the declared verification        build / test / lint commands exactly as documented
    ↓
4. Check Done features                  acceptance criteria vs executable evidence
    ↓
5. Exercise key user flows              PRODUCT's core use cases, incl. cross-feature flows
    ↓
6. Compare documents with reality       ask the user only when intent is unclear
    ↓
7. Add verification-only checks         where a promise lacks evidence; no behavior changes
    ↓
8. Report findings and stop             findings report; fixes continue with project-dev
```

## Scope comes from the documents

There is no fixed, universal checklist to run. The project's own documents define the
verification scope: a project whose documents make ten promises gets those ten checks.
Each promise receives a result label:

- **Verified** — executable evidence exists and passes.
- **Broken** — evidence exists and shows the promise is false.
- **Unverified** — no executable evidence could be produced.

A feature marked `Done` whose acceptance criteria have no executable evidence is a
finding, not a pass. When making a promise checkable would require adding a test or a
check script, that is allowed — verification-only, never a business-behavior change.

## What is produced

| Artifact | Content |
|---|---|
| `docs/VERIFICATION.md` | verified promises, findings with evidence and severity, what was not exercised |
| verification-only tests / check scripts | only where a documented promise lacked executable evidence |
| `specs/ROADMAP.md` | on request, findings that need work recorded as `Draft` entries |

Each finding states what is wrong, the evidence observed, which document or spec makes
the promise, the severity, and the recommended next work — but fixing is `project-dev`
work, not verification work.

## Boundaries

- No fixes and no business-behavior changes; verification-only tests and check scripts
  are allowed, clearly separated, and recorded.
- Documents are not repaired during verification — discrepancies are findings, so the
  report stays an independent audit rather than a party to the drift.
- No destructive or remote actions without explicit user authorization.

## Next

- [`project-dev`](../project-dev/) — turn the findings into fixes.
- [`project-onboard`](../project-onboard/) — when there is no trustworthy baseline to
  verify against yet.
