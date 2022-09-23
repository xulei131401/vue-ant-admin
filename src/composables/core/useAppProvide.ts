import { InjectionKey } from 'vue'
import { createProvide, createInject, log, type TLog } from '@/utils'

const key: InjectionKey<AppProviderContext> = Symbol()
type AppProviderContext = {
	log: TLog
}

export function createAppProvide() {
	const context = { log: log }
	return createProvide<AppProviderContext>(context, key)
}

export function useAppProvide() {
	return createInject<AppProviderContext>(key)
}
