<template>
	<slot></slot>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XAppProvider',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import {createDefaultAppProviderContext} from './useAppContext'
	createDefaultAppProviderContext()
</script>

<style scoped lang="scss"></style>
