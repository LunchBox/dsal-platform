<script lang="ts" setup>
defineProps(["course"]);
</script>
<template>
  <div class="border mb-2 p-4 flex">
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
