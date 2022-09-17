export const svgIconProps = () => {
	return {
		prefix: { type: String, default: '' },
		name: { type: String, required: true },
		size: { type: [Number, String], default: 16 },
		spin: { type: Boolean, default: false }
	}
}

export type SvgIconProps = VuePropsType<typeof svgIconProps>
