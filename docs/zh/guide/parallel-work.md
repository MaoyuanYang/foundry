# 并行协作与集成

Foundry 支持多个成员——人类与 Agent、各自在自己的机器上——并行开发。协调平面就是标准的远端流程：**Issue + 分支 + PR + 负责人合并**。Skill 持有流程，tracker 持有权威。

## 模型

- 同一时刻可以存在多个 `NEXT` 工作项。每个工作项**被恰好一个活跃成员认领**；权威认领记录在 `REMOTE` 追踪模式下是 tracker issue 的 assignee（Stage 活动行是其投影），在 `LOCAL` 模式下是 Stage 活动行。无解释的重复认领是 `CONFLICT`；记录了明确协作与职责边界的认领仍然有效。
- 认领以三种方式结束：完成（终态）、既有的原子 Stage-local 交接，或**权威释放**——认领成员不可达时，具名 Maintainer Decision Authority 可释放认领并将工作项回到认领前状态、记录原因。任何成员可将疑似陈旧认领标为 `NEEDS_CONFIRMATION`。
- 一次 `feature-dev` 运行仍然只推进一个工作项。并行来自不同成员各自对自己的认领项运行该 Skill。
- 项目可以在根 `AGENTS.md` 中采纳数值型 `WIP Limit: <n>`（需 Maintainer Decision Authority 批准）。它统计**非终态被认领工作项**——`REMOTE` 模式下 tracker 中绑定 Spec 的 open 项，`LOCAL` 模式下 Stage Active Work 的非终态行。默认约束只有"每项一认领"。
- 其他成员认领的项对你的运行是只读的：绝不修改它们的 Roadmap 状态、工作项、分支或 Gate 记录。

## Tracker 优先协调

- 多成员、多机器项目**绑定远端 tracker**（GitHub/GitLab/Jira）作为 Work Status 权威——服务端存储，天然跨机器安全——或记录 Maintainer 显式采纳的例外。`HYBRID` 追踪按范围切分：每个绑定 tracker 的子项目从 `REMOTE` 规则，每个未绑定范围必须单成员从 `LOCAL` 规则。
- 认领成员在开发开始前为自己认领的项提交或绑定恰好一个 Issue，然后在专属分支上开发，分支记录在 Stage 的 `Branch / Worktree` 列。
- `STAGE.md` 是**团队状态看板**：每台机器持有从 tracker 和 Gate 记录刷新的本地投影；不一致时以 tracker 为准；`STAGE.md` 在 Git 层的冲突按行范围从权威源重新生成受影响行解决——绝非整文件替换或手工挑边。
- `LOCAL` 追踪模式服务于单成员在同一机器/工作区的多个会话；此时由六步 Stage 写保护（revision + SHA-256）串行化写入。
- 根 `AGENTS.md` 记录 `foundry_contract_version`。每个 Skill 在入口校验，不一致即停止并要求同步安装副本——防止跨端合同漂移。

## 集成协议

合并与 `DELIVERED` 之前，认领成员需要：

1. 将工作项分支与集成基线同步（按项目约定 rebase 或 merge；未经单独授权绝不强推共享分支）。
2. 重跑**已记录的集成切片**——测试设计 `Parallel-feature integration/merge regression` 行中的 `TS-*` ID 列表——与记录的回归范围，命令与结果记入 Review 记录。
3. 在本地解决文本冲突。若冲突揭示了共享契约或 Spec 上的**语义**冲突，则属于 L2 设计变更：暂停、获得具名 Decision Authority 确认、先同步 Specs/文档、再继续。
4. 两个工作项触碰同一区域时按 Roadmap 依赖顺序合并；无记录依赖的同表面项由 Roadmap Decision Authority 应请求裁定，无裁定时认领在前者先合并（无法判定记 `CONFLICT` 并询问）。后合并者在前项合并后重跑本协议。

## PR 同行评审

交付状态推进 `REVIEW → READY FOR PR → IN PR REVIEW → DELIVERED`：

- 当已授权的 PR 存在且收到外部反馈时，Stage 活动转入 `PR_REVIEW`。每条意见导入 Findings 表，带评审人身份与严重度映射。
- **Critical** 级外部发现与自审 Critical 同等阻断 `DONE`。**High** 级只能通过 Decision Authority 豁免路径处理。
- 修复以 **scoped fix slice** 经由记录在案的 `REVIEW -> IN_PROGRESS` 边执行：记录触发 finding、范围与原因；在 `CODING_TESTING` 下实现；应用 fix-slice Gate 失效规则；对变更 diff 重跑 Review 清单；然后让工作项回到 `REVIEW`。
- 合并是独立授权的动作，由负责人（responsible maintainer——具名 Maintainer Decision Authority，或其为该合并明确指定的维护者）或与其确认后执行。

## 测试设计挂钩

当其他 `NEXT` 工作项被并行认领时，测试设计增加并行集成场景族：合并顺序交互、共享契约回归、合并后联合回归（`TR-11`），或记录 `N/A - no concurrent work items`。
