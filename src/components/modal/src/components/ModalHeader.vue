<template>
	<div>
		{{ title }}
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'ModalHeader',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
defineProps({
	title: { type: String }
})
</script>

<style scoped lang="scss"></style>
