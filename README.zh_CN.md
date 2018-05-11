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

## 开启插件

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

创建一个 view 文件
```js
// app/view/hello.js
module.exports = locals => ({
  hello: locals.name
})
```

使用这个 view 渲染
```js
// app/controller/render.js
exports.render = async ctx => {
  await ctx.render('hello.js', {
    name: 'world'
  })
}
```

## 使用场景

- Why and What: 描述为什么会有这个插件，它主要在完成一件什么事情。
尽可能描述详细。
- How: 描述这个插件是怎样使用的，具体的示例代码，甚至提供一个完整的示例，并给出链接。

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
