<script setup lang="ts">
const items = [
  {
    label: 'Aktualności',
    to: '/aktualnosci',
  },
  {
    label: 'Drużyna',
    to: '/druzyna/',
  },
  {
    label: 'Zastępy',
    to: '/zastepy/',
  },
  {
    label: 'Zuchy',
    to: '/zuchy/',
  },
  {
    label: 'Kontakt',
    to: '/kontakt',
  },
]
</script>

<template>
  <div class="w-full h-[12vh] bg-black border-b-1 border-b-gray-600 flex justify-between items-center px-5 sticky">
    <NuxtLink class="flex justify-start items-center gap-5" to="/">
      <img alt="logo Trampów" src="assets/img/logo.png" class="h-[7vh] w-[7vh] rounded-full">
      <p class="font-bold text-lg">
        45 KDH Trampy
      </p>
    </NuxtLink>
    <div class="flex gap-7 items-center justify-end">
      <NuxtLink v-for="link in items" :key="link.label" :to="link.to" class="hover:underline">
        {{ link.label }}
      </NuxtLink>
    </div>
  </div>
</template>
