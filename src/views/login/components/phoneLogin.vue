<template>
  <div class="phone-login">
    <el-form>
      <el-form-item class="form-item">
        <el-input size="large">
          <template #prefix>
            <svg-icon class="icon" icon="iphone" :size="18" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input size="large">
          <template #prefix>
            <svg-icon class="icon" icon="lock" :size="18" />
          </template>
          <template #append>
            <span class="login-code">获取验证码</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-button class="login-btn" type="primary">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.phone-login {
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
}
</style>
