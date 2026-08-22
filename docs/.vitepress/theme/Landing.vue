<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const { lang, site } = useData()
const isZh = computed(() => lang.value === 'zh-CN')
const GITHUB = 'https://github.com/MaoyuanYang/foundry'

const copied = ref(false)
function copyInstall() {
  const text = 'git clone https://github.com/MaoyuanYang/foundry.git\ncp -r foundry/skills/* ~/.agents/skills/'
  navigator.clipboard?.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => (copied.value = false), 1800)
  })
}

const route = useRoute()
let revealObserver: IntersectionObserver | null = null

function setupReveal() {
  revealObserver?.disconnect()
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          revealObserver?.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver!.observe(el))
}

onMounted(() => {
  setupReveal()
  // Client-side navigation (e.g. EN <-> ZH switch) reuses this component
  // without remounting, so re-observe the freshly rendered reveal elements.
  watch(
    () => route.path,
    () => nextTick(setupReveal)
  )
})

onUnmounted(() => revealObserver?.disconnect())

const t = computed(() =>
  isZh.value
    ? {
        nav: { skills: 'Skills', install: '安装', workflow: '工作流', faq: '常见问题', docs: '文档' },
        hero: {
          badge: 'AI 原生开发套件',
          titleA: '从想法到交付，',
          titleB: '锻造软件。',
          sub: 'Foundry 把你的编码智能体变成一套有纪律的工程工作流 —— Spec 驱动、测试先行、UX 优先，每一步都有门禁。',
          cta1: '快速开始',
          cta2: 'GitHub'
        },
        terminal: { label: '安装', copied: '已复制！' },
        pipeline: {
          kicker: '生命周期',
          title: '一套体系，三个阶段',
          sub: '全新项目、存量接管、持续交付 —— 一条连续的工作流。'
        },
        nodes: [
          { tag: '0 → 1', name: 'coding-start', desc: 'Greenfield 访谈、宏观设计、DRAFT Specs。' },
          { tag: '接管', name: 'project-onboard', desc: '基线验证、架构重建、AS-IS 文档。' },
          { tag: '1 → N', name: 'feature-dev', desc: 'Spec、门禁、测试设计、编码、交付。' }
        ],
        bento: {
          kicker: '为什么选择 Foundry',
          title: '为工程纪律而生',
          sub: '每一步都被定义、被门禁、被追踪。'
        },
        cards: [
          {
            title: 'Spec 驱动',
            desc: 'Spec 是"什么才算正确"的唯一事实来源。Issue 管进度，PR 记录变化，ADR 记录原因。',
            chips: ['Spec', 'Issue', 'PR', 'ADR'],
            big: true
          },
          {
            title: '门禁式工作流',
            desc: 'SPEC READY → UI READY → TEST DESIGN READY → DONE。没有门禁，不写代码。',
            chips: ['SPEC READY', 'UI READY', 'TEST DESIGN READY', 'DONE'],
            big: true
          },
          { title: '测试设计先行', desc: '先定义如何证明正确，再写第一行代码。' },
          { title: '先 UX 后 UI', desc: '用户目标与流程先于像素，不从按钮颜色开始。' },
          {
            title: '证据优先于假设',
            desc: '已有代码是证据，不是规范；已有 UI 是证据，不是设计系统。',
            chips: ['OBSERVED', 'CONFIRMED', 'INFERRED']
          },
          { title: '授权门禁', desc: '写盘、构建、Git、远程操作各自独立，需明确授权。' },
          { title: '语言策略', desc: '工程产物英文优先，产品文案遵循产品需求。' },
          { title: '设计变更受控', desc: 'L1 / L2 / L3 影响分级 + 命名的决策权限。' },
          {
            title: '自适应访谈',
            desc: '聚焦访谈：STANDARD 每轮 2–5 个相关问题，DEEP 每轮一个决策问题，之后强制 Challenge Pass。',
            chips: ['STANDARD', 'DEEP', 'CHALLENGE PASS']
          },
          {
            title: '先 AS-IS 后 TO-BE',
            desc: '接管先重建可验证的 AS-IS 基线。已有代码是证据，绝不自动升级为规范。',
            chips: ['AS-IS', 'TO-BE', 'RECONSTRUCTED']
          }
        ],
        quick: {
          kicker: '快速开始',
          title: '几秒钟，开始锻造',
          items: [
            { label: '新项目', prompt: '"初始化一个 greenfield 项目：社区本地生活平台。"' },
            { label: '接管', prompt: '"接管这个仓库，建立 AS-IS 基线。"' },
            { label: 'Feature', prompt: '"按工作流实现 Feature F001。"' }
          ]
        },
        cta: {
          title: '准备好锻造了吗？',
          sub: '安装 Foundry，给你的智能体一套值得交付的工作流。',
          button: '快速开始'
        },
        footer: { tagline: '从想法到交付，锻造软件。', docs: '文档', rights: 'MIT License © 2026 MaoyuanYang' }
      }
    : {
        nav: { skills: 'Skills', install: 'Install', workflow: 'Workflow', faq: 'FAQ', docs: 'Docs' },
        hero: {
          badge: 'AI-Native Development Suite',
          titleA: 'Forge software',
          titleB: 'from idea to delivery.',
          sub: 'Foundry turns your coding agent into a disciplined engineering workflow — spec-driven, test-first, UX-aware, and gated at every step.',
          cta1: 'Get Started',
          cta2: 'GitHub'
        },
        terminal: { label: 'INSTALL', copied: 'Copied!' },
        pipeline: {
          kicker: 'The Lifecycle',
          title: 'One suite. Three phases.',
          sub: 'Greenfield, brownfield takeover, and continuous delivery — one continuous workflow.'
        },
        nodes: [
          { tag: '0 → 1', name: 'coding-start', desc: 'Greenfield discovery, macro design, DRAFT specs.' },
          { tag: 'Takeover', name: 'project-onboard', desc: 'Baseline, reconstruction, AS-IS documentation.' },
          { tag: '1 → N', name: 'feature-dev', desc: 'Spec, gates, test design, coding, delivery.' }
        ],
        bento: {
          kicker: 'Why Foundry',
          title: 'Built for engineering discipline',
          sub: 'Every step is defined, gated, and traceable.'
        },
        cards: [
          {
            title: 'Spec-Driven',
            desc: 'The Spec is the single source of truth for what is correct. Issues track progress, PRs record changes, ADRs record why.',
            chips: ['Spec', 'Issue', 'PR', 'ADR'],
            big: true
          },
          {
            title: 'Gated Workflow',
            desc: 'SPEC READY → UI READY → TEST DESIGN READY → DONE. No gate, no code.',
            chips: ['SPEC READY', 'UI READY', 'TEST DESIGN READY', 'DONE'],
            big: true
          },
          { title: 'Test Design First', desc: 'Define how correctness is proven before writing a single line.' },
          { title: 'UX Before UI', desc: 'User goals and flows come before pixels. No starting from button colors.' },
          {
            title: 'Evidence over Assumption',
            desc: 'Existing code is evidence, not the standard. Existing UI is evidence, not the design system.',
            chips: ['OBSERVED', 'CONFIRMED', 'INFERRED']
          },
          { title: 'Authorization Gates', desc: 'Write, build, git, and remote actions each require explicit approval.' },
          { title: 'Language Policy', desc: 'English-first engineering artifacts; product copy follows product requirements.' },
          { title: 'Design Change Control', desc: 'L1 / L2 / L3 impact levels with named decision authority.' },
          {
            title: 'Adaptive Grilling',
            desc: 'Focused interviews: 2–5 related questions in STANDARD, one decision question per round in DEEP, then a mandatory Challenge Pass.',
            chips: ['STANDARD', 'DEEP', 'CHALLENGE PASS']
          },
          {
            title: 'AS-IS before TO-BE',
            desc: 'Takeovers reconstruct a verified AS-IS baseline first. Existing code is evidence — never auto-promoted to the standard.',
            chips: ['AS-IS', 'TO-BE', 'RECONSTRUCTED']
          }
        ],
        quick: {
          kicker: 'Quick Start',
          title: 'Start forging in seconds',
          items: [
            { label: 'New project', prompt: '"Initialize a greenfield project: a community local-services platform."' },
            { label: 'Takeover', prompt: '"Take over this repo and build an AS-IS baseline."' },
            { label: 'Feature', prompt: '"Implement feature F001 per the workflow."' }
          ]
        },
        cta: {
          title: 'Ready to forge?',
          sub: 'Install Foundry and give your agent a workflow worth shipping.',
          button: 'Get Started'
        },
        footer: { tagline: 'Forge software from idea to delivery.', docs: 'Docs', rights: 'MIT License © 2026 MaoyuanYang' }
      }
)

