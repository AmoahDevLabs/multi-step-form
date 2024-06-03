<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <div
    class="container max-w-6xl mx-auto mt-10 px-3 flex flex-col gap-12 pb-16 bg-gray-100"
  >
    <RouterView />
  </div>
</template>
