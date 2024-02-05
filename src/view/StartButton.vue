<script setup>
import router from "@/router/router";

function jump() {
  router.push('/createVue')
}
</script>

<template>
  <el-row type="type" justify="center">
    <el-button @click="jump">开始</el-button>
  </el-row>
</template>

<style scoped>

</style>