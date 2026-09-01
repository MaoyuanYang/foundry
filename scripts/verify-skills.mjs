import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');
const skills = ['coding-start', 'project-onboard', 'feature-dev', 'evolve-dev', 'maintenance-dev'];

let failures = 0;
const results = [];
function check(name, ok, detail = '') {
  results.push({ name, ok, detail });
  if (!ok) failures++;
}

const read = (p) => readFileSync(join(root, p), 'utf8');
const sha = (s) => createHash('sha256').update(s, 'utf8').digest('hex');

function collectMd(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectMd(full, acc);
    else if (entry.endsWith('.md')) acc.push(full);
  }
  return acc;
}

// 1. stage.template.md byte-identical across the five skills
{
  const hashes = skills.map((s) => sha(read(`skills/${s}/assets/stage.template.md`)));
  check(
    'stage.template.md identical across skills',
    new Set(hashes).size === 1,
    hashes.map((h) => h.slice(0, 12)).join(' '),
  );
}

// 2. language-policy Core byte-identical across the five skills (anchored)
const CORE_START = '<!-- lang-policy-core-start -->';
const CORE_END = '<!-- lang-policy-core-end -->';
const coreFiles = [
  'skills/coding-start/references/language-policy.md',
  'skills/project-onboard/SKILL.md',
  'skills/feature-dev/SKILL.md',
  'skills/evolve-dev/SKILL.md',
  'skills/maintenance-dev/SKILL.md',
];
{
  const blocks = [];
  for (const f of coreFiles) {
    const c = read(f);
    const i = c.indexOf(CORE_START);
    const j = c.indexOf(CORE_END);
    check(`lang-policy anchors present in ${f}`, i !== -1 && j > i);
    blocks.push(i !== -1 && j > i ? c.slice(i, j + CORE_END.length) : '');
  }
  check(
    'language-policy core identical across skills',
    blocks[0] !== '' && new Set(blocks).size === 1,
    `len=${blocks[0].length}`,
  );
}

// 3. known duplicated cross-skill contracts stay present and consistent
const sharedBaseline =
  'product scope, system boundaries, the test method, the current Roadmap, trustworthy Brownfield AS-IS where applicable, and a valid persisted Language Policy';
for (const f of ['skills/coding-start/SKILL.md', 'skills/feature-dev/SKILL.md', 'skills/evolve-dev/SKILL.md', 'skills/maintenance-dev/SKILL.md']) {
  check(`shared baseline definition in ${f}`, read(f).includes(sharedBaseline));
}
for (const s of ['project-onboard', 'feature-dev', 'maintenance-dev']) {
  check(`STAGE_LOCAL contract in ${s}/SKILL.md`, read(`skills/${s}/SKILL.md`).includes('STAGE_LOCAL:'));
}
for (const s of skills) {
  check(`Gate vocabulary in ${s}/SKILL.md`, read(`skills/${s}/SKILL.md`).includes('SPEC READY'));
}
for (const f of [
  'skills/coding-start/SKILL.md',
  'skills/coding-start/assets/agents.template.md',
  'skills/coding-start/assets/core-docs.template.md',
  'skills/coding-start/assets/ui-docs.template.md',
  'skills/coding-start/references/artifact-contracts.md',
  'skills/coding-start/references/lifecycle-and-gates.md',
]) {
  check(`command-honesty token in ${f}`, read(f).includes('Not yet established'));
}
check('evidence labels in project-onboard/SKILL.md', read('skills/project-onboard/SKILL.md').includes('NEEDS_CONFIRMATION'));
check('evidence labels in feature-dev/SKILL.md', read('skills/feature-dev/SKILL.md').includes('NEEDS_CONFIRMATION'));
check('evidence labels in feature-dev spec template', read('skills/feature-dev/assets/spec.template.md').includes('NEEDS_CONFIRMATION'));
check('evidence labels in evolve-dev/SKILL.md', read('skills/evolve-dev/SKILL.md').includes('NEEDS_CONFIRMATION'));
check('evidence labels in maintenance-dev/SKILL.md', read('skills/maintenance-dev/SKILL.md').includes('NEEDS_CONFIRMATION'));
check('no spaced NEEDS CLARIFICATION token', !read('skills/coding-start/SKILL.md').includes('`NEEDS CLARIFICATION`'));

