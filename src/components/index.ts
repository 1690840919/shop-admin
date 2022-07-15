import { App, Component } from 'vue'
// 暂时，不知道对不对
interface fileObject {
  [key: string]: { default: Component }
}

export default {
  install(app: App) {
    const AllFiles = import.meta.globEager('./**/index.vue') as fileObject
    for (const path in AllFiles) {
      const Component = AllFiles[path].default
      console.log('path', path)
      // file.split('/')[1] 文件夹名 ===== 组件名
      app.component(path.split('/')[1], Component)
    }
  }
}
