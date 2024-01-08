<template>
	<div>
		<TableContent v-bind="content" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'BasicTable'
})
</script>

<script setup lang="ts">
import { TableContent } from '@/components/table-content'
import { basicTableProps } from '../typing'
defineProps(basicTableProps())
</script>

<style scoped lang="scss"></style>
