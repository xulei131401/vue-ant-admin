import { MenuModeEnum, type MenuMode } from '@/enums/menuEnum'
import { LayoutModeEnum, type LayoutMode } from '@/enums/layoutEnum'
import { useAppConfig } from '@/composables/config/useAppConfig'
import { useAppStore } from '@/store/modules/app'
import { useI18nT } from '@/composables/core/useI18n'
const { t } = useI18nT()

export type LayoutModeItem = {
	title: string
	mode: LayoutMode
	menuMode: MenuMode
}

export const LayoutModeList: LayoutModeItem[] = [
	{
		title: t('layout.mode.topBottomLayout'),
		menuMode: MenuModeEnum.INLINE,
		mode: LayoutModeEnum.TOP_BOTTOM_LAYOUT
	},
	{
		title: t('layout.mode.leftRightLayout'),
		menuMode: MenuModeEnum.INLINE,
		mode: LayoutModeEnum.LEFT_RIGHT_LAYOUT
	}
]

export function useLayoutMode() {
	const { getLayoutMode } = useAppConfig()
	const appStore = useAppStore()

	const onClickLayoutMode = (item: LayoutModeItem) => {
		appStore.setAppConfig({ layout: { mode: item.mode } })
	}

	return { LayoutModeList, getLayoutMode, onClickLayoutMode }
}
