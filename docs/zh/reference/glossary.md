# 状态词汇表

Foundry 中使用的全部状态、标签与门禁令牌，集中于此。

## Roadmap 工作状态

`DRAFT | NEXT | READY | IN_PROGRESS | REVIEW | DONE | BLOCKED`（Brownfield 勘察在采纳工作流前还可使用 `UNTRACKED`）。

| 状态 | 含义 |
|---|---|
| `DRAFT` | 已知但未选定，或仍粗糙 |
| `NEXT` | 当前唯一选定的工作项 |
| `READY` | 必需门禁、Plan 与 Tasks 就绪 |
| `IN_PROGRESS` | 实现与验证进行中 |
| `REVIEW` | 实现完成；评审/文档/交付进行中 |
| `DONE` | 已满足确认的交付标准 |
| `BLOCKED` | 存在显式阻塞；已记录原因/owner/解除条件 |
| `UNTRACKED` | 无可信工作历史（仅 Brownfield 勘察） |

## Project Stage 快照

项目阶段：

`INITIALIZATION | ONBOARDING | DELIVERY | MAINTENANCE`

总体状态：

`ACTIVE | WAITING | BLOCKED | COMPLETE`

活动状态：

`ACTIVE | WAITING | BLOCKED | HANDOFF`

Lifecycle Progress 还可使用 `NOT_STARTED` 与 `N/A`。这些令牌描述根 `STAGE.md` 中的项目/成员快照，绝不替代 Roadmap 状态或 Gate 状态。

追踪模式为 `REMOTE | LOCAL | HYBRID | TBD`；`TBD` 必须带 owner 与解除条件。Feature 工作项绑定前由 Roadmap 负责初始状态；绑定后由远程 Tracker 负责 Work Status，未绑定远程时，`STAGE_LOCAL:<Activity ID>` 标识负责本地 Work Status 的 Stage 行。远程访问暂时失败不会转移权威。

稳定活动 ID 使用 `A-xxx`；阻塞/冲突 ID 使用 `B-xxx` / `C-xxx`。

交接状态为 `PENDING | ACCEPTED | COMPLETE`。Stage-local 交接必须在发送方完成前，把权威原子地转移到接收方活动。

## 门禁状态

`PASS | NOT_READY | STALE`

- `PASS` —— 针对所记录输入，门禁清单全部通过。
- `NOT_READY` —— 尚未通过。
- `STALE` —— 此前的 `PASS` 因输入语义变化而失效。

门禁：`SPEC READY`、`UI READY`（无 UI 时为 `SKIPPED (N/A)`）、`TEST DESIGN READY`、`DONE`。无 UI 的跳过是一份被记录的决定，不是通过的门禁。Stage 只有在该 Gate 自己的权威记录与 revision 存在后才添加投影；普通 `N/A` 不是 Gate 状态。

## 事实状态

`CONFIRMED | RECOMMENDED | UNKNOWN`

## 证据标签

`OBSERVED | DOCUMENTED | CONFIRMED | INFERRED | NEEDS_CONFIRMATION | CONFLICT | UNKNOWN | MISSING`

## 基线结果

`PASS | FAIL | UNAVAILABLE | SKIPPED`

## Feature 实现状态（Brownfield）

`IMPLEMENTED | PARTIAL | BROKEN | UNKNOWN | DEPRECATED`

## AS-IS Spec 状态

`AS_IS_DRAFT | RECONSTRUCTED` —— onboarding 期间绝不 `READY`。

## Open Question 状态

`OPEN | RESOLVED | DEFERRED` —— Critical 问题处于 `OPEN`/`DEFERRED` 会阻断其门禁。

## 推荐-选择元数据

`RECOMMENDED | SELECTED` —— 提案 vs 经权限确认的选择（不是工作状态）。

## 访谈强度

`STANDARD | DEEP` —— 仅控制交互深度；不改变事实状态。

## Challenge 结果

`RETAINED | REVISED | REJECTED`

## 交付交接

`READY FOR PR`（PR 模式）/ `READY FOR DELIVERY`（no-PR 模式）/ `BLOCKED_HANDOFF`（coding-start，零 `NEXT`）。

## 语言策略

`documentation_language = en`、`engineering_language = en`；`product_content_language` 为实际 BCP-47 值、`UNKNOWN - <resolution action>` 或 `N/A - no product-content surface`。

## 稳定 ID

`AC-*`（Acceptance Criterion）、`TS-*`（Test Scenario）、`OQ-*` / `UIQ-*` / `TQ-*`（Open Questions）、`BR-*`（Business Rule）、`Fxxx`（Feature）、`A-xxx`（Stage Activity）。
