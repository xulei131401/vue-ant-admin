import { type ActionGroupProps } from '../typing/actionGroupProps'

export function useActionGroup(props: ActionGroupProps) {
	const actionsRef = props.actions ?? []

	watch(
		() => props.column,
		(newColumns) => {
			// console.log('action-newColumns:', props)
		},
		{ deep: true, immediate: true }
	)

	return { actionsRef }
}
