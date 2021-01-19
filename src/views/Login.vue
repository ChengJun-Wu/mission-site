<template>
  <div class="bg d-flex justify-content-center align-items-center">
    <div class="container p-3">
      <div class="p-1" style="height: 33.3333%">
        <el-input size="small" v-model="form.username" suffix-icon="el-icon-user" />
      </div>
      <div class="p-1" style="height: 33.3333%">
        <el-input size="small" v-model="form.password" type="password" suffix-icon="el-icon-lock" />
      </div>
      <div class="p-1" style="height: 33.3333%">
        <el-button type="primary" size="small" class="w-100">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
.bg{
  position: fixed;
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpg") no-repeat;
  background-size: cover;
}
.container{
  width: 300px;
  height: 188px;
  background: #eee;
  border-radius: 5px;
  opacity: 0.8;
}
</style>
