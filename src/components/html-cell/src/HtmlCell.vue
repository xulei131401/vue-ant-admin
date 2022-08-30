<template>
	<div v-html="text"></div>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XHtmlCell',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	type HtmlCellProps = {
		text: string
	}

	const props = defineProps<HtmlCellProps>()
</script>

<style scoped lang="scss"></style>
