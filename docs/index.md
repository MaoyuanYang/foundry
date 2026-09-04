---
layout: home
title: Foundry
titleTemplate: ':title'
description: A document-first, interview-driven, test-driven workflow for coding agents.

hero:
  name: Foundry
  text: Document first. Interview driven. Test driven.
  tagline: A workflow for coding agents — understand the project, interview the user, write the spec, plan small steps, derive tests, code until they pass, and keep the documents true.
  image:
    src: /logo.svg
    alt: Foundry
  actions:
    - theme: brand
      text: Get Started
      link: /workflow
    - theme: alt
      text: Install
      link: /install
    - theme: alt
      text: GitHub
      link: https://github.com/MaoyuanYang/foundry

features:
  - icon: 📄
    title: Document First
    details: Project documents and Feature Specs are written before code — and updated in the same change that makes them untrue.
  - icon: 🙋
    title: Interview Driven
    details: The agent asks about what materially changes behavior, scope, or testing instead of guessing requirements. Low-risk details get a recommendation, not a question.
  - icon: 📋
    title: Spec Before Implementation
    details: Every piece of work has an agreed spec with observable requirements and acceptance criteria — the source for both the plan and the tests.
  - icon: 🪜
    title: Incremental Development
    details: "Features are built in vertical slices: each step ends with working, testable behavior — not a pile of entities waiting for services."
  - icon: 🧪
    title: Tests From Acceptance Criteria
    details: Verification is derived from the spec, run after every step, and treated as unfinished work when failing. Bugs start from a failing test; refactors start from confirmed coverage.
  - icon: 🔄
    title: Greenfield and Brownfield
    details: Start a new project with coding-start, or recover an undocumented repository with project-onboard — then develop feature after feature with feature-dev.
---

## The habit Foundry installs

A plain coding agent tends to run like this:

```text
User Request → Guess Requirements → Start Coding → Implementation Drifts
```

Foundry — three Agent Skills for OpenCode, Claude Code, and compatible agents — runs like
this:

```text
Idea → Understand → Interview → Documents / Spec → Implementation Plan → Tests → Code → Verify
```

| Skill | Phase | Role |
|---|---|---|
| [`coding-start`](/coding-start/) | Greenfield · 0 → 1 | Interview → project documents → Roadmap → draft Feature Specs |
| [`project-onboard`](/project-onboard/) | Brownfield · unknown → understood | Verify the repo runs → recover AS-IS documents, Roadmap, Specs |
| [`feature-dev`](/feature-dev/) | Development · 1 → N | Interview → Spec → implementation plan → tests → code → verify → sync docs |

Skills hold the process; documents hold the project. Templates define the structure —
repository context, interviews, and engineering judgment fill in the answers.
