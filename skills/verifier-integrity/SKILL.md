---
name: verifier-integrity
description: Use when a verifier's protected property, sensitivity, or failure semantics may change through a materially ambiguous relaxation, suppression, broadening, or verifier edit; not for routine maintenance with a clear contract.
---

# Verifier Integrity

## Mission

Keep the mechanism that measures or constrains the system meaningful. A green signal does not establish verifier acceptance unless it still represents the real contract. This capability owns verifier meaning and sensitivity across tests, types, validation, static analysis, and error semantics; it does not own causal investigation, structural placement, or change-set acceptance.

## When to use it

Use this skill directly when a change may alter the property a verifier protects; verifier and contract evolve together in a non-trivial way; the verifier may represent the contract incorrectly; a relaxation, suppression, exclusion, or broadening is proposed; a green result depends on a verifier edit whose semantic direction is unclear; several verifiers change together; or recovery semantics may turn a failure into apparent success.

A normal test, type, schema, validator, analysis, or error-path maintenance change under an already clear contract stays in the normal flow. Artifact names and file types are not triggers by themselves.

The central question is:

> What property did the verifier protect before, what does it protect after, and why does that still represent the real contract?

## Keep the measure aligned

Name the behavior, contract, invariant, or safety condition the verifier observes or enforces. A production correction keeps that meaning while the system is corrected. An intentional contract evolution changes requirement, implementation, and verifier coherently. A verifier repair corrects a verifier that modeled the contract inaccurately.

Do not treat the existing verifier as infallible, but do not treat its failure as permission to redefine success. A change weakens the verifier when it loses relevant defect detection without a sufficient contractual reason; it becomes measurement manipulation when its primary justification is making the patch green.

Use the evidence that makes the direction explainable: a real requirement, an authoritative contract, a correction to the verifier's representation, or a production correction. The smallest direct verifier change is correct when it preserves or repairs that meaning; more enforcement is not automatically more quality.

## Check sensitivity proportionately

When the answer is not already clear, ask: *If the previous defect were still present, would this verifier still detect it?* A lost sensitivity is not automatically wrong, but it needs a contract reason for no longer being desired. A preserved or corrected sensitivity supports the change without making the historical verifier immutable.

## Read only the depth that changes the decision

- If an assertion, expected value, snapshot, mock, flaky-test response, coverage, or test exclusion may change what a signal demonstrates, read [references/tests.md](references/tests.md).
- If a mismatch may be converted into local permissiveness through a cast, optionality relaxation, dynamic type, schema widening, or validation bypass, read [references/typing-and-validation.md](references/typing-and-validation.md).
- If a suppression, exclusion, disable, or configuration change may hide a defect, read [references/static-analysis.md](references/static-analysis.md).
- If a catch, retry, fallback, neutral value, or degraded mode may change the observable meaning of failure, read [references/error-handling.md](references/error-handling.md).
- If several verifier categories change together or the combined green result is suspicious, read [references/verifier-antipatterns.md](references/verifier-antipatterns.md).

## Peer boundaries

- Causal mechanism and causal uncertainty belong to root-cause-debugging.
- Structural ownership, boundary, canonical representation, and conversion placement belong to architecture-integrity.
- Verifier meaning and sensitivity belong here.
- Handoff acceptance belongs to engineering-integrity.

More than one capability may be materially relevant. That does not create a router, sequence, or dependency chain.

## Success criteria

- The protected property and the reason for its current representation are explainable.
- Contract evolution, verifier repair, and weakening are distinguishable from accommodation of a broken patch.
- Relevant sensitivity remains, or a real contract explains why it intentionally changed.
- The green result supports the system claim without treating the prior verifier as automatically authoritative.
