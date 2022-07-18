<template>
  <div class="personal-page">
    <el-row :gutter="20">
      <el-col :span="5" class="personal-aside">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>介绍</span>
            </div>
          </template>
          <div class="user-info-box">
            <div class="user-avatar-box">
              <el-avatar
                :size="100"
                src="https://img2.baidu.com/it/u=3350630607,1397825411&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
              />
            </div>
            <div class="user-name">
              super-admin
            </div>
            <div class="user-title">
              超级管理员
            </div>
          </div>
          <div class="title-box">
            <svg-icon icon="document"></svg-icon>
            <span class="text">项目介绍</span>
          </div>
          <div class="title-content">
            《vue3+element-plus实现前后端综合案例》项目
          </div>
          <div class="title-box">
            <svg-icon icon="pointer"></svg-icon>
            <span class="text">项目技术</span>
          </div>
          <div class="title-content">
            <div class="item">
              <div class="item-name">
                Vue3+全家桶
              </div>
              <div class="progress-box">
                <el-progress :percentage="100" status="success" />
              </div>
            </div>
            <div class="item">
              <div class="item-name">
                Element-plus
              </div>
              <div class="progress-box">
                <el-progress :percentage="100" status="success" />
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="19" class="personal-main">
        <el-card class="box-card">
          <el-tabs v-model="currentTab" class="demo-tabs">
            <el-tab-pane label="功能" name="first">
              <function />
            </el-tab-pane>
            <el-tab-pane label="章节" name="second">
              <chapters />
            </el-tab-pane>
            <el-tab-pane label="作者" name="third">
              <author />
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Function from './components/function.vue'
import Author from './components/author.vue'
import Chapters from './components/chapters.vue'
import { ref } from 'vue'
const currentTab = ref('first')
</script>

<style lang="scss" scoped>
.personal-page {
  height: 100%;
  .el-card{
    height: calc(100vh - 120px);
  }
  .user-info-box {
    text-align: center;
    .user-avatar-box {
    }
    .user-name {
      font-weight: bolder;
      margin: 10px 0;
    }
    .user-title {
    }
  }
  .title-box {
    border-bottom: 1px solid #eee;
    font-weight: bolder;
    padding-bottom: 10px;
    padding-top: 40px;
    margin-bottom: 10px;
    display: flex;
    .text {
      padding-left: 5px;
      color: rgb(132, 131, 137);
    }
  }
  .title-content {
    color: rgb(132, 131, 137);
    line-height: 28px;
    .item{
      margin: 20px 0;
    }
  }
}
</style>
