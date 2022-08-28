import { applicationHelperProvideKey } from '@/business/export'
import type { ApplicationHelper } from '@/business/export'

export function useGlobalUse() {
	const helper = inject(applicationHelperProvideKey) as ApplicationHelper
	return { helper }
}
