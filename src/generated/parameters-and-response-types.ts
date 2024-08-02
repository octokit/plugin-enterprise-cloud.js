import type { RequestParameters } from "@octokit/types";
import type { Endpoints } from "./endpoints-types.js";

export type RestEndpointMethodTypes = {
  actions: {
    addRepoAccessToSelfHostedRunnerGroupInOrg: {
      parameters: RequestParameters &
        Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"]["parameters"];
      response: Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"]["response"];
    };
    addSelfHostedRunnerToGroupForOrg: {
      parameters: RequestParameters &
        Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["parameters"];
      response: Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["response"];
    };
    createSelfHostedRunnerGroupForOrg: {
      parameters: RequestParameters &
        Endpoints["POST /orgs/{org}/actions/runner-groups"]["parameters"];
      response: Endpoints["POST /orgs/{org}/actions/runner-groups"]["response"];
    };
    deleteSelfHostedRunnerGroupFromOrg: {
      parameters: RequestParameters &
        Endpoints["DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}"]["parameters"];
      response: Endpoints["DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}"]["response"];
    };
    getActionsCacheUsageForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/cache/usage"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/cache/usage"]["response"];
    };
    getGithubActionsDefaultWorkflowPermissionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/permissions/workflow"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions/workflow"]["response"];
    };
    getSelfHostedRunnerGroupForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/actions/runner-groups/{runner_group_id}"]["parameters"];
      response: Endpoints["GET /orgs/{org}/actions/runner-groups/{runner_group_id}"]["response"];
    };
    listRepoAccessToSelfHostedRunnerGroupInOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories"]["parameters"];
      response: Endpoints["GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories"]["response"];
    };
    listSelfHostedRunnerGroupsForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/actions/runner-groups"]["parameters"];
      response: Endpoints["GET /orgs/{org}/actions/runner-groups"]["response"];
    };
    listSelfHostedRunnersInGroupForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners"]["parameters"];
      response: Endpoints["GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners"]["response"];
    };
    removeRepoAccessToSelfHostedRunnerGroupInOrg: {
      parameters: RequestParameters &
        Endpoints["DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"]["parameters"];
      response: Endpoints["DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories/{repository_id}"]["response"];
    };
    removeSelfHostedRunnerFromGroupForOrg: {
      parameters: RequestParameters &
        Endpoints["DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["parameters"];
      response: Endpoints["DELETE /orgs/{org}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["response"];
    };
    setActionsOidcCustomIssuerPolicyForEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/oidc/customization/issuer"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/oidc/customization/issuer"]["response"];
    };
    setGithubActionsDefaultWorkflowPermissionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/permissions/workflow"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/workflow"]["response"];
    };
    setRepoAccessToSelfHostedRunnerGroupInOrg: {
      parameters: RequestParameters &
        Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories"]["parameters"];
      response: Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories"]["response"];
    };
    setSelfHostedRunnersInGroupForOrg: {
      parameters: RequestParameters &
        Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners"]["parameters"];
      response: Endpoints["PUT /orgs/{org}/actions/runner-groups/{runner_group_id}/runners"]["response"];
    };
    updateSelfHostedRunnerGroupForOrg: {
      parameters: RequestParameters &
        Endpoints["PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}"]["parameters"];
      response: Endpoints["PATCH /orgs/{org}/actions/runner-groups/{runner_group_id}"]["response"];
    };
  };
  announcementBanners: {
    getAnnouncementBannerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/announcement"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/announcement"]["response"];
    };
    getAnnouncementBannerForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/announcement"]["parameters"];
      response: Endpoints["GET /orgs/{org}/announcement"]["response"];
    };
    removeAnnouncementBannerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/announcement"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/announcement"]["response"];
    };
    removeAnnouncementBannerForOrg: {
      parameters: RequestParameters &
        Endpoints["DELETE /orgs/{org}/announcement"]["parameters"];
      response: Endpoints["DELETE /orgs/{org}/announcement"]["response"];
    };
    setAnnouncementBannerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["PATCH /enterprises/{enterprise}/announcement"]["parameters"];
      response: Endpoints["PATCH /enterprises/{enterprise}/announcement"]["response"];
    };
    setAnnouncementBannerForOrg: {
      parameters: RequestParameters &
        Endpoints["PATCH /orgs/{org}/announcement"]["parameters"];
      response: Endpoints["PATCH /orgs/{org}/announcement"]["response"];
    };
  };
  billing: {
    getGithubActionsBillingGhe: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/settings/billing/actions"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/settings/billing/actions"]["response"];
    };
    getGithubAdvancedSecurityBillingGhe: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/settings/billing/advanced-security"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/settings/billing/advanced-security"]["response"];
    };
    getGithubAdvancedSecurityBillingOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/settings/billing/advanced-security"]["parameters"];
      response: Endpoints["GET /orgs/{org}/settings/billing/advanced-security"]["response"];
    };
    getGithubPackagesBillingGhe: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/settings/billing/packages"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/settings/billing/packages"]["response"];
    };
    getSharedStorageBillingGhe: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/settings/billing/shared-storage"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/settings/billing/shared-storage"]["response"];
    };
  };
  codeScanning: {
    listAlertsForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/code-scanning/alerts"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/code-scanning/alerts"]["response"];
    };
  };
  enterpriseAdmin: {
    addCustomLabelsToSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"];
      response: Endpoints["POST /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    addOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}"]["response"];
    };
    addSelfHostedRunnerToGroupForEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["response"];
    };
    createRegistrationTokenForEnterprise: {
      parameters: RequestParameters &
        Endpoints["POST /enterprises/{enterprise}/actions/runners/registration-token"]["parameters"];
      response: Endpoints["POST /enterprises/{enterprise}/actions/runners/registration-token"]["response"];
    };
    createRemoveTokenForEnterprise: {
      parameters: RequestParameters &
        Endpoints["POST /enterprises/{enterprise}/actions/runners/remove-token"]["parameters"];
      response: Endpoints["POST /enterprises/{enterprise}/actions/runners/remove-token"]["response"];
    };
    createSelfHostedRunnerGroupForEnterprise: {
      parameters: RequestParameters &
        Endpoints["POST /enterprises/{enterprise}/actions/runner-groups"]["parameters"];
      response: Endpoints["POST /enterprises/{enterprise}/actions/runner-groups"]["response"];
    };
    deleteScimGroupFromEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["parameters"];
      response: Endpoints["DELETE /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["response"];
    };
    deleteSelfHostedRunnerFromEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}"]["response"];
    };
    deleteSelfHostedRunnerGroupFromEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}"]["response"];
    };
    deleteUserFromEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["DELETE /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["response"];
    };
    disableSelectedOrganizationGithubActionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["response"];
    };
    enableSelectedOrganizationGithubActionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"]["response"];
    };
    getAllowedActionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/permissions/selected-actions"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions/selected-actions"]["response"];
    };
    getAuditLog: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/audit-log"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/audit-log"]["response"];
    };
    getConsumedLicenses: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/consumed-licenses"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/consumed-licenses"]["response"];
    };
    getGithubActionsPermissionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/permissions"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions"]["response"];
    };
    getLicenseSyncStatus: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/license-sync-status"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/license-sync-status"]["response"];
    };
    getProvisioningInformationForEnterpriseGroup: {
      parameters: RequestParameters &
        Endpoints["GET /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["parameters"];
      response: Endpoints["GET /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["response"];
    };
    getProvisioningInformationForEnterpriseUser: {
      parameters: RequestParameters &
        Endpoints["GET /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["GET /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["response"];
    };
    getSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runners/{runner_id}"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runners/{runner_id}"]["response"];
    };
    getSelfHostedRunnerGroupForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}"]["response"];
    };
    getServerStatistics: {
      parameters: RequestParameters &
        Endpoints["GET /enterprise-installation/{enterprise_or_org}/server-statistics"]["parameters"];
      response: Endpoints["GET /enterprise-installation/{enterprise_or_org}/server-statistics"]["response"];
    };
    listLabelsForSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    listOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations"]["response"];
    };
    listProvisionedGroupsEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /scim/v2/enterprises/{enterprise}/groups"]["parameters"];
      response: Endpoints["GET /scim/v2/enterprises/{enterprise}/groups"]["response"];
    };
    listProvisionedIdentitiesEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /scim/v2/enterprises/{enterprise}/users"]["parameters"];
      response: Endpoints["GET /scim/v2/enterprises/{enterprise}/users"]["response"];
    };
    listRunnerApplicationsForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runners/downloads"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runners/downloads"]["response"];
    };
    listSelectedOrganizationsEnabledGithubActionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/permissions/organizations"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/permissions/organizations"]["response"];
    };
    listSelfHostedRunnerGroupsForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runner-groups"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runner-groups"]["response"];
    };
    listSelfHostedRunnersForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runners"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runners"]["response"];
    };
    listSelfHostedRunnersInGroupForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners"]["response"];
    };
    provisionEnterpriseGroup: {
      parameters: RequestParameters &
        Endpoints["POST /scim/v2/enterprises/{enterprise}/groups"]["parameters"];
      response: Endpoints["POST /scim/v2/enterprises/{enterprise}/groups"]["response"];
    };
    provisionEnterpriseUser: {
      parameters: RequestParameters &
        Endpoints["POST /scim/v2/enterprises/{enterprise}/users"]["parameters"];
      response: Endpoints["POST /scim/v2/enterprises/{enterprise}/users"]["response"];
    };
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    removeCustomLabelFromSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}"]["response"];
    };
    removeOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}"]["response"];
    };
    removeSelfHostedRunnerFromGroupForEnterprise: {
      parameters: RequestParameters &
        Endpoints["DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["parameters"];
      response: Endpoints["DELETE /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}"]["response"];
    };
    setAllowedActionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"]["response"];
    };
    setCustomLabelsForSelfHostedRunnerForEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/runners/{runner_id}/labels"]["response"];
    };
    setGithubActionsPermissionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/permissions"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions"]["response"];
    };
    setInformationForProvisionedEnterpriseGroup: {
      parameters: RequestParameters &
        Endpoints["PUT /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["parameters"];
      response: Endpoints["PUT /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["response"];
    };
    setInformationForProvisionedEnterpriseUser: {
      parameters: RequestParameters &
        Endpoints["PUT /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["PUT /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["response"];
    };
    setOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations"]["response"];
    };
    setSelectedOrganizationsEnabledGithubActionsEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/permissions/organizations"]["response"];
    };
    setSelfHostedRunnersInGroupForEnterprise: {
      parameters: RequestParameters &
        Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners"]["parameters"];
      response: Endpoints["PUT /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners"]["response"];
    };
    updateAttributeForEnterpriseGroup: {
      parameters: RequestParameters &
        Endpoints["PATCH /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["parameters"];
      response: Endpoints["PATCH /scim/v2/enterprises/{enterprise}/groups/{scim_group_id}"]["response"];
    };
    updateAttributeForEnterpriseUser: {
      parameters: RequestParameters &
        Endpoints["PATCH /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["PATCH /scim/v2/enterprises/{enterprise}/users/{scim_user_id}"]["response"];
    };
    updateSelfHostedRunnerGroupForEnterprise: {
      parameters: RequestParameters &
        Endpoints["PATCH /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}"]["parameters"];
      response: Endpoints["PATCH /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}"]["response"];
    };
  };
  orgs: {
    createCustomRepoRole: {
      parameters: RequestParameters &
        Endpoints["POST /orgs/{org}/custom-repository-roles"]["parameters"];
      response: Endpoints["POST /orgs/{org}/custom-repository-roles"]["response"];
    };
    deleteCustomRepoRole: {
      parameters: RequestParameters &
        Endpoints["DELETE /orgs/{org}/custom-repository-roles/{role_id}"]["parameters"];
      response: Endpoints["DELETE /orgs/{org}/custom-repository-roles/{role_id}"]["response"];
    };
    getAuditLog: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/audit-log"]["parameters"];
      response: Endpoints["GET /orgs/{org}/audit-log"]["response"];
    };
    getCustomRepoRole: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/custom-repository-roles/{role_id}"]["parameters"];
      response: Endpoints["GET /orgs/{org}/custom-repository-roles/{role_id}"]["response"];
    };
    listCustomRepoRoles: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/custom-repository-roles"]["parameters"];
      response: Endpoints["GET /orgs/{org}/custom-repository-roles"]["response"];
    };
    listRepoFineGrainedPermissions: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/repository-fine-grained-permissions"]["parameters"];
      response: Endpoints["GET /orgs/{org}/repository-fine-grained-permissions"]["response"];
    };
    listSamlSsoAuthorizations: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/credential-authorizations"]["parameters"];
      response: Endpoints["GET /orgs/{org}/credential-authorizations"]["response"];
    };
    removeSamlSsoAuthorization: {
      parameters: RequestParameters &
        Endpoints["DELETE /orgs/{org}/credential-authorizations/{credential_id}"]["parameters"];
      response: Endpoints["DELETE /orgs/{org}/credential-authorizations/{credential_id}"]["response"];
    };
    updateCustomRepoRole: {
      parameters: RequestParameters &
        Endpoints["PATCH /orgs/{org}/custom-repository-roles/{role_id}"]["parameters"];
      response: Endpoints["PATCH /orgs/{org}/custom-repository-roles/{role_id}"]["response"];
    };
  };
  repos: {
    disableLfsForRepo: {
      parameters: RequestParameters &
        Endpoints["DELETE /repos/{owner}/{repo}/lfs"]["parameters"];
      response: Endpoints["DELETE /repos/{owner}/{repo}/lfs"]["response"];
    };
    enableLfsForRepo: {
      parameters: RequestParameters &
        Endpoints["PUT /repos/{owner}/{repo}/lfs"]["parameters"];
      response: Endpoints["PUT /repos/{owner}/{repo}/lfs"]["response"];
    };
  };
  scim: {
    deleteUserFromOrg: {
      parameters: RequestParameters &
        Endpoints["DELETE /scim/v2/organizations/{org}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["DELETE /scim/v2/organizations/{org}/users/{scim_user_id}"]["response"];
    };
    getProvisioningInformationForUser: {
      parameters: RequestParameters &
        Endpoints["GET /scim/v2/organizations/{org}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["GET /scim/v2/organizations/{org}/users/{scim_user_id}"]["response"];
    };
    listProvisionedIdentities: {
      parameters: RequestParameters &
        Endpoints["GET /scim/v2/organizations/{org}/users"]["parameters"];
      response: Endpoints["GET /scim/v2/organizations/{org}/users"]["response"];
    };
    provisionAndInviteUser: {
      parameters: RequestParameters &
        Endpoints["POST /scim/v2/organizations/{org}/users"]["parameters"];
      response: Endpoints["POST /scim/v2/organizations/{org}/users"]["response"];
    };
    setInformationForProvisionedUser: {
      parameters: RequestParameters &
        Endpoints["PUT /scim/v2/organizations/{org}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["PUT /scim/v2/organizations/{org}/users/{scim_user_id}"]["response"];
    };
    updateAttributeForUser: {
      parameters: RequestParameters &
        Endpoints["PATCH /scim/v2/organizations/{org}/users/{scim_user_id}"]["parameters"];
      response: Endpoints["PATCH /scim/v2/organizations/{org}/users/{scim_user_id}"]["response"];
    };
  };
  secretScanning: {
    getSecurityAnalysisSettingsForEnterprise: {
      parameters: RequestParameters &
        Endpoints["GET /enterprises/{enterprise}/code_security_and_analysis"]["parameters"];
      response: Endpoints["GET /enterprises/{enterprise}/code_security_and_analysis"]["response"];
    };
    patchSecurityAnalysisSettingsForEnterprise: {
      parameters: RequestParameters &
        Endpoints["PATCH /enterprises/{enterprise}/code_security_and_analysis"]["parameters"];
      response: Endpoints["PATCH /enterprises/{enterprise}/code_security_and_analysis"]["response"];
    };
    postSecurityProductEnablementForEnterprise: {
      parameters: RequestParameters &
        Endpoints["POST /enterprises/{enterprise}/{security_product}/{enablement}"]["parameters"];
      response: Endpoints["POST /enterprises/{enterprise}/{security_product}/{enablement}"]["response"];
    };
  };
  teams: {
    createOrUpdateIdpGroupConnectionsInOrg: {
      parameters: RequestParameters &
        Endpoints["PATCH /orgs/{org}/teams/{team_slug}/team-sync/group-mappings"]["parameters"];
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}/team-sync/group-mappings"]["response"];
    };
    externalIdpGroupInfoForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/external-group/{group_id}"]["parameters"];
      response: Endpoints["GET /orgs/{org}/external-group/{group_id}"]["response"];
    };
    linkExternalIdpGroupToTeamForOrg: {
      parameters: RequestParameters &
        Endpoints["PATCH /orgs/{org}/teams/{team_slug}/external-groups"]["parameters"];
      response: Endpoints["PATCH /orgs/{org}/teams/{team_slug}/external-groups"]["response"];
    };
    listExternalIdpGroupsForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/external-groups"]["parameters"];
      response: Endpoints["GET /orgs/{org}/external-groups"]["response"];
    };
    listIdpGroupsForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/team-sync/groups"]["parameters"];
      response: Endpoints["GET /orgs/{org}/team-sync/groups"]["response"];
    };
    listIdpGroupsInOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings"]["parameters"];
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings"]["response"];
    };
    listLinkedExternalIdpGroupsToTeamForOrg: {
      parameters: RequestParameters &
        Endpoints["GET /orgs/{org}/teams/{team_slug}/external-groups"]["parameters"];
      response: Endpoints["GET /orgs/{org}/teams/{team_slug}/external-groups"]["response"];
    };
    unlinkExternalIdpGroupFromTeamForOrg: {
      parameters: RequestParameters &
        Endpoints["DELETE /orgs/{org}/teams/{team_slug}/external-groups"]["parameters"];
      response: Endpoints["DELETE /orgs/{org}/teams/{team_slug}/external-groups"]["response"];
    };
  };
};
