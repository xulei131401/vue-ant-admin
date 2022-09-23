<template>
	<div :class="getClass">
		<template v-for="item in colorList" :key="item">
			<span @click="onClick(item)" :class="getColorItemClass(item)" :style="getColorItemStyle(item)">
				<AntIcon name="CheckOutlined" color="#fff" v-if="item === color" />
			</span>
		</template>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'ThemeColorPick'
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'
import { useSetting } from '@/layouts/default/setting'
import { themeColorProps } from '../typing'

const { handler } = useSetting()
const { prefixCls } = usePrefixCls(prefixClsStyle.themeColorPick)

const getClass = computed(() => {
	return [prefixCls]
})

const props = defineProps(themeColorProps())
const getColorItemClass = computed(() => (color) => {
	return [
		`${prefixCls}__item`,
		{
			[`${prefixCls}__item--active`]: props.color === color
		}
	]
})

const getColorItemStyle = computed(() => (color) => {
	return {
		backgroundColor: color
	}
})

const onClick = (color: string) => {
	props.event && handler(props.event, color)
}
</script>

<style scoped lang="scss">
.#{$prefix-cls-theme-color-pick} {
	display: flex;
	flex-wrap: wrap;
	margin: 16px 0;
	justify-content: space-around;

	&__item {
		width: 20px;
		height: 20px;
		cursor: pointer;
		border: 1px solid #ddd;
		border-radius: 2px;

		&--active {
			border: 2px solid $primary-color;
		}
	}
}
</style>
