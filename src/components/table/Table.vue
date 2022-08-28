<template>
	<s-table :columns="xColumns" :scroll="{y: 400}" :pagination="false" :data-source="dataSource">
		<template #bodyCell="{column, text, record}">
			<template v-if="column.dataIndex === '__action__'">
				<x-action-group v-bind="{column, text, record}" />
			</template>
		</template>
	</s-table>
</template>
<script lang="ts">
	export default {
		name: 'xTable'
	}
</script>

<script setup lang="ts">
	import {useTable, buildColumns} from '@/composables/useTable'
	import {STableColumnProps} from '@surely-vue/table'
	import {TableOptions, TableProps, ColumnOption} from '@/components/table'

	type TableProps = {
		options: TableOptions
		columns: ColumnOption[]
		dataSource?: any[]
	}

	const {helper} = useTable()
	const xColumns = ref<STableColumnProps[]>([])
	const props = defineProps<TableProps>()

	watch(
		() => props.columns,
		(newColumns) => {
			xColumns.value = buildColumns(newColumns)
		},
		{deep: true, immediate: true}
	)
</script>

<style scoped lang="scss"></style>
