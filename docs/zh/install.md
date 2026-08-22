# 安装

Foundry 遵循标准 **Agent Skills** 格式：每个 Skill 是一个文件夹，包含 `SKILL.md`、`references/` 和 `assets/`。安装就是把三个 Skill 文件夹复制到你的智能体 skills 目录。

## 前置要求

- 支持 Agent Skills 格式的智能体（OpenCode、Claude Code 或兼容实现）。
- 本机已安装 `git`。

## 安装

克隆仓库，然后把三个 Skill 文件夹复制到 skills 目录。

**OpenCode / Claude 系智能体**会自动发现 `~/.agents/skills/` 和 `~/.claude/skills/` 中的 Skill：

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
```

::: tip Windows
在 PowerShell 中使用 `Copy-Item -Recurse foundry\skills\coding-start $HOME\.agents\skills\`，或手动复制文件夹。
:::

然后**重启智能体**，让它重新扫描 skills 目录。

## 验证

OpenCode 可运行：

```bash
opencode debug skill
```

应能看到 `coding-start`、`project-onboard`、`feature-dev` 及其路径。

## 你将获得

| Skill | 文件夹 | 用途 |
|---|---|---|
| `coding-start` | `skills/coding-start/` | Greenfield 项目初始化（0 → 1） |
| `project-onboard` | `skills/project-onboard/` | Brownfield 接管与 AS-IS 基线 |
| `feature-dev` | `skills/feature-dev/` | 单 Feature 生命周期（1 → N） |

每个 Skill 自包含：`SKILL.md` 是入口，`references/` 存放按需加载的详细规则，`assets/` 存放模板。

## 下一步

- [三个 Skill](./skills-overview) —— 各自的职责与触发条件。
- [工作流与门禁](./workflow) —— 一个 Feature 如何从想法走到 `DONE`。
