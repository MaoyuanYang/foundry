---
title: FAQ
---

# FAQ

## General

**Will the skills write code for me automatically?**
`coding-start` and `project-onboard` produce documents and stop before business code.
Only `feature-dev` writes code, and only after the spec's user-owned questions are
resolved and its tests are derived from the acceptance criteria. `project-verify` may
add verification-only tests or check scripts to make a documented promise checkable —
never business code.

**How do I do a refactoring, an upgrade, or a debt cleanup?**
Ask `feature-dev` for it directly — "Refactor the auth module without changing
behavior." The loop is the same as any feature; only the entry point adapts: a refactor
starts by confirming behavioral coverage (adding regression tests where missing), and an
upgrade starts by inventorying breakage. A refactor that would change observable
behavior is a change, not a refactor — split it out as its own feature.

**We finished the MVP. How do we plan the next wave of features?**
Re-enter `coding-start` on the documented project: it interviews about the new
direction, then adds Roadmap entries and draft Specs. No separate process is needed —
planning and implementation are already separated by skill.

**Why won't `project-onboard` trigger when I just open a new repo?**
By design. Onboarding writes documentation and changes no behavior, so it needs explicit
intent. Opening or browsing an unfamiliar repository is read-only Q&A unless you
explicitly ask to take it over and recover a baseline.

**How is `project-verify` different from `project-onboard`?**
`project-onboard` repairs an *undocumented or untrustworthy* repository into a baseline:
it writes and fixes documents. `project-verify` audits a *documented* project: it checks
the documents' promises against reality and records findings — it changes nothing except
adding verification-only checks. Recover first, verify later.

**When should I run `project-verify`?**
Whenever trust in the documents matters: before a release, after a batch of features,
after onboarding, or when the Roadmap claims work is `Done` and you want evidence rather
than the claim. It reports findings with severity and recommended next work; fixes go to
`feature-dev`.

**Does Foundry create any coordination files in my project?**
No. The whole project state is the document set (`README.md`, `docs/`, `specs/`) —
there is no status file, no metadata, no bookkeeping to maintain. Removing Foundry
leaves a normal repository behind.

## Workflow

**The agent keeps asking me questions. How do I make it stop?**
The interview is document-driven: templates are scanned and filled from what you said,
the repository, and engineering judgment first, and the agent asks only about
user-owned gaps — goals, users, scope, rules, success criteria, constraints. If it is
asking about trivia, say so — or answer with "use your judgment" and the agent will
record its decision in the spec and move on.

**What if the spec turns out wrong during implementation?**
Update the spec, then continue. The Implementation Plan and spec are plans, not
contracts; when reality disagrees, the documents change in the same piece of work.
That is principle 7: keep documentation synchronized with implementation.

**Is this strict TDD?**
It is spec-driven testing: tests are derived from acceptance criteria, written before or
alongside each implementation step, and must pass before the work is done. It does not
prescribe red-green-refactor ceremony — it prescribes "no step is done until its
verification runs."

**Can I use Foundry with my team's tracker and pull-request process?**
Yes. Foundry deliberately does not manage issues, branches, or reviews. Teams layer
their own tracker and PR workflow on top; the skills only shape how work is specified,
planned, tested, and documented.

**What languages does Foundry work with?**
The skills are language-agnostic. They read your project's conventions from the
repository and follow the existing test framework and style. Foundry's own materials
are English; project documents follow your project's language.
