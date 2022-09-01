import { withInstall } from '@/utils'
import appLogo from './src/AppLogo.vue'
import appProvider from './src/AppProvider.vue'
export * from './src/useAppContext'
export const XAppLogo = withInstall(appLogo)
export const XAppProvider = withInstall(appProvider)
