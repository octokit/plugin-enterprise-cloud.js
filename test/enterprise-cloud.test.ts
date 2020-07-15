import fetchMock from "fetch-mock";
import { Octokit } from "@octokit/core";

import { enterpriseCloud } from "../src";

describe("enterpriseCloud plugin", () => {
  it("README example", async () => {
    const mock = fetchMock
      .sandbox()
      .get("path:/scim/v2/organizations/octokit/Users", [{ ok: true }], {
        query: {
          filter: 'userName eq "Octocat"',
        },
      });

    const MyOctokit = Octokit.plugin(enterpriseCloud);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock,
      },
    });

    // See https://developer.github.com/v3/scim/#get-a-list-of-provisioned-identities
    const { data } = await octokit.scim.listProvisionedIdentities({
      org: "octokit",
      filter: 'userName eq "Octocat"',
    });

    expect(data).toStrictEqual([{ ok: true }]);
  });

  it("deprecated method", async () => {
    const mock = fetchMock
      .sandbox()
      .post("path:/scim/v2/organizations/octokit/Users", [{ ok: true }], {
        body: {
          schemas: ["urn:ietf:params:scim:schemas:core:2.0:User"],
          userName: "mona.octocat@okta.example.com",
          name: {
            familyName: "Octocat",
            givenName: "Mona",
          },
          emails: [
            {
              value: "mona.octocat@okta.example.com",
              type: "work",
              primary: true,
            },
          ],
        },
      });

    const MyOctokit = Octokit.plugin(enterpriseCloud);
    const octokit = new MyOctokit({
      auth: "secret123",
      request: {
        fetch: mock,
      },
    });

    // See https://developer.github.com/v3/scim/#provision-and-invite-a-scim-user
    const { data } = await octokit.scim.provisionAndInviteUser({
      org: "octokit",
      schemas: ["urn:ietf:params:scim:schemas:core:2.0:User"],
      userName: "mona.octocat@okta.example.com",
      name: {
        familyName: "Octocat",
        givenName: "Mona",
      },
      emails: [
        {
          value: "mona.octocat@okta.example.com",
          type: "work",
          primary: true,
        },
      ],
    });

    expect(data).toStrictEqual([{ ok: true }]);
  });
});
