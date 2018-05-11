'use strict'

module.exports = app => {
  app.view.use('lambda', require('./lib/view'))
}
