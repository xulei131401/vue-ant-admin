<template>
	<div>
		<ATable @change="onChange" @expand="onExpand" :row-selection="rowSelection" :columns="columnsRef" :xVirtual="true" :scroll="{ x: 2000, y: 400 }" :pagination="false" :data-source="dataSourceRef">
			<!-- <template #headerCell="{column}">
				<HeaderCell :column="column" />
			</template> -->
		</ATable>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'TableContent'
})
</script>

<script setup lang="ts">
import { tableContentProps } from '../typing'
import { useTableContent } from '../composables'
const props = defineProps(tableContentProps())
const { columnsRef, dataSourceRef, rowSelection } = useTableContent(props)
const onChange = () => {
	console.log('分页、排序、筛选变化时触发')
}

const onExpand = () => {
	console.log('点击展开图标时触发')
}
</script>

<style scoped lang="scss"></style>
