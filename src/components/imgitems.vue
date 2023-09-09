<template>
  <section class="row">
    <div
      class="col-md-4 mt-4"
      v-for="(x, y) in 9"
      :key="y"
      data-aos="fade-up"
      :data-aos-delay="y * 100"
    >
      <img :src="url(y)" alt="" class="img-thumbnail" />
    </div>
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

const url = (e) => {
  const obj = new URL(`../images/love${e}.png`, import.meta.url);
  return obj.pathname;
};
</script>
<style scoped></style>
