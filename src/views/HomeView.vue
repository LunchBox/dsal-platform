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

    <div class="my-4 flex flex-wrap gap-x-4">
      <div class="border w-24 h-24">
        <RouterLink
          to="/courses"
          class="w-full h-full grid place-items-center text-center p-4"
        >
          View Courses
        </RouterLink>
      </div>
      <div class="border w-24 h-24">
        <RouterLink
          to="/jobs"
          class="w-full h-full grid place-items-center text-center p-4"
        >
          View Jobs
        </RouterLink>
      </div>
      <div class="border w-24 h-24">
        <RouterLink
          to="/skill_passport"
          class="w-full h-full grid place-items-center text-center p-4"
        >
          Skill Passport
        </RouterLink>
      </div>
      <div class="border w-24 h-24">
        <RouterLink
          to="/jobs_match"
          class="w-full h-full grid place-items-center text-center p-4"
        >
          Jobs Match Me
        </RouterLink>
      </div>
      <div class="border w-24 h-24">
        <a
          href="https://www3.dsal.gov.mo/courses/web/?language=zh-Hant#/course/course-list?categoryCode=dfpexam&category=%E8%81%B7%E6%A5%AD%E6%8A%80%E8%83%BD%E6%B8%AC%E8%A9%A6"
          target="_blank"
          class="w-full h-full grid place-items-center text-center p-4"
        >
          職業技能測試
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
