import { EndpointsDefaultsAndDecorations } from "../types";
const Endpoints: EndpointsDefaultsAndDecorations = {
  actions: {
    addRepoAccessToSelfHostedRunnerGroupInOrg: [
      "PUT /orgs/:org/actions/runner-groups/:runner_group_id/repositories/:repository_id",
    ],
    addSelfHostedRunnerToGroupForOrg: [
      "PUT /orgs/:org/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    createSelfHostedRunnerGroupForOrg: [
      "POST /orgs/:org/actions/runner-groups",
    ],
    deleteSelfHostedRunnerGroupFromOrg: [
      "DELETE /orgs/:org/actions/runner-groups/:runner_group_id",
    ],
    getSelfHostedRunnerGroupForOrg: [
      "GET /orgs/:org/actions/runner-groups/:runner_group_id",
    ],
    listRepoAccessToSelfHostedRunnerGroupInOrg: [
      "GET /orgs/:org/actions/runner-groups/:runner_group_id/repositories",
    ],
    listSelfHostedRunnerGroupsForOrg: ["GET /orgs/:org/actions/runner-groups"],
    listSelfHostedRunnersInGroupForOrg: [
      "GET /orgs/:org/actions/runner-groups/:runner_group_id/runners",
    ],
    removeRepoAccessToSelfHostedRunnerGroupInOrg: [
      "DELETE /orgs/:org/actions/runner-groups/:runner_group_id/repositories/:repository_id",
    ],
    removeSelfHostedRunnerFromGroupForOrg: [
      "DELETE /orgs/:org/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    setRepoAccessToSelfHostedRunnerGroupInOrg: [
      "PUT /orgs/:org/actions/runner-groups/:runner_group_id/repositories",
    ],
    setSelfHostedRunnersInGroupForOrg: [
      "PUT /orgs/:org/actions/runner-groups/:runner_group_id/runners",
    ],
    updateSelfHostedRunnerGroupForOrg: [
      "PATCH /orgs/:org/actions/runner-groups/:runner_group_id",
    ],
  },
  enterpriseAdmin: {
    addOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations/:org_id",
    ],
    addSelfHostedRunnerToRunnerGroupForEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    createRegistrationTokenForEnterprise: [
      "POST /enterprises/:enterprise/actions/runners/registration-token",
    ],
    createRemoveTokenForEnterprise: [
      "POST /enterprises/:enterprise/actions/runners/remove-token",
    ],
    createSelfHostedRunnerGroupForEnterprise: [
      "POST /enterprises/:enterprise/actions/runner-groups",
    ],
    deleteScimGroupFromEnterprise: [
      "DELETE /scim/v2/enterprises/:enterprise/Groups/:scim_group_id",
    ],
    deleteSelfHostedRunnerFromEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runners/:runner_id",
    ],
    deleteSelfHostedRunnerGroupFromEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id",
    ],
    deleteUserFromEnterprise: [
      "DELETE /scim/v2/enterprises/:enterprise/Users/:scim_user_id",
    ],
    getGithubActionsBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/actions",
    ],
    getGithubPackagesBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/packages",
    ],
    getProvisioningInformationForEnterpriseGroup: [
      "GET /scim/v2/enterprises/:enterprise/Groups/:scim_group_id",
    ],
    getProvisioningInformationForEnterpriseUser: [
      "GET /scim/v2/enterprises/:enterprise/Users/:scim_user_id",
    ],
    getSelfHostedRunnerForEnterprise: [
      "GET /enterprises/:enterprise/actions/runners/:runner_id",
    ],
    getSelfHostedRunnerGroupForEnterprise: [
      "GET /enterprises/:enterprise/actions/runner-groups/:runner_group_id",
    ],
    getSharedStorageBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/shared-storage",
    ],
    listOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "GET /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations",
    ],
    listProvisionedGroupsEnterprise: [
      "GET /scim/v2/enterprises/:enterprise/Groups",
    ],
    listProvisionedIdentitiesEnterprise: [
      "GET /scim/v2/enterprises/:enterprise/Users",
    ],
    listRunnerApplicationsForEnterprise: [
      "GET /enterprises/:enterprise/actions/runners/downloads",
    ],
    listSelfHostedRunnerGroupsForEnterprise: [
      "GET /enterprises/:enterprise/actions/runner-groups",
    ],
    listSelfHostedRunnersForEnterprise: [
      "GET /enterprises/:enterprise/actions/runners",
    ],
    listSelfHostedRunnersInGroupForEnterprise: [
      "GET /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners",
    ],
    provisionAndInviteEnterpriseGroup: [
      "POST /scim/v2/enterprises/:enterprise/Groups",
    ],
    provisionAndInviteEnterpriseUser: [
      "POST /scim/v2/enterprises/:enterprise/Users",
    ],
    removeOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations/:org_id",
    ],
    removeSelfHostedRunnerFromGroupForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    setInformationForProvisionedEnterpriseGroup: [
      "PUT /scim/v2/enterprises/:enterprise/Groups/:scim_group_id",
    ],
    setInformationForProvisionedEnterpriseUser: [
      "PUT /scim/v2/enterprises/:enterprise/Users/:scim_user_id",
    ],
    setOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations",
    ],
    setSelfHostedInGroupForEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners",
    ],
    updateAttributeForEnterpriseGroup: [
      "PATCH /scim/v2/enterprises/:enterprise/Groups/:scim_group_id",
    ],
    updateAttributeForEnterpriseUser: [
      "PATCH /scim/v2/enterprises/:enterprise/Users/:scim_user_id",
    ],
    updateSelfHostedRunnerGroupForEnterprise: [
      "PATCH /enterprises/:enterprise/actions/runner-groups/:runner_group_id",
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
    listIdPGroupsFor: [
      "GET /teams/:team_id/team-sync/group-mappings",
      {},
      {
        deprecated:
          "octokit.scim.listIdPGroupsFor() is deprecated, see https://developer.github.com/v3/teams/team_sync/#list-idp-groups-for-a-team-legacy",
        renamed: ["teams", "listIdPGroupsForLegacy"],
      },
    ],
    listIdPGroupsForLegacy: [
      "GET /teams/:team_id/team-sync/group-mappings",
      {},
      {
        deprecated:
          "octokit.scim.listIdPGroupsForLegacy() is deprecated, see https://developer.github.com/v3/teams/team_sync/#list-idp-groups-for-a-team-legacy",
      },
    ],
    listIdPGroupsForOrg: ["GET /orgs/:org/team-sync/groups"],
    listIdPGroupsInOrg: [
      "GET /orgs/:org/teams/:team_slug/team-sync/group-mappings",
    ],
  },
};

export default Endpoints;
