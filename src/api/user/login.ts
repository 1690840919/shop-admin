import request from '../request'
import type { loginResultData, loginFormData } from '../types/login'
// 用户登陆
// 接收登陆表单数据类型
export const loginService = (data: loginFormData) => {
  // 传入返回的基本数据类型、用户信息类型
  return request<loginResultData>({
    url: '/login',
    method: 'post',
    data
  })
}
