import { type ActionClickProps } from '../typing/actionClickProps'

export function useActionClick(props: ActionClickProps) {
	const onClick = () => {
		props.action!.click!({ record: props.record })
	}
	return { onClick }
}
