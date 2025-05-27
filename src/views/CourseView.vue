<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { COURSES } from "../data/courses";
import { COURSE_FIELDS } from "../data/course_fields";

const route = useRoute();

const itemId = computed(() => route.params.id);

const course = computed(() => COURSES.find((j) => "" + j.id === itemId.value));
</script>
<template>
  <div v-if="course" class="mb-2 p-4 flex">
    <div class="flex-1">
      <div>
        <a href="#">{{ course.tp }}</a>
      </div>
      <div class="text-xl my-2">
        <RouterLink :to="`/courses/${course.id}`">{{ course.name }}</RouterLink>
      </div>

      <div v-if="course.tags" class="my-4">
        技能點：
        <RouterLink :to="`/courses?tag=${tag}`" v-for="tag in course.tags">
          #{{ tag }}
        </RouterLink>
      </div>

      <div class="my-2" v-for="field in COURSE_FIELDS">
        <div>{{ field }}</div>
        <div class="ml-4">...</div>
      </div>

      <div class="text-xs my-2">
        Upcoming Course Date: {{ course.start_date }}
      </div>

      <div class="text-sm">
        {{ course.duration }} &middot;
        {{ course.type }}
      </div>
    </div>
    <div style="width: 30%" class="text-sm">
      <div>
        Full Course Fee: <span>{{ course.course_fee }}</span>
      </div>

      <div>
        Funding:
        <span>{{ course.funding }}</span>
      </div>

      <div class="mt-2">
        <input type="submit" value="報名" />
      </div>
    </div>
  </div>
</template>
