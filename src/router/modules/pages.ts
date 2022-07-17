export default [
  {
    path: '/',
    redirect: '/home',
    meta: {
      keepAlive: false, // 缓存组件
      isTab: false, // tab菜单那
      isAuth: false // 限制权限
    }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      keepAlive: false, // 缓存组件
      isTab: false, // tab菜单那
      isAuth: false // 限制权限
    },
    component: () => import('@/views/login/index.vue')
  }
]
