<template>
	<div>
		<HeaderTrigger v-if="sider" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutTriggerSider',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import HeaderTrigger from './components/HeaderTrigger.vue'

const sider = ref<boolean>(true)
</script>

<style scoped lang="scss"></style>
