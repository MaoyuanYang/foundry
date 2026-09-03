import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const skillsDir = join(root, 'skills');
const skills = ['coding-start', 'project-onboard', 'feature-dev'];

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

// 1. package shape: SKILL.md with valid frontmatter, agents/openai.yaml, at least one asset
for (const s of skills) {
  const skillRoot = join(skillsDir, s);
  check(`${s}/SKILL.md exists`, existsSync(join(skillRoot, 'SKILL.md')));
  check(`${s}/agents/openai.yaml exists`, existsSync(join(skillRoot, 'agents', 'openai.yaml')));
  check(`${s} has at least one asset template`, collectMd(join(skillRoot, 'assets')).length > 0);
  const text = read(`skills/${s}/SKILL.md`);
  const fm = text.startsWith('---') ? text.split('---')[1] || '' : '';
  check(`${s} frontmatter has matching name`, new RegExp(`^name:\\s*["']?${s}["']?\\s*$`, 'm').test(fm));
  check(
    `${s} frontmatter has a description`,
    /description:\s*["']?\S/.test(fm) && fm.match(/description:\s*["']?(\S[^"']*)/)?.[1]?.length > 40,
  );
  const missing = skills.filter((o) => o !== s && !text.includes(o));
  check(`${s}/SKILL.md routes to siblings`, missing.length === 0, missing.join(', '));
}

// 2. the shared Feature Spec template stays byte-identical across skills
{
  const hashes = skills
    .filter((s) => existsSync(join(skillsDir, s, 'assets', 'feature-spec.template.md')))
    .map((s) => sha(read(`skills/${s}/assets/feature-spec.template.md`)));
  check(
    'feature-spec.template.md identical wherever present',
    hashes.length >= 2 && new Set(hashes).size === 1,
    `${hashes.length} copies`,
  );
}

// 3. every relative markdown link in instruction files (SKILL.md + references) resolves.
//    Asset templates are excluded: their links resolve against generated file locations.
{
  const broken = [];
  for (const s of skills) {
    const dirs = [join(skillsDir, s), join(skillsDir, s, 'references')];
    for (const dir of dirs) {
      if (!existsSync(dir)) continue;
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

// 4. asset templates use angle-bracket guidance, not {{}} placeholders
{
  const offenders = [];
  for (const s of skills) {
    for (const file of collectMd(join(skillsDir, s, 'assets'))) {
      if (readFileSync(file, 'utf8').includes('{{')) {
        offenders.push(relative(root, file).split('\\').join('/'));
      }
    }
  }
  check('asset templates use no {{}} placeholders', offenders.length === 0, offenders.join('; '));
}

// 5. removed governance machinery stays out of the skills
const banned = [
  'STAGE_LOCAL', 'STAGE.md', 'Decision Authority', 'foundry_contract_version',
  'SPEC READY', 'UI READY', 'TEST DESIGN READY', 'MACRO DESIGN READY',
  'SAFETY NET READY', 'BEHAVIOR PRESERVED', 'ROADMAP EVOLUTION READY',
  'CONFIRMED / RECOMMENDED / UNKNOWN', 'WIP Limit', 'BCP-47',
];
{
  const offenders = [];
  for (const s of skills) {
    for (const file of collectMd(join(skillsDir, s))) {
      const text = readFileSync(file, 'utf8');
      for (const token of banned) {
        if (text.includes(token)) offenders.push(`${relative(root, file)}: ${token}`);
      }
    }
  }
  check('removed governance tokens absent from skills', offenders.length === 0, offenders.slice(0, 5).join('; '));
}

for (const r of results) {
  const line = `${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail ? ` (${r.detail})` : ''}`;
  console.log(line);
}
console.log(`\n${results.length - failures}/${results.length} checks passed`);
process.exit(failures ? 1 : 0);
