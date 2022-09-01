<template>
	<div>
		<XPageLayout />
	</div>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XLayoutContent',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import XPageLayout from '@/layouts/page/index.vue'
</script>

<style scoped lang="scss"></style>
