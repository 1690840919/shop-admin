import { createStore, useStore as oldUseStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
import getters from './getters'
import user from './modules/user'
import { State } from './types/store'

export const store = createStore<State>({
  getters,
  modules: {
    user
  }
})

export const key: InjectionKey<Store<State>> = Symbol('store')
// 包装了一层，所有组件都使用这个useStore
export const useStore = () => {
  return oldUseStore(key)
}
