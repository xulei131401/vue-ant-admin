<template>
	<ADrawer :class="prefixCls" @close="onClose" v-bind="getBindValues">
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
	name: 'BasicDrawer',
	inheritAttrs: false
})
</script>

<script setup lang="ts">
import DrawerFooter from './components/DrawerFooter.vue'
import DrawerHeader from './components/DrawerHeader.vue'
import DrawerContent from './components/DrawerContent.vue'
import { usePrefixCls } from '@/composables/core/useHtml'
import { basicDrawerProps, DrawerProps } from './props'
import { isFunction } from '@/utils/is'
const props = defineProps(basicDrawerProps())
const visibleRef = ref<boolean>(false)
const { prefixCls, prefixVar } = usePrefixCls('basic-drawer')
const emits = defineEmits(['visible-change', 'ok', 'close', 'register'])

watch(
	() => props.visible,
	(newVal, oldVal) => {
		visibleRef.value = newVal
	},
	{ deep: true, immediate: true }
)

const getBindValues = computed((): DrawerProps => {
	return {
		placement: 'right',
		visible: unref(visibleRef)
	}
})

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
</script>

<style scoped lang="scss"></style>
