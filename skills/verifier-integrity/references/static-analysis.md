# Static analysis

Read this reference when a lint, compiler, analyzer, warning, suppression, exclusion, disable, or configuration change may alter what defects remain visible.

There is no universal rule against suppression. A demonstrated false positive, tool incompatibility, generated or external artifact, real requirement, or bounded migration can justify one. Its scope should be no wider than the condition it represents; a temporary exception needs an owner and removal condition only when that matters to the contract.

A suppression is suspicious when it removes the signal and there is no evidence that the signal fails to represent a real defect. Project-wide disables, broad exclusions, relaxed compiler settings, or a local ignore that only makes the current patch green change the detector rather than establish correctness.

## Stop condition

If the signal's irrelevance is not supportable, do not remove it merely because the task remains red.
