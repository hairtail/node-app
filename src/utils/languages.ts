export type SupportedLanguagesType = 'en' | 'zh'

export type LanguageOptionType = {
  name: string
  code: SupportedLanguagesType
}

export const AVAILABLE_LANGUAGES: {
  [key in SupportedLanguagesType]: LanguageOptionType
} = {
  en: {
    name: 'English',
    code: 'en',
  },
  zh: {
    name: '简体中文',
    code: 'zh',
  },
} as const
