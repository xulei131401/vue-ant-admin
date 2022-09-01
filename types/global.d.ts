import type { ComputedRef, Ref } from 'vue';

declare global {
	export type DynamicProps<T> = {
		[P in keyof T]: Ref<T[P]> | T[P] | ComputedRef<T[P]>;
	};

	declare type Nullable<T> = T | null;
	declare type NonNullable<T> = T extends null | undefined ? never : T;
	declare type Recordable<T = any> = Record<string, T>;
	declare type ReadonlyRecordable<T = any> = {
		readonly [key: string]: T;
	};
	declare type Indexable<T = any> = {
		[key: string]: T;
	};
	declare type DeepPartial<T> = {
		[P in keyof T]?: DeepPartial<T[P]>;
	};
	declare type TimeoutHandle = ReturnType<typeof setTimeout>;
	declare type IntervalHandle = ReturnType<typeof setInterval>;
}
