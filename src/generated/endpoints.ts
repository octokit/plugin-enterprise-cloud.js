import type { EndpointsDefaultsAndDecorations } from "../types.js";
const Endpoints: EndpointsDefaultsAndDecorations = {
  actions: {
    addSelfHostedRunnerToGroupForOrg: [
      "PUT /orgs/:org/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    createHostedRunnerForEnterprise: [
      "POST /enterprises/:enterprise/actions/hosted-runners",
    ],
    createSelfHostedRunnerGroupForOrg: [
      "POST /orgs/:org/actions/runner-groups",
    ],
    deleteHostedRunnerForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/hosted-runners/:hosted_runner_id",
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
    getHostedRunnerForEnterprise: [
      "GET /enterprises/:enterprise/actions/hosted-runners/:hosted_runner_id",
    ],
    getHostedRunnersGithubOwnedImagesForEnterprise: [
      "GET /enterprises/:enterprise/actions/hosted-runners/images/github-owned",
    ],
    getHostedRunnersLimitsForEnterprise: [
      "GET /enterprises/:enterprise/actions/hosted-runners/limits",
    ],
    getHostedRunnersMachineSpecsForEnterprise: [
      "GET /enterprises/:enterprise/actions/hosted-runners/machine-sizes",
    ],
    getHostedRunnersPartnerImagesForEnterprise: [
      "GET /enterprises/:enterprise/actions/hosted-runners/images/partner",
    ],
    getHostedRunnersPlatformsForEnterprise: [
      "GET /enterprises/:enterprise/actions/hosted-runners/platforms",
    ],
    getSelfHostedRunnerGroupForOrg: [
      "GET /orgs/:org/actions/runner-groups/:runner_group_id",
    ],
    listHostedRunnersForEnterprise: [
      "GET /enterprises/:enterprise/actions/hosted-runners",
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
    updateHostedRunnerForEnterprise: [
      "PATCH /enterprises/:enterprise/actions/hosted-runners/:hosted_runner_id",
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
    createCostCenter: [
      "POST /enterprises/:enterprise/settings/billing/cost-centers",
    ],
    deleteCostCenter: [
      "DELETE /enterprises/:enterprise/settings/billing/cost-centers/:cost_center_id",
    ],
    getAllCostCenters: [
      "GET /enterprises/:enterprise/settings/billing/cost-centers",
    ],
    getCostCenter: [
      "GET /enterprises/:enterprise/settings/billing/cost-centers/:cost_center_id",
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
    updateCostCenter: [
      "PATCH /enterprises/:enterprise/settings/billing/cost-centers/:cost_center_id",
    ],
  },
  codeScanning: {
    getDismissalRequestForRepo: [
      "GET /repos/:owner/:repo/dismissal-requests/code-scanning/:alert_number",
    ],
    listAlertsForEnterprise: [
      "GET /enterprises/:enterprise/code-scanning/alerts",
    ],
    listDismissalRequestsForRepo: [
      "GET /repos/:owner/:repo/dismissal-requests/code-scanning",
    ],
    listOrgDismissalRequests: [
      "GET /orgs/:org/dismissal-requests/code-scanning",
    ],
    reviewDismissalRequestForRepo: [
      "PATCH /repos/:owner/:repo/dismissal-requests/code-scanning/:alert_number",
    ],
  },
  copilot: {
    addCopilotSeatsForEnterpriseTeams: [
      "POST /enterprises/:enterprise/copilot/billing/selected_enterprise_teams",
    ],
    addCopilotSeatsForEnterpriseUsers: [
      "POST /enterprises/:enterprise/copilot/billing/selected_users",
    ],
    cancelCopilotSeatsForEnterpriseTeams: [
      "DELETE /enterprises/:enterprise/copilot/billing/selected_enterprise_teams",
    ],
    cancelCopilotSeatsForEnterpriseUsers: [
      "DELETE /enterprises/:enterprise/copilot/billing/selected_users",
    ],
    copilotMetricsForEnterprise: [
      "GET /enterprises/:enterprise/copilot/metrics",
    ],
    copilotMetricsForEnterpriseTeam: [
      "GET /enterprises/:enterprise/team/:team_slug/copilot/metrics",
    ],
    getCopilotSeatDetailsForEnterpriseUser: [
      "GET /enterprises/:enterprise/members/:username/copilot",
    ],
    listCopilotSeatsForEnterprise: [
      "GET /enterprises/:enterprise/copilot/billing/seats",
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
    createRegistrationTokenForEnterprise: [
      "POST /enterprises/:enterprise/actions/runners/registration-token",
    ],
    createRemoveTokenForEnterprise: [
      "POST /enterprises/:enterprise/actions/runners/remove-token",
    ],
    createSelfHostedRunnerGroupForEnterprise: [
      "POST /enterprises/:enterprise/actions/runner-groups",
    ],
    customPropertiesForReposCreateOrUpdateEnterpriseDefinition: [
      "PUT /enterprises/:enterprise/properties/schema/:custom_property_name",
    ],
    customPropertiesForReposCreateOrUpdateEnterpriseDefinitions: [
      "PATCH /enterprises/:enterprise/properties/schema",
    ],
    customPropertiesForReposDeleteEnterpriseDefinition: [
      "DELETE /enterprises/:enterprise/properties/schema/:custom_property_name",
    ],
    customPropertiesForReposGetEnterpriseDefinition: [
      "GET /enterprises/:enterprise/properties/schema/:custom_property_name",
    ],
    customPropertiesForReposGetEnterpriseDefinitions: [
      "GET /enterprises/:enterprise/properties/schema",
    ],
    customPropertiesForReposPromoteDefinitionToEnterprise: [
      "PUT /enterprises/:enterprise/properties/schema/organizations/:org/:custom_property_name/promote",
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
    getArtifactAndLogRetentionSettings: [
      "GET /enterprises/:enterprise/actions/permissions/artifact-and-log-retention",
    ],
    getAuditLog: ["GET /enterprises/:enterprise/audit-log"],
    getAuditLogStreamKey: ["GET /enterprises/:enterprise/audit-log/stream-key"],
    getAuditLogStreams: ["GET /enterprises/:enterprise/audit-log/streams"],
    getConsumedLicenses: ["GET /enterprises/:enterprise/consumed-licenses"],
    getEnterpriseRulesetHistory: [
      "GET /enterprises/:enterprise/rulesets/:ruleset_id/history",
    ],
    getEnterpriseRulesetVersion: [
      "GET /enterprises/:enterprise/rulesets/:ruleset_id/history/:version_id",
    ],
    getForkPrContributorApprovalPermissions: [
      "GET /enterprises/:enterprise/actions/permissions/fork-pr-contributor-approval",
    ],
    getGithubActionsPermissionsEnterprise: [
      "GET /enterprises/:enterprise/actions/permissions",
    ],
    getLicenseSyncStatus: ["GET /enterprises/:enterprise/license-sync-status"],
    getOneAuditLogStream: [
      "GET /enterprises/:enterprise/audit-log/streams/:stream_id",
    ],
    getPrivateRepoForkPrWorkflowsSettings: [
      "GET /enterprises/:enterprise/actions/permissions/fork-pr-workflows-private-repos",
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
    getSelfHostedRunnersPermissions: [
      "GET /enterprises/:enterprise/actions/permissions/self-hosted-runners",
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
    listPushBypassRequests: [
      "GET /enterprises/:enterprise/bypass-requests/push-rules",
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
    removeOrgAccessToSelfHostedRunnerGroupInEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id/organizations/:org_id",
    ],
    removeSelfHostedRunnerFromGroupForEnterprise: [
      "DELETE /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners/:runner_id",
    ],
    setAllowedActionsEnterprise: [
      "PUT /enterprises/:enterprise/actions/permissions/selected-actions",
    ],
    setArtifactAndLogRetentionSettings: [
      "PUT /enterprises/:enterprise/actions/permissions/artifact-and-log-retention",
    ],
    setCustomLabelsForSelfHostedRunnerForEnterprise: [
      "PUT /enterprises/:enterprise/actions/runners/:runner_id/labels",
    ],
    setForkPrContributorApprovalPermissions: [
      "PUT /enterprises/:enterprise/actions/permissions/fork-pr-contributor-approval",
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
    setPrivateRepoForkPrWorkflowsSettings: [
      "PUT /enterprises/:enterprise/actions/permissions/fork-pr-workflows-private-repos",
    ],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: [
      "PUT /enterprises/:enterprise/actions/permissions/organizations",
    ],
    setSelfHostedRunnersInGroupForEnterprise: [
      "PUT /enterprises/:enterprise/actions/runner-groups/:runner_group_id/runners",
    ],
    setSelfHostedRunnersPermissions: [
      "PUT /enterprises/:enterprise/actions/permissions/self-hosted-runners",
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
  enterpriseApps: {
    changeInstallationRepositoryAccessSelection: [
      "PATCH /enterprises/:enterprise/apps/organizations/:org/installations/:installation_id/repositories",
    ],
    createInstallation: [
      "POST /enterprises/:enterprise/apps/organizations/:org/installations",
    ],
    deleteInstallation: [
      "DELETE /enterprises/:enterprise/apps/organizations/:org/installations/:installation_id",
    ],
    grantRepositoryAccessToInstallation: [
      "PATCH /enterprises/:enterprise/apps/organizations/:org/installations/:installation_id/repositories/add",
    ],
    installableOrganizationAccessibleRepositories: [
      "GET /enterprises/:enterprise/apps/installable_organizations/:org/accessible_repositories",
    ],
    installableOrganizations: [
      "GET /enterprises/:enterprise/apps/installable_organizations",
    ],
    organizationInstallationRepositories: [
      "GET /enterprises/:enterprise/apps/organizations/:org/installations/:installation_id/repositories",
    ],
    organizationInstallations: [
      "GET /enterprises/:enterprise/apps/organizations/:org/installations",
    ],
    removeRepositoryAccessToInstallation: [
      "PATCH /enterprises/:enterprise/apps/organizations/:org/installations/:installation_id/repositories/remove",
    ],
  },
  hostedCompute: {
    createNetworkConfigurationForEnterprise: [
      "POST /enterprises/:enterprise/network-configurations",
    ],
    deleteNetworkConfigurationFromEnterprise: [
      "DELETE /enterprises/:enterprise/network-configurations/:network_configuration_id",
    ],
    getNetworkConfigurationForEnterprise: [
      "GET /enterprises/:enterprise/network-configurations/:network_configuration_id",
    ],
    getNetworkSettingsForEnterprise: [
      "GET /enterprises/:enterprise/network-settings/:network_settings_id",
    ],
    listNetworkConfigurationsForEnterprise: [
      "GET /enterprises/:enterprise/network-configurations",
    ],
    updateNetworkConfigurationForEnterprise: [
      "PATCH /enterprises/:enterprise/network-configurations/:network_configuration_id",
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
  projectsClassic: {
    createCard: [
      "POST /projects/columns/:column_id/cards",
      {},
      {
        deprecated:
          "octokit.scim.createCard() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/projects-classic/cards#create-a-project-card",
      },
    ],
    deleteCard: [
      "DELETE /projects/columns/cards/:card_id",
      {},
      {
        deprecated:
          "octokit.scim.deleteCard() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/projects-classic/cards#delete-a-project-card",
      },
    ],
    getCard: [
      "GET /projects/columns/cards/:card_id",
      {},
      {
        deprecated:
          "octokit.scim.getCard() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/projects-classic/cards#get-a-project-card",
      },
    ],
    listCards: [
      "GET /projects/columns/:column_id/cards",
      {},
      {
        deprecated:
          "octokit.scim.listCards() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/projects-classic/cards#list-project-cards",
      },
    ],
    moveCard: [
      "POST /projects/columns/cards/:card_id/moves",
      {},
      {
        deprecated:
          "octokit.scim.moveCard() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/projects-classic/cards#move-a-project-card",
      },
    ],
    updateCard: [
      "PATCH /projects/columns/cards/:card_id",
      {},
      {
        deprecated:
          "octokit.scim.updateCard() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/projects-classic/cards#update-an-existing-project-card",
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
    dismissBypassResponse: [
      "DELETE /repos/:owner/:repo/bypass-responses/secret-scanning/:bypass_response_id",
    ],
    getBypassRequest: [
      "GET /repos/:owner/:repo/bypass-requests/secret-scanning/:bypass_request_number",
    ],
    getDismissalRequest: [
      "GET /repos/:owner/:repo/dismissal-requests/secret-scanning/:alert_number",
    ],
    getSecurityAnalysisSettingsForEnterprise: [
      "GET /enterprises/:enterprise/code_security_and_analysis",
      {},
      {
        deprecated:
          "octokit.scim.getSecurityAnalysisSettingsForEnterprise() is deprecated, see https://docs.github.com/enterprise-cloud@latest//rest/enterprise-admin/code-security-and-analysis#get-code-security-and-analysis-features-for-an-enterprise",
      },
    ],
    listEnterpriseBypassRequests: [
      "GET /enterprises/:enterprise/bypass-requests/secret-scanning",
    ],
    listEnterprisePatternConfigs: [
      "GET /enterprises/:enterprise/secret-scanning/pattern-configurations",
    ],
    listOrgBypassRequests: ["GET /orgs/:org/bypass-requests/secret-scanning"],
    listOrgDismissalRequests: [
      "GET /orgs/:org/dismissal-requests/secret-scanning",
    ],
    listRepoBypassRequests: [
      "GET /repos/:owner/:repo/bypass-requests/secret-scanning",
    ],
    listRepoDismissalRequests: [
      "GET /repos/:owner/:repo/dismissal-requests/secret-scanning",
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
    reviewBypassRequest: [
      "PATCH /repos/:owner/:repo/bypass-requests/secret-scanning/:bypass_request_number",
    ],
    reviewDismissalRequest: [
      "PATCH /repos/:owner/:repo/dismissal-requests/secret-scanning/:alert_number",
    ],
    updateEnterprisePatternConfigs: [
      "PATCH /enterprises/:enterprise/secret-scanning/pattern-configurations",
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
