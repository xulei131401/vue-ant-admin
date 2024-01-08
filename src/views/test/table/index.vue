<template>
	<div>
		<BasicTable v-bind="tableProps" />
		<a-table :loading="true" />
		<ATableTestVue />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'TestBasicTable'
})
</script>

<script setup lang="ts">
import ATableTestVue from './ATableTest.vue'
import { useMockTable } from './useTableMockData'
const { tableProps } = useMockTable()
</script>

<style scoped lang="scss"></style>
