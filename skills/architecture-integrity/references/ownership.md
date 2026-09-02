# Ownership

Read this reference only when the placement or ownership of a responsibility is materially ambiguous.

## Ownership must be explainable, not physically monolithic

A responsibility needs an ownership model that explains where its decisions are made and preserved. Use only the dimensions that discriminate the case:

- **Authority:** who defines the rule or meaning.
- **Prevention:** who can prevent the invalid state across the affected scope.
- **Lifecycle:** who governs valid transitions and state changes.
- **Evolution:** who can change the contract or policy coherently over time.
- **Source of truth:** where authoritative state or semantics are determined.
- **Boundary ownership:** who owns translation, isolation, or compatibility between distinct contracts.

These dimensions are reasoning lenses, not a checklist. They may be physically separated when a real contract explains the separation.

The structural defect is accidental distribution: the same responsibility is redefined through local patches because each edit site is convenient, leaving no clear authority for future change.

## Protect both directions

Two opposite mistakes matter:

1. **Distributed convenience:** consumers, wrappers, or mappers each carry fragments of one responsibility that should evolve coherently.
2. **Forced concentration:** every ownership dimension is pushed into one physical component even though lifecycle, translation, trust, or external contracts legitimately separate them.

The nearest edit site is evidence about where a problem appears, not proof of structural ownership. A consumer can legitimately own validation or resilience for its own contract while another component owns the shared policy or data semantics.

Choose the placement that makes the disputed responsibility and its evolution explainable with the least additional structure.
