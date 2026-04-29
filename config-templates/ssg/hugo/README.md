# Hugo SSG Setup (Stub)

The template does not currently provide first-class Hugo integration. Use this directory as a placeholder for project-specific Hugo configuration.

## Steps

1. Install Hugo: https://gohugo.io/installation/.
2. From the project root:

   ```
   hugo new site site
   ```

3. Adapt `config-templates/cloudflare/wrangler.toml.template` so `[assets].directory = "./site/public"`.
4. Adapt `config-templates/cloudflare/workflows/build.yml.template` to run `hugo --minify` instead of `yarn build`.

## Ghost Integration

Hugo can fetch from Ghost via a build-time data file (`hugo --getJSON`) or a custom theme partial. The Ghost normalizers in `config-templates/ghost-cms/normalizers/` are TypeScript and not directly portable to Hugo's Go template system; treat them as a reference for the tag-prefix contract only.

## Reference

- Hugo docs: https://gohugo.io/documentation/.
- Ghost Content API: https://ghost.org/docs/content-api/.
