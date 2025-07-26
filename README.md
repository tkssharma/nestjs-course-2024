# 🧱 Mastering NestJS – A Comprehensive Hands-on Guide

![NestJS Logo](./nestjs.png)

Welcome to the **Mastering NestJS** course repository. This course covers everything from the basics of NestJS and its core concepts to advanced integrations like database ORMs, authentication, and real-world project setups.

---

## 📚 Course Modules Overview

## 📆 Course Schedule

| Module | Title                                        | Topics Covered                                               |
| ------ | -------------------------------------------- | ------------------------------------------------------------ |
| 00     | **Introduction**                             | Why NestJS, Architecture, Decorators, Integrations           |
| 01     | **Controllers & Services**                   | NestJS building blocks, CRUD APIs, Task module               |
| 02     | **Validation & Pipes**                       | `ValidationPipe`, DTOs, error handling                       |
| 03     | **Exception Filters & Middleware**           | Filters, Middleware, Guards, Interceptors, Custom Decorators |
| 04     | **Demo App with All Concepts**               | Student CRUD APIs, in-memory DB, Swagger, Modular Code       |
| 05     | **Persistence with TypeORM**                 | PostgreSQL setup with Docker, Entities, Repositories         |
| 06     | **Other ORMs and Migrations**                | Prisma, Sequelize, Mongoose overview                         |
| 07     | **Real APIs with Prisma/Mongoose/Sequelize** | Food Delivery APIs using various ORMs                        |
| 08     | **Authentication & Authorization**           | Cookie, Session, JWT-based auth, Guards, Passport.js         |
| 09     | **Database Relationships**                   | One-to-Many, Many-to-Many with TypeORM                       |

---

## 🚀 Advanced Topics

| Module | Title                               | Topics Covered                                                                                     |
| ------ | ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| 10     | **NestJS Testing**                  | Unit testing services, controllers, e2e tests using `@nestjs/testing`, mocking dependencies        |
| 11     | **NestJS Microservices**            | Message-based architecture, TCP transport, Redis/NATS brokers, request-response, pub/sub patterns  |
| 12     | **NestJS Microservices Demo**       | Real-world microservice setup, producer/consumer model, distributed task runner                    |
| 13     | **NestJS with GraphQL**             | Introduction to GraphQL, code-first and schema-first, resolvers, queries, mutations, subscriptions |
| 14     | **NestJS with External Interfaces** | Calling third-party APIs, Axios, SOAP, REST integrations, retry strategies, circuit breakers       |
| 15     | **NestJS in a Monorepo**            | Managing multiple apps/libs with Turborepo, PNPM workspaces, shared modules, CI/CD setup           |
| 16     | **NestJS Advanced Concepts**        | Reflection, metadata, custom modules, dynamic modules, lifecycle hooks, context-based providers    |

---

### 📦 00 - Introduction to NestJS

- Why choose NestJS over Express?
- Understanding NestJS architecture (IOC, DI, Decorators)
- Getting started with TypeScript
- Exploring NestJS integrations

---

### 🧱 01 - Controllers and Services (Building Blocks)

- Installing Node.js and Yarn
- Setting up the NestJS CLI
- (Optional) Setting up VSCode + Extensions
- Creating the project with CLI
- Understanding Modules, Controllers, and Services
- Implementing a Tasks Module:
  - Tasks Controller
  - Tasks Service
  - Task Model & DTOs
- CRUD APIs for Tasks
- Task Filtering and Searching

---

### 🔍 02 - Validation and Pipes

- Using `ValidationPipe` for CreateTask DTO
- Handling Errors (e.g., deleting non-existing tasks)
- Updating Task Status with Validation
- Challenge: Validate Task Filtering/Search Inputs

---

### ⚙️ 03 - Exception Filters, Middleware, and Core Concepts

- Full CRUD API with Tasks
- Deep dive into:
  - Controllers / Providers / Modules
  - Middleware (creating, applying, excluding routes)
  - Exception Filters
  - Pipes and Guards
  - Interceptors
  - Custom Decorators

---

### 🚀 04 - Applying All Learnings in a Demo App

- Build Student Management APIs
- Use In-Memory DB for simplicity
- Full CRUD with Swagger Specs
- DTO-based payload validation
- Token-based Mock Auth APIs
- Apply Guards, Middleware, and Exception Filters
- Understand DAO & Service Layers
- Real-world Code Structure
- API Testing with Swagger and REST Clients
- Modularization and DI framework exploration

---

### 🗄️ 05 - Data Store with TypeORM

- Intro to Persistence Layer
- Setting up PostgreSQL with Docker
- Using pgAdmin to manage DB
- Intro to TypeORM:
  - Connecting to DB
  - Task Entity & Repository
  - Active Record vs Data Mapper
- CRUD Operations with TypeORM
- Challenge Exercises with Solutions

---

### 🔁 06 - Exploring Other ORMs and Migrations

- Brief Introduction to:
  - Prisma
  - Sequelize
  - Mongoose
  - TypeORM
- Compare approaches and syntax

---

### 🧬 07 - Real-World API with Prisma / Mongoose / Sequelize

- Building Food Delivery APIs using:
  - Prisma with Migrations
  - MongoDB + Mongoose
  - Sequelize for SQL databases
- Prisma Schema & Client API
- Modular Services and Controllers with ORM

---

### 🔐 08 - Authentication & Authorization in NestJS

- Types of Auth:
  - Cookies
  - Sessions
  - JWT (Token-based)
- Setup `AuthModule`
- Create User Entity + Repository
- Signup Flow:
  - Validation
  - Password Strength
  - Conflict/Error Handling
  - Password Hashing with Bcrypt
- Sign In:
  - Implementing Passport.js + JWT Strategy
  - JWT Token generation + validation
  - Route Guards + Custom Decorators

---

### 🧩 09 - Database Relationships with TypeORM

- Expand Food Delivery App with Relationships
- Define `OneToMany`, `ManyToOne`, `ManyToMany`
- NestJS APIs to interact with related tables
- Combine with Auth, Middleware, Guards, Filters, and Interceptors

---

## 🛠️ Requirements

- Node.js v18+
- Yarn or npm
- NestJS CLI
- Docker (for database sections)
- pgAdmin (optional)

---

## ▶️ Running the App

```bash
# Install dependencies
yarn install

# Start the app
yarn start:dev
```

## 🧠 Learning Outcomes

- By the end of this course, you will:
- Understand NestJS core building blocks and architecture
- Be proficient in creating REST & GraphQL APIs
- Integrate multiple ORMs and databases
- Build real-world microservices with messaging and events
- Apply advanced patterns like Monorepo, Shared Modules, and Testing
- Secure APIs with authentication and authorization
- Handle middleware, guards, interceptors, filters professionally
