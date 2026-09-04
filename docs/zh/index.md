---
layout: home
title: Foundry
titleTemplate: ':title'
description: 面向编码智能体的、文档先行、访谈驱动、测试驱动的工作流。

hero:
  name: Foundry
  text: 文档先行。访谈驱动。测试驱动。
  tagline: 面向编码智能体的工作流 —— 理解项目、访谈用户、写好 Spec、规划小步、推导测试、编码直到通过,并让文档始终保持真实。
  image:
    src: /logo.svg
    alt: Foundry
  actions:
    - theme: brand
      text: 开始使用
      link: /zh/workflow
    - theme: alt
      text: 安装
      link: /zh/install
    - theme: alt
      text: GitHub
      link: https://github.com/MaoyuanYang/foundry

features:
  - icon: 📄
    title: 文档先行
    details: 先写项目文档和 Feature Spec,再写代码 —— 并且在同一处变更中更新因此失真的文档。
  - icon: 🙋
    title: 访谈驱动
    details: "先扫描文档,从你所说的、仓库和工程判断填入内容 —— 然后智能体只就由用户决定的缺口访谈:目标、用户、范围、规则、成功标准。"
  - icon: 📋
    title: 先 Spec 后实现
    details: 每一项工作都有达成一致的 Spec,包含可观察的需求和验收标准 —— 它同时是计划和测试的来源。
  - icon: 🪜
    title: 增量开发
    details: Feature 以垂直切片构建:每一步都以可工作、可测试的行为结束 —— 而不是一堆等着 Service 的 Entity。
  - icon: 🧪
    title: 测试来自验收标准
    details: 验证从 Spec 推导而来,每步之后运行,失败即未完成。Bug 从失败测试开始;重构从确认覆盖率开始。
  - icon: 🔄
    title: Greenfield 与 Brownfield
    details: 用 project-start 启动新项目,或用 project-onboard 恢复缺少文档的存量仓库 —— 然后用 project-dev 一个接一个地开发。
  - icon: 🔎
    title: 对照文档做验证
    details: project-verify 独立核查项目现状与文档是否一致 —— Done 的功能、验收标准、文档声明的命令和流程 —— 给出带证据的发现报告,而不做任何修复。
---

## Foundry 养成的习惯

一个普通的编码智能体容易这样工作:

```text
用户请求 → 猜测需求 → 直接开写 → 实现逐渐偏航
```

Foundry —— 面向 OpenCode、Claude Code 及兼容智能体的四个 Agent Skill —— 这样工作:

```text
想法 → 理解 → 访谈 → 文档 / Spec → 实施计划 → 测试 → 编码 → 验证
```

| Skill | 阶段 | 职责 |
|---|---|---|
| [`project-start`](/zh/project-start/) | Greenfield · 0 → 1 | 访谈 → 项目文档 → Roadmap → 草稿 Feature Spec |
| [`project-onboard`](/zh/project-onboard/) | Brownfield · 未知 → 理解 | 验证仓库可运行 → 恢复 AS-IS 文档、Roadmap、Spec |
| [`project-dev`](/zh/project-dev/) | 开发 · 1 → N | 访谈 → Spec → 实施计划 → 测试 → 编码 → 验证 → 同步文档 |
| [`project-verify`](/zh/project-verify/) | 保障 · 声称 → 查证 | 文档驱动的验证 → 带证据的发现报告 |

Skill 管流程,文档管项目。模板只定义结构 —— 答案来自仓库上下文、访谈和工程判断。
