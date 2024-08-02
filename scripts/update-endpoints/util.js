/**
 * we ignore all legacy endpoints except the ones that were recently added
 * @param { Endpoint } endpoint
 */
export function isDeprecated(endpoint) {
  if (endpoint.removalDate && endpoint.removalDate < new Date().toISOString().substr(0, 10)) {
    return true;
  }

  const deprecated = !endpoint.removalDate && (endpoint.isLegacy || endpoint.isDeprecated);

  return deprecated;
}
