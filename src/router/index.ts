import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import pagesRoute from './modules/pages'
import viewsRoute from './modules/views'
import { store } from '@/store'
const routes: RouteRecordRaw[] = [
  // 页面路由
  ...pagesRoute,
  // 视图路由
  ...viewsRoute,
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/404/index.vue')
  }
]

const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  // 路由规则
  routes
})
// 跳转路由前
router.beforeEach((to, from, next) => {
  // 已经登陆
  if (store.getters.token) {
    if (to.path === '/login') {
      // 登陆后不能进入登陆页面
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录
    if (to.meta.isAuth) {
      // 需要认证
      next({
        name: 'login',
        // 通过url地址，传递重定向
        query: {
          // 把原来需要访问的网页，告诉登陆页面
          redirect: to.fullPath
        }
      })
    } else {
      // 不需要认证
      next()
    }
  }
})
// 跳转路由后
router.afterEach((to, from) => {
})

export default router
