<template>
	<div :class="getClass">
		<div>
			<AppLogo v-if="showSiderAppLogo" :theme="getSiderTheme" />
		</div>
		<BasicMenu :items="menusRef" v-bind="menuProps" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutMenu'
})
</script>

<script setup lang="ts">
import { AppLogo } from '@/layouts/default/app'
import { BasicMenu } from '@/components/menu'
import { layoutMenuProps } from '../typing'
import { useLayoutMenu } from '../composables'
import { Menu } from '@/typing'
import { useSiderConfig } from '@/composables/config/useSiderConfig'
import { useGo } from '@/composables/core/useGo'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.layoutMenu)
const props = defineProps(layoutMenuProps())
const { menusRef } = useLayoutMenu()
const { showSiderAppLogo, getSiderTheme } = useSiderConfig()
const { pushGo } = useGo()

const menuProps = computed(() => {
	return {
		...unref(props),
		onMenuClick: onMenuClick
	}
})

const onMenuClick = (item: Menu) => {
	pushGo(item.routePath)
}

const getClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
.#{$prefix-cls-layout-menu} {
}
</style>
