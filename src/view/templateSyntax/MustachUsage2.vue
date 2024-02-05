<script setup>
let jsExpress = [
  '{{ number + 1 }}',
  "{{ ok ? 'YES' : 'NO' }}",
  "{{ message.split('').reverse().join('') }}",
  '<div :id="`list-${id}`"></div>'
]

</script>

<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top:20px">
    2. Javascript Expression(Javascript 表达式）
  </el-row>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      <div class="code-block" v-for="item in jsExpress" :key="item">
        {{item}}
      </div>
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