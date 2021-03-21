<h1 align="center">
  CryptoNest
</h1>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest   

## Description

Simple backend for creating sample accounts simulating a cryptoasset exchange. It runs over a [mongoDB](https://docs.mongodb.com/manual/tutorial/getting-started/) non-relational database.

New accounts can be seeded by using [mongoose-seed](https://www.npmjs.com/package/mongoose-seed) library and a simple seeding script.

## Installation

```bash
$ npm install
```

## Seeding sample data

```bash
# populating database
$ npm run seed
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Built with

- [Nest](https://github.com/nestjs/nest) framework.
- Typescript

## Support

Please feel free to send any PR to improve this simple backend. Big thanks to the Nest.js community [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Luis De Benito](https://kamilmysliwiec.com)
- Website - [https://droidemy.com](https://nestjs.com/)
- Twitter - [@droidemy](https://twitter.com/droidemy)

## License

Nest is [MIT licensed](LICENSE).
