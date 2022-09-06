import type { ExtractPropTypes, PropType } from 'vue'
import type { Action } from '../actionGroupProps'

export const actionClickProps = () => ({
	action: { type: Object as PropType<Action>, default: {} },
	record: { type: Object as PropType<any>, default: {} }
})

export type ActionClickProps = Partial<ExtractPropTypes<ReturnType<typeof actionClickProps>>>
