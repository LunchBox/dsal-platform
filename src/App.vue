<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="w-full h-full border px-4">
    <header class="h-[4rem] border-b flex items-center">
      <div class="wrapper">
        <nav class="flex items-center gap-x-2">
          <h1 class="text-xl">
            <RouterLink to="/">DSAL Skills Platform</RouterLink>
          </h1>
        </nav>
      </div>
    </header>

    <RouterView />

    <footer class="border-t mt-[20rem] pb-4 pt-4 text-sm">
      <div>
        收集個人資料聲明 | 使用條款及免責聲明 | 網站地圖 | 聯絡我們 |
        <RouterLink to="/tp">培訓機構</RouterLink> |
        <RouterLink to="/employer">僱主</RouterLink>
      </div>
      <div class="mb-8">最後修訂日期：2025-05-26</div>
      <div>2016 澳門特別行政區政府勞工事務局版權所有</div>
      <div>
        地址：澳門馬揸度博士大馬路221-279號先進廣場大廈 電話：(853) 2856 4109
        傳真：(853) 2855 0477 電郵：dsalinfo@dsal.gov.mo
      </div>
      <hr class="my-4" />
      <div>
        使用者瀏覽及使用本網站各項服務，即表示已知悉並同意"收集個人資料聲明"及"使用條款及免責聲明"的內容。
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
