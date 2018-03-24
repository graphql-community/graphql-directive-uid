
# graphql-directive-uid

Unique `id` directive for GraphQL schema.

[![Version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]

[![PRs Welcome][prs-badge]][prs]
[![MIT License][license-badge]][build]

## The problem

Generating unique `id` for each graphql schema type may be a daunting task.

## This solution

The `@uid` is a GraphQL directive allowing users to generate unique IDs for their queries. All benefits of GraphQL cache with minimum effort.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Installation](#installation)
* [Usage](#usage)
* [More on `data-testid`s](#more-on-data-testids)
* [Examples](#examples)
* [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

use npm:

```
npm install --save graphql-directive-uid
```

or yarn :

```
yarn add graphql-directive-uid
```

This library has a `peerDependencies` listing for:

* `graphql`
* `graphql-tools`

## Usage

```javascript
import { makeExecutableSchema } from 'graphql-tools';
import graphqlDirectiveUid from 'graphql-directive-uid';
import typeDefs from './schema.graphql';
import resolvers from './resolvers';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    uid: graphqlDirectiveUid, // the name of directive can be as you like
  },
});
```

GraphQL schema:

```graphql
type Person @uid(from: ["personId", "name"]) {
  personId: Int
  name: String
}

type Query {
  persons: [Person]
}
```

GraphQL query:

```graphql
query getPersons {
  persons {
    uid
    personId
    name
  }
}
```

## Examples

You'll find examples of how to use it in 
[the test directory](https://github.com/graphql-community/graphql-directive-uid/blob/master/example/__tests__).

Feel free to contribute more!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/graphql-community/graphql-directive-uid.svg?style=flat-square
[build]: https://travis-ci.org/graphql-community/graphql-directive-uid
[coverage-badge]: https://img.shields.io/codecov/c/github/graphql-community/graphql-directive-uid.svg?style=flat-square
[coverage]: https://codecov.io/github/graphql-community/graphql-directive-uid
[version-badge]: https://img.shields.io/npm/v/graphql-directive-uid.svg?style=flat-square
[package]: https://www.npmjs.com/package/graphql-directive-uid
[downloads-badge]: https://img.shields.io/npm/dm/graphql-directive-uid.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/graphql-directive-uid
[license-badge]: https://img.shields.io/npm/l/graphql-directive-uid.svg?style=flat-square
[license]: https://github.com/graphql-community/graphql-directive-uid/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/graphql-community/graphql-directive-uid/blob/master/CODE_OF_CONDUCT.md
