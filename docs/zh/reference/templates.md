# 模板对照表

每个 Skill 在 `assets/` 目录中自带模板。模板只在列出的阶段读取，被复制/裁剪到目标项目，且每个占位符都要替换。不适用的章节直接删除——绝不留下空文件或整页 `N/A`。

## coding-start

| 模板 | 生成 | 读取时机 |
|---|---|---|
| `assets/stage.template.md` | 根 `STAGE.md` | 有效进入后、创建或接管 Stage 前；改变追踪模式或状态权威前重读；Macro Gate 前只保存运营状态 |
| `assets/core-docs.template.md` | `README.md`、`docs/PRODUCT.md`、`docs/ARCHITECTURE.md`、`docs/DATABASE.md`、`docs/API.md`、`docs/TESTING.md`、`docs/adr/README.md` + ADR | Gate 之后；仅适用文档 |
| `assets/ui-docs.template.md` | `docs/FRONTEND.md`、`docs/UX.md`、`docs/UI.md`、`docs/DESIGN_SYSTEM.md` | 仅当 `UI: YES`，Gate 之后 |
| `assets/agents.template.md` | `AGENTS.md` | Gate 之后，创建/维护根 AGENTS 时 |
| `assets/roadmap-and-draft-spec.template.md` | `specs/ROADMAP.md`、`specs/Fxxx-feature-slug/spec.md`（×N） | 生成 Feature Map 与 DRAFT Specs 之前 |

## project-onboard

| 模板 | 生成 | 读取时机 |
|---|---|---|
| `assets/stage.template.md` | 根 `STAGE.md` | 路由有效后、创建或接管 Stage 前；改变追踪模式或状态权威前重读 |
| `assets/baseline-and-knowledge-gaps.template.md` | `docs/onboarding/BASELINE.md`、`docs/onboarding/KNOWLEDGE_GAPS.md` | 基线验证与缺口分析期间 |
| `assets/as-is-docs.template.md` | `README.md` + `docs/*`（AS-IS 视角） | 编写规范 AS-IS 文档时 |
| `assets/agents-update.template.md` | 增量 `AGENTS.md` 更新 | 维护作用域 AGENTS 规则时 |
| `assets/feature-inventory-and-spec.template.md` | `specs/ROADMAP.md`（Inventory）+ AS-IS Specs | Feature Inventory 与 Spec 重建期间 |

## feature-dev

| 模板 | 生成 | 读取时机 |
|---|---|---|
| `assets/stage.template.md` | 根 `STAGE.md` | Preflight 期间、创建或接管 Stage 前；改变追踪模式或状态权威前重读 |
| `assets/spec.template.md` | Feature Spec（TO-BE） | 项目无 Spec 格式时 |
| `assets/issue.template.md` | 远程 Issue 或辅助本地工作项清单 | 项目无格式时；本地状态仍属于标识出的 Stage 行 |
| `assets/ux-ui.template.md` | UX/UI 产物 | `UI Impact: YES` 且项目无格式时 |
| `assets/test-design.template.md` | Test Design | 将 `AC-*` 映射为 `TS-*` 时 |
| `assets/implementation-plan.template.md` | Implementation Plan + Tasks | 所有必需门禁通过后 |
| `assets/review-pr-done.template.md` | Self Review、PR-ready 摘要、`DONE` 记录 | 评审与最终交付期间 |

## 共享约定

- 模板**优先使用项目既有格式**；Foundry 模板是兜底，不是覆盖。
- 每个生成的产物都遵循项目[语言策略](../guide/language-policy)。
- 门禁记录携带 `Status`、输入清单、验证时间与 Decision Authority 批准来源和范围。
- 三份 Stage 模板刻意保持一致，确保每个 Skill 可独立安装。Stage 通过锁/canonical writer 或 revision/hash guard 串行写入，每个 Gate 投影单独链接一份权威记录，并且不是语义 Gate 输入。
- 缺失的命令一律写 `Not yet established`——绝不虚构。
