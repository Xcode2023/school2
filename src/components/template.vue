<template>
  <div class="children-box">
    <!-- 左侧轮播 -->
    <div class="child-banner">
      <div class="list-img">
        <ul>
          <li
            class="active"
            :data-index="y"
            v-for="(x, y) in imgarray"
            :key="y"
          >
            <img :src="x.img" alt="" />
          </li>
        </ul>
        <!-- 上下按钮 -->
        <div class="btn"></div>
        <div class="btn"></div>
      </div>
      <div class="banner-img">
        <div class="index"><span>1</span>/5</div>
      </div>
    </div>
    <!-- 右侧详情介绍 -->
    <div class="child-details">
      <h1>{{ content.title }}</h1>

      <h2>
        <li v-for="(x, y) in content.txt" :key="y">{{ x }}</li>
        <br />
      </h2>

      <ul>
        <li v-for="(x, y) in content.goodtxt" :key="y">{{ x }}</li>
      </ul>
      <div class="theflexbox">
        <ul id="flexiner">
          <li v-for="(x, y) in mydata.goods" :key="y">{{ x }}</li>
        </ul>
      </div>
    </div>

    <!-- 下方大图 -->
  </div>
  <div class="long-img">
    <img :src="x.img" alt="" v-for="(x, y) in mydata.imgarray" :key="y" />
  </div>
</template>
<script setup>
const mydata = defineProps({
  imgarray: Array,
  longimgarray: Array,
  content: Object,
});
</script>
<style scoped></style>
