<template>
  <div class="user-login">
    <el-form>
      <el-form-item class="form-item">
        <el-input size="large">
          <template #prefix>
            <svg-icon class="icon" icon="user" :size="18" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input size="large">
          <template #prefix>
            <svg-icon class="icon" icon="key" :size="18" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item class="form-item">
        <el-input size="large">
          <template #prefix>
            <svg-icon class="icon" icon="lock" :size="18" />
          </template>
          <template #append>
            <span class="login-code">1234</span>
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
