# Worked examples

Read this reference only when a compact contrast would clarify a material structural decision. These examples show discriminating evidence, not pattern prescriptions.

## Local wrapper versus owner correction

~~~text
Situation: an existing service already owns a policy and its contract is clear.
Quality-preserving small change: modify that focused behavior in the service.
Shortcut: add a wrapper beside one consumer that repeats the policy only to avoid touching the owner.
~~~

## External adapter versus pass-through bridge

~~~text
Legitimate boundary: an external provider exposes a different versioned contract, and one adapter owns the translation and isolation.
Pseudo-boundary: a bridge passes the same semantics through unchanged and exists only to route around the component that owns the responsibility.
~~~

## Multiple representations versus convenience duplicate

~~~text
Legitimate plurality: two representations serve genuinely different contracts at a boundary, with explicit conversion ownership and one clear semantic authority.
Drift risk: a near-identical local type changes optionality only to satisfy one caller and has no distinct contract or evolution reason.
~~~

## Semantic reuse versus forced reuse

~~~text
Legitimate reuse: two paths enforce the same invariant, contract, lifecycle, and authority, so they should evolve together.
Legitimate separation: similar mechanics implement different policies or lifecycles and are expected to evolve independently.
Forced reuse: a generic abstraction needs flags or branching to conceal those differences merely because the code looks similar.
~~~

## Bounded migration versus permanent compatibility layer

~~~text
Legitimate migration: a compatibility path has a target, owner, bounded scope, and a stabilization or removal condition because two contracts temporarily coexist.
Drift risk: both representations remain writable indefinitely and callers choose between them without a single migration authority.
~~~

## Small local change versus unnecessary abstraction

~~~text
Legitimate: ownership and contract are already correct, so a small local edit fully solves the requirement.
Overengineering: introduce a new layer or general abstraction only because a larger architectural change appears more rigorous.
Decision: the smaller solution is better when additional structure creates no responsibility, boundary, or evolution value.
~~~
