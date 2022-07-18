<template>
  <div class="items" :style="menuPositionData">
    <div @click="handleMenuRefresh" class="name">刷新页面</div>
    <div @click="handleMenuCloseOther" class="name">关闭其他</div>
    <div @click="handleMenuCloseAll" class="name">关闭所有</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import { useStore } from '@/store'
const store = useStore()
const props = defineProps({
  // 获取菜单显示的位置
  menuPositionData: {
    type: Object
  },
  // 点击的标签的index
  index: {
    type: Number
  }
})
// 点击菜单的刷新页面
const handleMenuRefresh = () => {
  store.commit('common/setMenuUpdateRouteTag', {
    type: 'refresh',
    index: props.index
  })
}

// 点击菜单的关闭其他
const handleMenuCloseOther = () => {
  store.commit('common/setMenuUpdateRouteTag', {
    type: 'closeOther',
    index: props.index
  })
}
// 点击菜单的关闭所有
const handleMenuCloseAll = () => {
  store.commit('common/setMenuUpdateRouteTag', {
    type: 'closeAll',
    index: props.index
  })
}
</script>

<style lang="scss" scoped>
.items {
  position: fixed;
  width: 80px;
  background-color: white;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 30%);
  z-index: 1111;
  border-radius: 4px;

  .name {
    text-align: center;
    font-size: 12px;
    padding: 10px;
  }

  .name:hover {
    background-color: rgb(234, 234, 234);
  }
}
</style>
