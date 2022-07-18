import Storage from '@/utils/storage'
import { LANGUAGE } from '@/constant'
import { Common } from '../types/store'
import router from '@/router'
import { RouteTag } from '@/store/types/store'
export default {
  namespaced: true,
  state: () => ({
    // 项目语言
    language: Storage.getItem(LANGUAGE) || 'zh',
    // 菜单折叠
    isCollapse: false,
    // 菜单标签数组
    routeTags: [],
    // 当前菜单标签index
    currentTagIndex: 0
  }),
  mutations: {
    // 设置语言
    setLanguage(state: Common, value: string) {
      state.language = value
      Storage.setItem(LANGUAGE, value)
    },
    // 设置菜单折叠
    setIsCollapse(state: Common, value: Boolean) {
      state.isCollapse = value
    },
    // 设置路由tags
    addRouteTag(state: Common, tag: RouteTag) {
      // 查看页面是否已经打开，存在了tag
      const tagIndex = state.routeTags.findIndex(item => {
        return item.path === tag.path
      })
      if (tagIndex === -1) {
        // 如果页面不存在tag，添加tag
        state.routeTags.push(tag)
        // 更新为当前页面tag的index
        state.currentTagIndex = state.routeTags.length - 1
      } else {
        // 页面已经打开过，更新为当前tag的index
        state.currentTagIndex = tagIndex
      }
    },
    // 删除路由tags
    delRouteTag(state: Common, index: number) {
      // 删除当前路由tag
      state.routeTags.splice(index, 1)
      // 删除的不是当前点亮的tag
      if (index !== state.currentTagIndex) {
        if (index < state.currentTagIndex) {
          // 删除的是当前tag前面的tag, 前面少了一个额，需要-1
          state.currentTagIndex = state.currentTagIndex - 1
        }
        // 删除的是当前tag后面的tag，位置没变，不用做什么
        return
      }
      // 删除的是当前的tag, 点亮tag变为最后一个
      state.currentTagIndex = state.routeTags.length - 1
      // 当前页面tag已经删除，需要更新页面
      if (state.currentTagIndex >= 0) {
        // 当前点亮的有效，跳转到点亮的tag页面
        router.push(state.routeTags[state.currentTagIndex].path)
      } else {
        // tag都被删除了，跳转到默认个人中心
        router.push('/personal')
      }
    },
    // 设置当前tag的index
    setCurrentTagIndex(state: Common, index: number) {
      state.currentTagIndex = index
    },
    // 点击刷新、关闭所有，关闭其他, 退出登陆
    setMenuUpdateRouteTag(state: Common, data: any) {
      const { type, index } = data
      if (type === 'refresh') {
        // 点击的是刷新页面
        // 并没有刷新效果
        router.push(state.routeTags[index].path)
      } else if (type === 'closeOther') {
        // 点击的是关闭其他
        const tag = state.routeTags[index]
        state.routeTags = [tag]
        state.currentTagIndex = 0
        router.push(tag.path)
        // 点击的是关闭所有
      } else if (type === 'closeAll') {
        state.routeTags = []
        state.currentTagIndex = 0
        // 跳到默认个人中心
        router.push('/personal')
        // 点击的是退出登陆
      } else if (type === 'logout') {
        state.routeTags = []
        state.currentTagIndex = 0
      }
    }
  },
  actions: {

  }
}
