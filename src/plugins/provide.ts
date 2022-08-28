import type { InjectionKey } from 'vue'
import { log } from '@/business/utils/logx'
import type { TLog } from '@/business/utils/logx'

// 全局助手类型
type ApplicationHelper = {
	log: TLog
}

// 全局助手实例
const applicationHelper: ApplicationHelper = {
	log: log
}

// provide的key类型
const applicationHelperProvideKey = Symbol() as InjectionKey<ApplicationHelper>

export type { ApplicationHelper }

export {
	applicationHelper,
	applicationHelperProvideKey
}