// 3b. parallel-work collaboration tokens
for (const f of [
  'skills/coding-start/assets/agents.template.md',
  'skills/project-onboard/assets/agents-update.template.md',
]) {
  check(`parallel work policy section in ${f}`, read(f).includes('## Parallel Work Policy'));
}
check('WIP limit in feature-dev/SKILL.md', read('skills/feature-dev/SKILL.md').includes('`WIP Limit`'));
check('WIP limit in maintenance-dev/SKILL.md', read('skills/maintenance-dev/SKILL.md').includes('`WIP Limit`'));
for (const f of [
  'skills/feature-dev/SKILL.md',
  'skills/feature-dev/references/design-change-and-delivery.md',
  'skills/feature-dev/assets/issue.template.md',
  'skills/maintenance-dev/SKILL.md',
]) {
  check(`PR_REVIEW token in ${f}`, read(f).includes('PR_REVIEW') || read(f).includes('IN PR REVIEW'));
}
// 3c. fifth and sixth skill contracts (ADR-0002)
for (const s of skills) {
  const fm = read(`skills/${s}/SKILL.md`).split('---')[1] || '';
  const missing = skills.filter((o) => o !== s && !fm.includes(o));
  check(
    `frontmatter of ${s} names every sibling`,
    missing.length === 0,
    missing.join(', '),
  );
}
check(
  'evolve-dev stage tokens include BLOCKED_HANDOFF',
  read('skills/evolve-dev/SKILL.md').match(/Use these exact stage tokens[^\n]*/)[0].includes('`BLOCKED_HANDOFF`'),
);
check(
  'ROADMAP EVOLUTION READY gate in evolve-dev/SKILL.md',
  read('skills/evolve-dev/SKILL.md').includes('ROADMAP EVOLUTION READY'),
);
check(
  'SAFETY NET READY gate in maintenance-dev/SKILL.md',
  read('skills/maintenance-dev/SKILL.md').includes('SAFETY NET READY'),
);
check(
  'BEHAVIOR PRESERVED gate in maintenance-dev/SKILL.md',
  read('skills/maintenance-dev/SKILL.md').includes('BEHAVIOR PRESERVED'),
);
for (const s of skills) {
  for (const other of skills) {
    if (other === s) continue;
    check(
      `${s}/SKILL.md references sibling ${other}`,
      read(`skills/${s}/SKILL.md`).includes(other),
    );
  }
}
check(
  'stage template Skill enum includes both new skills',
  read('skills/feature-dev/assets/stage.template.md').includes('| `coding-start | project-onboard | feature-dev | evolve-dev | maintenance-dev | external` |'),
);
for (const g of ['ROADMAP EVOLUTION READY', 'SAFETY NET READY', 'BEHAVIOR PRESERVED']) {
  check(`stage template Gate enum includes ${g}`, read('skills/feature-dev/assets/stage.template.md').includes(g));
}
check(
  'project-onboard routes healthy-repo planning to evolve-dev',
  read('skills/project-onboard/SKILL.md').includes('belongs to `evolve-dev`') &&
    !read('skills/project-onboard/SKILL.md').includes('outside all three Skills'),
);
check(
  'project-onboard debt table points to maintenance-dev',
  read('skills/project-onboard/SKILL.md').includes('`maintenance-dev` `DEBT` campaign'),
);
check(
  'feature-dev routes maintenance requests to maintenance-dev',
  read('skills/feature-dev/SKILL.md').includes('is `maintenance-dev`'),
);
check(
  'evolve-dev repositioning boundary present',
  read('skills/evolve-dev/SKILL.md').includes('redo macro design'),
);
check(
  'maintenance-dev campaign types enumerated',
  ['REFACTOR', 'DEBT', 'UPGRADE', 'RETIRE'].every((t) => read('skills/maintenance-dev/SKILL.md').includes(`\`${t}\``)),
);
check(
  'maintenance-dev safety-net-first rule present',
  read('skills/maintenance-dev/SKILL.md').includes('No implementation slice may run before this Gate is `PASS`'),
);
const declaredVersion = read('skills/coding-start/SKILL.md').match(/Foundry contract version: `([^`]+)`/);
check('coding-start/SKILL.md declares a contract version', declaredVersion !== null);
if (declaredVersion) {
  for (const s of skills) {
    check(
      `contract version in ${s}/SKILL.md matches ${declaredVersion[1]}`,
      read(`skills/${s}/SKILL.md`).includes(`Foundry contract version: \`${declaredVersion[1]}\``),
    );
  }
}
for (const f of [
  'skills/coding-start/assets/agents.template.md',
  'skills/project-onboard/assets/agents-update.template.md',
]) {
  check(`foundry_contract_version key line in ${f}`, read(f).includes('foundry_contract_version = '));
  check(`WIP Limit casing in ${f}`, read(f).includes('WIP Limit: '));
}
check(
  'reconstruction.md treats parallel NEXT via NEEDS_CONFIRMATION',
  !read('docs/project-onboard/reconstruction.md').includes('Multiple existing `NEXT` items are recorded as `CONFLICT`') &&
    read('docs/project-onboard/reconstruction.md').includes('NEEDS_CONFIRMATION'),
);
check(
  'zh reconstruction.md treats parallel NEXT via NEEDS_CONFIRMATION',
  !read('docs/zh/project-onboard/reconstruction.md').includes('既有多个 `NEXT` 记为 `CONFLICT`') &&
    read('docs/zh/project-onboard/reconstruction.md').includes('NEEDS_CONFIRMATION'),
);
check('fix-slice edge in feature-dev/SKILL.md', read('skills/feature-dev/SKILL.md').includes('REVIEW -> IN_PROGRESS'));
check(
  'concurrency staleness rule in feature-dev/SKILL.md',
  read('skills/feature-dev/SKILL.md').includes('manifest input of `TEST DESIGN READY`'),
);
check(
  'DR-13 covers concurrent integration evidence',
  read('skills/feature-dev/assets/review-pr-done.template.md').includes('concurrently claimed during this item'),
);
check(
  'integration slice addressable in test-design template',
  read('skills/feature-dev/assets/test-design.template.md').includes('this list is the recorded integration slice'),
);
check(
  'claim authority in parallel-work reference',
  read('skills/feature-dev/references/parallel-work-and-integration.md').includes('tracker issue assignee'),
);
check(
  'claim release in parallel-work reference',
  read('skills/feature-dev/references/parallel-work-and-integration.md').includes('authority release'),
);
check(
  'parallel-work reference exists and is linked',
  existsSync(join(skillsDir, 'feature-dev', 'references', 'parallel-work-and-integration.md')) &&
    read('skills/feature-dev/SKILL.md').includes('parallel-work-and-integration.md'),
);

