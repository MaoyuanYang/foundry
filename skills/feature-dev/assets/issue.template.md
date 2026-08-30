# Work Item: <Feature ID> <Name>

> Platform-neutral template. Adapt it to the existing GitHub, GitLab, Jira, or local convention. Follow the applicable `AGENTS.md` Language Policy and product/i18n requirements. If Documentation or Engineering Language is missing, do not use this template: propose the `en` default and `STOP` until a named Maintainer adopts and persists it. Product Content Language MUST come from product requirements and MUST NOT be assumed. MUST NOT duplicate the full Spec. Optional items may be removed, but Gate `N/A` and `STALE` reasons MUST remain.

## Goal

<One concise outcome>

## Links

- Spec:
- Stage activity: `STAGE.md` (Active Work row `<Activity ID>`)
- Branch / worktree: `N/A | <isolated work-item branch recorded in the Stage row>`
- UX/UI: `N/A - <reason>`
- Test Design:
- Implementation Plan:
- Parent/dependencies: `N/A - <reason>`
- PR/MR/delivery: `N/A - <reason>`

## State

- Work Status: `DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED`
- Status field mode: `WRITABLE - this is the bound remote authority | READ_ONLY_PROJECTION - auxiliary local checklist`
- Work Status authority: `remote tracker | STAGE_LOCAL:<Activity ID>` / binding and writable evidence:
- Authority mode: `REMOTE | LOCAL`; a bound remote cannot fall back to LOCAL because of temporary authorization, tool, authentication, availability, or write failure:
- Blocked From: `N/A | <prior status>`
- Gates:
  - `SPEC READY`: `PASS | NOT_READY | STALE` / input manifest link:
  - `UI READY` Gate Status: `PASS | NOT_READY | STALE` / input manifest link; or no-UI Skip Decision: `SKIPPED (N/A)` / complete decision link with deciding Spec revision, evidence, validation time, authority, approval source, and scope:
  - `TEST DESIGN READY`: `PASS | NOT_READY | STALE` / input manifest link:
  - `DONE`: `PASS | NOT_READY | STALE` / input manifest link:
- Priority:
- Implementation assignee:
- Collaborating members / responsibility boundaries: `N/A | <members and boundaries>`
- Decision Authority (named human + role):

## Acceptance Checklist

- [ ] `AC-001` <short label; link to Spec>

## Implementation Checklist

- [ ] <Task with observable completion condition>
- [ ] Tests and evidence updated
- [ ] Review completed
- [ ] Affected docs synced

## Dependencies and Blockers

| Item | Type | Owner | Unblock condition | Status |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |

## Delivery

- Project Definition of Done (DoD): `PR opened | approved | merged | explicitly adopted no-PR delivery record | TBD`
- External actions authorized: `NO | <explicit actions>`
- Delivery state: `REVIEW | READY FOR PR | READY FOR DELIVERY | IN PR REVIEW | DELIVERED`
- Delivery record/link: `N/A | <link>`

## Progress Notes

Record only decisions and evidence that belong to this work item. When this template is an auxiliary local checklist, State is a read-only projection from the named authority. Current project/member stage, handoffs, and resume points belong in `STAGE.md`.

| Date | Status | Evidence/decision | Next step |
| --- | --- | --- | --- |
|  |  |  |  |
