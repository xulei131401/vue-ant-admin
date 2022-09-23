import { MenuMode, LayoutMode } from '@/enums'
import { useAppStore } from '@/store/app'
import { useI18nT } from '@/composables/core/useI18n'
import { LayoutModeItem } from '../typing'

export function useLayoutMode() {
	const { t } = useI18nT()
	const appStore = useAppStore()

	const LayoutModeList: LayoutModeItem[] = [
		{
			title: t('layout.mode.topBottomLayout'),
			menuMode: MenuMode.INLINE,
			mode: LayoutMode.TOP_BOTTOM_LAYOUT
		},
		{
			title: t('layout.mode.leftRightLayout'),
			menuMode: MenuMode.INLINE,
			mode: LayoutMode.LEFT_RIGHT_LAYOUT
		}
	]

	const onClickLayoutMode = (item: LayoutModeItem) => {
		appStore.setAppConfig({ layout: { mode: item.mode } })
	}

	return { LayoutModeList, onClickLayoutMode }
}
