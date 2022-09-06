<template>
	<div>
		<ASpin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'Loading',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { loadingProps } from './props'
defineProps(loadingProps())
</script>

<style scoped lang="scss"></style>
