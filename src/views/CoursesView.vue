<script setup lang="ts">
import { RouterLink } from "vue-router";

const courses = [
  {
    tp: "澳門勞工事務局",
    name: "美髮師(初級)考證課程",
    start_date: "27 May 25",
    duration: "1-2 days",
    type: "Full Time",
    course_fee: "630.00",
    funding: "315.00",
  },
];
</script>
<template>
  <div>
    <div class="py-4 border-b">
      <form class="flex justify-center">
        <div class="inline-flex items-center py-2 gap-x-1">
          <input type="text" class="w-[20rem]" placeholder="search courses" />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>

    <div class="flex">
      <div class="py-4" style="width: 30%">
        <div>Filter By</div>
      </div>
      <div class="flex-1 py-4">
        <div class="mb-4">
          <h3>{{ Math.round(Math.random() * 1000) }} course(s)</h3>
          <p>
            Employers looking for courses to send their employees for training
            are strongly advised to access the course directory for enterprises
            at SkillsFuture for Business Visit this to access the course
            directory for enterprises at SkillsFuture for Businesshere.
          </p>
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
