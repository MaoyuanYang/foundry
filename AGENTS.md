# Repository Agent Rules

## Scope

This file governs the entire Foundry repository.

## Language Policy

```text
documentation_language = en
engineering_language = en
product_content_language = en, zh-CN
```

| Policy Key | Effective Value | Scope | Authority / Source | Adopted |
| --- | --- | --- | --- | --- |
| `documentation_language` | `en` | Repository-wide formal engineering artifacts | `MaoyuanYang`, Maintainer Decision Authority, current-session approval | 2026-08-26 |
| `engineering_language` | `en` | Repository-wide engineering surfaces | `MaoyuanYang`, Maintainer Decision Authority, current-session approval | 2026-08-26 |
| `product_content_language` | `en, zh-CN` | Public README and documentation website content | Existing bilingual product documentation and current-session scope | 2026-08-26 |

- Skill instructions, references, assets, technical identifiers, commit messages, and Issue/PR content use English.
- `README.zh-CN.md` and `docs/zh/` are intentional `zh-CN` product-documentation surfaces. Keep their English counterparts synchronized when behavior or public guidance changes.
- Conversation language does not change this policy.

## Repository Structure

- `skills/` contains the three independently installable Agent Skills.
- `docs/` contains the English documentation website; `docs/zh/` contains its Chinese localization.
- Keep duplicated cross-Skill contracts semantically identical unless a Skill-specific difference is explicit.

## Project Status

- Root `STAGE.md` owns the current project phase, active-member coordination, blockers, handoffs, and resume points.
- Before Feature work is bound, `specs/ROADMAP.md` owns its initial status. After binding, a remote tracker owns Work Status and Stage projects it. A temporary authorization, tool, authentication, or availability failure does not move that authority; preserve status and stop. An explicitly identified `STAGE_LOCAL:<Activity ID>` row may own local Work Status only when no remote is bound or after an explicit durable migration unbinds it.
- Serialize Stage writes through one canonical writer or an existing repository lock. Without either, compare the revision and SHA-256 read immediately before writing and abort/reconcile on change. Allocate `A-xxx` IDs under the same guard; divergent worktree copies are not live state until reconciled by the canonical writer.
- Update only the current member's activity and directly affected coordination rows after rereading Stage and its linked authority. Preserve unrelated member changes and record conflicts instead of silently overwriting them. Transfer Stage-local authority atomically before the sender leaves Active Work.
- An unresolved Stage binding, freshness, revision, identity, or authority conflict stops the affected transition, handoff, or completion. It does not prevent unrelated read-only investigation.
- Stage is operational and is not a semantic Gate input, Roadmap, Spec, Plan, durable rule store, or command log.

## Verification

- Run `npm run docs:build` after documentation or VitePress changes.
- Validate every changed Skill package with the available Agent Skills validator.
- Check links and copied templates when changing Skill resource contracts.

## Safety and Delivery

- Preserve unrelated worktree changes.
- Do not commit, push, create or update remote work items, or deploy without explicit authorization for that action class.
