<template>
  <Header></Header>

  <div>
    <router-view></router-view>
  </div>

  <foot school="江西科技师范大学" name="许佳妮"></foot>
</template>

<script setup>
import { ref } from "vue";
import foot from "@/components/foot.vue";

import thetitle from "@/components/title.vue";
import lunbotu from "@/components/lunbotu.vue";
const url1 = ref("https://pic1.imgdb.cn/item/63eba208f144a01007270683.jpg");
</script>
<style>
.app {
  height: 100%;
}
.main {
  flex: 1;
}
</style>
