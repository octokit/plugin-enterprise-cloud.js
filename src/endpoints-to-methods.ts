import { Octokit } from "@octokit/core";
import type { EndpointOptions, RequestMethod, Url } from "@octokit/types";
import type { EndpointsDefaultsAndDecorations } from "./types.js";

type EndpointMethods = {
  [methodName: string]: typeof Octokit.prototype.request;
};

export function endpointsToMethods(
  octokit: Octokit,
  endpointsMap: EndpointsDefaultsAndDecorations,
) {
  const newMethods = {} as Record<string, Record<string, Function>>;

  for (const [scope, endpoints] of Object.entries(endpointsMap)) {
    for (const [methodName, endpoint] of Object.entries(endpoints)) {
      const [route, defaults, decorations = {}] = endpoint;
      const [method, url] = route.split(/ /) as [RequestMethod, Url];
      const endpointDefaults: EndpointOptions = Object.assign(
        { method, url },
        defaults,
      );

      if (!newMethods[scope]) {
        newMethods[scope] = {};
      }

      const scopeMethods = newMethods[scope] as EndpointMethods;

      /* v8 ignore start */
      if (decorations.renamed) {
        const [newScope, newMethodName] = decorations.renamed;
        scopeMethods[methodName] = deprecate(
          octokit,
          `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`,
          endpointDefaults,
        );
        continue;
      }

      if (decorations.deprecated) {
        scopeMethods[methodName] = deprecate(
          octokit,
          decorations.deprecated,
          endpointDefaults,
        );
        continue;
      }
      /* v8 ignore end */

      scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
    }
  }

  return newMethods;
}

/* v8 ignore start - there are currently no deprecated methods*/
function deprecate(
  octokit: Octokit,
  deprecation: string,
  defaults: EndpointOptions,
): typeof Octokit.prototype.request {
  const requestWithDefaults = octokit.request.defaults(defaults);
  function deprecated(...args: Parameters<typeof requestWithDefaults>) {
    octokit.log.warn(deprecation);
    return requestWithDefaults.apply(null, args);
  }
  return Object.assign(deprecated, requestWithDefaults);
}
