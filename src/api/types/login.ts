// 登陆表单
export interface loginFormData {
  username: string
  password: string
  code: string
}
// 用户信息
export interface UserInfo {
  name: string
  age: number
}

// 登陆返回的信息
export interface loginResultData {
  token: string
  userInfo: UserInfo
}
