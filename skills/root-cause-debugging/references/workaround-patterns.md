# Workaround patterns

Read this reference when an immediate improvement in completion could be mistaken for evidence that engineering quality is preserved.

## The common risk

A workaround is suspicious when it improves the local signal of completion without demonstrating that the relevant mechanism, owner, contract, boundary, and scope remain sound.

Its form does not decide it. Alias, cast, optionality, fallback, retry, guard, suppression, adapter, and bridge can all be legitimate.

## Pattern families

- **Signal suppression:** hides a meaningful failure or warning.
- **Local contract broadening:** accepts a value or shape without an authoritative reason.
- **Responsibility rerouting:** moves a correction into a convenient consumer while the owner still permits the violation.
- **Blind recovery:** retries, falls back, or compensates before the eligible failure is understood.
- **Pseudo-compatibility:** creates a parallel path or representation without a real boundary contract.

These are investigation categories, not automatic rejections. Ask what mechanism the response changes or leaves intact, who owns that behavior, what contract requires it, what evidence supports it, and whether its scope is proportionate.

## Legitimate pragmatism

An external contract, bounded migration, unavoidable legacy dependency, explicit compatibility window, or product-required degraded mode can justify a local response. It remains a quality-preserving solution when the behavior has an owner, a real contract, bounded scope, and evidence proportionate to the risk.

If those facts are not established, do not add the response solely to make the task appear complete. Structural boundary design belongs to architecture-integrity.
