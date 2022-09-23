<template>
	<div v-html="text"></div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'HtmlCell'
})
</script>

<script setup lang="ts">
import { htmlCellProps } from '../typing'

defineProps(htmlCellProps())
</script>

<style scoped lang="scss"></style>
