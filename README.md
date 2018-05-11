# egg-view-lambda

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-view-lambda.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-view-lambda
[travis-image]: https://img.shields.io/travis/Rokid/egg-view-lambda.svg?style=flat-square
[travis-url]: https://travis-ci.org/Rokid/egg-view-lambda
[codecov-image]: https://img.shields.io/codecov/c/github/Rokid/egg-view-lambda.svg?style=flat-square
[codecov-url]: https://codecov.io/github/Rokid/egg-view-lambda?branch=master
[david-image]: https://img.shields.io/david/Rokid/egg-view-lambda.svg?style=flat-square
[david-url]: https://david-dm.org/Rokid/egg-view-lambda
[snyk-image]: https://snyk.io/test/npm/egg-view-lambda/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-view-lambda
[download-image]: https://img.shields.io/npm/dm/egg-view-lambda.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-view-lambda

## Install

```bash
$ npm i egg-view-lambda --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.lambda = {
  enable: true,
  package: 'egg-view-lambda'
}

// {app_root}/config/config.default.js
exports.view = {
  mapping: {
    '.js': 'lambda'
  }
}
```

Create a view file
```js
// app/view/hello.js
module.exports = locals => ({
  hello: locals.name
})
```

Render it
```js
// app/controller/render.js
exports.render = async ctx => {
  await ctx.render('hello.js', {
    name: 'world'
  })
}
```

## Configuration

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
