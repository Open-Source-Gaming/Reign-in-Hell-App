# Eleventy SSG Setup (Stub)

The template does not currently provide first-class Eleventy integration. Use this directory as a placeholder for project-specific 11ty configuration.

## Steps

1. From the project root:

   ```
   mkdir eleventy && cd eleventy && npm init -y && npm install --save-dev @11ty/eleventy
   ```

2. Adapt `config-templates/cloudflare/wrangler.toml.template` so `[assets].directory = "./eleventy/_site"`.
3. Adapt `config-templates/cloudflare/workflows/build.yml.template` to run `npx @11ty/eleventy` instead of `yarn build`.

## Ghost Integration

The Ghost normalizers in `config-templates/ghost-cms/normalizers/` are TypeScript and target Node 20+. They can be reused directly inside Eleventy's `_data/posts.js` data file with minimal adaptation (drop the `.ts` extension, transpile or use `tsx`/`ts-node`).

## Reference

- Eleventy docs: https://www.11ty.dev/docs/.
- Ghost Content API: https://ghost.org/docs/content-api/.
