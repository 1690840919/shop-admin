import { createApp } from 'vue'
import App from './App.vue'
// 导入全局样式
import '@/styles/index.scss'
// 导入router
import router from '@/router'
// 导入vuex
import { store, key } from '@/store'
// 引入element-plus
import ElementPlus from '@/plugins/elementPlus/index'
// 引入element-plus-icon
import ElementPlusIcon from '@/plugins/elementPlusIcon/index'
// 导入全局组件
import AllComponent from '@/components'
const app = createApp(App)
app
  .use(router)
  .use(store, key)
  .use(ElementPlus)
  .use(ElementPlusIcon)
  .use(AllComponent)
  .mount('#app')
