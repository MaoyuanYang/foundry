**English** | [中文](./README.zh-CN.md)

<div align="center">

# Foundry

**A document-first, interview-driven, test-driven workflow for coding agents.**

[Website](https://maoyuanyang.github.io/foundry/) · [Installation](#installation) · [The Four Skills](#the-four-skills)

[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b.svg)](./LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-ready-brightgreen.svg)](https://opencode.ai)

</div>

---

## What is Foundry?

A plain coding agent tends to run like this:

```text
User Request → Guess Requirements → Start Coding → Implementation Drifts
```

Foundry is a set of four **Agent Skills** that install a different habit:

```text
Idea → Understand → Interview → Documents / Spec → Plan → Tests → Code → Verify
```

- **Document first** — project documents and Feature Specs are written before code.
- **Interview driven** — documents are filled from what you said, the repository, and engineering judgment; the agent interviews you only about the user-owned gaps.
- **Test driven** — tests are derived from acceptance criteria, and code runs against them.
- **Incremental** — features are built in small, verifiable steps.
- **Kept in sync** — documents are updated when implementation changes reality.

## The Four Skills

| Skill | Phase | Role |
|---|---|---|
| [`project-start`](skills/project-start/SKILL.md) | Greenfield · 0 → 1 | Interview → project documents (`README`, `docs/PRODUCT`, `ARCHITECTURE`, `TESTING`, …) → Roadmap → draft Feature Specs |
| [`project-onboard`](skills/project-onboard/SKILL.md) | Brownfield · unknown → understood | Verify the repo runs → trust code over stale docs → recover AS-IS documents, Roadmap, and Specs |
| [`project-dev`](skills/project-dev/SKILL.md) | Development · 1 → N | Interview → Feature Spec → implementation plan → tests from acceptance criteria → code → verify → sync docs |
| [`project-verify`](skills/project-verify/SKILL.md) | Assurance · claimed → checked | Derive the verification scope from the documents → run declared verification → exercise documented flows → evidence-backed findings report |

```text
New idea ──────▶ project-start ─────▶ project-dev ──▶ project-dev ──▶ ...
                                                    (plan next wave via project-start)
Existing repo ──▶ project-onboard ──▶ project-dev ──▶ project-dev ──▶ ...
                                                    (check state vs documents via project-verify)
```

`project-dev` covers the whole family of development work — new features, changes, bug
fixes, refactors, technical-debt paydown, and dependency upgrades — with the same loop:
a bug fix starts from a failing test, a refactor starts from confirmed coverage.

`project-verify` checks the current state against the documents: whether `Done` features
are actually delivered, whether acceptance criteria have executable evidence, and whether
documented commands and flows still work. It records findings with evidence; fixes return
to `project-dev`.

## Installation

Foundry follows the standard Agent Skills format (`SKILL.md` + `references/` + `assets/`).
Copy the four folders into your agent's skills directory.

**OpenCode / Claude-style agents** (auto-discovered):

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/project-start     ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/project-dev       ~/.agents/skills/
cp -r foundry/skills/project-verify    ~/.agents/skills/
```

Then restart your agent. Verify discovery with `opencode debug skill` (you should see
all four skills listed).

## Quick Start

**Start a new project:**

> "Initialize a new greenfield project: a community local-services platform."

`project-start` reads what you already provided, scans the document templates,
interviews you only about the user-owned gaps, writes the project documents and
`specs/ROADMAP.md` with draft Feature Specs — then stops. No business code.

**Take over an existing repo:**

> "Take over this repository and recover a trustworthy baseline."

`project-onboard` runs the build and tests first, understands the system from the code
(labeling what is Observed, Inferred, or Unknown), repairs the documents to match
reality, and recovers a Roadmap — without changing business behavior.

**Develop a feature:**

> "Implement feature F001 according to the workflow."

`project-dev` reads the project documents and the relevant code, interviews you until
the Spec's user-owned questions are resolved, plans small vertical slices, derives tests
from the acceptance criteria, implements step by step until the tests pass, and updates
the documents it made untrue.

**Verify the project state:**

> "Verify the current project against its documents."

`project-verify` derives its verification scope from the documents themselves — the
commands `README` and `TESTING` declare, the core use cases `PRODUCT` documents, the
features `ROADMAP` marks `Done` — runs them, exercises the flows, and writes a findings
report with evidence, affected documents, severity, and recommended next work. Nothing
is fixed; fixes go back to `project-dev`.

## Principles

1. Document before code.
2. Interview before assumption.
3. Spec before implementation.
4. Derive tests from acceptance criteria.
5. Implement incrementally.
6. Code until tests pass.
7. Keep documentation synchronized with implementation.

Skills hold the process; documents hold the project. Templates define the structure —
repository context, interviews, and engineering judgment fill in the answers.

## Documentation

Full documentation (English & 中文): **<https://maoyuanyang.github.io/foundry/>**

## License

[MIT](./LICENSE) © MaoyuanYang
