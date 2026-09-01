# 五个 Skill

Foundry 把软件生命周期拆成五个职责单一的 Skill。每个 Skill 都有明确的入口条件和硬性的 `STOP` 边界。

## coding-start —— Greenfield，0 → 1

把一个尚未实现的想法变成可交接的项目，**不写业务代码**。

**触发条件**：你明确要求启动/初始化一个新项目；或为一个尚无宏观基线的项目描述单个 Feature。

**流程**

```text
项目访谈 → 宏观综合 → Challenge Pass → Macro Readiness
→ MACRO DESIGN READY → 文档 + AGENTS → Feature Map → DRAFT Specs → NEXT → STOP
```

**产出**：根 `STAGE.md`、`README.md`、`AGENTS.md`、`docs/PRODUCT|ARCHITECTURE|DATABASE|API|TESTING`、（如有 UI）UI 文档、`specs/ROADMAP.md`，以及每个 Feature 的浅层 DRAFT Spec。

**边界**

- 默认不写业务代码、不搭全量脚手架。
- 分轮访谈（每轮 2–5 个相关问题；`DEEP` 模式每轮只问一个决策问题）。
- 默认值标记为 `RECOMMENDED`，绝不冒充已确认事实。
- 以至少一个经权限确认的 `NEXT` Feature 停止——通常恰好一个；并行多选仅在确有不同成员认领时确认（或零 `NEXT` 的 `BLOCKED_HANDOFF`）。

## project-onboard —— Brownfield，未知 → 理解

把陌生仓库恢复为可验证、可追溯的 `AS-IS` 基线。**先理解现实，再讨论 `TO-BE`。**

**触发条件**：你明确要求接管、盘点或恢复一个已有仓库。仅仅"第一次进入陌生仓库"**不会**触发。

**流程**

```text
Repository Survey → 基线验证 → 架构重建
→ 前端/UI 重建（如有）→ Docs-vs-Reality → Knowledge Gaps
→ AS-IS 文档 → Feature Inventory → AS-IS Specs → 推荐下一项 → STOP
```

**产出**：根 `STAGE.md`（创建或增量接管）、`docs/onboarding/BASELINE.md`、Knowledge Gaps、AS-IS 规范文档、`specs/ROADMAP.md` 中的 Feature Inventory，以及 `AS_IS_DRAFT`/`RECONSTRUCTED` 状态的 Spec。

**边界**

- 证据优先级：`Runtime > Tests > Code > DB/Migrations > Config > CI/CD > Docs > Comments > Inference`。
- 事实打标：`OBSERVED / DOCUMENTED / CONFIRMED / INFERRED / NEEDS_CONFIRMATION / CONFLICT / UNKNOWN / MISSING`。
- 不大规模重构、不把历史代码升级为规范、绝不写 `READY`。
- 只推荐下一项工作，不实现它。记录的技术债交给 `maintenance-dev` 处理，从不在接管期间批量修复。

## feature-dev —— Feature，1 → N

每次运行把恰好一个选定的 Feature / Change / Bug 从事实确认推进到可验证的交付。其他并行选定的 `NEXT` 项属于其他成员；并行交付通过 Issue + 分支 + PR + 负责人合并协调。

**触发条件**：你明确要求实现、修复或交付一个选定的工作项。只读评审、仅诊断、普通问答均不触发。维护期工程路由到 `maintenance-dev`；新一波 Feature 的规划路由到 `evolve-dev`。

**流程**

```text
绑定 Issue → Spec 精化 → SPEC READY → [如有 UI：UI READY]
→ TEST DESIGN READY → Plan → Coding → Review → Documentation Sync → PR/DONE
```

**边界**

- 每次运行只处理一个工作项；不批量建 Issue。多个成员可并行运行，各自负责自己认领的项。
- 编码前必须通过 `SPEC READY`、`UI READY`、`TEST DESIGN READY` 门禁。
- 测试设计先于实现；测行为，不测内部实现。
- 设计变更走 L1/L2/L3，需命名的决策权限。
- Git/远程操作各自需要明确授权。

