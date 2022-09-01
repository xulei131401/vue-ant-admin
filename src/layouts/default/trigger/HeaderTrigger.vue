<template>
	<div class="fold-menu-wrapper">
		<menu-unfold-outlined v-if="collapsed" class="trigger" @click="fold" />
		<menu-fold-outlined v-else class="trigger" @click="fold" />
	</div>
</template>
<script lang="ts">
	export default defineComponent({
		name: 'HeaderTrigger',
		inheritAttrs: false
	})
</script>

<script setup lang="ts">
	import {emitter} from '@/business/export'

	const collapsed = ref<boolean>(false)

	const fold = () => {
		collapsed.value = !collapsed.value
		emitter.emit('event_fold_sider', collapsed.value)
	}
</script>

<style scoped lang="scss"></style>
