import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 省略后缀的补充
    extensions: ['.js', '.tx', '.vue', '.jsx', '.tsx', '.json'],
    // 模块路径
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})
