export default [
  {
    path: '/',
    name: 'home',
    meta: {
      keepAlive: false, // 缓存组件
      isTab: false, // tab菜单那
      isAuth: false // 限制权限
    },
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '', // 默认路由
        redirect: '/personal' // 跳转到/personal
      },
      {
        path: '/personal', // 绝对地址
        name: 'personal',
        component: () => import('@/views/personal/index.vue'),
        meta: {
          title: '个人中心',
          icon: 'platform',
          keepAlive: false, // 属于缓存组件
          isTab: true, // 属于tab菜单
          isAuth: true // 属于登陆权限
        }
      }
    ]
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
