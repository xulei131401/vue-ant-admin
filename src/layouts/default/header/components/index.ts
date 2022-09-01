import { createAsyncComponent } from '@/utils/factory/createAsyncComponent';
import XHeaderLeft from './header/HeaderLeft.vue'
import XHeaderCenter from './header/HeaderCenter.vue'
import XHeaderRight from './header/HeaderRight.vue'

import XFullScreen from './FullScreen.vue';

export const XUserDropdown = createAsyncComponent(() => import('./user-dropdown/index.vue'), {
	loading: true,
});

export const XLayoutBreadcrumb = createAsyncComponent(() => import('./Breadcrumb.vue'));
export { XHeaderLeft, XHeaderCenter, XHeaderRight, XFullScreen };
