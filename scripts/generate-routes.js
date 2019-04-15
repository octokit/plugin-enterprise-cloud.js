const camelCase = require('lodash.camelcase')
const sortKeys = require('sort-keys')
const routes = require('@octokit/routes')

const newRoutes = {}

function normalize (methodName) {
  return camelCase(methodName)
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
    headers: endpoint.headers,
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
        result[param.name].mapTo = param.mapTo === 'input' ? 'data' : param.mapTo

        if (result[param.name].mapTo === 'data' === param.name) {
          delete result[param.name].mapTo
        }
      }
      if (param.enum) {
        result[param.name].enum = param.enum
      }
      if (param.regex) {
        result[param.name].validation = param.regex
      }
      if (param.deprecated) {
        result[param.name].deprecated = true
        result[param.name].alias = param.deprecated.after.name
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

  if (endpoint.deprecated) {
    newRoutes[idName].deprecated = `octokit.scim.${camelCase(endpoint.deprecated.before.idName)}() has been renamed to octokit.scim.${camelCase(endpoint.deprecated.after.idName)}() (${endpoint.deprecated.date})`
  }
})

require('fs').writeFileSync('routes.json', JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + '\n')
console.log(`routes.json written.`)
