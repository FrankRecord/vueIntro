<script setup>
import router from "@/router/router";


const prePage = () => {
  router.back()
}
const jumpToDirective = () => {
  router.push('/directive')
}

</script>

<template>
  <el-row type="flex" justify="space-around">
    <el-button @click="prePage">返回</el-button>
    <el-button @click="jumpToDirective">To Directives</el-button>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6"><h1>Mustache Usage</h1></el-col>
  </el-row>
  <router-link :to="{name: 'mustache1'}" style="margin-right: 20px">文本插入</router-link>
  <router-link :to="{name: 'mustache2'}" style="margin-right: 20px">Javascript表达式</router-link>
  <router-link :to="{name: 'mustache3'}">Call Function</router-link>
  <router-view></router-view>
</template>