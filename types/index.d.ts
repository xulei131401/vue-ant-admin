declare type VuePropsType<T extends (...args: any) => any> = Partial<ExtractPropTypes<ReturnType<T>>>
declare type VueNode = VNodeChild | JSX.Element
declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null
declare type Nullable<T> = T | null
declare type NonNullable<T> = T extends null | undefined ? never : T
declare type Recordable<T = any> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
	readonly [key: string]: T
}
declare type Indexable<T = any> = {
	[key: string]: T
}
declare type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>
}
declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type IntervalHandle = ReturnType<typeof setInterval>

declare interface Fn<T = any, R = T> {
	(...arg: T[]): R
}
