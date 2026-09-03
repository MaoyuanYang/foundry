# Interview Guide

The interview exists to fill the gaps that materially change the project documents. It is
a conversation with a purpose, not a form to complete.

## What to ask about

Prioritize questions whose answers change what gets written:

- **Product direction** — who is this for, what is the core problem, what does "done
  enough to be useful" mean?
- **Scope** — what is explicitly out of scope for the first version?
- **Architecture-shaping constraints** — integrations that must exist, platforms that
  must be supported, hard technology requirements, expected scale.
- **Testing** — what must not break, and what does the user consider adequate
  verification?

Do not ask about details that any reasonable engineer could decide later (exact library
versions, internal file layout, naming). Do not re-ask anything the user already answered
or that the directory already answers.

## How to ask

- Ask a few related questions per round (2–5). Waiting for answers before the next round
  keeps the conversation focused and lets earlier answers retire later questions.
- One topic at a time; don't interleave product, architecture, and testing in a single
  confusing batch.
- For low-risk technical details, propose a recommendation instead of asking:
  "I'd use SQLite for the first version — fine unless you expect concurrent writers."
- For product-defining facts (who the users are, what the core flow is, what is out of
  scope), ask; never guess.

## When to stop

Stop interviewing when the remaining unknowns would not materially change the documents.
A missing detail that `feature-dev` can resolve later with better context belongs in the
draft spec's `Open Questions`, not in another interview round.

## Summary checkpoint

Before writing the documents, restate the key decisions in a few sentences — the product
in one line, the users, the first-version scope, the technology direction, and the
verification approach — and ask the user to confirm or correct. Writing starts after
this confirmation.
