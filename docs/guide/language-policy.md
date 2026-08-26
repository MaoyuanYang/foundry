# Language Policy

Foundry ships with a default language policy that keeps engineering artifacts consistent while letting product content follow product needs.

## The three dimensions

```text
documentation_language = en
engineering_language   = en
product_content_language = <derived from product requirements>
```

| Dimension | Governs | Default |
|---|---|---|
| **Documentation Language** | Formal artifact prose: README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline/Knowledge Gap reports, Test Design, Plans, Reviews, DONE records, Delivery Records | `en` |
| **Engineering Language** | New class/method/variable/package/module names, DB tables/columns, API paths/definitions, config keys (not arbitrary values), env vars, infrastructure names, branch names, commit messages, Issue/PR titles/descriptions, code comments, executable test names/descriptions, developer-facing logs | `en` |
| **Product Content Language** | User-facing copy and localized values | **No default** — derived from product requirements |

Product Content Language is recorded as an actual BCP-47 value, `UNKNOWN - <resolution action>` while a relevant surface is unresolved, or `N/A - no product-content surface` when the confirmed scope has no user-facing content.

## The product-copy exception

A Chinese consumer app still ships Chinese UI strings even though engineering artifacts are English. Surrounding formal prose stays under Documentation Language; test names, assertion code, and engineering text stay under Engineering Language — even when they quote an exact product string.

- Localized resource/config values, clearly labeled exact product copy, and exact-copy assertions **may** use the Product Content Language.
- The exception never leaks into identifiers, APIs, database names, config keys, infrastructure, comments, tests, or logs.

## Overrides require authority

An override of any dimension must be **explicitly requested and approved by a named authority** empowered for project language policy. The requester is not automatically that authority. Every override records request, authority, approval source, scope, and affected artifacts, and is persisted in `AGENTS.md`.

## How each skill applies it

**coding-start** records all three dimensions during Discovery, enforces them at Macro Readiness and Self Review, and persists the policy into the generated `AGENTS.md`.

**project-onboard** detects the existing language of every surface before writing. It then:

- Preserves existing identifiers and established product content. **Never mass-translates** comments, docs, identifiers, or product content.
- In mixed repositories, writes **new** formal artifacts and engineering surfaces in the English defaults.
- Treats a non-English Documentation/Engineering rule in `AGENTS.md` as `CONFLICT` + `STOP` until a named authority resolves it — unless it is an already-valid, adopted scoped override, which is preserved.
- If a required update to an existing non-English document would mix languages or force translation, records `CONFLICT` + `STOP`.
- Persists the resolved policy in the single authoritative `AGENTS.md` location for each scope.

**feature-dev** inherits the policy from the applicable `AGENTS.md` and never chooses a language independently:

- If a dimension is missing, it proposes the `en` default and `STOP`s until a named Maintainer adopts and persists it — no silent fallback.
- Valid scoped overrides in nested `AGENTS.md` files are applied for their scope.
- A missing, conflicting, or unpersisted policy is a STOP condition.

## Conversation language

The conversation with the user may follow the user's language. Conversation language **never** overrides any artifact-language dimension.
