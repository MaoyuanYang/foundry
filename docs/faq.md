# FAQ

## Will the skills write code for me automatically?

No. `coding-start` produces documentation and stops before any business code. `project-onboard` produces an AS-IS baseline and stops before implementation. Only `feature-dev` writes code, and only after the required gates pass and writes are authorized.

## Why won't `project-onboard` trigger when I open a new repo?

By design. Onboarding writes documentation and needs explicit intent plus write authorization. Opening or browsing an unfamiliar repository is treated as read-only Q&A unless you explicitly ask to take it over.

## Do I have to answer dozens of questions at once?

No. Interviews run in focused rounds — 2–5 related questions in `STANDARD` mode, a single decision question in `DEEP` mode. Low-risk items get a `RECOMMENDED` default you can accept or override.

## What stops the agent from over-engineering?

Multiple guardrails: macro design must not freeze DTOs/fields/components; NFRs are risk-driven ("do not default to microservices just to look professional"); DRAFT specs stay shallow; and complexity must be justified by business evidence during the Challenge Pass.

## Can I use Foundry with a backend-only project?

Yes. UI/UX discovery and the `UI READY` gate are conditional. For a no-UI service, Foundry records `UI Impact: NO` / `UI READY: SKIPPED (N/A)` and skips all frontend artifacts.

## What language are generated docs written in?

English by default (`documentation_language = en`, `engineering_language = en`). User-facing product copy follows your product requirements. Existing repositories keep their established language; changing it requires explicit decision-authority approval.

## Does Foundry force TDD?

No. It uses **Test Design First** — scenarios are designed before coding — but does not mechanically require Red-Green-Refactor. TDD is recommended for state machines, core business rules, pure functions, and bug fixes.

## How do design changes work after coding starts?

Through the Design Change Policy: classify as Requirement/Design/Implementation, assign L1/L2/L3, update the source of truth **before** code, and mark downstream gates `STALE`. Code must never stay ahead of docs.

## Can the agent push to GitHub or create PRs on its own?

No. Writing files, running builds, committing, pushing, and opening PRs are each separate side effects that require explicit authorization, available tooling, and valid authentication.

## Which agents does Foundry work with?

Any agent that supports the Agent Skills format (`SKILL.md` + `references/` + `assets/`), such as OpenCode and Claude Code. See [Installation](./install).
