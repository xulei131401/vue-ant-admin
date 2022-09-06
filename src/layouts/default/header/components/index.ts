import { createAsyncComponent } from '@/utils/factory/createAsyncComponent'
import HeaderLeft from './header/HeaderLeft.vue'
import HeaderCenter from './header/HeaderCenter.vue'
import HeaderRight from './header/HeaderRight.vue'
import FullScreen from './FullScreen.vue'

export const UserDropdown = createAsyncComponent(() => import('./user-dropdown/index.vue'), {
	loading: true
})

export const LayoutBreadcrumb = createAsyncComponent(() => import('./Breadcrumb.vue'))
export { HeaderLeft, HeaderCenter, HeaderRight, FullScreen }
