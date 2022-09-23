import { createAsyncComponent } from '@/utils/factory/createAsyncComponent'
export * from './src/typing'

export const LayoutBreadcrumb = createAsyncComponent(() => import('./src/components/index.vue'), {
	loading: true
})
