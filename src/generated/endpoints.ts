import type { EndpointsDefaultsAndDecorations } from "../types.js";
const Endpoints: EndpointsDefaultsAndDecorations = {
  actions: {
    addSelfHostedRunnerToGroupForOrg: [
      "PUT /orgs/:org/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    createSelfHostedRunnerGroupForOrg: [
      "POST /orgs/:org/actions/runner-groups",
    ],
    deleteSelfHostedRunnerGroupFromOrg: [
      "DELETE /orgs/:org/actions/runner-groups/:runner_group_id",
    ],
    generateRunnerJitconfigForEnterprise: [
      "POST /enterprises/:enterprise/actions/runners/generate-jitconfig",
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
    addResourceToCostCenter: [
      "POST /enterprises/:enterprise/settings/billing/cost-centers/:cost_center_id/resource",
    ],
    getAllCostCenters: [
      "GET /enterprises/:enterprise/settings/billing/cost-centers",
    ],
    getGithubActionsBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/actions",
    ],
    getGithubAdvancedSecurityBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/advanced-security",
    ],
    getGithubAdvancedSecurityBillingOrg: [
      "GET /orgs/:org/settings/billing/advanced-security",
    ],
    getGithubBillingUsageReportGhe: [
      "GET /enterprises/:enterprise/settings/billing/usage",
    ],
    getGithubPackagesBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/packages",
    ],
    getSharedStorageBillingGhe: [
      "GET /enterprises/:enterprise/settings/billing/shared-storage",
    ],
    removeResourceFromCostCenter: [
      "DELETE /enterprises/:enterprise/settings/billing/cost-centers/:cost_center_id/resource",
    ],
  },
  codeScanning: {
    listAlertsForEnterprise: [
      "GET /enterprises/:enterprise/code-scanning/alerts",
    ],
  },
  copilot: {
    copilotMetricsForEnterprise: [
      "GET /enterprises/:enterprise/copilot/metrics",
    ],
    copilotMetricsForEnterpriseTeam: [
      "GET /enterprises/:enterprise/team/:team_slug/copilot/metrics",
    ],
    listCopilotSeatsForEnterprise: [
      "GET /enterprises/:enterprise/copilot/billing/seats",
    ],
    usageMetricsForEnterprise: ["GET /enterprises/:enterprise/copilot/usage"],
    usageMetricsForEnterpriseTeam: [
      "GET /enterprises/:enterprise/team/:team_slug/copilot/usage",
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
    createAuditLogStream: ["POST /enterprises/:enterprise/audit-log/streams"],
    createOrUpdateEnterpriseCustomProperties: [
      "PATCH /enterprises/:enterprise/properties/schema",
    ],
    createOrUpdateEnterpriseCustomProperty: [
      "PUT /enterprises/:enterprise/properties/schema/:custom_property_name",
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
    deleteAuditLogStream: [
      "DELETE /enterprises/:enterprise/audit-log/streams/:stream_id",
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
    getAuditLogStreamKey: ["GET /enterprises/:enterprise/audit-log/stream-key"],
    getAuditLogStreams: ["GET /enterprises/:enterprise/audit-log/streams"],
    getConsumedLicenses: ["GET /enterprises/:enterprise/consumed-licenses"],
    getEnterpriseCustomProperties: [
      "GET /enterprises/:enterprise/properties/schema",
    ],
    getEnterpriseCustomProperty: [
      "GET /enterprises/:enterprise/properties/schema/:custom_property_name",
    ],
    getGithubActionsPermissionsEnterprise: [
      "GET /enterprises/:enterprise/actions/permissions",
    ],
    getLicenseSyncStatus: ["GET /enterprises/:enterprise/license-sync-status"],
    getOneAuditLogStream: [
      "GET /enterprises/:enterprise/audit-log/streams/:stream_id",
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
    getServerStatistics: [
      "GET /enterprise-installation/:enterprise_or_org/server-statistics",
    ],
    listLabelsForSelfHostedRunnerForEnterprise: [
      "GET /enterprises/:enterprise/actions/runners/:runner_id/labels",
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
    provisionEnterpriseGroup: ["POST /scim/v2/enterprises/:enterprise/Groups"],
    provisionEnterpriseUser: ["POST /scim/v2/enterprises/:enterprise/Users"],
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runners/:runner_id/labels",
    ],
    removeCustomLabelFromSelfHostedRunnerForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runners/:runner_id/labels/:name",
    ],
    removeEnterpriseCustomProperty: [
      "DELETE /enterprises/:enterprise/properties/schema/:custom_property_name",
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
    setInformationForProvisionedEnterpriseGroup: [
      "PUT /scim/v2/enterprises/:enterprise/Groups/:scim_group_id",
    ],
    setInformationForProvisionedEnterpriseUser: [
      "PUT /scim/v2/enterprises/:enterprise/Users/:scim_user_id",
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
    updateAttributeForEnterpriseGroup: [
      "PATCH /scim/v2/enterprises/:enterprise/Groups/:scim_group_id",
    ],
    updateAttributeForEnterpriseUser: [
      "PATCH /scim/v2/enterprises/:enterprise/Users/:scim_user_id",
    ],
    updateAuditLogStream: [
      "PUT /enterprises/:enterprise/audit-log/streams/:stream_id",
    ],
    updateSelfHostedRunnerGroupForEnterprise: [
      "PATCH /enterprises/:enterprise/actions/runner-groups/:runner_group_id",
    ],
  },
  orgs: {
    createCustomOrganizationRole: ["POST /orgs/:org/organization-roles"],
    createCustomRepoRole: ["POST /orgs/:org/custom-repository-roles"],
    createCustomRole: [
      "POST /orgs/:org/custom_roles",
      {},
      {
        deprecated:
          "octokit.scim.createCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/orgs/custom-roles#closing-down---create-a-custom-role",
      },
    ],
    deleteCustomOrganizationRole: [
      "DELETE /orgs/:org/organization-roles/:role_id",
    ],
    deleteCustomRepoRole: [
      "DELETE /orgs/:org/custom-repository-roles/:role_id",
    ],
    deleteCustomRole: [
      "DELETE /orgs/:org/custom_roles/:role_id",
      {},
      {
        deprecated:
          "octokit.scim.deleteCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/orgs/custom-roles#closing-down---delete-a-custom-role",
      },
    ],
    getAuditLog: ["GET /orgs/:org/audit-log"],
    getCustomRepoRole: ["GET /orgs/:org/custom-repository-roles/:role_id"],
    getCustomRole: [
      "GET /orgs/:org/custom_roles/:role_id",
      {},
      {
        deprecated:
          "octokit.scim.getCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/orgs/custom-roles#closing-down---get-a-custom-role",
      },
    ],
    listCustomRepoRoles: ["GET /orgs/:org/custom-repository-roles"],
    listCustomRoles: [
      "GET /organizations/:organization_id/custom_roles",
      {},
      {
        deprecated:
          "octokit.scim.listCustomRoles() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/orgs/custom-roles#closing-down---list-custom-repository-roles-in-an-organization",
      },
    ],
    listFineGrainedPermissions: [
      "GET /orgs/:org/fine_grained_permissions",
      {},
      {
        deprecated:
          "octokit.scim.listFineGrainedPermissions() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/orgs/custom-roles#closing-down---list-fine-grained-permissions-for-an-organization",
      },
    ],
    listOrganizationFineGrainedPermissions: [
      "GET /orgs/:org/organization-fine-grained-permissions",
    ],
    listPushBypassRequests: ["GET /orgs/:org/bypass-requests/push-rules"],
    listRepoFineGrainedPermissions: [
      "GET /orgs/:org/repository-fine-grained-permissions",
    ],
    listSamlSsoAuthorizations: ["GET /orgs/:org/credential-authorizations"],
    patchCustomOrganizationRole: [
      "PATCH /orgs/:org/organization-roles/:role_id",
    ],
    removeSamlSsoAuthorization: [
      "DELETE /orgs/:org/credential-authorizations/:credential_id",
    ],
    updateCustomRepoRole: ["PATCH /orgs/:org/custom-repository-roles/:role_id"],
    updateCustomRole: [
      "PATCH /orgs/:org/custom_roles/:role_id",
      {},
      {
        deprecated:
          "octokit.scim.updateCustomRole() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/orgs/custom-roles#closing-down---update-a-custom-role",
      },
    ],
  },
  repos: {
    createEnterpriseRuleset: ["POST /enterprises/:enterprise/rulesets"],
    deleteEnterpriseRuleset: [
      "DELETE /enterprises/:enterprise/rulesets/:ruleset_id",
    ],
    disableLfsForRepo: ["DELETE /repos/:owner/:repo/lfs"],
    enableLfsForRepo: ["PUT /repos/:owner/:repo/lfs"],
    getEnterpriseRuleset: ["GET /enterprises/:enterprise/rulesets/:ruleset_id"],
    getRepoPushBypassRequest: [
      "GET /repos/:owner/:repo/bypass-requests/push-rules/:bypass_request_number",
    ],
    listRepoPushBypassRequests: [
      "GET /repos/:owner/:repo/bypass-requests/push-rules",
    ],
    updateEnterpriseRuleset: [
      "PUT /enterprises/:enterprise/rulesets/:ruleset_id",
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
      {},
      {
        deprecated:
          "octokit.scim.getSecurityAnalysisSettingsForEnterprise() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin/code-security-and-analysis#get-code-security-and-analysis-features-for-an-enterprise",
      },
    ],
    patchSecurityAnalysisSettingsForEnterprise: [
      "PATCH /enterprises/:enterprise/code_security_and_analysis",
      {},
      {
        deprecated:
          "octokit.scim.patchSecurityAnalysisSettingsForEnterprise() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin/code-security-and-analysis#update-code-security-and-analysis-features-for-an-enterprise",
      },
    ],
    postSecurityProductEnablementForEnterprise: [
      "POST /enterprises/:enterprise/:security_product/:enablement",
      {},
      {
        deprecated:
          "octokit.scim.postSecurityProductEnablementForEnterprise() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin/code-security-and-analysis#enable-or-disable-a-security-feature",
      },
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
