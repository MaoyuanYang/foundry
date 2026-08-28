# 语言策略

Foundry 内置一套默认语言策略：既保持工程产物的一致性，又让产品内容服从产品需求。

## 三个维度

```text
documentation_language = en
engineering_language   = en
product_content_language = <由产品需求推导>
```

| 维度 | 管辖范围 | 默认值 |
|---|---|---|
| **文档语言（Documentation）** | 正式产物正文：README、STAGE、AGENTS、项目文档、Roadmap、ADR、Spec、Baseline/Knowledge Gap 报告、Test Design、Plan、Review、DONE 记录、交付记录 | `en` |
| **工程语言（Engineering）** | 新建类/方法/变量/包/模块名、数据库表/列、API 路径/定义、配置键（不含任意值）、环境变量、基础设施名、分支名、提交信息、Issue/PR 标题与描述、代码注释、可执行测试名/描述、面向开发者的日志 | `en` |
| **产品内容语言（Product Content）** | 面向用户的文案与本地化值 | **无默认** —— 由产品需求推导 |

产品内容语言记录为实际 BCP-47 值；相关表面未解决时记 `UNKNOWN - <resolution action>`；确认范围内无用户可见内容时记 `N/A - no product-content surface`。

## 产品文案例外

一个面向中文用户的应用，即便工程产物是英文，也依然交付中文界面文案。周围的正式正文仍归文档语言；测试名、断言代码与工程文本仍归工程语言——即使它们引用了精确的产品字符串。

- 本地化资源/配置值、明确标注的精确产品文案、精确文案断言**可以**使用产品内容语言。
- 该例外绝不渗漏到标识符、API、数据库名、配置键、基础设施、注释、测试或日志。

## 覆盖需权限

对任一维度的覆盖，都必须**由有权管理项目语言策略的命名权限明确请求并批准**。发起者不自动拥有该权限。单人维护者**可以**担任该权限角色并批准自己的明确覆盖请求，但同样要记录请求来源、批准来源、日期与范围。每次覆盖记录请求、权限、批准来源、范围与受影响产物，并持久化到 `AGENTS.md`。

## 契约的存放位置

每个 skill 只保留一份完整的规范契约，其余文件只做链接：`coding-start` 放在 `references/language-policy.md`，`project-onboard` 与 `feature-dev` 放在各自 `SKILL.md` 的 Language Policy 一节。三份副本的共享 Core 逐字节一致（由 `npm run skills:verify` 校验），因此每个 skill 仍可独立安装。

## 各 Skill 如何执行

**coding-start** 在 Discovery 中记录三个维度，在 Macro Readiness 与 Self Review 中强制执行，并把策略持久化到生成的 `AGENTS.md`。

**project-onboard** 在写盘前检测每个表面的既有语言，然后：

- 保留既有标识符与已确立的产品内容。**绝不批量翻译**注释、文档、标识符或产品内容。
- 混合语言仓库中，**新**正式产物与工程表面使用英文默认。
- `AGENTS.md` 中的非英文文档/工程规则视为 `CONFLICT` + `STOP`，直至命名权限解决——除非它已是有效的、被采纳的 scoped 覆盖（则保留）。
- 若对既有非英文文档的必需更新会造成混排或强制翻译，记 `CONFLICT` + `STOP`。
- 把已解决策略持久化到每个作用域唯一的权威 `AGENTS.md` 位置。

**feature-dev** 从适用的 `AGENTS.md` 继承策略，绝不自行选择语言：

- 维度缺失时，提议 `en` 默认并 `STOP`，等待命名 Maintainer 采纳并持久化——不静默兜底。
- 嵌套 `AGENTS.md` 中有效的 scoped 覆盖，在其作用域内生效。
- 策略缺失、冲突或未持久化都是 STOP 条件。

## 对话语言

与用户的对话可以跟随用户的语言。对话语言**绝不**覆盖任何产物语言维度。
