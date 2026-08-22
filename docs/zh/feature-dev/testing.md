# feature-dev —— 测试设计（TEST DESIGN READY）

Foundry 采用 **Spec 驱动 + 测试导向开发**。编码前先问：*如何证明这个 Feature 是正确的？*测试设计是风险模型与可验证性设计——不是堆测试数量的竞赛。

## AC → 测试场景

从每个 `AC-*`、业务不变量、失败模式与变更风险推导 `TS-*` 场景。映射必须显式；一个场景可保护多个相关验收。保持追踪链：

```text
需求 ↔ Acceptance Criterion (AC-*) ↔ 测试场景 (TS-*) ↔ 自动化测试
```

每个场景记录：稳定的 `TS-*` ID/标题/风险、保护的 `AC-*` 或不变量、Given/When/Then、建议层级、自动化目标、数据/fixture、环境依赖、当前结果/证据。

## 场景选择（风险驱动）

Happy Path、Alternative Flows、边界、错误、非法输入、认证、授权、幂等、并发、事务、一致性、重试/超时、重复请求/消息、失败恢复、迁移、向后兼容、回归——有 UI 时再加：用户交互、表单校验、加载、错误/空状态、可访问性、导航、E2E、视觉回归。不适用项记简短理由，而非机械造场景。

## 测行为，不测实现

验证外部可观察行为。优先"最终恰好创建一个订单"，而非"某个私有函数被调用两次"；前端优先"用户看到 X、能操作 Y"，而非"组件内部状态等于 Z"。

## TEST DESIGN READY 清单

`PASS` 要求每项 `YES`（仅当条目明确允许时用风险级 N/A 理由），并附完整上游清单、Test Design revision、验证时间与 Decision Authority 批准来源和范围：

1. 每个核心 `AC-*` 可验证，且映射到至少一个 `TS-*`。
2. 覆盖 Happy Path、主要 Alternative Flows 与边界。
3. 覆盖 Error、Authentication/Security、Regression 风险。
4. Idempotency、Concurrency、Transaction、Consistency 已覆盖或有 N/A 理由。
5. 高风险 Retry/Timeout、Migration/Compatibility、性能等已覆盖或有 N/A 理由。
6. UI 交互/状态、Accessibility、E2E 按风险覆盖或有 N/A 理由。
7. 测试层级与自动化目标合适，不只针对实现细节。
8. 环境、数据、fixture、外部依赖可用，或已确认替代验证。
9. Bug 有复现与回归场景，或有已确认的证据替代方案与残余风险。
10. 无不可验证的 Critical 需求，也无遗留的 Critical 测试问题。

## Bug 分支

优先顺序：`复现 → 回归测试 → 修复 → 验证`。用最小稳定步骤尝试复现；创建 `TS-*` 回归测试（确认它因缺陷而失败，而非环境噪音）；做最小修复；运行回归、相邻与必需的全量测试。UI Bug 同样适用。若 Bug 是需求遗漏，先更新 Spec/`AC-*`。

当无法直接复现（仅生产出现、低概率竞态、环境不可得）时，可用**证据替代方案**：记录复现尝试、日志/trace/特征化证据、经 Decision Authority 确认的预期行为、可重复的替代验证与残余风险。绝不声称没有发生的复现或先行失败。

## Test Design First，而非机械 TDD

不强制处处 Red-Green-Refactor。TDD 适合状态机、核心业务规则、纯函数、计算/转换、幂等与 Bug 修复；Controller、配置与基础设施胶水可用集成验证。警惕可测性障碍（巨型服务、静态全局状态、不可控时钟、混杂 DB/缓存/MQ 的大方法、同时承担网络+状态+逻辑的 UI 组件），在 Plan 中改进缝隙——但不添加无需求的抽象。
