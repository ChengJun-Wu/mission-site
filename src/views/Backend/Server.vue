<template>
  <div>
    <a-row>
      <a-col span="6" class="p-2" v-for="server in servers" :key="server.ID">
        <a-card :title="server.Name">
          <div slot="extra">
            <a-dropdown :trigger="['hover']">
              <a class="ant-dropdown-link" @click="e => e.preventDefault()">操作</a>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <a-button type="link">修改</a-button>
                </a-menu-item>
                <a-menu-item key="1">
                  <a-button type="link">连接</a-button>
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <a-row>
            <a-col span="6">
              <a-icon type="desktop" :style="{fontSize: '60px'}" />
            </a-col>
            <a-col span="18">
              <div>
                <span class="mr-2">IP</span>
                <span>{{server.Ip}}</span>
              </div>
              <div class="mt-2">
                <span class="mr-2">端口</span>
                <span>{{server.Port}}</span>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import api from '@/api'
import {SERVER} from "@/helpers/url";
export default {
  name: 'Server',
  data () {
    return {
      servers: []
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    index () {
      api({}).get(SERVER).then(resp => {
        this.servers = resp.data.data
      })
    },
    show (id) {

    },
    store () {
    },
    update (id) {
    },
    delete(id) {
    }
  }
}
</script>

<style scoped>

</style>
