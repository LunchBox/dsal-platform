<script setup lang="ts">
import { RouterLink } from "vue-router";
import { SKILLS } from "@/data/skills";
</script>

<template>
  <main>
    <ul class="my-4 ml-8 list-disc">
      <li v-for="skill in SKILLS">
        <a href="#">{{ skill }}</a>
      </li>
    </ul>
  </main>
</template>

<style scoped></style>
