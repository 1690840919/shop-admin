import { createI18n } from 'vue-i18n'
import zhLocale from './language/zh'
import enLocale from './language/en'
import Storage from '@/utils/storage.js'
import { LANGUAGE } from '@/constant'
const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
}

const locale = Storage.getItem(LANGUAGE) || 'zh'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages
})

export default i18n
