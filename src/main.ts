import { createApp } from 'vue'
import App from './App.vue'
// 导入全局样式
import '@/styles/index.scss'
// 导入router
import router from '@/router'
const app = createApp(App)
app
  .use(router)
  .mount('#app')
