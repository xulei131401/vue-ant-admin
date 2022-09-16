import { i18n } from '@/plugins/vue-i18n-plugin'
import type { ComposerTranslation } from 'vue-i18n'

/**
 * 为了组件外使用useI18n()，特殊处理t
 * @returns
 */
export function useI18nT() {
	const t: ComposerTranslation = i18n.global.t
	return { t }
}
