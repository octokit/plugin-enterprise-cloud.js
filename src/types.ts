import { EndpointOptions } from "@octokit/types";

type EndpointDecorations = {
  deprecated?: string;
  renamed?: [string, string];
};

export type EndpointsDefaultsAndDecorations = {
  [scope: string]: {
    [methodName: string]: [EndpointOptions, EndpointDecorations?];
  };
};
