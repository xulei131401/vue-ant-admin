<template>
	<div>
		<div>报名学生</div>
		<XSS />
		<x-table v-bind="tableProps" />
		<x-modal ref="modal" />
	</div>
</template>

<script lang="ts">
export default {
	name: 'StudentSignUp'
}
</script>

<script setup lang="ts" name="StudentSignUp">
// import XTT from './TT.vue'
import XSS from './XSS.vue'
import { useMockTable } from '@/views/composables/useTableMockData'
const { modal, tableProps } = useMockTable()
</script>

<style scoped lang="scss"></style>
