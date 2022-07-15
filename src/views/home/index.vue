<template>
  <div class="home-page">
    {{ $store.state.user.userInfo.name }}
    <Home />
  </div>
</template>

<script setup lang="ts">
// 红线是因为vscode打开了多个项目
// import { useStore } from '@/store'
// const store = useStore()
// console.log('store', store.state.user.userInfo)
</script>

<style scoped>
</style>
