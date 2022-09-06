<template>
	<div class="x-setting-drawer-wrapper">
		<a-drawer width="300" v-model:visible="visible" placement="right" @after-visible-change="afterVisibleChange">
			<template #title> 抽屉头部 </template>
			<div class="x-setting-drawer-content">
				<x-theme-color />
			</div>
			<template #handle>
				<div class="x-setting-drawer-handle" @click="toggleDrawer">
					<setting-outlined :style="{ color: '#fff' }" v-if="!visible" />
					<close-outlined :style="{ color: '#fff' }" v-else />
				</div>
			</template>
		</a-drawer>
	</div>
</template>
<script lang="ts">
export default {
	name: 'XSettingDrawer'
}
</script>
<script setup lang="ts">
import XThemeColor from '@/layouts/components/settings/ThemeColor.vue'

const visible = ref<boolean>(false)
const afterVisibleChange = (bool: boolean) => {
	console.log('visible', bool)
}

const toggleDrawer = () => {
	visible.value = !visible.value
}
</script>

<style scoped lang="scss">
.x-setting-drawer-handle {
	position: absolute;
	top: 210px;
	background: #1890ff;
	width: 48px;
	height: 48px;
	right: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	pointer-events: auto;
	z-index: 1001;
	text-align: center;
	font-size: 16px;
	border-radius: 4px 0 0 4px;
	i {
		color: rgb(255, 255, 255);
		font-size: 20px;
	}
}
</style>
