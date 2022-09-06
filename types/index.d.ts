declare type VuePropsType<T extends (...args: any) => any> = Partial<ExtractPropTypes<ReturnType<T>>>
declare type VueNode = VNodeChild | JSX.Element
declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;
declare type Nullable<T> = T | null
declare type NonNullable<T> = T extends null | undefined ? never : T
declare type Recordable<T = any> = Record<string, T>
declare type ReadonlyRecordable<T = any> = {
	readonly [key: string]: T;
}
declare type Indexable<T = any> = {
	[key: string]: T;
}
declare type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
}
declare type TimeoutHandle = ReturnType<typeof setTimeout>
declare type IntervalHandle = ReturnType<typeof setInterval>
// // declare module '*.svg'
// // declare module '*.png'
// // declare module '*.jpg'
// // declare module '*.jpeg'
// // declare module '*.gif'
// // declare module '*.bmp'
// // declare module '*.tiff'
// // declare module '*.yaml'
// // declare module '*.json'

// declare interface Fn<T = any, R = T> {
// 	(...arg: T[]): R;
// }

// declare interface PromiseFn<T = any, R = T> {
// 	(...arg: T[]): Promise<R>;
// }

// declare type RefType<T> = T | null;

// declare type LabelValueOptions = {
// 	label: string;
// 	value: any;
// 	[key: string]: string | number | boolean;
// }[];

// declare type EmitType = (event: string, ...args: any[]) => void;

// declare type TargetContext = '_self' | '_blank';

// declare interface ComponentElRef<T extends HTMLElement = HTMLDivElement> {
// 	$el: T;
// }

// declare type ComponentRef<T extends HTMLElement = HTMLDivElement> = ComponentElRef<T> | null;

// declare type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>;
