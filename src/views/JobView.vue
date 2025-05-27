<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

import { OCCUPATION } from "../data/occupation";
import { SKILLS } from "../data/skills";

import { JOBS } from "../data/jobs";
import { computed } from "vue";

import JobCard from "./JobCard.vue";

const route = useRoute();

// const query = computed(() => route.query?.tag);
const itemId = computed(() => route.params.id);

const job = computed(() => JOBS.find((j) => "" + j.id === itemId.value));
// const jobs = computed(() => {
//   const kw = "" + query.value;

//   if (query.value) {
//     return JOBS.filter((c) => c.name.includes(kw) || c.tags?.includes(kw));
//   } else {
//     return JOBS;
//   }
// });

const match = Math.round(Math.random() * 10);
</script>
<template>
  <div>
    <div v-if="job" class="mb-2 p-4 flex gap-x-8">
      <div class="flex-1">
        <div class="text-sm">
          <a href="#">{{ job.tp }}</a>
        </div>
        <div class="text-xl my-2">
          <RouterLink :to="`/jobs/${job.id}`">{{ job.name }}</RouterLink>
        </div>
        <div>{{ job.work_hours }}</div>

        <div class="my-4">學歷要求: <br />{{ job.edu_req }}</div>

        <div class="my-4">經驗要求: <br />{{ job.exp_req }}</div>
        <div class="my-4">工作範圍: <br />{{ job.desc }}</div>

        <div class="my-4" v-if="job.courses">
          相關課程: <br />
          <ul class="ml-8 my-2 list-disc">
            <li v-for="course in job.courses">
              <a href="#">
                {{ course }}
              </a>
            </li>
          </ul>
        </div>

        <div class="italic text-sm mt-2">
          skills matched:

          <div class="flex gap-1 my-2">
            <div
              class="h-[4px] w-[2rem] bg-gray-200"
              :class="{ 'bg-gray-400': i <= match }"
              v-for="i in 10"
            ></div>
          </div>
        </div>
      </div>
      <div style="width: 30%">
        <div>
          <span>{{ job.salary }}</span>
        </div>
        <div class="my-2 text-sm">
          Location: <span>{{ job.location }}</span>
        </div>

        <div class="mt-2">
          <input type="submit" value="應聘此職位" />
        </div>

        <div class="mt-4" v-if="job.tags">
          <div class="text-sm mb-2">相關技能</div>
          <ul>
            <li v-for="tag in job.tags">
              <RouterLink :to="`/courses?tag=${tag}`"> #{{ tag }} </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
