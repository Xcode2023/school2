<template>
  <section class="row">
    <div class="col-md-12">
      <img :src="schoolimg" alt="" />
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
import school1 from "@/images/school1.png";
const schoolimg = ref(school1);
</script>
<style scoped></style>
