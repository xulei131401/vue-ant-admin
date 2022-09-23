<template>
	<div @click="onClickDrawer">
		<AntIcon name="SettingOutlined" :size="16" />
		<SettingDrawer ref="settingDrawerRef" />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'SettingButton'
})
</script>

<script setup lang="ts">
import AntIcon from '@/components/icon/src/components/AntIcon.vue'
import { SettingDrawer } from '@/layouts/default/app'

const settingDrawerRef = ref()
const onClickDrawer = () => {
	unref(settingDrawerRef).onClickDrawer()
}
</script>

<style scoped lang="scss"></style>
