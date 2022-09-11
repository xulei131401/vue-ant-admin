<template>
	<div :class="getHeaderRightClass">
		<FullScreen :class="`${prefixCls}__item`" />
		<AppLocalePicker :class="`${prefixCls}__item`" />
		<UserDropdown :class="`${prefixCls}__item`" />
		<SettingButton :class="`${prefixCls}__item`" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'HeaderRight',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { UserDropdown, FullScreen } from '../index'
import { SettingButton } from '@/layouts/default/setting'
import { AppLocalePicker } from '@/components/application'
import { usePrefixCls } from '@/composables/core/useHtml'

const { prefixCls } = usePrefixCls('layout-header-right')
const getHeaderRightClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/header/header-right.scss';
</style>
