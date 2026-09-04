# Feature Spec Template

<!-- ==================================================================== -->
<!-- File: specs/F<nnn>-<slug>.md                                         -->
<!--                                                                      -->
<!-- Fill each section from the request, the repository, and sound        -->
<!-- judgment; record unresolved user-owned questions as Open Questions.  -->
<!-- Delete sections that do not apply to this feature.                   -->
<!-- ==================================================================== -->

# Feature: <Name>

## Goal

<The problem this feature solves. One or two sentences.>

## Background

<Relevant context: existing behavior, related project documents, prior decisions.>

## User Flow

<How a user or caller uses the feature, step by step.>

## Requirements

<The behaviors to implement, stated observably.>

## Business Rules

<Important rules and constraints that govern the behavior.>

## Edge Cases

<Failure, boundary, and unusual situations, and how each is handled.>

## UI / UX

<Only for features with UI impact. Delete otherwise.>

## API / Data Changes

<Only when the feature changes interfaces or persisted data. Delete otherwise.>

## Acceptance Criteria

<Clear, verifiable completion criteria. Each criterion should be testable; together they
are the source for the Test Plan.>

- [ ] <criterion 1>
- [ ] <criterion 2>

## Implementation Plan

<Small, verifiable implementation steps. Prefer vertical slices — each step produces a
working, testable behavior — over layer-by-layer work (all entities, then all
repositories, then all services). Update this plan when implementation reveals a
better split.>

### Step 1: <Name>

- **Goal:** <what this step achieves>
- **Scope:** <what it touches>
- **Tests:** <which tests cover it>
- **Verification:** <how to see it working>

### Step 2: <Name>

- **Goal:**
- **Scope:**
- **Tests:**
- **Verification:**

## Test Plan

<How the acceptance criteria are verified: test scenarios, levels, and commands. Derive
scenarios from the criteria above.>

## Open Questions

<Unresolved user-owned questions — behavior, business rules, success criteria,
constraints — that the request and repository could not answer. Resolve them with the
user before or during implementation; delete each once answered.>

- <question 1>
