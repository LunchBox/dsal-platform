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
        <div class="my-4">
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
          <p>根據我的技能點查詢到的職位</p>
        </div>

        <div>
          <JobCard v-for="(job, idx) in jobs" :key="idx" :job="job"></JobCard>
        </div>
      </div>
    </div>
  </div>
</template>
