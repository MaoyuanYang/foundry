import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const GITHUB = 'https://github.com/MaoyuanYang/foundry'

export default withMermaid(
  defineConfig({
    title: 'Foundry',
    description:
      'AI-native, spec-driven development suite for coding agents — greenfield, brownfield takeover, and continuous feature delivery.',
    base: '/foundry/',
    appearance: 'dark',
    cleanUrls: true,
    lastUpdated: false,

    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/foundry/logo.svg' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap'
        }
      ],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: 'Foundry' }],
      [
        'meta',
        {
          property: 'og:description',
          content: 'Forge software from idea to delivery. AI-native, spec-driven development suite.'
        }
      ],
      ['meta', { name: 'theme-color', content: '#0a0a0f' }]
    ],

    locales: {
      root: {
        label: 'English',
        lang: 'en',
        themeConfig: {
          nav: [
            { text: 'Overview', link: '/skills-overview' },
            {
              text: 'Guide',
              items: [
                { text: 'Workflow & Gates', link: '/workflow' },
                { text: 'Project Stage', link: '/guide/project-stage' },
                { text: 'Authorization', link: '/guide/authorization' },
                { text: 'Language Policy', link: '/guide/language-policy' },
                { text: 'Design Change', link: '/guide/design-change' },
                { text: 'Parallel Work', link: '/guide/parallel-work' }
              ]
            },
            {
              text: 'Skills',
              items: [
                { text: 'coding-start', link: '/coding-start/' },
                { text: 'project-onboard', link: '/project-onboard/' },
                { text: 'feature-dev', link: '/feature-dev/' }
              ]
            },
            {
              text: 'Reference',
              items: [
                { text: 'Status Glossary', link: '/reference/glossary' },
                { text: 'Template Map', link: '/reference/templates' },
                { text: 'FAQ', link: '/reference/faq' }
              ]
            },
            { text: 'Install', link: '/install' }
          ],
          sidebar: [
            {
              text: 'Getting Started',
              items: [
                { text: 'Overview', link: '/skills-overview' },
                { text: 'Installation', link: '/install' },
                { text: 'Workflow & Gates', link: '/workflow' }
              ]
            },
            {
              text: 'Concepts',
              items: [
                { text: 'Authorization & Authority', link: '/guide/authorization' },
                { text: 'Project Stage & Coordination', link: '/guide/project-stage' },
                { text: 'Language Policy', link: '/guide/language-policy' },
                { text: 'Design Change Policy', link: '/guide/design-change' },
                { text: 'Parallel Work & Integration', link: '/guide/parallel-work' }
              ]
            },
            {
              text: 'coding-start',
              items: [
                { text: 'Overview & State Machine', link: '/coding-start/' },
                { text: 'Discovery & Challenge Pass', link: '/coding-start/discovery' },
                { text: 'Generated Artifacts', link: '/coding-start/artifacts' }
              ]
            },
            {
              text: 'project-onboard',
              items: [
                { text: 'Overview & Evidence Model', link: '/project-onboard/' },
                { text: 'Baseline Verification', link: '/project-onboard/baseline' },
                { text: 'Reconstruction & AS-IS', link: '/project-onboard/reconstruction' }
              ]
            },
            {
              text: 'feature-dev',
              items: [
                { text: 'Overview & State Machine', link: '/feature-dev/' },
                { text: 'Issue & Spec — SPEC READY', link: '/feature-dev/spec' },
                { text: 'UX / UI — UI READY', link: '/feature-dev/ui' },
                { text: 'Test Design — TEST DESIGN READY', link: '/feature-dev/testing' },
                { text: 'Delivery — DONE', link: '/feature-dev/delivery' }
              ]
            },
            {
              text: 'Reference',
              items: [
                { text: 'Status Glossary', link: '/reference/glossary' },
                { text: 'Template Map', link: '/reference/templates' },
                { text: 'FAQ', link: '/reference/faq' }
              ]
            }
          ],
          outline: { label: 'On this page', level: [2, 3] }
        }
      },
      zh: {
        label: '简体中文',
        lang: 'zh-CN',
        title: 'Foundry',
        description: '面向编码智能体的 AI 原生、Spec 驱动开发套件 —— 覆盖全新项目、存量接管与持续 Feature 交付。',
        themeConfig: {
          nav: [
            { text: '总览', link: '/zh/skills-overview' },
            {
              text: '指南',
              items: [
                { text: '工作流与门禁', link: '/zh/workflow' },
                { text: '项目状态面板', link: '/zh/guide/project-stage' },
                { text: '授权与决策权限', link: '/zh/guide/authorization' },
                { text: '语言策略', link: '/zh/guide/language-policy' },
                { text: '设计变更', link: '/zh/guide/design-change' },
                { text: '并行协作', link: '/zh/guide/parallel-work' }
              ]
            },
            {
              text: 'Skills',
              items: [
                { text: 'coding-start', link: '/zh/coding-start/' },
                { text: 'project-onboard', link: '/zh/project-onboard/' },
                { text: 'feature-dev', link: '/zh/feature-dev/' }
              ]
            },
            {
              text: '参考',
              items: [
                { text: '状态词汇表', link: '/zh/reference/glossary' },
                { text: '模板对照表', link: '/zh/reference/templates' },
                { text: '常见问题', link: '/zh/reference/faq' }
              ]
            },
            { text: '安装', link: '/zh/install' }
          ],
          sidebar: [
            {
              text: '开始',
              items: [
                { text: '总览', link: '/zh/skills-overview' },
                { text: '安装', link: '/zh/install' },
                { text: '工作流与门禁', link: '/zh/workflow' }
              ]
            },
            {
              text: '核心概念',
              items: [
                { text: '授权与决策权限', link: '/zh/guide/authorization' },
                { text: '项目状态与协作', link: '/zh/guide/project-stage' },
                { text: '语言策略', link: '/zh/guide/language-policy' },
                { text: '设计变更策略', link: '/zh/guide/design-change' },
                { text: '并行协作与集成', link: '/zh/guide/parallel-work' }
              ]
            },
            {
              text: 'coding-start',
              items: [
                { text: '总览与状态机', link: '/zh/coding-start/' },
                { text: '访谈与 Challenge Pass', link: '/zh/coding-start/discovery' },
                { text: '生成的产物体系', link: '/zh/coding-start/artifacts' }
              ]
            },
            {
              text: 'project-onboard',
              items: [
                { text: '总览与证据模型', link: '/zh/project-onboard/' },
                { text: '基线验证', link: '/zh/project-onboard/baseline' },
                { text: '重建与 AS-IS', link: '/zh/project-onboard/reconstruction' }
              ]
            },
            {
              text: 'feature-dev',
              items: [
                { text: '总览与状态机', link: '/zh/feature-dev/' },
                { text: 'Issue 与 Spec — SPEC READY', link: '/zh/feature-dev/spec' },
                { text: 'UX / UI — UI READY', link: '/zh/feature-dev/ui' },
                { text: '测试设计 — TEST DESIGN READY', link: '/zh/feature-dev/testing' },
                { text: '交付 — DONE', link: '/zh/feature-dev/delivery' }
              ]
            },
            {
              text: '参考',
              items: [
                { text: '状态词汇表', link: '/zh/reference/glossary' },
                { text: '模板对照表', link: '/zh/reference/templates' },
                { text: '常见问题', link: '/zh/reference/faq' }
              ]
            }
          ],
          outline: { label: '本页目录', level: [2, 3] },
          docFooter: { prev: '上一页', next: '下一页' },
          darkModeSwitchLabel: '外观',
          sidebarMenuLabel: '菜单',
          returnToTopLabel: '返回顶部'
        }
      }
    },

    themeConfig: {
      logo: '/logo.svg',
      siteTitle: 'Foundry',
      socialLinks: [{ icon: 'github', link: GITHUB }],
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2026 MaoyuanYang'
      },
      search: { provider: 'local' }
    }
  }),
  {
    mermaid: {
      theme: 'base',
      themeVariables: {
        darkMode: true,
        background: '#0c0c13',
        fontFamily: 'Inter, "Noto Sans SC", sans-serif',
        fontSize: '14px',
        primaryColor: '#1a1208',
        primaryTextColor: '#ffd9a0',
        primaryBorderColor: '#ff8c3a',
        lineColor: '#ff8c3a',
        secondaryColor: '#141018',
        tertiaryColor: '#0e0e15',
        mainBkg: '#141018',
        nodeBorder: '#ff8c3a',
        clusterBkg: '#0e0e15',
        clusterBorder: 'rgba(255,140,58,0.35)',
        titleColor: '#f4f4f6',
        edgeLabelBackground: '#0c0c13',
        textColor: '#e8e8ee',
        labelBackground: '#0c0c13'
      },
      flowchart: { curve: 'basis', padding: 12 },
      securityLevel: 'loose'
    }
  }
)
