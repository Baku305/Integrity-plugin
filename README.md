# Integrity

Integrity keeps coding agents from sacrificing engineering quality to finish the task.

It addresses a recurring failure mode in agentic development: a patch may appear complete, compile, and pass its tests while weakening the real owner, contract, boundary, causal explanation, lifecycle behavior, or verifier meaning.

> Integrity always prioritizes engineering quality over task completion.

## What is installed

Integrity is deliberately small:

| Layer | Responsibility |
| --- | --- |
| Always-on rule | Preserves essential engineering invariants during ordinary code changes. |
| Four peer skills | Add decision method only when causal, structural, verifier, or acceptance reasoning is materially relevant. |
| Fourteen references | Add conditional depth only when a distinction can change the decision. |

The peer skills are `engineering-integrity`, `root-cause-debugging`, `architecture-integrity`, and `verifier-integrity`. They are not an orchestration chain. Integrity contains no MCP server, external service, telemetry, runtime network dependency, persistent state, hook, orchestrator, router, or reviewer agent.

## Install

### GitHub Copilot CLI

Install directly from the official public repository:

```bash
copilot plugin install Baku305/Integrity-plugin
copilot plugin list
```

After marketplace approval, install the immutable reviewed release through Awesome Copilot:

```bash
copilot plugin install integrity@awesome-copilot
```

Start a new interactive session and use `/skills list` to confirm that the four peer skills are discoverable.

### GitHub Copilot in VS Code

Enable agent plugins, run **Chat: Install Plugin From Source** from the Command Palette, and enter:

```text
https://github.com/Baku305/Integrity-plugin
```

Review the repository source when VS Code displays its trust prompt, enable Integrity in the installed plugins list, and start a new agent session.

## Official distribution and provenance

This repository is the official installable Integrity distribution. Development and diagnostic qualification occur in a separate private canonical source; this public repository is generated deterministically and is not an independently maintained development fork.

Every release includes `RELEASE-PROVENANCE.json`, an immutable version tag, and a public commit SHA. The installed package is self-contained: it does not fetch from or reconstruct itself from the private repository.

Public visibility and GitHub's technical fork functionality do not grant unrestricted redistribution rights. Forks, mirrors, copies, modified versions, and derivatives are not official Integrity releases and must not use the Integrity identity in a way that implies endorsement.

## License

Integrity is free to install and use personally or internally within an organization, including while developing commercial software. Redistribution, public mirrors, repackaging, sublicensing, resale of Integrity, public derivative distribution, and unofficial branding are reserved unless separately authorized.

See [LICENSE](LICENSE) for the controlling terms and [NOTICE](NOTICE) for attribution. `LicenseRef-Integrity-1.0` is a custom source-available license, not an OSI-approved open-source license. The custom legal text should receive professional review before it is relied upon as definitive legal advice or protection.
