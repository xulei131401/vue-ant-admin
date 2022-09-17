<template>
	<slot></slot>
</template>
<script lang="ts">
export default defineComponent({
	name: 'AppProvider',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { createDefaultAppProviderContext } from '../composables/useAppContext'
createDefaultAppProviderContext()
</script>

<style scoped lang="scss"></style>
