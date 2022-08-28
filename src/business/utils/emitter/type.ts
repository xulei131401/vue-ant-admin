import type { TabPane } from '@/business/menu/tabPane'

// 定义所有的跨组件调用事件
type Events = {
	event_fold_sider: boolean
	event_click_menu_item: TabPane
	event_click_tab_navigation: TabPane
};

export type { Events }
