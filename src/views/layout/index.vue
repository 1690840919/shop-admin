<template>
  <div class="home-container">
    <el-container>
      <!-- 左边aside -->
      <el-aside
        class="home-aside"
        :width="$store.getters.isCollapse ? '60px' : '200px'"
      >
        <home-aside />
      </el-aside>
      <el-container>
        <!-- 右边上部header -->
        <el-header height="80px" class="home-header">
          <home-header />
        </el-header>
        <!-- 右下主要内容main -->
        <el-main class="home-main">
          <home-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HomeAside from './components/homeAside/index.vue'
import HomeHeader from './components/homeHeader/index.vue'
import HomeMain from './components/homeMain/index.vue'
</script>

<style lang="scss" scoped>
.home-container {
  .home-aside {
    overflow: hidden;
    transition: width 0.7s;
    height: 100vh;
    background: rgb(53, 59, 65);
  }

  .home-header {
    width: 100%;
  }

  .home-main {
    height: calc(100vh - 80px);
    background-color: rgb(244, 244, 244);
  }

}
</style>
