<template>
  <div class="classes_section layout_padding mb-4">
    <div class="container">
      <div class="classes_border rounded">
        <div class="row">
          <div class="col-md-12">
            <h1 class="classes_taital">校园新闻</h1>
            <p class="classes_text mt-4">
              @江西科技师范大学七十年栉风沐雨七十年春华秋实回首过往江西科技师范大学已辉煌七十个风雨春秋终迎来建校七十周年华诞在学校七秩校庆来临之际我们以词寄情表达对学校的美好祝愿...
              【人民日报】江西科技师范大学习近平著作专题读书班侧记
            </p>
          </div>
        </div>
        <div class="classes_section_2">
          <div class="row">
            <div
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
              <p class="astanga_text mt-3">
                {{ x.txt }}
              </p>
              <div class="read_btn">
                <a href="#" class="active">点赞！</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const url = (e) => {
  const obj = new URL(`../images/${e}.png`, import.meta.url);
  return obj.pathname;
};

const array1 = reactive([
  {
    name: "高效求实——做到联学、联建、联动",
    img: "love4",
    txt: "这是一次高校与职业院校融通联学的破冰行动。坚持开门办班的理念，在此次读书班中，由江西科技师范大学牵头，创新方式方法与江西旅游商贸学院、江西现代职业学院、江西交通职业技术学院、江西外语外贸职业学院等省内部分中高职20余所院校开展联学联建联动活动，打破了院校界限，提升学习实效。5月4日下午，江西科技师范大学主题教育读书班开班并举办专题党课，5月6日江西交通职业技术学院开展主题教育读书班读书分享会等，各院校均派代表列席参加。",
  },
  {
    name: "研讨务实——做到学理论、谈体会、讲担当",
    img: "love5",
    txt: "谈心得、谈体会，在读书班学习期间，校领导以身作则、带头发挥“头雁效应”、带头分享读书心得，校党委书记裴鸿卫以《从“六个坚持”牢牢把握习近平新时代中国特色社会主义思想的世界观和方法论》为题、校长左和平以《数字化赋能“双一流”建设推动高质量体系创新》为题、校党委副书记刘国云《以习近平新时代中国特色社会主义思想，做好当前高校意识形态工作》为题分别作了3场专题报告，其他校领导结合读书体会和所分管的工作谈了学习体会，真正做到带好头、作表率，先学一步、学深一层，进一步启发了全体学员思路",
  },

  {
    name: "学风扎实——做到读原著、学原文、悟原理",

    img: "love3",
    txt: "抱着刚领到一摞学习读本的同志说：“平常都是自己碎片化学习，没想到这次能有整块的时间用来看书，不受干扰的对习近平新时代中国特色社会主义思想进行沉浸式的学习，专题读书班这种学习方式很好。”这是在读书班开班前的一个缩影，学校下发的学习材料已成为学员们“五一”假期手不释卷的读本。",
  },
  {
    name: "推动落实——做到明思路、出对策、谋发展",
    img: "love1",
    txt: "坚持学以致用、知行合一，学校发挥读书班的引领作用，通过个人自学、专题辅导、分组讨论、交流发言等方式，全体校领导、处级干部在7天的集中学习中，不断深化对党的创新理论的认识和把握，不断增强对学校改革发展事业的责任感和紧迫感，明晰了思路，锚定了方向，在这场思想洗礼中“悟好理”“充好电”“补好钙”，达到统一思想、凝聚共识的目的，将全力以赴锚定学校发展目标真抓实干，扑下身子抓好落实，在以学铸魂、以学增智、以学正风、以学促干方面取得实实在在的成效，推动主题教育往深里走、往实里走、往心里走，为加快推动学校事业高质量发展贡献自己的力量。",
  },
]);
</script>
<style scoped></style>
