<template>
  <el-drawer
    class="z-index"
    v-model="drawer"
    title="I am the title"
    :with-header="true"
  >
    <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">填写需要修改的内容</h4>
    </template>
    <el-form>
      <el-space fill wrap style="width: 100%" :size="30">
        <el-form-item size="large" label="标题">
          <el-input type="text" v-model="form4.title"
            >{{ form4.title }}
          </el-input>
        </el-form-item>
        <el-form-item size="large" label="内容">
          <el-input type="text" v-model="form4.content"
            >{{ form4.content }}
          </el-input>
        </el-form-item>
        <el-button
          type="primary"
          size="large"
          class="w-100"
          @click="handleEdit(form4)"
          >确定</el-button
        >
      </el-space>
    </el-form>
    <p class="text-center text-secondary mt-4">点击外侧任意区域可取消编辑</p>
  </el-drawer>
  <el-drawer
    v-model="drawer2"
    title="I am the title"
    direction="ltr"
    :with-header="true"
  >
    <template #header="{ titleId, titleClass }">
      <h4 :id="titleId" :class="titleClass">填写需要新增的内容</h4>
    </template>
    <el-form>
      <el-space fill wrap style="width: 100%" :size="30">
        <el-form-item size="large" label="标题">
          <el-input type="text" placeholder="admin" v-model="form.title">
          </el-input>
        </el-form-item>
        <el-form-item size="large" label="内容">
          <el-input type="text" v-model="form.content"> </el-input>
        </el-form-item>
        <el-button type="primary" size="large" class="w-100" @click="addnew"
          >确定</el-button
        >
      </el-space>
    </el-form>
    <p class="text-center text-secondary mt-4">点击外侧任意区域可取消编辑</p>
  </el-drawer>
  <section class="container shadow mt-4 mb-5 rounded">
    <section class="row">
      <div class="col-md-6"><p class="display-4">留言管理</p></div>
      <div class="col-md-6 d-flex justify-content-end align-items-center">
        <el-button type="primary" size="large" @click="drawer2 = !drawer2"
          ><i class="bi bi-plus-circle me-1"></i>新增留言</el-button
        >
        <el-button type="info" size="large" @click="getItems"
          ><i class="bi bi-arrow-clockwise me-1"></i>更新留言</el-button
        >
      </div>
    </section>

    <section class="row">
      <div class="col-md-12 h2">
        <el-table :data="filterTableData" style="width: 100%">
          <el-table-column label="日期" prop="create_time" />
          <el-table-column label="账户" prop="user_name" />
          <el-table-column label="标题" prop="title" />
          <el-table-column label="内容" prop="content" />
          <el-table-column align="right">
            <template #header>
              <el-input
                v-model="search"
                size="small"
                placeholder="输入用户名关键词检索内容"
              />
            </template>
            <template #default="scope">
              <el-button
                size="large"
                type="primary"
                @click="opendrawer(scope.row)"
                ><i class="bi bi-pencil-fill me-1"></i>编辑</el-button
              >

              <el-button
                size="large"
                type="danger"
                class="mt-sm-2 mt-lg-0 mt-md-2"
                @click="handleDelete(scope.row)"
                ><i class="bi bi-trash me-1"></i>删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </section>
  </section>
</template>

<script setup>
import { ElMessage, ElNotification } from "element-plus";
import { computed, reactive, ref, getCurrentInstance, onMounted } from "vue";
import moment from "moment";

const $this = getCurrentInstance();
const axios = $this.proxy.axios;

let form = reactive({
  title: "",
  content: "",
});
let form2 = reactive({
  id: "",
});

let form4 = reactive({
  id: "",
  title: "",
  content: "",
});

let drawer = ref(false);
let drawer2 = ref(false);
const search = ref("");

const opendrawer = function (row) {
  drawer.value = !drawer.value;
  const { id, title, content } = row;
  form4.id = id;
  form4.title = title;
  form4.content = content;
};
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.user_name.toLowerCase().includes(search.value.toLowerCase())
  )
);
const handleEdit = (form) => {
  var config = {
    method: "post",
    url: "https://www.mengrao.site/api/message/update",
    data: form,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  axios(config)
    .then(function (res) {
      const { msg: message, code } = res.data;

      if (code > 200) {
        ElMessage.danger("修改失败！");
      } else {
        ElMessage.success("提交成功");

        ElNotification({
          type: "success",
          message: "修改成功请刷新留言列表",
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
// DEL
const handleDelete = (row) => {
  let data = { ...row };

  var config = {
    method: "get",
    url: `https://www.mengrao.site/api/message/del?id=${data.id}`,
    data: data.id,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      let index = response.data.code;
      if (index > 200) {
        ElNotification({
          type: "error",
          title: "错误",
          message: "服务器似乎并没有响应，你确定服务器在正常运转吗·V·",
        });
        ElMessage.warning("表单不合法");
        setTimeout(() => {
          ElNotification({
            type: "warning",
            title: "删除失败",
            message: "若您无法完成注册可联系管理员咨询或取得测试账号",
            position: "bottom-right",
          });
        }, 2000);

        ElMessage.error("错误原因:" + response.data.msg);
      } else {
        ElNotification({
          type: "success",
          title: "删除",
          message: "删除成功",
        });
        ElMessage("删除留言成功");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const addnew = (e) => {
  let data = {
    title: form.title,
    content: form.content,
  };
  var config = {
    method: "post",
    url: "https://www.mengrao.site/api/message/add",
    data: data,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  axios(config)
    .then(function (response) {
      let index = response.data.code;
      if (index > 200) {
        ElNotification({
          type: "error",
          title: "错误",
          message: "服务器似乎并没有响应，你确定服务器在正常运转吗·V·",
        });
        ElMessage.warning("表单不合法");
        setTimeout(() => {
          ElNotification({
            type: "warning",
            title: "提示",
            message: "若您无法完成可联系管理员咨询或取得测试账号",
            position: "bottom-right",
          });
        }, 2000);

        ElMessage.error("错误原因:" + response.data.msg);
      } else {
        ElNotification({
          type: "success",
          title: "新增",
          message: "新增成功",
        });
        ElMessage("新增成功");
      }
    })
    .catch(function (error) {
      console.log(error);
      ElMessage.error(error);
      ElMessage.error("似乎网络发生错误");
    });
};
const getItems = function () {
  axios("https://www.mengrao.site/api/message/get_list").then((e) => {
    const res = e.data;
    if (res.code != 200) {
      ElMessage.error("获取失败");
    } else {
      ElMessage.success("获取成功");
      tableData.value = res.data.map((item) => ({
        ...item,
        create_time: moment(item.create_time).format("YYYY-MM-DD hh:mm:ss"),
      }));
      ElNotification({
        type: "success",
        title: "UpDate",
        message: "更新成功-列表内容个数:" + e.data.data.length,
        position: "bottom-left",
      });
    }
  });
};
const tableData = ref([]);
onMounted(getItems);
</script>
<style>
</style>
