import { defineConfig } from 'vitepress'

const GITHUB = 'https://github.com/MaoyuanYang/foundry'

export default defineConfig({
  title: 'Foundry',
  description:
    'A document-first, interview-driven, test-driven workflow for coding agents.',
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
        content: 'A document-first, interview-driven, test-driven workflow for coding agents.'
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
          { text: 'Workflow', link: '/workflow' },
          {
            text: 'Skills',
            items: [
              { text: 'project-start', link: '/project-start/' },
              { text: 'project-onboard', link: '/project-onboard/' },
              { text: 'project-dev', link: '/project-dev/' },
              { text: 'project-verify', link: '/project-verify/' }
            ]
          },
          { text: 'FAQ', link: '/reference/faq' },
          { text: 'Install', link: '/install' }
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Workflow', link: '/workflow' },
              { text: 'Installation', link: '/install' }
            ]
          },
          {
            text: 'project-start',
            items: [{ text: 'Overview', link: '/project-start/' }]
          },
          {
            text: 'project-onboard',
            items: [{ text: 'Overview', link: '/project-onboard/' }]
          },
          {
            text: 'project-dev',
            items: [
              { text: 'Overview', link: '/project-dev/' },
              { text: 'Spec & Interview', link: '/project-dev/spec' },
              { text: 'Testing & Work Types', link: '/project-dev/testing' }
            ]
          },
          {
            text: 'project-verify',
            items: [{ text: 'Overview', link: '/project-verify/' }]
          },
          {
            text: 'Reference',
            items: [{ text: 'FAQ', link: '/reference/faq' }]
          }
        ],
        outline: { label: 'On this page', level: [2, 3] }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Foundry',
      description: '面向编码智能体的、文档先行、访谈驱动、测试驱动的工作流。',
      themeConfig: {
        nav: [
          { text: '工作流', link: '/zh/workflow' },
          {
            text: 'Skills',
            items: [
              { text: 'project-start', link: '/zh/project-start/' },
              { text: 'project-onboard', link: '/zh/project-onboard/' },
              { text: 'project-dev', link: '/zh/project-dev/' },
              { text: 'project-verify', link: '/zh/project-verify/' }
            ]
          },
          { text: '常见问题', link: '/zh/reference/faq' },
          { text: '安装', link: '/zh/install' }
        ],
        sidebar: [
          {
            text: '开始',
            items: [
              { text: '工作流', link: '/zh/workflow' },
              { text: '安装', link: '/zh/install' }
            ]
          },
          {
            text: 'project-start',
            items: [{ text: '总览', link: '/zh/project-start/' }]
          },
          {
            text: 'project-onboard',
            items: [{ text: '总览', link: '/zh/project-onboard/' }]
          },
          {
            text: 'project-dev',
            items: [
              { text: '总览', link: '/zh/project-dev/' },
              { text: 'Spec 与访谈', link: '/zh/project-dev/spec' },
              { text: '测试与工作类型', link: '/zh/project-dev/testing' }
            ]
          },
          {
            text: 'project-verify',
            items: [{ text: '总览', link: '/zh/project-verify/' }]
          },
          {
            text: '参考',
            items: [{ text: '常见问题', link: '/zh/reference/faq' }]
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
})
