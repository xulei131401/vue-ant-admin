import type { InjectionKey } from 'vue'
import { log } from '@/business/utils/logx'
import type { TLog } from '@/business/utils/logx'

// 全局助手类型
export type ApplicationHelper = {
	log: TLog
}

// 全局助手实例
export const applicationHelper: ApplicationHelper = {
	log: log
}

// provide的key类型
export const applicationHelperProvideKey = Symbol() as InjectionKey<ApplicationHelper>
