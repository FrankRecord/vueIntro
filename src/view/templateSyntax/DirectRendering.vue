<script setup>
import {ref} from "vue";

let rawHtml = ref([])
rawHtml =[
  '<p v-if="seen">Now you see me</p>\n',
  '<ul>\n' +
  '<li> v-for="item in items">{{ item.message }}</li>\n' +
  '</ul>'
]

let seenIF = ref(false)
let seenShow = ref(false)


const picPath = [
    'https://img.win3000.com/m00/75/ba/59d625d22623b502db011045114abf8a.jpg',
    'https://img.win3000.com/m00/e6/28/f9acdb66501a0aac36bf62a659e5b783.jpg',
    'https://img.win3000.com/m00/7f/d3/91eb6bbb6c58ae1f762e951ff286c777.jpg'
]


</script>

<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 10px">
    <h3>Rendering Element</h3>
  </el-row>
  <section>
    <el-row type="flex" class="row-bg" justify="center" style="margin-top: 10px">
      <h5>1. Conditional Rendering - v-if/v-show </h5>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="9">
        <div class="code-block">
          {{ rawHtml[0] }}
        </div>
        <el-button @click="() => seenIF = !seenIF">IF Toggle</el-button>
        <el-button @click="() => seenShow = !seenShow">SHOW Toggle</el-button>
        <p v-if="seenIF">IF: Now you see me</p>
        <p v-show="seenShow">SHOW: Now you see me</p>
      </el-col>
    </el-row>
  </section>
  <section>
    <el-row type="flex" class="row-bg" justify="center">
      <h5>2. For Loop Rendering - v-for</h5>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <p>v-for 基于array，来生成Element</p>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <div class="code-block">
          {{ rawHtml[1] }}
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <div class="sub-title">栗子：</div>
        <div class="demo-basic--circle">
          <div style="display: inline-block; margin-right: 5px" v-for="(pic, index) in picPath" :key="pic">
            <el-avatar :size="100" shape="square" :src="pic"></el-avatar>
            <div>井川里予{{index}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </section>

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
section {
  border-bottom: black 1px solid;
  width: 60%;
  margin: 0 auto;
  padding-bottom: 20px;
}
section:first-of-type {
  border-top: 1px solid black;
}
</style>