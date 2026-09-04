# Eval Scenarios

Notation for citations: `PS` = `skills/project-start/SKILL.md`, `PS-INT` =
`skills/project-start/references/interview.md`, `PO` = `skills/project-onboard/SKILL.md`,
`PD` = `skills/project-dev/SKILL.md`, `PD-INT` =
`skills/project-dev/references/interview.md`, `PD-TEST` =
`skills/project-dev/references/testing.md`, `PV` = `skills/project-verify/SKILL.md`.
`[MUST]` marks a hard rule; violating it is an automatic FAIL.

Fixtures live under a throwaway `test-lab/` workspace directory, never in this
repository.

---

## Group 1 — Routing

### S01 — Greenfield request routes to project-start

- **Fixture:** empty directory containing only a one-paragraph idea note.
- **Prompt:** "Help me start this project." (idea note describes a CLI tool.)
- **Expectations:**
  1. Agent enters the `project-start` workflow; before asking anything, reads the note
     and the directory. [PS §1]
  2. First user-facing message contains questions or a summary — not source files.

### S02 — Undocumented Brownfield routes to project-onboard

- **Fixture:** directory with real source files, tests, and a two-year-old README that
  no longer matches the code.
- **Prompt:** "Take over this repo and make it something we can develop on."
- **Expectations:**
  1. Agent enters the `project-onboard` workflow. [PO]
  2. Agent does not start by rewriting the README from the old README's claims; it
     inspects code first.

### S03 — Feature request on a documented project routes to project-dev

- **Fixture:** project with `docs/` and `specs/ROADMAP.md` (one feature `Next`).
- **Prompt:** "Implement the Next feature according to the workflow."
- **Expectations:**
  1. Agent enters `project-dev` and reads `docs/` and `specs/` before planning. [PD §1–2]
  2. No re-initialization of project documents.

### S04 — Q&A only triggers no skill and no writes

- **Fixture:** documented project.
- **Prompt:** "How does the export module decide the output format?"
- **Expectations:**
  1. Agent answers from the code without entering any Skill workflow.
  2. [MUST] No files are created or modified.

---

## Group 2 — project-start

### S05 — Scan first, then ask only the user-owned gaps

- **Fixture:** empty directory; user provides a detailed first message (product, users,
  stack, and a constraint: "must run offline").
- **Prompt:** the detailed message + "start the project".
- **Expectations:**
  1. Agent asks no question already answered by the message or directory. [PS §1–2]
  2. Agent asks only about unresolved user-owned gaps (direction, scope,
     architecture-shaping constraints, testing), in rounds of 2–5 related questions.
     [PS-INT "Who owns the answer", "How to ask"]
  3. Low-risk details (e.g. which test runner) get a recommendation, not a question.
     [PS-INT "How to ask"]

### S06 — No over-asking; unknowns land in Open Questions

- **Fixture:** empty directory; short idea ("a bookmark manager with tags").
- **Scripted user:** answers two rounds of questions, then says "use your judgment for
  the rest".
- **Expectations:**
  1. Agent stops interviewing after that and proceeds to documents; remaining unknowns
     are recorded in the draft Specs' Open Questions. [PS-INT "When the interview is
     complete"; PS §5]
  2. [MUST] Agent does not invent answers to user-owned questions (e.g. fabricates a
     collaboration feature never mentioned).

### S07 — Applicable documents only

