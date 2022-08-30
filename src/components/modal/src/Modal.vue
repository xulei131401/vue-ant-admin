<template>
	<div>
		<a-modal v-model:visible="visible" title="Edit" @ok="onSubmit"> asdasd </a-modal>
	</div>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'XModal',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	const visible = ref(false)

	const onSubmit = () => {}
	const openModal = () => {
		visible.value = true
	}

	const closeModal = () => {
		visible.value = false
	}

	defineExpose({openModal, closeModal})
</script>

<style scoped lang="scss"></style>