const prefix = computed(() => (isZh.value ? '/zh' : ''))
const langHref = computed(() => (isZh.value ? '/' : '/zh/'))
</script>

<template>
  <div class="landing">
    <!-- ambient background -->
    <div class="bg-grid" aria-hidden="true"></div>
    <div class="bg-glow bg-glow-a" aria-hidden="true"></div>
    <div class="bg-glow bg-glow-b" aria-hidden="true"></div>

    <!-- NAV -->
    <header class="nav">
      <a class="nav-brand" :href="withBase(prefix + '/')">
        <img :src="withBase('/logo.svg')" alt="Foundry" class="nav-logo" />
        <span class="nav-name">Foundry</span>
      </a>
      <nav class="nav-links">
        <a :href="withBase(prefix + '/skills-overview')">{{ t.nav.skills }}</a>
        <a :href="withBase(prefix + '/install')">{{ t.nav.install }}</a>
        <a :href="withBase(prefix + '/workflow')">{{ t.nav.workflow }}</a>
        <a :href="withBase(prefix + '/reference/faq')">{{ t.nav.faq }}</a>
      </nav>
      <div class="nav-actions">
        <a class="nav-lang" :href="withBase(langHref)">{{ isZh ? 'EN' : '中文' }}</a>
        <a class="nav-gh" :href="GITHUB" target="_blank" rel="noopener" aria-label="GitHub">
          <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" aria-hidden="true">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
            />
          </svg>
        </a>
      </div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <span class="pill" data-reveal>
          <span class="pill-dot"></span>
          {{ t.hero.badge }}
        </span>
        <h1 class="hero-title" data-reveal>
          {{ t.hero.titleA }}
          <span class="grad">{{ t.hero.titleB }}</span>
        </h1>
        <p class="hero-sub" data-reveal>{{ t.hero.sub }}</p>
        <div class="hero-cta" data-reveal>
          <a class="btn btn-primary" :href="withBase(prefix + '/install')">{{ t.hero.cta1 }}</a>
          <a class="btn btn-ghost" :href="GITHUB" target="_blank" rel="noopener">{{ t.hero.cta2 }}</a>
        </div>

        <div class="terminal" data-reveal>
          <div class="terminal-bar">
            <span class="t-dot t-red"></span>
            <span class="t-dot t-yellow"></span>
            <span class="t-dot t-green"></span>
            <span class="terminal-label">{{ t.terminal.label }}</span>
            <button class="terminal-copy" type="button" @click="copyInstall">
              {{ copied ? t.terminal.copied : '⧉' }}
            </button>
          </div>
          <pre class="terminal-body"><code><span class="t-prompt">$</span> git clone https://github.com/MaoyuanYang/foundry.git
