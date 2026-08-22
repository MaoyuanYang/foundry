# Baseline and Reconstruction

## Baseline Principle

A baseline is the known state of this ref in this environment when onboarding begins. It is not a repair list or a quality score. Capture it before source changes. Preserve the original baseline after documentation changes; never rewrite a pre-existing failure as a new regression.

## Record Before Running

- Time and timezone, OS, and architecture.
- Repository, branch, and commit/ref; use `UNAVAILABLE` without Git.
- Dirty state and changes that existed before this work.
- Language/runtime, build tool, package manager, and important versions.
- Working directory and relevant environment-variable names, never secret values.
- Dependency/install state and required DB, cache, MQ, browser, container, or external service.
- Local/dev/test configuration and known feature flags.
- Documentation Language across formal artifact prose in README, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records.
- Engineering Language across new class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages.
- Product Content Language across user-facing copy and localized values, plus every applicable AGENTS rule. Record evidence-supported BCP-47 value(s), `UNKNOWN - <resolution action>` for a potentially relevant unresolved surface, or `N/A - no product-content surface` only after the scoped survey confirms absence, together with scope, evidence, named authority, adoption state, and synchronization status.

Prefer commands explicitly supplied by the repository. Inspect script entry points and expected output boundaries first. Any command that may generate build, test, snapshot, codegen, or coverage artifacts requires a declared output boundary and prior local side-effect authorization. For dependency installation, use lockfile or frozen mode to avoid lockfile changes. Explain the risk and ask first if installation runs untrusted lifecycle scripts, needs network access, or changes the environment.

## Command Safety Classes

**Low-risk candidates that may run directly:** only read-only inspection and compiler/linter dry checks that are confirmed not to write files, mutate the environment, or access external systems. Isolated tests and local builds still require local side-effect authorization and a confirmed output boundary. Always obey applicable `AGENTS.md` rules and permissions.

**Ask first or skip:**

- Connections to production, staging, a real cloud account, or a shared database.
- Migration, seed, reset, purge, deploy, publish, or release commands.
- Email, SMS, messages, paid APIs, or external resource creation.
- Secrets, personal credentials, or sensitive data.
- Clearly expensive, long-running, or uncontrolled full E2E/performance suites.
- Scripts with unclear behavior that may damage workspace or external state.

Use `SKIPPED` without permission and `UNAVAILABLE` when prerequisites are missing. For both, record the exact reason and condition for resuming. Tests, smoke checks, and startup must use a disposable, isolated local data store. Ask when isolation cannot be confirmed; never assume shared or long-lived development data is safe to write.

## Suggested Execution Matrix

Adapt this matrix to real repository commands. Never invent a command.

| Order | Area | Verification Goal |
|---|---|---|
| 1 | Build/typecheck/compile | Whether the current ref produces the expected artifact |
| 2 | Existing tests | Protected behavior and the current failure set |
| 3 | Smoke | Whether the smallest critical path executes |
| 4 | Startup/health | Whether the application starts and exits cleanly in a controlled environment |
| 5 | Frontend build | Whether UI bundle/typecheck passes |
| 6 | Frontend tests | Current component, interaction, and E2E state |

For a monorepo, record root and subproject commands separately. Give startup a reasonable timeout, capture health/readiness, and stop processes created by this run. Ask before smoke checks that need user data or external side effects. After every command, compare the complete worktree, including tracked files, relevant untracked files, and expected ignored output directories, and inspect processes/services started by the run. Record authorized expected build or coverage artifacts. On an unexpected snapshot, codegen result, artifact, or unknown persistent-data write, pause; do not revert, delete, or absorb it into documentation changes.

## Result Classification

| Result | Definition |
|---|---|
| `PASS` | The exact command completed with its expected exit/result in the recorded environment. |
| `FAIL` | The executable command returned an error, failed tests/startup, or violated its own assertion. |
| `UNAVAILABLE` | Missing tools, dependencies, services, platform support, credentials, or environment prevented execution. |
| `SKIPPED` | Deliberately not run because of risk, cost, scope, permission, or missing user approval. |

