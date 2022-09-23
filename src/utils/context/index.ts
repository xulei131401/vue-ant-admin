import { type InjectionKey, readonly as VueReadOnly } from 'vue'

export type CreateContextOptions = {
	isReactive?: boolean
	readonly?: boolean
}

/**
 * 创建provide
 * @param context
 * @param key
 * @param options
 */
export const createProvide = <T>(context: any, key: InjectionKey<T> = Symbol(), options: CreateContextOptions = {}): void => {
	const { readonly = true, isReactive = true } = options
	context = unref(context)
	let provideData = reactive(context)
	if (!isReactive) {
		provideData = context
	}

	if (readonly) {
		provideData = VueReadOnly(context)
	}

	provide(key, provideData)
}

/**
 * 创建inject
 * @param key
 * @returns
 */
export const createInject = <T>(key: InjectionKey<T>): T => {
	return inject(key) as T
}
