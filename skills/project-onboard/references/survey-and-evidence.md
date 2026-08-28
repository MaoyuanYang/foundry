# Repository Survey and Evidence Rules

## Purpose

Build a minimal but sufficient repository map and fact ledger. A survey does not read every file. It finds reviewable evidence for important claims and exposes conflicts among evidence sources.

## Survey Order

### 1. Safety and Scope

- Identify repository root, Git branch/ref/commit, dirty state, submodules/worktrees, and monorepo boundaries.
- Find applicable `AGENTS.md`, contribution, security, and runtime instructions from root to target.
- Separate pre-existing user changes, generated files, vendor code, and project source. Never overwrite existing changes.
- Identify entry points that may connect to production, mutate data, send messages, incur cost, or read secrets.
- Record the authorization boundary for local documents and generated build/test artifacts; do not infer Git or remote authorization from it.

### 2. Topology and Toolchain

Search selectively for existing material:

- README, LICENSE, AGENTS, CONTRIBUTING, docs, and ADRs.
- `pom.xml`, Gradle files, `package.json`, lockfiles, and manifests for Python, Rust, Go, .NET, Ruby, PHP, or other ecosystems.
- Root `STAGE.md`, active member/activity claims, Issue/PR templates, tracker links, Git remotes, branch policy, and existing work-status authority. Verify every projected Stage status against its linked source and expose stale or duplicate ownership as `CONFLICT`.
- Workspace/monorepo configuration, Makefiles, task runners, and scripts.
- Dockerfiles, compose files, devcontainers, deployment, and infrastructure as code.
- CI/CD workflows, release configuration, and artifact definitions.
- Application configuration, `.env.example`, and configuration schemas; never read or expose real secrets.
- Migrations/schemas/seeds, tests/fixtures, API schemas, and generated clients.

First produce a logical map of applications, libraries, shared packages, deployment units, stores, external systems, frontends, and test suites. A directory name is not proof of responsibility; verify with entry points, dependencies, and call paths.

### 3. Language Preflight

Inspect every surface in this matrix, not only representative files:

| Category | Controlled Surfaces | Evidence to Inspect |
|---|---|---|
| Documentation Language | Formal artifact prose in README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records. | Existing formal artifacts, templates, contribution rules, and history. |
| Engineering Language | New class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages. | Code, schema, API/config/infra definitions, tests, logs, Git history, tracker templates, and applicable AGENTS rules. |
| Product Content Language | User-facing copy and localized values. Exact quoted copy is allowed in formal artifacts only when labeled as product content; exact-copy assertions MAY use the Product Content Language. | UI, CLI text, emails/messages, localization resources, tests, and runtime behavior. |
| Governing Rules | Every applicable `AGENTS.md`. | Exact rule, scope, precedence, authority, and adoption evidence. |

The canonical contract lives in the Language Policy section of this Skill's `SKILL.md`. For the survey, record detected BCP-47 values, consistency, scope, evidence, the named authority, and adoption state for every row above. Every new ID, slug, or technical name uses English and fits repository shape unless an explicit, authority-approved scoped Engineering Language override applies. Complete onboarding requires explicit Language Policy adoption by the named `Maintainer Decision Authority`; an applicable Product Content `UNKNOWN` remains incomplete, while evidenced `N/A - no product-content surface` is resolved. After named-authority resolution, synchronize the authoritative `AGENTS.md` policy location, the Baseline, and each AS-IS Spec.

### 4. Representative Execution Paths

Cross-trace a small set of high-value paths:

- One application startup or worker/job entry.
- One core request, API, command, or event flow.
- One read path and one write path.
- One auth/permission path where applicable.
- One path protected by existing tests and one clearly unprotected path.
- With UI, one primary user flow from route/page to API/data.

For each path, record entry, boundaries, critical state transitions, persistence, external effects, error handling, and test evidence.

## Evidence Priority

Default order:

```text
Runtime
> Tests
> Code
> DB/Migrations
> Config
> CI/CD
> Docs
> Comments
> Inference
```

