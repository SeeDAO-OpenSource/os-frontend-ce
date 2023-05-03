import { createI18n } from "vue-i18n"
import zh_CN from "../locales/zh_CN.json"
import en_US from "../locales/en_US.json"
export const CACHE_LOCALE = 'UserLocale'
type MessageSchema = typeof zh_CN

let locale = localStorage.getItem(CACHE_LOCALE)
if(!locale)
{
    locale = 'zh_CN'
    localStorage.setItem(CACHE_LOCALE, locale)
}

export default createI18n<[MessageSchema], 'zh_CN' | 'en_US'>({
    legacy: false,
    locale,
    silentTranslationWarn: true,
    fallbackLocale: 'zh_CN',
    globalInjection: true,
    messages: {
        'zh_CN': zh_CN,
        'en_US': en_US
    }
})