<span class="t-prompt">$</span> cp -r foundry/skills/* ~/.agents/skills/</code></pre>
        </div>
      </div>
    </section>

    <!-- PIPELINE -->
    <section class="section">
      <div class="section-head" data-reveal>
        <span class="kicker">{{ t.pipeline.kicker }}</span>
        <h2 class="section-title">{{ t.pipeline.title }}</h2>
        <p class="section-sub">{{ t.pipeline.sub }}</p>
      </div>
      <div class="pipeline">
        <div class="pipe-line" aria-hidden="true"></div>
        <div v-for="(n, i) in t.nodes" :key="n.name" class="pipe-node" data-reveal>
          <div class="node-orb"><span>{{ i + 1 }}</span></div>
          <span class="node-tag">{{ n.tag }}</span>
          <h3 class="node-name">{{ n.name }}</h3>
          <p class="node-desc">{{ n.desc }}</p>
        </div>
      </div>
    </section>

    <!-- BENTO -->
    <section class="section">
      <div class="section-head" data-reveal>
        <span class="kicker">{{ t.bento.kicker }}</span>
        <h2 class="section-title">{{ t.bento.title }}</h2>
        <p class="section-sub">{{ t.bento.sub }}</p>
      </div>
      <div class="bento">
        <article
          v-for="c in t.cards"
          :key="c.title"
          class="card"
          :class="{ 'card-big': c.big }"
          data-reveal
        >
          <h3 class="card-title">{{ c.title }}</h3>
          <p class="card-desc">{{ c.desc }}</p>
          <div v-if="c.chips" class="chips">
            <span v-for="ch in c.chips" :key="ch" class="chip">{{ ch }}</span>
          </div>
        </article>
      </div>
    </section>

    <!-- QUICK START -->
    <section class="section">
      <div class="section-head" data-reveal>
        <span class="kicker">{{ t.quick.kicker }}</span>
        <h2 class="section-title">{{ t.quick.title }}</h2>
      </div>
      <div class="quick">
        <div v-for="q in t.quick.items" :key="q.label" class="quick-card" data-reveal>
          <span class="quick-label">{{ q.label }}</span>
          <p class="quick-prompt">{{ q.prompt }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-wrap">
      <div class="cta" data-reveal>
        <h2 class="cta-title">{{ t.cta.title }}</h2>
        <p class="cta-sub">{{ t.cta.sub }}</p>
        <a class="btn btn-primary" :href="withBase(prefix + '/install')">{{ t.cta.button }}</a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <img :src="withBase('/logo.svg')" alt="Foundry" class="footer-logo" />
          <div>
            <div class="footer-name">Foundry</div>
            <div class="footer-tagline">{{ t.footer.tagline }}</div>
          </div>
        </div>
        <div class="footer-links">
          <a :href="withBase(prefix + '/skills-overview')">{{ t.nav.skills }}</a>
          <a :href="withBase(prefix + '/workflow')">{{ t.nav.workflow }}</a>
          <a :href="GITHUB" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
      <div class="footer-rights">{{ t.footer.rights }}</div>
    </footer>
  </div>
</template>

<style scoped>
.landing {
  position: relative;
  min-height: 100vh;
  color: var(--fy-text-1);
  background: var(--fy-bg);
  overflow-x: hidden;
  font-family: var(--fy-font-body);
}

/* ---- ambient ---- */
.bg-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(ellipse 90% 60% at 50% 0%, #000 30%, transparent 78%);
  -webkit-mask-image: radial-gradient(ellipse 90% 60% at 50% 0%, #000 30%, transparent 78%);
  pointer-events: none;
}
.bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.5;
  pointer-events: none;
}
.bg-glow-a {
  top: -220px;
  left: 50%;
  transform: translateX(-50%);
  width: 720px;
  height: 520px;
  background: radial-gradient(circle, rgba(255, 107, 26, 0.32), transparent 70%);
  animation: float 9s ease-in-out infinite;
}
.bg-glow-b {
  top: 320px;
  right: -180px;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(255, 179, 71, 0.14), transparent 70%);
  animation: float 12s ease-in-out infinite reverse;
}
@keyframes float {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(28px);
  }
}
.bg-glow-b {
  animation-name: floatB;
}
@keyframes floatB {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

/* ---- nav ---- */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 28px;
  backdrop-filter: blur(14px);
  background: rgba(7, 7, 10, 0.6);
  border-bottom: 1px solid var(--fy-border);
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.nav-logo,
.footer-logo {
  width: 26px;
  height: 26px;
}
.nav-name,
.footer-name {
  font-family: var(--fy-font-display);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: var(--fy-text-1);
}
.nav-links {
  display: flex;
  gap: 26px;
}
.nav-links a {
  color: var(--fy-text-2);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover {
  color: var(--fy-ember-2);
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}
.nav-lang {
  font-size: 13px;
  font-weight: 600;
  color: var(--fy-text-2);
  text-decoration: none;
  border: 1px solid var(--fy-border);
  padding: 5px 11px;
  border-radius: 8px;
  transition: all 0.2s;
}
.nav-lang:hover {
  color: var(--fy-ember-2);
  border-color: var(--fy-border-strong);
}
.nav-gh {
  color: var(--fy-text-2);
  transition: color 0.2s;
}
.nav-gh:hover {
  color: var(--fy-ember-2);
}

/* ---- hero ---- */
.hero {
  position: relative;
  padding: 96px 24px 40px;
  text-align: center;
}
.hero-inner {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fy-ember-2);
  border: 1px solid rgba(255, 140, 58, 0.3);
  background: rgba(255, 107, 26, 0.08);
  padding: 7px 16px;
  border-radius: 999px;
}
.pill-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--fy-ember-1);
  box-shadow: 0 0 10px var(--fy-ember-1);
}
.hero-title {
  font-family: var(--fy-font-display);
  font-size: clamp(42px, 7vw, 76px);
  line-height: 1.02;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0;
}
.grad {
  background: var(--fy-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero-sub {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.65;
  color: var(--fy-text-2);
  max-width: 640px;
  margin: 0;
}
.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  padding: 12px 26px;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
}
.btn-primary {
  color: #1a0d02;
  background: var(--fy-gradient);
  box-shadow: 0 8px 30px rgba(255, 107, 26, 0.32);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(255, 107, 26, 0.45);
}
.btn-ghost {
  color: var(--fy-text-1);
  border: 1px solid var(--fy-border-strong);
  background: rgba(255, 255, 255, 0.04);
}
.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

/* ---- terminal ---- */
.terminal {
  width: 100%;
  max-width: 620px;
  border-radius: 14px;
  border: 1px solid var(--fy-border);
  background: rgba(12, 12, 19, 0.85);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  text-align: left;
}
.terminal-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--fy-border);
  background: rgba(255, 255, 255, 0.02);
}
.t-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.t-red {
  background: #ff5f57;
}
.t-yellow {
  background: #febc2e;
}
.t-green {
  background: #28c840;
}
.terminal-label {
  margin-left: 8px;
  font-family: var(--fy-font-mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--fy-text-3);
}
.terminal-copy {
  margin-left: auto;
  background: none;
  border: 1px solid var(--fy-border);
  color: var(--fy-text-2);
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.2s;
}
.terminal-copy:hover {
  color: var(--fy-ember-2);
  border-color: var(--fy-border-strong);
}
.terminal-body {
  margin: 0;
  padding: 18px 20px;
  font-family: var(--fy-font-mono);
  font-size: 13.5px;
  line-height: 1.8;
  color: #d7d7e0;
  overflow-x: auto;
}
.t-prompt {
  color: var(--fy-ember-2);
  margin-right: 8px;
}

