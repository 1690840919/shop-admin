<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <svg-icon type="iconfont" className="icon-zhongyingwen" :size="30" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleChangeLanguage('zh')">
          {{ $t('msg.common.commonLanguageZh') }}
        </el-dropdown-item>
        <el-dropdown-item @click="handleChangeLanguage('en')">
          {{ $t('msg.common.commonLanguageEn') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { useStore } from '@/store'
import { useI18n } from 'vue-i18n'
const store = useStore()
const i18n = useI18n()
// 切换语言
const handleChangeLanguage = (value: string) => {
  store.commit('common/setLanguage', value)
  i18n.locale.value = value
  ElMessage.success(i18n.t('msg.common.commonChangeSuccess'))
}
</script>

<style lang="scss" scoped>
</style>
