---
title: 工作流
---

# Foundry 工作流

Foundry 是面向编码智能体的、文档先行、访谈驱动、测试驱动的工作流。它存在的原因,
是一个普通的编码智能体容易这样工作:

```text
用户请求 → 猜测需求 → 直接开写 → 实现逐渐偏航
```

Foundry 用下面这个习惯取而代之:

```text
想法
 ↓
理解          先读仓库和文档,再做任何事
 ↓
访谈          先扫描文档,再就用户决定的缺口提问
 ↓
文档 / Spec   把达成一致的结果写下来
 ↓
实施计划      小的垂直切片,每步可独立验证
 ↓
测试          从验收标准推导而来
 ↓
编码          一步一步实现
 ↓
验证          运行测试;修复直到通过
 ↓
同步文档      更新因此失真的一切
```

文档定义必须理解什么;访谈补齐由用户决定的缺口。

## 原则

1. **先文档,后代码。**
2. **先访谈,后假设。**
3. **先 Spec,后实现。**
4. **测试从验收标准推导。**
5. **增量实现。**
6. **编码直到测试通过。**
7. **文档与实现保持同步。**

Skill 管流程,文档管项目。模板只定义结构 —— 答案来自仓库上下文、访谈和工程判断。

## 四个 Skill,一个习惯

| Skill | 阶段 | 职责 |
|---|---|---|
| [`coding-start`](./coding-start/) | Greenfield · 0 → 1 | 访谈 → 项目文档 → Roadmap → 草稿 Feature Spec |
| [`project-onboard`](./project-onboard/) | Brownfield · 未知 → 理解 | 验证仓库可运行 → 恢复 AS-IS 文档、Roadmap、Spec |
| [`feature-dev`](./feature-dev/) | 开发 · 1 → N | 访谈 → Spec → 实施计划 → 测试 → 编码 → 验证 → 同步文档 |
| [`project-verify`](./project-verify/) | 保障 · 声称 → 查证 | 文档驱动的验证 → 带证据的发现报告 |

```text
新想法 ────────▶ coding-start ──────▶ feature-dev ──▶ feature-dev ──▶ ...
                                                  (规划下一波功能回到 coding-start)
存量仓库 ──────▶ project-onboard ──▶ feature-dev ──▶ feature-dev ──▶ ...
                                                  (用 project-verify 对照文档核查现状)
```

`feature-dev` 统一处理各类开发工作 —— 新功能、变更、Bug 修复、重构、技术债、依赖
升级 —— 使用同一个循环。变化的只是入口,不是流程:

- **Bug 修复** —— 先用失败测试复现,再修复直到通过。
- **重构 / 技术债** —— 先确认行为覆盖率,缺测试就补回归测试,小步重构,逐步验证
  行为不变。
- **依赖升级** —— 盘点破坏点,升级,跑全量测试,记录行为变化。

文档存在之后的任何时刻,都可以用 [`project-verify`](./project-verify/) 独立核查项目现状
与文档是否一致 —— `Done` 的功能是否交付、验收标准是否有证据、文档声明的命令和流程是否
有效 —— 并只报告发现,不做任何修复。

## 文档集

一个 Foundry 管理的项目有可预测的形态:

```text
README.md            项目是什么,如何运行
docs/
  PRODUCT.md         目标、用户、用例、范围
  ARCHITECTURE.md    系统形态、模块、数据流、关键决策
  TESTING.md         策略、层级、关键命令
  DATABASE.md        仅当产品持久化数据
  API.md             仅当产品暴露 API
  FRONTEND.md        仅当产品有 UI
specs/
  ROADMAP.md         功能列表与下一步
  F001-<slug>.md     每个功能一份 Spec
```

只创建适用的文档 —— CLI 工具不需要 `FRONTEND.md`。文档保持简短而真实;一页精确的
文档胜过十页 speculation。

### Roadmap 生命周期

`specs/ROADMAP.md` 用简单的状态跟踪每个功能:

- **Draft** —— 已有 Spec 描述,尚未排期。
- **Next** —— 选定为下一个要构建的功能(同一时间只有一个)。
- **In Progress** —— 正在实现。
- **Done** —— 已实现并验证。

在已有文档的项目上规划下一波功能,是 `coding-start` 的再进入:就新方向访谈,然后
添加 Roadmap 条目和草稿 Spec —— 不需要独立流程。

## 文档保持同步

Foundry 不把文档当作一次性的前置产物。最终状态是:

```text
文档 ↔ Spec ↔ 测试 ↔ 代码
```

当实现发现假设有误、接口变化、数据结构改变或架构偏移时,受影响的文档和 Spec 在
**同一处工作**中更新 —— 绝不放任其腐烂。

## Foundry 不做什么

- 它不强加治理体系:没有协调文件、没有需要维护的状态令牌、没有审批角色。文档和
  Roadmap 就是全部状态。
- 它不替你决定架构。模板定义需要思考的章节;你的仓库、你的访谈和工程判断来填充。
- 它不取代你的 tracker、CI 或评审流程 —— 需要工单和 PR 评审的团队在其上叠加自己的
  工具即可。

## 下一步

- [安装](./install)四个 Skill。
- 阅读 Skill 页面:[coding-start](./coding-start/)、[project-onboard](./project-onboard/)、
  [feature-dev](./feature-dev/)、[project-verify](./project-verify/)。