/* ---- sections ---- */
.section {
  position: relative;
  padding: 84px 24px;
  max-width: 1120px;
  margin: 0 auto;
}
.section-head {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 52px;
}
.kicker {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fy-ember-2);
  margin-bottom: 14px;
}
.section-title {
  font-family: var(--fy-font-display);
  font-size: clamp(30px, 4.5vw, 44px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 14px;
}
.section-sub {
  color: var(--fy-text-2);
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
}

/* ---- pipeline ---- */
.pipeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.pipe-line {
  position: absolute;
  top: 34px;
  left: 12%;
  right: 12%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--fy-ember-1), var(--fy-ember-2), var(--fy-ember-1), transparent);
  opacity: 0.5;
}
.pipe-node {
  position: relative;
  text-align: center;
  padding: 30px 22px;
  border-radius: 16px;
  border: 1px solid var(--fy-border);
  background: var(--fy-surface);
  backdrop-filter: blur(8px);
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.pipe-node:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 140, 58, 0.4);
  box-shadow: 0 18px 50px rgba(255, 107, 26, 0.16);
}
.node-orb {
  width: 52px;
  height: 52px;
  margin: 0 auto 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--fy-gradient);
  box-shadow: 0 0 30px rgba(255, 107, 26, 0.4);
}
.node-orb span {
  font-family: var(--fy-font-display);
  font-weight: 700;
  color: #1a0d02;
  font-size: 20px;
}
.node-tag {
  display: inline-block;
  font-family: var(--fy-font-mono);
  font-size: 11.5px;
  font-weight: 600;
  color: var(--fy-ember-2);
  border: 1px solid rgba(255, 140, 58, 0.3);
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 12px;
}
.node-name {
  font-family: var(--fy-font-mono);
  font-size: 17px;
  font-weight: 600;
  margin: 0 0 8px;
}
.node-desc {
  color: var(--fy-text-2);
  font-size: 13.5px;
  line-height: 1.6;
  margin: 0;
}

