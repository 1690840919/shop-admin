import { createApp } from 'vue'
import App from './App.vue'
// 导入全局样式
import '@/styles/index.scss'
// 导入router
import router from '@/router'
// 导入vuex
import { store, key } from '@/store'
const app = createApp(App)
app
  .use(router)
  .use(store, key)
  .mount('#app')
