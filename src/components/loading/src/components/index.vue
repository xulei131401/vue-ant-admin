<template>
	<div>
		<ASpin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'Loading'
})
</script>

<script setup lang="ts">
import { loadingProps } from '../typing'
defineProps(loadingProps())
</script>

<style scoped lang="scss"></style>
