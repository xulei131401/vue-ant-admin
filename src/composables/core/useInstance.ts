import { Ref } from 'vue'
import { error } from '@/utils'

export const getInstance = (customRef: Ref) => {
	const instance = unref(customRef)
	if (!instance) {
		error('useModalInner instance is undefined!')
	}

	return { instance }
}
