import { type ExtractPropTypes, type PropType } from 'vue'
import { modalProps } from './modalProps'

export const basicProps = () => {
	return Object.assign({}, modalProps(), {
		// 自定义props
		loading: { type: Boolean },
		loadingTip: { type: String },
		draggable: { type: Boolean, default: true },
		closeFunc: Function as PropType<() => Promise<boolean>>,
		showOkButton: { type: Boolean, default: true },
		showCancelButton: { type: Boolean, default: true }
	})
}

export type BasicProps = Partial<ExtractPropTypes<ReturnType<typeof basicProps>>>
