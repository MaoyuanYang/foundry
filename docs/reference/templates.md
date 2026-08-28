# Template Map

Each skill ships templates in its `assets/` folder. A template is read only at its listed stage, copied/trimmed to the target project, and every placeholder replaced. Inapplicable sections are removed — never left as empty files or full-page `N/A`.

## coding-start

| Template | Generates | Read when |
|---|---|---|
| `assets/stage.template.md` | Root `STAGE.md` | After valid entry and before creating or adopting Stage; reread before changing tracking mode or status authority; before the Macro Gate it contains operational state only |
| `assets/core-docs.template.md` | `README.md`, `docs/PRODUCT.md`, `docs/ARCHITECTURE.md`, `docs/DATABASE.md`, `docs/API.md`, `docs/TESTING.md`, `docs/adr/README.md` + ADR | After the Gate; only applicable docs |
| `assets/ui-docs.template.md` | `docs/FRONTEND.md`, `docs/UX.md`, `docs/UI.md`, `docs/DESIGN_SYSTEM.md` | Only when `UI: YES`, after the Gate |
| `assets/agents.template.md` | `AGENTS.md` | After the Gate, when creating/maintaining root AGENTS |
| `assets/roadmap-and-draft-spec.template.md` | `specs/ROADMAP.md`, `specs/<feature-id>-<slug>/spec.md` (×N) | Before generating the Feature Map and DRAFT Specs |

## project-onboard

| Template | Generates | Read when |
|---|---|---|
| `assets/stage.template.md` | Root `STAGE.md` | After valid routing and before creating or adopting Stage; reread before changing tracking mode or status authority |
| `assets/baseline-and-knowledge-gaps.template.md` | `docs/onboarding/BASELINE.md`, `docs/onboarding/KNOWLEDGE_GAPS.md` | During baseline verification and gap analysis |
| `assets/as-is-docs.template.md` | `README.md` + `docs/*` (AS-IS perspective) | When writing canonical AS-IS documentation |
| `assets/agents-update.template.md` | Incremental `AGENTS.md` updates | When maintaining scoped AGENTS rules |
| `assets/feature-inventory-and-spec.template.md` | `specs/ROADMAP.md` (Inventory) + AS-IS Specs | During Feature Inventory and Spec reconstruction |

## feature-dev

| Template | Generates | Read when |
|---|---|---|
| `assets/stage.template.md` | Root `STAGE.md` | During Preflight before creating or adopting Stage; reread before changing tracking mode or status authority |
| `assets/spec.template.md` | The Feature Spec (TO-BE) | When no project Spec format exists |
| `assets/issue.template.md` | The remote Issue or auxiliary local work-item checklist | When no project format exists; local status still belongs to the identified Stage row |
| `assets/ux-ui.template.md` | The UX/UI artifact | When `UI Impact: YES` and no project format exists |
| `assets/test-design.template.md` | The Test Design | When mapping `AC-*` to `TS-*` |
| `assets/implementation-plan.template.md` | The Implementation Plan + Tasks | After all required gates pass |
| `assets/review-pr-done.template.md` | Self Review, PR-ready summary, `DONE` record | During Review and final delivery |

## Shared conventions

- Templates prefer the **project's existing format**; Foundry templates are fallbacks, not overrides.
- Every generated artifact follows the project [Language Policy](../guide/language-policy).
- Gate records carry `Status`, an input manifest, validation time, and Decision Authority approval source and scope.
- The three Stage templates are intentionally identical so every Skill can be installed independently. Stage serializes writes through a lock/canonical writer or revision/hash guard, links one authoritative record per Gate projection, and is not a semantic Gate input.
- An unavailable command is written exactly as `Not yet established` — never invented.
