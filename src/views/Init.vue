<template>
  <el-card style="width: 500px">
    <div slot="header">
      <span>首次使用配置</span>
    </div>
    <el-form>
      <el-form-item>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Init',
  data () {
    return {
      form: {
        AesKey: '',
        Username: '',
        Password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
