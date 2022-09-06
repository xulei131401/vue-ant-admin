<template>
	<div :class="getHeaderLeftClass">
		<!-- logo -->
		<AppLogo />
		阿斯达斯多
		<LayoutTrigger />
		<LayoutBreadcrumb />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'XHeaderLeft',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { AppLogo } from '@/components/application'
import { useHtmlClass } from '@/composables/web/useHtmlClass'
import LayoutTrigger from '../../../trigger/index.vue'
import { LayoutBreadcrumb } from '../index'
const { prefixCls } = useHtmlClass('layout-header-left')
const getHeaderLeftClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/header/header-left.scss';
</style>
