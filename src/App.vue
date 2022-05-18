<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Login />
    <h1 class="name">{{ name }}</h1>
  </div>
</template>

<script lang="ts" setup>
import Login from '@/views/Login/index.vue'
const name = 'beitu'
</script>

<style lang="scss">
.app {
  .name {
    color: $bgColor
  }
}
</style>
