# Create ADR

Create a new Architecture Decision Record.

## Instructions

1. Read `docs/adr/README.md` for the ADR process.
2. Read `docs/DECISIONS.md` to find the current highest ADR number.

3. **Determine the next ADR number**:
   a. Find the highest-numbered ADR in `docs/adr/`.
   b. Increment by 1, zero-padded to 3 digits.

4. **Get decision details from the user**:
   a. Ask for a short title (used in the filename).
   b. Ask for the context: what situation requires this decision?
   c. Ask for the decision itself.
   d. Ask for consequences (positive, negative, neutral).
   e. Ask for alternatives considered (at least one).

5. **Create the ADR file**:
   a. Copy `docs/adr/ADR-000-template.md` to `docs/adr/ADR-NNN-short-title.md`.
   b. Fill in the title, date (today), status ("Proposed"), and all sections from the user's input.
   c. Set the filename using lowercase-kebab-case for the title.

6. **Update the index**:
   a. Add a row to the table in `docs/DECISIONS.md`.

7. **Cross-reference** (if applicable):
   a. If the ADR relates to a feature, add a link in that feature's `overview.md`.
   b. If the ADR affects architecture, note it in `docs/ARCHITECTURE.md`.

## Rules

- Do not commit or push changes automatically.
- Use today's date for the ADR.
- Set initial status to "Proposed" unless the user says it is already accepted.
- The short title in the filename should be 2-4 words, lowercase, hyphenated.

## Arguments

$ARGUMENTS

If the user provides a title as an argument, use it. Otherwise, ask for one.
