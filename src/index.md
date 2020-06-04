---
layout: default
title: Set up your new site!
---

Your site was successfully deployed, but it still needs to be configured. To finish the setup, follow the steps below!

## Step 1: Get the required environment variables

To set up your site, you need to set two environment variables in [your Netlify deploy settings](https://app.netlify.com/sites/{{settings.siteName}}/settings/deploys#environment):

{% for envVar in settings.requiredEnvVars %}
- `{{ envVar[0] }}`: {{ envVar[1] }}
{% endfor %}

Add the environment variables, then click the “Save” button.

## Step 2: Trigger a new deploy

Once you’ve set the environment variables, [trigger a new deploy](https://app.netlify.com/sites/{{settings.siteName}}/deploys) to rebuild the site.

That’s all! The site will pick up your environment variables and build properly!
