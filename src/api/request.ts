import axios, { AxiosRequestConfig } from 'axios'
const service = axios.create({
  baseURL: 'https://www.fastmock.site/mock/3388614e459bfd040e97bce422f05c57/api',
  timeout: 6000
})
// 请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  })
// 响应拦截
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    Promise.reject(error)
  })

// 二次封装处理
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  return service(config).then(res => {
    return res.data
  })
}
export default request
