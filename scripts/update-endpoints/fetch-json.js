const { writeFileSync } = require('fs')
const path = require('path')

const { graphql } = require('@octokit/graphql')

if (!process.env.VERSION) {
  throw new Error('VERSION environment variable must be set')
}

const QUERY = `
query ($version: String) {
  endpoints(version: $version, filter: { isLegacy: false, isGithubCloudOnly: true }) {
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
}`

main()

async function main () {
  const { endpoints } = await graphql(QUERY, {
    url: 'https://octokit-routes-graphql-server.now.sh/',
    version: process.env.VERSION
  })

  writeFileSync(
    path.resolve(__dirname, 'generated', 'endpoints.json'),
    JSON.stringify(endpoints, null, 2) + '\n'
  )
}
