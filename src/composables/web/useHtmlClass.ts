import { useAppProviderContext } from '@/components/application'

export function useHtmlClass(scope: string) {
	const values = useAppProviderContext()

	return {
		prefixCls: `${values.prefixCls}-${scope}`,
		prefixVar: values.prefixCls
	}
}
