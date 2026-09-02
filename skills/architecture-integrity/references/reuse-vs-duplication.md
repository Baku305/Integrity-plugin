# Reuse versus duplication

Read this reference when reuse, intentional separation, duplication, or a new abstraction have materially different consequences for ownership or evolution.

## Similarity is weak evidence

Do not decide from shape or line count. Compare the dimensions that determine whether two implementations should evolve together:

- responsibility;
- invariant and contract;
- lifecycle;
- authority;
- expected evolution.

**Semantic reuse** is correct when the same responsibility and contract should change under the same authority.

**Intentional separation** is correct when similar mechanisms serve different responsibilities, lifecycles, policies, authorities, or evolution paths. Two focused implementations can be healthier than one generic abstraction that couples those differences.

**Accidental duplication** copies the same responsibility because using or correcting its owner is locally inconvenient. Parallel copies then have to remain synchronized.

**Forced reuse** or premature abstraction merges code because it looks similar, often adding flags, generic options, or indirection to hide distinct contracts.

## Proportionality

Reuse is not a goal by itself, and neither is eliminating duplication. Prefer the least complex structure that keeps responsibility and evolution coherent. Introduce a shared abstraction only when it represents a stable shared responsibility rather than a prediction that similar code might someday converge.
