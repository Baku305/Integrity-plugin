# Test signal

Read this reference when an assertion, expected value, snapshot, mock, flaky-test response, coverage behavior, or exclusion could change what the test signal demonstrates about the contract.

The test is neither untouchable nor a place to accommodate the current implementation. Its change is sound only when the resulting signal still represents the authoritative behavior.

## Keep the signal meaningful

- **Authoritative contract change vs expected-value accommodation:** update an expected result when the real behavior changed and the new test rejects the prior behavior for that reason. Updating it only because production currently returns a different value is accommodation.
- **Assertion repair vs assertion weakening:** replace an assertion that measured the wrong property with one that measures the right property. Dropping the condition the defect violated without a changed contract is weakening.
- **Semantic snapshot review vs blind regeneration:** regenerate a snapshot after reviewing the semantic change it represents. A newly green snapshot is not evidence by itself.
- **Dependency-contract-preserving mock vs broad permissive mock:** adapt a mock when the dependency contract changed while retaining the relevant interaction or outcome. A broad mock that stops exercising the behavior is a weaker meter.
- **Classified flakiness vs non-causal disable or retry:** control a known source of nondeterminism or revise a verifier that misclassifies it. Disabling or retrying an unexplained failure only removes its signal.

For coverage or exclusion changes, apply the same distinction: a measurement limitation can be real, but hiding newly unobserved behavior is not a repair.

## Sensitivity cue

If the prior defect were still present, would the changed test expose it? If not, the loss can still be correct, but only when the contract explains why that detection is no longer wanted. If the defect is causally uncertain, root-cause-debugging owns that investigation.
