# Static Site Generator Templates

Used when `Q12.2 = yes` (the project is a static site). The chosen SSG (`Q12.3`) determines which subdirectory applies.

| SSG       | Subdirectory | Status                              |
| --------- | ------------ | ----------------------------------- |
| Astro     | `astro/`     | Recommended; integrates with Cloudflare/Ghost templates. |
| Hugo      | `hugo/`      | Stub. Pointer only.                 |
| Eleventy  | `eleventy/`  | Stub. Pointer only.                 |

The `/initialize-project` command does not run the SSG's own scaffolder. It surfaces the matching `README.md` from the chosen subdirectory and lets the user run the SSG's CLI themselves.
