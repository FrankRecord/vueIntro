<script>
import router from "@/router/router";

export default {
    name: 'DemoFile',
    props: {
      input: String
    },
    methods:{
      jump(){
        router.push({
          path: '/helloWorld'
        })
      },
      toDynamic(){
        router.push({
          path: '/dynamic',
          query: {
            name: 'qingqing'
          }
        })
      },
      toDynamicParams(){
        router.push({
          name: 'dynamicByParams',
          params: {
            name: 'qingqing'
          }
        })
      },
      toSubQuery(){
        router.push({
          name: 'subQuery',
          query: {
            name: 'SubQueryToComplete'
          }
        })
      }
    }
  }
</script>

<template>
  <router-link to="/direct">Direct</router-link>
  <input type="button" value="跳转到HelloWorld" @click="jump"/>
  <input type="button" value="带参数" @click="toDynamic"/>
  <input type="button" value="带params参数" @click="toDynamicParams"/>
  <input type="button" value="ToSubQuery" @click="toSubQuery"/>
  <router-view></router-view>
</template>

<style scoped>

</style>