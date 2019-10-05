# plugin-scim.js

> Octokit plugin for GitHub’s SCIM API

[![npm](https://img.shields.io/npm/v/@octokit/plugin-scim.svg)](https://www.npmjs.com/package/@octokit/plugin-scim)
![Build Status](https://github.com/octokit/plugin-scim.js/workflows/Test/badge.svg)
[![Greenkeeper](https://badges.greenkeeper.io/octokit/plugin-scim.js.svg)](https://greenkeeper.io/)

`@octokit/rest` does not include endpoint methods for the SCIM API, because it is available only to [organizations on GitHub Business Cloud](https://help.github.com/articles/organization-billing-plans/#business-plan). See also the [GitHub REST SCIM API documentation](https://developer.github.com/v3/scim/).

## Usage

```js
const Octokit = require("@octokit/rest").plugin(
  require("@octokit/plugin-scim")
);
const octokit = new Octokit();

octokit.scim.listProvisionedIdentities({
  filter: 'userName eq "Octocat"'
});
```

## How it works

The SCIM route definitions are build automatically from [`@octokit/routes`](https://github.com/octokit/routes). Each time there is a new `@octokit/routes` release, the [`.github/workflows/routes-update.yml`](.github/workflows/routes-update.yml) workflow is triggered. If an update to [`routes.json`](routes.json) is found, a pull request is created.

## LICENSE

[MIT](LICENSE)
