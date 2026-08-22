# Authorization & Decision Authority

Foundry separates **deciding** from **acting**. High-impact decisions require a named human authority; every side effect (writing files, building, committing, pushing, opening PRs) requires its own explicit authorization. An agent never self-approves.

## Decision Authority

A `Decision Authority` is a **named human** empowered to approve the specific decision at hand. The executing agent, automation, and an implementation-only assignee **must not** approve their own requirement changes, risk waivers, alternative verification, L2/L3 impacts, or delivery standards.

| Role | Approves |
|---|---|
| `Maintainer Decision Authority` | Durable project rules (`AGENTS.md` adoption), Language Policy |
| `Roadmap Decision Authority` | Feature selection (`NEXT`), work ordering |
| `Architecture Decision Authority` | L3 architectural decisions, Design System core changes |

Every approval records **approver, source, time, and scope**. Silence is never treated as confirmation. The requester of a task does not automatically hold the relevant authority.

## Four independent authorization classes

Design confirmation, local writes, Git operations, and remote actions are **separate grants**. Approving one never implies the others.

| Class | Examples | Requires |
|---|---|---|
| **Local write** | Creating/updating docs, Specs, `AGENTS.md` | A listed set of target paths + explicit approval |
| **Build / test side effects** | Commands that emit build, test, coverage, or codegen artifacts | Declared output boundary + explicit approval |
| **Git** | `git commit`, `git push`, branch changes | Explicit per-action authorization |
| **Remote** | Issue create/update/close, PR/MR, merge, release | Explicit authorization + available tool + valid auth + known target |

::: tip Key rules
- **Design confirmation is not write authorization.** `MACRO DESIGN READY` alone does not permit writing files.
- **"Implement the feature" is not commit/push/PR authorization.** Delivery actions are authorized individually.
- If a required side effect lacks authorization or its tool/authentication is unavailable, the skill records `READY FOR PR` / `READY FOR DELIVERY` (or `STOP`) — it never falsely reports the action as done.
:::

## Read-only first

`project-onboard` and `feature-dev` both inspect before they write:

- Without write authorization, they perform only explicitly requested, provably read-only investigation and then `STOP`.
- Commands that may generate artifacts are treated as write side effects and need approval before running.
- Existing user changes in the working tree are never overwritten, reverted, or misread as baseline failures.

## Waivers

A `High` review finding may be waived only when the project Definition of Done permits it **and** a named Decision Authority explicitly records the rationale, residual risk, and follow-up. `Critical` findings always block `DONE` and cannot be waived.

## Related STOP conditions

- A Language Policy that is missing, conflicting, or unpersisted.
- A Design Change affecting approved behavior without Decision Authority confirmation.
- A required Git/remote side effect lacking authorization, tooling, or authentication.
- A decision needed for tracker/work item, major dependency, destructive migration, or delivery standard.
