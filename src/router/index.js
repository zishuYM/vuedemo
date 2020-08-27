import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import JakeWharton from '../views/JakeWharton.vue'
// import yyx990803 from '../views/yyx990803.vue'
// import zpao from '../views/zpao.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/about/:userName',
    name: 'User',
    component: User
  },
  // {
  //   path: '/about/JakeWharton',
  //   name: 'JakeWharton',
  //   component: JakeWharton
  // },
  // {
  //   path: '/about/yyx990803',
  //   name: 'yyx990803',
  //   component: yyx990803
  // },
  // {
  //   path: '/about/zpao',
  //   name: 'zpao',
  //   component: zpao
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
