# AS-IS Project Document Templates

Same document set as `coding-start`, written to describe the system as it actually is.
Mark statements whose reliability matters with **Observed** (verified from code, tests,
or a successful run), **Inferred** (best reading of the code, not verified), or
**Unknown** (cannot be determined from the repository). Delete sections or files that do
not apply, and never ship template guidance.

<!-- ==================================================================== -->
<!-- File: README.md (repair in place)                                    -->
<!-- ==================================================================== -->

# <Project Name>

<One paragraph: what this project is, who it is for, and the problem it solves — as the
code shows, not as old marketing copy claims.>

## Getting Started

<Installation and how to run locally — steps a fresh checkout can actually follow.>

## Key Commands

| Command | Purpose |
| --------------- | ----------------------- |
| `<command>`     | <run / build / test>    |

## Documentation

- [Product definition](docs/PRODUCT.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Testing](docs/TESTING.md)
- [Onboarding notes](docs/ONBOARDING.md)
- <conditional: [Database](docs/DATABASE.md) / [API](docs/API.md) / [Frontend](docs/FRONTEND.md)>

<!-- ==================================================================== -->
<!-- File: docs/PRODUCT.md                                                -->
<!-- ==================================================================== -->

# PRODUCT

## What the System Does

<Evident purpose and users, from features that actually exist.>

## Implemented Capabilities

<The behaviors the code demonstrably supports. Mark Inferred where reading between
lines.>

## Evident Limitations

<What the system clearly does not do.>

## Open Questions about Intent

<Why-questions the code cannot answer, taken to the user.>

<!-- ==================================================================== -->
<!-- File: docs/ARCHITECTURE.md                                           -->
<!-- ==================================================================== -->

# ARCHITECTURE

## System Overview

<One paragraph on the actual shape of the system.>

## Modules

<Major components as found in the code and their responsibilities.>

## Data Flow

<How data actually moves for the main use cases.>

## External Dependencies

<Libraries, services, and APIs in use, from manifests and code.>

## Deployment

<How the system evidently runs (scripts, configs, CI).>

## Key Technical Decisions

<Decisions visible in the code, and what they imply. Mark Inferred.>

<!-- ==================================================================== -->
<!-- File: docs/TESTING.md                                                -->
<!-- ==================================================================== -->

# TESTING

## Current State

<What test coverage exists, and its current pass/fail status.>

## Test Levels

<Which levels exist and what they actually cover.>

## Test Environment

<What tests assume: database, network, fixtures.>

## Key Commands

<How to run each level of tests.>

<!-- ==================================================================== -->
<!-- File: docs/DATABASE.md                                               -->
<!-- Create only when the system persists data.                           -->
<!-- ==================================================================== -->

# DATABASE

## Engine

<What is actually used.>

## Schema Overview

<Main entities and relationships, from migrations and models.>

## Migrations

<How schema changes are actually made.>

## Conventions

<Naming, nullability, deletion/retention rules as observed.>

<!-- ==================================================================== -->
<!-- File: docs/API.md                                                    -->
<!-- Create only when the system exposes an API.                          -->
<!-- ==================================================================== -->

# API

## Style

<As implemented.>

## Conventions

<Authentication, pagination, error format — from the code.>

## Endpoints

<The surface that actually exists.>

<!-- ==================================================================== -->
<!-- File: docs/FRONTEND.md                                               -->
<!-- Create only when the system has a UI.                                -->
<!-- ==================================================================== -->

# FRONTEND

## Stack

<Framework and libraries actually in use.>

## Structure

<How the UI code is organized.>

## State and Data

<Where state lives and how the UI talks to the backend.>

## Conventions

<Routing, forms, and error-display patterns actually followed.>
