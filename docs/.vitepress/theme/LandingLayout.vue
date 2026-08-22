<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import Landing from './Landing.vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <Landing v-if="frontmatter.layout === 'landing'" />
  <DefaultTheme.Layout v-else />
</template>
