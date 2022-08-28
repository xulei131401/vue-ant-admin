import { emitter } from '@/business/export'

export function useMenuFold() {
	const collapsed = ref<boolean>(false)
	const fold = (e: boolean) => {
		collapsed.value = e
	}

	onMounted(() => {
		emitter.on('event_fold_sider', fold)
	})

	onUnmounted(() => {
		emitter.off('event_fold_sider', fold)
	})

	return { collapsed }
}
