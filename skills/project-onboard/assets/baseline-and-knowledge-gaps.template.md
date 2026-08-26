# Baseline and Knowledge Gaps Templates

This file contains two output templates, for `docs/onboarding/BASELINE.md` and `docs/onboarding/KNOWLEDGE_GAPS.md`. Adopt them separately and remove inapplicable `N/A` sections. Never merge them into another parallel fact document. IDs such as `B-xxx`, `C-xxx`, `KG-xxx`, and `PF-xxx` are local to this artifact; when referenced from `STAGE.md` or another artifact, qualify them with the artifact name (for example, `BASELINE B-001`).

---

# `docs/onboarding/BASELINE.md`

# Project Baseline

> This document records results for the specified ref in the specified environment when onboarding began. It does not represent every environment or imply that failures were repaired.

## Snapshot

| Field | Value |
|---|---|
| Captured At / Timezone | `[YYYY-MM-DD HH:mm TZ]` |
| Repository | `[name/path]` |
| Branch | `[branch / UNAVAILABLE]` |
| Commit/Ref | `[sha/tag/ref / UNAVAILABLE]` |
| Worktree State | `[clean/dirty; list the scope of pre-existing changes]` |
| OS / Architecture | `[value]` |
| Runtime(s) | `[language/runtime versions]` |
| Build/Package Tools | `[tool versions]` |
| Configuration | `[local/test profile; no secret values]` |
| Required Services | `[DB/cache/MQ/browser/external; availability]` |

## Language Preflight

Defaults are `documentation_language = en` and `engineering_language = en`. Conversation or prompt language does not override them. Replace a default only within the scope of an explicit override approved and `ADOPTED` by the named `Maintainer Decision Authority`.

### Surface Detection Matrix

| Category | Controlled Surfaces | Detected Value / State / Consistency | Evidence |
|---|---|---|---|
| Documentation Language | Formal artifact prose in README, STAGE, AGENTS, project docs, Roadmaps, ADRs, Specs, Baseline and Knowledge Gap reports, Test Design documents, Implementation Plans, Review documents, Done Checklists, and Delivery Records. | `[actual value(s); consistent/mixed/unknown]` | `[paths/history]` |
| Engineering Language | New class, method, variable, package, and module names; database tables and columns; API paths and definitions; configuration keys but not arbitrary values; environment variables; infrastructure names; branch names; commit messages; Issue/PR titles and descriptions; code comments; executable test names and descriptions; and developer-facing log messages. | `[actual value(s); consistent/mixed/unknown]` | `[code/schema/API/config/infra/Git/tracker/test/log paths]` |
| Product Content Language | User-facing copy and localized values. Exact quoted copy is allowed in formal artifacts only when labeled as product content; exact-copy assertions MAY use the Product Content Language. | `[actual BCP-47 value(s)/locales; UNKNOWN - <resolution action>; or N/A - no product-content surface]` | `[UI/CLI/messages/resources/runtime or complete scoped absence survey]` |
| Governing Rules | Every applicable `AGENTS.md`, including broader and nested scopes. | `[actual requirement or none]` | `[path:line]` |

### Resolution and Adoption

| Policy Key | Default | Actual Resolved Value / State | Scope | Named Authority | Adoption / Conflict | Persisted and Synchronized to |
|---|---|---|---|---|---|---|
| `documentation_language` | `en` | `[actual resolved value]` | `[repository/path/artifact]` | `[named Maintainer Decision Authority]` | `[ADOPTED/CONFLICT/NEEDS_CONFIRMATION]` | `[applicable AGENTS paths]` |
| `engineering_language` | `en` | `[actual resolved value]` | `[repository/path/surface]` | `[named Maintainer Decision Authority]` | `[ADOPTED/CONFLICT/NEEDS_CONFIRMATION]` | `[applicable AGENTS paths]` |
| `product_content_language` | `none; derive from product evidence` | `[actual BCP-47 value(s) / UNKNOWN - <resolution action> / N/A - no product-content surface]` | `[surface/locales or confirmed no-content scope]` | `[named Maintainer Decision Authority; product/survey source]` | `[ADOPTED/CONFLICT/NEEDS_CONFIRMATION]` | `[AGENTS/Specs/product docs]` |

