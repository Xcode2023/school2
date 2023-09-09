<template>
  <div class="about_section layout_padding">
    <div class="container">
      <div class="row" data-aos="fade-up">
        <div class="col-md-12">
          <div class="about_taital" data-aos="fade-up">关于我</div>
        </div>
        <div class="row">
          <div class="col-md-12" data-aos="fade-up">
            <img :src="url1" class="img-thumbnail" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="about_section">
      <div class="container margin">
        <div class="row">
          <div class="col-md-6">
            <div class="about_img">
              <img :src="thebanner" class="img rounded" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="about_taital_main">
              <div class="yoga_taital">{{ name }}</div>
              <p class="about_text">
                春光明媚赏花来，映日常红我自栽。犹记夏天勤洒水，藤繁叶绿四时开。
                大家好！
                每一片树叶都有他自己的径迹，每一个脚步都有他自己的历程，每一篇文章都有他自己的故事。树叶
                经过了春夏秋冬的洗礼，变得很沧桑，脚步经过了成长的印记，变得好扎实，文章经过了故事的点缀，变
                得好灵现。树叶，脚步，文章，他们都因为生活变得美好，都因为自己而变得生动感人，我们的故事，我
                们的自己，任何人都改变不了，任何人也无法改变。
                我是一个很平凡的女孩子，我不漂亮，成绩也不好，而且脾气很糟糕，老是爱惹麻烦。但是，我知
                道，那就是我，一个任何人都无法代替的我。我知道，世界不会因为我的存在，就变得美好，也不会因为
                我的消失，就变得悲惨，大海茫茫，人海茫茫，我只是宇宙间的一滴水，一颗星星，一株草，起不到任何
                的作用，但是我还是很乐观，很努力，因为我知道，不管多么强大的集体，他们都需要我们来组成，天空
                再漂亮，没有云朵的点缀，也会变得空洞，大地再宽阔，没有树木的装粉，也会变的没有生机。
                就这样，我肯定了我自己，坚信了自己，我没有遗忘我自己。
                我的故事，很简单，也很平凡。从小，我就是爸妈心中的乖宝宝，我从来不和他们吵架，生活没有一
                点激情和色彩，每天平平凡凡的过日子，混日子，就这样，顺顺利利了的上了小学，接着升入了中学，我
                的人生，其实随随便便的两句话就可以结束掉。
                我开心时，就像一缕丝带，会因为微风的吹拂而飞上了天，整天蹦蹦跳跳的，在空中播撒快乐的气
                氛，那时我，再看着这个世界，会觉得天真的很蓝，水真的很轻，这个世界就像泼满了颜料，一草一木，
                一点一滴，很是美好。
              </p>
              <div class="read_bt">
                <a href="#" class="bg-danger">你好！</a>
              </div>
            </div>
          </div>
        </div>
        <section class="row mt-4">
          <div class="col-md-4">
            <img
              class="rounded"
              data-aos="fade-up"
              src="https://pic2.imgdb.cn/item/6464843c0d2dde5777791751.png"
              alt=""
            />
          </div>
          <div class="col-md-4">
            <img
              data-aos="fade-up"
              src="https://pic1.imgdb.cn/item/646484370d2dde5777790d76.png"
              alt=""
              class="rounded"
            />
          </div>
          <div class="col-md-4">
            <img
              data-aos="fade-up"
              src="https://pic1.imgdb.cn/item/646485610d2dde57777ba119.png"
              class="rounded"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import img1 from "@/images/love2.png";

const $this = getCurrentInstance();
const axios = $this.proxy.axios;

const getdata = function () {
  // axios.request("https://www.mengrao.site/api/message/get_list").then((e) => {
  //   console.log(e.data.data.data);
  axios.request("https://www.mengrao.site/api/message/get_list").then((e) => {
    console.log(e.data.data.data);
  });
};

const name = ref("许佳妮");
const thebanner = ref(img1);
const url1 = ref("https://pic1.imgdb.cn/item/63eba208f144a01007270683.jpg");
</script>
<style scoped>
.img {
  height: 100%;
}
.about_section {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin: 20px 0;
  border-radius: 10px;
}
</style>
