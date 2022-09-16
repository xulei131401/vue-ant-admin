<template>
	<ALayoutHeader :class="getClass">
		<HeaderLeft />
		<HeaderCenter />
		<HeaderRight />
	</ALayoutHeader>
</template>

<script lang="ts">
export default defineComponent({
	name: 'BasicLayoutHeader'
})
</script>

<script setup lang="ts">
import HeaderLeft from './HeaderLeft.vue'
import HeaderCenter from './HeaderCenter.vue'
import HeaderRight from './HeaderRight.vue'

import { usePrefixCls } from '@/composables/core/useHtml'
const { prefixCls } = usePrefixCls('basic-layout-header')

const props = defineProps({
	fixed: { type: Boolean, default: false }
})

const getClass = computed(() => {
	return [
		prefixCls,
		{
			[`${prefixCls}--fixed`]: props.fixed
		}
	]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/header/basic.scss';
</style>