Preserve existing identifiers, comments, docs, and product content; never mass-translate them. Preserve established Product Content Language, and label exact quoted copy. A non-English Documentation or Engineering rule is resolved only when it records a valid scoped BCP-47 value, named authority, explicit `ADOPTED` evidence, source, and date with no conflicting policy; preserve that override, otherwise record `CONFLICT` and `STOP` regardless of nested precedence. Before updating a formal artifact, inspect its formal-prose language. Excluding labeled exact Product Content, a mixed document, a difference from the resolved Documentation Language, or an edit that would add a second prose language or require translation is `CONFLICT` and `STOP` in either direction until named-authority resolution and separate authorization for the required translation/update scope. After resolution, record actual Documentation and Engineering BCP-47 values plus the Product Content value/state rather than only `en` or `CONFLICT`, and synchronize the authoritative AGENTS policy location, this Baseline, and AS-IS Spec metadata. Complete onboarding requires explicit Language Policy adoption and persistence; applicable Product Content `UNKNOWN` remains incomplete, while evidenced `N/A - no product-content surface` is resolved.

## Safety and Constraints

- Local documentation authorization `[CONFIRMED]`: `[authorized paths and boundaries]`
- Build/test artifact side-effect authorization `[CONFIRMED]`: `[authorized commands and expected output directories]`
- Result `SKIPPED`: `[command not run because of production risk, cost, secrets, or missing authorization; include reason]`
- Result `UNAVAILABLE`: `[missing tool, service, environment, and condition for resuming]`
- Pre-existing worktree changes `[OBSERVED]`: `[changes present before this run]`
- Git/remote authorization `[CONFIRMED]`: `[none unless independently and explicitly granted]`

## Command Results

Use only `PASS`, `FAIL`, `UNAVAILABLE`, or `SKIPPED`.

| ID | Area | Exact Command | Working Directory | Environment / Preconditions | Result | Duration | Evidence / Key Output | Notes |
|---|---|---|---|---|---|---|---|---|
| B-001 | Backend/General Build | `[command]` | `[path]` | `[versions/services]` | `[RESULT]` | `[time]` | `[exit code/artifact/log]` | `[scope]` |
| B-002 | Existing Tests | `[command]` | `[path]` | `[versions/services]` | `[RESULT]` | `[time]` | `[pass/fail/skip counts]` | `[scope]` |
| B-003 | Smoke | `[command]` | `[path]` | `[data/role/services]` | `[RESULT]` | `[time]` | `[observable result]` | `[side-effect controls]` |
| B-004 | Application Startup | `[command]` | `[path]` | `[profile/ports/services]` | `[RESULT]` | `[time]` | `[health/readiness/exit]` | `[cleanup]` |
| B-005 | Frontend Build | `[command]` | `[path]` | `[node/package manager]` | `[RESULT]` | `[time]` | `[exit/artifact]` | `[scope]` |
| B-006 | Frontend Tests | `[command]` | `[path]` | `[browser/dom/runtime]` | `[RESULT]` | `[time]` | `[pass/fail/skip counts]` | `[scope]` |

## Pre-existing Failures

| Failure ID | Baseline Command | Failing Test/Task/Path | Stable Reproduction | Error Summary | Suspected Scope | Impact on Follow-up |
|---|---|---|---|---|---|---|
| PF-001 | `[B-xxx]` | `[stable name]` | `[yes/no/flaky + command]` | `[sanitized summary]` | `[feature/module/environment]` | `[regression comparison]` |

## Failing, Skipped, or Flaky Tests

| Test/Suite | Baseline Result | Stability | Evidence | Behavior It Purports to Protect | Follow-up |
|---|---|---|---|---|---|
| `[name]` | `[PASS/FAIL/UNAVAILABLE/SKIPPED]` | `[STABLE/FLAKY/UNKNOWN]` | `[path/output]` | `[current behavior]` | `[verify/repair recommendation]` |

## Coverage Summary

| Surface | Baseline Confidence | Evidence | Known Gap |
|---|---|---|---|
| Build | `[high/medium/low]` | `[B-xxx]` | `[gap]` |
| Core Backend Flow | `[high/medium/low]` | `[tests/smoke]` | `[gap]` |
| Data/Migrations | `[high/medium/low]` | `[command/file]` | `[gap]` |
| Startup/Health | `[high/medium/low]` | `[B-xxx]` | `[gap]` |
| Frontend/UI | `[high/medium/low/N/A]` | `[build/tests/runtime]` | `[gap]` |

## Reproduction Notes

