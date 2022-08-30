<template>
	<div>
		<s-table :row-selection="xRowSelection" :columns="xColumns" :scroll="{y: 400}" :pagination="false" :data-source="xDataSource">
			<!-- <template #headerCell="{column}">
				<HeaderCell :column="column" />
			</template> -->
			<template #bodyCell="{column, text, record}">
				<slot name="bodyCell" v-bind="{column, text, record}"></slot>
			</template>
		</s-table>
	</div>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XTable',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import {tableProps} from './tableProps'
	import {useTable} from './hooks/useTable'
	import HeaderCell from './components/HeaderCell.vue'
	const props = defineProps(tableProps())
	const {xColumns, xDataSource, xRowSelection} = useTable(props)
</script>

<style scoped lang="scss"></style>
