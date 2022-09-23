export const htmlCellProps = () => {
	return {
		text: { type: String }
	}
}

export type HtmlCellProps = VuePropsType<typeof htmlCellProps>
