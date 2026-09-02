---
name: engineering-integrity
description: Assess whether a coherent change-set is engineering-ready at handoff, separate task completion from acceptance, and determine ACCEPT, CORRECT, or BLOCKED from current evidence; use for handoff readiness or an explicit audit, not routine edits.
---

# Engineering Integrity

## Mission

Engineering Integrity owns the acceptance of a coherent change-set. It distinguishes task completion from engineering acceptance without becoming a reviewer, router, or ritual report.

## When to use it

Use this skill at a meaningful handoff: before presenting a change-set as complete, ready for commit, or ready for PR. Use it also for an explicit Engineering Integrity audit or review.

A generic code edit is not sufficient. During implementation, investigate causal, structural, and verifier concerns through whichever peer capability is independently relevant; this skill does not invoke or sequence those capabilities.

The central question is:

> Is the current change-set supported by enough evidence to be handed off as engineering-ready?

## Acceptance method

1. **Set the boundary.** Identify the coherent change-set, current diff, relevant verifier results, and intended handoff. Do not treat intermediate edits, commands, or earlier verdicts as the acceptance boundary.

2. **Select evidence dimensions.** Consider only the dimensions materially implicated by the change: causal correction, ownership and boundary placement, canonical representation and reuse, and verifier integrity. Do not maintain an N/A ledger or perform a complete checklist when the evidence makes a dimension irrelevant; do not dismiss a potentially relevant dimension without evidence.

3. **Assess the current result.** Determine whether the available evidence supports the relevant dimensions on the current diff. An earlier investigation is useful only insofar as it still applies to the code and verifiers now present.

4. **Decide the handoff state.**

   - `ACCEPT`: the relevant evidence supports the change, its owner and boundary decisions, and its verifier status.
   - `CORRECT`: a specific shortcut, wrong placement, weakened verifier, missed equivalent owner, or unsupported claim needs correction before handoff.
   - `BLOCKED`: essential evidence or an external decision is missing; identify the minimum blocker and the decision needed.

5. **Keep acceptance current.** Do not hand off after CORRECT or BLOCKED. After ACCEPT, any subsequent code change makes the verdict stale; reassess the new diff at the next handoff.

## Visibility

Use the competence inside the normal task flow. An ACCEPT does not require a label, checklist, or standalone report; a CORRECT leads to correction without process narration.

Only for an explicit audit or review, or when BLOCKED requires a decision, expose a compact evidence record:

~~~text
Change-set:
Relevant evidence:
Unresolved concern or blocker:
Decision required, if any:
Verdict:
~~~

Use observable evidence such as files, symbols, contracts, diff facts, and verifier results. Do not expose private reasoning or a chronology of internal checks.
