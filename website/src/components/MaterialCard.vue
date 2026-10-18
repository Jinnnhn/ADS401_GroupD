<script setup lang="ts">
import { assetUrl, type Material } from '../data/research'
defineProps<{ material: Material }>()
</script>
<template>
  <article class="material-card">
    <div class="material-top">
      <span class="file-symbol" aria-hidden="true">↗</span
      ><span class="tag" :class="{ draft: material.status === 'Draft' }">{{
        material.status
      }}</span>
    </div>
    <p class="overline">{{ material.type }}</p>
    <h3>{{ material.title }}</h3>
    <p>{{ material.detail }}</p>
    <a class="text-link" :href="assetUrl(material.path)" target="_blank" rel="noopener"
      >Open {{ material.title.toLowerCase() }} <span aria-hidden="true">↗</span
      ><span class="sr-only"> (opens in a new tab)</span></a
    >
  </article>
</template>
