export interface User {
  userInfo: {
    name: string
    age: number
  }
  token: string
}

export interface State {
  user: User
}
