import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, isAbsolute, join, normalize, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const packageRoot = fileURLToPath(new URL("..", import.meta.url));
const canonicalSkills = [
  "architecture-integrity",
  "engineering-integrity",
  "root-cause-debugging",
  "verifier-integrity",
];
const expectedReferences = {
  "architecture-integrity": [
    "boundaries.md",
    "canonical-representation.md",
    "ownership.md",
    "reuse-vs-duplication.md",
    "worked-examples.md",
  ],
  "root-cause-debugging": [
    "causal-analysis.md",
    "failure-site-vs-owner.md",
    "workaround-patterns.md",
    "worked-examples.md",
  ],
  "verifier-integrity": [
    "error-handling.md",
    "static-analysis.md",
    "tests.md",
    "typing-and-validation.md",
    "verifier-antipatterns.md",
  ],
};

function atPackageRoot(path) {
  return join(packageRoot, path);
}

function readText(path) {
  return readFileSync(atPackageRoot(path), "utf8");
}

function listFiles(directory = packageRoot) {
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git") {
      continue;
    }

    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(path));
    } else if (entry.isFile()) {
      files.push(relative(packageRoot, path).split(sep).join("/"));
    } else {
      assert.fail(`${path} must be a regular file or directory`);
    }
  }

  return files.sort();
}

