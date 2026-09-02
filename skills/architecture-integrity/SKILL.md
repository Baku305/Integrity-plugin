---
name: architecture-integrity
description: Use when a structural decision is materially ambiguous about responsibility ownership, placement, boundary semantics, semantic authority, reuse, or compatibility; not merely because a task mentions a DTO, adapter, wrapper, service, mapper, schema, type, model, interface, repository, or bridge.
---

# Architecture Integrity

## Mission

Protect structural quality when local convenience or architectural overreach could distort responsibility, authority, representation, or boundary placement. This capability owns structural ownership, boundary legitimacy, semantic representation, reuse, and compatibility decisions; it does not own causal investigation, verifier meaning, or change-set acceptance.

## When to use it

Use this skill directly when there is a material choice about where a responsibility belongs, whether a boundary has real translation or isolation semantics, which representation carries semantic authority, whether reuse or separation matches the responsibility, or whether compatibility can create a second authority. It is also relevant when a wrapper, bridge, duplicate, abstraction, or refactor is proposed mainly because it is locally convenient or architecturally fashionable.

A focused change under an already clear owner and contract can be the complete quality-preserving solution. Artifact names and structural-looking files are not triggers by themselves.

The central question is:

> What is the least complex structure that keeps responsibility, semantic authority, and boundaries explainable?

## Structural judgment

Start from the responsibility and the existing contract. If the current owner already possesses both, prefer the focused local change rather than manufacturing a new layer.

A responsibility needs explainable ownership, but authority, prevention, lifecycle, evolution, source of truth, and boundary ownership do not have to live in one physical component. If those dimensions make placement genuinely ambiguous, read [references/ownership.md](references/ownership.md).

A semantic concept needs clear authority, not one physical type. Multiple representations are legitimate when real boundary contracts justify them and conversion ownership is explicit. If duplication, normalization, optionality, or conversion placement could blur that authority, read [references/canonical-representation.md](references/canonical-representation.md).

A separate class is not evidence of a real boundary. A boundary is justified by a semantic or contractual difference and owns translation, isolation, compatibility, or enforcement that the adjacent sides should not absorb. If that legitimacy or a temporary compatibility path is material to the decision, read [references/boundaries.md](references/boundaries.md).

Similarity is not enough for reuse, and convenience is not enough for duplication. Decide whether the responsibility, invariant, contract, lifecycle, authority, and expected evolution actually belong together. If reuse, intentional separation, or abstraction remain materially different choices, read [references/reuse-vs-duplication.md](references/reuse-vs-duplication.md).

Prefer the least complex solution that fully preserves structural quality. A smaller local edit is correct when ownership and contract are already sound; extra abstraction, refactor, or formalism needs decision value of its own. For compact contrasts, read [references/worked-examples.md](references/worked-examples.md) only when an example would clarify that choice.

## Peer boundaries

- Causal mechanism or causal uncertainty belongs to root-cause-debugging.
- Structural ownership, boundary, representation, reuse, and compatibility decisions belong here.
- The meaning or sensitivity of a test, type, validation, analysis, or error-path verifier belongs to verifier-integrity.
- Handoff acceptance belongs to engineering-integrity.

More than one capability may be materially relevant. That does not create a router, sequence, pipeline, or dependency chain.

## Success criteria

- The responsibility has explainable ownership without forcing every ownership dimension into one physical component.
- Semantic authority remains clear even when legitimate multiple representations exist.
- Boundaries own real semantic or contractual differences rather than hiding a local shortcut.
- Reuse, separation, compatibility, and abstraction are proportionate to the responsibility and its expected evolution.
- No added structure exists merely because it made completion easier or made the design look more architectural.
