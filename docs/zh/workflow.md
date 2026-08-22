# 工作流与门禁

Foundry 的核心纪律：**先定义什么是正确 → 再定义如何证明正确 → 最后实现。** 每一次流转都有门禁。

## Feature 生命周期

```text
Issue ──▶ Spec 精化 ──▶ SPEC READY
      ──▶ [UX/UI 精化 ──▶ UI READY]   （仅当有 UI）
      ──▶ 测试设计 ──▶ TEST DESIGN READY
      ──▶ Plan ──▶ Tasks ──▶ Coding ──▶ Testing
      ──▶ Review ──▶ Documentation Sync ──▶ PR ──▶ DONE
```

## 门禁

| 门禁 | 回答的问题 | 阻断条件 |
|---|---|---|
| `SPEC READY` | Spec 是否正确且完整？ | 存在未解决的关键问题 |
| `UI READY` | 用户流程、状态、契约是否定义清楚？ | 任一 UI 检查项未通过 |
| `TEST DESIGN READY` | 正确性是否可被证明？ | 核心验收未映射到测试场景 |
| `DONE` | 交付是否已验证？ | 任一 DONE 检查项未通过 |

每个门禁都记录状态（`PASS | NOT_READY | STALE`）、输入清单和批准的决策权限。输入发生语义变化会使下游门禁 `STALE` 并强制重新验证。

## Spec 生命周期

**Greenfield**

```text
DRAFT ──▶ clarification ──▶ refinement ──▶ SPEC READY
```

**Brownfield**

```text
AS_IS_DRAFT ──▶ 证据收集 ──▶ RECONSTRUCTED
            ──▶ 显式 TO-BE ──▶ SPEC READY
```

只有选中的 Feature 被深化；其余 Spec 保持 `DRAFT`。

## AS-IS 与 TO-BE

对已有项目，Foundry 严格区分：

- **AS-IS** —— 当前可验证的行为。绝不自动升级为规范。
- **TO-BE** —— 期望的未来行为。由 `feature-dev` 单独确认。

已有代码、测试、文档、UI 都是**证据**，不是需求。

## 对象职责

| 对象 | 负责 |
|---|---|
| **Spec** | 什么才算正确（事实来源） |
| **Issue / 工作项** | 工作进行到哪里（进度、状态） |
| **Implementation Plan** | 怎么实现（不得重新定义需求） |
| **PR / 交付记录** | 代码发生了什么变化 |
| **ADR** | 为什么做出重要决策 |
| **AGENTS.md** | 项目长期规则 |

Issue 绝不复制 Spec；Plan 绝不改写需求。

## 设计变更策略

设计可以变化，但必须走受控流程 —— 绝不"改了代码、文档不动"。

| 级别 | 范围 | 更新内容 |
|---|---|---|
| **L1** | 单 Feature | 当前 Spec、Test Design、必要的 API/DB/UI |
| **L2** | 跨 Feature | 相关 Specs、API、DATABASE、UX/UI、ROADMAP、tests |
| **L3** | 架构级 | 所有受影响文档 + ADR，需命名权限批准 |

L3 决策必须先有达到项目实施授权状态的 ADR，才能恢复编码。

## 语言策略

Foundry 默认：

```text
documentation_language = en
engineering_language = en
```

工程产物（文档、Spec、标识符、API、提交、测试）默认英文。**产品内容语言**遵循产品需求 —— 一个面向中文用户的应用依然交付中文界面文案。任何覆盖都需决策权限明确批准，并持久化到 `AGENTS.md`。
