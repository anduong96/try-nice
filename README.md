# try-nice

[![build status](https://img.shields.io/travis/com/anduong96/try-nice.svg)](https://travis-ci.com/anduong96/try-nice)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/anduong96/try-nice.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/try-nice.svg)](https://npm.im/try-nice)

> Clean try/catch wrapper


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install try-nice
```

[yarn][]:

```sh
yarn add try-nice
```


## Usage

```js
var { tryNice } = require('try-nice')

function getOne() {
  return 1
}

var [result] = tryNice(getOne)
// result === 1
```

## Usage ES6

```js
import { tryNice, tryNiceAsync } from 'try-nice'
const [result] = tryNice(() => 1)
//result === 1

const getTwo = async () => 2
const [asyncResult] = await tryNiceAsync(getTwo)
// asyncResult === 2

const getValue = async (value) => value
const [parameterizedResult] = await tryNiceAsync(getValue, 3)
// parameterizedResult === 3

const getError = async () => {
  throw new Error()
}

const [emptyResult, error] = await tryNiceAsync(getError)
// emptyResult === undefined
// error instanceof Error
```

## Usage Typescript
```js
import { tryNice, tryNiceAsync } from 'try-nice'
const [result] = tryNice(() => 1)
//result === 1

const getTwo = async (): number => 2
const [asyncResult] = await tryNiceAsync<number>(getTwo)
// asyncResult === 2

const getValue = async (value: string): string  => value
const [parameterizedResult] = await tryNiceAsync<string>(getValue, 3)
// parameterizedResult === 3

const getError = async (): void => {
  throw new Error()
}

const [emptyResult, error] = await tryNiceAsync<any, Error>(getError)
// emptyResult === undefined
// error instanceof Error
```


## Contributors

| Name         |
| ------------ |
| **An Duong** |


## License

[MIT](LICENSE) © An Duong


##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
