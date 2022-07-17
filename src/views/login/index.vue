<template>
  <div class="login-container">
    <!-- 登陆显示页面时间 -->
    <div class="login-time">
      {{ loginTime }}
    </div>
    <!-- 左边内容 -->
    <div class="left-container">
      <div class="logo">
        <div class="logo-img">
          <img src="img/logo.png" alt="">
        </div>
        <div class="logo-title">
          通用后台管理系统开发
        </div>
      </div>
    </div>
    <!-- 右边内容 -->
    <div class="right-container">
      <div class="login">
        <div class="login-title">
          <div class="text">
            系统登陆
          </div>
          <div class="language-icon">
            <el-dropdown>
              <span class="el-dropdown-link">
                <svg-icon type="iconfont" className="icon-zhongyingwen" :size="30" />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>简体中文</el-dropdown-item>
                  <el-dropdown-item>繁体中文</el-dropdown-item>
                  <el-dropdown-item>English</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
        <div class="login-form-box">
          <user-login v-if="loginForm === 'user'" />
          <phone-login v-else-if="loginForm === 'phone'" />
        </div>
        <div class="login-menu">
          <!-- 选择登陆方式 -->
          <div class="menu-title">
            <span class="text" @click="loginForm = 'user'">账号密码</span>
            <span class="text" @click="loginForm = 'phone'">手机号登陆</span>
          </div>
          <!-- 第三方登陆 -->
          <icon-login />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserLogin from './components/userLogin.vue'
import IconLogin from './components/iconLogin.vue'
import PhoneLogin from './components/phoneLogin.vue'
import { computed, ref } from 'vue'
import { getTime } from '@/utils/time'
const loginTime = computed(() => {
  return getTime(Date.now())
})
const loginForm = ref('user')
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  display: flex;

  // 背景
  &::before {
    display: block;
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 48%;
    bottom: 0;
    background-image: url('img/login-bg.svg');
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: auto 100%;
  }

  /* 登陆时间 */
  .login-time {
    position: fixed;
    top: 30px;
    left: 30px;
    font-size: 20px;
    font-weight: bolder;
    color: white;
  }

  // 左边内容
  .left-container {
    z-index: 10;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
      .logo-img {
        margin: 0 auto;
        width: 200px;
        height: 200px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .logo-title {
        margin-top: 40px;
        font-size: 30px;
        color: white;
        font-weight: bolder;
        letter-spacing: 2px;
      }
    }
  }

  // 右边内容
  .right-container {
    z-index: 10;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .login {
      width: 400px;

      .login-title {
        font-size: 26px;
        font-weight: bolder;
        margin: 30px 0;
        text-align: center;
        letter-spacing: 5px;
        position: relative;

        .language-icon {
          position: absolute;
          right: 0;
          top: 0;
          font-weight: normal;
          cursor: pointer;
        }
      }

      // 表单内容
      .login-form-box {}

      .login-menu {
        margin-top: 30px;

        .menu-title {
          font-size: 12px;
          color: #888;
          display: flex;
          justify-content: center;

          .text {
            margin: 0 10px;
            cursor: pointer;
          }
        }

      }
    }
  }
}
</style>