// 4. every relative markdown link in instruction files (SKILL.md + references) resolves.
//    Asset templates are excluded: their links resolve against generated file locations.
{
  const broken = [];
  for (const s of skills) {
    const dirs = [join(skillsDir, s), join(skillsDir, s, 'references')];
    for (const dir of dirs) {
      for (const entry of readdirSync(dir)) {
        const file = join(dir, entry);
        if (!entry.endsWith('.md') || statSync(file).isDirectory()) continue;
        const text = readFileSync(file, 'utf8');
        const rel = relative(root, file).split('\\').join('/');
        const re = /\[[^\]]*\]\(([^)]+)\)/g;
        let m;
        while ((m = re.exec(text)) !== null) {
          let target = m[1].trim();
          if (/^([a-z]+:|#|mailto:)/i.test(target)) continue;
          target = target.split('#')[0];
          if (!target) continue;
          if (!existsSync(resolve(dirname(file), target))) broken.push(`${rel}: ${m[1]}`);
        }
      }
    }
  }
  check('relative markdown links resolve', broken.length === 0, broken.slice(0, 5).join('; '));
}

// 5. placeholder-style containment per skill package
{
  const offenders = [];
  for (const s of ['project-onboard', 'feature-dev', 'evolve-dev', 'maintenance-dev']) {
    for (const file of collectMd(join(skillsDir, s, 'assets'))) {
      if (readFileSync(file, 'utf8').includes('{{')) {
        offenders.push(relative(root, file).split('\\').join('/'));
      }
    }
  }
  check('project-onboard, feature-dev, evolve-dev, and maintenance-dev assets use no {{}} placeholders', offenders.length === 0, offenders.join('; '));
}

