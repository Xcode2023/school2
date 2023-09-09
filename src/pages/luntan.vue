<template>
  <div class="about_section layout_padding">
    <div class="container mt-4">
      <three></three>
      <div class="alert alert-success mt-4" role="alert">
        <a href="#" class="alert-link">学校的美食，有你喜欢的吗.</a>
      </div>

      <threeimg></threeimg>

      <section class="row themargin mt-4">
        <div class="col-md-12">
          <div class="alert alert-danger" role="alert">
            <a href="#" class="alert-link">没看够？其实还有很多很多！</a>
          </div>
        </div>
      </section>

      <section class="row">
        <div class="col-md-12"></div>
      </section>
      <div class="row">
        <div class="col-md-12">
          <div class="about_taital">美食</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import thetitleimg from "@/images/12.png";
import img6 from "@/images/11.png";
import banner from "@/images/banner.png";
import vedio from "@/images/autosave.mp4";
import three from "@/components/threeimg.vue";
const myvedio = ref(vedio);
const thebanner = ref(banner);
const img5 = ref(thetitleimg);
const heart = ref(img6);

const url = (e) => {
  const obj = new URL(`../images/food${e}.png`, import.meta.url);
  return obj.pathname;
};
</script>
<style scoped></style>
