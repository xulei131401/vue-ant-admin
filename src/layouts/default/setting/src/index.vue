<template>
	<div @click="openDrawer(true)">
		<AntIcon name="SettingOutlined" :size="16" />
		<SettingDrawer />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SettingButton'
})
</script>

<script setup lang="ts">
import AntIcon from '@/components/icon/src/components/AntIcon.vue'
import SettingDrawer from './components/SettingDrawer.vue'
</script>

<style scoped lang="scss"></style>
