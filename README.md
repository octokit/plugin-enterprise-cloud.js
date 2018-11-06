# plugin-scim.js

> Octokit plugin for GitHub’s SCIM API

[![Build Status](https://travis-ci.org/octokit/plugin-scim.js.svg?branch=master)](https://travis-ci.org/octokit/plugin-scim.js)
[![Coverage Status](https://coveralls.io/repos/octokit/plugin-scim.js/badge.svg?branch=master)](https://coveralls.io/github/octokit/plugin-scim.js?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/octokit/plugin-scim.js.svg)](https://greenkeeper.io/)

`@octokit/rest` does not include endpoint methods for the SCIM API, because it is available only to [organizations on GitHub Business Cloud](https://help.github.com/articles/organization-billing-plans/#business-plan). See also the [GitHub REST SCIM API documentation](https://developer.github.com/v3/scim/).

## Usage

```js
const Octokit = require('@octokit/rest')
  .plugin('@octokit/scim-routes')
const octokit = new Octokit()

octokit.scim.listProvisionedIdentities({
  filter: 'userName eq "Octocat"'
})
```

## How it works

The SCIM route definitions are build automatically from [`@octokit/routes`](https://github.com/octokit/routes). Each time there is a new `@octokit/routes` release, [Greenkeeper](https://greenkeeper.io/) will send a pull request which updates the dependency in `package.json` and `package-lock.json`. That kicks of a build on Travis CI where the `greenkeeper-routes-update` script is run. If there is a change, the script updates the `routes.json` file in the pull request.

## LICENS

[MIT](LICENSE)
