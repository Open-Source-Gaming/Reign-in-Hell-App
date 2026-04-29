# Required GitHub Secrets and Variables: Ghost CMS

| Name                       | Type     | Purpose                                |
| -------------------------- | -------- | -------------------------------------- |
| `GHOST_URL`                | Secret   | Ghost public URL.                      |
| `GHOST_CONTENT_API_KEY`    | Secret   | Ghost Content API key.                 |
| `MYSQL_ROOT_PASSWORD`      | Secret   | MySQL root password.                   |
| `MYSQL_PASSWORD`           | Secret   | MySQL application password.            |
| `MAIL_USER`                | Secret   | Mailgun SMTP user.                     |
| `MAIL_PASS`                | Secret   | Mailgun SMTP password.                 |
| `CF_ACCESS_CLIENT_ID`      | Secret   | Cloudflare Access service token ID.    |
| `CF_ACCESS_CLIENT_SECRET`  | Secret   | Cloudflare Access service token secret. |
| `MYSQL_USER`               | Variable | MySQL application user (e.g., `ghost`). |
| `MYSQL_DATABASE`           | Variable | MySQL database name (e.g., `ghost`).    |
| `MAIL_TRANSPORT`           | Variable | Mail transport method (e.g., `SMTP`).   |
| `MAIL_SERVICE`             | Variable | Mail service provider (e.g., `Mailgun`). |

## Setting Up the Ghost Content API Key

1. Log into Ghost Admin at `ghost.{{DOMAIN}}/ghost`.
2. Go to Settings, then Integrations, then Add custom integration.
3. Name it "Astro SSG" (or similar).
4. Copy the Content API Key.
5. Add it to GitHub Secrets as `GHOST_CONTENT_API_KEY`.
