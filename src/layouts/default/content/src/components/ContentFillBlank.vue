<template>
	<div :class="getFillBlankClass"></div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'XContentFillBlank',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
const { prefixCls } = usePrefixCls('layout-content-fill-blank')
const getFillBlankClass = computed(() => {
	return [prefixCls]
})
</script>

<style scoped lang="scss">
@import '@/style/layouts/content/fill-blank.scss';
</style>
