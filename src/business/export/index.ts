/**
 * 统一管理项目的import语句，主要是用在业务层，框架代码该怎么用还怎么用
 */

console.info('-------加载公共模块-------')

// vue-router
export * from 'vue-router'

// emitter
export { default as emitter } from '@/business/utils/emitter'

// 公共类型导出
export * from '@/business/menu/tabPane'

// 全局工具函数
const toolx = {}
export { toolx }

// store的引入
export * from '@/store/modules/app'

// menu
export * from '@/business/menu/menu'

export * from '@/business/menu/secondLevelMenu'
