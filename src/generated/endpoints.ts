import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  orgs: {
    listCredentialAuthorizations: ["GET /orgs/:org/credential-authorizations"],
    removeCredentialAuthorization: [
      "DELETE /orgs/:org/credential-authorizations/:credential_id",
    ],
  },
  scim: {
    getProvisioningDetailsForUser: [
      "GET /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    listProvisionedIdentities: ["GET /scim/v2/organizations/:org/Users"],
    provisionAndInviteUsers: ["POST /scim/v2/organizations/:org/Users"],
    provisionInviteUsers: [
      "POST /scim/v2/organizations/:org/Users",
      {},
      { renamed: ["scim", "provisionAndInviteUsers"] },
    ],
    removeUserFromOrg: [
      "DELETE /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    replaceProvisionedUserInformation: [
      "PUT /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    updateProvisionedOrgMembership: [
      "PUT /scim/v2/organizations/:org/Users/:scim_user_id",
      {},
      { renamed: ["scim", "replaceProvisionedUserInformation"] },
    ],
    updateUserAttribute: [
      "PATCH /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
  },
  teams: {
    createOrUpdateIdPGroupConnectionsInOrg: [
      "PATCH /orgs/:org/teams/:team_slug/team-sync/group-mappings",
    ],
    listIdPGroupsForOrg: ["GET /orgs/:org/team-sync/groups"],
    listIdPGroupsInOrg: [
      "GET /orgs/:org/teams/:team_slug/team-sync/group-mappings",
    ],
  },
};

export default Endpoints;
