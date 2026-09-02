# Failure site versus invariant owner

Read this reference when the detector, invariant owner, and local resilience response are materially easy to confuse.

## Distinguish the roles

- **Detector:** observes or reports the failure.
- **Producer / data owner:** creates, normalizes, or publishes the value.
- **Policy / lifecycle owner:** defines which states or transitions are valid.
- **Boundary translator:** owns a deliberate conversion between distinct contracts.
- **Consumer with a resilience contract:** owns an explicitly local response to expected untrusted, partial, or unavailable input.

The component that notices a violation is not automatically the component that can prevent its recurrence. Conversely, the presence of an upstream defect does not make a consumer's owned protection illegitimate.

## Make the discriminating decision

Ask which role defines the property, which can prevent the relevant mechanism for every affected consumer, and whether the local consumer has a real contract to respond differently.

Two opposite mistakes matter:

1. Patch only the consumer while the owner continues to produce an invalid state.
2. Remove or refuse consumer protection solely because another owner should also be corrected.

## Legitimate local handling

Local handling can be correct when a consumer owns a resilience contract, an external input is genuinely untrusted, or a known compatibility boundary deliberately translates data. Its contract, scope, and observable outcome must be real; “it avoids the failure here” is not enough evidence.

If the answer depends on creating or changing a structural boundary, hand that placement decision to architecture-integrity.
