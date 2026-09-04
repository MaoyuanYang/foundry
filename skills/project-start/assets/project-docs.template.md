# Project Document Templates

Each section below is one file. Guidance appears in `<angle brackets>` — replace it with
real content and delete sections or whole files that genuinely do not apply. Never ship a
document that still contains template guidance.

<!-- ==================================================================== -->
<!-- File: README.md                                                      -->
<!-- ==================================================================== -->

# <Project Name>

<One paragraph: what this project is, who it is for, and the problem it solves.>

## Getting Started

<Prerequisites, installation, and how to run the project locally.>

## Key Commands

| Command | Purpose |
| --------------- | ----------------------- |
| `<command>`     | <run / build / test>    |

## Documentation

- [Product definition](docs/PRODUCT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Testing](docs/TESTING.md)
- <conditional: [Database](docs/DATABASE.md) / [API](docs/API.md) / [Frontend](docs/FRONTEND.md)>

<!-- ==================================================================== -->
<!-- File: docs/PRODUCT.md                                                -->
<!-- ==================================================================== -->

# PRODUCT

## Goal

<The problem this product solves and why it matters.>

## Target Users

<Who uses it and in what situation.>

## Core Use Cases

<The few flows the product must support. Favor the 20% that delivers the value.>

## Scope

<What is in scope for the current stage.>

## Out of Scope

<Explicitly excluded for now — this section protects the project from drift.>

## Success Criteria

<How to tell the product works. Prefer verifiable statements.>

<!-- ==================================================================== -->
<!-- File: docs/ARCHITECTURE.md                                           -->
<!-- ==================================================================== -->

# ARCHITECTURE

## System Overview

<One paragraph on the shape of the system. Add a simple diagram if it helps.>

## Modules

<Major components and the responsibility of each.>

## Data Flow

<How data moves through the system for the main use cases.>

## External Dependencies

<Libraries, services, and APIs the system relies on, and why.>

## Deployment

<Where and how the system runs.>

## Key Technical Decisions

<Important choices, the reason for each, and the alternative that was considered.>

<!-- ==================================================================== -->
<!-- File: docs/TESTING.md                                                -->
<!-- ==================================================================== -->

# TESTING

## Testing Strategy

<Which risks testing targets and the overall approach.>

## Test Levels

<Which levels exist (unit, integration, end-to-end) and what belongs at each.>

## Test Environment

<What tests may assume: database, network, fixtures, seeds.>

## Key Commands

<How to run each level of tests.>

<!-- ==================================================================== -->
<!-- File: docs/DATABASE.md                                               -->
<!-- Create only when the product persists data.                          -->
<!-- ==================================================================== -->

# DATABASE

## Engine

<Choice and reason.>

## Schema Overview

<Main entities and their relationships.>

## Migrations

<How schema changes are made and applied.>

## Conventions

<Naming, nullability, and deletion/retention rules worth knowing.>

<!-- ==================================================================== -->
<!-- File: docs/API.md                                                    -->
<!-- Create only when the product exposes an API.                         -->
<!-- ==================================================================== -->

# API

## Style

<REST / RPC / GraphQL, and versioning approach.>

## Conventions

<Authentication, pagination, and error response format.>

## Endpoints

<The API surface, briefly.>

<!-- ==================================================================== -->
<!-- File: docs/FRONTEND.md                                               -->
<!-- Create only when the product has a UI.                               -->
<!-- ==================================================================== -->

# FRONTEND

## Stack

<Framework and key UI libraries.>

## Structure

<How the UI code is organized.>

## State and Data

<Where state lives and how the UI talks to the backend.>

## Conventions

<Routing, forms, and error-display patterns to follow.>
