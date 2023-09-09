<template>
  <thebody></thebody>
  <lunbotu></lunbotu>

  <section>
    <main
      class="header_section"
      :style="{ background: `url(${bg}) no-repeat top center/cover` }"
    >
      <div class="banner_section layout_padding">
        <div class="container-fluid">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-4">
                    <h1 class="banner_taital animated fadeInDown">
                      70周年校庆
                    </h1>
                    <h2 class="banner_text animated fadeInDown">
                      弦歌不辍 风华正茂
                    </h2>
                    <div class="started_text active animated fadeInDown">
                      <a href="#" class="bg-danger">了解更多</a>
                    </div>
                  </div>
                  <div class="col-md-5 animated fadeInDown">
                    <div class="banner_img">
                      <img :src="ig1" />
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="banner_menu">
                      <ul class="animated fadeInDown">
                        <li v-for="(x, y) in txts" :key="y">
                          <a href="">
                            <i :class="x.icon"></i>
                            {{ x.name }} <span style="color: #f4b8bd">/</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { ElNotification, ElMessage } from "element-plus";
import thebody from "./body.vue";
import img1 from "@/images/banner-bg.png";
import img2 from "@/images/logobig.png";
import lunbotu from "@/components/lunbotu.vue";
const url1 = ref("https://pic1.imgdb.cn/item/63eba208f144a01007270683.jpg");

const $this = getCurrentInstance();
const axios = $this.proxy.axios;
const bg = ref(img1);
const ig1 = ref(img2);
const txts = reactive([
  { name: "热爱", icon: "bi-moon-fill" },
  { name: "浪漫", icon: "bi bi-arrow-through-heart-fill" },
  { name: "自由", icon: "bi bi-wind" },
  { name: "绽放", icon: "bi bi-brightness-high-fill" },
  { name: "温馨", icon: "bi bi-brightness-high-fill" },
]);

// (function () {
//   axios
//     .request("https://www.mengrao.site/api/message/del")
//     .then(function (response) {
//       let index = response.data.code;
//       if (index > 200) {
//         ElNotification({
//           type: "error",
//           title: "错误",
//           message: "服务器似乎并没有响应，你确定服务器在正常运转吗·V·",
//         });
//         ElNotification({
//           type: "error",
//           title: "提醒",
//           message: "注意。编辑以及更新留言需要注册登录之后才可进行更改·V·",
//         });
//       }
//     })
//     .catch((error) => {
//       ElMessage.error("你似乎并没有将数据库安装在云端运行");
//       ElMessage.warning("你似乎并没有将数据库安装在云端运行");
//       setTimeout(() => {
//         ElNotification({
//           type: "warning",
//           title: "线下状态",
//           message: "您似乎处于线下文件模式运行本工程",
//           position: "bottom-right",
//         });
//       }, 2000);
//     });
// })();

// const getItems = function () {
//   axios("https://www.mengrao.site/api/message/get_list").then((e) => {
//     const res = e.data;
//     if (res.code != 200) {
//       ElMessage.error("获取失败");
//     } else {
//     }
//   });
// };
// getItems();
</script>
<style scoped>
.header_section {
  width: 100%;
  float: left;

  height: auto;
}
</style>
