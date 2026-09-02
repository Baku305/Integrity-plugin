# Cross-verifier pressure

Read this reference only when a patch changes several verifier categories together or the combined green result is materially suspicious. It is a cross-verifier decision aid, not a catalog of test, type, analyzer, or error-handling rules.

## Look at the combined direction

A coordinated change can be a production correction when the system was wrong and each verifier retains its meaning. It can be intentional contract evolution when requirement, implementation, and verifiers move together. It can be verifier repair when the previous meter represented the contract inaccurately.

A coordinated change is weakening when it loses relevant detection without a contract reason. It is measurement manipulation when success criteria are altered mainly to obtain green. The number of changed verifiers is not the problem; the unexplained direction of their combined meaning is.

## Preserve one explainable claim

Ask which shared property the changes still protect, what authoritative evidence explains their direction, and which relevant defect remains detectable. A verifier can be wrong and need repair; historical immutability is not quality. Conversely, several local accommodations do not add up to evidence that a broken patch is correct.

Use the vertical references for the artifact-specific decision. This reference matters only when their combination could otherwise hide proxy optimization.
