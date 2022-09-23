<template>
	<AMenu
		:class="getClass"
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
		<MenuItemWrapper v-for="(item, index) in items" :key="index" :item="item" />
	</AMenu>
</template>
<script lang="ts">
export default defineComponent({
	name: 'BasicMenu'
})
</script>

<script setup lang="ts">
import { RouteLocationNormalizedLoaded } from 'vue-router'
import MenuItemWrapper from './MenuItemWrapper.vue'
import { basicMenuProps, type MenuState } from '../typing'
import { useOpenKeys } from '../composables'
import { listenerRoute } from '@/utils'

const emits = defineEmits(['menu-click'])
const route = useRoute()
const props = defineProps(basicMenuProps())
const menuState = reactive<MenuState>({
	openKeys: ['dashboard', 'dashboard_analysis'],
	selectedKeys: ['dashboard_analysis_1']
})

const { onOpenChange } = useOpenKeys(menuState)

watch(
	() => props.items,
	() => {
		onMenusChange(route)
	},
	{ deep: true, immediate: true }
)

/**
 * 	点击 MenuItem 调用此函数
 * @param param
 */
const onClickMenu = ({ item, key, keyPath }: { item: any; key: string; keyPath: string[] }) => {
	emits('menu-click', item.itemData, key, keyPath)
	menuState.selectedKeys = [key]
}

/**
 * 当menu数据发生变化时调用
 */
async function onMenusChange(_route?: RouteLocationNormalizedLoaded) {
	if (!route || !route.path) {
		return
	}
}

const getClass = computed(() => {
	return []
})

listenerRoute((route) => {
	console.log('监听到了route:', route)
})

// 暴露值给模板
const { openKeys, selectedKeys } = toRefs(menuState)
</script>

<style scoped lang="scss"></style>