Never use `PASS` for "it should probably run" or `FAIL` for "the tool is not installed." State the scope when a command covers only part of a workspace.

## Pre-existing Failure Record

For each failure, record at least:

- Command, working directory, exit code/result, and duration.
- Stable name of the failing test, task, or artifact.
- Minimal sanitized error summary and log location.
- Reproduction stability and possible flakiness.
- Known environment differences or prerequisites.
- Impact on architecture understanding, Feature state, and later regression comparison.

Do not modify source code to make the onboarding baseline green. A non-invasive repeat is allowed to assess flakiness, but ask first if it is costly or has side effects.

## Architecture Reconstruction Method

Cross-check outside-in and inside-out views.

### Outside-in

1. Find runtime units from process, container, and deployment entry points.
2. Find system boundaries from routes, commands, events, and jobs.
3. Trace representative paths through domain/service, data, and external effects.
4. Verify reachability with runtime evidence, tests, and logging/observability configuration.

### Inside-out

1. Find core entities, constraints, and relationships from schemas and migrations.
2. Find business states and invariants from domain code and state machines.
3. Find module boundaries, cycles, and hidden dependencies from the dependency graph.
4. Return to entry points to confirm that those capabilities are exposed and used.

### AS-IS to Recover

- Runtime/deployment topology, entry points, modules/packages, and responsibilities.
- Synchronous/asynchronous calls, request/data/event flows, and transaction boundaries.
- Database source of truth, schemas/migrations, cache relationships, and MQ semantics.
- Authentication/authorization, configuration, secret boundaries, and external services.
- Current jobs, retry, timeout, idempotency, and consistency behavior.
- Actual logging, metrics, tracing, and health support.
- Test layers, commands, fixtures, protected behavior, and gaps.

Record giant services, circular dependencies, dead code, or unsafe transactions as evidenced Technical Debt. Do not idealize diagrams into boundaries that do not exist.

## Conditional Frontend/UI Reconstruction

Enter this section when evidence includes a frontend manifest, routes/pages/screens, browser/mobile/desktop build, UI tests, or a user-visible interface. An API schema or server-rendered error page alone may not justify full UI documentation; decide from the actual product and label the evidence.

### Engineering Structure

- Framework/version, application entry, bundler/build, routing, and code splitting.
- Layouts/pages/screens, navigation, protected routes, and role differences.
- Local/client state, server state/cache, API client, and auth/session.
- Forms/validation, error boundaries, storage, i18n, and theme.
- Component hierarchy, shared components, UI library, and Storybook.
- Unit, component, interaction, E2E, accessibility, and visual tests.

### UX/UI Reality

- Primary user goals, entry/exit, and happy, alternative, and failure flows.
- Page/Screen Map, information architecture, and navigation.
- Loading, Empty, Error, and Success; where relevant, Disabled, Unauthorized, Forbidden, Offline, and Partial Failure.
- Responsive breakpoints/behavior and keyboard, focus, screen-reader, and contrast support.
- Typography, color, spacing, radius, shadow, icons, tokens, and themes.
- Reusable patterns versus scattered one-off styles/components.

For conclusions from screenshots or direct interaction, record viewport, role, data state, theme, and commit/ref. If the UI cannot run, material reconstructed from routes, components, or tests may be `DOCUMENTED`, `INFERRED`, or labeled with the appropriate code evidence, but never presented as a runtime observation.

Existing UI proves only what exists. If button radii, errors, or page structures conflict, record `CONFLICT` and Technical Debt. Do not turn every historical variant into a Design System convention.

## Reconstruction Sufficiency

Architecture reconstruction need not explain every function. Documentation can begin when:

- Runtime units, core modules, main entry points, and key dependencies are explainable.
- At least one core end-to-end path and its data flow are traceable.
- Known and unknown boundaries for data, external systems, auth, deployment, and tests are labeled.
- With UI, primary pages, routes, flows, states, and design assets are inventoried.
- Significant conflicts and unverifiable items are in Knowledge Gaps.

Unknowns may remain. Unlabeled guesses may not.
