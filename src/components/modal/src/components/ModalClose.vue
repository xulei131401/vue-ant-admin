<template>
	<div :class="getModalCloseClass">
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
	name: 'ModalClose',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import { useHtmlClass } from '@/composables/web/useHtmlClass'

const props = defineProps({
	canFullscreen: { type: Boolean, default: true },
	fullScreen: { type: Boolean }
})

const emits = defineEmits(['cancel', 'fullscreen'])

const { prefixCls } = useHtmlClass('modal-close')

const getModalCloseClass = computed(() => {
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
@import '@/style/components/modal/modal-close.scss';
</style>
