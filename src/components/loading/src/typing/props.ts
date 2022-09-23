import { PropType } from 'vue'
import { SizeEnum } from '@/enums'

export const loadingProps = () => {
	return {
		tip: { type: String as PropType<string>, default: '' },
		size: {
			type: String as PropType<SizeEnum>,
			default: SizeEnum.LARGE,
			validator: (v: SizeEnum): boolean => {
				return [SizeEnum.DEFAULT, SizeEnum.SMALL, SizeEnum.LARGE].includes(v)
			}
		},
		absolute: { type: Boolean as PropType<boolean>, default: false },
		loading: { type: Boolean as PropType<boolean>, default: false },
		background: { type: String as PropType<string> },
		theme: { type: String as PropType<'dark' | 'light'> }
	}
}

export type LoadingProps = VuePropsType<typeof loadingProps>
