<template>
	<SvgIcon :name="name" />
</template>
<script lang="ts">
export default defineComponent({
	name: 'CustomIcon'
})
</script>

<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
defineProps({
	name: { type: String, required: true }
})
</script>

<style scoped lang="scss"></style>
