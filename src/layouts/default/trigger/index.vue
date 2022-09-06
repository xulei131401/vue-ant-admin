<template>
	<SiderTrigger v-if="sider" />
	<HeaderTrigger v-else :theme="theme" />
</template>
<script lang="ts">
export default defineComponent({
	name: 'Trigger',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import HeaderTrigger from './HeaderTrigger.vue'
import SiderTrigger from './SiderTrigger.vue'

const sider = true
const theme = false
</script>

<style scoped lang="scss"></style>
