<template>
	<div>
		<div>
			<XFullScreen />
			<XUserDropdown />
		</div>
	</div>
</template>
<script lang="ts">
	export default defineComponent({
		name: '',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import {XUserDropdown, XFullScreen} from '../index'
</script>

<style scoped lang="scss"></style>
