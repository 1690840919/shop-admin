export interface User {
  userInfo: {
    name: string
    age: number
  }
  token: string
  refreshToken: string
}

export interface RouteTag {
  path: string
  title: string
}

export interface Common {
  language: string
  isCollapse: Boolean
  routeTags: Array<RouteTag>
  currentTagIndex: number
}

export interface State {
  user: User
  common: Common
}
