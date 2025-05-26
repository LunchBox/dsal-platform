<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { COURSES } from "../data/courses";
import { SKILLS } from "../data/skills";

const route = useRoute();

const query = computed(() => route.query?.tag);

const courses = computed(() => {
  const kw = "" + query.value;

  if (query.value) {
    return COURSES.filter((c) => c.name.includes(kw) || c.tags?.includes(kw));
  } else {
    return COURSES;
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

    <div class="flex gap-x-4">
      <div class="py-4" style="width: 30%">
        <section class="my-4">
          <div class="py-1 border-b mb-2">Filter By Skills</div>
          <div>
            <ul class="ml-8 my-2 list-disc">
              <li v-for="skill in SKILLS">
                <RouterLink :to="`/courses?tag=${skill}`">
                  #{{ skill }}
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="`/courses?tag=`">...</RouterLink>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="flex-1 py-4">
        <div class="mb-4">
          <h3>{{ Math.round(Math.random() * 1000) }} course(s)</h3>
          <p>現正招生職業培訓課程</p>
        </div>

        <div>
          <div v-for="c in courses" :key="c.name" class="border mb-2 p-4 flex">
            <div class="flex-1">
              <div>
                <a href="#">{{ c.tp }}</a>
              </div>
              <div class="text-xl my-2">
                <RouterLink to="/courses">{{ c.name }}</RouterLink>
              </div>

              <div v-if="c.tags" class="my-4">
                技能點：
                <RouterLink :to="`/courses?tag=${tag}`" v-for="tag in c.tags">
                  #{{ tag }}
                </RouterLink>
              </div>

              <div class="text-xs my-2">
                Upcoming Course Date: {{ c.start_date }}
              </div>

              <div class="text-sm">
                {{ c.duration }} &middot;
                {{ c.type }}
              </div>
            </div>
            <div style="width: 30%" class="text-sm">
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
