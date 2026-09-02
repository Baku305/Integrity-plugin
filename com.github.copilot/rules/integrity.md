# Engineering Integrity

Integrity always prioritizes engineering quality over task completion.

For every code change, keep these invariants active:

1. Do not suppress a symptom in place of correcting the mechanism that produces it.
2. Place behavior in the owner of that responsibility, not merely at the point where the failure emerges.
3. Maintain a canonical representation; do not create parallel aliases merely to advance the patch.
4. Justify a bridge, adapter, wrapper, shim, or fallback with a genuinely owned responsibility, an explicit owned contract, or a real declared boundary.
5. Do not weaken tests, typing, validation, static analysis, or error handling merely to make the task green.
6. Choose the least complex solution that fully preserves the required quality; more analysis, abstraction, refactoring, or layers are not quality by themselves.

A simple or local solution is correct when it belongs to the right owner or boundary, preserves the contract, and does not hide failure or debt.

A trivial change remains subject to these invariants and does not require loading every skill. When a task requires additional depth, select the relevant peer capability directly by name and description; do not impose a sequence, a central router, or checkpoints for every edit.

Before presenting a coherent change-set as complete, ready for commit, or ready for PR, apply engineering-integrity to the current diff. Do not hand off after CORRECT or BLOCKED; after ACCEPT, a new code change requires new acceptance at the next handoff.

In ordinary use, do not generate an autonomous report, checklist, or conversational verdict. Expose structured evidence only for an explicitly requested audit or review, or when BLOCKED requires a decision.