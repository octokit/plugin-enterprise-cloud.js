const { join } = require("path");
const { writeFileSync } = require("fs");

const prettier = require("prettier");
const sortKeys = require("sort-keys");
const camelcase = require("camelcase");

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

ENDPOINTS.forEach((endpoint) => {
  const scope = camelcase(endpoint.scope);
  if (!newRoutes[scope]) {
    newRoutes[scope] = {};
  }

  const idName = camelcase(endpoint.id);
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
      previews: endpoint.previews.map((preview) => preview.name),
    };
  }

  if (endpoint.renamed) {
    endpointDecorations.renamed = [
      endpoint.renamed.after.scope,
      endpoint.renamed.after.id,
    ];
  }

  if (endpoint.isDeprecated) {
    endpointDecorations.deprecated = `octokit.scim.${idName}() is deprecated, see ${endpoint.documentationUrl}`;
  }

  newRoutes[scope][idName] = [route];

  if (Object.keys(endpointDecorations).length) {
    newRoutes[scope][idName].push(endpointDefaults, endpointDecorations);
  } else if (Object.keys(endpointDefaults).length) {
    newRoutes[scope][idName].push(endpointDefaults);
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
