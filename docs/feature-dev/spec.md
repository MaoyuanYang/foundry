---
title: Spec & Interview
---

# Spec & Interview

The Feature Spec (`specs/F<nnn>-<slug>.md`) is the agreement between the user and the
agent: what will be built, how it behaves, and how completion is verified. It comes from
four sources — never from the request text alone:

```text
Project Documents + Existing Code + User Request + User Interview → Feature Spec
```

## Filling the spec

After reading the project documents and the relevant code, the agent fills in everything
already determinable, then identifies what remains materially unclear. The test for what
still needs the user:

> If an unknown could significantly change external behavior, the core implementation
> approach, or how the feature is tested, ask the user first.

Everything else is a low-risk implementation detail — the agent decides it with sound
engineering judgment and records the decision in the spec as it goes.

## Interviewing well

- A few related questions per round; answers retire later questions.
- Concrete beats abstract: "Should expired sessions be rejected with 401 or refreshed
  silently?" — not "How should errors be handled?"
- Offer a best guess as a default: "I'd return 401 and keep refresh opt-in — sound?"
- Never invent answers to behavior-defining questions; a wrong assumption in the spec
  becomes a wrong feature in the code.

The spec is interview-complete when its remaining unknowns are all low-risk. Each Open
Question is resolved by asking, then deleted once answered.

## The spec template

```text
# Feature: <Name>

## Goal                          the problem this feature solves
## Background                    context: existing behavior, related docs
## User Flow                     how a user or caller uses it
## Requirements                  behaviors to implement, stated observably
## Business Rules                rules and constraints that govern behavior
## Edge Cases                    failure and boundary situations
## UI / UX                       only for features with UI impact
## API / Data Changes            only when interfaces or data change
## Acceptance Criteria           clear, verifiable completion standards
## Incremental Development Roadmap   small steps, each testable
## Test Plan                     how the criteria are verified
## Open Questions                unresolved questions that matter
```

Sections that do not apply are deleted. A spec that still contains template guidance is
not done.

## The Incremental Development Roadmap

Before coding, the spec gains a stepwise plan answering one question: *in what order
should this be built and verified?* Each step has a goal, scope, tests, and
verification. Prefer **vertical slices** — each step ends with working, testable
behavior:

```text
Step 1  smallest working happy path
Step 2  first core business rule
Step 3  error paths and edge cases
Step 4  integration and document sync
```

Avoid splitting by technical layer (all entities, then all repositories, then all
services) — those steps cannot be verified until the end. The roadmap is a plan, not a
contract: when implementation reveals a better split or a wrong assumption, update the
roadmap and spec, then continue.

## Roadmap status

While the feature is in progress, `specs/ROADMAP.md` marks it `In Progress`; when the
work is verified and the documents are synced, `Done`.

## Next

- [Testing & work types](./testing) — turning acceptance criteria into tests.
