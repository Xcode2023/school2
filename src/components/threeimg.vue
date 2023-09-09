<template>
  <div class="row margin">
    <div class="col-md-4" v-for="(x, y) in array" :key="y">
      <div class="thumbnail">
        <img :src="thebanner" alt="" />
        <div class="caption mt-3 lh-lg">
          <h3>{{ x.name }}</h3>
          <p>
            {{ x.txt }}
          </p>
          <p class="mt-3">
            <span href="#" class="btn btn-primary" role="button"
              ><i class="bi bi-heart-fill"></i> 喜欢！</span
            >
            <span href="#" class="btn btn-danger ms-3" role="button"
              >赞一个！</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import banner from "@/images/banner.png";
import { ref } from "vue";
const thebanner = ref(banner);
const array = [
  {
    name: "社团竞赛",

    txt: "和科师大当然是一起参与各种活动咯。第一次看见人山人海的的广场，在清晨大家都聚集在一起参加团日活动，可谓是热血沸腾。一起参与二十人二十一足的比赛，体会团队精神；一起参加素拓活动……每一张照片都充满着阳光和活力！",
  },
  {
    name: "三下乡",

    txt: "“三下乡”社会实践就是让我们认识社会、服务社会、锻炼自我的有效途径。这次“三下乡”社会实践，使我认识了自己所处的社会位置，明确了自己肩上的使命，更进一步激发了我的学习热情。此次暑期社会实践不但培养了我们理论运用于实际的能力和团队合作的精神，磨练了我们坚强的意志，也实现了社会实践过程中“服务社会、锻炼成才”的目标，青春因磨砺而出彩。",
  },
  {
    name: "第二食堂",

    txt: "学校的美食时常让我想起，流下我这不争气的口水。排行榜第一名，非小麦麻辣烫莫属，我对它的评价三个字“鲜香辣”。第二名，上饶烤鸡腿，外皮焦香，味道鲜美。第三名，烤盘饭，满满一口，裹着孜然香，啊～，满足。佐料的调和，能激发出食物最美妙的滋味。这些味道，在成长的时光中，与情感、信念混合在一起，才下舌尖，又上心间。让我们几乎分不清哪一个是滋味，哪一种是情怀。",
  },
];
</script>
<style scoped></style>
