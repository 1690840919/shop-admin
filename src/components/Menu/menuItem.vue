<template>
  <div>
    <!-- 遍历所有菜单 -->
    <template v-for="item in props.data">
      <!-- 存在子菜单的 -->
      <el-sub-menu
        :key="item.id"
        v-if="item[props.children]"
        :index="item[props.path]"
      >
        <template #title>
          <span class="icon-box">
            <svg-icon :size="20" :icon="item[props.icon]" />
          </span>
          <span>{{ item[props.name] }}</span>
        </template>
        <!-- 子菜单 -->
        <menu-item
          :data="item[props.children]"
          :name="props.name"
          :path="props.path"
          :icon="props.icon"
          :children="props.children"
        />
      </el-sub-menu>
      <!-- 不存在子菜单的 -->
      <el-menu-item :key="item.id" v-else :index="item[props.path]">
        <span class="icon-box">
          <svg-icon :size="20" :icon="item[props.icon]" />
        </span>
        <!-- template是为了折叠后能够显示菜单名提示 -->
        <template #title>
          <span>{{ item[props.name] }}</span>
        </template>
      </el-menu-item>
    </template>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './menuItem.vue'
const props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array,
    required: true
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
</script>

<style lang="scss" scoped>
.icon-box {
  padding: 0 15px 0 0px;
  display: inline-block;
}
</style>
