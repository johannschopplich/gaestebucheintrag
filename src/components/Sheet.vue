<script setup lang="ts">
const color = "rgb(240, 138, 75)";
</script>

<template>
  <div
    class="h-full text-black grid grid-flow-row auto-rows-fr un-divide border-4 border-black dark:text-white dark:border-white"
  >
    <div class="flex row-span-2">
      <div class="grid grid-rows-[1fr_2fr] un-divide">
        <div class="heading p-3">Wie heißt du?</div>
        <div class="heading p-3">
          Welchen Jugendtraum wolltest du immer verwirklichen oder hast du
          vielleicht auch verwirklicht?
        </div>
      </div>

      <div
        class="shrink-0 aspect-[1/1] p-3 flex flex-col justify-between border-l-4 border-black dark:border-white"
      >
        <div class="heading">Wie siehst du als Strichzeichnung aus?</div>
        <div class="subheading text-right">Darf auch witzig sein!</div>
      </div>
    </div>

    <div class="heading p-3">Erzähle mir etwas über die Liebe!</div>

    <div class="flex row-span-2">
      <div class="w-1/3 heading p-3 border-r-4 border-black dark:border-white">
        Welche Erinnerung mit mir kommt dir in diesem Moment den Sinn?
      </div>

      <div class="flex-1 grid grid-flow-row auto-rows-fr un-divide">
        <div class="heading p-3">
          Dein Lieblingssüßgebäck, das ich selber backen kann.
        </div>
        <div class="heading p-3">Welches Tier wäre ich und warum?</div>
      </div>
    </div>

    <div class="relative">
      <div class="heading p-3">
        Drei Werte zwischen 0 und 255 (für Rot, Grün, Blau).
      </div>
      <div class="absolute bottom-3 right-3 flex gap-2 items-center">
        <div class="w-5 h-5" :style="{ backgroundColor: color }"></div>
        <code class="bg-zinc-100 text-xs rounded px-2 py-1 dark:bg-zinc-800">
          {{ color }}
        </code>
      </div>
    </div>

    <div class="flex">
      <div class="w-2 border-r-4 border-black dark:border-white"></div>
      <div class="heading p-3">Was möchtest du mir auf den Weg geben?</div>
    </div>
  </div>
</template>
