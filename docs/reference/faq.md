# FAQ

## General

**Will the skills write code for me automatically?**
No. `coding-start` produces documentation and stops before any business code. `project-onboard` produces an AS-IS baseline and stops before implementation. Only `feature-dev` writes code, and only after the required gates pass and writes are authorized.

**Why won't `project-onboard` trigger when I open a new repo?**
By design. Onboarding writes documentation and needs explicit intent plus write authorization. Opening or browsing an unfamiliar repository is read-only Q&A unless you explicitly ask to take it over.

**Do I have to answer dozens of questions at once?**
No. Interviews run in focused rounds — 2–5 related questions in `STANDARD`, a single decision question in `DEEP`. Low-risk items get a `RECOMMENDED` default you can accept or override.

**What stops the agent from over-engineering?**
Multiple guardrails: macro design must not freeze DTOs/fields/components; NFRs are risk-driven; DRAFT specs stay shallow; and complexity must be justified by business evidence during the Challenge Pass.

**Can I use Foundry with a backend-only project?**
Yes. UI/UX discovery and `UI READY` are conditional. For a no-UI service, Foundry records `UI Impact: NO` / `UI READY: SKIPPED (N/A)` and skips all frontend artifacts.

## Gates & lifecycle

**What is the difference between Roadmap status and Gate status?**
Roadmap status (`DRAFT…DONE`) tracks where the work is. Gate status (`PASS/NOT_READY/STALE`) records whether a quality bar was met for specific inputs. One never substitutes for the other.

**What does `STALE` mean?**
A prior `PASS` was invalidated because a controlling input changed semantically. Stale gates must be re-validated before work resumes.

**What is `STAGE.md`, and is it another source of truth?**
It is the root project/member coordination snapshot: current phase, active work, blockers, handoffs, and resume points. Before a Feature work item is bound, the Roadmap owns its initial status. After binding, Stage projects a remote tracker; when no remote is bound, an explicitly identified `STAGE_LOCAL:<Activity ID>` row may own local Work Status. Temporary access failure never transfers a bound remote's authority. Specs, Gate records, `AGENTS.md`, and delivery records keep their existing responsibilities. See [Project Stage](../guide/project-stage).

**Can multiple people or Agents work at once?**
Yes, but Stage writes are serialized rather than lock-free. Each member has a stable activity row and changes only its own work plus directly affected blockers/handoffs through the repository lock, a designated canonical writer, or a revision/hash guard. Divergent worktree copies are not live Stage state until reconciled. Two members may share a work item only with explicit collaboration boundaries; otherwise Foundry records `CONFLICT` instead of silently overwriting ownership.

**Does Foundry force TDD?**
No. It uses **Test Design First** — scenarios are designed before coding — but does not mechanically require Red-Green-Refactor. TDD is recommended for state machines, core business rules, pure functions, and bug fixes.

**How do design changes work after coding starts?**
Through the Design Change Policy: classify as Requirement/Design/Implementation, assign L1/L2/L3, update the source of truth **before** code, and mark downstream gates `STALE`. See [Design Change](../guide/design-change).

## Authorization & language

**Can the agent push to GitHub or create PRs on its own?**
No. Writing files, running builds, committing, pushing, and opening PRs are separate side effects, each requiring explicit authorization, available tooling, and valid authentication. See [Authorization](../guide/authorization).

**What language are generated docs written in?**
English by default (`documentation_language = en`, `engineering_language = en`). User-facing product copy follows product requirements. Existing repositories keep their established language; changing it requires explicit decision-authority approval. See [Language Policy](../guide/language-policy).

**Who is the Decision Authority?**
A named human empowered for the specific decision — Maintainer, Roadmap, or Architecture Decision Authority. The executing agent and the requester (unless empowered) never self-approve.

## Compatibility

**Which agents does Foundry work with?**
Any agent that supports the Agent Skills format (`SKILL.md` + `references/` + `assets/`), such as OpenCode and Claude Code. See [Installation](../install).

**Does Foundry hardcode Java or a specific stack?**
No. The workflow is stack-agnostic; technology choices are discovered per project and marked `Confirmed` or `Recommended`.