/* ---- bento ---- */
.bento {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.card {
  grid-column: span 2;
  padding: 26px;
  border-radius: 18px;
  border: 1px solid var(--fy-border);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(8px);
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.card:not(.card-big) {
  grid-column: span 1;
}
.card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 140, 58, 0.38);
  box-shadow: 0 18px 50px rgba(255, 107, 26, 0.14);
}
.card-title {
  font-family: var(--fy-font-display);
  font-size: 19px;
  font-weight: 600;
  letter-spacing: -0.01em;
  margin: 0 0 10px;
}
.card-desc {
  color: var(--fy-text-2);
  font-size: 14px;
  line-height: 1.65;
  margin: 0 0 16px;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.chip {
  font-family: var(--fy-font-mono);
  font-size: 11.5px;
  font-weight: 500;
  color: var(--fy-ember-3);
  background: rgba(255, 107, 26, 0.1);
  border: 1px solid rgba(255, 140, 58, 0.25);
  padding: 4px 10px;
  border-radius: 7px;
}

/* ---- quick ---- */
.quick {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.quick-card {
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--fy-border);
  background: var(--fy-surface);
  transition: transform 0.25s, border-color 0.25s;
}
.quick-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 140, 58, 0.38);
}
.quick-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--fy-ember-2);
  margin-bottom: 12px;
}
.quick-prompt {
  font-family: var(--fy-font-mono);
  font-size: 13px;
  line-height: 1.6;
  color: #d7d7e0;
  margin: 0;
}

