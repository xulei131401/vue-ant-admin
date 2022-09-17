<template>
	<div :class="prefixCls">
		<div :class="getDomStyle" v-if="!showSiderAppLogo"></div>
		<AppLogo v-if="showSiderAppLogo" :theme="getTheme" />
		<BasicMenu :items="menusRef" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutMenu'
})
</script>

<script setup lang="ts">
import { AppLogo } from '@/components/application'
import { BasicMenu } from '@/components/menu'
import { usePrefixCls } from '@/composables/core/useHtml'
import { useLayoutMenu } from './composables/useLayoutMenu'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { useAppConfig } from '@/composables/config/useAppConfig'

const { menusRef } = useLayoutMenu()
const { getTheme } = useAppConfig()
const { showSiderAppLogo } = useHeaderConfig()
const { prefixCls } = usePrefixCls('layout-menu')

const getDomStyle = computed(() => {
	return ['fill-dom']
})
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-layout-menu';
.#{$prefix-cls} {
	.fill-dom {
		top: $header-height;
	}
}
</style>
