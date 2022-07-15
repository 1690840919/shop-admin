export type Response<T = any> = {
  code: number
  success: boolean
  data: T
}
