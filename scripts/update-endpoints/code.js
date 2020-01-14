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
  const route = `${endpoint.method} ${endpoint.url.replace(
    /\{([^}]+)}/g,
    ":$1"
  )}`;
  const endpointDefaults = {};
  const endpointDecorations = {};

  if (endpoint.headers.length) {
    endpointDefaults.headers = endpoint.headers.reduce((result, header) => {
      if (!result) {
        result = {};
      }
      result[header.name] = header.value;
      return result;
    }, undefined);
  }

  if (endpoint.previews.length) {
    endpointDefaults.mediaType = {
      previews: endpoint.previews.map(preview => preview.name)
    };
  }

  if (endpoint.renamed) {
    endpointDecorations.renamed = [
      endpoint.renamed.after.scope,
      endpoint.renamed.after.id
    ];
  }

  if (endpoint.isDeprecated) {
    endpointDecorations.deprecated = `octokit.scim.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
  }

  newRoutes[endpoint.scope][idName] = [route];

  if (Object.keys(endpointDecorations).length) {
    newRoutes[endpoint.scope][idName].push(
      endpointDefaults,
      endpointDecorations
    );
  } else if (Object.keys(endpointDefaults).length) {
    newRoutes[endpoint.scope][idName].push(endpointDefaults);
  }
});

writeFileSync(
  ROUTES_PATH,
  prettier.format(
    `import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = ${JSON.stringify(
      sortKeys(newRoutes, { deep: true })
    )}

export default Endpoints`,
    { parser: "typescript" }
  )
);
console.log(`${ROUTES_PATH} written.`);
