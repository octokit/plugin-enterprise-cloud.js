const sortKeys = require('sort-keys')

const ENDPOINTS = require('./generated/endpoints.json')

const newRoutes = {}

ENDPOINTS.forEach(endpoint => {
  if (endpoint.scope !== 'scim') {
    return
  }

  const idName = endpoint.id

  // new route
  newRoutes[idName] = {
    method: endpoint.method,
    headers: endpoint.headers.reduce((result, header) => {
      if (!result) {
        result = {}
      }
      result[header.name] = header.value
      return result
    }, undefined),
    params: endpoint.parameters.reduce((result, param) => {
      result[param.name] = {
        type: param.type
      }
      if (param.allowNull) {
        result[param.name].allowNull = true
      }
      if (param.required) {
        result[param.name].required = true
      }
      if (param.mapToData) {
        result[param.name].mapTo = 'data'
      }
      if (param.enum) {
        result[param.name].enum = param.enum
      }
      if (param.validation) {
        result[param.name].validation = param.validation
      }
      if (param.deprecated) {
        result[param.name].deprecated = true

        if (param.alias) {
          result[param.name].alias = param.alias
          result[param.name].type = result[param.alias].type
        } else {
          result[param.name].type = param.type
          result[param.name].description = param.description
        }
      }

      return result
    }, {}),
    url: endpoint.url.replace(/\{([^}]+)}/g, ':$1')
  }

  const previewHeaders = endpoint.previews
    .map(preview => `application/vnd.github.${preview.name}-preview+json`)
    .join(',')

  if (previewHeaders) {
    newRoutes[idName].headers = {
      accept: previewHeaders
    }
  }

  if (endpoint.renamed) {
    newRoutes[
      idName
    ].deprecated = `octokit.scim.${endpoint.renamed.before}() has been renamed to octokit.scim.${endpoint.renamed.after}() (${endpoint.renamed.date})`
  }

  if (endpoint.isDeprecated) {
    newRoutes[
      idName
    ].deprecated = `octokit.scim.${idName}() is deprecated, see ${endpoint.documentationUrl}`
  }
})

require('fs').writeFileSync(
  'routes.json',
  JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + '\n'
)
console.log('routes.json written.')
