<script setup lang="ts">
const paragraphs = [
  {
    title: 'Gdzie działają Trampy?',
    content:
      [
        '45 Krakowska Drużyna Harcerzy Trampy im. Jana Romockiego ps. Bonawentura działa w hufcu Kraków Stare Miasto w Małopolskiej chorągwi harcerzy. Drużyna prowadzi zaciągi w Szkole Podstawowej nr 1 im. KEN w Krakowie oraz Szkole Podstawowej nr 159 Sióstr Urszulanek Unii Rzymskiej.',
      ],
  },
]
</script>

<template>
  <div class="flex items-center flex-col h-[88vh] w-full">
    <div class="h-[60vh] w-full bg-[url(assets/img/trampy_main.png)] bg-center">
      <div class="flex flex-col items-center justify-center h-full w-full bg-gray-800/50">
        <h1 class="text-5xl font-bold">
          45 Krakowska Drużyna Harcerzy "Trampy"
        </h1>
        <h2 class="mt-2 text-2xl font-300">
          im. Jana Romockiego ps. Bonawentura
        </h2>
      </div>
    </div>
    <div class="flex items-centr flex-col mt-10 ml-5">
      <Paragraph v-for="paragraph in paragraphs" :key="paragraph.title" :title="paragraph.title" :content="paragraph.content"/>
    </div>
  </div>
</template>
