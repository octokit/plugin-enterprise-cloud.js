import { Octokit } from "@octokit/core";
import { EndpointOptions, RequestParameters, Route } from "@octokit/types";

import ENDPOINTS from "./generated/endpoints";
import { VERSION } from "./version";

type EndpointMethods = {
  [methodName: string]: typeof Octokit.prototype.request;
};

export function enterpriseCloud(octokit: Octokit) {
  for (const [scope, endpoints] of Object.entries(ENDPOINTS)) {
    for (const [methodName, endpoint] of Object.entries(endpoints)) {
      const [defaults, decorations = {}] = endpoint;

      if (!octokit[scope]) {
        octokit[scope] = {};
      }

      const scopeMethods = octokit[scope] as EndpointMethods;

      if (decorations.renamed) {
        const [newScope, newMethodName] = decorations.renamed;
        scopeMethods[methodName] = deprecate(
          octokit,
          `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`,
          defaults
        );
        continue;
      }

      /* istanbul ignore next - there are currently no deprecated methods*/
      if (decorations.deprecated) {
        scopeMethods[methodName] = deprecate(
          octokit,
          decorations.deprecated,
          defaults
        );
        continue;
      }

      scopeMethods[methodName] = octokit.request.defaults(defaults);
    }
  }
}

function deprecate(
  octokit: Octokit,
  deprecation: string,
  defaults: EndpointOptions
): typeof Octokit.prototype.request {
  const requestWithDefaults = octokit.request.defaults(defaults);
  function deprecated(
    ...args: [Route, RequestParameters?] | [EndpointOptions]
  ) {
    octokit.log.warn(deprecation);
    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
    return requestWithDefaults(...args);
  }
  return Object.assign(deprecated, requestWithDefaults);
}

enterpriseCloud.VERSION = VERSION;
