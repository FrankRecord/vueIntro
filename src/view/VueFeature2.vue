<script setup>
import router from "@/router/router";
import {ref} from "vue";

const prePage = () => {
  router.back()
}
const nextPage = () => {
  router.push('/vueFeature2')
}
let data = ref([])
data = [{
  label: 'Component',
  children: [{
    label: 'Template语法',
    children: [{
      label: '文本插入 Mustache'
    },{
      label: '指令 Directive'
    },{
      label: '修饰符 Modifier'
    }]
  },{
    label: '响应式基础 Reactivity Fundamentals',
    children: [{
      label: 'Composition API',
    },{
      label: 'Optional API'
    }]
  }]
},]

const handleJump = (data) => {
  console.log(data.label)
  if(data.label === '文本插入 Mustache'){
    router.push('/mustache')
  }else if(data.label === '指令 Directive'){
    router.push('/directive')
  }
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
      <el-tree :data="data"  @node-click="handleJump"  default-expand-all></el-tree>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>