# Initialize Project

Walk through the project initialization questionnaire to configure this repository for a specific project.

## Instructions

1. Read `docs/initialization/INITIAL_QUESTIONS.md` to load the full questionnaire.
2. Read `docs/initialization/PROJECT_ANSWERS.md` to check current progress.
3. Read `docs/initialization/COMPLETION_CHECKLIST.md` to see which sections are done.

4. For each unanswered question (marked `[ ]` or `[-]`):
   a. Ask the user the question clearly, including the available options if applicable.
   b. Wait for the user's answer.
   c. Write the answer to `docs/initialization/PROJECT_ANSWERS.md` under the matching answer ID.
   d. Propagate the answer to every destination file listed for that question.
   e. Check off each propagated file in `PROJECT_ANSWERS.md`.
   f. Update the question's completion state in `INITIAL_QUESTIONS.md` to `[x]` only when all propagations are done.

5. After completing a full section, update `COMPLETION_CHECKLIST.md`.

6. When all required sections are complete:
   a. **Configure formatting and linting automatically** based on Q4.1 (Primary language):
   - Copy appropriate config templates from `config-templates/` to project root
   - Create IDE workspace configurations (.vscode/, .editorconfig)
   - Add formatting scripts to package.json or equivalent
   - Update `.claude/rules/code-style.md` with specific tool information
     b. Set the initialization status to "Complete" in `COMPLETION_CHECKLIST.md`.
     c. Run through the propagation verification checklist.
     d. Remove SCAFFOLDED markers from files that were filled in.
     e. Suggest creating an initial ADR if architectural decisions were made.

## Rules

- Do not skip questions. Ask them in order.
- Do not mark a question `[x]` until all destination files are updated.
- If a question has a condition (e.g., "only if monorepo"), check the condition and skip if not applicable.
- If the user gives a partial answer, mark the question `[-]` and note what is missing.
- Do not commit or push changes during initialization. Let the user decide when to commit.
- If the user wants to stop partway through, save all progress and note where to resume.

## Arguments

$ARGUMENTS

If the user provides a section number (e.g., "5"), start from that section. Otherwise, start from the first unanswered question.

## Automated Formatting and Linting Setup

After completing the questionnaire, automatically configure formatting and linting based on Q4.1 (Primary language):

### JavaScript/TypeScript Projects:

1. Copy `.prettierrc.json` and `.prettierignore` from `config-templates/javascript-typescript/`
2. Copy `.eslintrc.json` and `.eslintignore` from same directory
3. Create package.json scripts: `format`, `lint`, `lint:fix`
4. Example scripts to add:
   ```json
   {
     "scripts": {
       "format": "prettier --write .",
       "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
       "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix"
     }
   }
   ```

### Python Projects:

1. Copy `pyproject.toml` from `config-templates/python/`
2. Add Black and Ruff configuration sections
3. Create Makefile or scripts for formatting:

   ```makefile
   format:
   	black .
   	ruff check . --fix

   lint:
   	ruff check .
   	mypy .
   ```

### Universal Setup (All Projects):

1. Copy `.editorconfig` from `config-templates/shared/`
2. Copy `.gitattributes` for line ending consistency
3. Create `.vscode/` directory with:
   - `settings.json` (workspace formatting settings)
   - `extensions.json` (recommended extensions)
   - `tasks.json` (formatting tasks)
4. Update `.claude/rules/code-style.md` to include specific tool names and settings
5. Verify all tools are properly configured and functional

### Validation Steps:

- Test that formatter runs without errors: `npm run format` or `make format`
- Test that linter runs without errors: `npm run lint` or `make lint`
- Verify VS Code picks up the workspace settings
- Ensure .editorconfig is recognized by both VS Code and JetBrains IDEs

## Section 12 Branch: Web App, SSG, and CMS

After the standard sections complete, branch on Section 12 answers. Skip the entire branch if Q12.1 = no.

### Placeholder Substitution

Before writing any file from `config-templates/cloudflare/`, `config-templates/ghost-cms/`, or `config-templates/ssg/<choice>/`, substitute these tokens:

