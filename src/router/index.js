import { createRouter, createWebHistory } from 'vue-router'
import AllMeets from '../views/AllMeets.vue'
import Detail from '../views/Detail.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/semua-rapat',
    name: 'AllMeets',
    component: AllMeets
  },
  {
    path: '/detail-rapat',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
