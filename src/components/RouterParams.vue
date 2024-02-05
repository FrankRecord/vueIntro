<script setup>
import {useRoute} from "vue-router";
import router from "@/router/router";
const route = useRoute()
const back =() => {
  router.back()
}
const info = [{
  name: 'qingqing',
  data: '今年几岁了'
}]
const data = info.find((t) => t.name = route.params.name)
</script>

<template>
  <input type="button" value="Back" @click="back"/>
  <p>{{data.name}}123</p>
  <p>{{data.data}}456</p>
</template>

<style scoped>

</style>