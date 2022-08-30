import type { ExtractPropTypes, PropType } from 'vue';

export const modalProps = () => ({
	// options: { type: Object as PropType<Options>, default: defaultOptions() },
})

export type ModalProps = Partial<ExtractPropTypes<ReturnType<typeof modalProps>>>
