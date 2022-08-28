<template>
	<div v-if="xActions.length > 0">
		<template v-for="(action, index) in xActions">
			<span>
				<x-action-click v-if="action.type == 'click'" v-bind="{action, record}" />
			</span>
		</template>
		<!-- <span v-if="moreActions.length > 0 || idx < thisActions.length - 1" style="margin: 0 2px">|</span> -->
	</div>
</template>
<script lang="ts">
	export default {
		name: 'XActionGroup'
	}
</script>

<script setup lang="ts">
	// import type {ColumnOperateAction} from '@/components/table'

	type ActionGroupProps = {
		column: any
		record: any
	}

	const props = defineProps<ActionGroupProps>()
	const xActions = toRef(props.column, 'xActions')

	watch(
		() => props.column,
		(newColumns) => {
			// console.log('action-newColumns:', props)
		},
		{deep: true, immediate: true}
	)
</script>

<style scoped lang="scss"></style>