/* ---- cta ---- */
.cta-wrap {
  padding-bottom: 40px;
}
.cta {
  text-align: center;
  padding: 70px 32px;
  border-radius: 26px;
  border: 1px solid rgba(255, 140, 58, 0.3);
  background: radial-gradient(circle at 50% 0%, rgba(255, 107, 26, 0.16), transparent 70%),
    rgba(255, 255, 255, 0.03);
}
.cta-title {
  font-family: var(--fy-font-display);
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0 0 14px;
}
.cta-sub {
  color: var(--fy-text-2);
  font-size: 16px;
  margin: 0 0 28px;
}

/* ---- footer ---- */
.footer {
  border-top: 1px solid var(--fy-border);
  padding: 40px 28px 28px;
}
.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.footer-tagline {
  color: var(--fy-text-3);
  font-size: 13px;
}
.footer-links {
  display: flex;
  gap: 22px;
}
.footer-links a {
  color: var(--fy-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: var(--fy-ember-2);
}
.footer-rights {
  max-width: 1120px;
  margin: 24px auto 0;
  color: var(--fy-text-3);
  font-size: 12.5px;
}

/* ---- responsive ---- */
@media (max-width: 900px) {
  .bento {
    grid-template-columns: repeat(2, 1fr);
  }
  .card,
  .card:not(.card-big) {
    grid-column: span 2;
  }
  .quick {
    grid-template-columns: 1fr;
  }
  .nav-links {
    display: none;
  }
}
@media (max-width: 640px) {
  .pipeline {
    grid-template-columns: 1fr;
  }
  .pipe-line {
    display: none;
  }
  .bento {
    grid-template-columns: 1fr;
  }
}
</style>
