---
title: 安装
---

# 安装

Foundry 遵循标准 **Agent Skills** 格式:每个 Skill 是一个包含 `SKILL.md`、`references/`
和 `assets/` 的文件夹。安装意味着把三个 Skill 文件夹复制进你的智能体技能目录。

## 前置条件

- 支持 Agent Skills 格式的智能体(OpenCode、Claude Code 或兼容者)。
- 机器上装有 `git`。

## 安装

克隆仓库,然后把三个 Skill 文件夹复制进你的技能目录。

**OpenCode / Claude 类智能体**会自动发现 `~/.agents/skills/` 和 `~/.claude/skills/`
中的技能。

### macOS / Linux

```bash
git clone https://github.com/MaoyuanYang/foundry.git
cp -r foundry/skills/coding-start      ~/.agents/skills/
cp -r foundry/skills/project-onboard   ~/.agents/skills/
cp -r foundry/skills/feature-dev       ~/.agents/skills/
```

### Windows (PowerShell)

```powershell
git clone https://github.com/MaoyuanYang/foundry.git
Copy-Item -Recurse foundry\skills\coding-start    $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\project-onboard $HOME\.agents\skills\
Copy-Item -Recurse foundry\skills\feature-dev     $HOME\.agents\skills\
```

然后**重启你的智能体**,让它重新扫描技能目录。

## 验证

对 OpenCode 运行:

```bash
opencode debug skill
```

你应该能看到 `coding-start`、`project-onboard` 和 `feature-dev` 及其位置。每个
Skill 也符合 Agent Skills 模式(`name` + `description` frontmatter、小写连字符文件夹名)。

## 你会得到什么

| Skill | 文件夹 | 用途 |
|---|---|---|
| `coding-start` | `skills/coding-start/` | Greenfield 项目文档、Roadmap、草稿 Spec |
| `project-onboard` | `skills/project-onboard/` | Brownfield 恢复:验证基线、AS-IS 文档 |
| `feature-dev` | `skills/feature-dev/` | 单项开发工作:Spec → 测试 → 代码 → 文档 |

每个 Skill 都是自包含的:

- `SKILL.md` —— 入口:何时使用以及运行的工作流。
- `references/` —— 按需加载的方法说明(访谈、测试)。
- `assets/` —— Skill 生成文档所用的模板。
- `agents/openai.yaml` —— 宿主显示元数据。

## 更新

拉取最新代码并重新复制三个文件夹(它们是自包含的,直接替换文件夹是安全的):

```bash
cd foundry && git pull
cp -r skills/coding-start skills/project-onboard skills/feature-dev ~/.agents/skills/
```

如果你安装过旧版 Foundry(包含 `evolve-dev` 或 `maintenance-dev`),请删除这两个
文件夹 —— 残留的 Skill 会继续被触发,并与现已覆盖这类工作的 `feature-dev` 冲突:

```bash
rm -rf ~/.agents/skills/evolve-dev ~/.agents/skills/maintenance-dev
```

你的**项目**文件(`README.md`、`docs/`、`specs/`)不会被更新触碰 —— Foundry 只改变
智能体的工作方式,不改变它已经产出的内容。

## 卸载

从技能目录移除三个文件夹并重启智能体:

```bash
rm -rf ~/.agents/skills/coding-start ~/.agents/skills/project-onboard ~/.agents/skills/feature-dev
```

## 下一步

- [工作流](../workflow) —— 工作如何从想法走向已验证的代码。
- Skill 页面:[coding-start](./coding-start/)、[project-onboard](./project-onboard/)、
  [feature-dev](./feature-dev/)。
