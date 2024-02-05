<script setup>
import {onMounted, ref} from "vue";

let rawHtml = ref('')
let rawHtml2 = ref('')
let cupNum = ref('')

rawHtml = '<div v-on:click="test"></div>'
rawHtml2 = '<div @click="test"></div>'


let time = new Date().toDateString()
let record = ref([{
  date: time,
  cup: 0
}])
const  recordMilkTea = (num) => {
  num = Number(num)
  if(!num) {
    num = 0
  }
  let time = new Date().toDateString()
  record.value.forEach( (item) => {
    if(item.date === time){
      item.cup += num
    }else {
      record.value.push({
        date: time,
        cup: num
      })
    }
  })
  let historyData = record.value
  localStorage.setItem("milkTea", JSON.stringify(historyData))
}
onMounted(() =>{
  let data = localStorage.getItem('milkTea')
  if(data){
    record.value = JSON.parse(data)
  }
})
</script>

<template>
  <el-row type="flex" class="row-bg" justify="center" style="margin-top: 20px">
    <h3>Event listener:  v-on</h3>
  </el-row>
  <section>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="7">
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
  </section>
  <section>
    <div class="sub-title"><h4>记录今天喝了几杯奶茶？</h4></div>
    <el-row type="flex" justify="space-around">
      <el-col :span="4">
        <el-button @click="recordMilkTea(cupNum)">奶茶入账</el-button>
      </el-col>
      <el-col :span="5  ">
        <el-input type="text" v-model="cupNum"></el-input>
      </el-col>
    </el-row>
    <el-table :data="record">
      <el-table-column prop="date" label="日期" fixed></el-table-column>
      <el-table-column label="杯数">
        <template v-slot="date">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{date.row.cup}}</span>
        </template>
      </el-table-column>
    </el-table>

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
  counter-reset: line;
  white-space: pre;
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