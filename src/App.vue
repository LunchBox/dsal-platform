<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="w-full h-full border px-4">
    <header class="h-[4rem] border-b flex items-center">
      <div class="wrapper">
        <nav>
          <h1 class="text-xl">DSAL Skills Platform</h1>

          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer class="border-t mt-4 min-h-[20rem]"></footer>
  </div>
</template>

<style scoped>
nav {
  @apply flex items-center;
}
</style>