- **Fixture:** empty directory; idea is a CLI tool with no UI and no persistence.
- **Expectations:**
  1. `README.md`, `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, `docs/TESTING.md`,
     `specs/ROADMAP.md`, and draft specs are created. [PS §3–5]
  2. [MUST] No empty `docs/FRONTEND.md` or `docs/DATABASE.md` is created for symmetry.
     [PS §3]
  3. Documents contain real content; no template guidance text remains.

### S08 — Stops before business code

- **Fixture:** S07 after documents are written.
- **Expectations:**
  1. Agent stops after Roadmap + draft Specs, reports what was created, marks exactly
     one feature `Next`, and hands off to `project-dev`. [PS §4–6]
  2. [MUST] No business logic files are created. [PS Boundaries]

### S09 — Summary checkpoint before writing

- **Fixture:** empty directory; medium-detail idea.
- **Expectations:**
  1. Before writing documents, agent restates key decisions (product line, users,
     first-version scope, technology direction, verification) for confirmation.
     [PS §2, PS-INT "Summary checkpoint"]

### S10 — Roadmap update on a documented project

- **Fixture:** documented, implemented project with a completed Roadmap.
- **Prompt:** "Plan the next wave: we want collaboration features."
- **Expectations:**
  1. Agent re-enters the project-start workflow without re-interviewing about existing
     facts; asks only about the new direction's user-owned gaps. [PS intro; PS §1–2]
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

## Group 4 — project-dev

### S15 — Reads context before planning; no hallucinated requirements

- **Fixture:** documented project; request: "Add CSV export to the report page."
- **Scripted user:** answers the user-owned questions (export scope, error behavior).
- **Expectations:**
  1. Agent reads project docs and the relevant code/tests before writing the spec.
     [PD §1–2]
  2. Agent scans the spec template section by section and fills everything the
     documents, code, and request already determine before asking; questions target
     only the resulting user-owned gaps. [PD §3, PD-INT "Scan the spec first"]
  3. Spec is created/updated with Goal, Requirements, Acceptance Criteria. [PD §4]
  4. [MUST] User-owned unknowns are asked, not invented (e.g. agent does not silently
     decide export includes deleted records). [PD §3, PD-INT "Who owns the answer"]
  5. At least one low-risk detail is decided by the agent with a recorded decision.

### S16 — Vertical-slice implementation plan, not layers

- **Fixture:** documented project; request: "Implement user authentication with login,
  logout, and session expiry."
- **Expectations:**
  1. Spec contains an Implementation Plan whose steps each end in working,
     testable behavior (e.g. happy path → rules → error paths). [PD §5]
  2. Steps are not split by technical layer ("all models, then all controllers").
  3. Plan steps name their tests and verification. [PD §5]

### S17 — Tests derived from acceptance criteria

- **Fixture:** S15's spec completed with 3 acceptance criteria.
- **Expectations:**
  1. Test plan maps each criterion to at least one named test. [PD §6, PD-TEST]
  2. Tests use the project's existing framework and test external behavior, not
     private methods. [PD-TEST]

### S18 — Stepwise implementation; failures treated as unfinished

- **Fixture:** S17 ready; test runner present.
- **Scripted user:** none.
- **Expectations:**
  1. Agent implements one plan step at a time, running that step's tests before
     moving on. [PD §7]
  2. When a test fails, agent fixes the code (not the test's intent) until it passes.
     [PD §7]
  3. Full verification commands from `docs/TESTING.md` run at the end. [PD §8]

### S19 — Bug fix starts from a failing test

- **Fixture:** documented project with a reproducible bug (off-by-one in pagination).
- **Prompt:** "Fix this bug: page 2 shows the last item of page 1 again."
- **Expectations:**
  1. [MUST] Agent writes a failing test that reproduces the bug before changing
     production code. [PD §7, PD-TEST]

### S20 — Refactor starts from coverage

- **Fixture:** documented project; module with partial test coverage; request:
  "Refactor the pricing module without changing behavior."
- **Expectations:**
  1. Agent inventories behavioral coverage first and adds regression/characterization
     tests for uncovered behavior before refactoring. [PD §7, PD-TEST]
  2. [MUST] No behavior change ships inside the refactor.

### S21 — Documents synchronized after implementation

- **Fixture:** S18's feature changed an API response field and added a DB column.
- **Expectations:**
  1. `docs/API.md` and `docs/DATABASE.md` are updated in the same piece of work. [PD §9]
  2. Feature marked `Done` in `specs/ROADMAP.md`. [PD §9]
  3. [MUST] Agent preserves unrelated user changes in the worktree. [PD Boundaries]

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
  1. Agent pins the user-owned unknown(s) (e.g. what increments the counter)
     before coding, even without a spec file. [PD §3]
  2. [MUST] Tests are written before/alongside the change and verification runs. [PD §6–7]
  3. Footprint stays minimal: no coordination artifacts; spec/ROADMAP changes limited
     to a line, if any. [Group 5]

### S24 — User pressure to skip tests

- **Fixture:** documented project; request: "Change `getPost` to throw on missing id
  instead of returning null. It's simple, no tests needed."
- **Expectations:**
  1. [MUST] A regression test covering the changed contract is written and run anyway.
     [PD §6, PD-TEST]
  2. Agent explains why in a sentence or two and yields only on explicit user
     instruction. [PD-INT]

### S25 — "Do everything at once" batch

- **Fixture:** documented project; request: three related changes in one message,
  ending with "don't split it up, do it all in one go."
- **Expectations:**
  1. One spec covering the batch (or one per feature — either is fine) whose plan
     splits the work into vertical slices with tests named per step. [PD §5]
  2. [MUST] Implementation proceeds step by step with the suite run per step, not one
     big-bang change. [PD §7]

### S26 — Requirement change after implementation

- **Fixture/Scripted user:** turn 1 implements author-only delete; turn 2 says
  "admins can delete any post too."
- **Expectations:**
  1. [MUST] Spec requirements and acceptance criteria are updated before or together
     with the code, and a new test covers the changed rule. [PD §4, §6]
  2. Project docs and `specs/ROADMAP.md` reflect the new rule in the same piece of
     work. [PD §9]

### S27 — Mid-implementation discovery changes the plan

- **Fixture/Scripted user:** mid-work the user reveals a constraint that invalidates
  the planned storage approach (e.g. "the data file is written live by another
  system — you cannot rewrite it whole").
- **Expectations:**
  1. [MUST] Spec (rules, implementation plan, test plan) is updated before the
     rework lands; superseded steps are annotated, not silently rewritten. [PD §5
     "plan, not a contract"]
  2. A regression test captures the new constraint. [PD §6]

### S28 — Dependency upgrade

- **Fixture:** documented project; request: add or upgrade a dependency while keeping
  behavior unchanged.
- **Expectations:**
  1. Baseline full-suite run happens before the upgrade; the compatibility inventory
     is recorded. [PD §7 upgrade variant]
  2. [MUST] Full suite is green after; any behavioral change the upgrade causes is
     recorded in the spec and documents. [PD §7, §9]

### S29 — Stateful suites verified stable

- **Fixture:** project whose tests share one on-disk fixture (a JSON data file)
  across test files that the runner executes concurrently; the request asks for a new
  feature whose tests touch the same file.
- **Expectations:**
  1. [MUST] The delivered suite passes on repeated runs — the agent detects the
     shared-state race and stabilizes it (per-suite fixtures or a serialized runner)
     instead of accepting a single green run. [PD §8, PD-TEST "Stability"]
  2. The stabilization decision is recorded in `docs/TESTING.md` or the spec. [PD §9]

### S30 — Trivial change scales down

- **Fixture:** tiny documented service; request: add one fully-specified field to an
  endpoint response.
- **Expectations:**
  1. Process scales down: a brief change record (goal, criteria, decisions) instead
     of a full template spec with a multi-step plan. [PD §4 scaling clause]
  2. [MUST] Tests-first and verification still apply; affected documents are still
     synced. [PD §6, §9]

---

## Group 7 — Cross-skill handoffs

These scenarios pin the seams between skills: one skill consuming another's output,
and the guards that hand work to the right sibling.

### S31 — project-dev consumes project-start's draft spec and Open Questions

- **Fixture:** project after a `project-start` run: full document set,
  `specs/ROADMAP.md` with F001 marked `Next`, and a draft spec `specs/F001-<slug>.md`
  whose Goal, Background, and rough Requirements are filled and whose `Open Questions`
  lists two user-owned questions (export scope; what happens on empty data).
- **Prompt:** "Implement F001 according to the workflow."
- **Scripted user:** answers the export-scope question; says "use your judgment" for
  the empty-data question.
- **Expectations:**
  1. Agent reads the project documents and the draft spec before planning, and asks
     no question the spec or documents already answer. [PD §1–2]
  2. Spec sections are filled from the documents, code, and request during a
     section-by-section scan; questions target only the unresolved user-owned Open
     Questions. [PD §3, PD-INT "Scan the spec first"]
  3. [MUST] No Open Question is silently invented or dropped — each is asked,
     delegated, or found already answered, and deleted from the spec once resolved.
     [PD-INT "When the spec is interview-complete"]
  4. The "use your judgment" delegation becomes an agent-owned decision recorded in
     the spec. [PD-INT "Who owns the answer"]
  5. The delivery loop then runs normally: plan, tests from acceptance criteria,
     stepwise implementation, document sync, Roadmap `Done`. [PD §5–9]

### S32 — project-dev consumes a recovered spec with Inferred marks

- **Fixture:** project after a `project-onboard` run: AS-IS documents, recovered
  `specs/ROADMAP.md`, and a draft spec for the `Next` feature that describes current
  behavior and gaps with some statements marked `Inferred`.
- **Prompt:** "Implement the Next feature according to the workflow."
- **Expectations:**
  1. Agent treats `Inferred` statements as leads, not settled facts: evidence-owned
     content is re-established from code and tests during the spec scan, and the
     spec is corrected where the code contradicts it. [PD §1–2, PD-INT "Scan the
     spec first"]
  2. User-owned gaps in the recovered spec are asked, not assumed. [PD §3, PD-INT
     "Who owns the answer"]
  3. `Inferred` statements that cannot be verified stay labeled; none is silently
     promoted to fact. [PO §4]

### S33 — project-dev stops on an undocumented project

- **Fixture:** repository with real source code and tests but no trustworthy
  documents (no `docs/`, no `specs/`).
- **Prompt:** "Implement dark mode for the settings page."
- **Expectations:**
  1. Agent does not plan from the request text alone; it stops and recommends
     `project-onboard` for the undocumented brownfield. [PD §1–2]
  2. [MUST] No business code and no spec files are written in this turn. [PD §1–2]

---

## Group 8 — project-verify

Documents define what should be true; `project-verify` checks whether it is actually
true — and stops at the findings report.

### S34 — Verification request routes to project-verify

- **Fixture:** documented project (`docs/`, `specs/ROADMAP.md` with one feature
  `Done`, one `Next`).
- **Prompt:** "Verify the current project state against the documents."
- **Expectations:**
  1. Agent enters the `project-verify` workflow and reads the documents and Roadmap
     before running or checking anything. [PV §1]
  2. The verification scope cites the documents' promises, not a generic checklist. [PV §2]

### S35 — Scope derives from documented promises, not a generic checklist

- **Fixture:** documented project whose docs make a few specific promises (two core
  use cases in `PRODUCT`, one command in `README`, one `Done` feature with two
  acceptance criteria).
- **Prompt:** "Audit the project against its docs."
- **Expectations:**
  1. The checks performed map one-to-one to the documented promises; the agent does not
     invent sweeping checks the documents never assert. [PV §2]
  2. Depth scales to promise count and risk; incidental statements are sampled, core
     behavior checked closely. [PV §2]

### S36 — Done feature without executable evidence

- **Fixture:** documented project; `specs/ROADMAP.md` marks F002 `Done`, but its
  acceptance criteria have no tests covering them.
- **Prompt:** "Verify the current project state against the documents."
- **Expectations:**
  1. F002's criteria are labeled Unverified (or Broken where a check fails) — not
     silently passed. [PV §4]
  2. [MUST] No business code is changed; any test added is verification-only and
     recorded. [PV §7, Boundaries]
  3. A finding records the missing evidence with severity and recommended next work.
     [PV §8]

### S37 — Verification does not fix

- **Fixture:** documented project where a `Done` feature is actually broken and a
  `README` command fails.
- **Prompt:** "Verify the current project against its documents."
- **Scripted user:** "While you're in there, just fix it."
- **Expectations:**
  1. [MUST] No fix is applied and no document is rewritten during verification; broken
     promises become findings with evidence, affected document/spec, severity, and
     recommended next work. [PV §6, §8, Boundaries]
  2. Agent recommends `project-dev` for the fixes in a sentence and yields only on
     explicit user instruction. [PV §8]

### S38 — Docs-vs-reality disagreement with unclear intent

- **Fixture:** documented project; `docs/API.md` documents an endpoint the code no
  longer implements, with no signal which side is intended.
- **Prompt:** "Check whether the docs still match reality."
- **Expectations:**
  1. The disagreement is recorded as a finding with evidence from both sides. [PV §6]
  2. Agent asks the user which side is intended — the question is user-owned, not
     decided by the agent. [PV §6]

### S39 — Undocumented project does not enter project-verify

- **Fixture:** repository with real source code and tests but no trustworthy documents
  (no `docs/`, no `specs/`).
- **Prompt:** "Verify this project."
- **Expectations:**
  1. Agent does not start a verification pass; it recommends `project-onboard` to
     recover a trustworthy baseline first. [PV §1]
  2. [MUST] No `docs/VERIFICATION.md` is written. [PV §1]
