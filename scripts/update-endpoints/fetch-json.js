const { writeFileSync } = require("fs");
const path = require("path");

const { graphql } = require("@octokit/graphql");

if (!process.env.VERSION) {
  throw new Error("VERSION environment variable must be set");
}

const version = process.env.VERSION.replace(/^v/, "");

const QUERY = `
query ($version: String!, $ignoreChangesBefore: String!) {
  endpoints(version: $version, ignoreChangesBefore: $ignoreChangesBefore, filter: { isGithubCloudOnly: true }) {
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
      before {
        scope(format: CAMELCASE)
        id(format: CAMELCASE)
      }
      after {
        scope(format: CAMELCASE)
        id(format: CAMELCASE)
      }
      date
      note
    }
  }
}`;

main();

async function main() {
  const { endpoints } = await graphql(QUERY, {
    url: "https://github-openapi-graphql-server.vercel.app/api/graphql",
    version: process.env.VERSION,
    ignoreChangesBefore: "2019-01-01",
  });

  writeFileSync(
    path.resolve(__dirname, "generated", "endpoints.json"),
    JSON.stringify(endpoints, null, 2) + "\n"
  );
}
