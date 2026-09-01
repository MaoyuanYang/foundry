# evolve-dev —— 生命周期与门禁

演进生命周期把 Greenfield Discovery 适配到有基线的仓库：同样的自适应访谈，锚点从"空白画布"换成"既有证据"。

## 证据先行

| 来源 | 回答什么 |
|---|---|
| `specs/ROADMAP.md` | 当前条目、状态、依赖、已交付历史 |
| 已交付 Spec 与交付记录 | 每个 `DONE` 项实际确立了什么；遗留 Open Questions |
| 根 `STAGE.md` | 活跃认领、阻塞、交接（每个链接权威先验证再用） |
| 债务表（`KNOWLEDGE_GAPS.md`） | 可能驱动或约束本波次的已记录技术债 |
| 规范文档差异 | 波次会触及哪些基线事实 |

仓库已能回答的论断**不得**变成用户问题。Roadmap 与用户表述矛盾时，用证据标签暴露冲突；绝不静默偏向任何一方。

## 访谈输出

| 主题 | 状态 | 当前理解 | 挑战 / 证据 | 影响 / 下一步 |
| --- | --- | --- | --- | --- |
| `<主题>` | `CONFIRMED/RECOMMENDED/UNKNOWN` | `<值>` | `<原因>` | `<影响>` |

`UNKNOWN` 标注 `BLOCKING` 或 `NON_BLOCKING`；冲突答案要暴露，绝不覆盖。

## 分支优先级

```text
波次目标与业务价值
  -> 用户与本增量的成功标准
  -> 与既有 Feature 的关系（扩展 / 依赖 / 取代 / 独立）
  -> 范围边界与 Out of Scope
  -> 波次触及的关键规则、数据、契约
  -> 对既有条目的优先级影响
  -> 宏观基线差异
```

## "取代"语义

取代已交付能力的候选，在本 Skill 中只记录关系：Roadmap 条目标注意图方向，已交付项保留历史，退役（公告、消费者迁移、移除）在取代 Feature 交付之后由 `maintenance-dev` 执行。本 Skill 绝不删除、隐藏或降级已交付条目。

## Challenge Pass

波次综合之后做一轮反驳：波次必要性、增量可减性（还能砍掉什么）、反例与失败路径、权限与事实来源、成功可证伪性、复杂度证据。每项记 `RETAINED / REVISED / REJECTED`。出现新的阻塞性未知回到访谈。修订后的综合需要 Roadmap Decision Authority 显式确认；沉默不是确认。Challenge 绝不下探到 DTO、schema 字段或实现任务。

## `ROADMAP EVOLUTION READY`

11 项清单全部满足才 PASS：

1. 波次目标、业务价值、成功标准为 `CONFIRMED`。
2. 每个候选 Feature 都是业务价值垂直切片，有稳定新 ID。
3. 每个条目与既有 Feature 的关系明确（扩展、依赖、取代、独立）。
4. 依赖方向相对既有 `NEXT` 与 `DONE` 项可行。
5. 对既有条目的优先级变更已枚举并经具名 Roadmap Decision Authority 确认。
6. 他人认领的条目记 `NEEDS_CONFIRMATION`，未改写。
7. 波次的 Out of Scope 明确，被减内容可见。
8. 宏观基线差异已枚举、增量、经权限批准；没有重定位藏在差异里。
9. 触及的关键规则、数据、契约有事实状态。
10. 语言维度从 `AGENTS.md` 链解析；新标识符遵循解析出的工程语言。
11. Challenge Pass 完成且有结论，修订后的综合有 Roadmap Decision Authority 显式确认。

任一项不满足记 `NOT_READY` 并回到访谈。门禁与其他 Foundry 门禁一样记录输入清单、验证时间和权限批准来源。
