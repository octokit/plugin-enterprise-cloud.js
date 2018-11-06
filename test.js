const simple = require('simple-mock')
const { test } = require('tap')

const plugin = require('.')

test('calls octokit.registerEndpoints() with scim namespace only', t => {
  const octokitMock = {
    registerEndpoints: simple.mock()
  }

  plugin(octokitMock)

  t.equals(octokitMock.registerEndpoints.callCount, 1)
  t.end()
})
