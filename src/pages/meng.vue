<template>
  <section class="container mb-5 mt-5">
    <div class="col-md-12">
      <img :src="theimg1" alt="" class="img-thumbnail" />
      <p class="display-6 text-center mt-5">填写注册信息</p>

      <el-form
        :model="form"
        class="mt-4 lh-lg display-5 h3"
        :show-message="true"
        ref="formEl"
      >
        <el-space fill wrap style="width: 100%" :size="30">
          <el-form-item label="账号">
            <el-input v-model="form.account" />
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.user_name" type="text" />
            <i class="bi"></i>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="form.password" />
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="form.region" placeholder="选择性别">
              <el-option label="男" value="男" />
              <el-option label="女" value="女" />
              <el-option label="两者皆是" value="两者皆是" />
              <el-option label="保密" value="保密" />
            </el-select>
          </el-form-item>
          <el-form-item label="注册时间">
            <el-col :span="11">
              <el-date-picker
                v-model="form.birth"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker
                v-model="form.time"
                placeholder="注册时间"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="接受推送信息">
            <el-switch v-model="form.delivery" />
          </el-form-item>

          <el-form-item label="本校生">
            <el-radio-group v-model="form.resource">
              <el-radio label="是" />
              <el-radio label="否" />
            </el-radio-group>
          </el-form-item>

          <el-row :gutter="20">
            <el-col :span="12" :offset="0">
              <el-button
                type="primary"
                @click="create"
                size="large"
                class="w-100"
                ><i class="bi bi-person-up me-1"></i>注册</el-button
              ></el-col
            >
            <el-col :span="12" :offset="0">
              <el-button @click="clear" size="large" class="w-100" type="danger"
                ><i class="bi bi-x-circle me-1"></i>取消</el-button
              ></el-col
            >
          </el-row>
        </el-space>
      </el-form>

      <el-card
        shadow="always"
        v-show="false"
        :body-style="{ padding: '20px', marginBottom: '10px' }"
      >
        <p class="text-secondly text-center">
          警告：本表单已启用联合加密，你将无法对本表单进行XSS脚本攻击、SQL注入
        </p>
        <p href="" class="text-danger text-center mt-4">
          若你不遵守相关法规，我们将会向你当地警方提供你当前的IP信息
        </p>
        <!-- card body -->
      </el-card>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import img1 from "@/images/love2.png";
import axios from "axios";
import { ElMessage, ElNotification } from "element-plus";

const theimg1 = ref(img1);
const formEl = ref();
const form = reactive({
  region: "",
  time: "",
  delivery: false,
  type: [],
  resource: "",
  password: "",
  account: "",
  user_name: "",
  birth: "",
});

const clear = function () {
  ElMessage.info("已取消注册");
  formEl.value.resetFields();
};

const create = function (el) {
  let postconfig = {
    password: form.password,
    account: form.account,
    user_name: form.user_name,
    birth: form.birth,
  };

  var config = {
    method: "post",
    url: "http://110.40.203.24:8000/api/auth/register",
    data: postconfig,
  };
  el.preventDefault();

  axios(config).then(function (response) {
    let index = response.data.code;
    if (index > 200) {
      ElNotification({
        type: "error",
        title: "错误",
        message: "填写信息错误,检查您填写的表单是否完整",
      });
      ElMessage.warning("表单不合法");
      setTimeout(() => {
        ElNotification({
          type: "warning",
          title: "提示",
          message: "若您无法完成注册可联系管理员咨询或取得测试账号",
          position: "bottom-right",
        });
      }, 2000);

      ElMessage.error("错误原因:" + response.data.msg);
    } else {
      ElNotification({
        type: "success",
        title: "注册",
        message: "注册成功",
      });

      ElMessage({
        type: "success",
        message: "token:" + response.data.data,
      });
    }
  });
};
</script>
<style scoped>
.box {
  line-height: 2rem;
}
</style>
