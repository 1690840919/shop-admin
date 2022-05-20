<template>
  <div>
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <h1>{{ score }}</h1>
    <h1 v-for="i in nums" :key="i">{{ i }}</h1>
  </div>
</template>

<script lang="ts" setup>
const name = '登陆页'
const age = 22
const score = 3000
const nums = [1, 2, 3]
</script>

<style>
</style>
