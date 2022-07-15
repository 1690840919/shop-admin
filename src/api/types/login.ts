// 登陆表单
export interface loginServiceData {
  username: string
  password: string
}
// 用户信息
export interface UserInfo {
  token: string
  userInfo: {
    name: string
    age: number
  }
}
