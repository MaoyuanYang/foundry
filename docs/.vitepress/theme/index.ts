import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import LandingLayout from './LandingLayout.vue'
import DocTree from './DocTree.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: LandingLayout,
  enhanceApp({ app }) {
    app.component('DocTree', DocTree)
  }
} satisfies Theme
