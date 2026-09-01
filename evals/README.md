# Foundry Behavioral Eval Suite

This directory holds the scenario-based behavioral evaluation for the five Skills (`coding-start`, `project-onboard`, `feature-dev`, `evolve-dev`, `maintenance-dev`). It fills the gap left by `scripts/verify-skills.mjs`, which checks static contract consistency only: these scenarios test **behavior** — what an agent actually does when a Skill is loaded and driven to a decision point.

## Method

1. **Pre-registration.** Every scenario's expected behaviors are written into `scenarios.md`, with citations to the contract text, **before** any run. Expectations are never edited after a run; deviations are recorded as findings instead.
2. **Live-fire.** Each scenario runs against a throwaway fixture directory (never a real project). The Skill under test is invoked with a scripted opening request; scripted user / Decision Authority responses drive the interaction to the scenario's decision point.
3. **Grading.** Per scenario: `PASS` (all expectations), `PARTIAL` (missed a non-MUST expectation), `FAIL` (violated any MUST). Verdicts cite observed evidence.

## Known limitation

The executor and the grader are the same agent in one session. This suite tests *whether the Skill instructions drive correct behavior when loaded*, not cross-model robustness. Cross-contamination between consecutive scenarios is mitigated by isolated fixtures and explicit re-entry framing, but a multi-session, multi-model replication remains the stronger form of this test.

## Files

- `scenarios.md` — the scenario matrix: fixtures, prompts, scripted responses, pre-registered expectations (with contract citations).
- Run reports live outside the repository (workspace), by design: a run is a dated measurement, the matrix is the durable asset.