This order controls investigation sequence and the strength of counter-evidence needed in a conflict. It is not an automatic adjudicator:

- Runtime proves only behavior observed for a particular build, configuration, data set, and environment.
- Tests may be stale, skipped, flaky, or coupled to implementation details.
- Code may be unreachable, feature-flagged, dead, or undeployed.
- Migrations prove historical structure changes, not necessarily current production data state.
- Config has defaults, environment overrides, and secret-injection differences.
- CI/CD may differ from local execution or the currently deployed version.
- Docs/comments may describe a vision, old version, or local convention.
- Inference creates only a hypothesis to verify.

## Controlled Labels

| Label | Use When |
|---|---|
| `OBSERVED` | Seen in reproducible runtime, command output, UI behavior, or a directly visible artifact during this run; record time and environment. |
| `DOCUMENTED` | Asserted only by existing README/docs/ADR/comment and not yet cross-checked against reality. |
| `CONFIRMED` | Confirmed by a user/maintainer or strongly cross-checked by multiple independent, consistent, high-quality sources. |
| `INFERRED` | A reasonable hypothesis derived from indirect evidence but not confirmed. |
| `NEEDS_CONFIRMATION` | A candidate answer exists, but it affects understanding, risk, or next action and requires confirmation. |
| `CONFLICT` | Two or more relevant sources make incompatible claims about the same fact. |
| `UNKNOWN` | The information is known to matter, but current evidence cannot establish it. |
| `MISSING` | An expected artifact, capability, or protection is demonstrably absent. |

These labels describe AS-IS evidence, not quality, priority, or future policy. `CONFIRMED` means a current fact is verified. A mandatory `AGENTS.md` rule still requires explicit `ADOPTED` status from a named `Maintainer Decision Authority`. Confirmed legacy behavior is not automatically a long-lived standard.

## Fact Ledger

Keep this structure during the survey, then merge it into canonical docs, baseline, or Knowledge Gaps. Do not create a permanent parallel fact store.

| ID | Claim | Label | Evidence | Scope/Environment | Conflicting Evidence | Impact | Next Verification |
|---|---|---|---|---|---|---|---|
| E-001 | `[current fact or hypothesis]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` | `[file:line / command / route]` | `[commit/env]` | `[parallel evidence]` | `[why it matters]` | `[smallest validation action]` |

Evidence must be locatable. Prefer file paths with a line or symbol, commands with working directory and key output, and Runtime/UI records with version, configuration, role, input, and result. "Visible in the code" is not a locator.

## Conflict Handling

For every conflict:

1. State the shared question neutrally.
2. Record each source's original claim, version, environment, and location side by side.
3. Check whether the claims concern different scopes, versions, feature flags, or roles.
4. Design the lowest-cost validation: runtime observation, targeted test, deployment-ref check, migration inspection, or maintainer question.
5. Record the resolution and rationale only with sufficient support; otherwise retain `CONFLICT`.
6. Never remove an unresolved conflict from documentation when it still affects later work.

Common comparison surfaces:

- README version/commands vs. build manifest and CI versions.
- API docs vs. route/controller/schema and runtime response.
- Data docs vs. migrations/schema and actual query constraints.
- Test descriptions vs. current implementation and runtime behavior.
- UX/UI docs vs. routes, pages, and interaction.
- Design tokens/docs vs. scattered styles and actual components.
- Documentation/engineering language rules vs. existing artifacts and applicable `AGENTS.md`.

## Question Threshold

Ask the user only when all are true:

- Repository, runtime, tests, history, and docs cannot answer reliably.
- The answer changes AS-IS understanding, risk, documentation fact, Feature boundary, Language Policy, or `Recommended Next`.
- No low-risk, low-cost local validation can replace the question.
- The question is specific and includes existing evidence, candidate explanations, and the impact of no answer.

Do not ask for a searchable stack, script name, route, or schema. Product intent, production differences, historical rationale, governing language rules, and current business priority may require confirmation, but present repository evidence first.
