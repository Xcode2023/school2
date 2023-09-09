import { createRouter, createWebHashHistory } from "vue-router";

import Index from "@/pages/Index/index.vue";
import news from "@/pages/news.vue";
import qiyuan from "@/pages/qiyuan.vue";
import template from "@/components/template.vue";
import about from "@/pages/About/index.vue";
import meng from "@/pages/meng.vue";
import luntan from "@/pages/luntan.vue";
import liuyan from "@/pages/liuyan.vue";
import gsappage from "@/pages/gsappage.vue";

const routes = [
  {
    path: "/",
    component: Index,
  },

  {
    path: "/about",
    component: about,
  },
  {
    path: "/qiyuan",
    component: qiyuan,
  },
  {
    path: "/news",
    component: news,
  },
  {
    path: "/meng",
    component: meng,
  },
  {
    path: "/template",
    component: template,
  },
  {
    path: "/luntan",
    component: luntan,
  },
  {
    path: "/liuyan",
    component: liuyan,
  },
  {
    path: "/gsappage",
    component: gsappage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
