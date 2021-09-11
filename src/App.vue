<script setup>
import { useHead } from "@vueuse/head";
import useDark from "@/logic/use-dark";
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "vue3-vite-template",
  meta: [
    {
      name: "description",
      content: "Default stack project for web development"
    }
  ]
});

const { toggleDark, isDark } = useDark;
</script>

<template>
  <button
    class="text-6xl p-4 flex items-center justify-center focus:outline-none"
    @click="toggleDark"
  >
    <span v-if="!isDark">&#9728;</span>
    <span v-else>&#127769;</span>
  </button>
  <router-view />
</template>
