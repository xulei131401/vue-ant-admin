import { withInstall } from '@/utils'
import appLogo from './src/components/AppLogo.vue'
import appProvider from './src/components/AppProvider.vue'
import appLocalePicker from './src/components/AppLocalePicker.vue'
import appThemeSwitch from './src/components/AppThemeSwitch.vue'

export * from './src/composables/useAppContext'
export const AppLogo = withInstall(appLogo)
export const AppProvider = withInstall(appProvider)
export const AppLocalePicker = withInstall(appLocalePicker)
export const AppThemeSwitch = withInstall(appThemeSwitch)
