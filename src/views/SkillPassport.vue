<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";

import { ALL_COURSES } from "./courses";
import { ALL_TAGS } from "./tags";

import { TRAINING_PROVIDERS } from "./training_providers";
import { MY_SKILLS } from "./my_skills";

const route = useRoute();

const query = computed(() => route.query?.tag);

// const courses = computed(() => {
//   if (query.value) {
//     return ALL_COURSES.filter((c) => c.name.includes(query.value));
//   } else {
//     return ALL_COURSES;
//   }
// });
</script>
<template>
  <div>
    <div class="py-4 border-b">My Skill Passport</div>

    <div class="flex">
      <div class="py-4" style="width: 30%">
        <ul>
          <li>
            <RouterLink to="/skill_passport" class="block py-2">
              我的技能點（Skill Tags）
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/skill_passport" class="block py-2">
              已完成課程
            </RouterLink>
          </li>

          <li>
            <RouterLink to="/skill_passport" class="block py-2">
              我的職業技能鑑定
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="flex-1 py-4">
        <div class="mb-4">
          <h3>User Name</h3>
          <p></p>
        </div>

        <section class="mb-8">
          <h3 class="border-b py-1">我的技能點</h3>
          <ul class="ml-8 my-2">
            <li v-for="(skill, idx) in MY_SKILLS" :key="idx">
              <RouterLink :to="`/jobs?tag=${skill}`"> #{{ skill }} </RouterLink>
            </li>
          </ul>

          <div class="bg-slate-100 p-4 rouned-sm">
            根據技能點推薦如下職位：
            <ul class="ml-8 my-2 list-disc">
              <li>
                <RouterLink :to="`/jobs?tag=酒店業職場英語(中級)`">
                  酒店顧客聯絡副主管
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="`/jobs?tag=酒店業職場英語(中級)`">
                  ...
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="`/jobs?tag=酒店業職場英語(中級)`">
                  ...
                </RouterLink>
              </li>
              <li>
                <RouterLink :to="`/jobs?tag=酒店業職場英語(中級)`">
                  ...
                </RouterLink>
              </li>
            </ul>
            <div class="text-right">
              <RouterLink :to="`/jobs`"> 查看更多 </RouterLink>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h3 class="border-b py-1">已完成課程</h3>
          <ul class="ml-8 my-2 list-disc">
            <li class="mb-2">
              <a href="#">影視製作機燈從業員培訓課程 </a>

              <div class="ml-4">
                Skill(s):
                <RouterLink :to="`/jobs?tag=CCNA`">
                  #影視製作（初級）
                </RouterLink>
              </div>
            </li>

            <li class="mb-2">
              <a href="#">AI輔助圖像設計課程 </a>

              <div class="ml-4">
                Skill(s):
                <RouterLink :to="`/jobs?tag=CCNA`">#圖像設計(初級)</RouterLink>
              </div>
            </li>

            <li class="mb-2">
              <a href="#">ComfyUI應用及商業攝影製作培訓課程 </a>
              <div class="ml-4">
                Skill(s):
                <RouterLink :to="`/jobs?tag=CCNA`">#商業攝影(初級)</RouterLink>
              </div>
            </li>

            <li class="mb-2">
              <a href="#">酒店業職場英語-中階課程 </a>
              <div class="ml-4">
                Skill(s):
                <RouterLink :to="`/jobs?tag=酒店業職場英語(中級)`">
                  #酒店業職場英語(中級)
                </RouterLink>
              </div>
            </li>
          </ul>
        </section>

        <section>
          <h3 class="border-b py-1">我的職業技能鑑定</h3>
          <ul class="ml-8 my-2 list-disc">
            <li>
              <a href="#">高級 茶藝師</a>
            </li>
            <li>
              <a href="#">技師級 中式麵點師</a>
            </li>
            <li>
              <a href="#">三級 CIEH食品安全</a>
            </li>
            <li>
              <a href="#">高級 計算機程序設計員</a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>
