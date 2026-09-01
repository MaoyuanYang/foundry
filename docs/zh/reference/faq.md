# 常见问题

## 通用

**这些 Skill 会自动帮我写代码吗？**
不会。`coding-start` 只产出文档，并在写任何业务代码前停止；`project-onboard` 只产出 AS-IS 基线，并在实现前停止；`evolve-dev` 只产出 Roadmap 条目和 DRAFT Spec，不写代码。只有 `feature-dev` 和 `maintenance-dev` 会写代码，且必须先通过门禁并获得写盘授权。

**重构、升级、技术债清理该怎么建模？**
运行 `maintenance-dev`，一次一个战役：`REFACTOR`（行为保持的结构变更）、`DEBT`（清理已记录的债务行）、`UPGRADE`（依赖/框架版本迁移）、`RETIRE`（弃用/移除某能力）。它在安全网下切片交付（`SAFETY NET READY` → 逐切片 `BEHAVIOR PRESERVED`）。会改变可观察行为的重构、编码缺陷的债务行、升级中的行为性破坏变更，都会路由到 `feature-dev` 作为 Change/Bug 处理。

**MVP 交付完了，怎么规划下一波功能？**
在有基线的仓库上运行 `evolve-dev`：增量访谈、挑战波次、通过 `ROADMAP EVOLUTION READY`——产出新 Roadmap 条目（DRAFT Spec）和经 Roadmap Decision Authority 确认的重排优先级。实现仍走 `feature-dev`，每个认领成员一项。会重定位产品的方向会停下来，交由用户显式决定是否重走宏观设计。

**为什么打开一个新仓库不会触发 `project-onboard`？**
这是有意设计。Onboarding 会写文档，需要明确意图和写盘授权。仅仅打开或浏览一个陌生仓库被视为只读问答，除非你明确要求接管。

**我需要一次回答几十个问题吗？**
不需要。访谈分轮进行——`STANDARD` 每轮 2–5 个相关问题，`DEEP` 每轮只问一个决策问题。低风险项会给出 `RECOMMENDED` 默认值，你可接受或覆盖。

**是什么阻止智能体过度工程？**
多重护栏：宏观设计不得冻结 DTO/字段/组件；NFR 风险驱动；DRAFT Spec 保持浅层；复杂度必须在 Challenge Pass 中用业务证据自证。

**纯后端项目能用 Foundry 吗？**
可以。UI/UX 发现与 `UI READY` 是条件式的。无 UI 服务会记录 `UI Impact: NO` / `UI READY: SKIPPED (N/A)`，并跳过所有前端产物。

## 门禁与生命周期

**Roadmap 状态和门禁状态有什么区别？**
Roadmap 状态（`DRAFT…DONE`）追踪工作进行到哪里；门禁状态（`PASS/NOT_READY/STALE`）记录针对特定输入是否达到了质量门槛。两者互不替代。

**`STALE` 是什么意思？**
此前的 `PASS` 因某个受控输入发生语义变化而失效。失效的门禁必须重新验证才能恢复工作。

**`STAGE.md` 是什么，它是又一个事实来源吗？**
它是根目录中的项目/成员协作快照，记录当前阶段、活跃工作、阻塞、交接与恢复点。Feature 工作项绑定前由 Roadmap 负责初始状态；绑定后 Stage 投影远程 Tracker，未绑定远程时，显式标识的 `STAGE_LOCAL:<Activity ID>` 行可以负责本地 Work Status。远程访问暂时失败绝不会转移已绑定远程的权威。Spec、Gate 记录、`AGENTS.md` 与交付记录仍保留原有职责。见[项目状态面板](../guide/project-stage)。

**可以让多个人或 Agent 同时工作吗？**
可以。多个 `NEXT` 工作项可以同时活跃——每项恰好被一个成员（人类或 Agent、任意机器）认领；对同一项的重复认领在未记录明确协作边界时是 `CONFLICT`。多成员团队通过标准远端流程协调：**成员为认领项提交/绑定一个 Issue → 在专属分支开发 → 提 PR → 负责人评审合并**。绑定远端 Tracker 作为 Work Status 权威：`STAGE.md` 是团队状态看板，每台机器持有从 Tracker 刷新的本地投影（不一致时以 Tracker 为准）。单机场景下 Stage 写入仍通过仓库锁、指定 canonical writer 或 revision/hash guard 串行化。项目可在 `AGENTS.md` 采纳数值型 `WIP Limit`；默认约束只有"每项一认领"。详见[并行协作](../guide/parallel-work)。

**Foundry 强制 TDD 吗？**
不。它采用 **Test Design First**——编码前先设计测试场景——但不机械要求 Red-Green-Refactor。状态机、核心业务规则、纯函数和 Bug 修复推荐用 TDD。

**编码开始后，设计变更怎么处理？**
走设计变更策略：分类为 Requirement/Design/Implementation，定级 L1/L2/L3，**先**更新事实来源再改代码，并把下游门禁标记为 `STALE`。见[设计变更](../guide/design-change)。

## 授权与语言

**智能体能自己 push 到 GitHub 或建 PR 吗？**
不能。写文件、构建、提交、推送、开 PR 是各自独立的副作用，都需要明确授权、可用工具和有效认证。见[授权](../guide/authorization)。

**生成的文档用什么语言？**
默认英文（`documentation_language = en`、`engineering_language = en`）。面向用户的产品文案遵循产品需求。已有仓库保留其既有语言；变更需决策权限明确批准。见[语言策略](../guide/language-policy)。

**Decision Authority 是谁？**
被命名、且有权批准该具体决策的人类——Maintainer、Roadmap 或 Architecture Decision Authority。执行智能体与发起者（除非被授权）绝不自批。

## 兼容性

**Foundry 支持哪些智能体？**
任何支持 Agent Skills 格式（`SKILL.md` + `references/` + `assets/`）的智能体，如 OpenCode 和 Claude Code。见[安装](../install)。

**Foundry 会硬编码 Java 或某个特定技术栈吗？**
不会。工作流与技术栈无关；技术选型按项目发现，并标注 `Confirmed` 或 `Recommended`。
