<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { COURSES } from "../data/courses";
import { SKILLS } from "../data/skills";
import CourseCard from "./CourseCard.vue";

const route = useRoute();

const query = computed(() => route.query?.tag);

const courses = computed(() => {
  const kw = "" + query.value;

  if (query.value) {
    return COURSES.filter((c) => c.name.includes(kw) || c.tags?.includes(kw));
  } else {
    return COURSES;
  }
});
</script>
<template>
  <div>
    <div class="py-4 border-b">
      <form class="flex justify-center">
        <div class="inline-flex items-center py-2 gap-x-1">
          <input
            type="text"
            class="w-[20rem]"
            placeholder="search courses"
            :value="query"
          />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>

    <div class="flex gap-x-8">
      <div class="py-4" style="width: 30%">
        <section class="my-4">
          <div class="py-1 border-b mb-2">Filter By Skills</div>
          <div class="text-xs my-4">
            有課程的 skills 才會顯示，這裡只是舉例用
          </div>
          <div>
            <ul class="ml-8 my-2 list-disc">
              <li v-for="skill in SKILLS.slice(0, 10)">
                <RouterLink :to="`/courses?tag=${skill}`">
                  #{{ skill }}
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="`/skills`">...</RouterLink>
              </li>
            </ul>
            <RouterLink to="/skills" class="text-xs">
              &gt; View All Skills
            </RouterLink>
          </div>
        </section>

        <section class="my-4">
          <div class="py-1 border-b mb-2">1+4 分類</div>
          <div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 綜合旅遊休閒
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 會展商貿及文化體育
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 現代金融
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 大健康
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 高新技術
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 建築及工程維修
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 其他
            </div>
          </div>
        </section>

        <section class="my-4">
          <div class="py-1 border-b mb-2">月份</div>
          <div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 這個月
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 下個月
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 7月
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> 8月
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> ...
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
          <h3>{{ Math.round(Math.random() * 1000) }} course(s)</h3>
          <p>現正招生職業培訓課程</p>
        </div>

        <div>
          <CourseCard
            v-for="course in courses"
            :key="course.name"
            :course="course"
          ></CourseCard>
        </div>
      </div>
    </div>
  </div>
</template>