1. `[prerequisites without secrets]`
2. `[exact setup/config profile]`
3. `[exact commands in order]`
4. `[expected current results, including failures]`

## Baseline Interpretation

- `[OBSERVED]` Current capabilities that pass reproducibly: `...`
- `[OBSERVED]` Current capabilities that fail reproducibly: `...`
- `[CONFLICT]` Environment or evidence difference: `...`
- `[UNKNOWN]` What this baseline cannot establish: `...`

---

# `docs/onboarding/KNOWLEDGE_GAPS.md`

# Knowledge Gaps

> Record only conflicts, unknowns, missing items, necessary clarification, Language Policy blockers, and Technical Debt recommendations that are not canonical facts. After resolution, synchronize the fact to the responsible README, AGENTS, doc, or Spec and update this record.

## Review Context

| Field | Value |
|---|---|
| Reviewed At | `[date/time]` |
| Commit/Ref | `[ref]` |
| Baseline | `docs/onboarding/BASELINE.md` |
| Areas Reviewed | `[runtime/tests/code/data/config/CI/docs/UI/language]` |

## Evidence Labels

`OBSERVED | DOCUMENTED | CONFIRMED | INFERRED | NEEDS_CONFIRMATION | CONFLICT | UNKNOWN | MISSING`

## Open Knowledge Items

| ID | Area | Statement or Question | Label | Evidence | Conflicting Evidence / Alternatives | Impact | Smallest Resolution Action | Owner/Answer |
|---|---|---|---|---|---|---|---|---|
| KG-001 | `[area]` | `[specific gap]` | `[OBSERVED/DOCUMENTED/CONFIRMED/INFERRED/NEEDS_CONFIRMATION/CONFLICT/UNKNOWN/MISSING]` | `[file:line/command/runtime]` | `[parallel evidence]` | `[why it matters]` | `[search/run/ask]` | `[unknown/name + date]` |

## Docs-vs-Reality Conflicts

| Conflict ID | Question | Runtime | Tests | Code/Data/Config | Docs/Comments | Current Resolution | Impact |
|---|---|---|---|---|---|---|---|
| C-001 | `[same fact under dispute]` | `[claim/env]` | `[claim]` | `[claim]` | `[claim]` | `[CONFLICT or evidence-based resolution]` | `[effect]` |

Never delete adverse evidence. When resolved, record resolution, basis, date, and the synchronized canonical document.

## Language Conflicts

| Conflict ID | Scope/Document | Existing Language/Rule | Required Update | Why It Would Mix or Require Translation | Named Authority | Status |
|---|---|---|---|---|---|---|
| LC-001 | `[path/scope]` | `[language or AGENTS rule]` | `[needed change]` | `[conflict]` | `[name/role]` | `[CONFLICT/CONFIRMED resolution]` |

Any unresolved row in this section requires `STOP` and prevents complete onboarding.

## Necessary Clarifications

Retain only questions the repository cannot answer and that affect later work.

| Question ID | Question | Why Code Cannot Answer | Existing Evidence | Decision Affected | Status/Answer |
|---|---|---|---|---|---|
| Q-001 | `[one concrete question]` | `[reason]` | `[known facts]` | `[AS-IS/NEXT/risk/language]` | `[NEEDS_CONFIRMATION or confirmed answer + source/date]` |

## Missing Artifacts or Protections

| ID | Missing Item | Evidence of Absence | Impact | Recommendation |
|---|---|---|---|---|
| M-001 | `[test/doc/migration/runbook/state]` | `[search/survey scope]` | `[impact]` | `[future Issue/Feature; no batch fix]` |

## Suspected Technical Debt

| Debt ID | Category | Observation | Label | Evidence | Impact/Severity | Scope | Recommendation |
|---|---|---|---|---|---|---|---|
| TD-001 | `[architecture/data/testing/security/operations/frontend/UX/UI/accessibility/docs]` | `[neutral description]` | `[OBSERVED/INFERRED/CONFLICT]` | `[location]` | `[specific impact]` | `[local/cross-feature/architectural]` | `[future Issue/Feature/ADR investigation]` |

During onboarding, identify, classify, and recommend Technical Debt only. Do not claim it was fixed.

## Resolved During Onboarding

| ID | Resolution | Evidence/Confirmation | Canonical Destination | Date |
|---|---|---|---|---|
| `[KG/C/Q/LC-id]` | `[resolved fact]` | `[source]` | `[README/AGENTS/docs/spec path]` | `[date]` |
