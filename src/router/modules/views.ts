export default [
  {
    path: '/resourceManage',
    name: 'resourceManage',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/resourceManage/index.vue'),
        meta: {
          title: '资源管理',
          keepAlive: false, // 属于缓存组件
          isTab: true, // 属于tab菜单
          isAuth: true // 属于登陆权限
        }
      }
    ]
  },
  {
    path: '/permissionManage',
    name: 'permissionManage',
    component: () => import('@/views/layout/index.vue'),
    meta: {
      title: '权限管理',
      keepAlive: false, // 属于缓存组件
      isTab: false, // 属于tab菜单
      isAuth: true // 属于登陆权限
    },
    children: [
      {
        path: '',
        redirect: 'userManage'
      },
      {
        path: 'userManage',
        name: 'userManage',
        component: () => import('@/views/userManage/index.vue'),
        meta: {
          title: '用户管理',
          keepAlive: false, // 属于缓存组件
          isTab: true, // 属于tab菜单
          isAuth: true // 属于登陆权限
        }
      },
      {
        path: 'roleManage',
        name: 'roleManage',
        component: () => import('@/views/roleManage/index.vue'),
        meta: {
          title: '角色管理',
          keepAlive: false, // 属于缓存组件
          isTab: true, // 属于tab菜单
          isAuth: true // 属于登陆权限
        }
      },
      {
        path: 'menuManage',
        name: 'menuManage',
        component: () => import('@/views/menuManage/index.vue'),
        meta: {
          title: '菜单管理',
          keepAlive: false, // 属于缓存组件
          isTab: true, // 属于tab菜单
          isAuth: true // 属于登陆权限
        }
      }
    ]
  }
]
