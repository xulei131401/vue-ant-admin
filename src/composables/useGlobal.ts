import { applicationHelperProvideKey } from '@/business/export'
import type { ApplicationHelper } from '@/business/export'

export function useInjectHelper() {
	return inject(applicationHelperProvideKey) as ApplicationHelper
}