function proseOutsideFencedCode(contents) {
  const prose = [];
  let fence = null;

  for (const line of contents.split(/\r?\n/)) {
    const marker = line.match(/^\s*(`{3,}|~{3,})/);
    if (marker) {
      const character = marker[1][0];
      fence = fence === character ? null : fence ?? character;
      continue;
    }
    if (!fence) {
      prose.push(line);
    }
  }

  return prose.join("\n");
}

function markdownDestinations(contents) {
  const prose = proseOutsideFencedCode(contents);
  const inline = /\[[^\]]*\]\(\s*(?:<([^>\n]+)>|([^)\s]+))(?:\s+["'][^)]*["'])?\s*\)/g;
  const definition = /^\s{0,3}\[[^\]\n]+\]:\s*(?:<([^>\n]+)>|([^\s]+))/gm;
  return [...prose.matchAll(inline), ...prose.matchAll(definition)].map(
    ([, angleTarget, bareTarget]) => angleTarget ?? bareTarget,
  );
}

function localTargets(path) {
  const targets = [];

  for (const rawTarget of markdownDestinations(readText(path))) {
    const target = rawTarget.split(/[?#]/, 1)[0];
    if (!target || /^(?:[a-z][a-z\d+.-]*:|\/)/i.test(target)) {
      continue;
    }

    const resolved = normalize(join(dirname(path), target));
    const pathFromRoot = relative(packageRoot, atPackageRoot(resolved));
    assert.equal(
      pathFromRoot === "" ||
        (pathFromRoot !== ".." &&
          !pathFromRoot.startsWith(`..${sep}`) &&
          !isAbsolute(pathFromRoot)),
      true,
      `${path} must not link outside the package`,
    );
    assert.equal(existsSync(atPackageRoot(resolved)), true, `${path} links to ${resolved}`);
    targets.push(resolved.split(sep).join("/"));
  }

  return targets.sort();
}

const runtimeFiles = [
  "com.github.copilot/rules/integrity.md",
  ...canonicalSkills.flatMap((skill) => [
    `skills/${skill}/SKILL.md`,
    ...(expectedReferences[skill] ?? []).map(
      (reference) => `skills/${skill}/references/${reference}`,
    ),
  ]),
].sort();

test("public tree contains exactly the approved distribution surface", () => {
  assert.deepEqual(
    listFiles(),
    [
      ".github/workflows/validate.yml",
      "LICENSE",
      "NOTICE",
      "README.md",
      "RELEASE-PROVENANCE.json",
      "plugin.json",
      ...runtimeFiles,
      "tests/package.test.mjs",
    ].sort(),
  );
});

test("manifest and provenance expose one coherent immutable candidate identity", () => {
  const manifest = JSON.parse(readText("plugin.json"));
  const provenance = JSON.parse(readText("RELEASE-PROVENANCE.json"));

  assert.deepEqual(manifest, {
    $schema: "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
    name: "integrity",
    version: "0.4.0",
    description: "Keeps coding agents from sacrificing engineering quality to finish the task.",
    author: {
      name: "Francesco Cristini",
      url: "https://github.com/Baku305",
    },
    homepage: "https://github.com/Baku305/Integrity-plugin",
    repository: "https://github.com/Baku305/Integrity-plugin",
    license: "LicenseRef-Integrity-1.0",
    keywords: ["engineering", "integrity", "software-architecture", "debugging", "code-quality"],
  });
  assert.deepEqual(Object.keys(provenance), [
    "schemaVersion",
    "product",
    "pluginName",
    "version",
    "tag",
    "publicRepository",
    "canonicalSourceSha",
    "qualifiedRuntimeBaselineSha",
  ]);
  assert.equal(provenance.schemaVersion, 1);
  assert.equal(provenance.product, "Integrity");
  assert.equal(provenance.pluginName, manifest.name);
  assert.equal(provenance.version, manifest.version);
  assert.equal(provenance.tag, `v${manifest.version}`);
  assert.equal(provenance.publicRepository, "Baku305/Integrity-plugin");
  assert.match(provenance.canonicalSourceSha, /^[0-9a-f]{40}$/);
  assert.equal(
    provenance.qualifiedRuntimeBaselineSha,
    "950cf2e04fbe0e62e1d2686f64eff5bdef1ffd8f",
  );

  for (const unsupportedSurface of ["agents", "hooks", "mcpServers", "lspServers"]) {
    assert.equal(Object.hasOwn(manifest, unsupportedSurface), false);
  }
});

test("four peer skills and their references are complete and package-contained", () => {
  assert.equal(existsSync(atPackageRoot("com.github.copilot/rules/integrity.md")), true);
  assert.deepEqual(
    readdirSync(atPackageRoot("skills"), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort(),
    canonicalSkills,
  );

  for (const skill of canonicalSkills) {
    const skillPath = `skills/${skill}/SKILL.md`;
    assert.match(readText(skillPath), new RegExp(`^---\\nname: ${skill}\\n`, "m"));

    if (expectedReferences[skill]) {
      assert.deepEqual(
        readdirSync(atPackageRoot(`skills/${skill}/references`)).sort(),
        expectedReferences[skill],
      );
    } else {
      assert.equal(existsSync(atPackageRoot(`skills/${skill}/references`)), false);
    }
  }

  for (const path of ["README.md", ...runtimeFiles]) {
    localTargets(path);
  }
});

test("public package is isolated from private and legacy runtime surfaces", () => {
  for (const prohibitedPath of [
    "evals",
    "agents",
    "hooks.json",
    ".mcp.json",
    "runtime",
    "state",
    "registry",
    "scripts",
    "skills/integrity-review",
    "com.github.copilot/hooks",
  ]) {
    assert.equal(existsSync(atPackageRoot(prohibitedPath)), false, `${prohibitedPath} must not exist`);
  }

  for (const path of listFiles().filter((path) => /\.(?:md|json|yml)$/.test(path))) {
    assert.doesNotMatch(
      readText(path),
      /github\.com\/Baku305\/Integrity(?!-plugin)/,
      `${path} must not expose a private repository location`,
    );
  }
});

test("license and attribution files ship with the package", () => {
  const license = readText("LICENSE");
  const notice = readText("NOTICE");

  assert.match(license, /^Integrity Source-Available License 1\.0$/m);
  assert.match(license, /Copyright \(c\) 2026 Francesco Cristini\. All rights reserved\./);
  assert.match(license, /internal use within an organization/);
  assert.match(license, /developing, testing, operating, or maintaining commercial/);
  assert.match(license, /Commercial use of the Software under this section is permitted\./);
  assert.match(license, /you may not:[\s\S]*distribute, redistribute, publish/);
  assert.match(license, /does not grant rights in the Integrity name, logos, visual identity/);

  assert.match(notice, /^Copyright \(c\) 2026 Francesco Cristini\. All rights reserved\./m);
  assert.match(notice, /official public distribution source/);
  assert.match(notice, /professional legal review/);
});
