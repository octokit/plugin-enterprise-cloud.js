module.exports = octokitScim

const SCIM_ROUTES = require('./routes.json')

function octokitScim (octokit) {
  octokit.registerEndpoints({
    scim: SCIM_ROUTES
  })
}
