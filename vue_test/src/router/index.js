import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: "news",
          component: () => import('../views/News.vue'),
          children: [
            {
              name: "newsdetail",
              path: "newsdetail/:id/:title",
              component: () => import('../views/NewsDetail.vue'),
              // props的第一种写法,props值为对象,将该对象以props传给路由组件NewsDetail
              // props的第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props形式传给路由组件NewsDetail
              props: true
            }
          ]
        },
        {
          path: "messages",
          component: () => import('../views/Messages.vue'),
          children: [
            {
              path: "detail",
              component: () => import('../views/Detail.vue'),
              // props的第三种种写法,props值为函数,函数返回值以props传给路由组件Detail,函数可以接收$route参数
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title
                }
              }
            }
          ]
        }
      ]
    },
    {
      path: '/about',
      component: About
    }
  ]
})
export default router