<template>
	<ContentFillBlank />
	<PageLayout />
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutContent',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import PageLayout from '@/layouts/page/index.vue'
import ContentFillBlank from './components/ContentFillBlank.vue'
</script>

<style scoped lang="scss"></style>
