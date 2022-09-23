<template>
	<div :class="getClass">
		<FullScreen :class="`${prefixCls}__item`" />
		<AppLocale :class="`${prefixCls}__item`" />
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
import { UserDropdown, FullScreen } from '@/layouts/default/app'
import { SettingButton } from '@/layouts/default/setting'
import { AppLocale } from '@/layouts/default/app'
import { useHeaderConfig } from '@/composables/config/useHeaderConfig'
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const { prefixCls } = usePrefixCls(prefixClsStyle.layoutHeaderRight)
const { getHeaderTheme } = useHeaderConfig()

const getClass = computed(() => {
	const theme = unref(getHeaderTheme)
	return [
		prefixCls,
		{
			[`${prefixCls}--${theme}`]: theme
		}
	]
})
</script>

<style scoped lang="scss">
.#{$prefix-cls-layout-header-right} {
	display: flex;
	min-width: 180px;
	justify-content: right;
	align-items: center;

	&__item {
		display: flex !important;
		height: $header-height;
		padding: 0 5px;
		font-size: 1.2em;
		cursor: pointer;
		align-items: center;
	}

	.#{$prefix-cls-layout-header-right}__item {
		&:hover {
			background-color: $header-theme-bg-hover-color;
		}
	}
}
</style>
