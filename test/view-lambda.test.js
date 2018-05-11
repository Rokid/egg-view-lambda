'use strict'

const mock = require('egg-mock')

describe('test/view-lambda.test.js', () => {
  let app
  before(() => {
    app = mock.app({
      baseDir: 'apps/view-lambda-test'
    })
    return app.ready()
  })

  after(() => app.close())
  afterEach(mock.restore)

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect({ name: 'lambda' })
      .expect(200)
  })
})
