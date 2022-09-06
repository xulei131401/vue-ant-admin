import { BasicProps } from '../props'
import { isFunction } from '@/utils/is'
import { useFullScreen } from './useModalFullScreen'

export function useBasicModal(props: BasicProps, emits) {
	const visibleRef = ref(false)

	const onOk = (e: Event) => {
		emits('ok', e)
	}

	const openModal = () => {
		visibleRef.value = true
	}

	const closeModal = () => {
		visibleRef.value = false
	}

	const onCancel = async (e: Event) => {
		e?.stopPropagation()
		if (props.closeFunc && isFunction(props.closeFunc)) {
			const _isClose: boolean = await props.closeFunc()
			visibleRef.value = !_isClose
			return
		}

		visibleRef.value = false
		emits('cancel', e)
	}

	// const { handleFullScreen } = useFullScreen({});

	const getBindValue = computed(() => {
		return {
			...unref(props),
			visible: unref(visibleRef)
		}
	})

	watchEffect(() => {
		visibleRef.value = !!props.visible
	})

	return { getBindValue, visibleRef, onOk, openModal, closeModal, onCancel }
}
