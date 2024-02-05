<script setup>
import router from "@/router/router";

const prePage = () => {
  router.back()
}
const nextPage = () => {
  router.push('/vueFeature')
}
</script>

<template>
  <el-row type="flex" justify="space-around">
    <el-button @click="prePage">上一个</el-button>
    <el-button @click="nextPage">下一个</el-button>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6"><h1>理解初始化后的Demo</h1></el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <ul>Vue创建Application
      <li>引用 Root Component</li>
      <li>Mount Application</li>
    </ul>
  </el-row>


</template>

<style scoped>

</style>