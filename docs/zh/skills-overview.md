# 三个 Skill

Foundry 把软件生命周期拆成三个职责单一的 Skill。每个 Skill 都有明确的入口条件和硬性的 `STOP` 边界。

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
- 只推荐下一项工作，不实现它。

## feature-dev —— Feature，1 → N

每次运行把恰好一个选定的 Feature / Change / Bug 从事实确认推进到可验证的交付。其他并行选定的 `NEXT` 项属于其他成员；并行交付通过 Issue + 分支 + PR + 负责人合并协调。

**触发条件**：你明确要求实现、修复或交付一个选定的工作项。只读评审、仅诊断、普通问答均不触发。

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

## 三者如何衔接

```text
新想法 ──▶ coding-start ──▶ feature-dev ──▶ feature-dev ──▶ ...
已有仓库 ──▶ project-onboard ──▶ feature-dev ──▶ feature-dev ──▶ ...
```

- `coding-start` 与 `project-onboard` 都以"把选中的 Feature 交给 `feature-dev`"收尾，每个 `NEXT` 项一个认领成员。
- Skill 保存**流程**；项目的 `AGENTS.md` 保存**规则**。
- 根 [`STAGE.md`](./guide/project-stage) 贯穿三个 Skill，保存当前项目/成员快照；关联 Tracker 与产物仍保留各自权威。
