# evolve-dev —— 产物体系

一次演进波次产出什么，以及刻意不产出什么。

## Roadmap 演进记录

存放在 Roadmap 旁边（例如 `specs/EVO-<n>-<slug>.md`），由 `assets/roadmap-evolution.template.md` 生成：

- **演进元数据** —— ID、波次目标、发起人、规划者、Roadmap Decision Authority、门禁结果、记录修订。
- **基线快照** —— 演进前的 Roadmap 状态、考虑过的活跃认领、驱动波次的债务或缺口（各带证据标签）。
- **新条目** —— 稳定 ID、业务价值、优先级、依赖、与既有 Feature 的关系。
- **优先级变更** —— 前后值、原因、权限确认、认领检查。
- **宏观基线差异** —— 哪些规范文档变化、差异内容、批准、同步状态。
- **Out of Scope** —— 显式排除的候选。
- **Open Questions** —— 带阻塞标记与解决触发地带入 DRAFT Spec。
- **NEXT 选择** —— 选定条目、理由、认领成员、权限确认。
- **交接** —— 结果（`Confirmed NEXT` 或 `BLOCKED_HANDOFF` + `EVOLUTION INCOMPLETE`）、阻塞、恢复点。

## Roadmap 与 Spec 更新

- `specs/ROADMAP.md` **增量**更新：新条目以 `Roadmap Status: DRAFT` 追加，经确认的优先级变更记录在案，所有既有 ID、依赖、交付记录原样保留。演进只追加和重排，绝不抹除。
- 每个新 Feature 按仓库既有 spec 布局生成浅层 DRAFT Spec。每份记录 `Roadmap Status: DRAFT`、保留 Open Questions、绝不成熟到 `READY`——`SPEC READY` 属于 `feature-dev`。
- 经批准的宏观基线差异只写入对应的责任规范文档；`docs/onboarding/*` 与已交付 Spec 保持不可变历史。

## 本 Skill 绝不产出

- 业务代码、测试、迁移、schema、脚手架。
- 成熟的 Spec、冻结的 DTO/字段/组件、实现 Issue 或 PR。
- 对 Roadmap 历史或他人认领的改写。
- 对已交付 Feature 的删除或降级（退役是 `maintenance-dev` 的 `RETIRE` 战役）。
