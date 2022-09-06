<template>
	<div>
		<FullScreen />
		<AppLocalePicker />
		<UserDropdown />
		<SettingDrawer />
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'HeaderRight',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { UserDropdown, FullScreen } from '../index'
import SettingDrawer from '@/layouts/default/setting/index.vue'
import { AppLocalePicker } from '@/components/application'
</script>

<style scoped lang="scss"></style>
