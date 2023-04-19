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
    getActionsCacheUsageForEnterprise: [
      "GET /enterprises/:enterprise/actions/cache/usage",
    ],
    getGithubActionsDefaultWorkflowPermissionsEnterprise: [
      "GET /enterprises/:enterprise/actions/permissions/workflow",
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
    setGithubActionsDefaultWorkflowPermissionsEnterprise: [
      "PUT /enterprises/:enterprise/actions/permissions/workflow",
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
  announcementBanners: {
    getAnnouncementBannerForEnterprise: [
      "GET /enterprises/:enterprise/announcement",
    ],
    getAnnouncementBannerForOrg: ["GET /orgs/:org/announcement"],
    removeAnnouncementBannerForEnterprise: [
      "DELETE /enterprises/:enterprise/announcement",
    ],
    removeAnnouncementBannerForOrg: ["DELETE /orgs/:org/announcement"],
    setAnnouncementBannerForEnterprise: [
      "PATCH /enterprises/:enterprise/announcement",
    ],
    setAnnouncementBannerForOrg: ["PATCH /orgs/:org/announcement"],
  },
  billing: {
    getGithubActionsBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/actions",
    ],
    getGithubAdvancedSecurityBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/advanced-security",
    ],
    getGithubAdvancedSecurityBillingOrg: [
      "GET /orgs/:org/settings/billing/advanced-security",
    ],
    getGithubPackagesBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/packages",
    ],
    getSharedStorageBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/shared-storage",
    ],
  },
  codeScanning: {
    listAlertsForEnterprise: [
      "GET /enterprises/:enterprise/code-scanning/alerts",
    ],
  },
  enterpriseAdmin: {
    addCustomLabelsToSelfHostedRunnerForEnterprise: [
      "POST /enterprises/:enterprise/actions/runners/:runner_id/labels",
    ],
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
    deleteSelfHostedRunnerFromEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runners/:runner_id",
    ],
    deleteSelfHostedRunnerGroupFromEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id",
    ],
    disableSelectedOrganizationGithubActionsEnterprise: [
      "DELETE /enterprises/:enterprise/actions/permissions/organizations/:org_id",
    ],
    enableSelectedOrganizationGithubActionsEnterprise: [
      "PUT /enterprises/:enterprise/actions/permissions/organizations/:org_id",
    ],
    getAllowedActionsEnterprise: [
      "GET /enterprises/:enterprise/actions/permissions/selected-actions",
    ],
    getAuditLog: ["GET /enterprises/:enterprise/audit-log"],
    getConsumedLicenses: ["GET /enterprises/:enterprise/consumed-licenses"],
    getGithubActionsPermissionsEnterprise: [
      "GET /enterprises/:enterprise/actions/permissions",
    ],
    getLicenseSyncStatus: ["GET /enterprises/:enterprise/license-sync-status"],
    getSelfHostedRunnerForEnterprise: [
      "GET /enterprises/:enterprise/actions/runners/:runner_id",
    ],
    getSelfHostedRunnerGroupForEnterprise: [
      "GET /enterprises/:enterprise/actions/runner-groups/:runner_group_id",
    ],
    getServerStatistics: [
      "GET /enterprise-installation/:enterprise_or_org/server-statistics",
    ],
    listLabelsForSelfHostedRunnerForEnterprise: [
      "GET /enterprises/:enterprise/actions/runners/:runner_id/labels",
    ],
    listOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "GET /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations",
    ],
    listRunnerApplicationsForEnterprise: [
      "GET /enterprises/:enterprise/actions/runners/downloads",
    ],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "GET /enterprises/:enterprise/actions/permissions/organizations",
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
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runners/:runner_id/labels",
    ],
    removeCustomLabelFromSelfHostedRunnerForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runners/:runner_id/labels/:name",
    ],
    removeOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations/:org_id",
    ],
    removeSelfHostedRunnerFromGroupForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    setAllowedActionsEnterprise: [
      "PUT /enterprises/:enterprise/actions/permissions/selected-actions",
    ],
    setCustomLabelsForSelfHostedRunnerForEnterprise: [
      "PUT /enterprises/:enterprise/actions/runners/:runner_id/labels",
    ],
    setGithubActionsPermissionsEnterprise: [
      "PUT /enterprises/:enterprise/actions/permissions",
    ],
    setOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations",
    ],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "PUT /enterprises/:enterprise/actions/permissions/organizations",
    ],
    setSelfHostedRunnersInGroupForEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners",
    ],
    updateSelfHostedRunnerGroupForEnterprise: [
      "PATCH /enterprises/:enterprise/actions/runner-groups/:runner_group_id",
    ],
  },
  orgs: {
    createCustomRepoRole: ["POST /orgs/:org/custom-repository-roles"],
    createCustomRole: [
      "POST /orgs/:org/custom_roles",
      {},
      {
        deprecated:
          "octokit.scim.createCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#create-a-custom-role",
      },
    ],
    deleteCustomRepoRole: [
      "DELETE /orgs/:org/custom-repository-roles/:role_id",
    ],
    deleteCustomRole: [
      "DELETE /orgs/:org/custom_roles/:role_id",
      {},
      {
        deprecated:
          "octokit.scim.deleteCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#delete-a-custom-role",
      },
    ],
    getAuditLog: ["GET /orgs/:org/audit-log"],
    getCustomRepoRole: ["GET /orgs/:org/custom-repository-roles/:role_id"],
    getCustomRole: [
      "GET /orgs/:org/custom_roles/:role_id",
      {},
      {
        deprecated:
          "octokit.scim.getCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs/#get-a-custom-role",
      },
    ],
    listCustomRepoRoles: ["GET /orgs/:org/custom-repository-roles"],
    listCustomRoles: [
      "GET /organizations/:organization_id/custom_roles",
      {},
      {
        deprecated:
          "octokit.scim.listCustomRoles() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#deprecated-list-custom-repository-roles-in-an-organization",
      },
    ],
    listFineGrainedPermissions: [
      "GET /orgs/:org/fine_grained_permissions",
      {},
      {
        deprecated:
          "octokit.scim.listFineGrainedPermissions() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#list-repository-fine-grained-permissions-for-an-organization",
      },
    ],
    listRepoFineGrainedPermissions: [
      "GET /orgs/:org/repository-fine-grained-permissions",
    ],
    listSamlSsoAuthorizations: ["GET /orgs/:org/credential-authorizations"],
    removeSamlSsoAuthorization: [
      "DELETE /orgs/:org/credential-authorizations/:credential_id",
    ],
    updateCustomRepoRole: ["PATCH /orgs/:org/custom-repository-roles/:role_id"],
    updateCustomRole: [
      "PATCH /orgs/:org/custom_roles/:role_id",
      {},
      {
        deprecated:
          "octokit.scim.updateCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/reference/orgs#update-a-custom-role",
      },
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
  secretScanning: {
    getSecurityAnalysisSettingsForEnterprise: [
      "GET /enterprises/:enterprise/code_security_and_analysis",
    ],
    patchSecurityAnalysisSettingsForEnterprise: [
      "PATCH /enterprises/:enterprise/code_security_and_analysis",
    ],
    postSecurityProductEnablementForEnterprise: [
      "POST /enterprises/:enterprise/:security_product/:enablement",
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
