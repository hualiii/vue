import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: {
        title: "主页"
      },
      children: [
        {
          name: 'news',
          path: "news",
          meta: {
            title: "新闻",
            isLock: true,
          },
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
          name: 'messages',
          path: "messages",
          meta: {
            title: "消息",
            isLock: true,
          },
          component: () => import('../views/Messages.vue'),
          children: [
            {
              name: 'detail',
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
      component: About,
      meta: {
        title: "关于"
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  let username = "admin"
  if (to.meta.isLock) {
    if (username === "admin1") {
      next()
    }
  } else {
    next()
  }
})
router.afterEach(route => {
  console.log(route)
  document.getElementsByTagName('title')[0].innerText = route.meta.title
})
export default router