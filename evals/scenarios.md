# Eval Scenarios

Notation for citations: `CS` = `skills/coding-start/SKILL.md`, `CS-INT` =
`skills/coding-start/references/interview.md`, `PO` = `skills/project-onboard/SKILL.md`,
`FD` = `skills/feature-dev/SKILL.md`, `FD-INT` =
`skills/feature-dev/references/interview.md`, `FD-TEST` =
`skills/feature-dev/references/testing.md`. `[MUST]` marks a hard rule; violating it is
an automatic FAIL.

Fixtures live under a throwaway `test-lab/` workspace directory, never in this
repository.

---

## Group 1 — Routing

### S01 — Greenfield request routes to coding-start

- **Fixture:** empty directory containing only a one-paragraph idea note.
- **Prompt:** "Help me start this project." (idea note describes a CLI tool.)
- **Expectations:**
  1. Agent enters the `coding-start` workflow; before asking anything, reads the note
     and the directory. [CS §1]
  2. First user-facing message contains questions or a summary — not source files.

### S02 — Undocumented Brownfield routes to project-onboard

- **Fixture:** directory with real source files, tests, and a two-year-old README that
  no longer matches the code.
- **Prompt:** "Take over this repo and make it something we can develop on."
- **Expectations:**
  1. Agent enters the `project-onboard` workflow. [PO]
  2. Agent does not start by rewriting the README from the old README's claims; it
     inspects code first.

### S03 — Feature request on a documented project routes to feature-dev

- **Fixture:** project with `docs/` and `specs/ROADMAP.md` (one feature `Next`).
- **Prompt:** "Implement the Next feature according to the workflow."
- **Expectations:**
  1. Agent enters `feature-dev` and reads `docs/` and `specs/` before planning. [FD §1–2]
  2. No re-initialization of project documents.

### S04 — Q&A only triggers no skill and no writes

- **Fixture:** documented project.
- **Prompt:** "How does the export module decide the output format?"
- **Expectations:**
  1. Agent answers from the code without entering any Skill workflow.
  2. [MUST] No files are created or modified.

---

## Group 2 — coding-start

### S05 — Understand first, then ask only what matters

- **Fixture:** empty directory; user provides a detailed first message (product, users,
  stack, and a constraint: "must run offline").
- **Prompt:** the detailed message + "start the project".
- **Expectations:**
  1. Agent asks no question already answered by the message or directory. [CS §1]
  2. Interview rounds ask 2–5 related questions each, focused on direction, scope,
     architecture-shaping constraints, or testing. [CS-INT "What to ask about"]
  3. Low-risk details (e.g. which test runner) get a recommendation, not a question.
     [CS-INT "How to ask"]

### S06 — No over-asking; unknowns land in Open Questions

- **Fixture:** empty directory; short idea ("a bookmark manager with tags").
- **Scripted user:** answers two rounds of questions, then says "use your judgment for
  the rest".
- **Expectations:**
  1. Agent stops interviewing after that and proceeds to documents; remaining unknowns
     are recorded in the draft Specs' Open Questions. [CS-INT "When to stop"; CS §5]
  2. [MUST] Agent does not invent product-defining answers (e.g. fabricates a
     collaboration feature never mentioned).

### S07 — Applicable documents only

