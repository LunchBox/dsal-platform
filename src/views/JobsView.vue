<script setup lang="ts">
import { RouterLink } from "vue-router";

import { OCCUPATION } from "./occupation";
import { ALL_TAGS } from "./tags";

import { JOBS } from "./jobs";
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
                        <RouterLink :to="`/courses?tag=${role}`">
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
          <div v-for="(c, idx) in JOBS" :key="idx" class="border mb-2 p-4 flex">
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

                <div class="my-2">學歷要求: <br />{{ c.edu_req }}</div>

                <div class="my-2">經驗要求: <br />{{ c.exp_req }}</div>
                <div class="my-2">工作範圍: <br />{{ c.desc }}</div>

                <div class="my-2">
                  相關課程: <br />
                  <ul class="ml-8 my-2 list-disc">
                    <li>
                      <RouterLink to="/courses">
                        酒店業職場英語-中階課程 (勞工事務局)
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/courses">
                        酒店業職場英語 (澳門生產力暨科技轉移中心)
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/courses">
                        酒店業職場英語 (澳門旅遊大學)
                      </RouterLink>
                    </li>
                  </ul>
                </div>
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
