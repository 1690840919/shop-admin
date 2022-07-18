import { TOKEN_TIMEOUT_VALUE, LOGIN_START_TIME } from '@/constant'
import Storage from '@/utils/storage.js'

// 获取开始登陆的时间戳
export function getLoginStartTime() {
  return Storage.getItem(LOGIN_START_TIME)
}

// 缓存开始登陆的时间戳
export function setLoginStartTime() {
  Storage.setItem(LOGIN_START_TIME, Date.now())
}

// 检测login-token过期
export function isLoginTokenTimeout() {
  // 获取当前的时间戳
  const currentTime = Date.now()
  // 获取开始登陆时间戳
  const startTime = getLoginStartTime()
  // 返回token是否有效
  return currentTime - startTime > TOKEN_TIMEOUT_VALUE
}
