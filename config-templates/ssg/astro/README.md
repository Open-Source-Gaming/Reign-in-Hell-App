# Astro SSG Setup

The template does not auto-scaffold Astro. Run the official scaffolder yourself.

## Steps

1. From the project root:

   ```
   yarn create astro@latest astro -- --template minimal --typescript strict --install --no-git
   ```

2. If `Q6.1 = Cloudflare Pages`, merge `config-templates/cloudflare/astro.config.snippet.mjs` into `astro/astro.config.mjs`. Add `devApiProxy` to the `vite.plugins` array of your `defineConfig({})`.

3. If `Q12.4 = Ghost`, copy the normalizers:
   - `config-templates/ghost-cms/normalizers/types.ts` -> `astro/src/lib/content/types.ts`
   - `config-templates/ghost-cms/normalizers/ghost.ts` -> `astro/src/lib/content/normalizers/ghost.ts`
   - `config-templates/ghost-cms/normalizers/fetchers.ts` -> `astro/src/lib/content/fetchers/ghost.ts`

4. Add a build-time `getStaticPaths` (or content collection loader) that calls `fetchGhostPosts` and applies `parseTags` to render content.

## Reference

- Astro docs: https://docs.astro.build/
- Cloudflare Pages with Astro: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
