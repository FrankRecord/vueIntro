<script setup>
import {ref} from "vue";

let msg = ref('')
let rawHtml = ref('')
rawHtml = '<span>Message: {{ msg }}</span>'

</script>

<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 20px">
    1. 文本插入
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      <div class="code-block">
        {{ rawHtml }}
      </div>
      <div><el-input type="text" placeholder="type message" v-model="msg"/></div>
      <div>Message: {{msg}}</div>
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