<!-- <template>
	<div class="x-tab-navigation-wrapper">
		<a-tabs v-model:activeKey="currentTabPaneState.activeKey" hide-add type="editable-card" @tabClick="switchPane">
			<a-tab-pane v-for="pane in panes" :key="pane.routeName" :closable="false">
				<template #tab>
					<span>{{ pane.title }}</span>
					<reload-outlined class="tab-pane-icon" v-show="pane.routeName == currentTabPaneState.activeKey" :spin="pane.spin" @click.stop="clickReload(pane)" />
					<close-outlined v-show="tabPaneClosable" class="tab-pane-icon" @click.stop="clickClose(pane.routeName)" />
				</template>
			</a-tab-pane>
			<template #rightExtra>
				<a-dropdown trigger="['click']" placement="bottomRight">
					<ellipsis-outlined :rotate="90" @click.prevent class="tab-dropdown-menu-btn" />
					<template #overlay>
						<a-menu>
							<a-menu-item key="close_other" :disabled="closeOtherDisabled" @click.stop="clickCloseOther"> 关闭其他 </a-menu-item>
							<a-menu-item key="reload_current" @click.stop="clickReloadCurrent"> 刷新当前页 </a-menu-item>
						</a-menu>
					</template>
				</a-dropdown>
			</template>
		</a-tabs>
	</div>
</template>
<script lang="ts">
export default {
	name: 'XTabNavigation'
}
</script>
<script setup lang="ts">
import  { type TabPane, type RouteLocationNormalized } from '@/business/export'
import { emitter, useInjectHelper } from '@/business/export'

const helper = useInjectHelper()
const router = useRouter()
const panes = ref<TabPane[]>([])
const panesMap: Record<string, TabPane> = {}
const tabPaneClosable = ref<boolean>(true)
const closeOtherDisabled = ref<boolean>(false)

type TabPaneState = {
	activeKey: string
}

const currentTabPaneState = reactive<TabPaneState>({
	activeKey: ''
})

onMounted(() => {
	emitter.on('event_click_menu_item', add)

	initTab()
})

onBeforeUnmount(() => {
	emitter.off('event_click_menu_item', add)
})

watch(
	() => panes,
	(newValue) => {
		if (newValue.value.length == 1) {
			tabPaneClosable.value = false
			closeOtherDisabled.value = true
		} else {
			tabPaneClosable.value = true
			closeOtherDisabled.value = false
		}
	},
	{ deep: true }
)

// 通过key匹配pane
const getPaneByKey = (targetKey: string): TabPane | null => {
	for (const [key, pane] of Object.entries(panes.value)) {
		if (pane.routeName === targetKey) {
			return pane
		}
	}

	return null
}

// 删除tab-pane
const remove = (targetKey: string) => {
	if (panes.value.length == 1) {
		return
	}

	const pane: TabPane = panesMap[targetKey]
	let lastIndex = panes.value.indexOf(pane)
	if (lastIndex === -1) {
		return
	}

	panes.value.splice(lastIndex, 1)
	// 同时paneMap也需要移除对应的值
	delete panesMap[targetKey]

	// 需要考虑删除完之后显示哪一个tab-pane
	const newActiveKey = lastIndex - 1 < 0 ? panes.value[panes.value.length - 1].routeName : panes.value[lastIndex - 1].routeName
	switchPane(newActiveKey)
}

// 添加tab-pane
const add = (tab: TabPane) => {
	const key = tab.routeName
	if (typeof panesMap[tab.routeName] !== 'undefined') {
		currentTabPaneState.activeKey = tab.routeName
		return
	}

	tab.spin = false
	panes.value.push(tab)
	panesMap[key] = tab
	currentTabPaneState.activeKey = tab.routeName
}

const switchPane = (targetKey: string) => {
	helper.log('targetKey:', targetKey)
	if (currentTabPaneState.activeKey == targetKey) {
		return
	}

	const pane: TabPane | null = getPaneByKey(targetKey)
	if (pane) {
		currentTabPaneState.activeKey = pane.routeName
		router.push({ name: pane.routeName })
	}
}

const clickReload = (pane: TabPane) => {
	pane.spin = true
	setTimeout(() => {
		pane.spin = false
	}, 1000)
}

const clickClose = (targetKey: string) => {
	remove(targetKey)
}

const clickCloseOther = () => {}

const clickReloadCurrent = () => {}

// 初始化
const initTab = () => {
	const to: RouteLocationNormalized = toRaw(router).currentRoute.value as RouteLocationNormalized
	// helper.log('router:', to)
	const { meta, name } = to
	const routeName = to.name?.toString() ?? ''
	// helper.log('meta.title:', meta.title, routeName)
	if (!!meta.title && routeName) {
		emitter.emit('event_click_menu_item', {
			title: meta.title,
			routeName: routeName
		})
	}
}
</script>

<style scoped lang="scss">
.x-tab-navigation-wrapper {
	margin: 1px;
	padding-top: 6px;
	width: 100%;
	background: #fff;
}

.dropdownBtn {
	margin-right: 8px;
	font-size: 16px;
	cursor: pointer;
	width: 100%;
	height: 100%;
}

.tab-pane-icon {
	margin-right: 0;
	margin-left: 8px;
	color: rgba(0, 0, 0, 0.45);
	font-size: 12px;
}

.tab-dropdown-menu-btn {
	margin-right: 8px;
	padding: 12px;
	font-size: 16px;
	cursor: pointer;
}
</style> -->
