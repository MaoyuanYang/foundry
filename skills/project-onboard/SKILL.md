---
name: project-onboard
description: "Use ONLY when the user explicitly requests takeover, inventory, or recovery of an existing Brownfield, legacy, or undocumented repository: understanding the system, verifying it runs, repairing or creating project documents, and recovering a Roadmap and Feature Specs from what actually exists. First entry into an unfamiliar repository alone is not a trigger. MUST NOT be used for ordinary Q&A or read-only review, for starting a new Greenfield project (project-start), for implementing or fixing a feature (project-dev), or for independently verifying a documented project against its documents (project-verify)."
---

# project-onboard

Take a repository whose documentation is missing, stale, or untrustworthy and restore it
to a baseline a coding agent can safely develop on: verified commands, honest AS-IS
documents, and a recovered Roadmap and Feature Specs. The output is understanding and
documents, not changes to business behavior.

## Workflow

```text
Existing Repository
    ↓
1. Inspect the repository
    ↓
2. Run existing verification
    ↓
3. Understand the system
    ↓
4. Compare code and documents
    ↓
5. Ask the user when necessary
    ↓
6. Create / repair project documents
    ↓
7. Recover Roadmap and Specs
    ↓
8. Stop
```

## 1. Inspect the repository

Get the lay of the land first: directory structure, languages and frameworks, entry
points, configuration, migrations, tests, CI, and version-control history. When the
repository is hosted on GitHub, include its collaboration surfaces: open issues,
merged pull requests, and CI status. Note what documentation already exists —
it is a lead, not a source of truth.

## 2. Run existing verification

Run the build and test commands the repository declares (or the obvious standard ones),
after recording what you are about to run. Record results honestly, including
pre-existing failures and skipped tests, in a baseline note — see
`assets/baseline.template.md`. Pre-existing failures are facts to record, not bugs to
fix here.

## 3. Understand the system

Trace how the system actually works: main flows through the code, how data is stored and
moves, external integrations, how tests exercise the system. Prefer evidence in this
order:

```text
runtime behavior > tests > code > migrations/config > issue & PR history > docs > inference
```

Issue and pull-request history — when the host provides it — is contemporary human
record: a closed PR's discussion often explains intent that the code cannot. When
documents and reality disagree, reality wins; note the disagreement.

## 4. Compare code and documents

For each existing document, check whether it still matches the code. Classify what you
find with three labels and mark them inline:

- **Observed** — verified from code, tests, or a successful run.
- **Inferred** — your best reading of the code, not yet verified.
- **Unknown** — cannot be determined from the repository.

Do not build a heavier evidence scheme than this. The point of the labels is to tell the
next agent (and the user) which facts are safe to rely on.

## 5. Ask the user when necessary

Ask only about what the documents need and the repository cannot answer: original
intent, why a subsystem exists, whether an observed broken behavior is known. Bring
labeled findings to the conversation ("the docs say X, the code does Y — which is
intended?"). Everything the repository can answer — existing behavior, interfaces, data
structures, test results — is answered from the repository.

When the repository has no usable documents and the document set is created from
scratch, also confirm the document language with the user — English is the default.

When the repository lives on GitHub with a working `gh` CLI, also ask once whether to
adopt GitHub collaboration — issues, pull requests, and a Projects board mirroring the
recovered Roadmap; existing milestones kept or replaced — and record the decision in
the Roadmap's `## Tracking`. See [references/github-flow.md](references/github-flow.md).

## 6. Create / repair project documents

Write or repair the same document set `project-start` produces, in AS-IS form using
`assets/project-docs-as-is.template.md`:

```text
README.md            repaired so setup and commands actually work
docs/PRODUCT.md      what the system evidently does, and for whom
docs/ARCHITECTURE.md modules and data flow as the code shows them
docs/TESTING.md      how the system is actually tested, and what fails
+ DATABASE / API / FRONTEND when applicable
```

Repair existing documents in the language they are already written in; write a
from-scratch set in the language confirmed in step 5 — English by default.

Keep the `Observed / Inferred / Unknown` labels on statements whose reliability matters.
Fix documents to match reality; do not fix reality to match documents. The §2 baseline
note — `docs/ONBOARDING.md`, from `assets/baseline.template.md` — completes the picture:
the verified commands, pre-existing failures, and knowledge gaps behind these documents.

## 7. Recover Roadmap and Specs

Reconstruct `specs/ROADMAP.md` from what exists: features that are evidently implemented
(`Done`), partially implemented or broken (`Draft` with a note), and natural next work
(`Draft`). For features that need real feature work, write draft Specs with
`assets/feature-spec.template.md` describing current behavior and gaps; mark uncertain
reconstructions as `Inferred`. Recommend one feature as `Next` and say why.

When GitHub collaboration is enabled, reconcile the recovery with the host: merged
pull-request history corroborates `Done`; open issues are candidate `Draft` entries —
import them with links in their specs' `Tracking` sections and the Roadmap's `Issue`
column rather than duplicating them; adopt the existing Projects board and milestones
as the mirror of the recovered Roadmap (creating the board is optional).

## 8. Stop

Stop when the baseline is trustworthy: commands verified, documents honest, Roadmap
recovered. Report what was repaired, what remains `Unknown` or `Inferred`, which tests
fail, the collaboration decision, and which feature you recommend next. Implementation
continues with `project-dev`; independent verification of the restored baseline
continues with `project-verify`.

## Boundaries

- MUST NOT change business behavior during onboarding. Fixes to build/test tooling are
  acceptable when needed to verify the baseline; record anything you touch.
- MUST preserve unrelated user changes in the worktree.
- MUST NOT perform destructive or remote actions (deleting user data, force operations,
  pushing, publishing, creating or updating issues, pull requests, milestones, or
  project boards) without explicit user authorization. The §5 collaboration decision is
  that authorization for adopting the host's mirrors in §7; every other remote action
  still asks.
