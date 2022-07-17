<template>
  <div class="menu-icon">
    <div class="icon qq">
      <svg-icon type="iconfont" color="rgb(83,164,216)" className="icon-qq" :size="35" />
    </div>
    <div class="icon">
      <svg-icon type="iconfont" color="rgb(113,194,82)" className="icon-weixin-copy" :size="35" />
    </div>
    <div class="icon">
      <svg-icon type="iconfont" color="rgb(199,52,32)" className="icon-weibo1" :size="35" />
    </div>
    <div class="icon">
      <svg-icon type="iconfont" color="rgb(67,159,226)" className="icon-zhifubao1" :size="35" />
    </div>
    <div class="icon">
      <svg-icon type="iconfont" color="rgb(102,102,102)" className="icon-github" :size="35" />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.menu-icon {
  margin-top: 15px;
  text-align: center;

  .icon {
    margin: 0 10px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
