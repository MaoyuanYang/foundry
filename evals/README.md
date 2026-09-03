# Foundry Behavioral Eval Suite

This directory holds the scenario-based behavioral evaluation for the three Skills
(`coding-start`, `project-onboard`, `feature-dev`). It complements
`scripts/verify-skills.mjs` (static consistency) by testing **behavior**: what an agent
actually does when a Skill is loaded and driven to a decision point.

The core question every scenario answers:

> Does Foundry make the agent more reliable at building software — not at performing
> Foundry's own process?

## Method

1. **Pre-registration.** Every scenario's expected behaviors are written into
   `scenarios.md` **before** any run. Expectations are never edited after a run;
   deviations are recorded as findings instead.
2. **Live-fire.** Each scenario runs against a throwaway fixture directory (never a real
   project). The Skill under test is invoked with a scripted opening request; scripted
   user responses drive the interaction to the scenario's decision point.
3. **Grading.** Per scenario: `PASS` (all expectations), `PARTIAL` (missed a non-MUST
   expectation), `FAIL` (violated any MUST). Verdicts cite observed evidence.

## Known limitation

The executor and the grader are the same agent in one session. This suite tests whether
the Skill instructions drive correct behavior when loaded, not cross-model robustness.
Isolated fixtures and explicit re-entry framing mitigate cross-contamination, but a
multi-session, multi-model replication remains the stronger form of this test.

## Files

- `scenarios.md` — the scenario matrix: fixtures, prompts, scripted responses,
  pre-registered expectations.
- Run reports live outside the repository (workspace), by design: a run is a dated
  measurement, the matrix is the durable asset.
