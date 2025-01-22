<script setup lang="ts">
defineProps<{
  title: string
  content: Array<string>
}>()
</script>

<template>
  <div class="bg-gray-600/10 w-[70%] rounded-md self-center">
    <div class="flex flex-col gap-3 items-start p-5">
      <h3 class="text-2xl font-bold mb-2 self-center text-cyan-400">
        {{ title }}
      </h3>
      <p v-for="entry in content" :key="entry">
        {{ entry }}
      </p>
    </div>
  </div>
</template>
