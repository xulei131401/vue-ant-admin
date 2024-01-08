<template>
	<div>{{ props.abc }}</div>
</template>
<script lang="ts">
export default defineComponent({
	name: '',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
const attrs = useAttrs()
const props = defineProps({
	abc: { type: Number }
	// abs: {type: Number, required: true}
})
console.log('attrs:', attrs)
console.log('props:', props, isReactive(props))
</script>

<style scoped lang="scss"></style>
