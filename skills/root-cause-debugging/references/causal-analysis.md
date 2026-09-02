# Causal analysis

Read this reference only when competing explanations need evidence that changes the causal decision.

## Separate what is known

- **Observation / symptom:** what is actually seen.
- **Trigger:** the condition under which the observation appears.
- **Causal mechanism:** the sequence that made the forbidden state reachable.
- **Contributing condition:** a fact that enables or amplifies the mechanism without fully explaining it.
- **Invariant violation:** the property that became false.

These are decision lenses, not a mandatory debugging procedure. The same symptom can have different triggers and mechanisms.

## Prefer discriminating evidence

Useful evidence separates or falsifies competing explanations. A working/broken comparison of state, effective configuration, timing or ordering, data shape, or the contract at a boundary can do that when it bears on the alternatives.

Choose the evidence strategy that can change the decision; gathering every kind of evidence is not a requirement. A recent change, a successful retry, or a correlated condition is a lead, not proof of the mechanism.

## Stop conditions

If the evidence does not yet distinguish the mechanisms, keep the causal claim open. Do not call the patch a causal fix or introduce fallback, guard, retry, or defensive compensation merely to close the task.
