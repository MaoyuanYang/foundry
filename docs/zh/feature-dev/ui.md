# feature-dev —— UX / UI（UI READY）

对触及用户界面的 Feature，绝不从 Spec 直接开始写代码。顺序是：**Spec → User Flow → UI States → 前后端契约 → UI READY → Test Design → 实现。**先确定用户要完成什么任务，再决定页面长什么样——绝不从按钮颜色、圆角、阴影开始。

此分支期间，`STAGE.md` 使用 `UI_REFINEMENT`；只有权威 Gate 或跳过决策记录存在后，才添加其链接/revision 投影。

## UI 检测

在 `SPEC READY` 后回答。任一为 YES 通常意味着 `UI Impact: YES`：

1. 是否改变用户的任务路径、入口或出口？
2. 是否新增/改变页面、组件职责、导航、表单或可见状态？
3. 是否改变 Loading、Empty、Error、Success、权限或校验反馈？
4. 是否改变响应式行为、可访问性、产品文案、视觉 token 或 Design System 组件？
5. 后端变更是否改变前端错误映射、重试、分页、乐观更新或回滚？

全部为 NO 时，记录决定的 Spec revision 与 `UI READY: SKIPPED (N/A)`——这是一份完整的跳过决定（证据、验证时间、权限、批准来源和范围），不是通过的门禁。

## UX Flow

定义：用户从哪进入、目标是什么、操作路径、页面变化、成功出口，以及失败、中断、Cancel、Back、Retry、Permission Denied 时怎么办。

## UI 状态设计

对每个相关页面/组件判断哪些状态适用——绝不机械填满，也绝不只设计 Happy Path：

```text
Initial · Loading · Loaded · Empty · Submitting · Success · Error ·
Disabled · Unauthorized · Forbidden · Offline · Partial Failure
```

### UI 状态矩阵（示例）

| 状态 | 触发 | 可见 UI | 允许操作 | Data/API | 恢复/下一步 |
|---|---|---|---|---|---|
| Loading | 进入或刷新 | 骨架屏/进度 | 等待/取消 | 请求进行中 | 成功或错误 |
| Empty | 成功但无数据 | 空状态 | 创建/刷新 | 空结果 | 下一任务 |
| Error | 请求或业务失败 | 可理解的错误 | 重试/返回 | 错误码 | 恢复路径 |
| Success | 操作成功 | 确认与结果 | 继续 | 已提交 | 明确出口 |

## 前后端契约

定义 Request、Response、Validation、Authentication、Pagination、Loading、Retry、Optimistic Update、Rollback。每个用户可见的后端错误都必须映射到前端行为：

```text
后端 code/status → 用户可见的 message/状态 → 可用操作 → 恢复
```

错误不能全部塌缩成模糊的 Toast，也不得暴露敏感内部信息。客户端校验绝不替代服务端约束；需定义字段/全局错误、焦点管理与防重复提交。

## 响应式与可访问性

描述可验证的行为——绝不只写"支持响应式/可访问性"。覆盖目标断点下的信息优先级、布局变化、溢出、触控目标、键盘操作；以及语义结构、标签、焦点顺序/恢复、错误关联、ARIA、对比度、实时播报、减少动效。

## Design System 检查

先盘点既有 tokens、Buttons、Inputs、Forms、Cards、Modals、Tables、Toasts、Loading 与 Empty/Error 状态。优先复用；若缺失，在 Feature 内组合与扩展 Design System 之间做选择。绝不复制近似等价的组件，也不创造孤立的视觉语言。

## UI READY 清单

仅当 `UI Impact: YES` 适用。`PASS` 要求每项 `YES`，并附完整上游清单、UX/UI revision、验证时间与 Decision Authority 批准来源和范围：

1. User Goal、Entry、Exit 与完整 User Flow 明确。
2. 每个受影响的 Page/Screen/Component 有明确职责。
3. UI 状态矩阵覆盖适用的 Loading/Empty/Error/Success 与其他状态。
4. 权限、校验、防重复提交、取消、返回与恢复行为明确。
5. 前后端契约与错误映射明确。
6. 响应式行为可验证。
7. 可访问性行为可验证。
8. 已检查既有组件与 Design System，并有明确的复用/扩展决定。
9. UI Acceptance 在 Spec 中，或明确链接到 `AC-*`。
10. 没有 Critical UI Open Question 处于 `OPEN` 或 `DEFERRED`。

若某个 UI 提案改变了已批准的业务需求，必须获得 Decision Authority 确认、回到 Spec 精化，并把受影响门禁/计划标记为 `STALE`——绝不能只改 UX/UI 文档就绕过 `SPEC READY`。
