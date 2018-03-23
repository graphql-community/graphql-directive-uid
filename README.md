<div align="center">
  <h1>@uid directive for GraphQL</h1>
  <p>Directive for GraphQL schema.</p>
</div>

<hr />

## The problem

A lot of people have problem with generating unique `ID` for each graphql schema type

## This solution

The `@uid` is the simple graphql directive that allo user to have minimum effort but have all benefits from graphql cache.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->

<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

* [Installation](#installation)
* [Usage](#usage)
* [More on `data-testid`s](#more-on-data-testids)
* [Examples](#examples)
* [Contributors](#contributors)
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
```

## Examples

You'll find examples of testing with different libraries in
[the test directory](https://github.com/kentcdodds/react-testing-library/blob/master/src/__tests__).

Feel free to contribute more!

## Contributors

Thanks goes to these people ([emoji key][emojis]):

This project follows the [all-contributors][all-contributors] specification.
Contributions of any kind welcome!

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/kentcdodds/react-testing-library.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/react-testing-library
[coverage-badge]: https://img.shields.io/codecov/c/github/kentcdodds/react-testing-library.svg?style=flat-square
[coverage]: https://codecov.io/github/kentcdodds/react-testing-library
[version-badge]: https://img.shields.io/npm/v/react-testing-library.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-testing-library
[downloads-badge]: https://img.shields.io/npm/dm/react-testing-library.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/react-testing-library
[license-badge]: https://img.shields.io/npm/l/react-testing-library.svg?style=flat-square
[license]: https://github.com/kentcdodds/react-testing-library/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/react-testing-library/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/react-testing-library.svg?style=social
[github-watch]: https://github.com/kentcdodds/react-testing-library/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/react-testing-library.svg?style=social
[github-star]: https://github.com/kentcdodds/react-testing-library/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20react-testing-library%20by%20%40kentcdodds%20https%3A%2F%2Fgithub.com%2Fkentcdodds%2Freact-testing-library%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/react-testing-library.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[set-immediate]: https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
