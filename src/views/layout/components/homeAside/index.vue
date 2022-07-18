<template>
  <div class="home-aside">
    <div class="logo-box">
      <div class="logo">
        <svg-icon :size="40" icon="user"></svg-icon>
      </div>
      <div class="title">管理系统</div>
    </div>
    <div class="menus-box">
      <Menu
        @change="handleRouteChange"
        router
        :data="menuData"
        :defaultActive="currentMenu"
        :collapse="$store.getters.isCollapse"
        name="menuName"
        path="menuRouter"
        icon="menuIcon"
        children="children"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '@/store'
const store = useStore()
// 默认激活的菜单
const currentMenu = ref('personal')
// 菜单数据
const menuData = [
  {
    id: '1',
    menuName: '个人中心',
    menuRouter: '/personal',
    menuIcon: 'platform'
  },
  {
    id: '2',
    menuName: '用户管理',
    menuRouter: '/userManage',
    menuIcon: 'user'
  },
  {
    id: '3',
    menuName: '权限管理',
    menuRouter: 'rights',
    menuIcon: 'setting',
    children: [
      {
        id: '3-1',
        menuName: '角色管理',
        menuRouter: '/permissionManage/roleManage',
        menuIcon: 'user'
      },
      {
        id: '3-2',
        menuName: '菜单管理',
        menuRouter: '/permissionManage/menuManage',
        menuIcon: 'menu'
      },
      {
        id: '3-3',
        menuName: '资源管理',
        menuRouter: '/permissionManage/resourceManage',
        menuIcon: 'folder'
      }
    ]
  }
]
// 路由变化执行
const handleRouteChange = route => {
  currentMenu.value = route.path
  // 根据路由表的标识isTab，判断是否记录tab
  if (!route.meta.isTab) return
  // 记录tag
  store.commit('common/addRouteTag', {
    title: route.meta.title,
    path: route.path
  })
}
</script>

<style lang="scss" scoped>
.home-aside {
  min-width: 200px;
  overflow: hidden;

  .logo-box {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    color: white;

    .title {
      padding-left: 10px;
      font-size: 28px;
      font-weight: bolder;
      padding-right: 20px;
    }
  }

  .menus-box {
    ::v-deep .el-menu {
      border-right: none;
    }
  }
}
</style>
