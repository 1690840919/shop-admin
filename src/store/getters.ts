import { State } from '@/store/types/store'
export default {
  userInfo: (state: State) => state.user.userInfo,
  token: (state: State) => state.user.token,
  language: (state: State) => state.common.language
}
