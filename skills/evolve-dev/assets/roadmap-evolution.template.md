# Roadmap Evolution Record

> One record per evolution wave, stored beside the Roadmap it evolved (for example `specs/EVO-<n>-<slug>.md`). Replace every placeholder, delete inapplicable sections, and never create an empty file. This record anchors what changed and why; `specs/ROADMAP.md` remains the only Feature ordering authority.

## Evolution Metadata

| Field | Value |
| --- | --- |
| Evolution ID | `EVO-<monotonic number>` |
| Wave Goal | `<one-sentence outcome this wave exists to achieve>` |
| Requested By | `<user/member>` |
| Planned By | `<member/session>` |
| Roadmap Decision Authority | `<named human, role, confirmation source>` |
| Gate | `ROADMAP EVOLUTION READY: PASS <date> / NOT_READY` |
| Record Revision | `<monotonic number or content hash>` |

## Baseline Snapshot

| Item | Evidence | Label |
| --- | --- | --- |
| Roadmap state before evolution | `<ref/commit + entry count and statuses>` | `<OBSERVED/DOCUMENTED/...>` |
| Active claims considered | `<STAGE/tracker rows checked>` | `<label>` |
| Debt or gaps motivating the wave | `<KNOWLEDGE_GAPS rows, if any>` | `<label>` |

## New Entries

| Feature ID | Title | Business Value | Priority | Dependencies | Relationship | Status |
| --- | --- | --- | --- | --- | --- | --- |
| `<F-xxx>` | `<title>` | `<value>` | `<P0/P1/...>` | `<IDs>` | `<extends/depends/replaces/independent>` | `DRAFT` |

## Priority Changes

| Feature ID | Previous Status/Priority | New Status/Priority | Reason | Authority Confirmation | Claim Check |
| --- | --- | --- | --- | --- | --- |
| `<F-xxx>` | `<previous>` | `<new>` | `<reason>` | `<name/source/date>` | `<unclaimed / NEEDS_CONFIRMATION + member>` |

## Macro-Baseline Deltas

| Artifact | Delta | Approval | Sync Status |
| --- | --- | --- | --- |
| `<docs/PRODUCT.md, ARCHITECTURE.md, ...>` | `<incremental fact added or amended>` | `<name/source/date>` | `<synced/pending>` |

## Out of Scope

- `<explicitly excluded candidate or capability>`

## Open Questions Carried Into DRAFT Specs

| Question | Blocking | Resolution trigger |
| --- | --- | --- |
| `<question>` | `YES/NO` | `<when/who resolves>` |

## NEXT Selection

| Feature ID | Selected | Rationale | Claiming Member | Authority Confirmation |
| --- | --- | --- | --- | --- |
| `<F-xxx>` | `YES/NO` | `<why first or why not>` | `<member or unclaimed>` | `<name/source/date>` |

## Handoff

| Field | Value |
| --- | --- |
| Result | `<Confirmed NEXT / BLOCKED_HANDOFF + EVOLUTION INCOMPLETE>` |
| Blocker (if any) | `<condition, owner, unblock condition>` |
| Resume Point | `<exact stage for the next member's feature-dev run>` |
