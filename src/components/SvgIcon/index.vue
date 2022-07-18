<template>
  <div class="svg-icon-container">
    <!-- element-plus-icon图标 -->
    <div
      v-if="type === 'element-plus-icon'"
      class="element-plus-icon"
      :style="{ top: props.top, left: props.left }"
    >
      <el-icon :size="size" :color="color">
        <component :is="props.icon" />
      </el-icon>
    </div>
    <!-- 展示iconfont图标 -->
    <div v-else-if="type === 'iconfont'">
      <i
        class="iconfont"
        :class="props.className"
        :style="{ fontSize: size + 'px', color }"
      ></i>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
const props = defineProps({
  // 图标类型
  type: {
    type: String,
    default: 'element-plus-icon'
  },
  // 图标名称
  icon: {
    type: String
  },
  // 图标className
  className: {
    type: String
  },
  // 图标大小
  size: {
    type: String
  },
  // 图标颜色
  color: {
    type: String
  },
  // left偏移
  left: {
    type: String,
    default: '0px'
  },
  // top偏移
  top: {
    type: String,
    default: '2px'
  }
})
</script>

<style lang="scss" scoped>
.element-plus-icon {
  position: relative;
}
</style>
