<template>
	<component :is="antIcons[name]" :style="getStyle" :spin="spin" />
</template>
<script lang="ts">
export default defineComponent({
	name: 'AntIcon',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import * as antIcons from '@ant-design/icons-vue'
import { PropType, CSSProperties } from 'vue'
import { isString } from '@/utils/is'

const props = defineProps({
	name: { type: String, required: true },
	spin: { type: Boolean },
	color: { type: String },
	size: {
		type: [String, Number] as PropType<string | number>,
		default: 16
	}
})

const getStyle = computed((): CSSProperties => {
	const { size, color } = props
	let sizeNumber = size
	if (isString(size)) {
		sizeNumber = parseInt(size, 10)
	}

	return {
		fontSize: `${sizeNumber}px`,
		color: color
	}
})
</script>

<style scoped lang="scss"></style>
