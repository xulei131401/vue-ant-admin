<template>
	<div></div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'XUserDropdown'
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'

const { prefixCls } = usePrefixCls('header-user-dropdown')
</script>

<style scoped lang="scss"></style>
