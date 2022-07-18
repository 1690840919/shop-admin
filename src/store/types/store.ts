export interface User {
  userInfo: {
    name: string
    age: number
  }
  token: string
  refreshToken: string
}

export interface Common {
  language: string
}

export interface State {
  user: User
  common: Common
}
