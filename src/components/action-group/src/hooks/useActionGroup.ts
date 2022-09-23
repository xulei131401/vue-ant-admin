import { type ActionGroupProps } from '../actionGroupProps'

export function useActionGroup(props: ActionGroupProps) {
	const xActions = props.actions ?? []

	watch(
		() => props.column,
		(newColumns) => {
			// console.log('action-newColumns:', props)
		},
		{ deep: true, immediate: true }
	)

	return { xActions }
}
