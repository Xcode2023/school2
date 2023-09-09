<template>
  <div class="contact_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1 class="contact_taital contact_heading">登陆</h1>
        </div>
      </div>
      <div class="contact_section_2">
        <div class="row">
          <div class="col-md-12">
            <div class="mail_section map_form_container">
              <form action="">
                <input
                  type="text"
                  class="mail_text form-control"
                  placeholder="账户"
                  name="name"
                  v-model="form.account"
                />
                <input
                  type="text"
                  class="mail_text form-control"
                  placeholder="用户名"
                  name="user_name"
                  v-model="form.user_name"
                />
                <input
                  type="password"
                  class="mail_text form-control"
                  placeholder="密码"
                  name="password"
                  v-model="form.password"
                />
                <div class="send_bt active">
                  <a href="#" class="bg-dark" @click="logoin">登录</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <p href="" class="text-danger text-center mt-4">
        没有账号？
        <el-link type="primary" :underline="false" href="#/meng" target="_blank"
          >注册一个！</el-link
        >
      </p>
      <!-- card body -->
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ElMessage, ElNotification, ElMessageBox } from "element-plus";
import { reactive, ref } from "vue";

let location_login = ref("");

let form = reactive({
  password: "",
  account: "",
  user_name: "",
});
var config = {
  method: "post",
  url: "https://www.mengrao.site/api/auth/login",
  data: form,
};
const logoin = function (el) {
  el.preventDefault();

  axios(config).then(function (response) {
    let index = response.data.code;

    if (index > 200) {
      ElNotification({
        type: "error",
        title: "错误",
        message: "填写信息错误,检查您的账号或密码是否正确",
      });

      setTimeout(() => {
        ElNotification({
          type: "warning",
          title: "提示",
          message: "若您忘记您的密码可联系管理员或重新注册",
          position: "bottom-right",
        });
      }, 2000);

      console.log(response.data.msg);
    } else {
      ElNotification({
        type: "success",
        title: "登录",
        message: "登录成功",
      });
      location_login = response.data.data.token;
      setTimeout(() => {
        ElNotification({
          type: "success",
          title: "成功获取Token",
          message: response.data.data.token,
        });
      }, 2000);
      localStorage.clear;

      localStorage.setItem("token", location_login);
      console.log(localStorage.getItem("token"));
    }
  });
};
</script>
<style scoped></style>
