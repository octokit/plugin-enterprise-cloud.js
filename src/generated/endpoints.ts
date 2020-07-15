import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  billing: {
    getGithubActionsBillingGhe: [
      "GET /enterprises/:enterprise_id/settings/billing/actions",
    ],
    getGithubPackagesBillingGhe: [
      "GET /enterprises/:enterprise_id/settings/billing/packages",
    ],
    getSharedStorageBillingGhe: [
      "GET /enterprises/:enterprise_id/settings/billing/shared-storage",
    ],
  },
  orgs: {
    listCredentialAuthorizations: [
      "GET /orgs/:org/credential-authorizations",
      {},
      { renamed: ["orgs", "listSamlSsoAuthorizations"] },
    ],
    listSamlSsoAuthorizations: ["GET /orgs/:org/credential-authorizations"],
    removeCredentialAuthorization: [
      "DELETE /orgs/:org/credential-authorizations/:credential_id",
      {},
      { renamed: ["orgs", "removeSamlSsoAuthorization"] },
    ],
    removeSamlSsoAuthorization: [
      "DELETE /orgs/:org/credential-authorizations/:credential_id",
    ],
  },
  scim: {
    deleteUserFromOrg: [
      "DELETE /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    getProvisioningDetailsForUser: [
      "GET /scim/v2/organizations/:org/Users/:scim_user_id",
      {},
      { renamed: ["scim", "getProvisioningInformationForUser"] },
    ],
    getProvisioningInformationForUser: [
      "GET /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    listProvisionedIdentities: ["GET /scim/v2/organizations/:org/Users"],
    provisionAndInviteUser: ["POST /scim/v2/organizations/:org/Users"],
    provisionAndInviteUsers: [
      "POST /scim/v2/organizations/:org/Users",
      {},
      { renamed: ["scim", "provisionAndInviteUser"] },
    ],
    provisionInviteUsers: [
      "POST /scim/v2/organizations/:org/Users",
      {},
      { renamed: ["scim", "provisionAndInviteUsers"] },
    ],
    removeUserFromOrg: [
      "DELETE /scim/v2/organizations/:org/Users/:scim_user_id",
      {},
      { renamed: ["scim", "deleteUserFromOrg"] },
    ],
    replaceProvisionedUserInformation: [
      "PUT /scim/v2/organizations/:org/Users/:scim_user_id",
      {},
      { renamed: ["scim", "setInformationForProvisionedUser"] },
    ],
    setInformationForProvisionedUser: [
      "PUT /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    updateAttributeForUser: [
      "PATCH /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    updateProvisionedOrgMembership: [
      "PUT /scim/v2/organizations/:org/Users/:scim_user_id",
      {},
      { renamed: ["scim", "replaceProvisionedUserInformation"] },
    ],
    updateUserAttribute: [
      "PATCH /scim/v2/organizations/:org/Users/:scim_user_id",
      {},
      { renamed: ["scim", "updateAttributeForUser"] },
    ],
  },
  teams: {
    createOrUpdateIdPGroupConnections: [
      "PATCH /teams/:team_id/team-sync/group-mappings",
      {},
      {
        deprecated:
          "octokit.scim.createOrUpdateIdPGroupConnections() is deprecated, see https://developer.github.com/v3/teams/team_sync/#create-or-update-idp-group-connections-legacy",
        renamed: ["teams", "createOrUpdateIdPGroupConnectionsLegacy"],
      },
    ],
    createOrUpdateIdPGroupConnectionsInOrg: [
      "PATCH /orgs/:org/teams/:team_slug/team-sync/group-mappings",
    ],
    createOrUpdateIdPGroupConnectionsLegacy: [
      "PATCH /teams/:team_id/team-sync/group-mappings",
      {},
      {
        deprecated:
          "octokit.scim.createOrUpdateIdPGroupConnectionsLegacy() is deprecated, see https://developer.github.com/v3/teams/team_sync/#create-or-update-idp-group-connections-legacy",
      },
    ],
    listIdPGroupsForOrg: ["GET /orgs/:org/team-sync/groups"],
    listIdPGroupsInOrg: [
      "GET /orgs/:org/teams/:team_slug/team-sync/group-mappings",
    ],
  },
};

export default Endpoints;
