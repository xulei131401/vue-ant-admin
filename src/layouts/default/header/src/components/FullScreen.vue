<template>
	<ATooltip :title="title" placement="bottom" :mouseEnterDelay="0.5">
		<span @click="toggle">
			<FullscreenOutlined v-if="!isFullscreen" />
			<FullscreenExitOutlined v-else />
		</span>
	</ATooltip>
</template>
<script lang="ts">
export default defineComponent({
	name: 'FullScreen'
})
</script>

<script setup lang="ts">
const title = ref('全屏')
const isFullscreen = ref(true)
const toggle = () => {}
</script>

<style scoped lang="scss"></style>