## evolve-dev —— 交付后演进，N → N′ 规划

在有基线的仓库上规划下一个交付波次：把新方向变成经确认的 Roadmap 条目、DRAFT Spec 和重排后的优先级——**不触碰实现**。

**触发条件**：你明确要求在已有可信基线的仓库上规划新的 Feature 波次、扩充 Roadmap、重排优先级或增量更新宏观基线。

**流程**

```text
Preflight → 演进访谈 → 综合 + Challenge Pass
→ ROADMAP EVOLUTION READY → Roadmap 更新 → DRAFT Specs → NEXT → STOP
```

**产出**：Roadmap 演进记录、`specs/ROADMAP.md` 中的新 `DRAFT` 条目、每个新 Feature 的浅层 DRAFT Spec、经确认的优先级变更，以及增量宏观基线差异。

**边界**

- 不写业务代码；所有 Spec 保持带 Open Questions 的 `DRAFT`——`SPEC READY` 属于 `feature-dev`。
- 优先级变更和每个选定的 `NEXT` 都需要具名 Roadmap Decision Authority 确认；他人认领的条目记 `NEEDS_CONFIRMATION`，绝不改写。
- 只做增量：会推翻宏观基线的方向（产品重定位）`STOP`，交由用户显式决定是否重走宏观设计。
- 被波次取代的能力保留其历史；退役在 `maintenance-dev` 中执行。

## maintenance-dev —— 维护工程，行为保持变更

在安全网之下交付恰好一个维护战役：行为保持重构、技术债清理、依赖/框架升级，或弃用/移除某个能力。

**触发条件**：你明确要求在具有可信基线的仓库上执行上述四类战役之一。没有明确战役的债务调查、以及任何新业务能力，均不触发。

**流程**

```text
Preflight → 绑定工作项 → 安全网设计 → SAFETY NET READY
→ 战役计划 → 切片执行（逐切片 BEHAVIOR PRESERVED）
→ 战役级验证 → Review → Documentation Sync → PR/DONE
```

**边界**

- 四类战役（`REFACTOR | DEBT | UPGRADE | RETIRE`），每次运行恰好一个。
- 没有 `SAFETY NET READY` 不切片：基线快照、覆盖不足处补特性化测试、记录回归范围。无法验证的表面直接阻塞。
- `BEHAVIOR PRESERVED` 只凭记录在案的证据主张；行为差异路由到 Design Change 和 `feature-dev`，绝不从切片里溜过去。
- `RETIRE` 需要最严格的链条：具名权限对预期行为变更的确认、消费者清单、迁移或破坏接受、公告、回滚。
- `UPGRADE` 记录版本、lockfile 策略、破坏性变更清单、分层顺序与回滚；Major Tech Choice 属 L3，须有 ADR。

## 五者如何衔接

```text
新想法 ──▶ coding-start ──▶ feature-dev ──▶ feature-dev ──▶ ...
已有仓库 ──▶ project-onboard ──▶ feature-dev ──▶ feature-dev ──▶ ...
                ▲                                        │
                └── evolve-dev（下一波次规划）◀───────────┤ 已交付基线
                                                         ▼
                             maintenance-dev（重构 / 技术债 / 升级 / 退役）
```

- `coding-start` 与 `project-onboard` 都以"把选中的 Feature 交给 `feature-dev`"收尾，每个 `NEXT` 项一个认领成员。
- 交付之后，`evolve-dev` 规划下一波次；`maintenance-dev` 保持已交付结构的健康。两者都把实现交回去——`evolve-dev` 交给 `feature-dev`，`maintenance-dev` 通过自己的受验证切片交付。
- Skill 保存**流程**；项目的 `AGENTS.md` 保存**规则**。
- 根 [`STAGE.md`](./guide/project-stage) 贯穿五个 Skill，保存当前项目/成员快照；关联 Tracker 与产物仍保留各自权威。
