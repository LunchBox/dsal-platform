<script setup lang="ts">
import { RouterLink } from "vue-router";

import { MY_SKILLS } from "../data/my_skills";
import { JOBS } from "../data/jobs";

import JobCard from "./JobCard.vue";
import { computed } from "vue";

const jobs = computed(() => {
  return JOBS.filter((j) => {
    return j.tags && j.tags.some((tag) => MY_SKILLS.includes(tag));
  });
});
</script>
<template>
  <div>
    <div class="py-4 border-b">Jobs Match My Skills</div>
    <div class="flex gap-x-8">
      <div class="py-4 pr-4" style="width: 30%">
        <section class="my-4">
          <div class="py-1 border-b mb-2">我的技能點</div>
          <div>
            <div
              class="flex items-center gap-x-1"
              v-for="(skill, idx) in MY_SKILLS"
              :key="idx"
            >
              <input type="checkbox" checked /> #{{ skill }}
            </div>
          </div>
        </section>

        <section class="my-4">
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
        </section>

        <section class="my-4">
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
        </section>

        <section class="my-4">
          <div class="py-1 border-b mb-2">...其他 filter</div>
          <div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> ...
            </div>
          </div>
        </section>
      </div>
      <div class="flex-1 py-4">
        <div class="mb-4">
          <h3>根據我的技能點查詢到的職位</h3>
        </div>

        <div>
          <JobCard :job="JOBS[0]"></JobCard>
        </div>

        <div class="mt-8 mb-4">
          <h3>如下職位和我的技能樹相匹配，但需要再進修 1 項技能：</h3>
        </div>

        <div>
          <JobCard :job="JOBS[1]"></JobCard>
        </div>

        <div class="mt-8 mb-4">
          <h3>如下職位和我的技能樹相匹配，但需要你再進修 2 項技能：</h3>
        </div>

        <div>...</div>
      </div>
    </div>
  </div>
</template>
