<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";

import { OCCUPATION } from "../data/occupation";
import { SKILLS } from "../data/skills";

import { JOBS } from "../data/jobs";
import { computed } from "vue";

import JobCard from "./JobCard.vue";

const route = useRoute();

const query = computed(() => route.query?.tag);

const jobs = computed(() => {
  const kw = "" + query.value;

  if (query.value) {
    return JOBS.filter((c) => c.name.includes(kw) || c.tags?.includes(kw));
  } else {
    return JOBS;
  }
});
</script>
<template>
  <div>
    <div class="py-4 border-b">
      <form class="flex justify-center">
        <div class="inline-flex items-center py-2 gap-x-1">
          <input type="text" class="w-[20rem]" placeholder="Search Jobs" />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>

    <div class="flex gap-x-8">
      <div class="py-4" style="width: 30%">
        <div>Filter By</div>

        <details>
          <summary>Filter By 工種(155)</summary>
          <div>
            <ul class="ml-8 my-2">
              <li v-for="(roles, cate) in OCCUPATION">
                <details>
                  <summary>{{ cate }}</summary>
                  <div>
                    <ul class="ml-8 my-2 list-disc">
                      <li v-for="role in roles">
                        <RouterLink :to="`/courses?tag=${role}`">
                          {{ role }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
            </ul>
          </div>
        </details>

        <section class="my-4">
          <div class="py-1 border-b mb-2">Filter By Skills</div>
          <div class="text-xs my-4">
            有職位的 skills 才會顯示，這裡只是舉例用
          </div>
          <div>
            <ul class="ml-8 my-2 list-disc">
              <li v-for="skill in SKILLS.slice(0, 20)">
                <RouterLink :to="`/jobs?tag=${skill}`">
                  #{{ skill }}
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="`/jobs?tag=`">...</RouterLink>
              </li>
            </ul>
            <RouterLink :to="`/jobs?tag=`" class="text-xs">
              &gt; View All Skills
            </RouterLink>
          </div>
        </section>

        <div class="my-4">
          <div class="py-1 border-b mb-2">JOB LEVEL</div>
          <div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Senior Management
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Middle Management
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Manager
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Profesional
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Senior Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Junior Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Non-Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Fresh / Entry Level
            </div>
          </div>
        </div>

        <div class="my-4">
          <div class="py-1 border-b mb-2">Location</div>
          <div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 澳門
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 氹仔
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 路環
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 橫琴
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 不限
            </div>
          </div>
        </div>

        <div class="my-4">
          <div class="py-1 border-b mb-2">Shift</div>
          <div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 全職
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 兼職
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 輪班
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1 py-4">
        <div class="mb-4">
          <h3>{{ Math.round(Math.random() * 1000) }} job(s)</h3>
          <p>空缺總數不包括休閒企業配對會中的空缺</p>
        </div>

        <div>
          <JobCard v-for="(job, idx) in jobs" :key="idx" :job="job"></JobCard>
        </div>
      </div>
    </div>
  </div>
</template>
