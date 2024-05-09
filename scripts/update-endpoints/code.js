import { writeFileSync } from "node:fs"
import { readFile } from "node:fs/promises"

import * as prettier from "prettier"
import sortKeys from "sort-keys"
import camelcase from "camelcase"

async function readJSONFile(path) {
  return await readFile(path, "utf8").then((data) => JSON.parse(data))
}

const ENDPOINTS = await readJSONFile(new URL("./generated/endpoints.json", import.meta.url));
const ROUTES_PATH = new URL("../../src/generated/endpoints.ts", import.meta.url);

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

async function main() {
  writeFileSync(
    ROUTES_PATH,
    await prettier.format(
      `import type { EndpointsDefaultsAndDecorations } from "../types.js";
  const Endpoints: EndpointsDefaultsAndDecorations = ${JSON.stringify(
        sortKeys(newRoutes, { deep: true })
      )}

  export default Endpoints`,
      { parser: "typescript" }
    )
  );
  console.log(`${ROUTES_PATH.pathname} written.`);
}
main();
