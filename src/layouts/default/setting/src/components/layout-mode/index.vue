<template>
	<div :class="prefixCls">
		<template v-for="item in items || []" :key="item.title">
			<ATooltip :title="item.title" placement="bottom">
				<div @click="handler(item)" :class="getItemClass(item)"></div>
			</ATooltip>
		</template>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'LayoutModePick'
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
import { layoutModeProps } from './props'
import { type LayoutModeItem } from './useLayoutMode'
const { prefixCls } = usePrefixCls('setting-layout-mode-pick')
const props = defineProps(layoutModeProps())

const getItemClass = (item: LayoutModeItem) => {
	return [
		`${prefixCls}__item`,
		`${prefixCls}__item--${item.mode}`,
		{
			[`${prefixCls}__item--active`]: props.mode === item.mode
		}
	]
}
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-setting-layout-mode-pick';
$top-bottom: 'top_bottom_layout';
$left-right: 'left_right_layout';

.#{$prefix-cls} {
	display: flex;

	&__item {
		position: relative;
		width: 56px;
		height: 48px;
		margin-right: 16px;
		overflow: hidden;
		cursor: pointer;
		background-color: #f0f2f5;
		border-radius: 4px;
		box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);

		&::before,
		&::after {
			position: absolute;
			content: '';
		}

		&--dark {
			background-color: #273352;
		}

		&:hover,
		&--active {
			padding: 12px;
			border: 2px solid $primary-color;
			border-radius: 6px;
		}

		&--#{$top-bottom} {
			&::before {
				top: 0;
				left: 0;
				width: 33%;
				height: 100%;
				background-color: #fff;
				border-radius: 4px 0 0 4px;
			}

			&::after {
				top: 0;
				left: 0;
				z-index: 1;
				width: 100%;
				height: 25%;
				background-color: #273352;
			}
		}

		&--#{$left-right} {
			&::before {
				top: 0;
				left: 0;
				z-index: 1;
				width: 33%;
				height: 100%;
				background-color: #273352;
				border-radius: 4px 0 0 4px;
			}

			&::after {
				top: 0;
				left: 0;
				width: 100%;
				height: 25%;
				background-color: #fff;
			}
		}
	}

	img {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
}
</style>
