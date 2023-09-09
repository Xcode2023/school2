<template>
  <div class="footer_section layout_padding">
    <div class="container">
      <div class="footer_section_2">
        <div class="row">
          <div
            class="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 class="useful_text">
              <i class="bi bi-emoji-wink-fill"></i>关于
            </h2>
            <p class="dummy_text">
              弦歌不辍，风华正茂。犹记夏天勤洒水，藤繁叶绿四时开。
            </p>
            <div class="location_text"><a href="#">(+91)01234567890</a></div>
            <div class="location_text"><a href="#">2040231593@qq.com</a></div>
            <div class="location_text">
              <a href="#">{{ name }}</a>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 class="useful_text"><i class="bi bi-egg-fried"></i>校园美食</h2>
            <div class="footer_menu">
              <ul>
                <li><a href="#">擂椒拌饭</a></li>
                <li><a href="#">隆江猪脚饭</a></li>
                <li><a href="#">重庆鸡公煲</a></li>
                <li><a href="#">港式滑蛋饭</a></li>
                <li><a href="#">过桥米线</a></li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-bottom"
          >
            <h2 class="useful_text">
              <i class="bi bi-lightning-fill"></i>迅捷导航
            </h2>
            <div class="footer_menu">
              <ul>
                <li v-for="(x, y) in hrefs" :key="y">
                  <router-link :to="x.to">{{ x.name }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h2 class="useful_text">
              <i class="bi bi-envelope-fill"></i>联系我们
            </h2>
            <div class="form-group">
              <textarea
                class="update_mail"
                placeholder="Enter Your Email"
                rows="5"
                id="comment"
                name="Enter Your Email"
              ></textarea>
              <div class="subscribe_bt">
                <a
                  ><i class="bi bi-arrow-up-circle-fill"></i>回到顶部
                  <el-backtop :right="100" :bottom="100"
                /></a>
              </div>
            </div>
            <div class="social_icon">
              <ul>
                <li>
                  <a href="#"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="copyright_section">
    <div class="container">
      <p class="copyright_text">
        2023年5月20
        <a target="_blank" href=""
          >{{ mydata.school }}·{{ mydata.name }}-20211973</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const mydata = defineProps({
  name: String,
  school: String,
});

const hrefs = reactive([
  {
    name: "主页",
    to: "/",
    icon: "bi bi-bank",
  },
  {
    name: "在线注册",
    to: "/meng",
    icon: "bi bi-moon-fill",
  },

  {
    name: "校园新闻",
    to: "/news",
    icon: "bi bi-chat-heart-fill",
  },
  {
    name: "立即登陆",
    to: "/qiyuan",
    icon: "bi bi-moon-fill",
  },
  {
    name: "论坛",
    to: "/luntan",
    icon: "bi bi-moon-fill",
  },
  {
    name: "留言管理",
    to: "/liuyan",
    icon: "bi bi-moon-fill",
  },
]);
</script>
