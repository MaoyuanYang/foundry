<script lang="ts">
export default { name: 'DocTree' }
</script>

<script setup lang="ts">
import { computed } from 'vue'

type Node = {
  name: string
  kind?: 'dir' | 'file'
  ui?: boolean
  note?: string
  children?: Node[]
}

const props = defineProps<{
  nodes?: Node[]
  depth?: number
  root?: boolean
}>()

const depth = computed(() => props.depth ?? 0)
const isRoot = computed(() => props.root ?? true)

const defaultTree: Node[] = [
  {
    name: 'project/',
    kind: 'dir',
    children: [
      { name: 'README.md', kind: 'file', note: 'quick entry' },
      { name: 'STAGE.md', kind: 'file', note: 'project + member status' },
      { name: 'AGENTS.md', kind: 'file', note: 'durable AI rules' },
      {
        name: 'docs/',
        kind: 'dir',
        children: [
          { name: 'PRODUCT.md', kind: 'file' },
          { name: 'ARCHITECTURE.md', kind: 'file' },
          { name: 'DATABASE.md', kind: 'file' },
          { name: 'API.md', kind: 'file' },
          { name: 'TESTING.md', kind: 'file' },
          { name: 'FRONTEND.md', kind: 'file', ui: true },
          { name: 'UX.md', kind: 'file', ui: true },
          { name: 'UI.md', kind: 'file', ui: true },
          { name: 'DESIGN_SYSTEM.md', kind: 'file', ui: true },
          {
            name: 'adr/',
            kind: 'dir',
            children: [{ name: 'README.md', kind: 'file', note: 'ADR index' }]
          }
        ]
      },
      {
        name: 'specs/',
        kind: 'dir',
        children: [
          { name: 'ROADMAP.md', kind: 'file', note: 'Feature Map' },
          {
            name: 'Fxxx-feature-slug/',
            kind: 'dir',
            children: [{ name: 'spec.md', kind: 'file', note: 'DRAFT Spec ×N' }]
          }
        ]
      }
    ]
  }
]

const items = computed<Node[]>(() => props.nodes ?? defaultTree)
</script>

<template>
  <div v-if="isRoot" class="doctree">
    <div class="doctree-head">
      <span class="doctree-title">Generated project documentation</span>
      <span class="doctree-legend">
        <span class="legend-dot legend-ui"></span>
        UI extension — only when <code>UI: YES</code>
      </span>
    </div>
    <div class="doctree-body">
      <DocTree :nodes="items" :depth="0" :root="false" />
    </div>
  </div>

  <ul v-else class="dt-list" :class="{ 'dt-root': depth === 0 }">
    <li v-for="n in items" :key="n.name">
      <span class="dt-row" :class="{ 'dt-ui': n.ui, 'dt-dir': n.kind === 'dir' }">
        <span class="dt-icon">{{ n.kind === 'dir' ? '▸' : '·' }}</span>
        <span class="dt-name">{{ n.name }}</span>
        <span v-if="n.ui" class="dt-badge">UI</span>
        <span v-if="n.note" class="dt-note">{{ n.note }}</span>
      </span>
      <DocTree v-if="n.children" :nodes="n.children" :depth="depth + 1" :root="false" />
    </li>
  </ul>
</template>

<style scoped>
.doctree {
  border: 1px solid var(--fy-border);
  border-radius: 16px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.015));
  overflow: hidden;
  margin: 20px 0;
}
.doctree-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  padding: 13px 18px;
  border-bottom: 1px solid var(--fy-border);
  background: rgba(255, 255, 255, 0.02);
}
.doctree-title {
  font-family: var(--fy-font-display);
  font-weight: 600;
  font-size: 14px;
  color: var(--fy-text-1);
}
.doctree-legend {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--fy-text-2);
}
.doctree-legend code {
  font-size: 11px;
}
.legend-dot {
  width: 9px;
  height: 9px;
  border-radius: 3px;
}
.legend-ui {
  background: var(--fy-ember-1);
  box-shadow: 0 0 8px rgba(255, 107, 26, 0.6);
}
.doctree-body {
  padding: 18px 20px;
  font-family: var(--fy-font-mono);
  font-size: 13.5px;
  line-height: 1.75;
}
.dt-list {
  list-style: none;
  margin: 0;
  padding-left: 22px;
  border-left: 1px dashed rgba(255, 255, 255, 0.12);
}
.dt-list.dt-root {
  padding-left: 0;
  border-left: none;
}
.dt-row {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 2px 8px;
  border-radius: 8px;
  color: #d7d7e0;
  border: 1px solid transparent;
}
.dt-icon {
  color: var(--fy-ember-2);
  width: 12px;
  display: inline-block;
}
.dt-dir .dt-name {
  color: var(--fy-text-1);
  font-weight: 600;
}
.dt-ui {
  background: rgba(255, 107, 26, 0.07);
  border-color: rgba(255, 140, 58, 0.22);
}
.dt-badge {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #1a0d02;
  background: var(--fy-gradient);
  padding: 1px 6px;
  border-radius: 5px;
}
.dt-note {
  color: var(--fy-text-3);
  font-size: 12px;
}
</style>