| Placeholder          | Source                                    |
| -------------------- | ----------------------------------------- |
| `{{PROJECT_NAME}}`   | A1.1 (project name)                       |
| `{{PROJECT_PREFIX}}` | A12.6 (Docker container prefix)           |
| `{{DOMAIN}}`         | A12.5 (production domain)                 |

If a token's source answer was skipped (because the question was conditional), prompt the user for the value before writing the file. Never leave a literal `{{...}}` in a destination file outside `config-templates/`.

### Cloudflare Pages Branch (Q6.1 = Cloudflare Pages)

1. Copy `config-templates/cloudflare/wrangler.toml.template` -> `wrangler.toml` (project root).
2. If Q12.4 = Ghost: copy `config-templates/cloudflare/worker-with-api.ts` -> `worker.ts`. Otherwise copy `config-templates/cloudflare/worker.ts` -> `worker.ts`.
3. Copy `config-templates/cloudflare/.dev.vars.example` -> `.dev.vars.example`.
4. Append `config-templates/cloudflare/Makefile.snippet` to the project `Makefile` (create the Makefile if it doesn't exist).
5. Copy `config-templates/cloudflare/workflows/deploy.yml.template` -> `.github/workflows/deploy.yml`.
6. Copy `config-templates/cloudflare/workflows/build.yml.template` -> `.github/workflows/build.yml`.
7. Add `.dev.vars`, `.wrangler/`, and `astro/dist/` to `.gitignore`.
8. Surface `config-templates/cloudflare/secrets.md` to the user as next-step guidance.

### Ghost CMS Branch (Q12.4 = Ghost)

1. Copy `config-templates/ghost-cms/docker-compose.yml.template` -> `docker-compose.yml` (project root).
2. Copy `config-templates/ghost-cms/ghost.env.example` -> `ghost/.env.example` (create the `ghost/` directory).
3. Append `config-templates/ghost-cms/Makefile.snippet` to the project `Makefile`.
4. Copy `config-templates/ghost-cms/workflows/deploy-ghost.yml.template` -> `.github/workflows/deploy-ghost.yml`.
5. Copy `config-templates/ghost-cms/workflows/content-sync.yml.template` -> `.github/workflows/content-sync.yml`.
6. Confirm with the user, then replace the scaffolded `CONTENT_TAXONOMY.md` at the project root with `config-templates/ghost-cms/CONTENT_TAXONOMY.md`.
7. Copy normalizer files to the SSG project source tree (path depends on Q12.3):
   - Astro: `astro/src/lib/content/types.ts`, `astro/src/lib/content/normalizers/ghost.ts`, `astro/src/lib/content/fetchers/ghost.ts`.
   - Hugo / Eleventy / other: surface the files and let the user place them.
8. Add `ghost/.env`, `ghost/content/`, and `ghost/data/` to `.gitignore`.
9. Surface `config-templates/ghost-cms/secrets.md` and `config-templates/ghost-cms/setup-checklist.md` to the user.

### SSG Branch (Q12.3 != none)

Do not auto-run the SSG's scaffolder. Read `config-templates/ssg/<choice>/README.md` and surface its contents to the user as the next set of steps.

### Post-Branch Verification

After all Section 12 files are written:

1. Run `grep -r "{{PROJECT_NAME}}\|{{PROJECT_PREFIX}}\|{{DOMAIN}}" .` excluding `config-templates/` and `.git/`. Must return zero hits.
2. Validate `wrangler.toml` parses: `npx wrangler --help` (smoke test) plus a manual review.
3. Update the documentation propagation:
   - `docs/INTEGRATIONS.md`: add filled-in rows for Ghost CMS and Cloudflare Pages.
   - `docs/ARCHITECTURE.md`: fill in the Static Site + CMS Architecture stub with the live values.
   - `docs/DEPLOYMENT.md`: replace `[TBD]` with the Cloudflare Pages deploy runbook.
4. Mark Section 12 complete in `docs/initialization/COMPLETION_CHECKLIST.md`.
