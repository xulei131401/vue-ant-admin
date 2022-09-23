import { type ActionClickProps } from '../props/actionClickProps'

export function useActionClick(props: ActionClickProps) {
	const onClick = () => {
		props.action!.click!({ record: props.record })
	}
	return { onClick }
}
