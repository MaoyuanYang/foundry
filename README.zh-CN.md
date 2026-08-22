[English](./README.md) | **中文**

<div align="center">

# Foundry

**从想法到交付，锻造软件。**

面向编码智能体的 AI 原生、Spec 驱动开发套件 —— 覆盖完整生命周期：全新项目、存量接管、持续 Feature 交付。

[网站](https://maoyuanyang.github.io/foundry/) · [安装](#安装) · [三个 Skill](#三个-skill)

[![License: MIT](https://img.shields.io/badge/License-MIT-f59e0b.svg)](./LICENSE)
[![Skills](https://img.shields.io/badge/Skills-3-ff6b1a.svg)](./skills)
[![Agent Skills](https://img.shields.io/badge/Agent-Skills-ready-brightgreen.svg)](https://opencode.ai)

</div>

---

## Foundry 是什么？

Foundry 由三个可复用的 **Agent Skill** 组成，把 AI 编码智能体变成一套有纪律的工程工作流。它不允许直接跳进代码，而是强制贯彻：

- **宏观设计先于编码** —— 先定方向、边界、规则与约束。
- **Spec 驱动开发** —— Spec 是"什么才算正确"的事实来源。
- **测试设计先于实现** —— 先定义如何证明正确，再动手构建。
- **先 UX 后 UI** —— 先用户目标与流程，再谈像素。
- **门禁式流转** —— `SPEC READY` → `UI READY` → `TEST DESIGN READY` → `DONE`。
- **证据优先于假设** —— 观察、文档、确认、推断，绝不静默猜测。
- **受控的设计变更** —— L1/L2/L3 影响分级 + 明确的决策权限。

## 三个 Skill

| Skill | 阶段 | 职责 |
|---|---|---|
| [`coding-start`](skills/coding-start/SKILL.md) | Greenfield · 0 → 1 | 项目访谈、宏观设计、项目文档、Feature Map、DRAFT Specs |
| [`project-onboard`](skills/project-onboard/SKILL.md) | Brownfield · 未知 → 理解 | 基线验证、架构重建、AS-IS 文档、Feature Inventory |
| [`feature-dev`](skills/feature-dev/SKILL.md) | Feature · 1 → N | Spec 精化、UX/UI 门禁、测试设计、计划、编码、评审、交付 |

```text
新想法 ──▶ coding-start ──▶ feature-dev ──▶ feature-dev ──▶ ...
已有仓库 ──▶ project-onboard ──▶ feature-dev ──▶ feature-dev ──▶ ...
```

每个 Skill 都有明确的 **STOP 条件**：不静默写业务代码、不越权写盘、不批量建 Issue、不大规模重构。

## 安装

Foundry 遵循标准 Agent Skills 格式（`SKILL.md` + `references/` + `assets/`）。把三个文件夹复制到你的智能体 skills 目录即可。

**OpenCode / Claude 系智能体**（自动发现）：

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
```

然后重启智能体。可用 `opencode debug skill` 验证发现结果（应能看到三个 Skill）。

## 快速开始

**启动新项目：**

> "初始化一个全新的 greenfield 项目：社区本地生活平台。"

`coding-start` 会逐轮访谈、运行 Macro Readiness 门禁，产出 `README`、`AGENTS.md`、`docs/*`、`specs/ROADMAP.md` 和 DRAFT Specs，然后以唯一的 `NEXT` Feature 停止。

**接管已有仓库：**

> "接管这个仓库，建立可持续的 AS-IS 基线。"

`project-onboard` 会勘察仓库、验证基线、重建架构与 Feature，产出 AS-IS 文档，然后以推荐的下一项工作停止。

**开发一个 Feature：**

> "按工作流实现 Feature F001。"

`feature-dev` 驱动完整生命周期：`SPEC READY` → `UI READY`（如有 UI）→ `TEST DESIGN READY` → Plan → Coding → Review → Documentation Sync → 交付。

## 设计原则

1. 宏观设计先于编码 —— 但避免 Big Design Up Front。
2. 可以一次生成所有 DRAFT Spec，但只深化当前选中的那一个。
3. Spec 定义正确性；Issue 管进度；PR 记录变化；ADR 记录为什么。
4. 不可验证的关键需求，不进入编码。
5. 测试外部行为，不测内部实现细节。
6. 已有代码是证据，不是规范；已有 UI 是证据，不是设计系统。
7. 代码不能长期领先于文档。
8. Skill 保存流程；`AGENTS.md` 保存项目规则。

## 语言策略

Foundry 默认所有工程产物使用英文（`documentation_language = en`、`engineering_language = en`）。面向用户的产品文案遵循产品需求。已有仓库保留其既有语言；任何覆盖都需决策权限明确批准。

## 文档

完整文档（English & 中文）：**<https://maoyuanyang.github.io/foundry/>**

## 许可证

[MIT](./LICENSE) © MaoyuanYang
