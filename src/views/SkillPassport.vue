<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { ALL_COURSES } from "./courses";
import { ALL_TAGS } from "./tags";

import { TRAINING_PROVIDERS } from "./training_providers";

const route = useRoute();

const query = computed(() => route.query?.tag);

const courses = computed(() => {
  if (query.value) {
    return ALL_COURSES.filter((c) => c.name.includes(query.value));
  } else {
    return ALL_COURSES;
  }
});
</script>
<template>
  <div>
    <div class="py-4 border-b">My Skill Passport</div>

    <div class="flex">
      <div class="py-4" style="width: 30%">
        <ul>
          <li>
            <RouterLink to="/skill_passport">Skill Tags</RouterLink>
          </li>
          <li>
            <RouterLink to="/skill_passport">Courses</RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex-1 py-4">
        <div class="mb-4">
          <h3>??</h3>
          <p></p>
        </div>
        <section>
          <h3 class="border-b py-1">All My Skill Tags</h3>
          <ul class="ml-8 my-2">
            <li v-for="tag in ALL_TAGS">
              <RouterLink :to="`/jobs?tag=${tag}`"> #{{ tag }} </RouterLink>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
