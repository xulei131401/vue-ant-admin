import { createAsyncComponent } from '@/utils/factory/createAsyncComponent'
import FullScreen from './full-screen/FullScreen.vue'

export const UserDropdown = createAsyncComponent(() => import('./user-dropdown/index.vue'), {
	loading: true
})

export const LayoutBreadcrumb = createAsyncComponent(() => import('./breadcrumb/Breadcrumb.vue'))
export * from './header'
export { FullScreen }
