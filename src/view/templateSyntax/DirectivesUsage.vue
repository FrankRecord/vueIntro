<script setup>
import router from "@/router/router";


const prePage = () => {
  router.back()
}

</script>

<template>
  <el-row type="flex" justify="space-around" style="margin-bottom: 20px">
    <el-button @click="prePage">返回</el-button>
  </el-row>
  <router-link :to="{name: 'binding'}" style="margin-right: 20px">Attribute Binding</router-link>
  <router-link :to="{name: 'rendering'}" style="margin-right: 20px">Element Rendering</router-link>
  <router-link :to="{name: 'eventListener'}" style="margin-right: 20px">Event Listener</router-link>
  <router-link :to="{name: 'mustache3'}">Form binding</router-link>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top:20px">
    <el-link href="https://vuejs.org/api/built-in-directives.html" target="_blank">Built-in Directives</el-link>
  </el-row>
  <router-view></router-view>
</template>