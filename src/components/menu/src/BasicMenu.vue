<template>
	<AMenu
		:class="getMenuClass"
		:subMenuOpenDelay="0.2"
		:theme="theme"
		:inlineIndent="inlineIndent"
		:mode="mode"
		:inlineCollapsed="inlineCollapsed"
		v-model:selectedKeys="selectedKeys"
		v-model:openKeys="openKeys"
		@open-change="onOpenChange"
		@click="onClickMenu"
	>
		<template v-for="(value, index) in items" :key="index">
			<MenuItemWrapper :item="value" />
		</template>
	</AMenu>
</template>
<script lang="ts">
export default defineComponent({
	name: 'BasicMenu',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import MenuItemWrapper from './components/MenuItemWrapper.vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import { useHtmlClass } from '@/composables/web/useHtmlClass'
import { basicMenuProps, type MenuState } from './props'
import { useOpenKeys, useSelectedKeys } from './composables/useBasicMenu'

const { prefixCls } = useHtmlClass('basic-menu')
const route = useRoute()
const props = defineProps(basicMenuProps())
const menuState = reactive<MenuState>({
	openKeys: ['dashboard', 'dashboard_analysis'],
	selectedKeys: ['dashboard_analysis_1']
})

const { onOpenChange } = useOpenKeys(menuState)
const { onClickMenu } = useSelectedKeys(menuState)

watch(
	() => props.items,
	() => {
		onMenusChange(route)
	},
	{ deep: true, immediate: true }
)

/**
 * 当menu数据发生变化时调用
 */
async function onMenusChange(_route?: RouteLocationNormalizedLoaded) {
	if (!route || !route.path) {
		return
	}

	// 获取路由path
	console.log('route:', route.path)
}

const getMenuClass = computed(() => {
	return [prefixCls]
})

// 暴露值给模板
const { defaultSelectedKeys, openKeys, selectedKeys } = toRefs(menuState)
</script>

<style scoped lang="scss"></style>
