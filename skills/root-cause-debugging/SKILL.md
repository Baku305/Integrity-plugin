---
name: root-cause-debugging
description: Use when a causal decision is materially uncertain, a failure site may differ from the invariant owner, or a proposed workaround could hide the mechanism; not for an ordinary error with a direct evidenced correction.
---

# Root-Cause Debugging

## Mission

Protect causal quality when completion pressure could replace a demonstrated mechanism with a merely effective-looking patch. This capability owns causal uncertainty, failure-site versus invariant-owner reasoning, and workaround pressure; it does not own structural placement, verifier meaning, or change-set acceptance.

## When to use it

Use this skill directly when the cause is not demonstrated, multiple mechanisms remain plausible, the failure detector and invariant owner may differ, a patch removes the symptom without showing that it removes the mechanism, or owner correction and local handling are both plausible.

A known direct cause with a proportionate correction stays in the normal development flow. Terms such as error, test, type, null, exception, or retry are not triggers by themselves.

The central question is:

> What mechanism produced the violation, and does the response correct it in its invariant owner or legitimately own a local contract?

## Keep the causal claim disciplined

Keep the observation, trigger, hypothesis, evidence, and violated invariant distinct. A plausible story remains a hypothesis until evidence separates it from credible alternatives.

If competing explanations need discrimination, read [references/causal-analysis.md](references/causal-analysis.md). Do not claim a causal fix while the evidence still fits materially different mechanisms.

## Choose the legitimate response

The component that detects a failure is not automatically the component that owns the invariant. Correct the relevant mechanism in its owner when that owner continues to permit the violation.

A local guard, fallback, retry, translation, or resilience policy can instead be the quality-preserving response when the local consumer truly owns a contract for that behavior, its scope is proportionate, and the response does not misrepresent an unresolved upstream violation as corrected.

If detector, producer, lifecycle policy, boundary translator, and consumer resilience need to be distinguished, read [references/failure-site-vs-owner.md](references/failure-site-vs-owner.md).

Do not classify a fallback, alias, cast, suppression, adapter, bridge, retry, or guard from its form alone. Evaluate its mechanism, owner, contract, boundary, evidence, and proportionality.

If immediate completion is being mistaken for evidence of correctness, read [references/workaround-patterns.md](references/workaround-patterns.md).

## Peer boundaries

- Causal mechanism and shortcut pressure belong here.
- Structural ownership, boundary, representation, and reuse decisions belong to architecture-integrity.
- The meaning or sensitivity of a test, type, validation, analysis, or error-path verifier belongs to verifier-integrity.
- Handoff acceptance belongs to engineering-integrity.

More than one capability may be materially relevant. That does not create a sequence, router, or invocation chain.

## Success criteria

- A direct, evidenced correction remains direct and proportionate.
- A hypothesis is not presented as a demonstrated mechanism.
- The solution either corrects the relevant mechanism in the invariant owner or is a legitimate local response with a real owned contract and proportionate evidence.
- The relevant verifier still supports the claim that the mechanism no longer creates the violation.

For contrasting stack-agnostic cases, read [references/worked-examples.md](references/worked-examples.md) only when an example would clarify the decision.
