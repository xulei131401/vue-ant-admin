<template>
	<slot></slot>
</template>
<script lang="ts">
export default defineComponent({
	name: 'm-app-provider'
})
</script>

<script setup lang="ts">
import { createAppProvide } from '@/composables/core/useAppProvide'
createAppProvide()
</script>

<style scoped lang="scss"></style>
