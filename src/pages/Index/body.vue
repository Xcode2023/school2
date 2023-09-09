<template>
  <video
    style="width: 100vw; height: 100vh"
    loop
    :src="myvedio"
    ref="vedio1"
  ></video>

  <div class="row layout_padding">
    <div class="col-md-6">
      <div class="about_img"><img :src="school" /></div>
    </div>
    <div class="col-md-6">
      <div class="about_taital_main">
        <div class="yoga_taital">江西科技师范大学</div>
        <p class="about_text">
          江西科技师范大学坐落于享有“物华天宝、人杰地灵”盛誉的历史文化名城、“军旗升起的地方”——南昌。学校是教育部重点建设的培养职业教育师资的公办多科性本科院校、全国职业教育研究的重要基地、全国职业教育师资培养培训重点建设基地、全国最早独立设置的八所职业技术师范院校之一，是江西省公费师范生培养高校，主要培养职教师资、普教师资和其他应用型高级专门人才。经过近70年的建设与发展，学校形成了以本科、研究生教育为主体的多学科、多层次的办学格局。2008年，学校以“优秀”成绩通过教育部本科教学工作水平评估，2018年接受教育部本科教学工作审核评估，评估专家也对学校扎实的教学工作、明显的办学成效和鲜明的办学特色给予了充分肯定。
          学校2006年获批硕士学位授权单位，是江西省“十四五”新增博士学位授予单位立项建设高校。
        </p>
        <div class="read_bt">
          <a href="#" class="bg-danger">了解更多</a>
        </div>
      </div>
    </div>
  </div>
  <div class="row layout_padding">
    <div class="col-md-6">
      <div class="about_taital_main">
        <h1 class="display-1 text-center" ref="gsapgoto4" style="opacity: 0">
          感谢来信
        </h1>
        <div class="yoga_taital" ref="gsapgoto1">
          <i class="bi"></i> 写下贺词
        </div>
        <p class="about_text" ref="gsapgoto2">
          金桂飘香，秋风送爽 也送来了 70周年校庆即将到来的喜悦 70年的脚踏实地
          70年的风雨兼程 才换来如今的辉煌与成就 在这一段奋斗史和成长史中
          有许许多多的科师大er 留下了和科师大相伴的青春记忆
        </p>
        <div class="read_bt">
          <a class="bg-danger" ref="gsapgoto" @click="gsapgo">发送</a>
        </div>
      </div>
    </div>
    <div class="col-md-6" ref="gsapgoto3">
      <div class="about_img"><img :src="img5" /></div>
    </div>
  </div>

  <!-- about section end -->
  <!-- classes section start -->
  <div class="classes_section layout_padding">
    <div class="container">
      <div class="classes_border rounded border-success">
        <div class="row">
          <div class="col-md-12">
            <h1 class="classes_taital" data-aos="fade-up">校园风景</h1>
            <p class="classes_text" data-aos="fade-up"></p>
          </div>
        </div>
        <div class="classes_section_2">
          <div class="row">
            <section
              class="col-md-6"
              v-for="(x, y) in array1"
              :key="y"
              data-aos="fade-up"
              :data-aos-delay="y * 100"
            >
              <div class="classes_img">
                <img :src="url(x.img)" />
              </div>
              <h3 class="astanga_taital">{{ x.name }}</h3>
              <p class="astanga_text">
                {{ x.txt }}
              </p>
              <div class="read_btn">
                <a href="#" class="active">了解更多</a>
              </div>
            </section>
          </div>
        </div>
        <div class="classes_section_2">
          <div class="row">
            <section
              class="col-md-6"
              v-for="(x, y) in array2"
              :key="y"
              data-aos="fade-up"
              :data-aos-delay="y * 100"
            >
              <div class="classes_img">
                <img :src="url(x.img)" />
              </div>
              <h3 class="astanga_taital">{{ x.name }}</h3>
              <p class="astanga_text">
                {{ x.txt }}
              </p>
              <div class="read_btn">
                <a href="#" class="active">了解更多</a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="customer_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="customer_taital">寄语</h1>
        </div>
      </div>
    </div>
    <div class="customer_section_2 mt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="box_main">
              <div class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active rounded">
                    <div class="customer_main">
                      <div class="customer_left">
                        <div class="customer_img">
                          <img :src="heart" />
                        </div>
                      </div>
                      <div class="customer_right p-4 lh-lg">
                        <h3 class="customer_name">
                          金桂飘香，秋风送爽 也送来了 70周年校庆即将到来的喜悦
                        </h3>
                        <p class="customer_text">
                          70年的脚踏实地 70年的风雨兼程 才换来如今的辉煌与成就
                          在这一段奋斗史和成长史中 有许许多多的科师大er
                          留下了和科师大相伴的青春记忆
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#costum_slider"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-angle-left"></i>
                </a>
                <a
                  class="carousel-control-next"
                  href="#costum_slider"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- customers section end -->
  <!-- blog section start -->
  <div class="blog_section layout_padding" name="dream" id="dream">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="blog_taital mt-4">记忆卡片</h1>
        </div>
      </div>
      <div class="blog_section_2">
        <div class="row">
          <div
            class="col-md-4"
            v-for="(x, y) in array3"
            :key="y"
            data-aos="fade-up"
            :data-aos-delay="y * 100"
          >
            <div class="blog_box">
              <div class="blog_img rounded">
                <img :src="url(x.img)" />
              </div>
              <div class="blog_taital_main">
                <p class="yoga_text">校园回忆</p>
                <h3 class="practising_taital">科大记忆</h3>
                <p class="blog_text mt-4">
                  {{ x.txt }}
                </p>
                <div class="date_btn"><a href="#">了解更多</a></div>
              </div>
            </div>
          </div>
          <section class="container justify-center">
            <h3 class="practising_taital text-center">有你喜欢的照片吗</h3>

            <imgitems></imgitems>
          </section>
          <h1 class="text-center display-3 mt-5">我们的未来将将开始......</h1>
          <section class="row">
            <main class="col-md-12">
              <section class="layout_padding">
                <div class="container">
                  <div class="img-thumbnail rounded">
                    <img :src="thebanner" class="width" alt="" />
                  </div>
                </div>
              </section>
            </main>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import thetitleimg from "@/images/12.png";
import img6 from "@/images/logobig.png";
import banner from "@/images/banner.png";
import vedio from "@/images/autosave.mp4";
import Imgitems from "@/components/imgitems.vue";
import imgschool from "@/images/love2.png";
import gsap from "gsap";
import { ElMessage } from "element-plus";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
const school = ref(imgschool);
const vedioControl = ref();
const myvedio = ref(vedio);
const thebanner = ref(banner);
const img5 = ref(thetitleimg);
const heart = ref(img6);
const gsapgoto = ref();
const gsapgoto1 = ref();
const gsapgoto2 = ref();
const gsapgoto3 = ref();
const gsapgoto4 = ref();
const vedio1 = ref();

const gsapgo = function (e) {
  e.preventDefault();

  ElMessage.success("发送成功");

  gsap.to(gsapgoto.value, {
    x: -80,
    opacity: 0,
  });
  gsap.to(gsapgoto1.value, {
    y: -80,
    opacity: 0,
  });
  gsap.to(gsapgoto2.value, {
    x: -80,
    opacity: 0,
  });
  gsap.to(gsapgoto3.value, {
    x: 80,
    opacity: 0,
  });
  gsap.to(gsapgoto4.value, {
    opacity: 1,
  });
};

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
        vedio1.value.currentTime = e.progress * vedio1.value.duration;
      } catch {}
    },
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
