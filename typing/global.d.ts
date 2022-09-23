import { type VNodeChild, type ExtractPropTypes } from 'vue'

declare global {
	// declare module '*.svg'
	// declare module '*.png'
	// declare module '*.jpg'
	// declare module '*.jpeg'
	// declare module '*.gif'
	// declare module '*.bmp'
	// declare module '*.tiff'
	// declare module '*.yaml'
	// declare module '*.json'

	// 重点使用类型
	type Nullable<T> = T | null | undefined
	type Recordable<T = any> = Record<string, T>
	type ReadonlyRecordable<T = any> = {
		readonly [key: string]: T
	}

	type Indexable<T = any> = {
		[key: string]: T
	}

	type DeepPartial<T> = {
		[P in keyof T]?: DeepPartial<T[P]>
	}

	type TimeoutHandle = ReturnType<typeof setTimeout>
	type IntervalHandle = ReturnType<typeof setInterval>
	type VuePropsType<T extends (...args: any) => any> = Partial<ExtractPropTypes<ReturnType<T>>>

	// 有待确认
	type VueNode = VNodeChild | JSX.Element
	interface Fn<T = any, R = T> {
		(...arg: T[]): R
	}
}
