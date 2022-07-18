import axios, { AxiosRequestConfig } from 'axios'
import { store } from '@/store'
import { ElMessage } from 'element-plus'
import { isLoginTokenTimeout } from '@/utils/tokenCheck'
import router from '@/router'
// 正在刷新token
let isRefreshToken = false
// token过期后，请求存储
let requestList: Function[] = []
const service = axios.create({
  baseURL: 'https://www.fastmock.site/mock/3388614e459bfd040e97bce422f05c57/api',
  timeout: 6000
})
// 请求拦截
service.interceptors.request.use(
  (config: any) => {
    // 已经登陆
    if (store.getters.token) {
      // 登陆用户，配置token
      config.headers.Authorization = store.getters.token
      // 请求前，主动检测token是否过期
      if (isLoginTokenTimeout()) {
        // token过期退出登陆
        store.dispatch('user/logout')
        return Promise.reject(new Error('token过期'))
      }
    }
    return config
  },
  (error) => {
    // 请求发生报错提示
    ElMessage.error(error.message)
    Promise.reject(error)
  })
// 响应拦截
service.interceptors.response.use(
  (response) => {
    // 状态码200进入这里，剩下的跟后端约定
    // console.log('response 结果', response)
    const { data, message, success } = response.data
    // 自定义状态success
    if (success) {
      // 请求成功，返回对应数据
      return data
    } else {
      // 请求失败，返回对应的错误信息
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  async (error) => {
    // 状态超出200为2xx进入这里
    if (error.response) { // 请求收到响应，状态码超出2xx
      // 获取当前的状态码
      const { status } = error.response
      // 对应的状态码处理
      if (status === 400) {
        ElMessage.error('请求参数错误')
      } else if (status === 401) {
        ElMessage.error('Token无效、过期，请重新登陆')
        // 1、不存在token，直接跳转登陆页
        const { token, refreshToken } = store.state.user
        if (!token) {
          router.push({
            name: 'login',
            query: {
              redirect: router.currentRoute.value.fullPath
            }
          })
          return Promise.reject(new Error(error.message))
        }
        // 2、存在token，进行刷新token
        if (!isRefreshToken) {
          isRefreshToken = true
          await axios.create()({
            method: 'POST',
            url: 'http://localhost:7000/api',
            data: {
              refreshToken
            }
          })
            .then((data: any) => {
              // console.log('刷新token成功')
              // 刷新token成功,保存新的token
              store.commit('/user/setToken', data.token)
              // 重发数组存起来的请求
              requestList.forEach(cb => cb())
              // 清空请求数组
              requestList = []
              // 重发当次请求
              return request(error.config)
            })
            .catch(() => {
              // 刷新token失败，跳转登录页
              router.push({
                name: 'login',
                query: {
                  redirect: router.currentRoute.value.fullPath
                }
              })
              // 清除原有的信息
              store.commit('user/setUserInfo', null)
              store.commit('user/setToken', null)
              // console.log('刷新token失败')
              return Promise.reject(new Error(error.message))
            })
            .finally(() => {
              isRefreshToken = false
            })
        }
        // 刷新状态下，把请求挂起，存放数组中
        return new Promise(resolve => {
          requestList.push(() => {
            resolve(request(error.config))
          })
        })
      } else if (status === 403) {
        ElMessage.error('权限不足，请联系管理员')
      } else if (status === 404) {
        ElMessage.error('请求资源不存在')
      } else if (status >= 500) {
        ElMessage.error('服务端错误，请联系管理员')
      }
    } else if (error.request) { // 请求没有收到响应
      ElMessage.error('请求超时，请重试！')
    } else { // 请求发生错误
      ElMessage.error(`请求失败：${error.message}`)
    }
    return Promise.reject(new Error(error.message))
  })

// 二次封装处理
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return service(config).then((res: any) => {
    return res
  })
}
export default request
