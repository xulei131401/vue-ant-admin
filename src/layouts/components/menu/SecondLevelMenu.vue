<template>
	<div class="x-second-level-menu-wrapper">
		<!--菜单部分-->
		<a-menu v-model:selectedKeys="menuState.selectedKeys" v-model:openKeys="menuState.openKeys" @openChange="onOpenChange" @select="onSelectMenu" theme="dark" mode="inline">
			<!-- 如果children为空，那么就渲染menu-item -->
			<template v-for="(menu, menuKey) in menuList" :key="menu.identify">
				<template v-if="menu.isChildrenEmpty()">
					<a-menu-item :key="menu.identify" :data-item="menu">
						<template #icon>
							<component :is="$antIcons[menu.icon]" />
						</template>
						<span>{{ menu.title }}</span>
					</a-menu-item>
				</template>
				<template v-else>
					<a-sub-menu v-model:key="menu.identify">
						<template #icon>
							<component :is="$antIcons[menu.icon]" />
						</template>
						<template #title>{{ menu.title }}</template>
						<a-menu-item :key="subMenu.identify" v-for="(subMenu, subMenuKey) in menu.children" :data-menu="subMenu">
							<template #icon>
								<component :is="$antIcons[subMenu.icon]" />
							</template>
							<span>{{ subMenu.title }}</span>
						</a-menu-item>
					</a-sub-menu>
				</template>
			</template>
		</a-menu>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'XSecondLevelMenu',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { emitter, useMainStore, Menu, getMenuInfoByRouteName, useInjectHelper } from '@/business/export'
import type { RouteRecordName } from '@/business/export'

const helper = useInjectHelper()
const route = useRoute()
const router = useRouter()
const mainStore = useMainStore()
const { menuList } = storeToRefs(mainStore)

type MenuState = {
	selectedKeys: Array<string>
	openKeys: Array<string>
}

const menuState = reactive<MenuState>({
	selectedKeys: [],
	openKeys: ['dashboard']
})

onMounted(() => {
	setMenuState(route.name!)
})

watch(
	() => route.name,
	(newValue) => {
		setMenuState(newValue!)
	}
)

const onOpenChange = (openKeys: string[]) => {
	helper.log('openKeys:', openKeys)
}

const onSelectMenu = (item: any) => {
	helper.log('onSelectMenu:', item)

	helper.log('menuState前:', menuState)
	openOneKeys(menuState.openKeys)
	helper.log('menuState后:', menuState)
	const dataMenu = item.item['data-menu'] as Menu

	// 添加路由
	emitter.emit('event_click_menu_item', {
		title: dataMenu.title,
		routeName: dataMenu.routeName
	})

	// 路由跳转
	router.push({ name: dataMenu.routeName })
}

const openOneKeys = (openKeys: string[]) => {
	if (openKeys.length === 0) {
		return
	}

	if (openKeys.length === 1) {
		menuState.openKeys = openKeys
		return
	}

	const lastKey = openKeys[openKeys.length - 1]
	menuState.openKeys = [lastKey]
}

// 初始化设置菜单的展开状态
const setMenuState = (routeName: RouteRecordName) => {
	const _routeName = routeName as string
	if (!_routeName) {
		return
	}

	const { currentMenu, parentMenu } = getMenuInfoByRouteName(_routeName)
	// helper.log('routeName:', currentMenu, parentMenu)

	if (parentMenu) {
		menuState.openKeys = [parentMenu.routeName]
	}

	menuState.selectedKeys = [_routeName]
}
</script>

<style scoped lang="scss"></style>
