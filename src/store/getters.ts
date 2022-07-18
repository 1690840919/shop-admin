import { State } from '@/store/types/store'
export default {
  userInfo: (state: State) => state.user.userInfo,
  token: (state: State) => state.user.token,
  language: (state: State) => state.common.language,
  isCollapse: (state: State) => state.common.isCollapse,
  routeTags: (state: State) => state.common.routeTags,
  currentTagIndex: (state: State) => state.common.currentTagIndex
}
