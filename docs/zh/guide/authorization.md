# 授权与决策权限

Foundry 把**决策**与**执行**分开。高影响决策需要命名的人类权限；每一个副作用（写文件、构建、提交、推送、开 PR）都需要各自独立的明确授权。智能体绝不自批。

## Decision Authority（决策权限）

`Decision Authority` 是**被命名、且有权批准当前决策的人类**。执行智能体、自动化流程、以及仅负责实现的 assignee，都**不得**自批需求变更、风险豁免、替代验证、L2/L3 影响或交付标准。

| 角色 | 批准范围 |
|---|---|
| `Maintainer Decision Authority` | 项目长期规则（`AGENTS.md` 采纳）、语言策略 |
| `Roadmap Decision Authority` | Feature 选择（`NEXT`）、工作排序 |
| `Architecture Decision Authority` | L3 架构决策、Design System 核心变更 |

每次批准都记录**批准人、来源、时间、范围**。沉默绝不等于确认。任务发起者不自动拥有相应权限。

## 四类独立授权

设计确认、本地写盘、Git 操作、远程动作是**彼此独立**的授权。批准其一绝不意味着批准其余。

| 类别 | 示例 | 需要 |
|---|---|---|
| **本地写盘** | 创建/更新文档、Spec、`AGENTS.md` | 列出目标路径清单 + 明确批准 |
| **构建/测试副作用** | 会产出 build、测试、覆盖率或 codegen 产物的命令 | 声明输出边界 + 明确批准 |
| **Git** | `git commit`、`git push`、分支变更 | 逐动作明确授权 |
| **远程** | Issue 创建/更新/关闭、PR/MR、merge、release | 明确授权 + 工具可用 + 认证有效 + 目标明确 |

::: tip 关键规则
- **设计确认不等于写盘授权。**仅有 `MACRO DESIGN READY` 不允许写文件。
- **"实现这个 Feature"不等于 commit/push/PR 授权。**交付动作逐个授权。
- 若某个必需副作用缺授权、缺工具或认证失效，Skill 会记录 `READY FOR PR` / `READY FOR DELIVERY`（或 `STOP`）——绝不虚报动作已完成。
:::

## 只读优先

`project-onboard` 与 `feature-dev` 都遵循"先勘察、后写盘"：

- 无写盘授权时，只执行明确请求、且可证明只读的调查，然后 `STOP`。
- 可能产生产物的命令被视为写副作用，运行前需批准。
- 工作区中已有的用户改动绝不被覆盖、回滚，也不会被误判为基线失败。

## 豁免（Waiver）

`High` 级评审发现只有在项目 Definition of Done 允许、**且**命名 Decision Authority 明确记录理由、残余风险与后续计划时才可豁免。`Critical` 发现永远阻断 `DONE`，不可豁免。

## 相关 STOP 条件

- 语言策略缺失、冲突或未持久化。
- 影响已批准行为的 Design Change 缺少 Decision Authority 确认。
- 必需的 Git/远程副作用缺授权、缺工具或认证。
- 需要用户决策：Tracker/Stage 本地权威、重大依赖、破坏性迁移、交付标准。
