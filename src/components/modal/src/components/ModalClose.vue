<template>
	<div :class="getClass">
		<!--全屏icon-->
		<template v-if="canFullscreen">
			<ATooltip title="最大化" placement="bottom" v-if="fullScreen">
				<FullscreenExitOutlined role="full" @click="onFullScreen" />
			</ATooltip>
			<ATooltip title="还原" placement="bottom" v-else>
				<FullscreenOutlined role="close" @click="onFullScreen" />
			</ATooltip>
		</template>
		<!--关闭icon-->
		<ATooltip title="关闭" placement="bottom">
			<CloseOutlined @click="onCancel" />
		</ATooltip>
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'ModalClose'
})
</script>

<script setup lang="ts">
import { usePrefixCls } from '@/composables/core/useHtml'
import { prefixClsStyle } from '@/style/module'

const props = defineProps({
	canFullscreen: { type: Boolean, default: true },
	fullScreen: { type: Boolean }
})

const emits = defineEmits(['cancel', 'fullscreen'])

const { prefixCls } = usePrefixCls(prefixClsStyle.modalClose)

const getClass = computed(() => {
	return [
		prefixCls,
		`${prefixCls}--custom`,
		{
			[`${prefixCls}--can-full`]: props.canFullscreen
		}
	]
})

const onCancel = (e: Event) => {
	emits('cancel', e)
}

const onFullScreen = (e: Event) => {
	e?.stopPropagation()
	e?.preventDefault()
	emits('fullscreen')
}
</script>

<style scoped lang="scss">
// TODO: 等待日后完善样式
.#{$prefix-cls-modal-close} {
	display: flex;
	height: 95%;
	align-items: center;

	> span {
		margin-left: 10px;
		font-size: 16px;
	}

	// &--can-full {
	// 	> span {
	// 		margin-left: 8px;
	// 	}
	// }

	// &:not(&--can-full) {
	// 	> span:nth-child(1) {
	// 		&:hover {
	// 			font-weight: 700;
	// 		}
	// 	}
	// }

	// & span:nth-child(1) {
	// 	display: inline-block;
	// 	padding: 10px;

	// 	&:hover {
	// 		color: $primary-color;
	// 	}
	// }

	// & span:last-child {
	// 	&:hover {
	// 		color: $error-color;
	// 	}
	// }
}
</style>
