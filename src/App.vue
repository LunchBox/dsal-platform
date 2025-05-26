<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="w-full h-full border px-4">
    <header class="h-[4rem] border-b flex items-center">
      <div class="wrapper">
        <nav class="flex items-center gap-x-2">
          <h1 class="text-xl">
            <RouterLink to="/">DSAL Skills Platform</RouterLink>
          </h1>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer class="border-t mt-4 min-h-[20rem]"></footer>
  </div>
</template>

<style scoped></style>
