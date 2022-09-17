<template>
	<div :class="getClass">
		<AppLogo v-if="showHeaderAppLogo" :theme="getTheme" />
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
import { AppLogo } from '@/components/application'
import { LayoutTriggerSider } from '@/layouts/default/trigger'
import { LayoutBreadcrumb } from '../index'
import { usePrefixCls } from '@/composables/core/useHtml'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { useAppConfig } from '@/composables/config/useAppConfig'

const { prefixCls } = usePrefixCls('layout-header-left')
const { showHeaderAppLogo } = useHeaderConfig()
const { getTheme } = useAppConfig()
const getClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/header/header-left.scss';
</style>
