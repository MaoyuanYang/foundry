# Maintenance Campaign Record

> One record per campaign, stored beside the Roadmap or per project convention (for example `specs/MAINT-<n>-<slug>.md`). Replace every placeholder, delete inapplicable sections, and never create an empty file. This record anchors scope, safety-net evidence, and verification; the Issue/work item remains the Work Status authority.

## Campaign Metadata

| Field | Value |
| --- | --- |
| Campaign ID | `MAINT-<monotonic number>` |
| Type | `REFACTOR | DEBT | UPGRADE | RETIRE` |
| Goal | `<one-sentence structural or retirement outcome>` |
| Invariant | `<behavior identical to baseline / approved retirement behavior>` |
| Work Item | `<tracker URL or STAGE_LOCAL:A-xxx>` |
| Branch | `<branch/worktree>` |
| Planned By | `<member/session>` |
| Record Revision | `<monotonic number or content hash>` |

## Baseline and Safety Net

| Surface | Baseline evidence | Kind | Coverage |
| --- | --- | --- | --- |
| `<API / CLI / UI flow / data / event>` | `<command + output, probe, or hash>` | `<Runtime / Tests / Contract / Hash>` | `<existing TS-* / new characterization test ID / gap>` |

`SAFETY NET READY`: `PASS <date + manifest link> / NOT_READY <blocker>`

## Retirement Plan (`RETIRE` only)

| Element | Value |
| --- | --- |
| Retired capability | `<precise boundary with evidence>` |
| Intended behavior change | `<exact post-retirement behavior>` |
| Authority confirmation | `<name/role, source, time, scope>` |
| Consumers | `<each with label and migration or breakage acceptance>` |
| Announcement | `<audience/channel/content or no-announcement justification>` |
| Rollback | `<reversal of the removal slice>` |

## Slices

| # | Slice | Touched surfaces | Regression scope | Status | Evidence |
| --- | --- | --- | --- | --- | --- |
| `1` | `<structural step>` | `<surfaces>` | `<TS-* or commands>` | `PLANNED / VERIFIED / ROLLED_BACK` | `<link>` |

## Upgrade Inventory (`UPGRADE` only)

| Item | From | To | Breaking class | Handling |
| --- | --- | --- | --- | --- |
| `<dependency>` | `<version>` | `<version>` | `<no impact / mechanical / behavioral / blocked>` | `<slice ref, authority acceptance, or deferral reason>` |

## Debt Rows (`DEBT` only)

| Debt ID | Description | Row status |
| --- | --- | --- |
| `<D-xxx>` | `<register entry>` | `RESOLVED <evidence link> / DEFERRED <reason>` |

## Campaign Verification

| Check | Result | Evidence |
| --- | --- | --- |
| Full regression scope on final state | `PASS / FAIL` | `<commands + outputs>` |
| Baseline comparison across touched surfaces | `<identical / approved delta only>` | `<link>` |
| Integration protocol rerun | `PASS / N/A - no concurrent items` | `<link>` |

`BEHAVIOR PRESERVED`: `PASS <date> / NOT_READY <gap>`

## Findings and Review

| ID | Severity | Description | Resolution |
| --- | --- | --- | --- |
| `<F-01>` | `Critical/High/Medium/Low` | `<finding>` | `<fixed / waived with authority + residual risk / open>` |

## DONE Checklist

Before `DONE Status: PASS`, all 10 rows below are required:

| # | Item | Status |
| --- | --- | --- |
| MN-01 | `SAFETY NET READY` recorded `PASS` against the final scope manifest | `<status>` |
| MN-02 | Every slice verified and recorded; no unverified slice is merged | `<status>` |
| MN-03 | `BEHAVIOR PRESERVED` recorded `PASS` for the whole campaign | `<status>` |
| MN-04 | No unapproved observable behavior change (or exactly the approved retirement delta) | `<status>` |
| MN-05 | No Critical finding open; every High waiver has authority rationale and residual risk | `<status>` |
| MN-06 | Rollback path recorded and valid for the final state | `<status>` |
| MN-07 | Documentation synchronized; debt rows or register updated with evidence | `<status>` |
| MN-08 | Discovered scopes recorded as candidate work items, not absorbed | `<status>` |
| MN-09 | L3 decisions (if any) have an implementation-authorizing ADR | `<status>` |
| MN-10 | Delivery evidence recorded per the project DoD (PR/delivery record link) | `<status>` |
