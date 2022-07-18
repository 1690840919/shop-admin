<template>
  <div class="user-login">
    <el-form ref="loginFormRef" :model="loginFormData" :rules="loginRules">
      <!-- 用户名 -->
      <el-form-item class="form-item" prop="username">
        <el-input
          :placeholder="$t('msg.login.placeholderUsername')"
          v-model="loginFormData.username"
          size="large"
        >
          <template #prefix>
            <svg-icon class="icon" icon="user" :size="18" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item class="form-item" prop="password">
        <el-input
          :placeholder="$t('msg.login.placeholderPassword')"
          v-model="loginFormData.password"
          size="large"
        >
          <template #prefix>
            <svg-icon class="icon" icon="key" :size="18" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item class="form-item" prop="code">
        <el-input
          :placeholder="$t('msg.login.placeholderCode')"
          v-model="loginFormData.code"
          size="large"
        >
          <template #prefix>
            <svg-icon class="icon" icon="lock" :size="18" />
          </template>
          <template #append>
            <span class="login-code">1234</span>
          </template>
        </el-input>
      </el-form-item>
      <!-- 登陆按钮 -->
      <el-form-item class="form-item">
        <el-button @click="handleLoginBtn" class="login-btn" type="primary">
          {{ $t('msg.login.loginBtn') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useStore } from '@/store'
import { validatePassword } from '@/utils/validate'
import { ElLoading } from 'element-plus'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
// 登陆表单
const loginFormData = reactive({
  username: 'admin',
  password: '123456',
  code: '1234',
  // 登陆类型-账号密码登陆
  type: 'user',
  // 重定向位置
  redirect: route.query.redirect
})
// 登陆校验
const loginRules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 5, max: 12, message: '请输入5-12位用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 8, message: '请输入6-8位密码', trigger: 'blur' },
    { trigger: 'blur', validator: validatePassword() } // 自定义校验
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { min: 4, max: 4, message: '请输入4位验证码', trigger: 'blur' }
  ]
})
const loginFormRef = ref(null)
// 点击登陆
const handleLoginBtn = () => {
  loginFormRef.value.validate(result => {
    // 验证不通过
    if (!result) return
    // 验证通过，登陆中
    const loading = ElLoading.service({
      lock: true,
      text: '登陆中',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    store
      .dispatch('user/login', loginFormData)
      .then(res => {})
      .catch(err => {
        console.log('登陆失败', err)
      })
      .finally(() => {
        // 最终都关闭加载状态
        loading.close()
      })
  })
}
</script>

<style lang="scss" scoped>
.user-login {
  .login-btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }

  .form-item {
    margin-bottom: 25px;

    .icon {
      position: relative;
      left: -2px;
      top: 4px;
    }
  }

  .input {
    line-height: 40px;
  }

  .login-code {
    letter-spacing: 6px;
    font-size: 20px;
  }
}
</style>
