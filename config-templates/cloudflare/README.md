# Cloudflare Pages Template

Files in this directory are copied into a project when `Q6.1 = Cloudflare Pages` during `/initialize-project`.

## Placeholders

Replace before writing the file to the project:

| Placeholder        | Source             | Example         |
| ------------------ | ------------------ | --------------- |
| `{{PROJECT_NAME}}` | Q1.1 Project name  | `my-portfolio`  |
| `{{DOMAIN}}`       | Q12.5 Domain       | `example.com`   |

## Destination Map

| Source (this dir)              | Destination (project root)         | Notes                                    |
| ------------------------------ | ---------------------------------- | ---------------------------------------- |
| `wrangler.toml.template`       | `wrangler.toml`                    | Uncomment `[vars]` block when CMS = Ghost. |
| `worker.ts`                    | `worker.ts`                        | Use this when CMS = none.                |
| `worker-with-api.ts`           | `worker.ts`                        | Use this instead when CMS = Ghost.       |
| `.dev.vars.example`            | `.dev.vars.example`                |                                           |
| `astro.config.snippet.mjs`     | Merge into user's `astro.config.mjs` | Only if SSG = Astro.                    |
| `Makefile.snippet`             | Append to project `Makefile`       |                                           |
| `workflows/deploy.yml.template`| `.github/workflows/deploy.yml`     |                                           |
| `workflows/build.yml.template` | `.github/workflows/build.yml`      |                                           |
| `secrets.md`                   | Surface to user, do not copy       | Tells user what GitHub Secrets to set.   |

## Post-Copy Steps for the User

1. Run `npx wrangler pages project create {{PROJECT_NAME}}` once.
2. Add the secrets from `secrets.md` to GitHub repository secrets.
3. Run `make dev-worker` to test the Worker locally.
4. Push to trigger the deploy workflow.
