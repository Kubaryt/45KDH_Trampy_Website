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
  <div class="flex items-center flex-col w-full pb-5 bg-gray-950">
    <div class="h-[60vh] w-full bg-[url(assets/img/trampy_main.png)] bg-center border-b-2 border-b-black">
      <div class="flex flex-col items-center justify-center h-full w-full bg-gray-800/50">
        <h1 class="text-5xl font-bold">
          45 Krakowska Drużyna Harcerzy "Trampy"
        </h1>
        <h2 class="mt-2 text-2xl font-300">
          im. Jana Romockiego ps. Bonawentura
        </h2>
      </div>
    </div>
    <div class="flex flex-col mt-5 mx-10 gap-5">
      <Paragraph v-for="paragraph in paragraphs" :key="paragraph.title" :title="paragraph.title" :content="paragraph.content"/>
      <div class="flex flex-col items-center gap-5 mt-5">
        <h3 class="text-2xl w-full rounded-md bg-gray-600/10 text-center p-5 text-cyan-600 font-bold">
          Kto prowadzi drużyne
        </h3>
        <div class="flex flex-col items-center">
          <img class="h-90 w-60 rounded-md" alt="Drużynowy Adam Szwancyber razem z opiekunem drużyny Maksem Gosztyłą" src="assets/img/maks_adam.png">
          <p class="text-xs text-gray-600 w-50 mt-2">Drużynowy ćw. Adam Szwancyber i opiekun drużyny phm. Maksymilian Gosztyła HR</p>
        </div>
      </div>
    </div>
  </div>
</template>
