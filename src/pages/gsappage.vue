<template>
  <div class="container">
    <h2 class="fs-2 text-center" style="position: fixed; top: 0; left: 0">
      gsap
    </h2>
    <div class="box bg-success width-100"></div>

    <div class="box bg-danger width-100" ref="box"></div>
  </div>
  <video
    autoplay
    loop
    controls
    :src="myvedio"
    ref="vedio1"
    class="vedio1"
  ></video>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import thetitleimg from "@/images/12.png";
import img6 from "@/images/logobig.png";
import banner from "@/images/banner.png";
import vedio from "@/images/autosave.mp4";

import imgschool from "@/images/love2.png";
import gsap from "gsap";
import { ElMessage } from "element-plus";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
const vedioControl = ref();
const myvedio = ref(vedio);

const box = ref();
const vedio1 = ref();

onMounted(function () {
  ScrollTrigger.create({
    trigger: vedio1.value,
    start: "top top",
    end: "+=500",
    scrub: true,
    pin: true,
    markers: true,

    onUpdate(e) {
      try {
        console.log("heooo", vedio1.value.currentTime);
      } catch {}
    },
  });
  ScrollTrigger.create({
    trigger: box.value,
    start: "-=300",
    end: "+=300",
    scrub: true,
    // pin: true,
    animation: gsap.to(box.value, {
      x: 20,
      opacity: 0,
    }),
  });
});

const url = (e) => {
  const obj = new URL(`../../images/${e}.png`, import.meta.url);
  return obj.pathname;
};

const array1 = reactive([
  {
    name: "暮色",
    img: "love1",
    txt: "江西科技师范大学最具特色的建筑就是图书馆了。在江西科技师范大学的这一年，这座红色的建筑陪伴着我度过了一天又一天。我在图书馆里学习，查漏补缺；在图书馆里复习，备战期末周；在图书馆里阅读课外书籍，扩充视野……图书馆就像一位睿智的好友，相处一年来，我与它越来越熟悉，我的知识储备和自律能力也在不断提高，它在我的青春回忆里留下了独属于它的印记。每次看见图书馆，我都能想象到里面坐满了热爱学习的莘莘学子。图书馆不仅仅是我与江西科技师范大学的青春回忆，也是所有学子的青春回忆，我想为自己，为所有热爱学习的同学们点一个大大的赞！",
  },
  {
    name: "清晨",

    img: "love2",
    txt: "高大的图书馆首先最是吸引我，但是由于我们的校园卡还没下来，也就暂时压住心里面的好奇和激动了。整个学校的第一印象就是该有的都有，田径场、小湖、就连人行道都是一道靓丽的风景，幽深的小道，都令我印象深刻。不过总体是好的，冬季的晚自习刚刚下课，天空就飘起了雪花，突然有一种心情愉悦，畅快之感。我爱我的校园，诗情画意一般的校园。",
  },
]);

const array2 = reactive([
  {
    name: "黄昏",

    img: "love3",
    txt: "那是在我刚上大学没多久的时候，我从学院忙完回宿舍路上，因为当时是夏天，所以黄昏时候的天空一般都会特别好看。走到学校图书馆的时候，可以很清晰的看见整个天空中的云在落日的渲染下变成了橘黄色，和学校图书馆的颜色真的很配诶！",
  },
  {
    name: "夏至",

    img: "love4",
    txt: "记得第一次进入校园，映入眼帘的便是令我赞叹不已的图书馆。宏伟的外观，两边围绕着湖泊和荷花池，微风吹过，碧波荡漾，带来阵阵清香。同学们从学校各方来往于图书馆前后，进出于图书馆内外。我怀揣着期待的心情，走入了图书馆。最显眼的就是一层简单大方的装修风格，看起来十分素雅，让人顿时心静如水。走进借阅室，各种各样的书籍应有尽有，无论是世人瞩目的名著，清新似水的散文，富有哲理的中外诗篇，都能够任凭学生们去选择。自习室里鸦雀无声，楼梯走廊上书声朗朗，认真学习的氛围感染了我，也感染带动了越来越多的学生。",
  },
  {
    name: "冬日",

    img: "love5",
    txt: "那是去年冬季的一天，夕阳笼罩下的校园有着不可抗拒的美丽，绯红的夕阳照在图书馆旁边的湖面上；结束了一天工作的我，漫步在校园里，享受着这难得的宁静；青春会是用来奋斗的，青春因奋斗而精彩，奋斗过的青春才无悔，而图书馆是我们科师大莘莘学子学习奋斗的圣地，它在夕阳下散发着神圣的光芒，让我肃然起敬，也情不自禁的向它慢慢靠近，走到门口，想起自己正好穿着正装，那就和它一起合个影吧！",
  },
  {
    name: "秋日",

    img: "love6",
    txt: "学校的美食时常让我想起，流下我这不争气的口水。排行榜第一名，非小麦麻辣烫莫属，我对它的评价三个字“鲜香辣”。第二名，上饶烤鸡腿，外皮焦香，味道鲜美。第三名，烤盘饭，满满一口，裹着孜然香，啊～，满足。",
  },
]);

const array3 = reactive([
  {
    img: "love9",
    txt: "第一次来到科师大，被西南门的湖泊惊艳，湖面在阳光下波光粼粼，整个学校沐浴在阳光中，灿烂生辉。",
  },

  {
    img: "love7",
    txt: "第一次去教学楼上课，途径一塘荷花，中通外直，亭亭玉立。池上浮着一座小桥，放慢脚步，停留驻足，似是偷得半日闲情。",
  },

  {
    img: "love8",
    txt: "第一次在外地过冬，一个下了晚课的晚上，天空下起了飘飘扬扬的小雪，洁白，纯净。同相识几月的朋友一起在雪地刻下誓言，雪地里结契，他们说零下的结晶不会坏。希望我和我的朋友能做一辈子的闺蜜！",
  },
]);
</script>
<style scoped>
.width {
  width: 100%;
}
.box {
  height: 450px;
}
.vedio1 {
  width: 100vw;
  height: 100vh;
}
</style>
