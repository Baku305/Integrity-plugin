# Worked examples

Read this reference when a compact contrast would clarify the causal decision. These examples illustrate choices; they are not templates.

## Type mismatch: relaxation or authority

~~~text
Observation: a caller rejects a producer type.
Local relaxation: cast, alias, or optional field makes the caller compile.
Authoritative correction: if the producer owns the shared contract, correct that contract.
Legitimate local response: a translator is correct when it owns a real external or versioned boundary, rather than hiding a mismatch inside the caller.
~~~

## Invalid state: producer correction or consumer resilience

~~~text
Observation: a consumer receives a value that should be present but is missing.
Owner correction: if the lifecycle contract guarantees the value, repair the transition or producer that permits the invalid state.
Legitimate local response: a consumer of intentionally untrusted or partial input may reject, defer, or surface that state under its own resilience contract.
The local response must retain the signal; it is not evidence that the upstream invariant was repaired.
~~~

## Retry or fallback: masking or resilience

~~~text
Observation: an operation fails and a retry makes the immediate symptom disappear.
Masking response: retry or fallback is added before the eligible failure class or mechanism is known.
Owned resilience: a bounded retry or degraded response is correct when the product contract classifies eligible failures, makes the outcome observable, and preserves diagnosis.
~~~

## Configuration or ordering: story or discrimination

~~~text
Observation: the same behavior succeeds in one context and fails in another.
First plausible story: attribute it to a recent change, environment, or timing without separating the alternatives.
Discriminating evidence: compare effective configuration, state, or ordering between a working and failing case.
Correction: change the mechanism the evidence supports, or make a genuine supported difference explicit.
~~~
