const { writeFileSync } = require("fs");
const path = require("path");

const { graphql } = require("@octokit/graphql");

const QUERY = `
{
  endpoints(filter: { isLegacy: false, isGithubCloudOnly: true }) {
    scope(format: CAMELCASE)
    id(format: CAMELCASE)
    method
    url
    isDeprecated
    documentationUrl
    previews(required: true) {
      name
    }
    headers {
      name
      value
    }
    parameters {
      name
      in
      type
      required
      enum
      allowNull
      mapToData
      validation
      alias
      deprecated
    }
    responses {
      code
      examples {
        data
      }
    }
    renamed {
      before(format: CAMELCASE)
      after(format: CAMELCASE)
      date
      note
    }
  }
}`;

main();

async function main() {
  const { endpoints } = await graphql(QUERY, {
    url: "https://octokit-routes-graphql-server.now.sh/"
  });

  writeFileSync(
    path.resolve(__dirname, "generated", "endpoints.json"),
    JSON.stringify(endpoints, null, 2) + "\n"
  );
}
