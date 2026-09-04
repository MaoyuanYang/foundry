# Interview Guide

The interview turns a one-line request into an agreed spec. Documents define what must
be understood; the interview fills the user-owned gaps. Everything the repository and
the request already answer is already answered — the interview covers the rest, nothing
more.

## Scan the spec first

After reading the project documents, the relevant code, and the request:

1. Open (or create) the Feature Spec and walk it section by section.
2. Fill each section from what is determinable: the request itself, the repository
   (existing behavior, interfaces, data structures, tests), and low-risk engineering
   judgment — internal structure, naming, library choice for an isolated concern, code
   organization. Decide those yourself and note the decision in the spec.
3. List what remains unfilled. Those are the gaps.

## Who owns the answer

- **User-owned** — product goals, users, core scenarios, scope, business rules, behavior
  preferences (which users may perform an action, what happens on the error path,
  whether a limit is a hard rule or a default, whether backwards compatibility must
  survive, what "fast enough" means), success criteria, hard constraints. Ask about
  these; never invent the answer — a wrong assumption in the spec becomes a wrong
  feature in the code.
- **Agent-owned** — internal implementation, module structure, library choice, code
  organization. Yours to decide with sound judgment; record the decision in the spec.
- **Evidence-owned** — existing behavior, interfaces, data structures, test results.
  From the repository, not from the user.

## Ask well

- A few related questions per round; let answers retire later questions.
- Concrete beats abstract: "Should expired sessions be rejected with 401 or refreshed
  silently?" — not "How should errors be handled?"
- Offer your best guess as a default: "I'd return 401 and keep refresh opt-in — sound?"
- Never invent answers to user-owned questions.

Materiality calibrates depth, not entry: within the user-owned gaps, ask first about the
ones that would shape external behavior, the core implementation approach, or how the
feature is tested; offer defaults for minor ones instead of interrogating low-value
detail.

## When the spec is interview-complete

The spec is interview-complete when every important section has a reliable source — the
user, the repository, or a recorded engineering decision — and the remaining unknowns
are all agent-owned and low-risk. Resolve each Open Question by asking, delete it once
answered, and start implementing.