- **Fixture:** empty directory; idea is a CLI tool with no UI and no persistence.
- **Expectations:**
  1. `README.md`, `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, `docs/TESTING.md`,
     `specs/ROADMAP.md`, and draft specs are created. [CS §3–5]
  2. [MUST] No empty `docs/FRONTEND.md` or `docs/DATABASE.md` is created for symmetry.
     [CS §3]
  3. Documents contain real content; no template guidance text remains.

### S08 — Stops before business code

- **Fixture:** S07 after documents are written.
- **Expectations:**
  1. Agent stops after Roadmap + draft Specs, reports what was created, marks exactly
     one feature `Next`, and hands off to `feature-dev`. [CS §4–6]
  2. [MUST] No business logic files are created. [CS Boundaries]

### S09 — Summary checkpoint before writing

- **Fixture:** empty directory; medium-detail idea.
- **Expectations:**
  1. Before writing documents, agent restates key decisions (product line, users,
     first-version scope, technology direction, verification) for confirmation.
     [CS §2, CS-INT "Summary checkpoint"]

### S10 — Roadmap update on a documented project

- **Fixture:** documented, implemented project with a completed Roadmap.
- **Prompt:** "Plan the next wave: we want collaboration features."
- **Expectations:**
  1. Agent re-enters the coding-start workflow without re-interviewing about existing
     facts; interviews only about the new direction. [CS intro; CS §1]
  2. New entries + draft specs are added; existing `Done` entries are not rewritten.

---

## Group 3 — project-onboard

### S11 — Runs verification first; records pre-existing failures

- **Fixture:** repository whose test suite has one failing test and one skipped test.
- **Expectations:**
  1. Agent runs build/test commands before writing any document. [PO §2]
  2. Failures are recorded as facts (in `docs/ONBOARDING.md`). [PO §2]
  3. [MUST] Agent does not fix the failing test during onboarding. [PO Boundaries]

### S12 — Trusts code over stale docs

- **Fixture:** README claims "REST API"; the code actually exposes a gRPC service.
- **Expectations:**
  1. Agent describes the system as gRPC in the repaired documents. [PO §3–4, §6]
  2. The docs-vs-reality conflict is recorded. [PO §4]

### S13 — Honest labels on recovered facts

- **Fixture:** repository with a module whose purpose is genuinely unclear.
- **Expectations:**
  1. Findings use `Observed / Inferred / Unknown` labels — verified claims marked
     Observed, readings marked Inferred, undeterminable facts marked Unknown. [PO §4]
  2. Agent asks the user only about facts the repository cannot answer. [PO §5]
  3. No heavier evidence scheme (extra status vocabularies, ledgers) is invented.

### S14 — Recovers the Roadmap; recommends one next feature

- **Fixture:** repository with implemented features, one half-finished feature.
- **Expectations:**
  1. `specs/ROADMAP.md` marks implemented features `Done`, partial work `Draft` with a
     note. [PO §7]
  2. Exactly one feature is recommended as `Next`, with reasoning. [PO §7]
  3. [MUST] Business behavior is unchanged by onboarding. [PO Boundaries]

---

## Group 4 — feature-dev

### S15 — Reads context before planning; no hallucinated requirements

- **Fixture:** documented project; request: "Add CSV export to the report page."
- **Scripted user:** answers the material questions (export scope, error behavior).
- **Expectations:**
  1. Agent reads project docs and the relevant code/tests before writing the spec.
     [FD §1–2]
  2. Spec is created/updated with Goal, Requirements, Acceptance Criteria. [FD §4]
  3. [MUST] Material unknowns are asked, not invented (e.g. agent does not silently
     decide export includes deleted records). [FD §3, FD-INT]
  4. At least one low-risk detail is decided by the agent with a recorded decision.

### S16 — Vertical-slice roadmap, not layers

- **Fixture:** documented project; request: "Implement user authentication with login,
  logout, and session expiry."
- **Expectations:**
  1. Spec contains an Incremental Development Roadmap whose steps each end in working,
     testable behavior (e.g. happy path → rules → error paths). [FD §5]
  2. Steps are not split by technical layer ("all models, then all controllers").
  3. Roadmap steps name their tests and verification. [FD §5]

### S17 — Tests derived from acceptance criteria

- **Fixture:** S15's spec completed with 3 acceptance criteria.
- **Expectations:**
  1. Test plan maps each criterion to at least one named test. [FD §6, FD-TEST]
  2. Tests use the project's existing framework and test external behavior, not
     private methods. [FD-TEST]

### S18 — Stepwise implementation; failures treated as unfinished

- **Fixture:** S17 ready; test runner present.
- **Scripted user:** none.
- **Expectations:**
  1. Agent implements one roadmap step at a time, running that step's tests before
     moving on. [FD §7]
  2. When a test fails, agent fixes the code (not the test's intent) until it passes.
     [FD §7]
  3. Full verification commands from `docs/TESTING.md` run at the end. [FD §8]

### S19 — Bug fix starts from a failing test

- **Fixture:** documented project with a reproducible bug (off-by-one in pagination).
- **Prompt:** "Fix this bug: page 2 shows the last item of page 1 again."
- **Expectations:**
  1. [MUST] Agent writes a failing test that reproduces the bug before changing
     production code. [FD §7, FD-TEST]

### S20 — Refactor starts from coverage

- **Fixture:** documented project; module with partial test coverage; request:
  "Refactor the pricing module without changing behavior."
- **Expectations:**
  1. Agent inventories behavioral coverage first and adds regression/characterization
     tests for uncovered behavior before refactoring. [FD §7, FD-TEST]
  2. [MUST] No behavior change ships inside the refactor.

### S21 — Documents synchronized after implementation

- **Fixture:** S18's feature changed an API response field and added a DB column.
- **Expectations:**
  1. `docs/API.md` and `docs/DATABASE.md` are updated in the same piece of work. [FD §9]
  2. Feature marked `Done` in `specs/ROADMAP.md`. [FD §9]
  3. [MUST] Agent preserves unrelated user changes in the worktree. [FD Boundaries]

---

## Group 5 — Anti-bookkeeping

### S22 — No Foundry coordination artifacts

- **Fixture:** any of the above flows driven to completion.
- **Expectations:**
  1. [MUST] No status/coordination files beyond the document set (`README.md`,
     `docs/`, `specs/`) are created — no stage boards, gate records, manifests, or
     revision metadata. [ADR-0001]
  2. The feature spec contains no workflow-state metadata (no gate tokens, no status
     headers beyond its own content). [ADR-0001]

---

## Group 6 — Adversarial and change handling

These scenarios pin Foundry's core constraints under user pressure and change — the
properties most easily lost to future wording edits.

### S23 — User pressure to skip the spec

- **Fixture:** documented project; request: "Add a views counter to posts. Don't write
  a spec, just code it."
- **Expectations:**
  1. Agent pins the behavior-defining unknown(s) (e.g. what increments the counter)
     before coding, even without a spec file. [FD §3]
  2. [MUST] Tests are written before/alongside the change and verification runs. [FD §6–7]
  3. Footprint stays minimal: no coordination artifacts; spec/ROADMAP changes limited
     to a line, if any. [Group 5]

### S24 — User pressure to skip tests

- **Fixture:** documented project; request: "Change `getPost` to throw on missing id
  instead of returning null. It's simple, no tests needed."
- **Expectations:**
  1. [MUST] A regression test covering the changed contract is written and run anyway.
     [FD §6, FD-TEST]
  2. Agent explains why in a sentence or two and yields only on explicit user
     instruction. [FD-INT]

### S25 — "Do everything at once" batch

- **Fixture:** documented project; request: three related changes in one message,
  ending with "don't split it up, do it all in one go."
- **Expectations:**
  1. One spec covering the batch (or one per feature — either is fine) whose roadmap
     splits the work into vertical slices with tests named per step. [FD §5]
  2. [MUST] Implementation proceeds step by step with the suite run per step, not one
     big-bang change. [FD §7]

### S26 — Requirement change after implementation

- **Fixture/Scripted user:** turn 1 implements author-only delete; turn 2 says
  "admins can delete any post too."
- **Expectations:**
  1. [MUST] Spec requirements and acceptance criteria are updated before or together
     with the code, and a new test covers the changed rule. [FD §4, §6]
  2. Project docs and `specs/ROADMAP.md` reflect the new rule in the same piece of
     work. [FD §9]

### S27 — Mid-implementation discovery changes the plan

- **Fixture/Scripted user:** mid-work the user reveals a constraint that invalidates
  the planned storage approach (e.g. "the data file is written live by another
  system — you cannot rewrite it whole").
- **Expectations:**
  1. [MUST] Spec (rules, roadmap, test plan) is updated before the rework lands;
     superseded steps are annotated, not silently rewritten. [FD §5 "plan, not a
     contract"]
  2. A regression test captures the new constraint. [FD §6]

### S28 — Dependency upgrade

- **Fixture:** documented project; request: add or upgrade a dependency while keeping
  behavior unchanged.
- **Expectations:**
  1. Baseline full-suite run happens before the upgrade; the compatibility inventory
     is recorded. [FD §7 upgrade variant]
  2. [MUST] Full suite is green after; any behavioral change the upgrade causes is
     recorded in the spec and documents. [FD §7, §9]

### S29 — Stateful suites verified stable

- **Fixture:** project whose tests share one on-disk fixture (a JSON data file)
  across test files that the runner executes concurrently; the request asks for a new
  feature whose tests touch the same file.
- **Expectations:**
  1. [MUST] The delivered suite passes on repeated runs — the agent detects the
     shared-state race and stabilizes it (per-suite fixtures or a serialized runner)
     instead of accepting a single green run. [FD §8, FD-TEST "Stability"]
  2. The stabilization decision is recorded in `docs/TESTING.md` or the spec. [FD §9]

### S30 — Trivial change scales down

- **Fixture:** tiny documented service; request: add one fully-specified field to an
  endpoint response.
- **Expectations:**
  1. Process scales down: a brief change record (goal, criteria, decisions) instead
     of a full template spec with a multi-step roadmap. [FD §4 scaling clause]
  2. [MUST] Tests-first and verification still apply; affected documents are still
     synced. [FD §6, §9]
