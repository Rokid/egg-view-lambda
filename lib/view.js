'use strict'

const RENDER = Symbol('LambdaView#_render')

module.exports = class EjsView {
  constructor (ctx) {
    this.ctx = ctx
    this.app = ctx.app
    this.config = ctx.app.config.ejs
  }

  async [RENDER] (filename, locals, config) {
    const lambda = require(filename)
    if (typeof lambda === 'function') {
      return lambda(locals, config)
    }
    return lambda
  }

  async render (filename, locals, viewOptions) {
    const config = Object.assign({}, this.config, viewOptions, { filename })
    return this[RENDER](filename, locals, config)
  }

  renderString (tpl, locals, viewOptions) {
    throw new Error('Unimplemented renderString')
  }
}
