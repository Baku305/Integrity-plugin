# Boundaries

Read this reference when the legitimacy of a proposed boundary, translation, or compatibility path would materially change the structural decision.

## A separate class is not a boundary

A boundary is justified by a real semantic or contractual difference. Relevant evidence can include an external contract, protocol or version difference, trust boundary, lifecycle or ownership difference, translation semantics, migration state, or failure and resilience semantics.

Use only the evidence that changes the decision. A boundary does not require a completed matrix or a ceremony around every adapter.

An adapter, anti-corruption layer, bridge, wrapper, or compatibility component is legitimate when it owns real translation, isolation, compatibility, or boundary-enforcement responsibility. A pass-through layer is not made legitimate by existing as a separate file when its only purpose is to avoid changing the component that owns the responsibility.

## Temporary compatibility

A temporary compatibility path can be the quality-preserving solution. When the risk of dual authority is material, its target, owner, affected scope, and stabilization or removal condition should be explainable.

Those facts exist to keep a local compatibility path from becoming a second permanent architecture, not to impose governance overhead on every bounded migration.

## Stop condition

Do not call a wrapper or bridge a boundary until a semantic or contractual difference explains why the responsibility belongs there.
