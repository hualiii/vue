import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import '../assets/ css/reset.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
