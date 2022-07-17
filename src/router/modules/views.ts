export default [
  {
    path: '/home',
    name: 'home',
    meta: {
      keepAlive: false, // 缓存组件
      isTab: true, // tab菜单那
      isAuth: true // 限制权限
    },
    component: () => import('@/views/home/index.vue')
  }
]
