<template>
	<div ref="wrapperRef">
		<div ref="spinRef" :style="spinStyle" v-loading="loading" :loading-tip="loadingTip">
			<slot></slot>
		</div>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'ModalWrapper'
})
</script>

<script setup lang="ts">
const props = defineProps({
	loading: { type: Boolean },
	fullScreen: { type: Boolean },
	loadingTip: { type: String },
	visible: { type: Boolean },
	height: { type: Number },
	// useWrapper: {type: Boolean, default: true},
	// modalHeaderHeight: {type: Number, default: 57},
	// modalFooterHeight: {type: Number, default: 74},
	minHeight: { type: Number, default: 200 }

	// footerOffset: {type: Number, default: 0}
})

const spinStyle = computed(() => {
	return {
		// minHeight: `${props.minHeight}px`,
		// [props.fullScreen ? 'height' : 'maxHeight']: `${unref(realHeightRef)}px`
	}
})
</script>

<style scoped lang="scss"></style>
