<template>
	<div :class="getClass">
		<AppLogo v-if="isTopBottomLayoutMode" :theme="getHeaderTheme" />
		<LayoutTriggerSider />
		<LayoutBreadcrumb />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'HeaderLeft'
})
</script>

<script setup lang="ts">
import { AppLogo } from '@/layouts/default/app'
import { LayoutTriggerSider } from '@/layouts/default/trigger'
import { LayoutBreadcrumb } from '@/layouts/default/app'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'
import { useAppConfig } from '@/composables/config/useAppConfig'

const { prefixCls } = usePrefixCls(prefixClsStyle.layoutHeaderLeft)
const { getHeaderTheme } = useHeaderConfig()
const { isTopBottomLayoutMode } = useAppConfig()
const getClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
.#{$prefix-cls-layout-header-left} {
	display: flex;
	height: 100%;
	align-items: center;
}
</style>
