---
name: project-verify
description: "Use ONLY when the user explicitly asks to verify, audit, or check the current state of a documented project against its own documents: whether features marked Done in the Roadmap are actually delivered, whether acceptance criteria have executable evidence, whether documented commands, key user flows, and cross-feature behavior work, and whether documents still match reality. Derives the verification scope from the project's documents, runs the declared verification, exercises documented behavior, and reports findings with evidence and recommended next work — without fixing anything. MUST NOT be used to implement or fix anything (project-dev), to create or repair project documents (project-start / project-onboard), or for ordinary Q&A or read-only code explanation."
---

# project-verify

Documents define what should be true; this skill checks whether it is actually true. Take
a project that already has documents and a Roadmap, and verify its current state against
what those documents promise — then report evidence-backed findings. The output is a
findings report, not fixes: repairs and implementation belong to `project-dev`.

## Workflow

```text
Documented Project
    ↓
1. Collect what the documents promise
    ↓
2. Derive the verification scope
    ↓
3. Run the declared verification
    ↓
4. Check Done features and acceptance criteria
    ↓
5. Exercise key user flows and cross-feature behavior
    ↓
6. Compare documents with reality
    ↓
7. Add verification-only checks where evidence is missing
    ↓
8. Report findings and stop
```

## 1. Collect what the documents promise

Read the project's documents — `README.md`, `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`,
`docs/TESTING.md`, any applicable `docs/DATABASE.md` / `docs/API.md` / `docs/FRONTEND.md`
and any other document the project keeps (e.g. `docs/OPERATIONS.md`) — plus
`specs/ROADMAP.md` and the specs of features marked `Done` or `In Progress`. Every
testable statement in them is a promise: a documented command that should work, a core
use case, an endpoint, a schema, a feature status. If the project has no trustworthy
documents at all, stop and recommend `project-start` (greenfield) or `project-onboard`
(brownfield) first.

## 2. Derive the verification scope

Turn the promises into the verification checklist. The documents define the scope —
there is no fixed generic checklist to run; a project whose documents make ten promises
gets those ten checks, not a hundred. Scale depth to the number and risk of the
promises: verify everything the documents assert about build, tests, and core behavior
closely; verify incidental statements by sampling.

## 3. Run the declared verification

Run the build, test, and lint commands exactly as `README` and `docs/TESTING.md`
document them, recording what ran and what happened. Record results honestly — a
failing suite is a finding, not an obstacle to work around. Also note commands that
only fail because the documents are wrong (a typo'd command is a documentation finding).

## 4. Check Done features and acceptance criteria

For each feature marked `Done` in `specs/ROADMAP.md` — and each `In Progress` feature
whose finished steps claim completion — locate the executable evidence for its
acceptance criteria: the tests, scripts, or runnable flows that demonstrate them. Label
what you find:

- **Verified** — executable evidence exists and passes.
- **Broken** — evidence exists and shows the promise is false.
- **Unverified** — no executable evidence could be produced.

A feature marked `Done` whose acceptance criteria have no executable evidence is a
finding, not a pass.

## 5. Exercise key user flows and cross-feature behavior

Exercise the core use cases `docs/PRODUCT.md` documents, using the project's own tooling
and environment. Prefer runtime behavior over reading code. Include flows that cross
feature boundaries — where one feature's output is another's input — because per-feature
verification is exactly where integration gaps hide. Record what could not be exercised
(a flow needing external services or credentials) as Unverified rather than skipping it
silently.

## 6. Compare documents with reality

Check the documents' structural claims against the code: modules that should exist,
endpoints, schema, commands, configuration. When documents and reality disagree, record
the disagreement as a finding. If the disagreement is about intent — "the docs say X,
the code does Y — which is intended?" — that question belongs to the user; ask it and
record the answer. Do not repair the documents here; that is implementation work.

## 7. Add verification-only checks where evidence is missing

When a documented promise has no executable evidence, make it checkable: add a
verification test or a check script that asserts the documented behavior, run it, and
record the result. Keep these clearly verification-only — separate from business logic,
in the project's own style — and record what was added.

- MUST NOT modify business behavior to make verification pass. Verification tests assert
  documented behavior; they do not define it. If making a promise checkable would
  require changing behavior, record it as Unverified and move on.

## 8. Report findings and stop

Write `docs/VERIFICATION.md` from `assets/verification-report.template.md`: what was
verified true, and each finding with the finding, the evidence, the affected document or
spec, the severity, and the recommended next work. On request, record findings that need
work as `Draft` entries in `specs/ROADMAP.md`.

Do not start fixing — repairs, missing tests for real behavior changes, and document
repairs continue with `project-dev`. Report what was checked, what held, what did not,
and what you recommend next.

## Boundaries

- MUST NOT implement fixes or change business behavior. Verification-only tests and
  check scripts are acceptable; anything touched beyond reading is recorded in the
  report.
- MUST NOT repair documents during verification — discrepancies are findings, so the
  report stays an independent audit rather than a party to the drift.
- MUST preserve unrelated user changes in the worktree.
- MUST NOT perform destructive or remote actions (deleting user data, force operations,
  pushing, publishing, deploying) without explicit user authorization.
