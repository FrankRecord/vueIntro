<script setup>
import router from "@/router/router";

const prePage = () => {
  router.back()
}
const nextPage = () => {
  router.push('/vueFeature2')
}
</script>

<template>
  <el-row type="flex" justify="space-around">
    <el-button @click="prePage">上一个</el-button>
    <el-button @click="nextPage">下一个</el-button>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6" ><h1>Vue的特点</h1></el-col>
  </el-row>
  <el-row  type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      <ul>
        <li>响应式的数据绑定(Reactive)</li>
        <li>可组合的视图组件(Component)</li>
      </ul>
    </el-col>
  </el-row>
  <el-row  type="flex" class="row-bg" justify="center">
    <el-col :span="15">
      <img src="../assets/Picture1.png" alt="Picture1"/>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>