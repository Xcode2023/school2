<template>
  <section class="row">
    <section class="col-md-12">
      <el-carousel height="90vh">
        <el-carousel-item v-for="(x, y) in array3" :key="y">
          <img :src="url(x.img)" alt="" class="img" />
        </el-carousel-item>
        <el-carousel-item>
          <img
            src="https://pic1.imgdb.cn/item/63eba208f144a01007270683.jpg"
            alt=""
            class="img"
          />
        </el-carousel-item>
      </el-carousel>
    </section>
  </section>
</template>
<script setup>
import { reactive, ref } from "vue";
import thetitleimg from "@/images/12.png";
import img6 from "@/images/11.png";
import banner from "@/images/banner.png";
import vedio from "@/images/autosave.mp4";
const myvedio = ref(vedio);
const thebanner = ref(banner);
const img5 = ref(thetitleimg);
const heart = ref(img6);
import school1 from "@/images/school1.png";
const schoolimg = ref(school1);
const url = (e) => {
  const obj = new URL(`../images/${e}.png`, import.meta.url);
  return obj.pathname;
};

const array3 = reactive([
  {
    img: "school1",
    txt: "  生命如同花期般短暂，莫要浪费了精力；要好好珍惜，把握时运，将它们都花在值得的事情上。。",
  },
  {
    img: "love3",
    txt: "白鸽的教堂可能没有玫瑰，乡间麦野的玫瑰却簇簇盛开。",
  },

  {
    img: "love2",
    txt: " 幽谷那堪更北枝,年年自分着花迟。高标逸韵君知否,正是层冰积雪时",
  },

  {
    img: "love9",
    txt: "  生命如同花期般短暂，莫要浪费了精力；要好好珍惜，把握时运，将它们都花在值得的事情上。。",
  },
  {
    img: "love7",
    txt: "  生命如同花期般短暂，莫要浪费了精力；要好好珍惜，把握时运，将它们都花在值得的事情上。。",
  },
]);
</script>
<style scoped>
.img {
  height: 100%;
  width: 100%;
}
.imgbox1 {
  height: 100vh;
  width: 100%;
}
.hello {
  left: 0;
  top: 0;
  z-index: 999;
}
</style>
