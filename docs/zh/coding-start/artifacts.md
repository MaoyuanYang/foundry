# coding-start —— 生成的产物体系

有效进入并获得明确本地写盘授权后，`coding-start` 会创建或增量接管根 `STAGE.md` 作为运营检查点，让 Discovery 能跨会话恢复。它不包含未确认设计，也不绕过 Gate。通过 `MACRO DESIGN READY` 后，Skill 再生成其余项目文档体系。文件**按需**创建——不产生空文件、不产生整页 `N/A`、不虚构命令（缺失的命令一律写 `Not yet established`）。

## 文档体系树

<DocTree />

- 基础项目必有 `STAGE.md`、`README.md`、`AGENTS.md`、`specs/ROADMAP.md` 与适用的 `docs/*`。
- `FRONTEND.md`、`UX.md`、`UI.md`、`DESIGN_SYSTEM.md` **仅当** `UI: YES` 时创建。
- 每个 Feature 都在 `specs/<feature-id>-<slug>/` 下生成一份 DRAFT `spec.md`。

## 文档职责

| 文档 | 唯一职责 | 排除 |
|---|---|---|
| `README.md` | 快速入口：简介、能力、技术栈、阶段摘要 + Stage 链接、真实 Start/Build/Test、导航 | 实时成员协作、完整产品论证、详细架构、完整 Spec |
| `STAGE.md` | 当前项目阶段、活跃成员/Agent、阻塞、交接、恢复点、权威链接 | 需求、Feature 排序、Gate 证据、Tasks、长期规则、命令日志 |
| `docs/PRODUCT.md` | 项目为何存在：愿景、问题、用户、场景、MVP、范围、原则、成功标准、挑战后的假设 | 实现计划、类/表/API 细节 |
| `docs/ARCHITECTURE.md` | 总体结构与模块协作 | 单 Feature Plan、完整包/类设计 |
| `docs/DATABASE.md` | 数据原则与当前方向（Schema 随 Feature 演进） | 冻结字段、SQL、索引、Feature 私有 Schema |
| `docs/API.md` | 全局接口规范与当前方向 | 未设计的每个端点、Feature 契约 |
| `docs/FRONTEND.md` | 前端工程架构（非视觉设计） | 视觉 token、逐组件实现 |
| `docs/UX.md` | 用户如何完成任务：目标、流程、信息架构、导航、交互原则 | 工程结构、颜色/间距 token |
| `docs/UI.md` | 页面结构与界面行为规则 | Design-token 目录、前端状态管理 |
| `docs/DESIGN_SYSTEM.md` | 全局视觉 token 与可复用组件规范 | Feature 专属页面设计 |
| `docs/TESTING.md` | 项目测试策略与 Definition of Done | 单 Feature 的完整 Test Design |
| `docs/adr/` | 重大架构/技术决策 | 常规实现细节 |
| `AGENTS.md` | 长期 AI 编码协议 | 任务进度、调试日志、临时方案、猜测 |
| `specs/ROADMAP.md` | Feature Map、依赖、排序 | 实现细节 |
| `specs/Fxxx-*/spec.md` | 每个 Feature 的浅层 DRAFT Spec | 深度定稿的需求 |

每个重要论断都内联标注 `CONFIRMED` / `RECOMMENDED` / `UNKNOWN`。文档只承载宏观现状、约束与显式事实状态——Feature 级 Schema、API 与实现结构留给精化阶段。

## AGENTS.md 内容

只记录长期跨任务规则：Architecture Constraints、Module Rules、Build/Test、Coding Conventions、Spec Lifecycle、**完整 Feature 工作流**、UI/UX 长期规则（12 条）、Design System 规则、Design Change Policy（L1/L2/L3）、Documentation Rules、Language Policy、Repeated Pitfalls。绝不存放任务进度、调试日志、一次性方案、临时 Issue 状态或 AI 猜测。

## ROADMAP 与 DRAFT Specs

`specs/ROADMAP.md` 中每个 Feature 记录：Feature ID、Name、Goal、Business Value、Priority、Dependencies、Status、Summary——状态取 `DRAFT / NEXT / READY / IN_PROGRESS / REVIEW / DONE / BLOCKED`。Feature 是**业务价值的垂直切片**，绝非"建数据库"之类的技术层。

每份 DRAFT Spec 记录：Goal、Business Value、User Story、Scope、Out of Scope、Main Flow、Core Business Rules、Main Entities、Major API impact、UI Impact、Dependencies、初步 Acceptance Criteria 与 Open Questions。它刻意保持浅层——不定稿 DTO、字段、类、组件或像素设计。

## NEXT 选择

- 分析依赖、风险与学习价值，推荐能验证端到端方向的最小 Feature。
- 由 `Roadmap Decision Authority` 确认；恰好一个被确认的 Feature 成为 `NEXT`。
- 若无 Feature 能安全成为 `NEXT`，回到访谈。若仅剩不可解的外部阻塞，进入 `BLOCKED_HANDOFF`：零 `NEXT`，记录 blocker、owner、解除条件与恢复阶段。
- 根据 Roadmap 结果同步 `STAGE.md`，记录 `feature-dev` 交接或精确的阻塞恢复点，但不复制 Feature Map。

无论哪种结果，所有 Spec 保持 `DRAFT`，Skill 以 `STOP` 收尾。
