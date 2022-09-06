<template>
	<div></div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'XUserDropdown',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { useHtmlClass } from '@/composables/web/useHtmlClass'

const { prefixCls } = useHtmlClass('header-user-dropdown')
</script>

<style scoped lang="scss"></style>
