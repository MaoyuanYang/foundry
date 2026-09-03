# Interview Guide

The interview turns a one-line request into an agreed spec. Everything the repository and
the request already answer is already answered; the interview covers the rest — nothing
more.

## Find the gaps first

After reading the project documents, the relevant code, and the request:

1. Open (or create) the Feature Spec and fill in everything already determinable.
2. List what remains materially unclear.

Material means: the answer would significantly change **external behavior**, the **core
implementation approach**, or **how the feature is tested**. Examples: which users may
perform an action, what happens on the error path, whether a limit is a hard rule or a
default, whether backwards compatibility must survive, what "fast enough" means.

Not material: internal structure, naming, library choice for an isolated concern, test
file layout. Decide those yourself with sound judgment and note the decision in the
spec.

## Ask well

- A few related questions per round; let answers retire later questions.
- Concrete beats abstract: "Should expired sessions be rejected with 401 or refreshed
  silently?" — not "How should errors be handled?"
- Offer your best guess as a default: "I'd return 401 and keep refresh opt-in — sound?"
- Never invent answers to behavior-defining questions; a wrong assumption in the spec
  becomes a wrong feature in the code.

## Stop condition

The spec is interview-complete when its remaining unknowns are all low-risk — the kind
you can resolve with engineering judgment during implementation. Resolve each Open
Question by asking, delete it once answered, and start implementing.
