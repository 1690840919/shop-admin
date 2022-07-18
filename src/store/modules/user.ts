import { User } from '../types/store'
import { UserInfo } from '@/api/types/login'
import Storage from '@/utils/storage'
import { SHOP_USER_INFO, SHOP_USER_TOKEN } from '@/constant'
import { loginService } from '@/api/user/login'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { setLoginStartTime } from '@/utils/tokenCheck'
export default {
  namespaced: true,
  state: () => ({
    userInfo: Storage.getItem(SHOP_USER_INFO) || null,
    token: Storage.getItem(SHOP_USER_TOKEN) || null
  }),
  mutations: {
    // 设置用户信息
    setUserInfo(state: User, data: UserInfo) {
      state.userInfo = data
      Storage.setItem(SHOP_USER_INFO, data)
    },
    // 设置用户token
    setToken(state: User, data: string) {
      state.token = data
      Storage.setItem(SHOP_USER_TOKEN, data)
    }
  },
  actions: {
    // 进行登陆
    login({ commit }, data: any) {
      if (data.type === 'user') {
        // 账号密码登陆
        const { username, password, code, redirect } = data
        return new Promise((resolve, reject) => {
          loginService({
            username,
            // 按道理密码需要加密传输
            password,
            code
          }).then(res => {
            const { token, userInfo } = res
            commit('setUserInfo', userInfo)
            commit('setToken', token)
            // 缓存登陆开始时间-检测token使用
            setLoginStartTime()
            // 跳转来源或者主页
            router.push(redirect || '/')
            ElMessage.success('登陆成功')
            resolve(res)
          }).catch(err => {
            reject(err)
          })
        })
      } else if (data.type === 'phone') {
        // 手机号码登陆
        const { phone, code } = data
        console.log(phone, code)
      }
    },
    // 退出登陆
    logout({ commit }, showMessage: Boolean) {
      commit('setUserInfo', null)
      commit('setToken', null)
      router.push('/login')
      showMessage && ElMessage.success('退出成功')
    }
  }
}
