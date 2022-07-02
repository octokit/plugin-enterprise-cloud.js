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
    getCustomOidcSubClaimForRepo: [
      "GET /repos/:owner/:repo/actions/oidc/customization/sub",
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
    setActionsOidcCustomIssuerPolicyForEnterprise: [
      "PUT /enterprises/:enterprise/actions/oidc/customization/issuer",
    ],
    setCustomOidcSubClaimForRepo: [
      "PUT /repos/:owner/:repo/actions/oidc/customization/sub",
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
  billing: {
    getGithubActionsBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/actions",
    ],
    getGithubPackagesBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/packages",
    ],
    getSharedStorageBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/shared-storage",
    ],
  },
  dependencyGraph: {
    createRepositorySnapshot: [
      "POST /repos/:owner/:repo/dependency-graph/snapshots",
    ],
  },
  enterpriseAdmin: {
    addOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations/:org_id",
    ],
    addSelfHostedRunnerToGroupForEnterprise: [
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
    getAuditLog: ["GET /enterprises/:enterprise/audit-log"],
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
    setSelfHostedRunnersInGroupForEnterprise: [
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
  oidc: {
    getOidcCustomSubTemplateForOrg: [
      "GET /orgs/:org/actions/oidc/customization/sub",
    ],
    updateOidcCustomSubTemplateForOrg: [
      "PUT /orgs/:org/actions/oidc/customization/sub",
    ],
  },
  orgs: {
    getAuditLog: ["GET /orgs/:org/audit-log"],
    listSamlSsoAuthorizations: ["GET /orgs/:org/credential-authorizations"],
    removeSamlSsoAuthorization: [
      "DELETE /orgs/:org/credential-authorizations/:credential_id",
    ],
  },
  scim: {
    deleteUserFromOrg: [
      "DELETE /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    getProvisioningInformationForUser: [
      "GET /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    listProvisionedIdentities: ["GET /scim/v2/organizations/:org/Users"],
    provisionAndInviteUser: ["POST /scim/v2/organizations/:org/Users"],
    setInformationForProvisionedUser: [
      "PUT /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
    updateAttributeForUser: [
      "PATCH /scim/v2/organizations/:org/Users/:scim_user_id",
    ],
  },
  teams: {
    createOrUpdateIdpGroupConnectionsInOrg: [
      "PATCH /orgs/:org/teams/:team_slug/team-sync/group-mappings",
    ],
    externalIdpGroupInfoForOrg: ["GET /orgs/:org/external-group/:group_id"],
    linkExternalIdpGroupToTeamForOrg: [
      "PATCH /orgs/:org/teams/:team_slug/external-groups",
    ],
    listExternalIdpGroupsForOrg: ["GET /orgs/:org/external-groups"],
    listIdpGroupsForOrg: ["GET /orgs/:org/team-sync/groups"],
    listIdpGroupsInOrg: [
      "GET /orgs/:org/teams/:team_slug/team-sync/group-mappings",
    ],
    listLinkedExternalIdpGroupsToTeamForOrg: [
      "GET /orgs/:org/teams/:team_slug/external-groups",
    ],
    unlinkExternalIdpGroupFromTeamForOrg: [
      "DELETE /orgs/:org/teams/:team_slug/external-groups",
    ],
  },
};

export default Endpoints;
