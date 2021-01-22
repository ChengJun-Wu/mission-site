<template>
  <div class="bg d-flex justify-content-center align-items-center">
    <div class="container p-3">
      <div class="mb-2 p-1 d-flex justify-content-center align-items-center">
        <a-input v-model="form.username" icon="ios-contact" placeholder="输入账号" @pressEnter="login">
          <a-icon slot="suffix" type="user" />
        </a-input>
      </div>
      <div class="mb-2 p-1 d-flex justify-content-center align-items-center">
        <a-input-password v-model="form.password" placeholder="输入密码" @pressEnter="login"/>
      </div>
      <div class="mb-2 p-1 d-flex justify-content-center align-items-center">
        <a-input v-model="form.captcha" placeholder="输入验证码" @pressEnter="login"/>
        <img :src="captchaUrl" style="height: 32px;" class="ml-2" @click="captcha" />
      </div>
      <div class="mb-2 p-1 d-flex justify-content-center align-items-center">
        <a-button type="primary" block @click="login" :loading="loading">登陆</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import {LOGIN, LOGIN_CAPTCHA} from "@/helpers/url";
import {ok} from "@/helpers/resp";
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: 'admin',
        password: 'admin',
        captcha: ''
      },
      captchaUrl: '',
      loading: false
    }
  },
  created() {
    this.captcha()
  },
  methods: {
    login () {
      this.loading = true
      api(this.form).post(LOGIN).then(resp => {
        if (ok(resp)) {
          this.$router.push('backend')
        }
      }).finally(() => {
        this.loading = false
      })
    },
    captcha () {
      api({}).get(LOGIN_CAPTCHA).then(resp => {
        if (ok(resp)) {
          this.captchaUrl = 'data:image/png;base64,' + resp.data.data
        }
      })
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
  background: #eee;
  border-radius: 5px;
  opacity: 0.8;
}
</style>
