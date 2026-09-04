# Repository Agent Rules

## Scope

This file governs the entire Foundry repository.

## Language Policy

- Skill instructions, references, assets, technical identifiers, commit messages, and
  Issue/PR content use English.
- `README.zh-CN.md` and `docs/zh/` are intentional `zh-CN` product-documentation
  surfaces. Keep their English counterparts synchronized when behavior or public
  guidance changes.

## Repository Structure

- `skills/` contains the four independently installable Agent Skills:
  `coding-start`, `project-onboard`, `feature-dev`, `project-verify`.
- `docs/` contains the English documentation website; `docs/zh/` contains its Chinese
  localization.
- `adr/` records architecture decisions for Foundry itself.

## Verification

- Run `npm run docs:build` after documentation or VitePress changes.
- Run `npm run skills:verify` after any Skill change.
- The `feature-spec.template.md` file is intentionally duplicated in `coding-start` and
  `feature-dev`; keep the two copies byte-identical.

## Safety and Delivery

- Preserve unrelated worktree changes.
- Do not commit, push, create or update remote work items, or deploy without explicit
  authorization for that action class.
