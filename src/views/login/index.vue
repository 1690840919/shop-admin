<template>
  <div class="login-page">
    登陆页面11111
  </div>
</template>

<script setup lang="ts">
import { loginService } from '@/api/user/login'
loginService({
  username: 'admin',
  password: '123456'
}).then(res => {
  console.log(res.data.userInfo.name)
})
</script>

<style scoped>
</style>
