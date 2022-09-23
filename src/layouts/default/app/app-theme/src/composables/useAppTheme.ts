import { useAppConfig } from '@/composables/config/useAppConfig'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { useMenuConfig } from '@/composables/config/useMenuConfig'
import { Theme } from '@/enums'

export function useAppTheme() {
	const { isDarkTheme, isLightTheme, setTheme } = useAppConfig()
	const { setHeaderTheme } = useHeaderConfig()
	const { setMenuTheme } = useMenuConfig()

	const switchTheme = () => {
		if (unref(isDarkTheme)) {
			setTheme(Theme.LIGHT)
			setHeaderTheme(Theme.LIGHT)
			setMenuTheme(Theme.LIGHT)
		} else if (unref(isLightTheme)) {
			setTheme(Theme.DARK)
			setHeaderTheme(Theme.DARK)
			setMenuTheme(Theme.DARK)
		}
	}

	return { switchTheme }
}
