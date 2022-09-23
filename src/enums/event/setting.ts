export enum SettingHandler {
	None = 0, // js认为0是false，从而不触发事件
	// header
	HEADER_FIXED,
	HEADER_BG_COLOR
	// menu
}

export type SettingHandlerKey = keyof typeof SettingHandler
export type SettingHandlerValue = `${SettingHandler}`
