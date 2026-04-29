# Required GitHub Secrets: Cloudflare

Add these to the repository's GitHub Secrets (Settings, Secrets and variables, Actions) before the deploy workflow runs.

| Secret                      | Purpose                                              | Required When               |
| --------------------------- | ---------------------------------------------------- | --------------------------- |
| `CLOUDFLARE_API_TOKEN`      | Wrangler CLI authentication for Cloudflare Pages.    | Always.                     |
| `CLOUDFLARE_ACCOUNT_ID`     | Cloudflare account identifier.                       | Always.                     |
| `PUBLIC_TURNSTILE_SITE_KEY` | Turnstile widget site key (frontend, public).        | If using bot protection.    |
| `TURNSTILE_SECRET_KEY`      | Turnstile server-side verification secret.           | If using bot protection.    |

## Setup Steps

1. Create the Cloudflare API token: dash.cloudflare.com, My Profile, API Tokens. Use the "Edit Cloudflare Workers" template.
2. Find the account ID in the right sidebar of any Cloudflare zone overview.
3. (Optional) Create a Turnstile widget at dash.cloudflare.com, Turnstile, Add site. Copy both the site key and secret key.
