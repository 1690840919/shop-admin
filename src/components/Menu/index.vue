<template>
  <div class="menu-container">
    <el-menu
      background-color="rgb(53,59,65)"
      text-color="white"
      active-text-color="blue"
      :default-active="props.defaultActive"
      :router="props.router"
      :collapse="props.collapse"
      :collapse-transition="false"
    >
      <menu-item
        :data="props.data"
        :name="props.name"
        :path="props.path"
        :icon="props.icon"
        :children="props.children"
      />
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import MenuItem from './menuItem.vue'
import { watch, defineProps, defineEmits } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array,
    required: true
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否展开路由
  collapse: {
    type: Boolean,
    default: false
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false
  },
  // 菜单标题的键名--防止后端返回的名字不一样
  name: {
    type: String,
    default: 'name'
  },
  // 菜单路由的键名--防止后端返回的名字不一样
  path: {
    type: String,
    default: 'path'
  },
  // 菜单图标的键名--防止后端返回的名字不一样
  icon: {
    type: String,
    default: 'icon'
  },
  // 菜单子菜单的键名--防止后端返回的名字不一样
  children: {
    type: String,
    default: 'children'
  }
})
const emits = defineEmits(['change'])
// 监听路由变化，执行回调函数
watch(
  route,
  () => {
    emits('change', route)
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.menu-container {
}
</style>
