# 常见问题

## 这些 Skill 会自动帮我写代码吗？

不会。`coding-start` 只产出文档，并在写任何业务代码前停止；`project-onboard` 只产出 AS-IS 基线，并在实现前停止。只有 `feature-dev` 会写代码，且必须先通过门禁并获得写盘授权。

## 为什么打开一个新仓库不会触发 `project-onboard`？

这是有意设计。Onboarding 会写文档，需要明确意图和写盘授权。仅仅打开或浏览一个陌生仓库被视为只读问答，除非你明确要求接管。

## 我需要一次回答几十个问题吗？

不需要。访谈分轮进行 —— `STANDARD` 模式每轮 2–5 个相关问题，`DEEP` 模式每轮只问一个决策问题。低风险项会给出 `RECOMMENDED` 默认值，你可接受或覆盖。

## 是什么阻止智能体过度工程？

多重护栏：宏观设计不得冻结 DTO/字段/组件；NFR 风险驱动（"不为显得专业而默认微服务"）；DRAFT Spec 保持浅层；复杂度必须在 Challenge Pass 中用业务证据自证。

## 纯后端项目能用 Foundry 吗？

可以。UI/UX 发现和 `UI READY` 门禁是条件式的。无 UI 服务会记录 `UI Impact: NO` / `UI READY: SKIPPED (N/A)`，并跳过所有前端产物。

## 生成的文档用什么语言？

默认英文（`documentation_language = en`、`engineering_language = en`）。面向用户的产品文案遵循产品需求。已有仓库保留其既有语言；变更需决策权限明确批准。

## Foundry 强制 TDD 吗？

不。它采用 **Test Design First** —— 编码前先设计测试场景 —— 但不机械要求 Red-Green-Refactor。状态机、核心业务规则、纯函数和 Bug 修复推荐用 TDD。

## 编码开始后，设计变更怎么处理？

走设计变更策略：分类为 Requirement/Design/Implementation，定级 L1/L2/L3，**先**更新事实来源再改代码，并把下游门禁标记为 `STALE`。代码绝不能长期领先文档。

## 智能体能自己 push 到 GitHub 或建 PR 吗？

不能。写文件、构建、提交、推送、开 PR 是各自独立的副作用，都需要明确授权、可用工具和有效认证。

## Foundry 支持哪些智能体？

任何支持 Agent Skills 格式（`SKILL.md` + `references/` + `assets/`）的智能体，如 OpenCode 和 Claude Code。见[安装](./install)。
