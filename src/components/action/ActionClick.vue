<template>
	<x-link v-bind="{text: action.text, link: action.url}" @linkClick="onClick" />
</template>
<script lang="ts">
	export default {
		name: 'XActionClick'
	}
</script>

<script setup lang="ts">
	import type {ColumnOperateAction} from '@/components/table'

	type ActionClickProps = {
		action: ColumnOperateAction
		record: any
	}

	const props = defineProps<ActionClickProps>()

	const onClick = () => {
		props.action.click!({record: props.record})
	}
</script>

<style scoped lang="scss"></style>
