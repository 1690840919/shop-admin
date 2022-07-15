import request from '../request'
import type { UserInfo, loginServiceData } from '../types/login'
import { Response } from '../types/request'
// 用户登陆
// 接收登陆表单数据类型
export const loginService = (data: loginServiceData) => {
  // 传入返回的基本数据类型、用户信息类型
  return request<Response<UserInfo>>({
    url: '/login',
    method: 'post',
    data
  })
}
