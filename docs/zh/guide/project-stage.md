# 项目状态面板

`STAGE.md` 是 Foundry 放在仓库根目录的当前状态面板。无需逐个打开 Spec、Issue 和 Gate 记录，它就能回答三个问题：

1. 整个项目处于生命周期的哪一步？
2. 每个活跃的人类成员或 Agent 正在做什么？
3. 哪里被阻塞、下一步由谁负责、应该从哪里恢复？

五个 Skill 共同读取并维护同一个文件。`coding-start` 在 Greenfield 初始化时创建，`project-onboard` 在 Brownfield 接管时创建或增量接管，`feature-dev` 在交付过程中持续同步，`evolve-dev` 在交付后的波次规划中同步，`maintenance-dev` 在维护战役期间同步。

## 它负责什么

| 信息 | 权威来源 |
|---|---|
| 当前项目阶段、活跃成员视图、协作阻塞、交接、恢复点 | `STAGE.md` |
| Feature 工作项绑定前的初始 `DRAFT/NEXT/BLOCKED` | `specs/ROADMAP.md`；Stage 只做投影 |
| 已绑定远程 Tracker 时的 Work Status | GitHub/GitLab/Jira；Stage 仅做投影 |
| 未绑定远程 Tracker（或已显式持久解绑）时的 Work Status | 标识为 `STAGE_LOCAL:<Activity ID>` 的活动行 |
| Feature 排序与依赖 | `specs/ROADMAP.md` |
| 正确行为与 Acceptance Criteria | Feature Spec |
| Gate 决策与证据 | Spec/UI/Test/Review Gate 记录 |
| 长期工程规则 | `AGENTS.md` |
| 已交付的代码变化 | PR/MR 或 Delivery Record |

这种混合模式在所有阶段都保留唯一可写的 Work Status 权威：绑定前是 Roadmap，绑定后是远程 Tracker；没有绑定远程 Tracker 时才是标识出的 Stage 行。已绑定远程即使暂时缺授权、缺工具、未认证、不可用或不可写，也不会转移权威；状态保持不变，直到访问恢复或一次显式且持久的迁移将其解绑。Stage 不复制 Roadmap、完整需求、Gate manifest、实现 Tasks、命令日志或对话历史。

## 快照结构

生成的 `STAGE.md` 包含：

- **Project Snapshot**：生命周期路径、项目阶段、总体状态、当前里程碑、ref、追踪模式、父 revision/hash、写入协调模式与对账时间。初始化/接管早期可使用带 owner 和解除条件的 `TBD`。
- **Lifecycle Progress**：项目级里程碑以及权威证据链接。
- **Active Work**：每个活跃人类或 Agent 一条稳定活动记录。
- **Gate Snapshot**：每行投影一个 Gate，并分别链接自己的权威记录与 revision。记录或 UI skip 决策不存在时不添加该行，绝不复制 Gate 证据。
- **Blockers and Conflicts**：受影响活动、证据、owner 与可观察的解除条件。
- **Handoffs**：交出方、接收方、工作项、精确恢复阶段、必需输入，以及 Stage-local 权威转移。
- **Recently Completed**：最多保留最近 20 条结果，同时保留最终 Work Status 与权威；完整历史由 Git、Tracker 或 Delivery Record 保存。
- **Authority and Update Rules**：所有权、更新时机、冲突处理与语言/机密约束。

## 状态词汇

项目阶段：

```text
INITIALIZATION | ONBOARDING | DELIVERY | MAINTENANCE
```

总体状态：

```text
ACTIVE | WAITING | BLOCKED | COMPLETE
```

活动状态：

```text
ACTIVE | WAITING | BLOCKED | HANDOFF
```

追踪模式：

```text
REMOTE | LOCAL | HYBRID | TBD
```

`TBD` 只在初始化/接管早期有效，并且必须写明 owner 与解除条件。Feature 权威尚不存在时，非 Feature 工作流活动可以使用 Work Status `N/A` 与 `N/A - project workflow activity`。

交付后阶段有明确归属：选定 `NEXT` 项走向 `DONE` 期间项目处于 `DELIVERY`。`evolve-dev` 在交付循环之间规划新波次时运行于 `DELIVERY`/`MAINTENANCE`；`maintenance-dev` 在已交付基线上执行行为保持战役与退役时运行于 `MAINTENANCE`。

每条活动还记录所属 Skill 的精确阶段令牌，例如 `PROJECT_DISCOVERY`、`BASELINE_VERIFICATION`、`SPEC_REFINEMENT`、`EVOLUTION_DISCOVERY`、`SAFETY_NET_DESIGN` 或 `CODING_TESTING`。活动阶段不替代 Roadmap 状态或 Gate 状态。

## 多成员协作

- 每条活动获得稳定的 `A-xxx` ID，并标记成员类型 `HUMAN` 或 `AGENT`。
- Stage 写入通过仓库既有锁或唯一指定的 canonical writer 串行化。两者都没有时，每次写入都按同一套六步 guard 顺序执行：重读 Stage 与每个关联状态权威；写入前比较此前保留的 revision 与 SHA-256，任一变化即中止并重新对账；只更新限定范围的行，保留其他成员的记录与用户改动；把先前 revision/哈希记为 `Parent Snapshot`；写入并递增快照修订号；写入后再次读取，发现重复 ID 或意外内容即停止。下一个 `A-xxx` ID 也在同一 guard 下分配。
- 成员只变更自己的活动及直接相关的 blocker 或 handoff 行；指定 writer 可以代为应用这份限定变更。
- 两个成员只有在协作关系和职责边界明确时才能引用同一工作项；否则记录 `CONFLICT` 并停止受影响的流转。
- 记录 branch 或 worktree，把每个被认领的 `NEXT` 项绑定到其开发分支，确保并行改动可定位。权威认领记录在 `REMOTE` 追踪模式下是 tracker issue 的 assignee（Stage 行是其投影），在 `LOCAL` 模式下是 Stage 行。`REMOTE` 追踪模式下每台机器持有从 Tracker 与 Gate 记录刷新的本地投影；不一致时以 Tracker 为准；本文件在 Git 层的冲突按行范围从权威源重新生成受影响行解决——绝非整文件替换或手工挑边。分叉 worktree 中的 Stage 副本在 canonical writer 对账前不是实时状态。
- Stage-local 交接必须在一次受 guard 保护的更新中：创建/确认接收方行、保留 Work Status、把权威改为 `STAGE_LOCAL:<接收方 Activity ID>`、标记发送方已转移并接受交接。转移成功前发送方保持活跃。
- 只有 Work Status 已终结或权威已成功转移时，活动才能进入 Recently Completed；最终状态与权威保留到 20 条窗口将其裁剪。
- 只有权威证据支持时，才能修改项目级字段。

## 更新节奏

Stage 只在任务分配、关键 Skill 阶段切换、阻塞、恢复、交接和完成时更新。它不是日报，也不是命令执行记录。

远程 Tracker 与 Stage 不一致时，以 Tracker 为准并重新同步 Stage。无法确认绑定、新鲜度、revision、活动身份或权威时，差异保留为 `CONFLICT`；Agent 必须停止受影响的流转、交接或完成，不能静默选择。无关的只读调查可以继续。

`STAGE.md` 的说明文字遵循项目 Documentation Language；精确状态和阶段令牌保持 ASCII，确保五个独立安装的 Skill 能一致解析。
