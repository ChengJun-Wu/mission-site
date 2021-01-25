<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" :collapsible="true">
        <div class="logo" />
        <a-menu theme="dark" :selectedKeys="selectKeys" mode="inline" @select="selectMenu">
          <a-menu-item v-for="menu in menus" v-if="menu.show" :key="menu.route">
            <a-icon :type="menu.icon" />
            <span>{{ menu.name }}</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <a-row>
            <a-col :span="22">
              <a-page-header
                  :title="current.name"
                  :sub-title="current.desc"
              />
            </a-col>
            <a-col :span="2">
              <a-dropdown>
                <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                  <span>{{user.Username}}</span>
                </a>
                <a-menu slot="overlay">
                  <a-menu-item key="0">
                    <a-button type="link" @click="logout">退出登陆</a-button>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </a-col>
          </a-row>
        </a-layout-header>
        <a-layout-content class="m-3">
          <router-view :style="{ padding: '24px', background: '#fff', minHeight: '360px' }" />
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          mission ©2021 Created by cjwu
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import api from '@/api'
import {LOGIN_LOGOUT, LOGIN_USER} from "@/helpers/url"
import {ok, redirectIfNeedLogin} from "@/helpers/resp"
import menu from '@/helpers/menu'
export default {
  name: "Backend",
  data () {
    return {
      menus: menu,
      current: {},
      selectKeys: [],
      collapsed: false,
      user: {}
    }
  },
  mounted() {
    this.checkLogin()
    this.initTitle(this.$route.path)
  },
  methods: {
    checkLogin () {
      api({}).get(LOGIN_USER).then(resp => {
        if (ok(resp)) {
          this.user = resp.data.data
        }
      })
    },
    logout () {
      api({}).delete(LOGIN_LOGOUT).then(resp => {
        redirectIfNeedLogin(resp)
      })
    },
    selectMenu (item) {
      this.$router.push({
        path: item.key
      })
      this.initTitle(item.key)
    },
    initTitle(route)
    {
      this.selectKeys = [route]
      for (let i in this.menus) {
        if (this.menus[i].route === route) {
          this.current = this.menus[i]
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
