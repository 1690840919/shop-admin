<template>
  <div class="chapters-box">
    <el-timeline>
      <el-timeline-item
        v-for="item in chaptersList"
        :key="item.title"
        :timestamp="item.title"
        placement="top"
      >
        <el-card>
          <h4>{{ item.content }}</h4>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
const chaptersList = [
  {
    title: '第一章',
    content: '课程介绍(了解本课程必看)'
  },
  {
    title: '第二章',
    content: '标准化大厂编程规范解决方案之ESLint+GitHooks'
  },
  {
    title: '第三章',
    content: '项目架构之搭建登录架构解决方案与实现'
  },
  {
    title: '第四章',
    content: '项目架构之搭建Layout架构解决方案与实现'
  },
  {
    title: '第五章',
    content: '后台项目前端综合解决方案之通用功能开发'
  }
]
</script>

<style lang="scss" scoped>
.chapters-box{
  margin-top: 20px;
}
h4{
  margin: 0;
}
</style>
