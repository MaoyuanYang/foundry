# feature-dev —— 交付（DONE）

## Implementation Plan

仅当 `SPEC READY` + `UI READY`（或显式跳过）+ `TEST DESIGN READY` 对当前 revision 全部通过、且无 `STALE` 时才写。Plan 记录这些 revision，且**只**回答"如何实现"：受影响模块/文件/页面/组件、当前与目标数据/API 流、领域/服务/持久化/集成/前端变更、事务、缓存、消息、校验、安全、错误处理、可观测性、迁移/发布/回滚、每个 `TS-*` 的测试执行条目、风险。

Plan 不得新增业务规则或 Acceptance、扩大 Scope、静默更改 API/UI 契约，或引入重大依赖/架构。需求变更回到 Spec 走 Design Change。仅当门禁/计划/任务 revision 对齐时才记 `Roadmap Status: READY`；若上游门禁失效，将就绪状态撤回至 `NEXT`，并记录原因与恢复点。

## Tasks

任务以可验证的垂直切片交织 Code 与 Tests——绝不"先写完所有代码再统一测试"，也不为形式把每个任务拆成 sub-issue。随后 `Roadmap Status: IN_PROGRESS`，以小切片编码：遵守 AGENTS、READY Spec、Architecture、API/DATABASE 与 Frontend/UX/UI/Design System 规则；复用既有模式与组件；绝不偷改业务规则、引入重大依赖或改变架构。发现疑似 Design Change 时暂停编码，走 L1/L2/L3 流程。

## Review

`Roadmap Status: REVIEW`。Self Review 至少检查：Spec/Scope 合规与每个 `AC-*`；`AC-* → TS-* → 证据`完整性；架构边界、复用、复杂度、重复；数据约束、事务、并发、幂等、一致性、迁移；认证、权限、隐私、输入、错误信息、secret 处理；重试/超时、失败恢复、兼容、发布/回滚、可观测性；测试覆盖行为（非内部实现）及 flaky/遗漏风险；Docs/Code 漂移。有 UI 时，再查 User Flow、Loading/Empty/Error/Success、权限、校验、响应式、可访问性、错误映射、Design System 复用。

发现按 `Critical/High/Medium/Low` 记录。任何 Critical 都阻断 `DONE` 且不可豁免；High 仅当项目 Definition of Done 允许、且命名 Decision Authority 记录理由、残余风险与后续计划时才可豁免。

## Documentation Sync

只更新受影响的文档：当前 Spec、STAGE、ROADMAP、API、DATABASE、ARCHITECTURE、TESTING、ADR、AGENTS、Issue；UI Feature 再加 FRONTEND、UX、UI、DESIGN_SYSTEM。Spec 必须反映已批准的最终行为，同时保留 Brownfield AS-IS 与显式 TO-BE。绝不为了迁就偏离的实现而降低 Acceptance。新的长期规则仅在维护者明确 `ADOPTED` 后才进入 `AGENTS.md`。

## READY FOR PR / READY FOR DELIVERY

当实现、验证、Review、Docs 已完成，但 PR 模式缺授权/工具/认证（或 no-PR 模式缺交付记录）时：产出 PR-ready 摘要与建议标题；列出变更文件/模块、测试命令与结果、UI/Design 变更、风险、破坏性/迁移、回滚；明确未执行的外部动作；记录 `READY FOR PR`（PR 模式）或 `READY FOR DELIVERY`（no-PR 模式）；保持 `Roadmap Status: REVIEW` 与 `DONE Status: NOT_READY`；然后 `STOP`。

每个交付副作用（远程 Issue、commit、push、PR、merge、close）都需独立的明确授权，加可用工具、有效认证与已知目标。"实现这个 Feature"绝不是授权。

## IN PR REVIEW

当已授权的 PR 存在且收到外部评审意见时，Stage 活动转入 `PR_REVIEW`，交付状态转入 `IN PR REVIEW`。每条外部意见导入 Findings 表，附评审人身份与严重度映射——**Critical** 级外部发现与自审 Critical 同等阻断 `DONE`，**High** 级只能通过 Decision Authority 豁免路径处理。修复以 scoped fix slice 经由记录在案的 `REVIEW -> IN_PROGRESS` 边执行：在 Work Status 权威记录触发 finding、范围与原因；在 `CODING_TESTING` 下实现；应用 fix-slice Gate 失效规则（改变可观察行为、错误文案或已批准契约的修复使受影响门禁 `STALE`）；对变更 diff 重跑 Review 清单；然后让工作项回到 `REVIEW`。改变已批准 Scope、Acceptance 或外部契约的修复先走 Design Change。

合并与 `DELIVERED` 之前，认领成员完成集成协议：工作项分支与集成基线同步、重跑已记录的测试设计集成切片与回归范围、命令与结果记入 Review 记录。揭示共享契约或 Spec 语义冲突的合并冲突属于 **L2** Design Change。合并本身是独立授权的动作，由负责人或与其确认后执行。

当已确认的 Definition of Done 被满足（授权的 PR 已打开、评审意见已解决、并由负责人或与其确认后批准合并，或显式采纳的 no-PR 交付记录存在）时，将 `DELIVERED` 与 `DONE Status: PASS`、`Roadmap Status: DONE` 一同记录。

## DONE 门禁

仅当**全部**满足时，才同时记 `DONE Status: PASS` 与 `Roadmap Status: DONE`：

1. Spec 反映当前真实行为，且每个 Acceptance Criterion 都满足。
2. 核心 Acceptance 有测试或已确认的替代证据。
3. 必要的聚焦、回归、集成/E2E、并发与性能测试按风险通过。
4. 无 Critical flaky 测试、无 Critical 评审发现；每个 High 豁免符合 DoD 并有明确风险接受记录。
5. 适用时，UI 行为与 UI 门禁一致。
6. Design Change 已同步；每个已确认的 L3 决策都有绑定 revision、处于项目实施授权状态的 ADR。
7. 受影响的语义 Docs 与 Issue/工作项已按授权/约定同步。
8. 已满足确认的 PR、merge 或 no-PR 交付标准。
9. `DONE` 记录包含独立 revision/hash 清单：当前 Spec、受影响 Dependency Specs、相关 ADR/API/Architecture/AGENTS、适用 UX/UI/Test Design、Plan、已评审 diff、Review 与交付证据。
10. 发生过 PR 评审时，每条外部意见已解决或经 Decision Authority 记录显式豁免，无未解决的 Critical 外部发现，且必需的集成重跑证据已记录（仅在无 PR 时记 `N/A - no PR review occurred`）。

权威 `DONE` 决策完成后，再把 `STAGE.md` 作为 Gate 后投影进行同步。Stage 冲突或 writer 不可用会使投影陈旧，必须报告并重试；但 Stage 不是 `DONE` 的语义输入，也不能反向使 Gate 失效。

**有 UI 时**，另需：完整 User Flow 与导航符合已批准的 UI 产物；Loading、Empty（或正当 N/A）、Error/恢复、Success、适用的 Permission/disabled/offline 状态已验证；响应式在目标视口已验证；可访问性需求已验证；Design System 复用/扩展合规且已记录；必需的交互/UI/E2E 测试通过或有经批准的风险级 N/A。

若测试未运行、结果未知、交付未完成、或外部动作仅是"计划执行"，绝不记 `DONE`——首次验证记 `DONE Status: NOT_READY`。仅当先前 `PASS` 后某个清单输入发生语义变化时，才改为 `STALE` 并重新验证。已完成 Feature 的后续 Bug/Change 使用新工作项，绝不改写原交付记录。
