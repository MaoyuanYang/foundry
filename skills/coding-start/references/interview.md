# Interview Guide

The interview exists to fill the project documents. Documents define what must be
understood; the interview fills the user-owned gaps. It is a conversation with a
purpose, not a form to complete.

## Scan the documents first

Before asking anything, walk the templates (`assets/project-docs.template.md`,
`assets/feature-spec.template.md`) section by section and fill in everything already
determinable:

- **From the user** — the idea, constraints, and preferences they already stated.
- **From the repository** — existing files, notes, configs, prior work.
- **From engineering judgment** — low-risk decisions any reasonable engineer could make
  and defend (library choice for an isolated concern, internal layout, naming).

Do not ask about anything these sources already answer, and do not re-ask what the user
already answered.

## Who owns the answer

The scan leaves gaps. Classify each gap by who owns its answer:

- **User-owned** — product goals, users, core scenarios, scope, business rules, behavior
  preferences, success criteria, hard constraints. Ask about these; never guess.
- **Agent-owned** — internal implementation, module structure, library choice, code
  organization. Decide these yourself with sound judgment and record the decision.
- **Evidence-owned** — existing behavior, interfaces, data structures, test results.
  Get these from the repository, not from the user.

The interview covers the unresolved user-owned gaps — nothing more. Typical territory:
product direction, what is explicitly out of scope, architecture-shaping constraints
(required integrations, platforms, hard technology requirements, expected scale), and
what must not break.

## How to ask

- Ask a few related questions per round (2–5). Waiting for answers before the next round
  keeps the conversation focused and lets earlier answers retire later questions.
- One topic at a time; don't interleave product, architecture, and testing in a single
  confusing batch.
- For low-risk details, propose a recommendation instead of asking: "I'd use SQLite for
  the first version — fine unless you expect concurrent writers."
- Never guess a user-owned answer; a guessed product decision becomes a wrong document.

Materiality calibrates depth, not entry: within the user-owned gaps, ask first about the
ones that shape the documents, and propose defaults for minor ones at the summary
checkpoint instead of running extra rounds for low-value detail.

## When the interview is complete

The interview is complete when every important document section has a reliable source —
the user, the repository, or a recorded engineering decision — and no user-owned gap
remains unresolved. A user-owned gap that `feature-dev` can resolve later with better
context belongs in the draft spec's `Open Questions`, not in another interview round.

## Summary checkpoint

Before writing the documents, restate the key decisions in a few sentences — the product
in one line, the users, the first-version scope, the technology direction, and the
verification approach — and ask the user to confirm or correct. Proposed defaults for
minor gaps are confirmed here too. Writing starts after this confirmation.
