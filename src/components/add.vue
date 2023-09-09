<template>
  <el-button @click="getdata"> 修改 </el-button>
  <el-drawer v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
      <el-button type="danger" @click="close">
        <el-icon class="el-icon--left"><CircleCloseFilled /></el-icon>
        Close
      </el-button>
    </template>
  </el-drawer>
</template>

<script setup>
import { ref } from "vue";
import { ElButton, ElDrawer } from "element-plus";
import { CircleCloseFilled } from "@element-plus/icons-vue";

const visible = ref(false);

const getdata = function () {
  axios
    .request("https://www.mengrao.site/api/message/get_list")
    .then((e) => {});
};
</script>
