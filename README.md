# plugin-enterprise-cloud.js

> Octokit plugin for GitHub’s Enterprise Cloud REST APIs

[![@latest](https://img.shields.io/npm/v/@octokit/plugin-enterprise-cloud.svg)](https://www.npmjs.com/package/@octokit/plugin-enterprise-cloud)
[![Build Status](https://github.com/octokit/plugin-enterprise-cloud.js/workflows/Test/badge.svg)](https://github.com/octokit/plugin-enterprise-cloud.js/actions?workflow=Test)

`@octokit/rest` does not include endpoint methods for Enterprise Cloud, because it is available only to [organizations on GitHub Enterprise Cloud](https://docs.github.com/en/github/getting-started-with-github/githubs-products#github-enterprise). Learn more about [About enterprise accounts](https://docs.github.com/en/github/setting-up-and-managing-your-enterprise/about-enterprise-accounts).

## Usage

<table>
<tbody valign=top align=left>
<tr><th>
Browsers
</th><td width=100%>

Load `@octokit/plugin-enterprise-cloud` and [`@octokit/core`](https://github.com/octokit/core.js) (or core-compatible module) directly from [cdn.skypack.dev](https://cdn.skypack.dev)

```html
<script type="module">
  import { Octokit } from "https://cdn.skypack.dev/@octokit/core";
  import { enterpriseCloud } from "https://cdn.skypack.dev/@octokit/plugin-enterprise-cloud";
</script>
```

</td></tr>
<tr><th>
Node
</th><td>

Install with `npm install @octokit/core @octokit/plugin-enterprise-cloud`. Optionally replace `@octokit/core` with a core-compatible module

```js
const { Octokit } = require("@octokit/core");
const { enterpriseCloud } = require("@octokit/plugin-enterprise-cloud");
```

</td></tr>
</tbody>
</table>

```js
const MyOctokit = Octokit.plugin(enterpriseCloud);
const octokit = new MyOctokit({ auth: "secret123" });

octokit.scim.listProvisionedIdentities({
  filter: 'userName eq "Octocat"',
});
```

## How it works

The GitHub Enterprise Cloud route definitions are build automatically from [`@octokit/routes`](https://github.com/octokit/routes). Each time there is a new `@octokit/routes` release, the [`.github/workflows/routes-update.yml`](.github/workflows/routes-update.yml) workflow is triggered. If an update to [`routes.json`](routes.json) is found, a pull request is created.

## LICENSE

[MIT](LICENSE)
