# Security Policy

<!-- LLM GUIDANCE
Purpose: Define how security vulnerabilities are reported and handled.
Update triggers: When the security contact, supported versions, or disclosure policy changes.
Expected detail: Clear instructions for reporters and maintainers.
Related files: CONTRIBUTING.md, .claude/rules/safety.md
-->

## Supported Versions

<!-- SCAFFOLDED: Update this table when the project has released versions. -->

| Version | Supported |
| ------- | --------- |
| latest  | Yes       |

## Reporting a Vulnerability

Do not report security vulnerabilities through public GitHub issues.

Instead, report them by creating a private GitHub Security Advisory or contacting **@danielcomeau** on GitHub.

Include:

- Description of the vulnerability.
- Steps to reproduce.
- Potential impact.
- Suggested fix, if you have one.

You should receive a response within 48 hours. If you do not, follow up.

## Disclosure Policy

- We will acknowledge receipt within 48 hours.
- We will confirm the vulnerability and determine its impact within 7 days.
- We will release a fix within 30 days of confirmation.
- We will publicly disclose the vulnerability after the fix is released.

## Security Best Practices for Contributors

- Do not commit secrets, API keys, or credentials.
- Use environment variables for sensitive configuration.
- Follow the OWASP top 10 guidelines.
- Review the safety rules in `.claude/rules/safety.md`.
