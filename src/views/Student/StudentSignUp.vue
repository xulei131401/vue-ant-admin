<template>
	<div>
		<div>报名学生</div>
		<x-table v-bind="props" />
		<x-modal ref="modal" />
		<x-modal ref="modal1" />
	</div>
</template>

<script lang="ts">
	export default {
		name: 'StudentSignUp'
	}
</script>

<script setup lang="ts">
	import {useTableMockData} from '@/composables/useTableMockData'
	const {modal, props} = useTableMockData()
</script>

<style scoped lang="scss"></style>
