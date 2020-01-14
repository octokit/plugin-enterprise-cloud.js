const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");

const newRoutes = {};

ENDPOINTS.forEach(endpoint => {
  if (!newRoutes[endpoint.scope]) {
    newRoutes[endpoint.scope] = {};
  }

  const idName = endpoint.id;

  // new route
  newRoutes[endpoint.scope][idName] = {
    method: endpoint.method,
    url: endpoint.url.replace(/\{([^}]+)}/g, ":$1"),
    headers: endpoint.headers.reduce((result, header) => {
      if (!result) {
        result = {};
      }
      result[header.name] = header.value;
      return result;
    }, undefined)
  };

  if (endpoint.previews.length) {
    if (!newRoutes[endpoint.scope][idName].mediaType) {
      newRoutes[endpoint.scope][idName].mediaType = {};
    }
    newRoutes[endpoint.scope][
      idName
    ].mediaType.previews = endpoint.previews.map(preview => preview.name);
  }

  if (endpoint.renamed) {
    newRoutes[endpoint.scope][idName].renamed = [
      [endpoint.renamed.before.scope, endpoint.renamed.before.id],
      [endpoint.renamed.after.scope, endpoint.renamed.after.id]
    ];
  }

  if (endpoint.isDeprecated) {
    newRoutes[endpoint.scope][
      idName
    ].deprecated = `octokit.scim.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
  }
});

require("fs").writeFileSync(
  "routes.json",
  JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + "\n"
);
console.log("routes.json written.");
