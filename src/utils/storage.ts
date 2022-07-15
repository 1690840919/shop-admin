import { STORAGE_EXPIRE_TIME } from '@/constant'
const Storage = {
  /**
   * 存储数据
   * @param key 键
   * @param value 值
   * @param expire 保存时间，不限期，默认
   */
  setItem(key: string, value: any, expire: number | null = STORAGE_EXPIRE_TIME) {
    const data = JSON.stringify({
      value,
      // null为不限期，undefined为默认储存时间，或者自定义expire时间
      expire: expire == null ? null : new Date().getTime() + expire
    })
    try {
      window.localStorage.setItem(key, data)
    } catch (err) {
      console.log('setItem error', err)
    }
  },
  /**
   * 获取数据
   * @param key 键
   * @returns 根据key返回数据
   */
  getItem(key: string) {
    const dataString = window.localStorage.getItem(key)
    if (dataString) {
      try {
        const data = JSON.parse(dataString)
        const { value, expire } = data
        // 如果没有过期，或者不限期的
        if (expire > Date.now() || expire == null) {
          return value
        }
      } catch (err) {
        return null
      }
    }
    return null
  },
  /**
   * 移除对应key的值
   * @param key 键
   */
  removeItem(key: string) {
    window.localStorage.removeItem(key)
  },
  /**
   * 清除所有内容
   */
  clearItem() {
    window.localStorage.clear()
  }
}

export default Storage
