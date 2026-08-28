# coding-start —— 访谈与 Challenge Pass

Discovery 是一场多轮访谈：它建立 **Decision Ledger**，按风险自适应强度，并在写任何文档之前强制执行一次反驳关。

## Decision Ledger

从第一轮起，每个重要事项恰好携带一个事实状态：

| 状态 | 含义 |
|---|---|
| `CONFIRMED` | 已由证据/知情人确认的事实，或已由相应 Decision Authority 批准的高影响决策 |
| `RECOMMENDED` | 带理由、权衡与适用条件的默认建议——尚未批准；绝不冒充既定事实 |
| `UNKNOWN` | 缺少证据或答案；标明是否阻塞、如何消除 |

每轮回答后先更新 Ledger，再决定下一组问题。冲突要暴露并确认，绝不静默裁决。同时记录 `Discovery Intensity: STANDARD | DEEP`——它只控制交互深度，不改变事实状态。

## 访谈协议

1. 默认 `STANDARD`：每轮一组 2–5 个相关的高影响问题。
2. 用户要求深挖，或出现模糊/冲突、高风险业务、不可逆数据、并发、复杂状态机、无依据的技术复杂度时，把当前分支升级为 `DEEP`。
3. `DEEP` 每轮只问一个决策问题并等待；有安全推荐时先给推荐，附理由、代价与替代项。
4. 先调查环境可得的事实；产品与高影响决策需 Decision Authority 确认。
5. 低风险未知可给带 revisit trigger 的 `RECOMMENDED`；高影响规则或架构选择不得默默默认。
6. 不重复已答问题、不在当前组未解决时插入无关主题、不提前决定字段/DTO/类/组件/SQL/CSS/内部函数。

## Adaptive Grilling

| 模式 | 时机 | 每轮行为 |
|---|---|---|
| `STANDARD` | 低风险、可逆、无关键冲突 | 2–5 个相关高影响问题 |
| `DEEP` | 用户要求深挖，或触发高风险信号 | 恰好一个决策问题，然后等待 |

**七类信号会把当前分支拉入 `DEEP`：**

1. 不可验证词汇——"简单""智能""实时""安全""灵活""可扩展"。
2. Problem、Users、MVP、成功标准或约束之间冲突。
3. 金钱、支付、审批、隐私、合规、不可逆数据或高安全风险。
4. 多角色/多租户、归属、权限隔离或外部身份。
5. 库存、预约、配额、幂等、并发、事务或复杂状态机。
6. 无业务/规模证据的过早微服务/消息/缓存/多活。
7. MVP 膨胀、缺 Out of Scope，或关键 Source of Truth / Decision Authority 不清。

**`DEEP` 协议**——每轮一个关键问题；优先用交互式提问工具并把推荐答案前置；给出推荐 + 代价 + 替代项（没有安全推荐就明说）；先自查事实再问；分支解决后回到 `STANDARD`。求快可以减少低风险问题，但绝不绕过阻塞性决策。

## 访谈范围

- **Product** —— 问题、为什么、目标用户、痛点、核心价值、关键场景、MVP、Phase-1 范围、Out of Scope、成功标准。
- **Users / Roles** —— 用户类型、角色、注册/登录、权限、Admin/Operator 行为。
- **Business Domain** —— 领域、模块、边界、职责、依赖、核心实体、主流程、Vertical Slice（不过早映射为类）。
- **Business Rules** —— 状态机、唯一性、幂等、库存、权限、取消、超时、重试、删除、重复请求、事务、一致性、原子性、异步、Source of Truth。
- **Non-functional** —— 规模、QPS、延迟、并发、可用性、安全、隐私、审计、可观测性、成本——风险驱动，而非"为显专业默认微服务"。
- **Technology** —— 语言/版本、框架、数据库/ORM、缓存/MQ、移动端、构建、单体/微服务、CI/CD、部署、云、第三方；逐项标注 `Confirmed` 或 `Recommended`。
- **UI / UX**（`UI: YES` 时）—— 平台、设备、流程、信息架构、UX 原则、视觉方向、可访问性、i18n、主题。

## Challenge Pass

Macro Synthesis 之后必跑一次反驳关。每个假设记录为 `RETAINED`、`REVISED` 或 `REJECTED`（仍用事实状态）：

1. **Problem** —— 问题是否真实、谁现在有、不做的代价是什么？
2. **MVP Subtraction** —— 还能删掉什么而仍验证核心价值？
3. **Counterexample** —— 哪个失败、取消、越权、重复、并发或依赖会破坏流程？
4. **Authority** —— 谁能决策、谁拥有关键数据、Source of Truth 是什么？
5. **Success Falsifiability** —— 哪个可观察结果意味着成功、哪个意味着方向错了？
6. **Complexity** —— 每项重大复杂度有什么业务/风险/规模证据支撑？

新的阻塞未知回到 `NEEDS_CLARIFICATION` 与 Discovery。Challenge 不得下沉到 DTO/Schema/API/组件；沉默不等于确认。

## Macro Readiness 清单

**基础项** —— Project Goal、User、MVP、Out of Scope、Main Flow、Core Entities、Module Boundaries、Dependencies、Business Rules、Important State Machines、Tech Stack、Data Source of Truth、Data Strategy、API Strategy、Testing Strategy、Non-functional Requirements、Phase-1 Scope、三个语言维度，以及经 Decision Authority 明确确认的 Challenge 结论。

**`UI: YES` 追加项** —— Target Platform、Primary User Flow、Page/Screen Map、Navigation、UX Principles、Frontend Architecture、Design System Direction、Responsive Requirements、Accessibility Requirements。

任何可能改变产品正确性、边界、核心流程、Source of Truth、安全/合规、产物语言或 UI 主流程的 `UNKNOWN` 都会触发 `NEEDS_CLARIFICATION`。只有高影响未知全部消除后，Gate 才输出：

```text
MACRO DESIGN READY
```
