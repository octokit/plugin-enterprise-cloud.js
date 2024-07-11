import type { EndpointInterface, RequestInterface } from "@octokit/types";
import type { RestEndpointMethodTypes } from "./parameters-and-response-types.js";

export type RestEndpointMethods = {
  actions: {
    addRepoAccessToSelfHostedRunnerGroupInOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["addRepoAccessToSelfHostedRunnerGroupInOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["addRepoAccessToSelfHostedRunnerGroupInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    addSelfHostedRunnerToGroupForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["addSelfHostedRunnerToGroupForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["addSelfHostedRunnerToGroupForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createSelfHostedRunnerGroupForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["createSelfHostedRunnerGroupForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["createSelfHostedRunnerGroupForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteSelfHostedRunnerGroupFromOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["deleteSelfHostedRunnerGroupFromOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["deleteSelfHostedRunnerGroupFromOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getActionsCacheUsageForEnterprise: {
      (
        params?: RestEndpointMethodTypes["actions"]["getActionsCacheUsageForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["getActionsCacheUsageForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getGithubActionsDefaultWorkflowPermissionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["actions"]["getGithubActionsDefaultWorkflowPermissionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["getGithubActionsDefaultWorkflowPermissionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getSelfHostedRunnerGroupForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["getSelfHostedRunnerGroupForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["getSelfHostedRunnerGroupForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listRepoAccessToSelfHostedRunnerGroupInOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["listRepoAccessToSelfHostedRunnerGroupInOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["listRepoAccessToSelfHostedRunnerGroupInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listSelfHostedRunnerGroupsForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["listSelfHostedRunnerGroupsForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["listSelfHostedRunnerGroupsForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listSelfHostedRunnersInGroupForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["listSelfHostedRunnersInGroupForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["listSelfHostedRunnersInGroupForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeRepoAccessToSelfHostedRunnerGroupInOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["removeRepoAccessToSelfHostedRunnerGroupInOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["removeRepoAccessToSelfHostedRunnerGroupInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeSelfHostedRunnerFromGroupForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["removeSelfHostedRunnerFromGroupForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["removeSelfHostedRunnerFromGroupForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setActionsOidcCustomIssuerPolicyForEnterprise: {
      (
        params?: RestEndpointMethodTypes["actions"]["setActionsOidcCustomIssuerPolicyForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["setActionsOidcCustomIssuerPolicyForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setGithubActionsDefaultWorkflowPermissionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["actions"]["setGithubActionsDefaultWorkflowPermissionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["setGithubActionsDefaultWorkflowPermissionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setRepoAccessToSelfHostedRunnerGroupInOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["setRepoAccessToSelfHostedRunnerGroupInOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["setRepoAccessToSelfHostedRunnerGroupInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setSelfHostedRunnersInGroupForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["setSelfHostedRunnersInGroupForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["setSelfHostedRunnersInGroupForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateSelfHostedRunnerGroupForOrg: {
      (
        params?: RestEndpointMethodTypes["actions"]["updateSelfHostedRunnerGroupForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["actions"]["updateSelfHostedRunnerGroupForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  announcementBanners: {
    getAnnouncementBannerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["announcementBanners"]["getAnnouncementBannerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["announcementBanners"]["getAnnouncementBannerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAnnouncementBannerForOrg: {
      (
        params?: RestEndpointMethodTypes["announcementBanners"]["getAnnouncementBannerForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["announcementBanners"]["getAnnouncementBannerForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeAnnouncementBannerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["announcementBanners"]["removeAnnouncementBannerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["announcementBanners"]["removeAnnouncementBannerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeAnnouncementBannerForOrg: {
      (
        params?: RestEndpointMethodTypes["announcementBanners"]["removeAnnouncementBannerForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["announcementBanners"]["removeAnnouncementBannerForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setAnnouncementBannerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["announcementBanners"]["setAnnouncementBannerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["announcementBanners"]["setAnnouncementBannerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setAnnouncementBannerForOrg: {
      (
        params?: RestEndpointMethodTypes["announcementBanners"]["setAnnouncementBannerForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["announcementBanners"]["setAnnouncementBannerForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  billing: {
    getGithubActionsBillingGhe: {
      (
        params?: RestEndpointMethodTypes["billing"]["getGithubActionsBillingGhe"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["billing"]["getGithubActionsBillingGhe"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getGithubAdvancedSecurityBillingGhe: {
      (
        params?: RestEndpointMethodTypes["billing"]["getGithubAdvancedSecurityBillingGhe"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["billing"]["getGithubAdvancedSecurityBillingGhe"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getGithubAdvancedSecurityBillingOrg: {
      (
        params?: RestEndpointMethodTypes["billing"]["getGithubAdvancedSecurityBillingOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["billing"]["getGithubAdvancedSecurityBillingOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getGithubPackagesBillingGhe: {
      (
        params?: RestEndpointMethodTypes["billing"]["getGithubPackagesBillingGhe"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["billing"]["getGithubPackagesBillingGhe"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getSharedStorageBillingGhe: {
      (
        params?: RestEndpointMethodTypes["billing"]["getSharedStorageBillingGhe"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["billing"]["getSharedStorageBillingGhe"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  codeScanning: {
    listAlertsForEnterprise: {
      (
        params?: RestEndpointMethodTypes["codeScanning"]["listAlertsForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["codeScanning"]["listAlertsForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  enterpriseAdmin: {
    addCustomLabelsToSelfHostedRunnerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["addCustomLabelsToSelfHostedRunnerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["addCustomLabelsToSelfHostedRunnerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    addOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["addOrgAccessToSelfHostedRunnerGroupInEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["addOrgAccessToSelfHostedRunnerGroupInEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    addSelfHostedRunnerToGroupForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["addSelfHostedRunnerToGroupForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["addSelfHostedRunnerToGroupForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createRegistrationTokenForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createRegistrationTokenForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createRegistrationTokenForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createRemoveTokenForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createRemoveTokenForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createRemoveTokenForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    createSelfHostedRunnerGroupForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["createSelfHostedRunnerGroupForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["createSelfHostedRunnerGroupForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteScimGroupFromEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deleteScimGroupFromEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deleteScimGroupFromEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteSelfHostedRunnerFromEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deleteSelfHostedRunnerFromEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deleteSelfHostedRunnerFromEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteSelfHostedRunnerGroupFromEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deleteSelfHostedRunnerGroupFromEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deleteSelfHostedRunnerGroupFromEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteUserFromEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["deleteUserFromEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["deleteUserFromEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    disableSelectedOrganizationGithubActionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["disableSelectedOrganizationGithubActionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["disableSelectedOrganizationGithubActionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    enableSelectedOrganizationGithubActionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["enableSelectedOrganizationGithubActionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["enableSelectedOrganizationGithubActionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAllowedActionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getAllowedActionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getAllowedActionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAuditLog: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getAuditLog"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getAuditLog"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getConsumedLicenses: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getConsumedLicenses"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getConsumedLicenses"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getGithubActionsPermissionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getGithubActionsPermissionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getGithubActionsPermissionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getLicenseSyncStatus: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getLicenseSyncStatus"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getLicenseSyncStatus"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getProvisioningInformationForEnterpriseGroup: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getProvisioningInformationForEnterpriseGroup"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getProvisioningInformationForEnterpriseGroup"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getProvisioningInformationForEnterpriseUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getProvisioningInformationForEnterpriseUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getProvisioningInformationForEnterpriseUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getSelfHostedRunnerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getSelfHostedRunnerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getSelfHostedRunnerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getSelfHostedRunnerGroupForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getSelfHostedRunnerGroupForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getSelfHostedRunnerGroupForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getServerStatistics: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["getServerStatistics"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["getServerStatistics"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listLabelsForSelfHostedRunnerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listLabelsForSelfHostedRunnerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listLabelsForSelfHostedRunnerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listOrgAccessToSelfHostedRunnerGroupInEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listOrgAccessToSelfHostedRunnerGroupInEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listProvisionedGroupsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listProvisionedGroupsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listProvisionedGroupsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listProvisionedIdentitiesEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listProvisionedIdentitiesEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listProvisionedIdentitiesEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listRunnerApplicationsForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listRunnerApplicationsForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listRunnerApplicationsForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listSelectedOrganizationsEnabledGithubActionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listSelectedOrganizationsEnabledGithubActionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listSelectedOrganizationsEnabledGithubActionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listSelfHostedRunnerGroupsForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listSelfHostedRunnerGroupsForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listSelfHostedRunnerGroupsForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listSelfHostedRunnersForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listSelfHostedRunnersForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listSelfHostedRunnersForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listSelfHostedRunnersInGroupForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["listSelfHostedRunnersInGroupForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["listSelfHostedRunnersInGroupForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    provisionEnterpriseGroup: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["provisionEnterpriseGroup"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["provisionEnterpriseGroup"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    provisionEnterpriseUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["provisionEnterpriseUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["provisionEnterpriseUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["removeAllCustomLabelsFromSelfHostedRunnerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["removeAllCustomLabelsFromSelfHostedRunnerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeCustomLabelFromSelfHostedRunnerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["removeCustomLabelFromSelfHostedRunnerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["removeCustomLabelFromSelfHostedRunnerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["removeOrgAccessToSelfHostedRunnerGroupInEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["removeOrgAccessToSelfHostedRunnerGroupInEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeSelfHostedRunnerFromGroupForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["removeSelfHostedRunnerFromGroupForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["removeSelfHostedRunnerFromGroupForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setAllowedActionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setAllowedActionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setAllowedActionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setCustomLabelsForSelfHostedRunnerForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setCustomLabelsForSelfHostedRunnerForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setCustomLabelsForSelfHostedRunnerForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setGithubActionsPermissionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setGithubActionsPermissionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setGithubActionsPermissionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setInformationForProvisionedEnterpriseGroup: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setInformationForProvisionedEnterpriseGroup"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setInformationForProvisionedEnterpriseGroup"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setInformationForProvisionedEnterpriseUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setInformationForProvisionedEnterpriseUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setInformationForProvisionedEnterpriseUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setOrgAccessToSelfHostedRunnerGroupInEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setOrgAccessToSelfHostedRunnerGroupInEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setOrgAccessToSelfHostedRunnerGroupInEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setSelectedOrganizationsEnabledGithubActionsEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setSelectedOrganizationsEnabledGithubActionsEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setSelectedOrganizationsEnabledGithubActionsEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setSelfHostedRunnersInGroupForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["setSelfHostedRunnersInGroupForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["setSelfHostedRunnersInGroupForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateAttributeForEnterpriseGroup: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateAttributeForEnterpriseGroup"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateAttributeForEnterpriseGroup"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateAttributeForEnterpriseUser: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateAttributeForEnterpriseUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateAttributeForEnterpriseUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateSelfHostedRunnerGroupForEnterprise: {
      (
        params?: RestEndpointMethodTypes["enterpriseAdmin"]["updateSelfHostedRunnerGroupForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["enterpriseAdmin"]["updateSelfHostedRunnerGroupForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  orgs: {
    createCustomRepoRole: {
      (
        params?: RestEndpointMethodTypes["orgs"]["createCustomRepoRole"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["createCustomRepoRole"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    deleteCustomRepoRole: {
      (
        params?: RestEndpointMethodTypes["orgs"]["deleteCustomRepoRole"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["deleteCustomRepoRole"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getAuditLog: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getAuditLog"]["parameters"],
      ): Promise<RestEndpointMethodTypes["orgs"]["getAuditLog"]["response"]>;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getCustomRepoRole: {
      (
        params?: RestEndpointMethodTypes["orgs"]["getCustomRepoRole"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["getCustomRepoRole"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listCustomRepoRoles: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listCustomRepoRoles"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listCustomRepoRoles"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listRepoFineGrainedPermissions: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listRepoFineGrainedPermissions"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listRepoFineGrainedPermissions"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listSamlSsoAuthorizations: {
      (
        params?: RestEndpointMethodTypes["orgs"]["listSamlSsoAuthorizations"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["listSamlSsoAuthorizations"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    removeSamlSsoAuthorization: {
      (
        params?: RestEndpointMethodTypes["orgs"]["removeSamlSsoAuthorization"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["removeSamlSsoAuthorization"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateCustomRepoRole: {
      (
        params?: RestEndpointMethodTypes["orgs"]["updateCustomRepoRole"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["orgs"]["updateCustomRepoRole"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  repos: {
    disableLfsForRepo: {
      (
        params?: RestEndpointMethodTypes["repos"]["disableLfsForRepo"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["repos"]["disableLfsForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    enableLfsForRepo: {
      (
        params?: RestEndpointMethodTypes["repos"]["enableLfsForRepo"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["repos"]["enableLfsForRepo"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  scim: {
    deleteUserFromOrg: {
      (
        params?: RestEndpointMethodTypes["scim"]["deleteUserFromOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["scim"]["deleteUserFromOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    getProvisioningInformationForUser: {
      (
        params?: RestEndpointMethodTypes["scim"]["getProvisioningInformationForUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["scim"]["getProvisioningInformationForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listProvisionedIdentities: {
      (
        params?: RestEndpointMethodTypes["scim"]["listProvisionedIdentities"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["scim"]["listProvisionedIdentities"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    provisionAndInviteUser: {
      (
        params?: RestEndpointMethodTypes["scim"]["provisionAndInviteUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["scim"]["provisionAndInviteUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    setInformationForProvisionedUser: {
      (
        params?: RestEndpointMethodTypes["scim"]["setInformationForProvisionedUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["scim"]["setInformationForProvisionedUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    updateAttributeForUser: {
      (
        params?: RestEndpointMethodTypes["scim"]["updateAttributeForUser"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["scim"]["updateAttributeForUser"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  secretScanning: {
    getSecurityAnalysisSettingsForEnterprise: {
      (
        params?: RestEndpointMethodTypes["secretScanning"]["getSecurityAnalysisSettingsForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["secretScanning"]["getSecurityAnalysisSettingsForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    patchSecurityAnalysisSettingsForEnterprise: {
      (
        params?: RestEndpointMethodTypes["secretScanning"]["patchSecurityAnalysisSettingsForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["secretScanning"]["patchSecurityAnalysisSettingsForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    postSecurityProductEnablementForEnterprise: {
      (
        params?: RestEndpointMethodTypes["secretScanning"]["postSecurityProductEnablementForEnterprise"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["secretScanning"]["postSecurityProductEnablementForEnterprise"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
  teams: {
    createOrUpdateIdpGroupConnectionsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["createOrUpdateIdpGroupConnectionsInOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["createOrUpdateIdpGroupConnectionsInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    externalIdpGroupInfoForOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["externalIdpGroupInfoForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["externalIdpGroupInfoForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    linkExternalIdpGroupToTeamForOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["linkExternalIdpGroupToTeamForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["linkExternalIdpGroupToTeamForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listExternalIdpGroupsForOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listExternalIdpGroupsForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["listExternalIdpGroupsForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listIdpGroupsForOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listIdpGroupsForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["listIdpGroupsForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listIdpGroupsInOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listIdpGroupsInOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["listIdpGroupsInOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    listLinkedExternalIdpGroupsToTeamForOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["listLinkedExternalIdpGroupsToTeamForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["listLinkedExternalIdpGroupsToTeamForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };

    unlinkExternalIdpGroupFromTeamForOrg: {
      (
        params?: RestEndpointMethodTypes["teams"]["unlinkExternalIdpGroupFromTeamForOrg"]["parameters"],
      ): Promise<
        RestEndpointMethodTypes["teams"]["unlinkExternalIdpGroupFromTeamForOrg"]["response"]
      >;
      defaults: RequestInterface["defaults"];
      endpoint: EndpointInterface<{ url: string }>;
    };
  };
};
