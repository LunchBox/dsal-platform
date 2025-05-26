<script setup lang="ts">
import { RouterLink } from "vue-router";
import { SKILLS } from "@/data/skills";
import { JOBS } from "@/data/jobs";
import { computed } from "vue";

const company = "新濠天地渡假村有限公司";
const jobs = computed(() => JOBS.filter((j) => j.tp === company));
</script>

<template>
  <main>
    <div class="py-4 border-b">{{ company }}</div>

    <div class="flex gap-x-8">
      <div class="py-4" style="width: 30%">
        <section class="my-4">
          <div class="py-1 border-b mb-2">Filter By Status</div>
          <div>
            <ul class="ml-8 my-2 list-disc">
              <li>
                <RouterLink :to="`/tp?status=`">草稿箱</RouterLink>
              </li>
              <li>
                <RouterLink :to="`/tp?status=`">待審批</RouterLink>
              </li>
              <li>
                <RouterLink :to="`/tp?status=`">已公佈</RouterLink>
              </li>
              <li>
                <RouterLink :to="`/tp?status=`">已完成</RouterLink>
              </li>
              <li>
                <RouterLink :to="`/tp?status=`">...</RouterLink>
              </li>
            </ul>
          </div>
        </section>

        <section class="my-4">
          <div class="py-1 border-b mb-2">Filter By Skills</div>
          <div>
            <ul class="ml-8 my-2 list-disc">
              <li v-for="skill in SKILLS.slice(0, 10)">
                <RouterLink :to="`/tp?tag=${skill}`">#{{ skill }}</RouterLink>
              </li>
              <li>
                <RouterLink :to="`/tp?tag=`">...</RouterLink>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div class="flex-1 py-4">
        <div>
          <form>
            <div class="flex items-center py-2 gap-x-1">
              <input type="text" class="w-[20rem]" placeholder="Search Jobs" />
              <input type="submit" value="Search" />
            </div>
          </form>
        </div>
        <div class="mb-4">
          <h3>職位招聘 {{ Math.round(Math.random() * 1000) }} positions(s)</h3>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th class="w-full">Title</th>
                <th>Applications</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(c, idx) in jobs" :key="c.name">
                <td>{{ idx }}</td>
                <td>
                  <div>
                    {{ c.name }}
                  </div>
                </td>
                <td>
                  {{ Math.round(Math.random() * 10) }}
                </td>
                <td>
                  {{ c.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