// 6. gate checklist counts match their self-declared totals
const templateCounts = [
  ['skills/feature-dev/assets/spec.template.md', 'SR', 11],
  ['skills/feature-dev/assets/ux-ui.template.md', 'UR', 10],
  ['skills/feature-dev/assets/test-design.template.md', 'TR', 11],
  ['skills/feature-dev/assets/review-pr-done.template.md', 'DR', 13],
  ['skills/feature-dev/assets/review-pr-done.template.md', 'DUC', 10],
  ['skills/maintenance-dev/assets/campaign.template.md', 'MN', 10],
];
for (const [file, prefix, expected] of templateCounts) {
  const text = read(file);
  const rows = [...text.matchAll(new RegExp(`^\\| ${prefix}-\\d{2} \\|`, 'gm'))].length;
  check(`${file} has exactly ${expected} ${prefix}-rows`, rows === expected, `found ${rows}`);
  const declared = `all ${expected} rows`;
  check(`${file} declares "${declared}"`, text.includes(declared));
}
function sectionCount(file, startHeading, endHeading, needle = '- [ ]') {
  const text = read(file);
  const i = text.indexOf(startHeading);
  if (i === -1) return -1;
  const rest = text.slice(i);
  const j = endHeading ? rest.indexOf(endHeading, startHeading.length) : -1;
  const section = j === -1 ? rest : rest.slice(0, j);
  return section.split(needle).length - 1;
}
const refCounts = [
  ['skills/feature-dev/references/spec-and-ui-gates.md', '## 4. `SPEC READY` Checklist', '## 5.', 11],
  ['skills/feature-dev/references/spec-and-ui-gates.md', '## 7. `UI READY` Checklist', null, 10],
  ['skills/feature-dev/references/test-and-plan-gates.md', '## 4. `TEST DESIGN READY` Checklist', '## 5.', 11],
  ['skills/evolve-dev/references/evolution-lifecycle.md', '## `ROADMAP EVOLUTION READY` Checklist', null, 11],
  ['skills/maintenance-dev/references/safety-net-and-verification.md', '## `SAFETY NET READY` Checklist', '## Per-Slice Verification', 10],
  ['skills/maintenance-dev/references/campaign-and-slices.md', '## `CAMPAIGN_PLAN` Checklist', '## Mid-Campaign Discipline', 11],
];
for (const [file, start, end, expected] of refCounts) {
  const n = sectionCount(file, start, end);
  check(`${file.split('/').pop()} "${start.replace(/[#`]/g, '')}" has ${expected} items`, n === expected, `found ${n}`);
}

for (const r of results) {
  const line = `${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? ` (${r.detail})` : ''}`;
  console.log(line);
}
console.log(`\n${results.length - failures}/${results.length} checks passed`);
process.exit(failures ? 1 : 0);
