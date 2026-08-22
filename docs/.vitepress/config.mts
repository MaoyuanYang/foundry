import { defineConfig } from 'vitepress'

const GITHUB = 'https://github.com/MaoyuanYang/foundry'

export default defineConfig({
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
          { text: 'Skills', link: '/skills-overview' },
          { text: 'Install', link: '/install' },
          { text: 'Workflow', link: '/workflow' },
          { text: 'FAQ', link: '/faq' }
        ],
        sidebar: [
          {
            text: 'Foundry',
            items: [
              { text: 'Overview', link: '/skills-overview' },
              { text: 'Installation', link: '/install' },
              { text: 'Workflow & Gates', link: '/workflow' },
              { text: 'FAQ', link: '/faq' }
            ]
          }
        ],
        outline: { label: 'On this page' }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Foundry',
      description: '面向编码智能体的 AI 原生、Spec 驱动开发套件 —— 覆盖全新项目、存量接管与持续 Feature 交付。',
      themeConfig: {
        nav: [
          { text: 'Skills', link: '/zh/skills-overview' },
          { text: '安装', link: '/zh/install' },
          { text: '工作流', link: '/zh/workflow' },
          { text: '常见问题', link: '/zh/faq' }
        ],
        sidebar: [
          {
            text: 'Foundry',
            items: [
              { text: '总览', link: '/zh/skills-overview' },
              { text: '安装', link: '/zh/install' },
              { text: '工作流与门禁', link: '/zh/workflow' },
              { text: '常见问题', link: '/zh/faq' }
            ]
          }
        ],
        outline: { label: '本页目录' },
        lastUpdated: { text: '最后更新' },
        docFooter: { prev: '上一页', next: '下一页' },
        darkModeSwitchLabel: '外观',
        lightModeSwitchTitle: '切换到浅色',
        darkModeSwitchTitle: '切换到深色',
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
})
