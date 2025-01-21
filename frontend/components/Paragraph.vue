<script setup lang="ts">
defineProps<{
  title: string
  content: Array<string>
}>()
</script>

<template>
  <div class="flex flex-col gap-3 items-start w-[70%]">
    <h3 class="text-2xl font-bold mb-2 self-center text-cyan-400">
      {{ title }}
    </h3>
    <p v-for="entry in content" :key="entry">
      {{ entry }}
    </p>
  </div>
</template>
