<script setup>
import {ref} from "vue";

let rawHtml = ref('')
let rawHtml2 = ref('')
let key = ref('')
let multipleAttr = ref({})
rawHtml = '<div v-bind:id="dynamicId"></div>'
rawHtml2 = '<div :id="dynamicId"></div>'
key = 'value'

let now = new Date();
const time = now.toLocaleString()

multipleAttr = {
  id: 'demo',
  name: 'group1',
  value: time
}

</script>

<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 20px">
    <h3>Attribute binding: V-bind</h3>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      原始：
      <div class="code-block">
        {{ rawHtml }}
      </div>
      简写：
      <div class="code-block">
        {{ rawHtml2 }}
      </div>
    </el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      绑定属性：
      <el-input v-bind:value="time"></el-input>
    </el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      绑定动态属性：
      <el-input v-bind:[key] = 'time'></el-input>
    </el-col>
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      绑定多个属性：
      <el-input v-bind="multipleAttr"></el-input>
    </el-col>
  </el-row>


</template>

<style scoped>
.code-block {
  background: #2d2d2d;
  color: rgb(201, 209, 217);
  font-family: Consolas, serif;
  text-align: left;
  padding: 1em 1em 1em 0.8em;
  margin: 1em;
  border-radius: 5px;
  counter-reset: line;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
}
</style>