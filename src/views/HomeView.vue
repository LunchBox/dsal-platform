<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <div class="mt-4">Where there is a skill, there is a way!</div>
    <form>
      <div class="flex items-center py-2 gap-x-1">
        <input
          type="text"
          class="w-[20rem]"
          placeholder="search courses, jobs"
        />
        <input type="submit" value="Search" />
      </div>
    </form>

    <div class="my-4">
      <div class="border w-18 h-18 grid place-items-center text-center">
        <RouterLink to="/courses">View Courses</RouterLink>
      </div>
    </div>
  </main>
</template>
