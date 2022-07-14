/* eslint-disable no-unused-vars */
// vuex.d.ts
import { Store } from 'vuex'
// 导入自己对应的 Store 数据类型
import { State } from '@/store/types/store'
declare module '@vue/runtime-core' {
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
