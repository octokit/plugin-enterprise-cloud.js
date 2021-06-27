import type { Octokit } from "@octokit/core";

import ENDPOINTS from "./generated/endpoints";
import { VERSION } from "./version";
import { endpointsToMethods } from "./endpoints-to-methods";

export function enterpriseCloud(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS);
}

enterpriseCloud.VERSION = VERSION;
