const camelCase = require('lodash.camelcase')
const sortKeys = require('sort-keys')
const routes = require('@octokit/routes')

const newRoutes = {}

function normalize (methodName) {
  return camelCase(methodName.replace(/^edit/, 'update'))
}

const endpoints = Object.keys(routes).reduce((result, scope) => {
  const scopeEndpoints = routes[scope]
  scopeEndpoints.forEach(endpoint => {
    endpoint.scope = scope
  })
  return result.concat(scopeEndpoints)
}, [])

endpoints.forEach(endpoint => {
  if (endpoint.scope !== 'scim') {
    return
  }

  const idName = normalize(endpoint.idName)

  // new route
  newRoutes[idName] = {
    method: endpoint.method,
    params: endpoint.params.reduce((result, param) => {
      result[param.name] = {
        type: param.type
      }
      if (param.allowNull) {
        result[param.name].allowNull = true
      }
      if (param.required) {
        result[param.name].required = true
      }
      if (param.mapTo) {
        result[param.name].mapTo = param.mapTo
      }
      if (param.enum) {
        result[param.name].enum = param.enum
      }
      if (param.regex) {
        result[param.name].validation = param.regex
      }
      if (param.alias) {
        result[param.name].alias = param.alias
      }
      if (param.deprecated) {
        result[param.name].deprecated = param.deprecated
      }
      return result
    }, {}),
    url: endpoint.path
  }

  const previewHeaders = endpoint.previews
    .filter(preview => preview.required)
    .map(preview => `application/vnd.github.${preview.name}-preview+json`)
    .join(',')

  if (previewHeaders) {
    newRoutes[idName].headers = {
      accept: previewHeaders
    }
  }
})

require('fs').writeFileSync('routes.json', JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + '\n')
