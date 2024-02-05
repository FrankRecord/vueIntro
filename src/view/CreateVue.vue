<script setup>
import router from "@/router/router";

const prePage = () => {
  router.back()
}
const nextPage = () => {
  router.push('/analyzeProject')
}
</script>

<template>
  <el-row type="flex" justify="space-around">
    <el-button @click="prePage">上一个</el-button>
    <el-button @click="nextPage">下一个</el-button>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6" ><h1>创建一个Vue项目</h1></el-col>
  </el-row>
  <el-row  type="flex" class="row-bg" justify="center">
    <el-col :span="6">
        <h2>前置知识</h2>
        <ul>
          <li><el-link href=" https://cli.vuejs.org/guide/installation"> Vue installation</el-link></li>
          <li>Vue CLI: to create a new project:
            vue create projectName
          </li>
          <li>npm run serve</li>
        </ul>
    </el-col>

  </el-row>
</template>

<style scoped>

</style>