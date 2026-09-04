---
title: project-onboard
---

# project-onboard

把一个文档缺失、过时或不可信的仓库,恢复成编码智能体可以安全开发的基线:验证过的
命令、诚实的 AS-IS 文档、恢复的 Roadmap 和 Feature Spec。产出是理解和文档 ——
onboarding 期间不改变业务行为。

## 何时触发

- "接管这个仓库,恢复可信的基线。"
- "这个代码库没有有用的文档 —— 搞清楚它是干什么的。"
- 第一次进入陌生仓库,**且用户明确要求持久恢复**时。

它**不会**为普通问答或只读浏览触发,不会为启动新项目([`project-start`](../project-start/))
或实现功能([`project-dev`](../project-dev/))触发,也不会为独立验证有文档的项目与其
文档的一致性触发([`project-verify`](../project-verify/))。

## 工作流

```text
现有仓库
    ↓
1. 检查仓库          结构、语言、入口、配置、测试、CI
    ↓
2. 运行已有验证      构建 + 测试;把既有失败记录为事实
    ↓
3. 理解系统          追踪真实流程;相信 运行时 > 测试 > 代码 > 文档
    ↓
4. 对比代码与文档    用 Observed / Inferred / Unknown 标注发现
    ↓
5. 询问用户          只问仓库无法回答的问题
    ↓
6. 创建 / 修复文档   修文档以匹配现实,而不是修现实以匹配文档
    ↓
7. 恢复 Roadmap 和 Spec   哪些已完成、部分完成、自然接下来
    ↓
8. 停止              为 project-dev 推荐一个下一步功能
```

## 证据优先于过时文档

已有文档只是线索,不是事实来源。智能体按以下顺序采信证据:

```text
运行时行为 > 测试 > 代码 > 迁移/配置 > 文档 > 推断
```

当文档与现实冲突时,现实获胜,并记录冲突。为了让基线诚实而不引入官僚机制,发现
只带三个标签之一:

- **Observed** —— 从代码、测试或成功运行中验证过。
- **Inferred** —— 对代码的最佳解读,尚未验证。
- **Unknown** —— 无法从仓库确定。

## 产出物

| 产物 | 内容 |
|---|---|
| `README.md` | 修复到安装和命令真实可用 |
| `docs/PRODUCT.md` | 系统显然在做什么、为谁做 |
| `docs/ARCHITECTURE.md` | 代码所呈现的模块与数据流 |
| `docs/TESTING.md` | 系统实际如何测试、什么在失败 |
| `docs/DATABASE.md` / `API.md` / `FRONTEND.md` | 适用时 |
| `docs/ONBOARDING.md` | 验证结果、既有失败、知识缺口 |
| `specs/ROADMAP.md` | 恢复的功能:Done、部分完成(Draft)、自然的下一步 |
| `specs/F001-*.md …` | 需要真正开发的功能的草稿 Spec |

## 边界

- onboarding 期间不改变业务行为。为验证基线所必需的构建/测试工具修复是允许的,
  且触碰过的内容会被记录。
- 既有的测试失败被记录,而不是被修复 —— 修复它们是 `project-dev` 的工作。
- 未经用户明确授权,不做破坏性或远程操作。

## 下一步

- [`project-dev`](../project-dev/) —— 实现被推荐的下一个功能。
- [`project-start`](../project-start/) —— Greenfield 对应技能。
- [`project-verify`](../project-verify/) —— 独立审计恢复出的基线。
