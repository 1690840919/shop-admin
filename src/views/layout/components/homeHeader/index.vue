<template>
  <div class="home-header">
    <!-- 上方 -->
    <div class="home-header-top-box">
      <!-- 左边面包屑菜单 -->
      <div class="breadcrumb-box">
        <!-- 折叠菜单按钮 -->
        <div class="collapse-btn-box">
          <svg-icon
            @click="handleCollapse(false)"
            v-if="$store.getters.isCollapse"
            :size="20"
            icon="expand"
          />
          <svg-icon
            @click="handleCollapse(true)"
            v-else
            icon="fold"
            :size="20"
          />
        </div>
        <!-- 面包屑菜单展示 -->
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item to="/">
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item
            class="breadcrumb-item"
            :key="item.meta.title"
            v-for="item in $route.matched.filter(item => item.meta.title)"
            :to="{ path: item.path }"
          >
            {{ item.meta.title }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 右边菜单 -->
      <div class="menus-box">
        <!-- 内容搜索 -->
        <!-- 切换主题 -->
        <!-- 切换全屏 -->
        <!-- 中英文切换 -->
        <language :size="20" class="icon-container" />
        <!-- 用户信息 -->
        <el-dropdown>
          <span v-if="$store.state.user.userInfo" class="el-dropdown-link">
            {{ $store.state.user.userInfo.name }}
            <el-icon class="el-icon--right">
              <svg-icon :size="16" icon="user" />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click="handleCancelLoginBtn">
                {{ $t('msg.login.logout') }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <!-- 下方路由路由tag -->
    <div class="home-header-bottom-box">
      <div
        v-for="(item, index) in $store.getters.routeTags"
        :key="item.path"
        class="routeTag"
        :class="{ currentTag: $store.getters.currentTagIndex === index }"
      >
        <el-tag
          @contextmenu.prevent="openMenu($event, index)"
          @close="handleCloseTag(item, index)"
          @click="handleTag(item, index)"
          :color="
            $store.getters.currentTagIndex === index
              ? 'rgb(20,147,250)'
              : 'white'
          "
          closable
        >
          {{ item.title }}
        </el-tag>
      </div>
      <tag-menu
        :index="showMenuWindowIndex"
        v-show="showMenuWindow"
        :menuPositionData="menuPositionData"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TagMenu from './components/tagMenu.vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
const store = useStore()
const router = useRouter()
// 点击退出登陆
const handleCancelLoginBtn = () => {
  store.dispatch('user/logout', true)
}
// 点击折叠菜单
const handleCollapse = value => {
  store.commit('common/setIsCollapse', value)
}
// 点击tag
const handleTag = (item, index) => {
  router.push(item.path)
  store.commit('layout/setCurrentTagIndex', index)
}
// 点击关闭tag
const handleCloseTag = (item, index) => {
  store.commit('common/delRouteTag', index)
}
// 显示鼠标右键菜单
const showMenuWindow = ref(false)
// 点金鼠标右键菜单的index
const showMenuWindowIndex = ref('')
// 鼠标右键菜单位置
const menuPositionData = ref({
  top: 0,
  left: 0
})
// 点击鼠标右键
const openMenu = (e, index) => {
  const { x, y } = e
  menuPositionData.value.left = x + 'px'
  menuPositionData.value.top = y + 'px'
  showMenuWindow.value = true
  showMenuWindowIndex.value = index
}
// 关闭鼠标右键菜单
const closeMenuWindow = () => {
  showMenuWindow.value = false
}
// 监听菜单已经打开,从而监听页面点击，进行关闭菜单
watch(showMenuWindow, (newValue, oldValue) => {
  if (newValue) {
    document.body.addEventListener('click', closeMenuWindow)
  } else {
    document.body.addEventListener('click', closeMenuWindow)
  }
})
</script>

<style lang="scss" scoped>
.home-header {
  .home-header-top-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;

    .breadcrumb-box {
      display: flex;
      align-items: center;

      .collapse-btn-box {
        padding-right: 10px;
        position: relative;
        top: 0.5px;
        cursor: pointer;
      }

      .breadcrumb-item {
        color: red !important;
      }
    }

    .menus-box {
      display: flex;
      align-items: center;

      // 功能图标
      .icon-container {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }

  .home-header-bottom-box {
    .routeTag {
      display: inline-block;
      margin-right: 10px;
      cursor: pointer;

      .el-tag {
        color: #000;
      }

      ::v-deep .el-tag__close {
        color: #000;
      }
    }

    .currentTag {
      .el-tag {
        color: white;
      }

      ::v-deep .el-tag__close {
        color: white;
      }
    }
  }
}
</style>
