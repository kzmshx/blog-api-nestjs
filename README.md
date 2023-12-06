<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

### Server

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### DB

```bash
# Start development DB
$ docker compose up -d
```

```bash
# Stop development DB
$ docker compose stop
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

# Memo

- Setup Node.js
  - `volta install node`
  - `npm i -g pnpm`
- Setup NestJS
  - `npx @nestjs/cli new .`
  - `pnpm install`
- Start NestJS
  - `pnpm run start`
- Setup Prisma
  - `pnpm i -D prisma`
  - `npx prisma init`
- Update database schema
  - `npx prisma migrate dev --name "init"`
- Seed database
  - `npx prisma db seed`
- Generate Prisma module/service
  - `npx nest generate module prisma`
  - `npx nest generate service prisma`
- Setup Swagger 
  - `pnpm i --save @nestjs/swagger swagger-ui-express`
- Add `articles` resource
  - `npx nest generate resource articles`
    - What transport layer do you use? `REST API`
    - Do you like to generate CRUD entry points? `Yes`
- Validate inputs
  - `pnpm i --save class-validator class-transformer`
- Add `User` model
  - `npx prisma migrate dev --name "add-user-model"`
- Seed users
  - `npx prisma db seed`
- Add `users` resource
  - `npx nest generate resource users`
    - What transport layer do you use? `REST API`
    - Do you like to generate CRUD entry points? `Yes`
- Add `auth` resource
  - `npx nest generate resource auth`
    - What transport layer do you use? `REST API`
    - Do you like to generate CRUD entry points? `No`

## Exception filters

https://docs.nestjs.com/exception-filters

> Nest comes with a built-in exceptions layer which is responsible for processing all unhandled exceptions across an application. When an exception is not handled by your application code, it is caught by this layer, which then automatically sends an appropriate user-friendly response.

### nestjs-prisma

https://github.com/notiz-dev/nestjs-prisma

> Easy Prisma support for your NestJS application.

## Interceptors

https://docs.nestjs.com/interceptors

> Interceptors have a set of useful capabilities which are inspired by the Aspect Oriented Programming (AOP) technique. They make it possible to:
> 
> - bind extra logic before / after method execution 
> - transform the result returned from a function 
> - transform the exception thrown from a function 
> - extend the basic function behavior 
> - completely override a function depending on specific conditions (e.g., for caching purposes)

## passport

https://www.npmjs.com/package/passport

> Passport is Express-compatible authentication middleware for Node.js.

https://docs.nestjs.com/recipes/passport

> Passport is the most popular node.js authentication library, well-known by the community and successfully used in many production applications. It's straightforward to integrate this library with a Nest application using the @nestjs/passport module.
