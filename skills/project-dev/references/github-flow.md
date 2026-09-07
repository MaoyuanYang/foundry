# GitHub Flow

GitHub mode is an additive layer over the document loop: documents stay the single
source of truth, and GitHub — issues, pull requests, CI, milestones, the Projects
board — mirrors them for the team. With no GitHub environment, no `gh` CLI, or a
`local` record, everything runs exactly as it would without this file.

## Deciding the mode

1. Read `specs/ROADMAP.md` (`## Tracking`). A `Collaboration: GitHub — enabled`
   record means GitHub mode is on; `Collaboration: local` means off. A recorded
   decision is final for the session — never re-ask it.
2. No record (an older project)? Check the environment: `git remote get-url origin`
   contains `github.com`, and `gh auth status` succeeds. Both true → ask the user
   once whether to enable GitHub collaboration, and record the answer in the
   Roadmap's `## Tracking` as part of document sync.
3. Environment missing → local mode. Note it once; do not ask again this session.

## Authorization

The Roadmap's `enabled` record is standing authorization for routine operations:

- Push a feature branch; open and update pull requests; create and update issues;
  set milestones; update the Projects board; comment.
- Merge a pull request once CI is green and required reviews are approved (a solo
  repository without review requirements merges when green). Never merge a PR with
  failing checks — a red check is unfinished work, not an obstacle to route around.

Force operations, branch deletion, publishing releases, and deploying always need
explicit per-action authorization, exactly as every skill's Boundaries require.
Without the record and without authorization, zero remote writes happen.

## Linkage conventions

- Each feature spec's `## Tracking` section records its issue, pull request(s), and
  milestone URLs. Delete the section in local mode.
- The Roadmap's `## Tracking` records the collaboration decision, the Projects board
  URL, and the current wave's milestone; its Features table may carry an `Issue`
  column.
- A PR body carries the spec's Goal, the Acceptance Criteria checklist, the test
  evidence (what ran, what passed), and `Closes #<issue>` so the issue closes on
  merge.
- The board's Status field mirrors ROADMAP statuses: Draft, Next, In Progress,
  In Review, Done. `In Review` exists only in GitHub mode — the pull request is
  open, awaiting CI and review.
- When a mirror disagrees with the documents, the documents win: fix the mirror,
  not the document.

## Delivery flow

1. One branch per feature, named from the spec ID (`F003-short-urls`). One commit
   per Implementation Plan step, in the project's existing commit-message style.
2. After local full verification passes, push the branch and open the pull request
   with the linkage conventions above.
3. The PR's CI checks are part of verification: red CI means the work is not
   finished. Watch, fix, push.
4. Review comments are input to the loop: update the spec and plan, implement, push
   new commits — never route around a failing check or an unanswered comment.
5. Document sync and the ROADMAP status flip (`In Progress` → `In Review`, or
   directly to `Done` for a brief change) go into the same PR — merging makes them
   true, the linked issue closes itself, and the board is updated to match after
   merge.
6. Merge under standing authorization when green and approved; otherwise leave the
   PR open and report. Deleting the merged branch still needs per-action
   authorization.

## GitHub as evidence

- Issues and pull requests are contemporary human record: a closed PR's discussion
  often explains why the code is the way it is. In evidence orderings they sit
  between repository artifacts and documents — specific and dated, but not
  executable.
- Default-branch CI runs and merged-PR records are durable evidence: record their
  URLs; a CI run counts as evidence for exactly what it ran.
- Issues are evidence, never scope: what gets checked is still decided by the
  documents.
