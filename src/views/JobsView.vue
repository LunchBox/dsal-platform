<script setup lang="ts">
import { RouterLink } from "vue-router";

import { OCCUPATION } from "./occupation";
import { ALL_TAGS } from "./tags";

const jobs = [
  {
    tp: "COD Resorts Limitada",
    name: "酒店顧客聯絡副主管",
    salary: "$25,500/按月",
    location: "氹仔",
    tags: ["廣東話", "普通話", "英語"],
    work_hours:
      "業務時間:24小時,需輪班工作,每週工作5天,每日工作9.5小時,休息時間(小時):0.5",
    edu_req: "高等教育,廣東話良好;普通話良好;英語良好",
    exp_req:
      "3年相關工作經驗;具備酒店管理、旅遊管理或相關專業優先，至少2年於五星級酒店擔任酒店顧客聯絡副主管經驗",
    desc: "- 接聽客人來電，解答客人查詢及協助客人預定房間及餐飲服務。 - 與前堂部、客房部及其他部門協作，確保顧客需求得以滿足。 - 收集和分析客人反饋，提出改善建議以提高服務水平。 - 管理且確保部門流暢和高效的運作。",
  },
];
</script>
<template>
  <div>
    <div class="py-4 border-b">
      <form class="flex justify-center">
        <div class="inline-flex items-center py-2 gap-x-1">
          <input type="text" class="w-[20rem]" placeholder="Search Jobs" />
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>

    <div class="flex">
      <div class="py-4 pr-4" style="width: 30%">
        <div>Filter By</div>

        <details>
          <summary>Filter By 工種(155)</summary>
          <div>
            <ul class="ml-8 my-2">
              <li v-for="(roles, cate) in OCCUPATION">
                <details>
                  <summary>{{ cate }}</summary>
                  <div>
                    <ul class="ml-8 my-2 list-disc">
                      <li v-for="role in roles">
                        <RouterLink :to="`/courses?tag=${tag}`">
                          {{ role }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </details>
              </li>
            </ul>
          </div>
        </details>

        <details>
          <summary>Filter By Skill Tags</summary>
          <div>
            <ul class="ml-8 my-2">
              <li v-for="tag in ALL_TAGS">
                <RouterLink :to="`/courses?tag=${tag}`">
                  #{{ tag }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </details>

        <div class="my-4">
          <div class="py-1 border-b mb-2">JOB LEVEL</div>
          <div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Senior Management
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Middle Management
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Manager
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Profesional
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Senior Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Junior Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Non-Executive
            </div>
            <div class="flex items-center gap-x-1">
              <input type="checkbox" /> Fresh / Entry Level
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
          <p>空缺總數不包括休閒企業配對會中的空缺</p>
        </div>

        <div>
          <div v-for="c in jobs" :key="c" class="border mb-2 p-4 flex">
            <div class="flex-1">
              <div>
                <a href="#">{{ c.tp }}</a>
              </div>
              <div class="text-xl my-2">
                <RouterLink to="/courses">{{ c.name }}</RouterLink>
              </div>
              <div>{{ c.work_hours }}</div>
              <details>
                <summary>Details</summary>

                <div>{{ c.edu_req }}</div>

                <div>{{ c.exp_req }}</div>
                <div>{{ c.desc }}</div>
              </details>
            </div>
            <div style="width: 30%">
              <div>
                Salary: <span>{{ c.salary }}</span>
              </div>
              <div>
                Location: <span>{{ c.location }}</span>
              </div>

              <div>
                <ul>
                  <li v-for="tag in c.tags">
                    <RouterLink :to="`/courses?tag=${tag}`">
                      #{{ tag }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
