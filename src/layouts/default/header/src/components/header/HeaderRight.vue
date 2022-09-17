<template>
	<div :class="getClass">
		<FullScreen :class="`${prefixCls}__item`" />
		<AppLocalePicker :class="`${prefixCls}__item`" />
		<UserDropdown :class="`${prefixCls}__item`" />
		<SettingButton :class="`${prefixCls}__item`" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'HeaderRight'
})
</script>

<script setup lang="ts">
import { UserDropdown } from '../index'
import { FullScreen } from '../index'
import { SettingButton } from '@/layouts/default/setting'
import { AppLocalePicker } from '@/components/application'
import { usePrefixCls } from '@/composables/core/useHtml'
import { useAppConfig } from '@/composables/config/useAppConfig'

const { prefixCls } = usePrefixCls('layout-header-right')
const { getTheme } = useAppConfig()

const getClass = computed(() => {
	const theme = unref(getTheme)
	return [
		prefixCls,
		{
			[`${prefixCls}--${theme}`]: theme
		}
	]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/header/header-right.scss';
</style>
