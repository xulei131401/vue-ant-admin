<template>
	<ADrawer @close="onClose" v-bind="getBindValues">
		<!--支持自定义header-->
		<template #title v-if="!$slots.title">
			<DrawerHeader :title="title" @close="onClose">
				<template #titleToolbar>
					<slot name="titleToolbar"></slot>
				</template>
			</DrawerHeader>
		</template>
		<template v-else #title>
			<slot name="title"></slot>
		</template>

		<!--内容区域-->
		<DrawerContent>
			<slot></slot>
		</DrawerContent>
		<!--支持自定义footer-->
		<DrawerFooter @close="onClose" @ok="onOk">
			<template #[item]="data" v-for="item in Object.keys($slots)">
				<slot :name="item" v-bind="data || {}"></slot>
			</template>
		</DrawerFooter>
	</ADrawer>
</template>
<script lang="ts">
export default defineComponent({
	name: 'BasicDrawer'
})
</script>

<script setup lang="ts">
import DrawerFooter from './DrawerFooter.vue'
import DrawerHeader from './DrawerHeader.vue'
import DrawerContent from './DrawerContent.vue'
import { basicDrawerProps, DrawerProps } from '../typing'
import { isFunction } from '@/utils'

const props = defineProps(basicDrawerProps())
const visibleRef = ref<boolean>(props.visible)
const emits = defineEmits(['visible-change', 'ok', 'close', 'register'])

const getBindValues = computed((): DrawerProps => {
	return {
		placement: 'right',
		visible: unref(visibleRef)
	}
})

const onToggle = () => {
	visibleRef.value = !visibleRef.value
}

/**
 * footer ok事件
 */
const onOk = async () => {
	emits('ok')
}

/**
 * 关闭事件
 */
async function onClose(e: Recordable) {
	emits('close', e)
	visibleRef.value = await onCloseFunc()
}

/**
 * props-closeFunc处理
 */
const onCloseFunc = async () => {
	const { closeFunc } = unref(props)
	if (closeFunc && isFunction(closeFunc)) {
		const res = await closeFunc()
		return !res
	}

	return false
}

defineExpose({ onToggle })
</script>

<style scoped lang="scss"></style>
