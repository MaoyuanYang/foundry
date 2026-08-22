# feature-dev —— Issue 与 Spec（SPEC READY）

## 绑定一个 Issue / 工作项

1. 检测既有的 GitHub、GitLab、Jira 或本地约定（仓库配置、模板、链接、Roadmap 记录）。
2. 有匹配的工作项就绑定；否则**只准备当前这一个**——绝不批量创建。Bug/Change 使用独立工作项，绝不隐式重开或降级 `DONE` 的父 Feature。
3. 无 tracker/约定时，先询问是否建立本地工作项；确认前绝不创建。
4. 使用项目格式，缺失时用 Issue 模板。

绑定的远程 Issue 或本地工作项是**唯一可写的 Work Status 权威**；`specs/ROADMAP.md` 只做镜像。远程权威需要明确授权、可用工具与有效认证——否则改用本地工作项，或保持状态并 `STOP`。

### Issue 内容（绝不复制 Spec）

Goal、Spec 链接、Status、Priority、Assignee、Acceptance checklist、Implementation checklist、Dependencies、Blockers、Delivery links。

新选定的 `DRAFT/UNTRACKED` 项，仅在命名的 Roadmap Decision Authority 确认后才转为 `NEXT`。被阻塞时记录 `Blocked From`、原因、owner 与解除条件，然后转入 `BLOCKED` 并 `STOP`。

## Spec 精化

**Greenfield**

```text
DRAFT → clarification → refinement → SPEC READY
```

**Brownfield**

```text
AS_IS_DRAFT → 证据收集 → RECONSTRUCTED → 显式 TO-BE → SPEC READY
```

Brownfield 必须保留有证据的 AS-IS，把每个被触及的 AS-IS 表面提升到 `RECONSTRUCTED`，并单独陈述 TO-BE。`INFERRED` 绝不冒充已确认事实。Bug 优先稳定复现；不可复现时记录尝试、替代证据与残余风险，获得 Decision Authority 对预期行为的确认，并先把缺失需求补进 Spec。

## Spec 必须覆盖

Goal、Scope、Out of Scope、Actors、Preconditions、Main Flow、Alternative Flows、Business Rules、State Transitions、Data Changes、API Behavior、Error Cases、Idempotency、Concurrency、Security、Acceptance Criteria、Dependencies、Open Questions——按需补充 Performance、Caching、Messaging、Transaction、Consistency、Retry、Timeout、Observability、Migration、Backward Compatibility。有 UI 时，还要覆盖 User Flow、Affected Pages、Entry/Exit Points、UI States、Interaction、Form Behavior、Validation、Loading/Empty/Error/Success、Permission、Responsive、Accessibility。

## Open Questions

状态为 `OPEN | RESOLVED | DEFERRED`。**Critical** 问题处于 `OPEN` 或 `DEFERRED` 会阻断 `SPEC READY`。Critical 问题可能改变 Scope、Acceptance、业务规则、安全、数据/API 契约、核心 UX、迁移或测试可行性；非关键问题允许在当前约束内做可逆选择，并记录 owner。

## SPEC READY 清单

`PASS` 要求每项为 `YES`（仅当条目明确允许时，需求级的 N/A 理由可支撑 `YES`；条目本身绝不跳过），并附完整清单、验证时间与 Decision Authority 批准来源和范围：

1. Goal、Scope、Out of Scope 清晰，且只覆盖当前工作项。
2. Actors、Preconditions、Main/Alternative Flows 足以确定行为。
3. Business Rules、Invariants、State Transitions 明确。
4. 已评估外部可观察的 Data 与 API 行为及兼容性影响。
5. 已评估 Error、安全、权限与隐私需求。
6. Idempotency、Concurrency、Transaction、Consistency 已定义或有正当 N/A。
7. 已评估依赖、迁移、可观测性与非功能风险。
8. 每个核心 Acceptance 都有唯一、可验证的 `AC-*`。
9. Brownfield 保留有证据的 AS-IS、有显式 TO-BE、重建了每个被触及表面，并证明其他未知不影响正确性。
10. 重大 Code/Docs/Tests/UI 冲突已解决或已纳入 TO-BE。
11. 没有 Critical Open Question 处于 `OPEN` 或 `DEFERRED`。

未达成时记 `SPEC READY Status: NOT_READY`；旧 revision 已通过但当前输入变化时记 `STALE`。Roadmap `READY` 绝不替代此门禁。
