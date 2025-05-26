<script lang="ts" setup>
defineProps(["job"]);
</script>
<template>
  <div class="border mb-2 p-4 flex gap-x-8">
    <div class="flex-1">
      <div class="text-sm">
        <a href="#">{{ job.tp }}</a>
      </div>
      <div class="text-xl my-2">
        <RouterLink to="/courses">{{ job.name }}</RouterLink>
      </div>
      <div>{{ job.work_hours }}</div>
      <details>
        <summary>Details</summary>

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
      </details>
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
</template>
