import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/backend/index',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/backend',
    name: 'Backend',
    redirect: '/backend/index',
    component: () => import(/* webpackChunkName: "about" */ '../views/Backend.vue'),
    children: [
      {
        path: 'index',
        name: 'BackendIndex',
        component: () => import(/* webpackChunkName: "about" */ '../views/Backend/Index')
      },
      {
        path: 'server',
        name: 'BackendServer',
        component: () => import(/* webpackChunkName: "about" */ '../views/Backend/Server')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
