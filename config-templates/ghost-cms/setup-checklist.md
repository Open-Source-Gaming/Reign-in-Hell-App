# Ghost CMS Setup Checklist

Run through this once after `/initialize-project` writes the Ghost templates into the project.

## VPS Prerequisites

- [ ] Docker and Docker Compose installed on the VPS.
- [ ] `personal` external Docker network created: `docker network create personal`.
- [ ] Cloudflare Tunnel configured to route `ghost.{{DOMAIN}}` to `{{PROJECT_PREFIX}}-ghost:2368`.
- [ ] Self-hosted GitHub Actions runner installed on the VPS (used by `deploy-ghost.yml` and `content-sync.yml`).

## Initial Ghost Boot

- [ ] Copy `ghost/.env.example` to `ghost/.env` on the VPS and fill in real secrets.
- [ ] Trigger the `Deploy Ghost` workflow once (or run `make deploy-ghost` on the VPS).
- [ ] Browse to `ghost.{{DOMAIN}}/ghost` and complete the Ghost owner setup.

## Cloudflare Access (Optional)

If `Q12.7 = yes`, protect Ghost behind Cloudflare Access:

- [ ] Create a Cloudflare Access application targeting `ghost.{{DOMAIN}}`.
- [ ] Add a service token under Access, Service Auth.
- [ ] Add `CF_ACCESS_CLIENT_ID` and `CF_ACCESS_CLIENT_SECRET` to GitHub Secrets.
- [ ] Confirm the build runner can still reach Ghost (the runner uses these tokens).

## Content API Key

- [ ] Create the Content API integration in Ghost Admin.
- [ ] Add `GHOST_CONTENT_API_KEY` and `GHOST_URL` to GitHub Secrets.
- [ ] Trigger the build workflow manually to confirm the SSG can fetch posts.

## Content Sync

- [ ] Confirm `content-sync.yml` has run on its 30-minute cron at least once.
- [ ] Edit a post in Ghost; verify the next sync triggers a deploy.

## Verification Commands

Run on the VPS after first deploy:

```
docker ps --filter "name={{PROJECT_PREFIX}}-"
docker logs {{PROJECT_PREFIX}}-ghost --tail 50
docker logs {{PROJECT_PREFIX}}-db --tail 50
```
