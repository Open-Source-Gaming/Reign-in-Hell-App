# Ghost CMS Template

Files in this directory are copied into a project when `Q12.4 = Ghost` during `/initialize-project`.

## Placeholders

| Placeholder          | Source                       | Example         |
| -------------------- | ---------------------------- | --------------- |
| `{{PROJECT_NAME}}`   | Q1.1 Project name            | `my-portfolio`  |
| `{{PROJECT_PREFIX}}` | Q12.6 Docker container prefix | `myproj`       |
| `{{DOMAIN}}`         | Q12.5 Domain                 | `example.com`   |

## Destination Map

| Source (this dir)                         | Destination                                | Notes                                                      |
| ----------------------------------------- | ------------------------------------------ | ---------------------------------------------------------- |
| `docker-compose.yml.template`             | `docker-compose.yml` (project root)        |                                                            |
| `ghost.env.example`                       | `ghost/.env.example`                       | User copies to `ghost/.env` and fills in secrets.          |
| `Makefile.snippet`                        | Append to project `Makefile`               |                                                            |
| `workflows/deploy-ghost.yml.template`     | `.github/workflows/deploy-ghost.yml`       |                                                            |
| `workflows/content-sync.yml.template`     | `.github/workflows/content-sync.yml`       |                                                            |
| `CONTENT_TAXONOMY.md`                     | `CONTENT_TAXONOMY.md` (project root)       | Replaces the scaffolded version. Confirm with user first.  |
| `normalizers/types.ts`                    | `astro/src/lib/content/types.ts`           | If SSG = Astro. Otherwise place under SSG's lib directory. |
| `normalizers/ghost.ts`                    | `astro/src/lib/content/normalizers/ghost.ts` |                                                          |
| `normalizers/fetchers.ts`                 | `astro/src/lib/content/fetchers/ghost.ts`  |                                                            |
| `secrets.md`                              | Surface to user, do not copy               | Tells user what GitHub Secrets and Variables to set.       |
| `setup-checklist.md`                      | Surface to user, do not copy               | Cloudflare Tunnel routing, Content API key, runner setup.  |

## Architecture (Reference)

```
{{DOMAIN}}            -> Cloudflare Pages (Astro static files)
ghost.{{DOMAIN}}      -> Cloudflare Tunnel -> {{PROJECT_PREFIX}}-ghost (:2368)
```

Ghost's port 2368 is internal only. External access is routed through a Cloudflare Tunnel; the Worker reads `GHOST_URL` so the Ghost URL never reaches the browser.

## Architecture Decision

Single Ghost production instance serves all environments. No persistent dev instance.

- Production builds use `GHOST_CONTENT_API_KEY` (Content API, published posts only).
- Staging builds use `GHOST_ADMIN_API_KEY` (Admin API, drafts plus published).
- Ghost-level changes (upgrades, webhook testing): spin up a temporary dev instance on demand, tear down when done.

This avoids content sync complexity. Ghost has no native sync, and export/import is manual with broken images.
