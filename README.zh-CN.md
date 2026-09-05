[English](./README.md) | **中文**

<div align="center">

# Foundry

**面向编码智能体的、文档先行、访谈驱动、测试驱动的工作流。**

[网站](https://maoyuanyang.github.io/foundry/) · [安装](#安装) · [四个 Skill](#四个-skill)

[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b.svg)](./LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent_Skills-ready-brightgreen.svg)](https://opencode.ai)

</div>

---

## Foundry 是什么？

一个普通的编码智能体容易这样工作：

```text
用户请求 → 猜测需求 → 直接开写 → 实现逐渐偏航
```

Foundry 是一套包含四个 **Agent Skill** 的技能包，帮助智能体养成另一种习惯：

```text
想法 → 理解 → 访谈 → 文档 / Spec → 实施计划 → 测试 → 编码 → 验证 → 同步文档
```

- **文档先行** —— 先写项目文档和 Feature Spec,再写代码。
- **访谈驱动** —— 先从你所说的、仓库和工程判断填充文档,智能体只就由用户决定的缺口提问。
- **测试驱动** —— 测试从验收标准推导而来，代码在测试下通过。
- **增量实现** —— Feature 以小的、可验证的步骤交付。
- **保持同步** —— 实现改变现实时，文档随之更新。

## 四个 Skill

| Skill | 阶段 | 职责 |
|---|---|---|
| [`project-start`](skills/project-start/SKILL.md) | Greenfield · 0 → 1 | 访谈 → 项目文档(`README`、`docs/PRODUCT`、`ARCHITECTURE`、`TESTING` 等)→ Roadmap → 草稿 Feature Spec |
| [`project-onboard`](skills/project-onboard/SKILL.md) | Brownfield · 未知 → 理解 | 先验证仓库可运行 → 相信代码而非过时文档 → 恢复 AS-IS 文档、Roadmap 与 Spec |
| [`project-dev`](skills/project-dev/SKILL.md) | 开发 · 1 → N | 访谈 → Feature Spec → 实施计划 → 从验收标准推导测试 → 编码 → 验证 → 同步文档 |
| [`project-verify`](skills/project-verify/SKILL.md) | 保障 · 声称 → 查证 | 从文档推导验证范围 → 运行文档声明的验证 → 实测文档记录的流程 → 带证据的发现报告 |

```text
新想法 ────────▶ project-start ─────▶ project-dev ──▶ project-dev ──▶ ...
                                                  (规划下一波功能回到 project-start)
存量仓库 ──────▶ project-onboard ──▶ project-dev ──▶ project-dev ──▶ ...
                                                  (用 project-verify 对照文档核查现状)
```

`project-dev` 统一处理各类开发工作 —— 新功能、变更、Bug 修复、重构、技术债、依赖升级 ——
使用同一个循环:Bug 修复从失败测试开始,重构从确认覆盖率开始。

`project-verify` 对照文档核查项目现状:`Done` 的功能是否真的交付、验收标准是否有可执行
证据、文档声明的命令和流程是否仍然有效。它记录带证据的发现;修复回到 `project-dev`。

## 安装

Foundry 遵循标准 Agent Skills 格式(`SKILL.md` + `assets/`,部分 Skill 另有 `references/`)。
把四个文件夹复制进你的智能体技能目录即可。

**OpenCode / Claude 类智能体**(自动发现):

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/project-start     ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/project-dev       ~/.agents/skills/
cp -r foundry/skills/project-verify    ~/.agents/skills/
```

然后重启你的智能体。用 `opencode debug skill` 验证发现(应能看到全部四个 Skill)。

## 快速开始

**启动一个新项目:**

> "初始化一个新的 greenfield 项目:一个社区本地服务平台。"

`project-start` 先读取你已提供的信息,扫描文档模板,只就由用户决定的缺口向你访谈,
写出项目文档、`specs/ROADMAP.md` 和草稿 Feature Spec —— 然后停止,不写业务代码。

**接管一个已有仓库:**

> "接管这个仓库,恢复可信的基线。"

`project-onboard` 先运行构建和测试,从代码理解系统(标注哪些是 Observed、Inferred
或 Unknown),把文档修复到与现状一致,并恢复 Roadmap —— 全程不改变业务行为。

**开发一个功能:**

> "按照工作流实现 F001。"

`project-dev` 读取项目文档和相关代码,通过访谈解决 Spec 中由用户决定的问题,规划
小的垂直切片,从验收标准推导测试,小步实现直到测试通过,并更新因此失真的文档。

**验证项目状态:**

> "对照文档验证当前项目。"

`project-verify` 从文档本身推导验证范围 —— `README` 和 `TESTING` 声明的命令、
`PRODUCT` 记录的核心用例、`ROADMAP` 标记为 `Done` 的功能 —— 逐项运行、实测流程,
写出带证据、受影响文档、严重程度和建议后续工作的发现报告。它不修复任何东西;
修复回到 `project-dev`。

## 原则

1. 先文档,后代码。
2. 先访谈,后假设。
3. 先 Spec,后实现。
4. 测试从验收标准推导。
5. 增量实现。
6. 编码直到测试通过。
7. 文档与实现保持同步。

Skill 管流程,文档管项目。模板只定义结构 —— 答案来自仓库上下文、访谈和工程判断。

## 文档

完整文档(English & 中文):**<https://maoyuanyang.github.io/foundry/>**

## 许可证

[MIT](./LICENSE) © MaoyuanYang
