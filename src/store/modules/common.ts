import Storage from '@/utils/storage'
import { LANGUAGE } from '@/constant'
import { Common } from '../types/store'
export default {
  namespaced: true,
  state: () => ({
    language: Storage.getItem(LANGUAGE) || 'zh'
  }),
  mutations: {
    // 设置语言
    setLanguage(state: Common, value: string) {
      state.language = value
      Storage.setItem(LANGUAGE, value)
    }
  },
  actions: {

  }
}
