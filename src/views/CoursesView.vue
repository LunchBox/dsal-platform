<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { ALL_COURSES } from "./courses";
import { ALL_TAGS } from "./tags";

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
    <div class="py-4 border-b">
      <form class="flex justify-center">
        <div class="inline-flex items-center py-2 gap-x-1">
          <input
            type="text"
            class="w-[20rem]"
            placeholder="search courses"
            :value="query"
          />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>

    <div class="flex">
      <div class="py-4" style="width: 30%">
        <details>
          <summary>Filter By Skill Tags</summary>
          <div>
            <ul class="ml-8 my-2">
              <li v-for="tag in ALL_TAGS">
                <RouterLink :to="`/courses?tag=${tag}`">
                  #{{ tag }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div class="flex-1 py-4">
        <div class="mb-4">
          <h3>{{ Math.round(Math.random() * 1000) }} course(s)</h3>
          <p>現正招生職業培訓課程</p>
        </div>

        <div>
          <div v-for="c in courses" :key="c" class="border mb-2 p-4 flex">
            <div class="flex-1">
              <div>
                <a href="#">{{ c.tp }}</a>
              </div>
              <div class="text-xl my-2">
                <RouterLink to="/courses">{{ c.name }}</RouterLink>
              </div>
              <div>Upcoming Course Date: {{ c.start_date }}</div>

              <div>
                {{ c.duration }} &middot;
                {{ c.type }}
              </div>
            </div>
            <div style="width: 30%">
              <div>
                Full Course Fee: <span>{{ c.course_fee }}</span>
              </div>

              <div>
                Funding:
                <span>{{ c.funding }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
