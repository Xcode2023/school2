<template>
  <!-- 图片切换主页 -->
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light text-danger">
      <router-link
        class="navbar-brand animated fadeInUp ms-5"
        href="index.html"
        :to="'/'"
        @click="place('主页')"
        ><img :src="mylogo" class="img"
      /></router-link>
      <!-- 切换下拉列表 -->
      <button class="navbar-toggler" id="changedisplay" type="button">
        <span class="navbar-toggler-icon"></span>
        <ul class="nav flex-column animated fadeInDown" id="theul">
          <li class="nav-item" v-for="(item, i) in hrefs" :key="i">
            <router-link
              :to="item.to"
              class="hrefs nav-link"
              @click="place(item.name)"
            >
              <i :class="item.icon"></i> {{ item.name }}
            </router-link>
          </li>
        </ul>
      </button>
      <!-- Split button -->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto animated fadeInDown">
          <li class="nav-item" v-for="(item, i) in hrefs" :key="i">
            <router-link
              :to="item.to"
              class="hrefs nav-link"
              @click="place(item.name)"
            >
              <i :class="item.icon"></i> {{ item.name }}
            </router-link>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <div class="login_bt">
            <ul>
              <li class="text-danger">
                <i class="bi bi-award-fill"></i>{{ thename }}
              </li>
              <li><a href="#">1800 8888 5555</a></li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  </div>
</template>

<script setup>
import logo from "@/images/logo.png";
import { reactive, ref } from "vue";
const thename = ref("Admin");
const place = function (y) {
  ElNotification({
    title: y,
    message: `切换至${y}🌼`,
    type: "info",
  });
};

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
    icon: "bi bi-person-add",
  },
  {
    name: "论坛",
    to: "/luntan",
    icon: "bi bi bi-people-fill",
  },
  {
    name: "留言管理",
    to: "/liuyan",
    icon: "bi bi-pencil-square",
  },
]);

const imgaray = [
  {
    name: "产品",
    img: "https://pic1.imgdb.cn/item/646484370d2dde5777790d76.png",
    txt: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet, voluptates vel consequatur similique culpa doloremque quisquam. Provident dicta in, laborum, recusandae animi, commodi asperiores deserunt doloremque illum earum quam.",
  },
  {
    name: "产品",
    img: "https://pic1.imgdb.cn/item/646484370d2dde5777790d76.png",
    txt: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet, voluptates vel consequatur similique culpa doloremque quisquam. Provident dicta in, laborum, recusandae animi, commodi asperiores deserunt doloremque illum earum quam.",
  },
  {
    name: "产品",
    img: "https://pic1.imgdb.cn/item/646484370d2dde5777790d76.png",
    txt: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam amet, voluptates vel consequatur similique culpa doloremque quisquam. Provident dicta in, laborum, recusandae animi, commodi asperiores deserunt doloremque illum earum quam.",
  },
];

const content = reactive({
  title: "THE TITLE",
  goods: [3, 23, 54],
  goodstxt: ["优点描述", "优点描述", "优点描述", "优点描述"],
  txt: ["longtxt"],
});

const mylogo = ref(logo);
console.log(localStorage.getItem("token") + "HELLO");
</script>
<style>
.img {
  width: 230px;
}
</style>
