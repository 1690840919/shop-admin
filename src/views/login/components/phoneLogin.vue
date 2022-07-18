<template>
  <div class="phone-login">
    <el-form>
      <!-- 手机号码 -->
      <el-form-item class="form-item">
        <el-input
          :placeholder="$t('msg.login.placeholderPhone')"
          v-model="loginFormData.phone"
          size="large"
        >
          <template #prefix>
            <svg-icon class="icon" icon="iphone" :size="18" />
          </template>
        </el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item class="form-item">
        <el-input
          :placeholder="$t('msg.login.placeholderCode')"
          v-model="loginFormData.code"
          size="large"
        >
          <template #prefix>
            <svg-icon class="icon" icon="lock" :size="18" />
          </template>
          <template #append>
            <span class="login-code">
              {{ $t('msg.login.getPhoneCode') }}
            </span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-button class="login-btn" type="primary">
          {{ $t('msg.login.loginBtn') }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
// 登陆表单
const loginFormData = reactive({
  phone: '13411782971',
  code: '1234'
})
</script>

<style lang="scss" scoped>
.phone-login {
  .login-btn {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }

  // 获取验证码按钮
  .login-code {
    cursor: pointer;
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
}
</style>
