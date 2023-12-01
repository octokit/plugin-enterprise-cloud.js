import type { Octokit } from "@octokit/core";

import ENDPOINTS from "./generated/endpoints.js";
import { VERSION } from "./version.js";
import { endpointsToMethods } from "./endpoints-to-methods.js";

export function enterpriseCloud(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS);
}

enterpriseCloud.VERSION = VERSION;
