<script setup>
import {ref} from "vue";

let rawHtml = ref('')
rawHtml = '<time :title="toTitleDate(date)" :datetime="date">\n' +
    '  {{ formatDate(date) }}\n' +
    '</time>'
const getTime = () => {
  return Date()
}
</script>

<template>
  <el-row type="flex" class="row-bg" justify="center">
    3. Call Functioin
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="9">
      <div class="code-block">
        {{ rawHtml }}
      </div>
      <div>
        {{getTime()}}
      </div>
      <input :value="getTime()">
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