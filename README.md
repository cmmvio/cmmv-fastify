<p align="center">
  <a href="https://cmmv.io/" target="blank"><img src="https://raw.githubusercontent.com/andrehrferreira/docs.cmmv.io/main/public/assets/logo_CMMV2_icon.png" width="300" alt="CMMV Logo" /></a>
</p>
<p align="center">Contract-Model-Model-View (CMMV) <br/> Building scalable and modular applications using contracts.</p>
<p align="center">
    <a href="https://www.npmjs.com/package/@cmmv/fastify"><img src="https://img.shields.io/npm/v/@cmmv/fastify.svg" alt="NPM Version" /></a>
    <a href="https://github.com/andrehrferreira/cmmv-fastify/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@cmmv/fastify.svg" alt="Package License" /></a>
</p>

<p align="center">
  <a href="https://cmmv.io">Documentation</a> &bull;
  <a href="https://github.com/andrehrferreira/cmmv-fastify/issues">Report Issue</a>
</p>

## Description

CMMV (Contract-Model-Model-View) is a minimalistic and modular framework for building scalable applications in TypeScript. Inspired by modern design patterns, CMMV uses contracts to define the entire application, from ORM entities to REST controllers and WebSocket endpoints, allowing for a highly structured and maintainable codebase.

## Legacy Setup (Manual)

If you prefer to set up the project manually, you can still install the necessary modules individually:

```bash
$ pnpm add @cmmv/fastify @fastify/compress @fastify/cors @fastify/helmet @fastify/secure-session @fastify/static @fastify/view
```

## Quick Start

The `@cmmv/fastify` module provides an alternative HTTP adapter based on [Fastify](https://fastify.dev/), allowing you to use Fastify middleware and features seamlessly with your CMMV application.

```typescript
import { Application } from "@cmmv/core";
import { ViewModule } from "@cmmv/view";

import { 
  FastifyAdapter, 
  FastifyModule 
} from "@cmmv/fastify";

Application.create({
    httpAdapter: FastifyAdapter, // Add the FastifyAdapter here
    wsAdapter: WSAdapter,
    modules: [
        FastifyModule, // Add the FastifyModule here
    ],
    services: [...],
    contracts: [...]
});
```