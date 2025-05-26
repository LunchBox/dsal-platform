<script setup lang="ts">
import { RouterLink } from "vue-router";

import { MY_SKILLS } from "../data/my_skills";
import { JOBS } from "../data/jobs";
</script>
<template>
  <div>
    <div class="flex">
      <div class="py-4 pr-4" style="width: 30%">
        <div>Filter By</div>

        <div class="my-4">
          <div class="py-1 border-b mb-2">我的技能點</div>
          <div>
            <div
              class="flex items-center gap-x-1"
              v-for="(skill, idx) in MY_SKILLS"
              :key="idx"
            >
              <input type="checkbox" checked /> #{{ skill }}
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
          <p>根據我的技能點查詢到的職位</p>
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
