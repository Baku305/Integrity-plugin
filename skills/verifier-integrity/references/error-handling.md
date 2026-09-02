# Error handling

Read this reference when catches, retries, fallbacks, error mapping, or runtime guards may change the observable meaning of failure.

## Failure disappearance is not resolution

Changing the representation or propagation of a failure does not mean the failure was resolved. A catch, retry, fallback, logging-only response, neutral value, or degraded mode is legitimate when a real resilience, degraded-mode, failure-translation, compatibility, or retry contract owns that response, classifies the eligible failure, makes its outcome observable, and leaves the original condition diagnosable.

## Distinguish resilience from false success

Unknown, invalid, transient, unavailable, and unauthorized conditions need not share one response. Broad recovery is suspicious when it converts them into apparent success, hides an unresolved invariant, or makes callers believe an operation completed when its contract did not.

If the question is what caused the failure or whether it is eligible for recovery, root-cause-debugging owns that causal decision. This reference only asks whether the chosen representation still preserves the failure contract.

Do not add recovery solely to close the task while the mechanism or failure class remains unknown.
