const { join } = require("path");
const { writeFileSync } = require("fs");

const prettier = require("prettier");
const sortKeys = require("sort-keys");

const ENDPOINTS = require("./generated/endpoints.json");
const ROUTES_PATH = join(
  __dirname,
  "..",
  "..",
  "src",
  "generated",
  "endpoints.ts"
);

const newRoutes = {};

ENDPOINTS.forEach(endpoint => {
  if (!newRoutes[endpoint.scope]) {
    newRoutes[endpoint.scope] = {};
  }

  const idName = endpoint.id;

  // new route
  const endpointDecorations = {};
  const endpointDefaults = {
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
    endpointDecorations.renamed = [
      [endpoint.renamed.before.scope, endpoint.renamed.before.id],
      [endpoint.renamed.after.scope, endpoint.renamed.after.id]
    ];
  }

  if (endpoint.isDeprecated) {
    endpointDecorations.deprecated = `octokit.scim.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
  }

  newRoutes[endpoint.scope][idName] = [
    endpointDefaults,
    endpointDecorations
  ].filter(obj => Object.keys(obj).length);
});

// require("fs").writeFileSync(
//   "routes.json",
//   JSON.stringify(sortKeys(newRoutes, { deep: true }), null, 2) + "\n"
// );
// console.log("routes.json written.");

writeFileSync(
  ROUTES_PATH,
  prettier.format(
    `export default ` + JSON.stringify(sortKeys(newRoutes, { deep: true }))
  )
);
console.log(`${ROUTES_PATH} written.`);
