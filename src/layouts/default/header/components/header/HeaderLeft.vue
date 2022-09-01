<template>
	<div :class="getHeaderLeftClass">
		<!-- logo -->
		<XAppLogo />
		<XLayoutTrigger />
		<XLayoutBreadcrumb />
	</div>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XHeaderLeft',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import {XAppLogo} from '@/components/application'
	import {useHtmlClass} from '@/composables/web/useHtmlClass'
	import XLayoutTrigger from '../../../trigger/index.vue'
	import {XLayoutBreadcrumb} from '../index'
	const {prefixCls} = useHtmlClass('layout-header-left')
	const getHeaderLeftClass = computed(() => {
		return [prefixCls]
	})
</script>

<style scoped lang="scss">
	@import '@/style/layouts/header/header-left.scss';
</style>
