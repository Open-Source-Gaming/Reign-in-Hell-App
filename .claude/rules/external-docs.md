# External Documentation Rule

## Core Rule

When working with external platforms or services that have fast-moving documentation, always check their official documentation first before relying on training data or cached knowledge.

## When This Rule Applies

This rule is **opt-in** and should be enabled for projects that depend on:

- Cloud platforms (AWS, GCP, Azure, Cloudflare, Vercel, Netlify)
- Fast-moving frameworks (Next.js, Nuxt, SvelteKit)
- API services with frequent updates (Stripe, Twilio, GitHub API)
- Developer tools with rapid release cycles (Docker, Kubernetes, Terraform)

## Implementation

To enable this rule for your project:

1. Identify the external platforms your project depends on
2. Add their documentation URLs to the "Approved Sources" section below
3. Update your `CLAUDE.md` to reference this rule
4. Train team members to always check official docs first

## Approved Sources

Add your project's external documentation sources here. The rows below are populated automatically when relevant Section 12 answers are given during initialization.

| Platform/Service           | Documentation URL                              | Notes                                        |
| -------------------------- | ---------------------------------------------- | -------------------------------------------- |
| Example Platform           | https://docs.example.com                       | Check API version compatibility.             |
| Cloudflare (Workers/Pages) | https://developers.cloudflare.com/             | Enabled when Q6.1 = Cloudflare Pages.        |
| Ghost Content API          | https://ghost.org/docs/content-api/            | Enabled when Q12.4 = Ghost.                  |
| Ghost Admin API            | https://ghost.org/docs/admin-api/              | Enabled when Q12.4 = Ghost (drafts/staging). |
| Astro                      | https://docs.astro.build/                      | Enabled when Q12.3 = Astro.                  |

## Workflow

1. **Before implementing** a feature that uses an external service, check their latest documentation
2. **Before troubleshooting** an integration issue, verify the current API documentation
3. **Before suggesting** a configuration change, confirm it matches the current platform documentation
4. **After reading** external docs, cross-reference with any internal documentation to ensure consistency

## Rationale

External platforms update their APIs, deprecate features, and introduce new capabilities faster than AI training data can capture. This rule prevents:

- Using deprecated API endpoints
- Missing new security requirements
- Implementing outdated patterns
- Relying on stale configuration examples

## Example Usage

```markdown
# In your CLAUDE.md file:

## External Documentation Priority

This project uses external platforms that change rapidly. Follow the external documentation rule in `.claude/rules/external-docs.md`.

Current external dependencies:

- Cloudflare Workers (https://developers.cloudflare.com/)
- Stripe API (https://stripe.com/docs)
```
