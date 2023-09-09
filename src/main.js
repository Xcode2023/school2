import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

import axios from "axios";

import "element-plus/dist/index.css";

import "@/assets/css/style.css";
import "@/assets/css/responsive.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "@/assets/css/reset.css"; // 样式初始化
import "@/assets/css/scoll.css"; // 滚动条样式
import "@/assets/css/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App);
app.use(router);
app.config.globalProperties.axios = axios;

app.mount("#app");
