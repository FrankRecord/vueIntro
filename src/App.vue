<template>
  <div id="app">
    <el-row :span="10" type="flex" justify="center">
      <img src="./assets/logo.png" alt="112">
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
