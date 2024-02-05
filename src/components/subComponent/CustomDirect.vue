<script>
// enables v-focus in templates
export default {
  data(){
    return {
      copyText: ''
    }
  },
  methods: {
    copy(){
      if(this.copyText){
        this.$message('当前复制内容' + this.copyText)
      }
    }
  },
  directives: {

  }
}

</script>

<template>
  <input v-model="copyText" />
  <button v-copy="copyText" @click="copy">复制</button>
  <div v-draggable class="el-dialog" style="background: #000000"></div>
</template>

<style scoped>
  .el-dialog{
    width: 30%;
    height: 100px;
  }
</style>