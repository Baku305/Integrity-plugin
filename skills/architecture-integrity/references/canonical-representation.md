# Canonical representation

Read this reference when multiple physical representations or a conversion decision could make semantic authority ambiguous.

## One semantic authority does not mean one physical type

A concept needs a clear authority for its meaning and valid states. It may have multiple representations when real boundary or contract differences justify them.

A representation is structurally sound when its contract is distinct for a reason, the conversion boundary is deliberate, and the owner of that conversion preserves or explicitly translates semantic differences. No rule requires every boundary, transport, storage, or presentation concern to share one class, DTO, schema, or type.

## Distinguish drift from legitimate plurality

- **Convenience duplicate:** repeats the same intended semantics only to make one caller easier to satisfy, creating an independent place to drift.
- **Alias over a mismatch:** renames or reshapes an unresolved contract difference without deciding which semantics are authoritative.
- **Optionality or schema drift:** a local representation permits states that the authoritative contract does not actually support.
- **Misplaced conversion:** a consumer starts interpreting both sides of a boundary because translation was left to the nearest edit site.
- **Legitimate multiple representations:** distinct contracts exist at a real boundary, conversion ownership is explicit, and semantic authority remains clear across them.

The source of truth is the authoritative meaning or state, not necessarily a single physical artifact.

## Decision cue

If a new representation has no distinct contract, boundary responsibility, or evolution reason, do not create it merely to bypass a mismatch. If those differences are real, preserve them explicitly rather than forcing unrelated concerns into one physical model.
