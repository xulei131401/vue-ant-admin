<template>
	<div class="x-theme-color-wrapper">
		<div :style="{ marginBottom: '24px' }">
			<h3>主题色</h3>
			<div style="height: 20px">
				<a-tooltip placement="topLeft" class="x-theme-color-colorBlock" v-for="(item, index) in refColorList" :key="index">
					<template #title>
						{{ item.key }}
					</template>
					<a-tag :color="item.color" @click="changeColor(item.color)">
						<template #icon>
							<check-outlined :style="{ fontSize: '18px' }" v-if="item.color == primaryColor" />
						</template>
					</a-tag>
				</a-tooltip>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	name: 'XThemeColor'
}
</script>
<script setup lang="ts">
import { colorList } from './color'
const primaryColor = ref<string>('#F5222D')
const changeColor = (color: string) => {}
const refColorList = ref(colorList)
</script>

<style scoped lang="scss">
.x-theme-color-wrapper {
	:deep(.x-theme-color-colorBlock) {
		width: 20px;
		height: 20px;
		border-radius: 2px;
		float: left;
		cursor: pointer;
		margin-right: 8px;
		padding-left: 0px;
		padding-right: 0px;
		text-align: center;
		color: #fff;
		font-weight: 700;
		i {
			font-size: 14px;
		}
	}
}
</style>
