# 安装

Foundry 遵循标准 **Agent Skills** 格式：每个 Skill 是一个文件夹，包含 `SKILL.md`、`references/` 和 `assets/`。安装就是把三个 Skill 文件夹复制到你的智能体 skills 目录。

## 前置要求

- 支持 Agent Skills 格式的智能体（OpenCode、Claude Code 或兼容实现）。
- 本机已安装 `git`。

## 安装

克隆仓库，然后把三个 Skill 文件夹复制到 skills 目录。

**OpenCode / Claude 系智能体**会自动发现 `~/.agents/skills/` 和 `~/.claude/skills/` 中的 Skill。

### macOS / Linux

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
```

### Windows（PowerShell）

```powershell
git clone https://github.com/MaoyuanYang/foundry.git
Copy-Item -Recurse foundry\skills\coding-start    $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\project-onboard $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\feature-dev     $HOME\.agents\skills\
```

然后**重启智能体**，让它重新扫描 skills 目录。

## 验证

OpenCode 可运行：

```bash
opencode debug skill
```

应能看到 `coding-start`、`project-onboard`、`feature-dev` 及其路径。每个 Skill 也都符合 Agent Skills 规范（`name` + `description` frontmatter、小写连字符文件夹名）。

## 你将获得

| Skill | 文件夹 | 用途 |
|---|---|---|
| `coding-start` | `skills/coding-start/` | Greenfield 项目初始化（0 → 1） |
| `project-onboard` | `skills/project-onboard/` | Brownfield 接管与 AS-IS 基线 |
| `feature-dev` | `skills/feature-dev/` | 单 Feature 生命周期（1 → N） |

每个 Skill 自包含：

- `SKILL.md` —— 入口、触发条件与状态机。
- `references/` —— 在特定阶段按需加载的详细规则。
- `assets/` —— 该 Skill 生成文档所用的模板。
- `agents/openai.yaml` —— 宿主展示元数据。

## 更新

拉取最新并重新复制三个文件夹（它们自包含，整目录替换是安全的）：

```bash
cd foundry && git pull
cp -r skills/coding-start skills/project-onboard skills/feature-dev ~/.agents/skills/
```

更新**不会**触碰你的**项目**文件（`AGENTS.md`、`docs/`、`specs/`）——Foundry 只改变智能体的工作方式，不改变它已经产出的内容。

## 卸载

从 skills 目录移除三个文件夹并重启智能体：

```bash
rm -rf ~/.agents/skills/coding-start ~/.agents/skills/project-onboard ~/.agents/skills/feature-dev
```

## 下一步

- [三个 Skill](./skills-overview) —— 各自的职责与触发条件。
- [工作流与门禁](./workflow) —— 一个 Feature 如何从想法走到 `DONE`。
- [参考](./reference/glossary) —— 状态词汇表与模板对照表。
