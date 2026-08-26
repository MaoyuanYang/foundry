# feature-dev — UX / UI (UI READY)

For Features that touch a user interface, coding never starts directly from the Spec. The order is: **Spec → User Flow → UI States → Frontend/Backend Contract → UI READY → Test Design → Implementation.** First decide what task the user is completing, then what the screens look like — never start from button colors, radii, or shadows.

During this branch, `STAGE.md` uses `UI_REFINEMENT` and adds only a link/revision projection after the authoritative Gate or skip-decision record exists.

## UI Detection

Answer after `SPEC READY`. Any YES normally means `UI Impact: YES`:

1. Does it change the user's task path, entry, or exit?
2. Does it add or change a page, component responsibility, navigation, form, or visible state?
3. Does it change Loading, Empty, Error, Success, permission, or validation feedback?
4. Does it change responsive behavior, accessibility, product copy, visual tokens, or Design System components?
5. Does a backend change alter frontend error mapping, retry, pagination, optimistic updates, or rollback?

If all are NO, record the deciding Spec revision and `UI READY: SKIPPED (N/A)` — a complete skip decision (evidence, validation time, authority, approval source and scope), not a passed gate.

## UX Flow

Define: where the user enters, their goal, the action path, screen changes, the success exit, and what happens on failure, interruption, Cancel, Back, Retry, and Permission Denied.

## UI State Design

For each relevant page/component, judge which states apply — never fill them mechanically, and never design only the Happy Path:

```text
Initial · Loading · Loaded · Empty · Submitting · Success · Error ·
Disabled · Unauthorized · Forbidden · Offline · Partial Failure
```

### UI State Matrix (example)

| State | Trigger | Visible UI | Allowed Action | Data/API | Recovery/Next |
|---|---|---|---|---|---|
| Loading | Entry or refresh | Skeleton/progress | Wait/cancel | Request in flight | Success or error |
| Empty | Success with no data | Empty state | Create/refresh | Empty result | Next task |
| Error | Request or business failure | Understandable error | Retry/back | Error code | Recovery path |
| Success | Operation succeeds | Confirmation and result | Continue | Submitted | Explicit exit |

## Frontend / Backend Contract

Define Request, Response, Validation, Authentication, Pagination, Loading, Retry, Optimistic Update, and Rollback. Every user-visible backend error must map to frontend behavior:

```text
backend code/status → user-visible message/state → enabled action → recovery
```

Errors must not all collapse into a vague Toast, and sensitive internal information must not be shown. Client validation never replaces server constraints; define field/global errors, focus management, and duplicate-submit protection.

## Responsive & Accessibility

Describe verifiable behavior — never just "supports responsive/accessibility." Cover information priority, layout changes, overflow, touch targets, keyboard operation at target breakpoints; and semantic structure, labels, focus order/restoration, error association, ARIA, contrast, live announcements, reduced motion.

## Design System check

Inventory existing tokens, Buttons, Inputs, Forms, Cards, Modals, Tables, Toasts, Loading, and Empty/Error states first. Prefer reuse; if something is missing, choose between Feature-local composition and extending the Design System. Never duplicate near-equivalent components or create an isolated visual language.

## UI READY checklist

Applies only when `UI Impact: YES`. `PASS` requires every item `YES`, plus the complete upstream manifest, UX/UI revision, validation time, and Decision Authority approval source and scope:

1. User Goal, Entry, Exit, and the complete User Flow are explicit.
2. Each affected Page/Screen/Component has an explicit responsibility.
3. The UI State Matrix covers applicable Loading/Empty/Error/Success and other states.
4. Permission, validation, duplicate submit, cancel, back, and recovery behavior are explicit.
5. The Frontend/Backend contract and error mapping are explicit.
6. Responsive behavior is verifiable.
7. Accessibility behavior is verifiable.
8. Existing components and the Design System were checked, with an explicit reuse/extension decision.
9. UI Acceptance is in the Spec or explicitly linked to `AC-*`.
10. No Critical UI Open Question is `OPEN` or `DEFERRED`.

A UI proposal that changes approved business requirements must get Decision Authority confirmation, return to Spec Refinement, and mark affected gates/plan `STALE` — it must not bypass `SPEC READY` by editing only the UX/UI document.
