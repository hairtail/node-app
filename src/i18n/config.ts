import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { AVAILABLE_LANGUAGES } from '../utils/languages'
import enTranslation from './en/translation'
import zhTranslation from './zh/translation'

export const resources = {
  en: {
    translation: enTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
} as const

i18n.use(initReactI18next).init({
  lng: AVAILABLE_LANGUAGES.en.code,
  fallbackLng: AVAILABLE_LANGUAGES.en.code,
  resources,
})
