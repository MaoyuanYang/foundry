# ADR-0004: A GitHub Collaboration Layer over the Document Core

- **Status:** Accepted
- **Date:** 2026-09-06
- **Decision owner:** MaoyuanYang

## Context

Foundry's four skills run a complete document-driven loop, but the suite is invisible to
the collaboration platform most teams live on. Across all twenty skill files, GitHub
vocabulary appears only in the Boundaries clauses that forbid unauthorized remote
actions. Teams coordinating through issues, pull requests, CI, and Projects boards get
no support: the Feature Spec duplicates what an issue tracks, `specs/ROADMAP.md`
duplicates what a board tracks, `project-dev`'s review step is self-review with no
human gate, and verification evidence is a local run nobody outside the session can
see. Meanwhile the document-first core (ADR-0001) must keep working unchanged for
solo, offline, and non-GitHub-hosted projects — the layer cannot become a dependency.

## Decision

Add a GitHub collaboration layer to the four existing skills, guided by one sentence:

> Documents remain the truth; GitHub mirrors it for the team.

1. **GitHub mode is additive and per-project.** `project-start` and `project-onboard`
   ask once, during initialization, whenever a GitHub remote and an authenticated
   `gh` CLI are both present; the answer is recorded in `specs/ROADMAP.md`
   (`## Tracking`: `Collaboration: GitHub — enabled <date>` or `Collaboration: local`)
   and later skills read that record instead of re-asking. A documented project with
   no record and a live GitHub environment gets asked once, and the answer is recorded
   as part of document sync. No environment, or a `local` record, means today's local
   loop, unchanged.
2. **Documents stay the single source of truth** (ADR-0001 untouched). Issues, the
   Projects board, and milestones are linked mirrors: a spec's `## Tracking` records
   its issue / PR / milestone URLs, PR bodies carry the spec summary and `Closes #N`,
   and the board's Status field mirrors ROADMAP statuses, which gain a GitHub-only
   `In Review`. When a mirror disagrees with the documents, the mirror is fixed from
   the documents.
3. **Authorization has two tiers.** The Roadmap's `enabled` record is standing
   authorization for routine operations — pushing a feature branch, opening and
   updating PRs and issues, milestones, board sync — and for merging a PR once CI is
   green and required reviews are approved; a red PR is never merged. Force
   operations, branch deletion, releases, and deployment stay per-action explicit,
   exactly like the existing Boundaries.
4. **Delivery uses the platform's quality gates instead of bypassing them.** Commits
   are vertical slices; the PR opens after local full verification; the PR's CI checks
   count as part of verification; review comments flow back as spec and plan updates
   plus new commits; document sync and the ROADMAP status flip travel inside the PR,
   so merging makes them true and the linked issue closes itself.
5. **GitHub surfaces are also evidence.** `project-onboard`'s evidence ladder gains
   `issue & PR history` between migrations/config and docs; `project-verify` accepts
   default-branch CI runs and merged-PR records as executable evidence and
   cross-checks `Done` claims against them — while scope still comes only from the
   documents. Issues are evidence, never scope.
6. **Shared mechanics ship once, identically.** The detection order, authorization
   model, linkage conventions, and delivery flow live in `references/github-flow.md`,
   byte-identical in all four skills — the same pattern as
   `feature-spec.template.md` — so skills stay independently installable.

## Alternatives Considered

- **GitHub as the source of truth (Issues + Projects authoritative, documents
  generated from them).** Rejected: breaks local-first and host-agnostic use,
  conflicts with ADR-0001, and makes the agent's context depend on API availability
  and network access.
- **A fifth skill for delivery (for example `project-deliver`).** Rejected: the PR
  flow — branch, checks, review, merge, doc sync — is part of the same core loop
  `project-dev` runs; splitting it fragments spec → code → review → merge.
- **Passive detection without asking.** Rejected: users would never learn the
  capability exists, and each session would re-negotiate authorization. Asking once
  at initialization and recording the decision in the Roadmap makes the choice a
  durable project fact that later skills simply read.
- **Keep the suite platform-silent (status quo).** Rejected: solo agents would remain
  the only supported mode; team projects would keep two unsynchronized tracking
  systems — the Roadmap and the board — drifting apart.

## Consequences

- Solo, offline, and non-GitHub behavior is unchanged: no record or no environment
  means the local loop, byte for byte.
- Skills gain a conditional `gh` dependency, used only in GitHub mode; every remote
  write still requires the Roadmap's `enabled` record or explicit authorization, so
  the existing Boundaries keep their meaning.
- `scripts/verify-skills.mjs` enforces the byte-identity of
  `references/github-flow.md` alongside `feature-spec.template.md`.
- The Roadmap template gains an optional `## Tracking` section and the `In Review`
  status; the Feature Spec template gains a conditional `## Tracking` section.
- Docs, README, and evals gain the GitHub-mode story in English and zh-CN.
