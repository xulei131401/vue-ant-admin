import { InjectionKey } from 'vue'
import { createContext, useContext } from '@/composables/core/useContext'

import { log } from '@/business/utils/logx'
import type { TLog } from '@/business/utils/logx'
import { prefixCls as DefaultPrefixCls } from '@/configs/settings/designSetting'

interface AppProviderContextProps {
	prefixCls: string // 样式前缀
	log: TLog;
}

const key: InjectionKey<AppProviderContextProps> = Symbol();

export function createDefaultAppProviderContext() {
	createAppProviderContext({ prefixCls: DefaultPrefixCls, log: log })
}

export function createAppProviderContext(context: AppProviderContextProps) {
	return createContext<AppProviderContextProps>(context, key);
}

export function useAppProviderContext() {
	return useContext<AppProviderContextProps>(key);
}




