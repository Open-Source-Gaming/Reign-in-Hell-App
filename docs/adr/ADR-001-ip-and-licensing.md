# ADR-001: Intellectual Property and Licensing Approach

**Status**: Accepted  
**Date**: 2026-04-29  
**Deciders**: Danny Comeau  

## Context

The Reign in Hell Companion App is based on the tabletop miniature game "Reign in Hell" published by Snarling Badger Studios (Adam Loper & Vince Venturella). We need to establish clear boundaries for what we can and cannot include in this open-source companion tool.

## Decision

This companion app will operate as an **unofficial fan tool** with the following IP stance:

### What We Will NOT Do
- Redistribute any rulebook text, stat blocks, scenario descriptions, or artwork
- Include copyrighted content from the original game
- Claim any affiliation with Snarling Badger Studios

### What We CAN Do
- Store user-entered data shaped by game mechanics (their characters, campaigns, battles)
- Define domain object structures that match the game's concepts (`Cabal`, `Demon`, `Philosophy`, etc.)
- Implement game logic for dice mechanics, combat resolution, and progression tracking
- Create original UI/UX for digital tools

### Legal Rationale
- **SQL schemas and domain models are not copyrightable** - we can structure data around the game's concepts
- **Game mechanics themselves are not copyrightable** - we can implement dice rolling, stat tracking, and rule calculations
- **Fan tools are generally protected** - as long as we don't redistribute content and clearly mark as unofficial

### Implementation Requirements
1. Prominent "unofficial fan tool" disclaimer in README and app
2. Clear attribution to Snarling Badger Studios for the original game
3. Instruction for users to purchase the official rulebook
4. Proprietary reference materials kept local-only (`references/` directory, gitignored)
5. No redistribution of copyrighted text or images

## Consequences

**Positive**:
- Clear legal boundaries protect the project and contributors
- Encourages legitimate game purchases
- Maintains good relationship with game creators

**Negative**:
- Users must own the rulebook to use the app effectively
- Cannot include convenient reference text within the app
- Requires ongoing vigilance about content boundaries

## Compliance Monitoring

Before each release, verify:
- No copyrighted text included in source code
- All game-specific content is user-generated data
- Attribution and disclaimers are prominent and current