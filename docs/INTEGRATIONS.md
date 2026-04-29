# Integrations

<!-- LLM GUIDANCE
Purpose: Document external service integrations, APIs consumed, and third-party dependencies.
Update triggers: When an external integration is added, removed, or its configuration changes.
Expected detail: Service name, purpose, auth method, configuration, and failure handling.
Related files: docs/ENVIRONMENT.md, docs/ARCHITECTURE.md, docs/API.md
-->

> **SCAFFOLDED**: Fill in as external integrations are added to the project.

## When to Fill This In

- When the project integrates with an external API or service.
- When a third-party dependency requires configuration beyond a simple package install.
- When the project depends on an external system for core functionality.

## Integration Index

| Service           | Purpose                              | Auth Method               | Status                          |
| ----------------- | ------------------------------------ | ------------------------- | ------------------------------- |
| Notion            | Planning sync                        | API token via MCP         | Configured                      |
| Cloudflare Pages  | Static site hosting and Worker shim  | API token + account ID    | Filled in if Q6.1 = Cloudflare. |
| Cloudflare Tunnel | Routes `ghost.<domain>` to container | Tunnel token              | Filled in if Q12.7 = yes.       |
| Ghost CMS         | Headless content management          | Content API key (build-time); Admin API key (staging) | Filled in if Q12.4 = Ghost. |
| [TBD]             | [TBD]                                | [TBD]                     | [TBD]                           |

## Notion Integration

- **Purpose**: Bidirectional sync for planning, roadmap, and requirements.
- **Auth**: API token configured via MCP server (see `.mcp.json`).
- **Sync workflow**: See [SYNC.md](SYNC.md).
- **Failure handling**: If Notion is unreachable, local docs are the source of truth until sync resumes.

## Cloudflare Pages Integration (filled in if Q6.1 = Cloudflare Pages)

- **Purpose**: Host the static site build and serve a small Worker shim for API routes.
- **Auth method**: `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in GitHub Secrets.
- **Configuration**: `wrangler.toml` at the project root. Build artifact directory is `astro/dist` (or the SSG's output).
- **Failure handling**: Wrangler deploy is idempotent; failed deploys leave the prior production version live.
- **Documentation**: https://developers.cloudflare.com/pages/.

## Ghost CMS Integration (filled in if Q12.4 = Ghost)

- **Purpose**: Authoring environment for blog posts, articles, project pages.
- **Auth method**: `GHOST_CONTENT_API_KEY` for builds (read-only, published only); `GHOST_ADMIN_API_KEY` for staging (drafts plus published).
- **Environment variables**: `GHOST_URL`, `GHOST_CONTENT_API_KEY`, optional `CF_ACCESS_CLIENT_ID` and `CF_ACCESS_CLIENT_SECRET` (when behind Cloudflare Access).
- **Configuration**: `docker-compose.yml` (Ghost + MySQL containers). Tag-prefix taxonomy in `CONTENT_TAXONOMY.md`.
- **Failure handling**: If the Ghost API is unreachable at build time, the build fails fast. The previously deployed static site stays live.
- **Documentation**: https://ghost.org/docs/content-api/, https://ghost.org/docs/admin-api/.

## Integration Template

### [Service Name]

- **Purpose**: Why this service is used.
- **Auth method**: API key, OAuth, token, etc.
- **Environment variables**: List the required env vars (see [ENVIRONMENT.md](ENVIRONMENT.md)).
- **Configuration**: Where and how the integration is configured.
- **Failure handling**: What happens when this service is unavailable.
- **Rate limits**: Any rate limits to be aware of.
- **Documentation**: Link to the service's API docs.

## Cross-References

- Environment variables: [ENVIRONMENT.md](ENVIRONMENT.md)
- Architecture: [ARCHITECTURE.md](ARCHITECTURE.md)
- API docs: [API.md](API.md)
